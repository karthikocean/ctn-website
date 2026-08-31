import React from 'react';
import PrivateImage from './Common/PrivateImage';
import event1 from '../assets/event1.jpg';
import styles from '../styles/BlogDetailsImages.module.css';

const BlogDetailsImages = ({ images, title }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className={styles.sectionWrapper}>
      <div className="container">
        <div className={styles.containerInner}>
          <div className={`${styles.imageGrid} ${images.length === 1 ? styles.singleGrid : ''}`}>
            {images.map((imgSrc, index) => (
              <div key={index} className={styles.imageFrame}>
                <PrivateImage
                  src={imgSrc}
                  fallback={event1}
                  alt={`${title || 'Blog article image'} - visual ${index + 1}`}
                  className={styles.articleImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsImages;
