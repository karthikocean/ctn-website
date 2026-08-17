import React, { useState, useEffect } from 'react';
import { FiFileText } from 'react-icons/fi';
import SEO from '../components/SEO';
import CommonHero from '../components/CommonHero';
import BlogFeatured from '../components/BlogFeatured';
import BlogPreviousPosts from '../components/BlogPreviousPosts';
import BlogLoadMore from '../components/BlogLoadMore';
import EmptyState from '../components/EmptyState';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';
import { getBlogs } from '../apis/blogApi';
import styles from '../styles/Blog.module.css';

const INITIAL_VISIBLE_ARCHIVE = 6;
const LOAD_MORE_STEP = 3;

const Blogs = () => {
  const [blogsList, setBlogsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ARCHIVE);

  const fetchBlogsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getBlogs();
      if (res?.status) {
        setBlogsList(res.data || []);
      } else {
        setError(res?.message || 'Failed to load blogs. Please try again later.');
      }
    } catch (err) {
      setError('An unexpected error occurred while loading blogs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchBlogsData();
  }, []);

  const featuredBlog = blogsList[0];
  const recentBlogs = blogsList.slice(1, 3);
  const archiveBlogs = blogsList.slice(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_STEP, archiveBlogs.length));
  };

  const visibleArchiveBlogs = archiveBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < archiveBlogs.length;

  return (
    <main className={styles.pageContainer}>
      <SEO />
      <CommonHero title="Blogs & Insights" />

      {loading && <LoadingState message="Fetching latest blogs..." />}

      {!loading && error && (
        <ErrorState
          title="Unable to load blogs"
          message={error}
          onRetry={fetchBlogsData}
        />
      )}

      {!loading && !error && blogsList.length === 0 && (
        <div className={styles.emptyContainer}>
          <EmptyState
            icon={<FiFileText />}
            title="No blogs available at the moment."
            description="Please check back later for the latest business articles and editorial insights."
          />
        </div>
      )}

      {!loading && !error && blogsList.length > 0 && (
        <>
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
        </>
      )}
    </main>
  );
};

export default Blogs;