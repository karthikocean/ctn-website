import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import seoData from '../data/seoData';
import { events } from '../data/eventsData';
import EventDetailsHero from '../components/EventDetailsHero';
import EventTabs from '../components/EventTabs';
import eventStyles from '../styles/EventDetails.module.css';

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find(ev => ev.id === id);

  if (!event) {
    return (
      <div className={eventStyles.notFound}>
        <SEO
          title={seoData.events.title}
          description={seoData.events.description}
          keywords={seoData.events.keywords}
        />
        Event not found.
      </div>
    );
  }

  return (
    <main className={eventStyles.page}>
      <SEO
        title={`${event.title} | Trusted Network`}
        description={event.description || seoData.events.description}
        keywords="business events, networking event, trusted network"
      />
      <EventDetailsHero event={event} />
      <section className={eventStyles.content}>
        <h2 className={eventStyles.title}>{event.title}</h2>
        <p className={eventStyles.description}>{event.description}</p>
        <EventTabs event={event} />
      </section>
    </main>
  );
};

export default EventDetails;
