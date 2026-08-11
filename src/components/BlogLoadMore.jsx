import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styles from '../styles/BlogLoadMore.module.css';

const BlogLoadMore = ({ onClick, hasMore = true, loading = false }) => {
  // Completely remove completion/end-of-list message if no more blogs remain
  if (!hasMore) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.loadMoreBtn}
        onClick={onClick}
        disabled={loading}
        aria-label="Show More Blogs"
      >
        <span>{loading ? 'Loading Blogs...' : 'Show More Blogs'}</span>
        <FiChevronDown className={styles.btnIcon} />
      </button>
    </div>
  );
};

export default BlogLoadMore;
