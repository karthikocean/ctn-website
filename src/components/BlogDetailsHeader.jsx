import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiUser, FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi';
import PrivateImage from './Common/PrivateImage';
import event1 from '../assets/event1.jpg';
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
        <div className={styles.heroImageFrame}>
          <PrivateImage
            src={featuredImg}
            fallback={event1}
            alt={blog.title}
            className={styles.heroImage}
          />
        </div>
      </div>
    </header>
  );
};

export default BlogDetailsHeader;
