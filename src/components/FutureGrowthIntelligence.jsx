import React from 'react';
import { FiPieChart, FiTrendingUp, FiActivity } from 'react-icons/fi';
import styles from '../styles/FutureGrowthIntelligence.module.css';

const FutureGrowthIntelligence = () => {
  const insights = [
    {
      id: 'insights',
      title: 'Networking Insights',
      desc: 'Visualizing network strength and relationship engagement trends.',
      icon: FiPieChart,
    },
    {
      id: 'analytics',
      title: 'Connection Analytics',
      desc: 'Understanding referral velocity and partner ecosystem health.',
      icon: FiTrendingUp,
    },
    {
      id: 'activity',
      title: 'Business Activity Insights',
      desc: 'Actionable feedback to optimize networking return on investment.',
      icon: FiActivity,
    },
  ];

  return (
    <section className={styles.intelligenceSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>BUSINESS GROWTH INTELLIGENCE</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Turning Business Activity Into Better Insights
          </h2>

          <p className={styles.sectionDescription}>
            Empowering professionals with data-driven clarity to build higher-value connections and accelerate growth.
          </p>
        </div>

        {/* Abstract Analytics Visual Container */}
        <div className={styles.intelligenceContainer}>
          {/* Top Graph Visual Indicator */}
          <div className={styles.graphVisualHeader}>
            <div className={styles.graphNodesWrapper}>
              <span className={styles.graphBar1}></span>
              <span className={styles.graphBar2}></span>
              <span className={styles.graphBar3}></span>
              <span className={styles.graphBar4}></span>
              <span className={styles.graphBar5}></span>
            </div>
            <span className={styles.graphLabel}>GROWTH INTELLIGENCE ENGINE</span>
          </div>

          {/* 3 Insight Cards */}
          <div className={styles.insightsGrid}>
            {insights.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.id} className={styles.insightCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <IconComp className={styles.cardIcon} />
                    </div>
                    <span className={styles.indicatorDot}></span>
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureGrowthIntelligence;
