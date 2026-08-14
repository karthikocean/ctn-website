import React, { useState } from 'react';
import { FiUserCheck, FiCompass, FiUsers, FiActivity, FiStar, FiGift } from 'react-icons/fi';
import styles from '../styles/FutureDirection.module.css';

// Premium journey/roadmap component showing steps in the business networking ecosystem
const FutureDirection = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabsData = [
    {
      id: 'register',
      title: 'Register',
      desc: 'Create your business profile and become part of a verified business network.',
      icon: FiUserCheck,
      bullets: [
        'Verified business profile setup',
        'Instant member directory listing',
        'Access to community networking'
      ]
    },
    {
      id: 'get-started',
      title: 'Get Started',
      desc: 'Choose the right membership and begin exploring the opportunities available across your network.',
      icon: FiCompass,
      bullets: [
        'Choose flexible membership plans',
        'Explore business opportunities',
        'Connect with active members'
      ]
    },
    {
      id: 'build-network',
      title: 'Build Your Network',
      desc: 'Discover relevant businesses, create meaningful connections, and start conversations with the right people.',
      icon: FiUsers,
      bullets: [
        'Discover relevant industry peers',
        'Initiate direct business conversations',
        'Form trusted professional relationships'
      ]
    },
    {
      id: 'stay-active',
      title: 'Stay Active',
      desc: 'Share business updates, post requirements, celebrate milestones, explore opportunities, and participate in the community.',
      icon: FiActivity,
      bullets: [
        'Post business requirements and updates',
        'Share milestones and achievements',
        'Participate in networking discussions'
      ]
    },
    {
      id: 'earn-points',
      title: 'Earn Points',
      desc: 'Meaningful participation can help you earn points and unlock additional value across the Trusted Network experience.',
      icon: FiStar,
      bullets: [
        'Earn points through active participation',
        'Build trust score within community',
        'Unlock higher platform visibility'
      ]
    },
    {
      id: 'redeem-benefits',
      title: 'Redeem Benefits',
      desc: 'Use eligible points to access selected marketplace, event, learning, and other platform experiences.',
      icon: FiGift,
      bullets: [
        'Access marketplace offers',
        'Register for premium events',
        'Unlock exclusive learning resources'
      ]
    },
  ];

  const currentTab = tabsData[activeTabIndex];
  const ActiveIcon = currentTab.icon;

  return (
    <section className={styles.directionSection}>
      <div className="container">
        {/* Header Block */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>THE FUTURE OF BUSINESS NETWORKING</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Overall Journey
          </h2>

          <p className={styles.sectionDescription}>
            A streamlined roadmap designed to help business owners connect, engage, and unlock value across the Trusted Network ecosystem.
          </p>
        </div>

        {/* Tab-Based Journey Layout */}
        <div className={styles.journeyContainer}>
          {/* Left Side (Desktop) / Top Row (Mobile): Tab Navigation */}
          <div className={styles.tabSidebar}>
            <div className={styles.tabList} role="tablist">
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
                    <div className={styles.tabIndicator}></div>
                    <div className={styles.tabIconWrapper}>
                      <TabIcon className={styles.tabItemIcon} />
                    </div>
                    <span className={styles.tabText}>{tab.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side (Desktop) / Bottom Panel (Mobile): Active Content Display */}
          <div className={styles.contentPanel}>
            <div className={styles.panelInner}>
              {/* Horizontal Icon + Title Row */}
              <div className={styles.titleRow}>
                <div className={styles.iconCircle}>
                  <ActiveIcon className={styles.largeIcon} />
                </div>
                <h3 className={styles.activeTitle}>{currentTab.title}</h3>
              </div>

              {/* Description */}
              <p className={styles.activeDesc}>{currentTab.desc}</p>

              {/* Bullet Points */}
              <ul className={styles.bulletList}>
                {currentTab.bullets.map((bullet, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <span className={styles.bulletDot}>•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureDirection;
