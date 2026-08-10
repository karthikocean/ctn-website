import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import styles from '../styles/MembershipUpgrade.module.css';

const MembershipUpgrade = () => {
  const steps = [
    {
      number: "01",
      title: "START",
      text: "Begin with the essentials you need to build your business network.",
    },
    {
      number: "02",
      title: "EXPAND",
      text: "Move to a broader networking experience as your business grows.",
    },
    {
      number: "03",
      title: "MAXIMISE",
      text: "Unlock the highest level of networking opportunities for your business.",
    },
  ];

  return (
    <section className={styles.upgradeSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>GROW WITH YOUR BUSINESS</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Start Where You Are. Upgrade When You're Ready.
          </h2>

          <p className={styles.sectionDescription}>
            Choose the membership that fits your current business needs and move to a higher plan as your networking goals and opportunities grow.
          </p>
        </div>

        {/* Horizontal Progression Journey */}
        <div className={styles.journeyWrapper}>
          <div className={styles.journeyLine}></div>

          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <React.Fragment key={step.title}>
                <div className={styles.stepCard}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <span className={styles.stepTag}>PHASE</span>
                  </div>

                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className={styles.desktopArrowWrapper}>
                    <FiArrowRight className={styles.arrowIcon} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <a href="#pricing" className={styles.ctaBtn}>
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default MembershipUpgrade;
