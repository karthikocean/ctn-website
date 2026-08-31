import React from 'react';
import styles from '../styles/VideosTab.module.css';
import { FiVideo } from 'react-icons/fi';
import EmptyState from './EmptyState';
import PrivateVideo from './Common/PrivateVideo';

const VideoItem = ({ src, idx }) => {
  const isEmbed =
    typeof src === 'string' &&
    (src.includes('youtube.com') || src.includes('youtu.be') || src.includes('vimeo.com'));

  if (isEmbed) {
    return (
      <iframe
        src={src}
        title={`Video ${idx + 1}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.iframe}
      />
    );
  }

  return <PrivateVideo src={src} controls className={styles.iframe} />;
};

const VideosTab = ({ videos }) => (
  <div className={styles.videoContainer}>
    {videos && videos.length > 0 ? (
      videos.map((src, idx) => (
        <div key={idx} className={styles.videoWrapper}>
          <VideoItem src={src} idx={idx} />
        </div>
      ))
    ) : (
      <EmptyState
        icon={<FiVideo />}
        title="No Videos Available"
        description="Videos from this event will appear here once uploaded."
      />
    )}
  </div>
);

export default VideosTab;
