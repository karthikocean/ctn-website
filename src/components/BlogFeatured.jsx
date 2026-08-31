import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiClock, FiCalendar } from 'react-icons/fi';
import event1 from '../assets/event1.jpg';
import PrivateImage from './Common/PrivateImage';
import styles from '../styles/BlogFeatured.module.css';

const BlogFeatured = ({ featuredBlog, recentBlogs = [] }) => {
  if (!featuredBlog) return null;

  return (
    <section className={styles.featuredSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeDot}></span>
            <span>FEATURED BLOG</span>
          </div>
          <h2 className={styles.sectionHeading}>Latest Insights & Editorial Choice</h2>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className={styles.editorialGrid}>
          {/* LEFT: Large Main Featured Blog Card */}
          <div className={styles.mainFeatureCard}>
            <Link to={`/blogs/${featuredBlog.slug}`} className={styles.cardWrapper} aria-label={featuredBlog.title}>
              {/* Image Container */}
              <div className={styles.imageWrapper}>
                {/* Background Image (Always Clear & Sharp, No Blur) */}
                <PrivateImage
                  src={featuredBlog.featuredImage || featuredBlog.image || event1}
                  fallback={event1}
                  alt={featuredBlog.title}
                  className={styles.cardImage}
                />

                {/* Circular Navigation Arrow (Bottom Right) */}
                <div className={styles.circularArrowBtn} aria-hidden="true">
                  <FiArrowUpRight className={styles.arrowIcon} />
                </div>

                {/* Default Bottom Info (Title visible before hover) */}
                <div className={styles.cardDefaultInfo}>
                  <h3 className={styles.defaultTitle}>{featuredBlog.title}</h3>
                </div>

                {/* Full Image Hover Reveal Layer (NO BLUR, Smooth Emerging Transition) */}
                <div className={styles.hoverOverlay}>
                  <div className={styles.overlayContent}>
                    <h3 className={styles.overlayTitle}>{featuredBlog.title}</h3>
                    <p className={styles.overlayExcerpt}>{featuredBlog.excerpt}</p>

                    <div className={styles.overlayMeta}>
                      <span>
                        <FiCalendar className={styles.metaIcon} />
                        {featuredBlog.publishedDate}
                      </span>
                    </div>

                    <div className={styles.readLink}>
                      <span>Read Blog</span>
                      <FiArrowUpRight className={styles.linkArrow} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Card Body (Text Below Image) */}
              <div className={styles.mobileCardBody}>
                <h3 className={styles.mobileTitle}>{featuredBlog.title}</h3>
                <div className={styles.mobileMeta}>
                  {featuredBlog.publishedDate && (
                    <span>
                      <FiCalendar className={styles.metaIcon} />
                      {featuredBlog.publishedDate}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>

          {/* RIGHT: Column with 2 Smaller Stacked Cards */}
          <div className={styles.sideColumn}>
            {recentBlogs.slice(0, 2).map((blog) => (
              <div key={blog.id} className={styles.sideCard}>
                <Link to={`/blogs/${blog.slug}`} className={styles.cardWrapper} aria-label={blog.title}>
                  <div className={styles.imageWrapper}>
                    <PrivateImage
                      src={blog.featuredImage || blog.image || event1}
                      fallback={event1}
                      alt={blog.title}
                      className={styles.cardImage}
                    />

                    <div className={styles.circularArrowBtn} aria-hidden="true">
                      <FiArrowUpRight className={styles.arrowIcon} />
                    </div>

                    {/* Default Bottom Info */}
                    <div className={styles.cardDefaultInfo}>
                      <h3 className={styles.sideDefaultTitle}>{blog.title}</h3>
                    </div>

                    {/* Full Image Hover Reveal Layer */}
                    <div className={styles.hoverOverlay}>
                      <div className={styles.overlayContent}>
                        <h3 className={styles.sideOverlayTitle}>{blog.title}</h3>
                        <p className={styles.sideOverlayExcerpt}>{blog.excerpt}</p>

                        <div className={styles.overlayMeta}>
                          {blog.publishedDate && (
                            <span>
                              <FiCalendar className={styles.metaIcon} />
                              {blog.publishedDate}
                            </span>
                          )}
                        </div>

                        <div className={styles.readLink}>
                          <span>Read Blog</span>
                          <FiArrowUpRight className={styles.linkArrow} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Card Body */}
                  <div className={styles.mobileCardBody}>
                    <h3 className={styles.mobileTitle}>{blog.title}</h3>
                    <div className={styles.mobileMeta}>
                      {blog.publishedDate && (
                        <span>
                          <FiCalendar className={styles.metaIcon} />
                          {blog.publishedDate}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFeatured;
