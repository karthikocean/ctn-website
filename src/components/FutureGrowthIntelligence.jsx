import React from 'react';
import { FiUsers, FiShare2, FiZap, FiCompass, FiGlobe, FiTrendingUp } from 'react-icons/fi';
import styles from '../styles/FutureGrowthIntelligence.module.css';

const FutureGrowthIntelligence = () => {
  const leftCards = [
    {
      id: 'left-01',
      title: 'Build Your Network',
      desc: 'Connect with business owners and professionals who can add value to your business.',
      icon: FiUsers,
    },
    {
      id: 'left-02',
      title: 'Strengthen Relationships',
      desc: 'Build meaningful connections and turn them into trusted business relationships.',
      icon: FiShare2,
    },
    {
      id: 'left-03',
      title: 'Share Your Business',
      desc: 'Promote your business, products, services, achievements and opportunities with the right community.',
      icon: FiZap,
    },
  ];

  const rightCards = [
    {
      id: 'right-04',
      title: 'Discover Opportunities',
      desc: 'Find new referrals, requirements, collaborations and business possibilities through your network.',
      icon: FiCompass,
    },
    {
      id: 'right-05',
      title: 'Expand Your Reach',
      desc: 'Connect beyond your local network and discover business opportunities across India.',
      icon: FiGlobe,
    },
    {
      id: 'right-06',
      title: 'Grow Your Business',
      desc: 'Turn the right connections, relationships and opportunities into real business growth.',
      icon: FiTrendingUp,
    },
  ];

  return (
    <section className={styles.intelligenceSection}>
      <div className="container">
        {/* HEADER BLOCK */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>BUSINESS GROWTH INTELLIGENCE</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Turn Business Connections Into Real Growth
          </h2>

          <p className={styles.sectionDescription}>
            Every business connection has the potential to create a new opportunity. Trusted Network helps you turn your networking activities and relationships into meaningful business opportunities and long-term growth.
          </p>
        </div>

        {/* 3 LEFT + 3 RIGHT MIRRORED CARD LAYOUT */}
        <div className={styles.growthGridWrapper}>
          {/* LEFT COLUMN: Text Right-Aligned, Icon on Right */}
          <div className={styles.leftColumn}>
            {leftCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div key={card.id} className={styles.leftGrowthCard}>
                  <div className={styles.cardTextContent}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDesc}>{card.desc}</p>
                  </div>
                  <div className={styles.iconContainer}>
                    <IconComp className={styles.cardIcon} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Text Left-Aligned, Icon on Left */}
          <div className={styles.rightColumn}>
            {rightCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div key={card.id} className={styles.rightGrowthCard}>
                  <div className={styles.iconContainer}>
                    <IconComp className={styles.cardIcon} />
                  </div>
                  <div className={styles.cardTextContent}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDesc}>{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM STATEMENT BLOCK */}
        <div className={styles.closingBanner}>
          <div className={styles.bannerGlow}></div>
          <div className={styles.bannerContent}>
            <div className={styles.bannerIconWrapper}>
              <FiTrendingUp className={styles.bannerIcon} />
            </div>
            <p className={styles.bannerText}>
              Build Stronger Connections. Create More Opportunities. Grow Your Business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureGrowthIntelligence;
