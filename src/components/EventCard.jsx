import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiCalendar, FiMapPin } from 'react-icons/fi';
import event1 from '../assets/event1.jpg';
import styles from '../styles/EventCard.module.css';

const EventCard = ({ event }) => {
  if (!event) return null;

  const eventLink = `/events/${event.id}`;
  const eventImage = event.image || event1;

  return (
    <article className={styles.cardContainer}>
      <Link to={eventLink} className={styles.cardLink} aria-label={event.title}>
        {/* Full Image Card Wrapper */}
        <div className={styles.imageWrapper}>
          {/* Background Image (Always Clear & Sharp, No Blur) */}
          <img
            src={eventImage}
            alt={event.title}
            className={styles.cardImage}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = event1;
            }}
          />

          {/* Circular Arrow Navigation Button (Bottom-Right) */}
          <div className={styles.circularArrowBtn} aria-hidden="true">
            <FiArrowUpRight className={styles.arrowIcon} />
          </div>

          {/* Default Bottom Info (Title visible before hover) */}
          <div className={styles.cardDefaultInfo}>
            <h3 className={styles.defaultTitle}>{event.title}</h3>
          </div>

          {/* Desktop Hover Reveal Layer (NO BLUR, Smooth Emerging Animation) */}
          <div className={styles.hoverOverlay}>
            <div className={styles.overlayContent}>
              <h3 className={styles.overlayTitle}>{event.title}</h3>
              {event.description && <p className={styles.overlayExcerpt}>{event.description}</p>}

              <div className={styles.overlayMeta}>
                {event.date && (
                  <span>
                    <FiCalendar className={styles.metaIcon} />
                    {event.date}
                  </span>
                )}
                {event.date && event.location && <span className={styles.metaDivider}>•</span>}
                {event.location && (
                  <span>
                    <FiMapPin className={styles.metaIcon} />
                    {event.location}
                  </span>
                )}
              </div>

              <div className={styles.readLink}>
                <span>View Event</span>
                <FiArrowUpRight className={styles.linkArrow} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Touch Card Body (Visible only on mobile/touch screens) */}
        <div className={styles.mobileCardBody}>
          <h3 className={styles.mobileTitle}>{event.title}</h3>
          {event.description && <p className={styles.mobileExcerpt}>{event.description}</p>}
          <div className={styles.mobileMeta}>
            <span>
              <FiCalendar className={styles.metaIcon} />
              {event.date}
            </span>
            {event.date && event.location && <span className={styles.metaDivider}>•</span>}
            <span>
              <FiMapPin className={styles.metaIcon} />
              {event.location}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default EventCard;