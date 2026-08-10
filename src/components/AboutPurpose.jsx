import React from 'react';
import { FiUsers, FiBriefcase, FiTrendingUp } from 'react-icons/fi';
import styles from '../styles/AboutPurpose.module.css';

const AboutPurpose = () => {
  return (
    <section className={styles.purposeSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>OUR PURPOSE</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Connect. Collaborate. Grow.
          </h2>
        </div>

        <div className={styles.purposeBoard}>
          {/* Straight Dotted Connection Line */}
          <div className={styles.connectingLine}></div>

          {/* Card 01 - Connect */}
          <div className={styles.purposeCard}>
            <div className={styles.pin}></div>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>01</span>
              <div className={styles.iconWrapper}>
                <FiUsers className={styles.cardIcon} />
              </div>
            </div>
            <h3 className={styles.cardTitle}>CONNECT</h3>
            <p className={styles.cardText}>
              Build meaningful relationships with verified business professionals and entrepreneurs.
            </p>
          </div>

          {/* Card 02 - Collaborate */}
          <div className={styles.purposeCard}>
            <div className={styles.pin}></div>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>02</span>
              <div className={styles.iconWrapper}>
                <FiBriefcase className={styles.cardIcon} />
              </div>
            </div>
            <h3 className={styles.cardTitle}>COLLABORATE</h3>
            <p className={styles.cardText}>
              Share knowledge, recommendations, opportunities, and business experiences with the right network.
            </p>
          </div>

          {/* Card 03 - Grow */}
          <div className={`${styles.purposeCard} ${styles.cardGrowEmphasis}`}>
            <div className={styles.pin}></div>
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>03</span>
              <div className={styles.iconWrapper}>
                <FiTrendingUp className={styles.cardIcon} />
              </div>
            </div>
            <h3 className={styles.cardTitle}>GROW</h3>
            <p className={styles.cardText}>
              Turn trusted relationships into referrals, partnerships, opportunities, and long-term business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPurpose;


