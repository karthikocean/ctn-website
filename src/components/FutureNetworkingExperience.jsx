import React from 'react';
import { FiSliders, FiUsers, FiCompass, FiAward } from 'react-icons/fi';
import styles from '../styles/FutureNetworkingExperience.module.css';

const FutureNetworkingExperience = () => {
  const features = [
    {
      id: 'feed',
      title: 'Personalized Activity Stream',
      desc: 'Custom feed tailored to your industry, business interests, and engagement goals.',
      icon: FiSliders,
    },
    {
      id: 'recommendations',
      title: 'Contextual Member Matching',
      desc: 'Algorithmic suggestions highlighting members looking for your specific expertise.',
      icon: FiUsers,
    },
    {
      id: 'discovery',
      title: 'Curated Opportunity Hub',
      desc: 'Discover business leads, requirements, and collaborative projects in real time.',
      icon: FiCompass,
    },
    {
      id: 'reputation',
      title: 'Verified Trust Scoring',
      desc: 'Transparent trust signals and recommendation scores elevating your credibility.',
      icon: FiAward,
    },
  ];

  return (
    <section className={styles.experienceSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>SMARTER NETWORKING EXPERIENCE</span>
          </div>

          <h2 className={styles.sectionTitle}>
            A More Personalized Networking Experience
          </h2>

          <p className={styles.sectionDescription}>
            Designed to deliver relevant interactions, targeted recommendations, and high-value networking.
          </p>
        </div>

        {/* Dashboard Concept Grid */}
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardGrid}>
            {features.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className={styles.panelCard}>
                  <div className={styles.panelHeader}>
                    <div className={styles.iconWrapper}>
                      <IconComp className={styles.panelIcon} />
                    </div>
                    <span className={styles.statusBadge}>FUTURE CONCEPT</span>
                  </div>

                  <h3 className={styles.panelTitle}>{item.title}</h3>
                  <p className={styles.panelDesc}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureNetworkingExperience;
