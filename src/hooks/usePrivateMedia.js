import { useState, useEffect } from 'react';
import { getPrivateMediaUrl, isRelativeMediaPath, normalizeMediaPath } from '../apis/mediaApi';
import { SERVER_URL } from '../config/config';

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

  const getInitialUrl = (mediaSrc) => {
    if (!mediaSrc) return fallback;
    if (!isRelativeMediaPath(mediaSrc)) return mediaSrc;
    return `${SERVER_URL}${normalizeMediaPath(mediaSrc)}`;
  };

  const [resolvedState, setResolvedState] = useState({
    src,
    url: getInitialUrl(src),
    loading: Boolean(src && isRelative),
    error: null,
  });

  useEffect(() => {
    if (!src || !isRelativeMediaPath(src)) {
      setResolvedState({
        src,
        url: !src ? fallback : src,
        loading: false,
        error: null,
      });
      return;
    }

    let isCancelled = false;

    getPrivateMediaUrl(src)
      .then((signedUrl) => {
        if (!isCancelled) {
          setResolvedState({
            src,
            url: signedUrl || `${SERVER_URL}${normalizeMediaPath(src)}` || fallback,
            loading: false,
            error: null,
          });
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.warn(`[usePrivateMedia] Failed to load private media "${src}":`, err?.message || err);
          const directUrl = `${SERVER_URL}${normalizeMediaPath(src)}`;
          setResolvedState({
            src,
            url: directUrl || fallback,
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
    ? (resolvedState.url || getInitialUrl(src))
    : getInitialUrl(src);

  const currentLoading = resolvedState.src === src ? resolvedState.loading : Boolean(src && isRelative);
  const currentError = resolvedState.src === src ? resolvedState.error : null;

  return { mediaUrl: currentUrl, loading: currentLoading, error: currentError };
};

export default usePrivateMedia;
