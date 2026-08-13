import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import seoData from '../data/seoData';
import CommonHero from '../components/CommonHero';
import EventFeatured from '../components/EventFeatured';
import EventsGrid from '../components/EventsGrid';
import BlogLoadMore from '../components/BlogLoadMore';
import { events } from '../data/eventsData';
import styles from '../styles/Events.module.css';

const INITIAL_VISIBLE_ARCHIVE = 6;
const LOAD_MORE_STEP = 3;

const Events = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const featuredEvent = events[0];
  const recentEvents = events.slice(1, 3);
  const archiveEvents = events.slice(3);

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ARCHIVE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_STEP, archiveEvents.length));
  };

  const visibleArchiveEvents = archiveEvents.slice(0, visibleCount);
  const hasMore = visibleCount < archiveEvents.length;

  return (
    <main className={styles.pageContainer}>
      <SEO
        title={seoData.events.title}
        description={seoData.events.description}
        keywords={seoData.events.keywords}
      />
      <CommonHero title="Events" />

      {featuredEvent && (
        <EventFeatured featuredEvent={featuredEvent} recentEvents={recentEvents} />
      )}

      {archiveEvents.length > 0 && (
        <section className={styles.archiveSection}>
          <EventsGrid events={visibleArchiveEvents} />
          {hasMore && (
            <div className={styles.loadMoreContainer}>
              <BlogLoadMore onClick={handleLoadMore} hasMore={hasMore} />
            </div>
          )}
        </section>
      )}
    </main>
  );
};

export default Events;
