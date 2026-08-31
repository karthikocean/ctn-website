import React from 'react';
import PrivateImage from './Common/PrivateImage';
import event1 from '../assets/event1.jpg';
import styles from '../styles/PhotosTab.module.css';
import { FiImage } from 'react-icons/fi';
import EmptyState from './EmptyState';

const PhotosTab = ({ photos }) => (
  <div className={styles.gallery}>
    {photos && photos.length > 0 ? (
      photos.map((src, idx) => (
        <PrivateImage 
          key={idx} 
          src={src} 
          fallback={event1}
          alt={`Photo ${idx + 1}`} 
          className={`${styles.photosImage} ${styles.fadeIn}`} 
        />
      ))
    ) : (
      <EmptyState
        icon={<FiImage className={styles.icon} />}
        title="No Photos Available"
        description="Photos from this event will appear here once uploaded."
        className={styles.emptyState}
        titleClass={styles.title}
        descClass={styles.desc}
      />
    )}
  </div>
);

export default PhotosTab;
