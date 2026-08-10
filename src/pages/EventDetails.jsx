import React from 'react';
import { useParams } from 'react-router-dom';
import { events } from '../data/eventsData';
import EventDetailsHero from '../components/EventDetailsHero';
import EventTabs from '../components/EventTabs';
import eventStyles from '../styles/EventDetails.module.css';
import highlightsStyles from '../styles/HighlightsTab.module.css';

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find(ev => ev.id === id);

  if (!event) {
    return <div className={eventStyles.notFound}>Event not found.</div>;
  }

  return (
    <main className={eventStyles.page}>
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
