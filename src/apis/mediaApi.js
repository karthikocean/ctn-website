import { api, SERVER_URL } from '../config/config';

// In-memory cache for temporary AWS S3 pre-signed URLs
// Key: filePath (string), Value: { url: string, expiresAt: number }
const mediaCache = new Map();

// In-flight request deduplication map
// Key: filePath (string), Value: Promise<string>
const inFlightRequests = new Map();

/**
 * Check if a given value is a relative media path stored in the database
 * (e.g. '/trainings/media-123.mp4', '/posts/media-123.jpg', '/blogs/img.png')
 * vs an external full URL (http, https, data:, blob:) or static imported bundle path.
 */
export const isRelativeMediaPath = (path) => {
  if (!path || typeof path !== 'string') return false;
  const trimmed = path.trim();
  if (!trimmed) return false;
  
  // If it's a full URL or data/blob URI, it's not a relative backend media path
  if (
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('data:') ||
    trimmed.startsWith('blob:')
  ) {
    return false;
  }
  
  return true;
};

/**
 * Normalizes relative file path ensuring consistent leading slash for the API query.
 */
export const normalizeMediaPath = (path) => {
  if (!path || typeof path !== 'string') return '';
  const trimmed = path.trim();
  if (!trimmed) return '';
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
};

/**
 * Fetch temporary AWS S3 pre-signed URL for a private media file.
 * Handles caching (3600s TTL by default) and deduplicates concurrent in-flight requests.
 *
 * @param {string} filePath - Relative path stored in database (e.g. '/trainings/media-1788166411018-1o88.mp4')
 * @param {object} [options] - Options like expiresIn (in seconds)
 * @returns {Promise<string>} - Resolves with the pre-signed S3 URL, or original path if external
 */
export const getPrivateMediaUrl = async (filePath, options = {}) => {
  if (!filePath || typeof filePath !== 'string') {
    return '';
  }

  const cleanPath = filePath.trim();
  if (!cleanPath) return '';

  // If already an absolute external URL or data URI, return immediately
  if (!isRelativeMediaPath(cleanPath)) {
    return cleanPath;
  }

  const normalizedPath = normalizeMediaPath(cleanPath);

  // Check cache for valid signed URL (with 60-second expiration buffer)
  const cached = mediaCache.get(normalizedPath);
  if (cached && cached.expiresAt > Date.now() + 60000) {
    return cached.url;
  }

  // Deduplicate concurrent requests for the exact same path
  if (inFlightRequests.has(normalizedPath)) {
    return inFlightRequests.get(normalizedPath);
  }

  const fetchPromise = (async () => {
    try {
      // Primary call to /mobile-api/media/private-view with baseURL set to SERVER_URL
      // using the configured api client (preserves interceptors, auth headers, etc.)
      let response;
      try {
        response = await api.get('/mobile-api/media/private-view', {
          baseURL: SERVER_URL,
          params: {
            file: normalizedPath,
            ...(options.expiresIn ? { expiresIn: options.expiresIn } : {}),
          },
        });
      } catch (primaryErr) {
        // Fallback: in case backend routes it under /website-api/media/private-view
        if (primaryErr?.response?.status === 404) {
          response = await api.get('/media/private-view', {
            params: {
              file: normalizedPath,
              ...(options.expiresIn ? { expiresIn: options.expiresIn } : {}),
            },
          });
        } else {
          throw primaryErr;
        }
      }

      const signedUrl = response?.data?.data?.url;
      const expiresIn = response?.data?.data?.expiresIn || 3600;

      if (signedUrl) {
        mediaCache.set(normalizedPath, {
          url: signedUrl,
          expiresAt: Date.now() + expiresIn * 1000,
        });
        return signedUrl;
      }

      throw new Error('No signed URL returned from private media API');
    } catch (error) {
      console.error(`[mediaApi] Failed to obtain signed URL for "${normalizedPath}":`, error?.message || error);
      throw error;
    } finally {
      inFlightRequests.delete(normalizedPath);
    }
  })();

  inFlightRequests.set(normalizedPath, fetchPromise);
  return fetchPromise;
};

/**
 * Open a private document or PDF in a new browser tab or download it.
 *
 * @param {string} filePath - Relative document path
 * @param {string} [target='_blank'] - Window open target
 */
export const openPrivateDocument = async (filePath, target = '_blank') => {
  if (!filePath) return;
  try {
    const signedUrl = await getPrivateMediaUrl(filePath);
    if (signedUrl) {
      window.open(signedUrl, target);
    }
  } catch (err) {
    console.error('[mediaApi] Failed to open private document:', err);
  }
};

/**
 * Clear cached signed URLs.
 */
export const clearPrivateMediaCache = () => {
  mediaCache.clear();
  inFlightRequests.clear();
};

const mediaApi = {
  getPrivateMediaUrl,
  openPrivateDocument,
  clearPrivateMediaCache,
  isRelativeMediaPath,
  normalizeMediaPath,
};

export default mediaApi;
