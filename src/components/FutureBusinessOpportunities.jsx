import React, { useState } from 'react';
import { FiEdit3, FiUsers, FiShare2, FiAward, FiChevronRight, FiCheckCircle } from 'react-icons/fi';
import styles from '../styles/FutureBusinessOpportunities.module.css';

const FutureBusinessOpportunities = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'requirement',
      stepNum: '01',
      tabLabel: 'REQUIREMENT',
      title: 'Start With a Business Requirement',
      desc: 'A member can post a genuine business requirement describing what they need, such as a service, supplier, product, professional expertise or business support.',
      icon: FiEdit3,
      badge: 'STEP 01 — REQUIREMENT',
    },
    {
      id: 'connection',
      stepNum: '02',
      tabLabel: 'CONNECTION',
      title: 'Find the Right Connection',
      desc: 'Relevant members can discover the requirement and connect when their business, service or expertise matches the need.',
      icon: FiUsers,
      badge: 'STEP 02 — CONNECTION',
    },
    {
      id: 'collaboration',
      stepNum: '03',
      tabLabel: 'REFERRAL / PARTNERSHIP',
      title: 'Turn the Connection Into Collaboration',
      desc: 'After connecting, members can discuss the requirement, share recommendations, provide referrals or explore a suitable partnership.',
      icon: FiShare2,
      badge: 'STEP 03 — REFERRAL / PARTNERSHIP',
    },
    {
      id: 'opportunity',
      stepNum: '04',
      tabLabel: 'BUSINESS OPPORTUNITY',
      title: 'From Requirement to Real Business',
      desc: 'When the requirement is successfully fulfilled, the connection can lead to a completed service, delivery, referral, partnership or new business opportunity.',
      icon: FiAward,
      badge: 'STEP 04 — BUSINESS OPPORTUNITY',
      isSuccess: true,
    },
  ];

  const currentStep = steps[activeStep];
  const CurrentIcon = currentStep.icon;

  return (
    <section className={styles.opportunitiesSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>EXPANDING BUSINESS OPPORTUNITIES</span>
          </div>

          <h2 className={styles.sectionTitle}>
            How Requirements Become Real Opportunities
          </h2>

          <p className={styles.sectionDescription}>
            A structured path showing how a genuine business requirement evolves into a completed service, referral, or strategic partnership inside Trusted Network.
          </p>
        </div>

        {/* Interactive 2-Column Container */}
        <div className={styles.interactiveContainer}>
          {/* LEFT SIDE: Vertical Step Navigation Tabs */}
          <div className={styles.stepsSidebar}>
            <div className={styles.sidebarHeader}>
              <span className={styles.sidebarTag}>OPPORTUNITY JOURNEY</span>
            </div>
            <div className={styles.tabsList}>
              {/* timelineLine temporarily hidden */}
              {steps.map((step, index) => {
                const TabIcon = step.icon;
                const isActive = activeStep === index;
                return (
                  <button
                    key={step.id}
                    type="button"
                    className={`${styles.tabButton} ${isActive ? styles.activeTab : ''}`}
                    onClick={() => setActiveStep(index)}
                    aria-selected={isActive}
                  >
                    <div className={styles.tabLeft}>
                      <span className={styles.tabNum}>{step.stepNum}</span>
                      <div className={styles.tabIconWrapper}>
                        <TabIcon className={styles.tabIcon} />
                      </div>
                    </div>
                    <div className={styles.tabRight}>
                      <span className={styles.tabLabel}>{step.tabLabel}</span>
                    </div>
                    {isActive && <div className={styles.activeGlowDot}></div>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Content Panel */}
          <div className={styles.contentPanel}>
            <div className={styles.panelMetaBar}>
              <div className={styles.howLabelWrapper}>
                <span className={styles.metaDot}></span>
                <span className={styles.howLabel}>HOW IT CAN HAPPEN</span>
              </div>
              <span className={styles.stepBadge}>{currentStep.badge}</span>
            </div>

            <div className={styles.panelBody}>
              <div className={styles.heroIconBox}>
                <CurrentIcon className={styles.heroIcon} />
              </div>

              <h3 className={styles.panelTitle}>{currentStep.title}</h3>
              <p className={styles.panelDesc}>{currentStep.desc}</p>

              {/* SUCCESSFUL FULFILLMENT temporarily hidden */}
              {/* {currentStep.isSuccess && (
                <div className={styles.successBox}>
                  <FiCheckCircle className={styles.successIcon} />
                  <span>SUCCESSFUL FULFILLMENT</span>
                </div>
              )} */}
            </div>

            {/* Bottom Progression Flow Ribbon */}
            <div className={styles.flowFooter}>
              <div className={styles.flowPillsRow}>
                <span className={`${styles.flowPill} ${activeStep >= 0 ? styles.activePill : ''}`}>
                  Requirement
                </span>
                <FiChevronRight className={styles.flowArrow} />
                <span className={`${styles.flowPill} ${activeStep >= 1 ? styles.activePill : ''}`}>
                  Connection
                </span>
                <FiChevronRight className={styles.flowArrow} />
                <span className={`${styles.flowPill} ${activeStep >= 2 ? styles.activePill : ''}`}>
                  Referral / Partnership
                </span>
                <FiChevronRight className={styles.flowArrow} />
                <span className={`${styles.flowPill} ${activeStep >= 3 ? styles.activePill : ''}`}>
                  Opportunity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureBusinessOpportunities;
