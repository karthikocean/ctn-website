import React, { useState, useEffect } from 'react';
import { blogs } from '../data/blogsData';
import CommonHero from '../components/CommonHero';
import BlogFeatured from '../components/BlogFeatured';
import BlogPreviousPosts from '../components/BlogPreviousPosts';
import BlogLoadMore from '../components/BlogLoadMore';
import styles from '../styles/Blog.module.css';

const INITIAL_VISIBLE_ARCHIVE = 6;
const LOAD_MORE_STEP = 3;

const Blogs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sort / select blogs: 
  // 1st blog = Main Large Featured (LEFT)
  // 2nd & 3rd blogs = Smaller Stacked Featured (RIGHT)
  // 4th blog onwards = Blog Archive Grid
  const featuredBlog = blogs[0];
  const recentBlogs = blogs.slice(1, 3);
  const archiveBlogs = blogs.slice(3);

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ARCHIVE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_STEP, archiveBlogs.length));
  };

  const visibleArchiveBlogs = archiveBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < archiveBlogs.length;

  return (
    <main className={styles.pageContainer}>
      {/* Existing CommonHero Component */}
      <CommonHero title="Blogs & Insights" />

      {/* Asymmetrical Editorial Featured Section (Large Left + 2 Stacked Right) */}
      {featuredBlog && (
        <BlogFeatured featuredBlog={featuredBlog} recentBlogs={recentBlogs} />
      )}

      {/* Blog Archive Section */}
      {archiveBlogs.length > 0 && (
        <section className={styles.archiveSection}>
          <BlogPreviousPosts blogs={visibleArchiveBlogs} />
          {hasMore && (
            <div className={styles.loadMoreContainer}>
              <BlogLoadMore onClick={handleLoadMore} hasMore={hasMore} />
            </div>
          )}
        </section>
      )}
    </main>
  );
};

export default Blogs;