import React from 'react';
import { FiCpu, FiTarget, FiZap } from 'react-icons/fi';
import styles from '../styles/FutureSmartConnections.module.css';

const FutureSmartConnections = () => {
  const capabilities = [
    {
      number: '01',
      title: 'AI-Powered Matching',
      description: 'Smart algorithms designed to align business goals, industries, and complementary capabilities.',
      icon: FiCpu,
    },
    {
      number: '02',
      title: 'Relevant Recommendations',
      description: 'Contextual discovery that highlights high-potential connections based on active requirements.',
      icon: FiTarget,
    },
    {
      number: '03',
      title: 'Opportunity Discovery',
      description: 'Proactive identification of synergies, joint ventures, and market expansion paths.',
      icon: FiZap,
    },
  ];

  return (
    <section className={styles.connectionsSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>SMARTER BUSINESS CONNECTIONS</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Building More Intelligent Business Connections
          </h2>
        </div>

        <div className={styles.asymmetricLayout}>
          {/* LEFT: CSS Shape & Node Matching Hub */}
          <div className={styles.visualHub}>
            <div className={styles.outerRing}></div>
            <div className={styles.innerRing}></div>

            <div className={styles.centerNode}>
              <span className={styles.centerText}>TN HUB</span>
            </div>

            <div className={`${styles.orbitNode} ${styles.orbit1}`}>
              <span>AI</span>
            </div>
            <div className={`${styles.orbitNode} ${styles.orbit2}`}>
              <span>MATCH</span>
            </div>
            <div className={`${styles.orbitNode} ${styles.orbit3}`}>
              <span>SYNC</span>
            </div>
            <div className={`${styles.orbitNode} ${styles.orbit4}`}>
              <span>GROW</span>
            </div>
          </div>

          {/* RIGHT: Capability Blocks */}
          <div className={styles.capabilitiesList}>
            {capabilities.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div key={cap.number} className={styles.capBlock}>
                  <div className={styles.capIconWrapper}>
                    <IconComp className={styles.capIcon} />
                  </div>

                  <div className={styles.capBody}>
                    <div className={styles.capHeader}>
                      <span className={styles.capNumber}>{cap.number}</span>
                      <h3 className={styles.capTitle}>{cap.title}</h3>
                    </div>
                    <p className={styles.capDesc}>{cap.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSmartConnections;
