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
            Turn Business Relationships Into Opportunities
          </h2>
          <p className={styles.sectionSubTitle}>
            Build meaningful relationships, engage with the right business community, and create valuable opportunities through a trusted professional network.
          </p>
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
            <h3 className={styles.cardTitle}>DISCOVER</h3>
            <p className={styles.cardText}>
              Find relevant businesses, professionals and new possibilities through your network.
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
            <h3 className={styles.cardTitle}>ENGAGE</h3>
            <p className={styles.cardText}>
              Exchange ideas, share value, participate in meaningful business conversations.
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
            <h3 className={styles.cardTitle}>CREATE VALUE</h3>
            <p className={styles.cardText}>
              Turn meaningful relationships into referrals, partnerships and business opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPurpose;
