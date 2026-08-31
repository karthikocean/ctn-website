import { useState } from 'react';
import usePrivateMedia from '../../hooks/usePrivateMedia';
import defaultFallback from '../../assets/event1.jpg';

/**
 * Reusable PrivateImage component that fetches and renders temporary S3 signed URLs
 * for private media assets with caching, fallback, and error handling.
 */
const PrivateImage = ({
  src,
  fallback = defaultFallback,
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

  const handleImageError = (e) => {
    setHasError(true);
    if (onError) {
      onError(e);
    }
  };

  const imageToDisplay = hasError ? fallback : (mediaUrl || fallback);

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
