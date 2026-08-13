import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from '../styles/BlogCard.module.css';

const BlogCard = ({ blog }) => {
  if (!blog) return null;

  const blogLink = `/blogs/${blog.slug || blog.id}`;
  const blogImage = blog.featuredImage || blog.image;

  return (
    <article className={styles.cardContainer}>
      <Link to={blogLink} className={styles.cardLink} aria-label={blog.title}>
        {/* Full Image Card Wrapper */}
        <div className={styles.imageWrapper}>
          {/* Background Image (Always Clear & Sharp, No Blur) */}
          <img
            src={blogImage}
            alt={blog.title}
            className={styles.cardImage}
            loading="lazy"
          />

          {/* Category Badge (Top-Left) */}
          {blog.category && (
            <div className={styles.topBadgeWrapper}>
              <span className={styles.categoryBadge}>{blog.category}</span>
            </div>
          )}

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
              <div className={styles.overlayCategory}>{blog.category}</div>
              <h3 className={styles.overlayTitle}>{blog.title}</h3>
              {blog.excerpt && <p className={styles.overlayExcerpt}>{blog.excerpt}</p>}

              <div className={styles.overlayMeta}>
                {blog.publishedDate && <span>{blog.publishedDate}</span>}
                {blog.publishedDate && blog.readTime && <span className={styles.metaDivider}>•</span>}
                {blog.readTime && <span>{blog.readTime}</span>}
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
            <span>{blog.publishedDate}</span>
            {blog.publishedDate && blog.readTime && <span className={styles.metaDivider}>•</span>}
            <span>{blog.readTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
