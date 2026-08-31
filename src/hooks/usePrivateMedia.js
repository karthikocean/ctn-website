import { useState, useEffect } from 'react';
import { getPrivateMediaUrl, isRelativeMediaPath } from '../apis/mediaApi';

/**
 * Custom React hook to resolve a temporary private AWS S3 URL.
 * Automatically utilizes in-memory caching and request deduplication.
 *
 * @param {string} src - The media path (e.g. '/blogs/media-123.jpg') or static asset / external URL
 * @param {string} [fallback] - Fallback URL / imported image if loading fails or src is empty
 * @returns {{ mediaUrl: string, loading: boolean, error: any }}
 */
export const usePrivateMedia = (src, fallback = '') => {
  const isRelative = isRelativeMediaPath(src);
  const [resolvedState, setResolvedState] = useState({
    src,
    url: !src ? fallback : (!isRelative ? src : ''),
    loading: Boolean(src && isRelative),
    error: null,
  });

  useEffect(() => {
    if (!src || !isRelativeMediaPath(src)) {
      return;
    }

    let isCancelled = false;

    getPrivateMediaUrl(src)
      .then((signedUrl) => {
        if (!isCancelled) {
          setResolvedState({
            src,
            url: signedUrl || fallback,
            loading: false,
            error: null,
          });
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.warn(`[usePrivateMedia] Failed to load private media "${src}":`, err?.message || err);
          setResolvedState({
            src,
            url: fallback,
            loading: false,
            error: err,
          });
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [src, fallback]);

  const currentUrl = resolvedState.src === src
    ? (resolvedState.url || fallback)
    : (!src ? fallback : (!isRelative ? src : fallback));

  const currentLoading = resolvedState.src === src ? resolvedState.loading : Boolean(src && isRelative);
  const currentError = resolvedState.src === src ? resolvedState.error : null;

  return { mediaUrl: currentUrl, loading: currentLoading, error: currentError };
};

export default usePrivateMedia;
