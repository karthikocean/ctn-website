import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import seoData from '../data/seoData';
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
      <SEO
        title={seoData.blogs.title}
        description={seoData.blogs.description}
        keywords={seoData.blogs.keywords}
      />
      <CommonHero title="Blogs & Insights" />

      {featuredBlog && (
        <BlogFeatured featuredBlog={featuredBlog} recentBlogs={recentBlogs} />
      )}

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