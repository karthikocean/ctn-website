import React, { useState, useEffect, useRef } from 'react';
import {
  FiRepeat,
  FiClipboard,
  FiCheckCircle,
  FiMapPin,
  FiMessageCircle,
  FiActivity
} from 'react-icons/fi';
import { FaRupeeSign } from 'react-icons/fa';
import { getCommonStats } from '../apis/commonApi';
import styles from '../styles/BusinessImpact.module.css';
import backgroundImg from '../assets/BusinessImpact.png';

/* ==========================================
   HELPER FUNCTIONS
========================================== */
const parseStatValue = (val) => {
  if (val === null || val === undefined) return 0;
  const num = typeof val === 'string' ? parseFloat(val.replace(/,/g, '')) : Number(val);
  return isNaN(num) || num < 0 ? 0 : Math.floor(num);
};

/* ==========================================
   COUNTER COMPONENT
========================================== */
const AnimatedCounter = ({ target, suffix, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const numTarget = parseStatValue(target);

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

            setCount(Math.floor(progress * numTarget));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numTarget);
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
  }, [target, duration, hasAnimated, numTarget]);

  const displaySuffix = suffix === '+' ? (numTarget > 0 ? '+' : '') : (suffix || '');

  return (
    <span ref={elementRef} className={styles.statNumber}>
      {(count || 0).toLocaleString()}
      {displaySuffix}
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
    Icon: FiClipboard,
    key: 'requirementsCount',
  },
  {
    id: 3,
    target: 22,
    suffix: '+',
    label: 'Business Growth',
    Icon: FiCheckCircle,
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
            target: parseStatValue(d.recommendationCount),
            suffix: '+',
            label: 'Recommendation Count',
            Icon: FiRepeat,
            key: 'recommendationCount',
          },
          {
            id: 2,
            target: parseStatValue(d.requirementsCount),
            suffix: '+',
            label: 'Requirements Count',
            Icon: FiClipboard,
            key: 'requirementsCount',
          },
          {
            id: 3,
            target: parseStatValue(d.businessDoneCount),
            suffix: '+',
            label: 'Business Done Count',
            Icon: FiCheckCircle,
            key: 'businessDoneCount',
          },
          {
            id: 4,
            target: parseStatValue(d.businessDoneAmount),
            suffix: '+',
            label: 'Business Done Amount',
            Icon: FaRupeeSign,
            key: 'businessDoneAmount',
          },
          {
            id: 5,
            target: parseStatValue(d.directMeetCount),
            suffix: '+',
            label: 'Direct Meet Count',
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