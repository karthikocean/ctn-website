import React from 'react';
import BlogCard from './BlogCard';
import styles from '../styles/BlogPreviousPosts.module.css';

const BlogPreviousPosts = ({ blogs }) => {
  if (!blogs || blogs.length === 0) return null;

  return (
    <div className={styles.previousContainer}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeDot}></span>
            <span>BLOG ARCHIVE</span>
          </div>
          <h2 className={styles.sectionTitle}>Previous Blogs</h2>
          <p className={styles.sectionDesc}>
            Explore more business insights, networking ideas, industry trends and growth strategies from Trusted Network.
          </p>
        </div>

        <div className={styles.postsGrid}>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPreviousPosts;
