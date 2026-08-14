import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiClock, FiCalendar } from 'react-icons/fi';
import event1 from '../assets/event1.jpg';
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
              {/* Background Image (Always Clear & Sharp, No Blur) */}
              <img
                src={featuredBlog.featuredImage || featuredBlog.image || event1}
                alt={featuredBlog.title}
                className={styles.cardImage}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = event1;
                }}
              />

              {/* Before Hover Badges (Top Left) */}
              <div className={styles.topBadgeWrapper}>
                <span className={styles.badgeCategory}>{featuredBlog.category}</span>
                <span className={styles.badgeTag}>LATEST BLOG</span>
              </div>

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
                  <div className={styles.overlayCategory}>{featuredBlog.category}</div>
                  <h3 className={styles.overlayTitle}>{featuredBlog.title}</h3>
                  <p className={styles.overlayExcerpt}>{featuredBlog.excerpt}</p>

                  <div className={styles.overlayMeta}>
                    <span>
                      <FiCalendar className={styles.metaIcon} />
                      {featuredBlog.publishedDate}
                    </span>
                    <span className={styles.metaDivider}>•</span>
                    <span>
                      <FiClock className={styles.metaIcon} />
                      {featuredBlog.readTime}
                    </span>
                  </div>

                  <div className={styles.readLink}>
                    <span>Read Blog</span>
                    <FiArrowUpRight className={styles.linkArrow} />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* RIGHT: Column with 2 Smaller Stacked Cards */}
          <div className={styles.sideColumn}>
            {recentBlogs.slice(0, 2).map((blog) => (
              <div key={blog.id} className={styles.sideCard}>
                <Link to={`/blogs/${blog.slug}`} className={styles.cardWrapper} aria-label={blog.title}>
                  <img
                    src={blog.featuredImage || blog.image || event1}
                    alt={blog.title}
                    className={styles.cardImage}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = event1;
                    }}
                  />

                  <div className={styles.topBadgeWrapper}>
                    <span className={styles.badgeCategory}>{blog.category}</span>
                  </div>

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
                      <div className={styles.overlayCategory}>{blog.category}</div>
                      <h3 className={styles.sideOverlayTitle}>{blog.title}</h3>
                      <p className={styles.sideOverlayExcerpt}>{blog.excerpt}</p>

                      <div className={styles.overlayMeta}>
                        <span>{blog.publishedDate}</span>
                        <span className={styles.metaDivider}>•</span>
                        <span>{blog.readTime}</span>
                      </div>

                      <div className={styles.readLink}>
                        <span>Read Blog</span>
                        <FiArrowUpRight className={styles.linkArrow} />
                      </div>
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
