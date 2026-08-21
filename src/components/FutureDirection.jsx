import React from 'react';
import { FiUserCheck, FiCompass, FiUsers, FiActivity, FiStar, FiGift } from 'react-icons/fi';
import styles from '../styles/FutureDirection.module.css';

const roadmapData = [
  {
    id: 'register',
    step: '01',
    title: 'Register',
    desc: 'Create your business profile and become part of a verified business network.',
    icon: FiUserCheck,
  },
  {
    id: 'get-started',
    step: '02',
    title: 'Get Started',
    desc: 'Choose the right membership and begin exploring the opportunities available across your network.',
    icon: FiCompass,
  },
  {
    id: 'build-network',
    step: '03',
    title: 'Build Your Network',
    desc: 'Discover relevant businesses, create meaningful connections, and start conversations with the right people.',
    icon: FiUsers,
  },
  {
    id: 'stay-active',
    step: '04',
    title: 'Stay Active',
    desc: 'Share business updates, post requirements, celebrate milestones, and participate in the community.',
    icon: FiActivity,
  },
  {
    id: 'earn-points',
    step: '05',
    title: 'Earn Points',
    desc: 'Meaningful participation can help you earn points and unlock additional value across the experience.',
    icon: FiStar,
  },
  {
    id: 'redeem-benefits',
    step: '06',
    title: 'Redeem Benefits',
    desc: 'Use eligible points to access selected marketplace, event, learning, and other platform experiences.',
    icon: FiGift,
  },
];

const FutureDirection = () => {
  const leftCards  = roadmapData.slice(0, 3);
  const rightCards = roadmapData.slice(3);

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

        {/* Two-Column Card Layout */}
        <div className={styles.twoColWrapper}>

          {/* Left Column — Steps 01–03 */}
          <div className={styles.cardColumn}>
            {leftCards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className={styles.journeyCard}>
                  <div className={styles.iconWrap}>
                    <Icon className={styles.cardIcon} />
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.stepBadge}>{item.step}</span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Divider */}
          <div className={styles.centerDivider}>
            {/* <div className={styles.dividerLine}></div>
            <div className={styles.dividerIcon}>
              <FiActivity className={styles.dividerSvg} />
            </div> */}
            {/* <div className={styles.dividerLine}></div> */}
          </div>

          {/* Right Column — Steps 04–06 */}
          <div className={styles.cardColumn}>
            {rightCards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className={styles.journeyCard}>
                  <div className={styles.iconWrap}>
                    <Icon className={styles.cardIcon} />
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.stepBadge}>{item.step}</span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
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
