import React from 'react';
import { FiSearch, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';
import styles from '../styles/FutureSmartConnections.module.css';

const FutureSmartConnections = () => {
  const cards = [
    {
      id: 'discover',
      title: 'Discover',
      description: 'Find relevant businesses and professionals based on your interests, needs, and business goals.',
      icon: FiSearch,
    },
    {
      id: 'engage',
      title: 'Engage',
      description: 'Share updates, explore opportunities, interact with members, and start meaningful conversations.',
      icon: FiMessageSquare,
    },
    {
      id: 'build-relationships',
      title: 'Build Relationships',
      description: 'Turn valuable interactions into trusted professional relationships and future business opportunities.',
      icon: FiTrendingUp,
    },
  ];

  return (
    <section className={styles.connectionsSection}>
      <div className="container">
        {/* Header */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span className={styles.badgeText}>NETWORKING SECTION</span>
          </div>
          <h2 className={styles.sectionTitle}>Smarter Networking</h2>
          <p className={styles.sectionDesc}>
            Connect with verified business owners and turn initial discoveries into lasting professional partnerships.
          </p>
        </div>

        {/* Centered Feature Cards Grid */}
        <div className={styles.cardsGrid}>
          {cards.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.id} className={styles.centeredCard}>
                {/* Centered Icon Container */}
                <div className={styles.iconWrapper}>
                  <IconComp className={styles.cardIcon} />
                </div>
                
                {/* Title */}
                <h3 className={styles.cardTitle}>{item.title}</h3>
                
                {/* Description */}
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FutureSmartConnections;
