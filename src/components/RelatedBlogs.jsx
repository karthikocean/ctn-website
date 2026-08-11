import React from 'react';
import BlogCard from './BlogCard';
import styles from '../styles/RelatedBlogs.module.css';

const RelatedBlogs = ({ currentBlogId, relatedBlogs }) => {
  if (!relatedBlogs || relatedBlogs.length === 0) return null;

  // Ensure current article is excluded
  const filtered = relatedBlogs.filter((b) => b.id !== currentBlogId && b.slug !== currentBlogId);

  if (filtered.length === 0) return null;

  // Limit to max 3 related blogs
  const displayBlogs = filtered.slice(0, 3);

  return (
    <section className={styles.relatedSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeDot}></span>
            <span>RECOMMENDED READS</span>
          </div>
          <h2 className={styles.sectionTitle}>Related Articles</h2>
          <p className={styles.sectionDesc}>
            Discover related business insights, networking techniques, and growth guides curated for you.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {displayBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;
