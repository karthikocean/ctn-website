import React, { useState, useEffect } from 'react';
import { FiCalendar } from 'react-icons/fi';
import SEO from '../components/SEO';
import seoData from '../data/seoData';
import CommonHero from '../components/CommonHero';
import EventFeatured from '../components/EventFeatured';
import EventsGrid from '../components/EventsGrid';
import BlogLoadMore from '../components/BlogLoadMore';
import EmptyState from '../components/EmptyState';
import LoadingState from '../components/LoadingState';
import ErrorState from '../components/ErrorState';
import { getEvents } from '../apis/eventApi';
import styles from '../styles/Events.module.css';

const INITIAL_VISIBLE_ARCHIVE = 6;
const LOAD_MORE_STEP = 3;

const Events = () => {
  const [eventsList, setEventsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ARCHIVE);

  const fetchEventsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getEvents();
      if (res?.status) {
        setEventsList(res.data || []);
      } else {
        setError(res?.message || 'Failed to load events. Please try again later.');
      }
    } catch (err) {
      setError('An unexpected error occurred while loading events.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchEventsData();
  }, []);

  const featuredEvent = eventsList[0];
  const recentEvents = eventsList.slice(1, 3);
  const archiveEvents = eventsList.slice(3);

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

      {loading && <LoadingState message="Fetching upcoming events..." />}

      {!loading && error && (
        <ErrorState
          title="Unable to load events"
          message={error}
          onRetry={fetchEventsData}
        />
      )}

      {!loading && !error && eventsList.length === 0 && (
        <div className={styles.emptyContainer}>
          <EmptyState
            icon={<FiCalendar />}
            title="No events available at the moment."
            description="Please check back later for upcoming networking meetups and business events."
          />
        </div>
      )}

      {!loading && !error && eventsList.length > 0 && (
        <>
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
        </>
      )}
    </main>
  );
};

export default Events;
