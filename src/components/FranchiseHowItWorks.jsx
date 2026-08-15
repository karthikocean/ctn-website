import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiPhoneCall, FiLock, FiFlag } from 'react-icons/fi';
import styles from '../styles/FranchiseHowItWorks.module.css';

const stepsData = [
  {
    icon: FiFileText,
    title: 'Submit Application',
    desc: 'Fill out the online application form with your details, target territory, and professional background.',
  },
  {
    icon: FiPhoneCall,
    title: 'Discovery Call',
    desc: 'Engage in a discovery call with our expansion team to discuss target goals, territory potential, and mutual alignment.',
  },
  {
    icon: FiLock,
    title: 'Agreement & Approval',
    desc: 'Sign the franchise partnership agreement to officially lock in the exclusive territory rights for your region.',
  },
  {
    icon: FiFlag,
    title: 'Setup & Launch',
    desc: 'Receive full training, tools, and marketing collateral to onboard members, host events, and grow your local network.',
  },
];

const FranchiseHowItWorks = () => {
  return (
    <section className={styles.howItWorksSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span className={styles.badgeText}>FRANCHISE PROCESS</span>
          </div>
          <h2 className={styles.sectionTitle}>How the Franchise Works</h2>
          <p className={styles.sectionDescription}>
            A step-by-step roadmap to launch, manage, and scale a Trusted Network franchise in your exclusive territory.
          </p>
        </div>

        {/* Workflow Timeline Wrapper */}
        <div className={styles.timelineWrapper}>
          {/* Connecting Line (Desktop Only) */}
          <div className={styles.connectingLine}></div>

          {/* Steps Row */}
          <div className={styles.stepsGrid}>
            {stepsData.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className={styles.stepCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Step Icon Node */}
                  <div className={styles.iconNodeWrapper}>
                    <div className={styles.iconCircle}>
                      <Icon />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <div className={styles.goldAccent}></div>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseHowItWorks;
