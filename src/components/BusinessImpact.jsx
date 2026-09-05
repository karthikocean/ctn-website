import React, { useState, useEffect, useRef } from 'react';
import {
  FiRepeat,
  FiClipboard,
  FiMessageCircle,
  FiActivity,
  FiUsers,
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

const formatCompactNumber = (num) => {
  if (typeof num !== 'number' || isNaN(num) || num <= 0) return '0';

  let value = num;
  let unit = '';

  if (num >= 1e12) {
    value = num / 1e12;
    unit = 'T';
  } else if (num >= 1e9) {
    value = num / 1e9;
    unit = 'B';
  } else if (num >= 1e7) {
    value = num / 1e7;
    unit = 'Cr';
  } else if (num >= 1e5) {
    value = num / 1e5;
    unit = 'L';
  } else if (num >= 1e3) {
    value = num / 1e3;
    unit = 'K';
  } else {
    return Number(num.toFixed(2)).toString();
  }

  const formattedNum = Number(value.toFixed(2)).toString();
  return `${formattedNum}${unit}`;
};

const formatBusinessValue = (rawVal, strVal) => {
  if (rawVal !== null && rawVal !== undefined && rawVal !== '') {
    const rawNum = typeof rawVal === 'number' ? rawVal : Number(String(rawVal).replace(/,/g, ''));
    if (!isNaN(rawNum) && rawNum >= 0) {
      return formatCompactNumber(rawNum);
    }
  }

  const valToUse = strVal !== null && strVal !== undefined && strVal !== '' ? strVal : rawVal;
  if (valToUse === null || valToUse === undefined || valToUse === '') return '0';

  if (typeof valToUse === 'number') {
    return formatCompactNumber(valToUse);
  }

  const str = String(valToUse).trim();
  if (!str) return '0';

  const match = str.match(/^([\d.,]+)\s*([a-zA-Z]+)?$/);
  if (match) {
    const numStr = match[1].replace(/,/g, '');
    const unitPart = match[2] ? match[2].toUpperCase() : '';
    const numPart = Number(numStr);

    if (!isNaN(numPart)) {
      const cleanNum = Number(numPart.toFixed(2)).toString();
      if (unitPart === 'K' || unitPart === 'THOUSAND' || unitPart === 'THOUSANDS') return `${cleanNum}K`;
      if (unitPart === 'L' || unitPart === 'LAKH' || unitPart === 'LAKHS') return `${cleanNum}L`;
      if (unitPart === 'CR' || unitPart === 'CRORE' || unitPart === 'CRORES') return `${cleanNum}Cr`;
      if (unitPart === 'M' || unitPart === 'MILLION' || unitPart === 'MILLIONS') return `${cleanNum}M`;
      if (unitPart === 'B' || unitPart === 'BILLION' || unitPart === 'BILLIONS') return `${cleanNum}B`;
      if (unitPart === 'T' || unitPart === 'TRILLION' || unitPart === 'TRILLIONS') return `${cleanNum}T`;

      if (!unitPart) {
        return formatCompactNumber(numPart);
      }
    }
  }

  return str;
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
    label: 'Business Talk',
    Icon: FiMessageCircle,
    key: 'directMeetCount',
  },
  {
    id: 2,
    target: 0,
    suffix: '+',
    label: 'Business Recommendation',
    Icon: FiRepeat,
    key: 'recommendationCount',
  },
  {
    id: 3,
    formattedValue: '0',
    label: 'Business Value',
    Icon: FaRupeeSign,
    key: 'businessDoneAmount',
  },
  {
    id: 4,
    target: 0,
    suffix: '+',
    label: 'Business Exchange',
    Icon: FiClipboard,
    key: 'requirementsCount',
  },
  {
    id: 5,
    target: 0,
    suffix: '+',
    label: 'Connections Established',
    Icon: FiUsers,
    key: 'followingCountFormatted',
  },
  {
    id: 6,
    formattedValue: '24/7',
    label: 'Active Network',
    Icon: FiActivity,
  },
];

const BusinessImpact = () => {
  const [statsData, setStatsData] = useState(initialStats);

  useEffect(() => {
    let isMounted = true;
    const fetchStats = async () => {
      try {
        const res = await getCommonStats();
        if (isMounted && res?.status && res.data) {
          const d = res.data;
          setStatsData([
            {
              id: 1,
              target: parseStatValue(d.directMeetCount),
              suffix: '+',
              label: 'Business Talk',
              Icon: FiMessageCircle,
              key: 'directMeetCount',
            },
            {
              id: 2,
              target: parseStatValue(d.recommendationCount),
              suffix: '+',
              label: 'Business Recommendation',
              Icon: FiRepeat,
              key: 'recommendationCount',
            },
            {
              id: 3,
              formattedValue: formatBusinessValue(
                d.businessDoneAmountRaw !== undefined && d.businessDoneAmountRaw !== null && d.businessDoneAmountRaw !== ''
                  ? d.businessDoneAmountRaw
                  : d.businessAmountRaw,
                d.businessDoneAmount !== undefined && d.businessDoneAmount !== null
                  ? d.businessDoneAmount
                  : d.businessAmount
              ),
              label: 'Business Value',
              Icon: FaRupeeSign,
              key: 'businessDoneAmount',
            },
            {
              id: 4,
              target: parseStatValue(d.requirementsCount),
              suffix: '+',
              label: 'Business Exchange',
              Icon: FiClipboard,
              key: 'requirementsCount',
            },
            {
              id: 5,
              target: parseStatValue(d.followingCountFormatted),
              suffix: '+',
              label: 'Connections Established',
              Icon: FiUsers,
              key: 'followingCountFormatted',
            },
            {
              id: 6,
              formattedValue: '24/7',
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

    return () => {
      isMounted = false;
    };
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

                  {formattedValue !== undefined && formattedValue !== null ? (
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