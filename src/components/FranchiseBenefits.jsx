import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiTrendingUp, FiMonitor, FiAward } from 'react-icons/fi';
import styles from '../styles/FranchiseBenefits.module.css';

const benefitsData = [
  {
    icon: FiMapPin,
    title: 'Exclusive Territory Partner',
    desc: 'Secure exclusive rights to operate and expand the Trusted Network ecosystem in your designated region.',
  },
  {
    icon: FiTrendingUp,
    title: 'Proven Revenue Model',
    desc: 'Benefit from multiple streams of income including membership subscriptions, local events, and sponsorships.',
  },
  {
    icon: FiMonitor,
    title: 'Advanced Tech Platform',
    desc: 'Leverage our state-of-the-art mobile application and automated event management tools to run local chapters smoothly.',
  },
  {
    icon: FiAward,
    title: 'Comprehensive Setup Support',
    desc: 'Receive complete marketing collateral, training material, operations manuals, and hands-on mentoring.',
  },
];

const FranchiseBenefits = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span className={styles.badgeText}>FRANCHISE BENEFITS</span>
          </div>
          <h2 className={styles.sectionTitle}>Why Partner with Trusted Network?</h2>
          <p className={styles.sectionDescription}>
            Discover the advantages of launching a franchise in your territory and building a powerful local business community.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className={styles.cardsGrid}>
          {benefitsData.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Floating circular icon badge overlapping left side */}
                <div className={styles.iconCircle}>
                  <Icon />
                </div>
                
                {/* Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{benefit.title}</h3>
                  <p className={styles.cardDesc}>{benefit.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FranchiseBenefits;
