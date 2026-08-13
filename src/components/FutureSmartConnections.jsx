import React from 'react';
import { FiSearch, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';
import pushpinImg from '../assets/yellow_pushpin.webp';
import styles from '../styles/FutureSmartConnections.module.css';

const FutureSmartConnections = () => {
  const cards = [
    {
      id: 'discover',
      title: 'Discover',
      description: 'Find relevant businesses and professionals based on your interests, needs, and business goals.',
      icon: FiSearch,
      cardClass: styles.cardRotateLeft,
    },
    {
      id: 'engage',
      title: 'Engage',
      description: 'Share updates, explore opportunities, interact with members, and start meaningful conversations.',
      icon: FiMessageSquare,
      cardClass: styles.cardRotateRight,
    },
    {
      id: 'build-relationships',
      title: 'Build Relationships',
      description: 'Turn valuable interactions into trusted professional relationships and future business opportunities.',
      icon: FiTrendingUp,
      cardClass: styles.cardRotateCenter,
    },
  ];

  return (
    <section className={styles.connectionsSection}>
      <div className="container">
        {/* Header */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>NETWORKING SECTION</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Smarter Networking
          </h2>

          <p className={styles.sectionDesc}>
            Connect with verified business owners and turn initial discoveries into lasting professional partnerships.
          </p>
        </div>

        {/* Board Canvas with 3 Pinned Note Cards */}
        <div className={styles.boardCanvas}>
          {/* Desktop Only Connection Line (Hidden on Tablet & Mobile) */}
          <div className={styles.desktopConnectionLine}>
            <svg viewBox="0 0 900 120" fill="none" preserveAspectRatio="none" className={styles.svgLine}>
              <path
                d="M 150 60 Q 450 15 750 60"
                stroke="#C8A951"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                opacity="0.85"
              />
            </svg>
          </div>

          {/* Cards Grid */}
          <div className={styles.cardsGrid}>
            {cards.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className={`${styles.pinnedCard} ${item.cardClass}`}>
                  {/* Pushpin Image Asset at Top Center */}
                  <div className={styles.pinWrapper}>
                    <img src={pushpinImg} alt="Pin" className={styles.pushpinImg} />
                  </div>

                  <div className={styles.cardHeaderBox}>
                    <div className={styles.iconWrapper}>
                      <IconComp className={styles.cardIcon} />
                    </div>
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSmartConnections;
