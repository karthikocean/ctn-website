import React from 'react';
import { FiShoppingBag, FiCalendar, FiBookOpen, FiLayers } from 'react-icons/fi';
import styles from '../styles/FutureGrowthIntelligence.module.css';

const FutureGrowthIntelligence = () => {
  const cards = [
    {
      id: 'marketplace',
      title: 'Marketplace',
      desc: 'Explore eligible marketplace benefits and business opportunities.',
      icon: FiShoppingBag,
    },
    {
      id: 'events',
      title: 'Events',
      desc: 'Access selected networking events and business experiences.',
      icon: FiCalendar,
    },
    {
      id: 'learning',
      title: 'Learning',
      desc: 'Unlock selected training videos and learning resources.',
      icon: FiBookOpen,
    },
    {
      id: 'more-benefits',
      title: 'More Benefits',
      desc: 'Discover additional experiences and benefits available through the platform.',
      icon: FiLayers,
    },
  ];

  return (
    <section className={styles.redemptionSection}>
      <div className="container">
        {/* Header Block */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>REDEMPTION SECTION</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Put Your Points to Work
          </h2>

          <p className={styles.sectionDescription}>
            Eligible points can unlock selected experiences across the Trusted Network ecosystem.
          </p>
        </div>

        {/* 2-Column Horizontal Cards Grid */}
        <div className={styles.cardsGrid}>
          {cards.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.id} className={styles.redemptionCard}>
                <div className={styles.iconContainer}>
                  <IconComp className={styles.cardIcon} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FutureGrowthIntelligence;
