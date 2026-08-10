import React from 'react';
import styles from '../styles/EventDetailsHero.module.css';

const EventDetailsHero = ({ event }) => (
  <section className={styles.hero} style={{ backgroundImage: `url(${event.image})` }}>
    <div className={styles.overlay} />
    <div className={styles.content}>
      <h1 className={styles.title}>{event.title}</h1>
      <div className={styles.meta}>
        <span>{event.date}</span>
        <span>{event.location}</span>
      </div>
    </div>
  </section>
);

export default EventDetailsHero;
