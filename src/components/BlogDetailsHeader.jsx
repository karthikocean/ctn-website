import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiUser, FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi';
import PrivateImage from './Common/PrivateImage';
import styles from '../styles/BlogDetailsHeader.module.css';

const BlogDetailsHeader = ({ blog }) => {
  if (!blog) return null;

  const featuredImg =
    blog.featuredImage ||
    blog.image ||
    (Array.isArray(blog.images) && blog.images.length > 0 ? blog.images[0] : null) ||
    (Array.isArray(blog.raw?.images) && blog.raw.images.length > 0 ? blog.raw.images[0] : null);

  return (
    <header className={styles.headerSection}>
      <div className="container">
        {/* Back Button with Top Spacing */}
        <div className={styles.backBtnWrapper}>
          <Link to="/blogs" className={styles.backBtn}>
            <FiArrowLeft className={styles.backIcon} />
            <span>Back to Blogs</span>
          </Link>
        </div>

        {/* Main Title */}
        <h1 className={styles.articleTitle}>{blog.title}</h1>

        {/* Author & Meta Row (Date Only) */}
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <FiCalendar className={styles.metaIcon} />
            <span>{blog.publishedDate}</span>
          </div>
        </div>

        {/* Large Featured Article Image */}
        {featuredImg && (
          <div className={styles.heroImageFrame}>
            <PrivateImage
              src={featuredImg}
              alt={blog.title}
              className={styles.heroImage}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default BlogDetailsHeader;
