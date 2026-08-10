import React from 'react';
import { FiShield, FiMessageSquare, FiAward, FiTrendingUp } from 'react-icons/fi';
import styles from '../styles/AboutDifference.module.css';

const AboutDifference = () => {
  return (
    <section className={styles.differenceSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>WHY TRUSTED NETWORK</span>
          </div>

          <h2 className={styles.sectionTitle}>
            More Than Just Business Networking
          </h2>
        </div>

        {/* DESKTOP & TABLET: Central Network Ecosystem Layout */}
        <div className={styles.ecosystemLayout}>
          {/* Central Glowing Core Node */}
          <div className={styles.networkCore}>
            <div className={styles.coreBadge}>TN</div>
            <div className={styles.coreSubtitle}>TRUSTED NETWORK</div>
          </div>

          {/* Top-Left: 01 Trusted Connections */}
          <div className={`${styles.featureCard} ${styles.featureTopLeft}`}>
            <div className={styles.cardHeader}>
              <span className={styles.featureNumber}>01</span>
              <div className={styles.featureIconWrapper}>
                <FiShield className={styles.featureIcon} />
              </div>
            </div>
            <h3 className={styles.featureTitle}>TRUSTED CONNECTIONS</h3>
            <p className={styles.featureText}>
              Build relationships with genuine business professionals.
            </p>
          </div>

          {/* Top-Right: 02 Meaningful Engagement */}
          <div className={`${styles.featureCard} ${styles.featureTopRight}`}>
            <div className={styles.cardHeader}>
              <span className={styles.featureNumber}>02</span>
              <div className={styles.featureIconWrapper}>
                <FiMessageSquare className={styles.featureIcon} />
              </div>
            </div>
            <h3 className={styles.featureTitle}>MEANINGFUL ENGAGEMENT</h3>
            <p className={styles.featureText}>
              Focus on conversations, recommendations, referrals, and valuable business interactions.
            </p>
          </div>

          {/* Bottom-Left: 03 Business Opportunities */}
          <div className={`${styles.featureCard} ${styles.featureBottomLeft}`}>
            <div className={styles.cardHeader}>
              <span className={styles.featureNumber}>03</span>
              <div className={styles.featureIconWrapper}>
                <FiAward className={styles.featureIcon} />
              </div>
            </div>
            <h3 className={styles.featureTitle}>BUSINESS OPPORTUNITIES</h3>
            <p className={styles.featureText}>
              Discover relevant opportunities, collaborations, and potential business connections.
            </p>
          </div>

          {/* Bottom-Right: 04 Growth-Focused Networking */}
          <div className={`${styles.featureCard} ${styles.featureBottomRight}`}>
            <div className={styles.cardHeader}>
              <span className={styles.featureNumber}>04</span>
              <div className={styles.featureIconWrapper}>
                <FiTrendingUp className={styles.featureIcon} />
              </div>
            </div>
            <h3 className={styles.featureTitle}>GROWTH-FOCUSED NETWORKING</h3>
            <p className={styles.featureText}>
              Turn professional relationships into long-term business growth.
            </p>
          </div>
        </div>

        {/* MOBILE: Vertical Timeline Network */}
        <div className={styles.mobileTimeline}>
          <div className={styles.mobileLine}></div>

          <div className={styles.mobileItem}>
            <div className={styles.mobileNode}>01</div>
            <div className={styles.mobileContent}>
              <h3 className={styles.mobileTitle}>TRUSTED CONNECTIONS</h3>
              <p className={styles.mobileText}>
                Build relationships with genuine business professionals.
              </p>
            </div>
          </div>

          <div className={styles.mobileItem}>
            <div className={styles.mobileNode}>02</div>
            <div className={styles.mobileContent}>
              <h3 className={styles.mobileTitle}>MEANINGFUL ENGAGEMENT</h3>
              <p className={styles.mobileText}>
                Focus on conversations, recommendations, referrals, and valuable business interactions.
              </p>
            </div>
          </div>

          <div className={styles.mobileItem}>
            <div className={styles.mobileNode}>03</div>
            <div className={styles.mobileContent}>
              <h3 className={styles.mobileTitle}>BUSINESS OPPORTUNITIES</h3>
              <p className={styles.mobileText}>
                Discover relevant opportunities, collaborations, and potential business connections.
              </p>
            </div>
          </div>

          <div className={styles.mobileItem}>
            <div className={styles.mobileNode}>04</div>
            <div className={styles.mobileContent}>
              <h3 className={styles.mobileTitle}>GROWTH-FOCUSED NETWORKING</h3>
              <p className={styles.mobileText}>
                Turn professional relationships into long-term business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDifference;

