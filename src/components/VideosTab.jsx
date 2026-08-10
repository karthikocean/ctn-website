import React from 'react';
import styles from '../styles/VideosTab.module.css';
import { FiVideo } from 'react-icons/fi';
import EmptyState from './EmptyState';

const VideosTab = ({ videos }) => (
  <div className={styles.videoContainer}>
    {videos && videos.length > 0 ? (
      videos.map((src, idx) => (
        <div key={idx} className={styles.videoWrapper}>
          <iframe
            src={src}
            title={`Video ${idx + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.iframe}
          ></iframe>
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
