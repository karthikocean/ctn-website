import usePrivateMedia from '../../hooks/usePrivateMedia';

/**
 * Reusable PrivateVideo component that loads private S3 pre-signed video URLs.
 * Ensures video playback only initiates once the signed URL is securely resolved.
 */
const PrivateVideo = ({
  src,
  poster,
  className = '',
  style = {},
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  fallback = null,
  children,
  ...rest
}) => {
  const { mediaUrl: videoUrl, loading: isVideoLoading, error: videoError } = usePrivateMedia(src);
  const { mediaUrl: posterUrl } = usePrivateMedia(poster);

  if (!src || videoError) {
    if (fallback) return fallback;
    return null;
  }

  if (isVideoLoading || !videoUrl) {
    return (
      <div
        className={className}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.05)',
          minHeight: '200px',
          borderRadius: '8px',
          ...style,
        }}
      >
        <span style={{ color: '#64748b', fontSize: '0.875rem' }}>Loading video...</span>
      </div>
    );
  }

  return (
    <video
      src={videoUrl}
      poster={posterUrl || undefined}
      className={className}
      style={style}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      {...rest}
    >
      {children || 'Your browser does not support the video tag.'}
    </video>
  );
};

export default PrivateVideo;
