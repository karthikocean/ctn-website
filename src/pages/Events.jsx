import React, { useState, useEffect } from 'react';
import EventHero from '../components/EventHero';
import EventsGrid from '../components/EventsGrid';
import ShowMoreButton from '../components/ShowMoreButton';
import SectionLabel from '../components/SectionLabel';
import { events } from '../data/eventsData';
import styles from "../styles/Events.module.css";

const CARDS_PER_ROW = 4;
// Mobile‑only initial count (show 3 cards on ≤480px)
const getInitialCount = () => (typeof window !== 'undefined' && window.innerWidth <= 480 ? 3 : CARDS_PER_ROW * 2);
const INITIAL_COUNT = getInitialCount(); // will be 3 on mobile, 8 on larger screens
const LOAD_MORE = CARDS_PER_ROW; // load a full row each click

const Events = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + LOAD_MORE, events.length));
  };

  const visibleEvents = events.slice(0, visibleCount);

  const remainingEvents = events.length - visibleCount;
  const rowsComplete = visibleCount % CARDS_PER_ROW === 0;
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 480;
  const shouldShowMore = (remainingEvents > 0) && (isMobile || rowsComplete);

  console.log("remainingEvents:", remainingEvents);
  console.log("rowsComplete:", rowsComplete);
  console.log("shouldShowMore:", shouldShowMore);

  return (
    <main className={`${styles.page} ${!shouldShowMore ? styles.pageNoButton : ''}`}>
      <EventHero />
      <EventsGrid events={visibleEvents} />
      {shouldShowMore && (
        <div className={styles.showMoreWrapper}>
          <ShowMoreButton onClick={handleShowMore} />
        </div>
      )}
    </main>
  );
};

export default Events;
