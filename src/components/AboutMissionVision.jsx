import React from 'react';
import { FiSearch, FiMessageSquare, FiTrendingUp, FiShield, FiShare2, FiUsers } from 'react-icons/fi';
import styles from '../styles/AboutMissionVision.module.css';

const AboutMissionVision = () => {
  const cardsData = [
    {
      id: 'discover',
      title: 'DISCOVER',
      description: 'Find relevant businesses, professionals and new possibilities through your network.',
      icon: FiSearch,
    },
    {
      id: 'engage',
      title: 'ENGAGE',
      description: 'Exchange ideas, share value, participate in meaningful business conversations.',
      icon: FiMessageSquare,
    },
    {
      id: 'create-value',
      title: 'CREATE VALUE',
      description: 'Turn meaningful relationships into referrals, partnerships and business opportunities.',
      icon: FiTrendingUp,
    },
    {
      id: 'build-trust',
      title: 'BUILD TRUST',
      description: 'Build meaningful and trusted relationships with relevant business professionals.',
      icon: FiShield,
    },
    {
      id: 'share-opportunities',
      title: 'SHARE OPPORTUNITIES',
      description: 'Share business opportunities, recommendations and valuable experiences with your network.',
      icon: FiShare2,
    },
    {
      id: 'stay-connected',
      title: 'STAY CONNECTED',
      description: 'Stay connected with the business community and discover new possibilities over time.',
      icon: FiUsers,
    },
  ];

  return (
    <section className={styles.missionVisionSection}>
      <div className={`container ${styles.relativeContainer}`}>
        {/* Header Block */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>OUR MISSION & VISION</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Driving Purposeful Business Networking
          </h2>

          <p className={styles.supportingText}>
            Empowering businesses through trust, collaboration, and high-impact connections across India.
          </p>
        </div>

        {/* 6-Card Layout Grid */}
        <div className={styles.cardsGrid}>
          {cardsData.map((card) => {
            const IconComponent = card.icon;
            return (
              <div key={card.id} className={styles.card}>
                <div className={styles.iconContainer}>
                  <IconComponent className={styles.cardIcon} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
