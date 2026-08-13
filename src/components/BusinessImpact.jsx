import React, { useState, useEffect, useRef } from 'react';
import {
  FiRepeat,
  FiTrendingUp,
  FiUsers,
  FiMapPin,
  FiMessageCircle,
  FiActivity
} from 'react-icons/fi';
import { getCommonStats } from '../apis/commonApi';
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
    setCount(0);
    setHasAnimated(false);
  }, [target]);

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
      {(count || 0).toLocaleString()}
      {suffix}
    </span>
  );
};

/* ==========================================
   MAIN COMPONENT
========================================== */
const defaultStats = [
  {
    id: 1,
    target: 27,
    suffix: '+',
    label: 'Business Referrals',
    Icon: FiRepeat,
    key: 'recommendationCount',
  },
  {
    id: 2,
    target: 5000,
    suffix: '+',
    label: 'Lead Generation',
    Icon: FiTrendingUp,
    key: 'requirementsCount',
  },
  {
    id: 3,
    target: 22,
    suffix: '+',
    label: 'Business Growth',
    Icon: FiUsers,
    key: 'businessDoneCount',
  },
  {
    id: 4,
    target: 866,
    suffix: '+',
    label: 'Cities Connected',
    Icon: FiMapPin,
    key: 'totalRegions',
  },
  {
    id: 5,
    target: 33,
    suffix: '+',
    label: 'Business Talks',
    Icon: FiMessageCircle,
    key: 'directMeetCount',
  },
  {
    id: 6,
    target: 24,
    suffix: '/7',
    label: 'Active Network',
    Icon: FiActivity,
  },
];

const BusinessImpact = () => {
  const [statsData, setStatsData] = useState(defaultStats);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await getCommonStats();
      if (res?.status && res.data) {
        const d = res.data;
        setStatsData([
          {
            id: 1,
            target: d.recommendationCount > 0 ? d.recommendationCount : 0,
            suffix: '+',
            label: 'Business Referrals',
            Icon: FiRepeat,
            key: 'recommendationCount',
          },
          {
            id: 2,
            target: d.requirementsCount > 0 ? d.requirementsCount : 0,
            suffix: '+',
            label: 'Requirements',
            Icon: FiTrendingUp,
            key: 'requirementsCount',
          },
          {
            id: 3,
            target: d.businessDoneCount > 0 ? d.businessDoneCount : 0,
            suffix: '+',
            label: 'Thankyou Slip',
            Icon: FiUsers,
            key: 'businessDoneCount',
          },
          {
            id: 4,
            target: d.businessDoneAmount > 0 ? d.businessDoneAmount : 0,
            suffix: '+',
            label: ' Thankyou Slip Amount',
            Icon: FiMapPin,
            key: 'businessDoneAmount',
          },
          {
            id: 5,
            target: d.directMeetCount > 0 ? d.directMeetCount : 0,
            suffix: '+',
            label: 'Business Talks',
            Icon: FiMessageCircle,
            key: 'directMeetCount',
          },
          {
            id: 6,
            target: 24,
            suffix: '/7',
            label: 'Active Network',
            Icon: FiActivity,
          },
        ]);
      }
    };

    fetchStats();
  }, []);

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