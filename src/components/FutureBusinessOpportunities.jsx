import React from 'react';
import { FiShare2, FiUsers, FiBriefcase, FiGlobe } from 'react-icons/fi';
import styles from '../styles/FutureBusinessOpportunities.module.css';

const FutureBusinessOpportunities = () => {
  const nodes = [
    {
      id: 'referrals',
      title: 'Structured Referrals',
      desc: 'Seamless referral routing between verified network partners.',
      icon: FiShare2,
    },
    {
      id: 'partnerships',
      title: 'Strategic Partnerships',
      desc: 'Collaborative alliances for joint service delivery and expansion.',
      icon: FiUsers,
    },
    {
      id: 'requirements',
      title: 'Requirement Matching',
      desc: 'Live demand discovery across verified business profiles.',
      icon: FiBriefcase,
    },
    {
      id: 'cross-industry',
      title: 'Cross-Industry Access',
      desc: 'Breaking traditional industry silos to unlock new channels.',
      icon: FiGlobe,
    },
  ];

  return (
    <section className={styles.opportunitiesSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>EXPANDING BUSINESS OPPORTUNITIES</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Creating More Paths for Business Growth
          </h2>

          <p className={styles.sectionDescription}>
            Building connected opportunity channels that transform business requirements into measurable growth.
          </p>
        </div>

        {/* Opportunity Map Flow Grid */}
        <div className={styles.mapContainer}>
          <div className={styles.mapGrid}>
            {nodes.map((node) => {
              const IconComp = node.icon;
              return (
                <div key={node.id} className={styles.nodeCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <IconComp className={styles.nodeIcon} />
                    </div>
                    <span className={styles.goldConnectorDot}></span>
                  </div>

                  <h3 className={styles.nodeTitle}>{node.title}</h3>
                  <p className={styles.nodeDesc}>{node.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureBusinessOpportunities;
