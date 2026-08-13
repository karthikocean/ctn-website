import React from 'react';
import { FiShare2, FiEdit3, FiAward, FiCompass } from 'react-icons/fi';
import styles from '../styles/FutureBusinessOpportunities.module.css';

const FutureBusinessOpportunities = () => {
  const cards = [
    {
      id: 'updates',
      title: 'Share Business Updates',
      desc: 'Share relevant updates and keep your business visible within your network.',
      icon: FiShare2,
    },
    {
      id: 'requirements',
      title: 'Post Requirements',
      desc: 'Share what your business needs and discover relevant opportunities.',
      icon: FiEdit3,
    },
    {
      id: 'milestones',
      title: 'Celebrate Milestones',
      desc: 'Share achievements and important business milestones with your network.',
      icon: FiAward,
    },
    {
      id: 'opportunities',
      title: 'Explore Opportunities',
      desc: 'Discover relevant business opportunities and valuable interactions.',
      icon: FiCompass,
    },
  ];

  return (
    <section className={styles.opportunitiesSection}>
      <div className="container">
        {/* Header Wrapper */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>ACTIVITY SECTION</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Make Every Interaction Count
          </h2>

          <p className={styles.sectionDescription}>
            Trusted Network gives members meaningful ways to stay active, participate in the business community, and discover new opportunities.
          </p>
        </div>

        {/* 4 Premium SaaS Cards Grid */}
        <div className={styles.cardsGrid}>
          {cards.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.id} className={styles.saasCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <IconComp className={styles.cardIcon} />
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>

                <div className={styles.goldLineAccent}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FutureBusinessOpportunities;
