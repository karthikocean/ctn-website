import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiArrowUpRight, FiCalendar, FiMapPin } from 'react-icons/fi';
import styles from '../styles/EventFeatured.module.css';

const EventFeatured = ({ featuredEvent, recentEvents = [] }) => {
  const navigate = useNavigate();

  if (!featuredEvent) return null;

  return (
    <section className={styles.featuredSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeDot}></span>
            <span>FEATURED EVENT</span>
          </div>
          <h2 className={styles.sectionHeading}>Latest Events & Editorial Choice</h2>
        </div>

        {/* Asymmetrical Editorial Composition (Matches Blog Featured Layout) */}
        <div className={styles.editorialGrid}>
          {/* LEFT: Large Main Featured Event Card */}
          <div className={styles.mainFeatureCard}>
            <Link to={`/events/${featuredEvent.id}`} className={styles.cardWrapper} aria-label={featuredEvent.title}>
              {/* Background Image (Always Clear & Sharp, No Blur) */}
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className={styles.cardImage}
              />

              {/* Before Hover Badges (Top Left) */}
              <div className={styles.topBadgeWrapper}>
                <span className={styles.badgeCategory}>UPCOMING EVENT</span>
                <span className={styles.badgeTag}>LATEST EVENT</span>
              </div>

              {/* Circular Navigation Arrow (Bottom Right) */}
              <div className={styles.circularArrowBtn} aria-hidden="true">
                <FiArrowUpRight className={styles.arrowIcon} />
              </div>

              {/* Default Bottom Info (Title visible before hover) */}
              <div className={styles.cardDefaultInfo}>
                <h3 className={styles.defaultTitle}>{featuredEvent.title}</h3>
              </div>

              {/* Full Image Hover Reveal Layer (NO BLUR, Smooth Emerging Transition) */}
              <div className={styles.hoverOverlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.overlayCategory}>UPCOMING EVENT</div>
                  <h3 className={styles.overlayTitle}>{featuredEvent.title}</h3>
                  <p className={styles.overlayExcerpt}>{featuredEvent.description}</p>

                  <div className={styles.overlayMeta}>
                    <span>
                      <FiCalendar className={styles.metaIcon} />
                      {featuredEvent.date}
                    </span>
                    <span className={styles.metaDivider}>•</span>
                    <span>
                      <FiMapPin className={styles.metaIcon} />
                      {featuredEvent.location}
                    </span>
                  </div>

                  <div className={styles.readLink}>
                    <span>View Event</span>
                    <FiArrowUpRight className={styles.linkArrow} />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* RIGHT: Column with 2 Smaller Stacked Cards */}
          <div className={styles.sideColumn}>
            {recentEvents.slice(0, 2).map((event) => (
              <div key={event.id} className={styles.sideCard}>
                <Link to={`/events/${event.id}`} className={styles.cardWrapper} aria-label={event.title}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className={styles.cardImage}
                  />

                  <div className={styles.topBadgeWrapper}>
                    <span className={styles.badgeCategory}>UPCOMING EVENT</span>
                  </div>

                  <div className={styles.circularArrowBtn} aria-hidden="true">
                    <FiArrowUpRight className={styles.arrowIcon} />
                  </div>

                  {/* Default Bottom Info */}
                  <div className={styles.cardDefaultInfo}>
                    <h3 className={styles.sideDefaultTitle}>{event.title}</h3>
                  </div>

                  {/* Full Image Hover Reveal Layer */}
                  <div className={styles.hoverOverlay}>
                    <div className={styles.overlayContent}>
                      <div className={styles.overlayCategory}>UPCOMING EVENT</div>
                      <h3 className={styles.sideOverlayTitle}>{event.title}</h3>
                      <p className={styles.sideOverlayExcerpt}>{event.description}</p>

                      <div className={styles.overlayMeta}>
                        <span>
                          <FiCalendar className={styles.metaIcon} />
                          {event.date}
                        </span>
                        <span className={styles.metaDivider}>•</span>
                        <span>
                          <FiMapPin className={styles.metaIcon} />
                          {event.location}
                        </span>
                      </div>

                      <div className={styles.readLink}>
                        <span>View Event</span>
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

export default EventFeatured;
