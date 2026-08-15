import React from 'react';
import { FiUserCheck, FiCompass, FiUsers, FiActivity, FiStar, FiGift } from 'react-icons/fi';
import styles from '../styles/FutureDirection.module.css';

const roadmapData = [
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
    desc: 'Share business updates, post requirements, celebrate milestones, and participate in the community.',
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
    desc: 'Meaningful participation can help you earn points and unlock additional value across the experience.',
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

const FutureDirection = () => {
  return (
    <section className={styles.directionSection}>
      <div className="container">
        {/* Header Block */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span className={styles.badgeText}>THE FUTURE OF BUSINESS NETWORKING</span>
          </div>
          <h2 className={styles.sectionTitle}>Overall Journey</h2>
          <p className={styles.sectionDescription}>
            A streamlined roadmap designed to help business owners connect, engage, and unlock value across the Trusted Network ecosystem.
          </p>
        </div>

        {/* Roadmap Timeline Journey */}
        <div className={styles.roadmapWrapper}>
          {/* Connecting Line (Desktop Only) */}
          <div className={styles.connectingLine}></div>

          {/* Roadmap Grid */}
          <div className={styles.roadmapGrid}>
            {roadmapData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className={styles.roadmapItem}>
                  {/* Step Node */}
                  <div className={styles.nodeWrapper}>
                    <div className={styles.nodeCircle}>
                      <Icon className={styles.nodeIcon} />
                    </div>
                  </div>

                  {/* Info Card */}
                  <div className={styles.contentCard}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDesc}>{item.desc}</p>
                    <ul className={styles.bulletList}>
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className={styles.bulletItem}>
                          <span className={styles.bulletDot}>•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
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

export default FutureDirection;
