import React from 'react';
import { FiUsers, FiCpu, FiTrendingUp, FiGlobe } from 'react-icons/fi';
import styles from '../styles/FutureDirection.module.css';

const FutureDirection = () => {
  const steps = [
    {
      step: '01',
      title: 'CONNECTED',
      desc: 'Building stronger connections between relevant businesses and professionals.',
      icon: FiUsers,
      cardClass: styles.cardStep1,
    },
    {
      step: '02',
      title: 'SMARTER',
      desc: 'Moving towards intelligent recommendations and more relevant business discovery.',
      icon: FiCpu,
      cardClass: styles.cardStep2,
    },
    {
      step: '03',
      title: 'OPPORTUNITY',
      desc: 'Creating more pathways for referrals, partnerships and cross-industry opportunities.',
      icon: FiTrendingUp,
      cardClass: styles.cardStep3,
    },
    {
      step: '04',
      title: 'ECOSYSTEM',
      desc: 'Evolving towards a connected business ecosystem built around relationships, opportunities and insights.',
      icon: FiGlobe,
      cardClass: styles.cardStep4,
    },
  ];

  return (
    <section className={styles.directionSection}>
      <div className="container">
        {/* Header Block */}
        <div className={styles.headerWrapper}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>WHERE WE'RE HEADING</span>
          </div>

          <h2 className={styles.sectionTitle}>
            From Networking to a Complete Business Ecosystem
          </h2>

          <p className={styles.sectionDescription}>
            Trusted Network is designed to evolve beyond basic business networking into a smarter, more connected ecosystem that helps businesses discover relationships, opportunities and meaningful growth.
          </p>
        </div>

        {/* Pinned Note Roadmap Container */}
        <div className={styles.roadmapCanvas}>
          {/* Connector Path Line for Desktop & Tablet */}
          <svg className={styles.svgConnector} viewBox="0 0 1000 600" fill="none" preserveAspectRatio="none">
            <path
              d="M 210 110 L 790 190 L 210 390 L 790 470"
              stroke="#F0A500"
              strokeWidth="2"
              strokeDasharray="6 6"
              opacity="0.75"
            />
            <circle cx="210" cy="110" r="5" fill="#F0A500" />
            <circle cx="790" cy="190" r="5" fill="#F0A500" />
            <circle cx="210" cy="390" r="5" fill="#F0A500" />
            <circle cx="790" cy="470" r="5" fill="#F0A500" />
          </svg>

          {/* 4 Pinned Milestone Notes */}
          <div className={styles.notesGrid}>
            {steps.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.step} className={`${styles.pinnedNoteCard} ${item.cardClass}`}>
                  {/* CSS Push Pin Assembly */}
                  <div className={styles.pinWrapper}>
                    <div className={styles.pinHead}></div>
                    <div className={styles.pinStem}></div>
                  </div>

                  {/* Blue Number + Icon Badge Only */}
                  <div className={styles.numberBlock}>
                    <span className={styles.numberDigit}>{item.step}</span>
                    <IconComp className={styles.stepIcon} />
                  </div>

                  {/* Note Content */}
                  <div className={styles.noteContent}>
                    <h3 className={styles.noteTitle}>{item.title}</h3>
                    <p className={styles.noteDesc}>{item.desc}</p>
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
