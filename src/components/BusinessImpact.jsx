import React, { useState, useEffect, useRef } from 'react';
import {
  FiRepeat,
  FiClipboard,
  FiCheckCircle,
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
  if (val === null || val === undefined || val === '') return 0;
  const num = typeof val === 'string' ? parseFloat(val.replace(/,/g, '')) : Number(val);
  return isNaN(num) || num < 0 ? 0 : Math.floor(num);
};

const formatBusinessAmount = (val) => {
  if (val === null || val === undefined || val === '') return '0';
  const raw = typeof val === 'string' ? val.replace(/,/g, '') : String(val);
  const num = Number(raw);

  // If string contains non-numeric chars (e.g. "200Q"), return string directly
  if (isNaN(num)) {
    return String(val);
  }

  if (num <= 0) return '0';

  if (num >= 1000000) {
    // Millions (M) - 1,000,000+
    const m = num / 1000000;
    const mFixed = parseFloat(m.toFixed(2));
    return `${mFixed}M`;
  } else if (num >= 1000) {
    // Thousands (K) - 1,000+
    const k = num / 1000;
    const kFixed = parseFloat(k.toFixed(2));
    return `${kFixed}K`;
  } else {
    return `${num}`;
  }
};

/* ==========================================
   COUNTER COMPONENT
========================================== */
const AnimatedCounter = ({ target, suffix, duration = 1200 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const numTarget = parseStatValue(target);

  useEffect(() => {
    let animationFrameId = null;
    let observer = null;
    let isMounted = true;

    const startAnimation = () => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        if (isMounted) {
          setCount(Math.floor(progress * numTarget));
        }
        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step);
        } else if (isMounted) {
          setCount(numTarget);
        }
      };
      animationFrameId = window.requestAnimationFrame(step);
    };

    if (numTarget === 0) {
      setCount(0);
      return;
    }

    if (elementRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    }

    return () => {
      isMounted = false;
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      if (observer && elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [numTarget, duration]);

  const displaySuffix = suffix || '';

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
const initialStats = [
  {
    id: 1,
    target: 0,
    suffix: '+',
    label: 'Business Referrals',
    Icon: FiRepeat,
    key: 'recommendationCount',
  },
  {
    id: 2,
    target: 0,
    suffix: '+',
    label: 'Lead Generation',
    Icon: FiClipboard,
    key: 'requirementsCount',
  },
  {
    id: 3,
    target: 0,
    suffix: '+',
    label: 'Business Done',
    Icon: FiCheckCircle,
    key: 'businessDoneCount',
  },
  {
    id: 4,
    target: 0,
    formattedValue: '0',
    label: 'Business Done Amount',
    Icon: FaRupeeSign,
    key: 'businessDoneAmount',
  },
  {
    id: 5,
    target: 0,
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
  const [statsData, setStatsData] = useState(initialStats);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getCommonStats();
        if (res?.status && res.data) {
          const d = res.data;
          setStatsData([
            {
              id: 1,
              target: parseStatValue(d.recommendationCount),
              suffix: '+',
              label: 'Business Referrals',
              Icon: FiRepeat,
              key: 'recommendationCount',
            },
            {
              id: 2,
              target: parseStatValue(d.requirementsCount),
              suffix: '+',
              label: 'Lead Generation',
              Icon: FiClipboard,
              key: 'requirementsCount',
            },
            {
              id: 3,
              target: parseStatValue(d.businessDoneCount),
              suffix: '+',
              label: 'Business Done',
              Icon: FiCheckCircle,
              key: 'businessDoneCount',
            },
            {
              id: 4,
              target: parseStatValue(d.businessDoneAmount || d.businessAmount),
              formattedValue: formatBusinessAmount(d.businessDoneAmount || d.businessAmount),
              label: 'Business Done Amount',
              Icon: FaRupeeSign,
              key: 'businessDoneAmount',
            },
            {
              id: 5,
              target: parseStatValue(d.directMeetCount),
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
      } catch (error) {
        console.error('Failed to fetch common stats:', error);
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
              ({ id, target, suffix, formattedValue, label, Icon }) => (
                <div key={id} className={styles.statItem}>
                  <Icon className={styles.statIcon} />

                  {formattedValue ? (
                    <span className={styles.statNumber}>{formattedValue}</span>
                  ) : (
                    <AnimatedCounter
                      target={target}
                      suffix={suffix}
                    />
                  )}

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