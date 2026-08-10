import React from 'react';
import styles from '../styles/AboutNetworkStats.module.css';

const AboutNetworkStats = () => {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>OUR GROWING NETWORK</span>
          </div>

          <h2 className={styles.sectionTitle}>
            A Network Built for Business Growth
          </h2>
        </div>

        <div className={styles.networkStats}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>8,000+</div>
            <div className={styles.statLabel}>ACTIVE TN MEMBERS</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>GST VERIFIED BUSINESSES</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNumber}>250+</div>
            <div className={styles.statLabel}>BUSINESS CATEGORIES</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNetworkStats;
