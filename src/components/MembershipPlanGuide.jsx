import React from 'react';
import { FiTarget, FiTrendingUp, FiAward } from 'react-icons/fi';
import styles from '../styles/MembershipPlanGuide.module.css';

const MembershipPlanGuide = () => {
  const stages = [
    {
      number: "01",
      name: "STARTUP",
      icon: FiTarget,
      bestFor: "New entrepreneurs and small businesses building their initial business network.",
      focus: "Build your foundation.",
      recommended: false,
    },
    {
      number: "02",
      name: "ADVANCED",
      icon: FiTrendingUp,
      bestFor: "Growing businesses looking for greater visibility and more networking opportunities.",
      focus: "Expand your reach.",
      recommended: true,
    },
    {
      number: "03",
      name: "BUSINESS",
      icon: FiAward,
      bestFor: "Established professionals and businesses seeking maximum networking opportunities.",
      focus: "Maximise your network.",
      recommended: false,
    },
  ];

  return (
    <section className={styles.guideSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>CHOOSE YOUR PLAN</span>
          </div>

          <h2 className={styles.sectionTitle}>Which Plan Is Right for You?</h2>

          <p className={styles.sectionDescription}>
            Choose a membership based on where your business is today and how actively you want to expand your professional network.
          </p>
        </div>

        <div className={styles.journeyContainer}>
          <div className={styles.connectingLine}></div>

          <div className={styles.stagesGrid}>
            {stages.map((stage) => {
              const IconComponent = stage.icon;
              return (
                <div
                  key={stage.name}
                  className={`${styles.stageCard} ${stage.recommended ? styles.recommendedCard : ''}`}
                >
                  {stage.recommended && (
                    <span className={styles.recommendedBadge}>Recommended</span>
                  )}

                  <div className={styles.cardHeader}>
                    <span className={styles.stageNumber}>{stage.number}</span>
                    <div className={styles.stageIconWrapper}>
                      <IconComponent className={styles.stageIcon} />
                    </div>
                  </div>

                  <h3 className={styles.stageName}>{stage.name}</h3>

                  <div className={styles.bestForBlock}>
                    <span className={styles.bestForLabel}>Best for:</span>
                    <p className={styles.bestForText}>{stage.bestFor}</p>
                  </div>

                  <div className={styles.focusBlock}>
                    <span className={styles.focusLabel}>Focus:</span>
                    <p className={styles.focusText}>{stage.focus}</p>
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

export default MembershipPlanGuide;
