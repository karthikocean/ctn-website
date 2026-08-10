import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import styles from '../styles/EventCard.module.css';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img
        src={event.image}
        alt={event.title}
        className={styles.image}
      />

      <div className={styles.contentPanel}>
        <h3 className={styles.title}>{event.title}</h3>

        {/* Meta row: date and location */}
        <div className={styles.meta}>
          <span className={styles.date}>
            <FiCalendar className={styles.icon} />
            {event.date}
          </span>
          <span className={styles.location}>
            <FiMapPin className={styles.icon} />
            {event.location}
          </span>
        </div>

        {/* Description hidden by default */}
        <p className={styles.description}>{event.description}</p>


        
      </div>
    </div>
  );
};

export default EventCard;