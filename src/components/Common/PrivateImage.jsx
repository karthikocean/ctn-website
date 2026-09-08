import { useState, useEffect } from 'react';
import usePrivateMedia from '../../hooks/usePrivateMedia';
import { isRelativeMediaPath, normalizeMediaPath } from '../../apis/mediaApi';
import { SERVER_URL } from '../../config/config';

/**
 * Reusable PrivateImage component that fetches and renders URLs
 * for media assets with caching, fallback, and error handling.
 */
const PrivateImage = ({
  src,
  fallback = '',
  alt = 'Image',
  className = '',
  style = {},
  loading = 'lazy',
  onError,
  onLoad,
  ...rest
}) => {
  const { mediaUrl } = usePrivateMedia(src, fallback);
  const [hasError, setHasError] = useState(false);

  // Reset error state whenever src or resolved mediaUrl changes
  useEffect(() => {
    setHasError(false);
  }, [src, mediaUrl]);

  const handleImageError = (e) => {
    setHasError(true);
    if (onError) {
      onError(e);
    }
  };

  const directBackendUrl = (src && isRelativeMediaPath(src)) ? `${SERVER_URL}${normalizeMediaPath(src)}` : '';
  const imageToDisplay = hasError ? fallback : (mediaUrl || directBackendUrl || fallback || src);

  if (!imageToDisplay) {
    return null;
  }

  return (
    <img
      src={imageToDisplay}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onError={handleImageError}
      onLoad={onLoad}
      {...rest}
    />
  );
};

export default PrivateImage;
