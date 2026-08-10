import React from 'react';
import EventCard from './EventCard';
import styles from "../styles/EventsGrid.module.css";

const EventsGrid = ({ events }) => (
  <div className={styles.grid} id="events-list">
    {events.map(event => (
      <EventCard key={event.id} event={event} />
    ))}
  </div>
);

export default EventsGrid;
