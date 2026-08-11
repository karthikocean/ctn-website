import React from 'react';
import { FiSliders, FiUsers, FiMessageCircle, FiCompass } from 'react-icons/fi';
import styles from '../styles/FutureNetworkingExperience.module.css';

const FutureNetworkingExperience = () => {
  const capabilities = [
    {
      id: 'personalized',
      title: 'Personalized Networking',
      desc: 'Discover business connections and opportunities that are relevant to your business.',
      icon: FiSliders,
    },
    {
      id: 'connections',
      title: 'Relevant Business Connections',
      desc: 'Find the right business people based on category, location, expertise and requirements.',
      icon: FiUsers,
    },
    {
      id: 'interactions',
      title: 'Meaningful Interactions',
      desc: 'Build stronger relationships through relevant conversations, referrals and business activities.',
      icon: FiMessageCircle,
    },
    {
      id: 'opportunities',
      title: 'Smarter Opportunities',
      desc: 'Discover new business opportunities based on your network, interests and business needs.',
      icon: FiCompass,
    },
  ];

  return (
    <section className={styles.experienceSection}>
      <div className="container">
        {/* SECTION HEADER */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>SMARTER NETWORKING EXPERIENCE</span>
          </div>

          <h2 className={styles.sectionTitle}>
            A Smarter Way to Build Business Connections
          </h2>

          <p className={styles.sectionDescription}>
            Trusted Network is evolving the way businesses connect. Discover relevant business owners, meaningful connections and new opportunities based on your business interests, needs and network.
          </p>
        </div>

        {/* 2x2 FEATURE CAPABILITY CARDS GRID */}
        <div className={styles.cardsGrid}>
          {capabilities.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.id} className={styles.capabilityCard}>
                {/* Icon Wrapper on Left */}
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <IconComp className={styles.cardIcon} />
                  </div>
                </div>

                {/* Card Content: Title & Description */}
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>

                {/* Gold Decorative Accent Line */}
                <div className={styles.goldBarAccent}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FutureNetworkingExperience;
