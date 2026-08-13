import React from 'react';
import EventCard from './EventCard';
import styles from '../styles/EventsGrid.module.css';

const EventsGrid = ({ events }) => {
  if (!events || events.length === 0) return null;

  return (
    <div className={styles.previousContainer}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeDot}></span>
            <span>EVENT ARCHIVE</span>
          </div>
          <h2 className={styles.sectionTitle}>Upcoming & Past Events</h2>
          <p className={styles.sectionDesc}>
            Explore upcoming business summits, networking nights, forums, and conferences across the Trusted Network community.
          </p>
        </div>

        <div className={styles.postsGrid}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
