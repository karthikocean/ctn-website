import React from 'react';
import { FiTarget, FiCompass } from 'react-icons/fi';
import styles from '../styles/AboutMissionVision.module.css';
import bgImg from '../assets/hero_networking.png';

const AboutMissionVision = () => {
  return (
    <section
      className={styles.missionVisionSection}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={styles.missionVisionOverlay}></div>

      <div className={`container ${styles.relativeContainer}`}>
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>OUR MISSION & VISION</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Driving Purposeful Business Networking
          </h2>

          <p className={styles.supportingText}>
            Empowering businesses through trust, collaboration, and high-impact connections across India.
          </p>
        </div>

        {/* Side-by-side Flex Row Panels */}
        <div className={styles.panelsFlexRow}>
          {/* Mission Panel - White Surface */}
          <div className={styles.missionPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.panelIconWrapper}>
                <FiTarget className={styles.panelIcon} />
              </div>
              <h3 className={styles.panelTitle}>OUR MISSION</h3>
            </div>
            <p className={styles.panelText}>
              To create a trusted professional networking environment where businesses can connect meaningfully, exchange value, and discover opportunities for sustainable growth.
            </p>
          </div>

          {/* Vision Panel - White Surface */}
          <div className={styles.visionPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.panelIconWrapper}>
                <FiCompass className={styles.panelIcon} />
              </div>
              <h3 className={styles.panelTitle}>OUR VISION</h3>
            </div>
            <p className={styles.panelText}>
              To build a strong business networking ecosystem where trusted relationships become a foundation for collaboration, referrals, partnerships, and business growth across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;



