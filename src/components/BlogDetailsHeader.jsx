import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiUser, FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi';
import styles from '../styles/BlogDetailsHeader.module.css';

const BlogDetailsHeader = ({ blog }) => {
  if (!blog) return null;

  const featuredImg = blog.featuredImage || blog.image;

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

        {/* Breadcrumb Navigation */}
        {/* <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <FiChevronRight className={styles.breadcrumbArrow} />
          <Link to="/blogs">Blogs</Link>
          <FiChevronRight className={styles.breadcrumbArrow} />
          <span className={styles.categoryBreadcrumb}>{blog.category}</span>
        </nav> */}

        {/* Category Pill */}
        <div className={styles.categoryBadgeWrapper}>
          <span className={styles.categoryBadge}>{blog.category}</span>
        </div>

        {/* Main Title */}
        <h1 className={styles.articleTitle}>{blog.title}</h1>

        {/* Author & Meta Row */}
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <FiUser className={styles.metaIcon} />
            <span>By {blog.author || 'Trusted Network'}</span>
          </div>
          <span className={styles.dotSeparator}>•</span>
          <div className={styles.metaItem}>
            <FiCalendar className={styles.metaIcon} />
            <span>{blog.publishedDate}</span>
          </div>
          <span className={styles.dotSeparator}>•</span>
          <div className={styles.metaItem}>
            <FiClock className={styles.metaIcon} />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Large Featured Article Image */}
        <div className={styles.heroImageFrame}>
          <img
            src={featuredImg}
            alt={blog.title}
            className={styles.heroImage}
          />
        </div>
      </div>
    </header>
  );
};

export default BlogDetailsHeader;
