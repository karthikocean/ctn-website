import React, { useState, useEffect, useRef } from 'react';
import {
  FiRepeat,
  FiTrendingUp,
  FiUsers,
  FiMapPin,
  FiMessageCircle,
  FiActivity
} from 'react-icons/fi';

import styles from '../styles/BusinessImpact.module.css';
import backgroundImg from '../assets/BusinessImpact.png';

/* ==========================================
   COUNTER COMPONENT
========================================== */
const AnimatedCounter = ({ target, suffix, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTimestamp = null;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1
            );

            setCount(Math.floor(progress * target));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={styles.statNumber}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/* ==========================================
   MAIN COMPONENT
========================================== */
const BusinessImpact = () => {
  const statsData = [
    {
      id: 1,
      target: 10000,
      suffix: '+',
      label: 'Business Referrals',
      Icon: FiRepeat,
    },
    {
      id: 2,
      target: 5000,
      suffix: '+',
      label: 'Lead Generation',
      Icon: FiTrendingUp,
    },
    {
      id: 3,
      target: 2500,
      suffix: '+',
      label: 'Business Growth',
      Icon: FiUsers,
    },
    {
      id: 4,
      target: 50,
      suffix: '+',
      label: 'Cities Connected',
      Icon: FiMapPin,
    },
    {
      id: 5,
      target: 1000,
      suffix: '+',
      label: 'Business Talks',
      Icon: FiMessageCircle,
    },
    {
      id: 6,
      target: 24,
      suffix: '/7',
      label: 'Active Network',
      Icon: FiActivity,
    },
  ];

  return (
    <section
      className={styles.impactSection}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.sectionLabelWrapper}>
            <div className={styles.sectionLabel}>
              <div className={styles.line}></div>
              <span>TRUSTED NETWORK IMPACT</span>
            </div>
          </div>

          {/* <h2 className={styles.title}>
            Real Business Results Through Trusted Networking
          </h2>

          <p className={styles.description}>
            Trusted Network helps professionals generate referrals,
            build collaborations, discover opportunities, and grow
            meaningful business relationships.
          </p> */}
        </div>

        {/* Stats */}
        <div className={styles.statsContainer}>
          <div className={styles.statsGrid}>
            {statsData.map(
              ({ id, target, suffix, label, Icon }) => (
                <div key={id} className={styles.statItem}>
                  <Icon className={styles.statIcon} />

                  <AnimatedCounter
                    target={target}
                    suffix={suffix}
                  />

                  <p className={styles.statLabel}>
                    {label}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;