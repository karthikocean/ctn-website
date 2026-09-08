import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiCalendar } from 'react-icons/fi';
import PrivateImage from './Common/PrivateImage';
import styles from '../styles/BlogCard.module.css';

const BlogCard = ({ blog }) => {
  if (!blog) return null;
  console.log(blog, "bbbbbbb");

  const blogLink = `/blogs/${blog.slug || blog.id}`;
  const blogImage =
    blog.featuredImage ||
    blog.image ||
    (Array.isArray(blog.images) && blog.images.length > 0 ? blog.images[0] : '') ||
    (Array.isArray(blog.raw?.images) && blog.raw.images.length > 0 ? blog.raw.images[0] : '');
  const blogDate = blog.publishedDate || blog.date;

  return (
    <article className={styles.cardContainer}>
      <Link to={blogLink} className={styles.cardLink} aria-label={blog.title}>
        {/* Full Image Card Wrapper */}
        <div className={styles.imageWrapper}>
          {/* Background Image (Always Clear & Sharp, No Blur) */}
          <PrivateImage
            src={blogImage}
            alt={blog.title}
            className={styles.cardImage}
            loading="lazy"
          />

          {/* Circular Arrow Navigation Button (Bottom-Right) */}
          <div className={styles.circularArrowBtn} aria-hidden="true">
            <FiArrowUpRight className={styles.arrowIcon} />
          </div>

          {/* Default Bottom Gradient & Title (Visible before hover) */}
          <div className={styles.cardDefaultInfo}>
            <h3 className={styles.defaultTitle}>{blog.title}</h3>
          </div>

          {/* Desktop Hover Reveal Layer (Transparent Navy Overlay + Content Reveal, NO BLUR) */}
          <div className={styles.hoverOverlay}>
            <div className={styles.overlayContent}>
              <h3 className={styles.overlayTitle}>{blog.title}</h3>
              {blog.excerpt && <p className={styles.overlayExcerpt}>{blog.excerpt}</p>}

              <div className={styles.overlayMeta}>
                {blogDate && (
                  <span>
                    <FiCalendar className={styles.metaIcon} />
                    {blogDate}
                  </span>
                )}
              </div>

              <div className={styles.readLink}>
                <span>Read Blog</span>
                <FiArrowUpRight className={styles.linkArrow} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Touch Card Body (Visible only on mobile/touch screens) */}
        <div className={styles.mobileCardBody}>
          <h3 className={styles.mobileTitle}>{blog.title}</h3>
          {blog.excerpt && <p className={styles.mobileExcerpt}>{blog.excerpt}</p>}
          <div className={styles.mobileMeta}>
            {blogDate && (
              <span>
                <FiCalendar className={styles.metaIcon} />
                {blogDate}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
