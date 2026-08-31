import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiMapPin, FiAlertCircle } from 'react-icons/fi';
import SEO from '../components/SEO';
import seoData from '../data/seoData';
import { events as staticEvents } from '../data/eventsData';
import { getEventById } from '../apis/eventApi';
import LoadingState from '../components/LoadingState';
import PrivateImage from '../components/Common/PrivateImage';
import PrivateVideo from '../components/Common/PrivateVideo';
import event1 from '../assets/event1.jpg';
import styles from '../styles/EventDetails.module.css';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchEvent = async () => {
      setLoading(true);
      const res = await getEventById(id);
      if (res?.status && res.data) {
        setEvent(res.data);
      } else {
        const foundLocal = staticEvents.find((ev) => ev.id === id);
        setEvent(foundLocal || null);
      }
      setLoading(false);
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  if (loading) {
    return (
      <main className={styles.page}>
        <LoadingState message="Loading event details..." />
      </main>
    );
  }

  if (!event) {
    return (
      <main className={styles.page}>
        <SEO
          title={seoData['/events']?.title}
          description={seoData['/events']?.description}
          keywords={seoData['/events']?.keywords}
        />
        <div className={styles.notFoundContainer}>
          <div className={styles.notFoundCard}>
            <FiAlertCircle className={styles.notFoundIcon} />
            <h1 className={styles.notFoundTitle}>Event Not Found</h1>
            <p className={styles.notFoundDesc}>
              The event you are looking for does not exist, has been removed, or is currently unavailable.
            </p>
            <Link to="/events" className={styles.backHomeBtn}>
              <FiArrowLeft />
              <span>Back to All Events</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const eventImage = event.image || event1;

  return (
    <main className={styles.page}>
      <SEO
        title={`${event.title} | Trusted Network`}
        description={event.description || seoData['/events']?.description}
        keywords="business events, networking event, trusted network"
      />

      {/* Clean White Header Section (Matches Blog Details Header Pattern) */}
      <header className={styles.headerSection}>
        <div className="container">
          {/* Back Button */}
          <div className={styles.backBtnWrapper}>
            <Link to="/events" className={styles.backBtn}>
              <FiArrowLeft className={styles.backIcon} />
              <span>Back to Events</span>
            </Link>
          </div>

          {/* Event Title */}
          <h1 className={styles.eventTitle}>{event.title}</h1>

          {/* Date & Location Meta Row */}
          <div className={styles.metaRow}>
            {event.date && (
              <div className={styles.metaItem}>
                <FiCalendar className={styles.metaIcon} />
                <span>{event.date}</span>
              </div>
            )}
            {event.date && event.location && (
              <span className={styles.dotSeparator}>•</span>
            )}
            {event.location && (
              <div className={styles.metaItem}>
                <FiMapPin className={styles.metaIcon} />
                <span>{event.location}</span>
              </div>
            )}
          </div>

          {/* Featured Image Frame */}
          {eventImage && (
            <div className={styles.imageFrame}>
              <PrivateImage
                src={eventImage}
                fallback={event1}
                alt={event.title}
                className={styles.image}
              />
            </div>
          )}
        </div>
      </header>

      {/* Clean White Content Area (Matches Blog Details Content Pattern) */}
      <article className={styles.contentBody}>
        <div className="container">
          <div className={styles.contentWrapper}>
            {/* Event Description Content */}
            {event.description && (
              <p className={styles.paragraph}>{event.description}</p>
            )}

            {/* Video content if provided by API */}
            {event.videos && event.videos.length > 0 && (
              <div className={styles.videoWrapper}>
                <PrivateVideo
                  src={event.videos[0]}
                  controls
                  className={styles.video}
                />
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  );
};

export default EventDetails;
