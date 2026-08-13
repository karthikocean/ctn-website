import React, { useState } from 'react';
import { FiActivity, FiStar, FiGift } from 'react-icons/fi';
import styles from '../styles/FutureNetworkingExperience.module.css';

const FutureNetworkingExperience = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabsData = [
    {
      id: 'participate',
      title: 'Participate',
      desc: 'Stay involved through meaningful business activities, conversations, updates, requirements, and community participation.',
      icon: FiActivity,
    },
    {
      id: 'earn-points',
      title: 'Earn Points',
      desc: 'Eligible activities and meaningful participation can help members earn points within the Trusted Network experience.',
      icon: FiStar,
    },
    {
      id: 'redeem-benefits',
      title: 'Redeem Benefits',
      desc: 'Use eligible points to unlock selected experiences and benefits available across the platform.',
      icon: FiGift,
    },
  ];

  const currentTab = tabsData[activeTabIndex];
  const ActiveIcon = currentTab.icon;

  return (
    <section className={styles.pointsSection}>
      <div className="container">
        {/* Header Wrapper */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>POINTS SECTION</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Participation & Value
          </h2>

          <p className={styles.sectionDescription}>
            Participate in the community, earn eligible points, and redeem rewards across the Trusted Network platform.
          </p>
        </div>

        {/* 3 Interactive Tabs Navigation */}
        <div className={styles.tabContainer}>
          <div className={styles.tabsRow} role="tablist">
            {tabsData.map((tab, idx) => {
              const TabIcon = tab.icon;
              const isActive = activeTabIndex === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.tabBtn} ${isActive ? styles.activeTabBtn : ''}`}
                  onClick={() => setActiveTabIndex(idx)}
                >
                  <TabIcon className={styles.tabIcon} />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Premium Content Display Panel Below Tabs */}
        <div className={styles.displayPanel}>
          <div className={styles.panelBackdrop}></div>
          <div className={styles.panelContent}>
            <div className={styles.iconCircle}>
              <ActiveIcon className={styles.largeIcon} />
            </div>

            <h3 className={styles.displayTitle}>{currentTab.title}</h3>
            <p className={styles.displayDesc}>{currentTab.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureNetworkingExperience;
