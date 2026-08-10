import React from 'react';
import styles from '../styles/AboutGrowthFlow.module.css';

const AboutGrowthFlow = () => {
  return (
    <section className={styles.growthSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>HOW IT WORKS</span>
          </div>

          <h2 className={styles.sectionTitle}>
            From Connection to Growth
          </h2>
        </div>

        <div className={styles.growthSteps}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <h3 className={styles.stepTitle}>CONNECT</h3>
            <p className={styles.stepText}>
              Meet relevant business professionals.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <h3 className={styles.stepTitle}>ENGAGE</h3>
            <p className={styles.stepText}>
              Start meaningful conversations and build relationships.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <h3 className={styles.stepTitle}>COLLABORATE</h3>
            <p className={styles.stepText}>
              Exchange recommendations, knowledge, referrals, and opportunities.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>04</div>
            <h3 className={styles.stepTitle}>GROW</h3>
            <p className={styles.stepText}>
              Turn trusted relationships into sustainable business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGrowthFlow;
