import React, { useState } from 'react';
import HighlightsTab from './HighlightsTab';
import PhotosTab from './PhotosTab';
import VideosTab from './VideosTab';
import styles from "../styles/EventTabs.module.css";

const tabs = [
  { id: 'highlights', label: 'Highlights' },
  { id: 'photos', label: 'Photos' },
  { id: 'videos', label: 'Videos' },
];

const EventTabs = ({ event }) => {
  const [active, setActive] = useState('highlights');

  const renderContent = () => {
    switch (active) {
      case 'highlights':
        return <HighlightsTab highlights={event.highlights} />;
      case 'photos':
        return <PhotosTab photos={event.photos} />;
      case 'videos':
        return <VideosTab videos={event.videos} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabButtons}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${active === tab.id ? styles.active : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{renderContent()}</div>
    </div>
  );
};

export default EventTabs;
