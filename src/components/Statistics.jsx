import React, { useEffect, useRef, useState } from 'react';
import { FiUsers, FiGrid, FiMapPin } from 'react-icons/fi';
import { getCommonStats } from '../apis/commonApi';
import styles from '../styles/Statistics.module.css';

/* ==========================================
   HELPER FUNCTIONS
========================================== */
const parseStatValue = (val) => {
  if (val === null || val === undefined) return 0;
  const num = typeof val === 'string' ? parseFloat(val.replace(/,/g, '')) : Number(val);
  return isNaN(num) || num < 0 ? 0 : Math.floor(num);
};

const defaultStatsData = [
  {
    key: 'activeMembersCount',
    icon: FiUsers,
    end: 0,
    suffix: '+',
    label: 'Active TN Members',
  },
  {
    key: 'categoryCount',
    icon: FiGrid,
    end: 0,
    suffix: '+',
    label: 'Category Count',
  },
  {
    key: 'totalRegions',
    icon: FiMapPin,
    end: 0,
    suffix: '+',
    label: 'Region Count',
  },
];

// Premium Responsive Statistics component showing business metrics horizontally in one row
const Statistics = () => {
  const [visible, setVisible] = useState(false);
  const [statsData, setStatsData] = useState(defaultStatsData);
  const [counts, setCounts] = useState(defaultStatsData.map((s) => s.end));
  const sectionRef = useRef(null);

  // Fetch Stats API from backend
  useEffect(() => {
    const fetchStats = async () => {
      const res = await getCommonStats();
      if (res?.status && res.data) {
        const d = res.data;
        const activeMembers = parseStatValue(d.activeMembersCount);
        const categories = parseStatValue(d.categoryCount);
        const regionCount = parseStatValue(d.totalRegions);

        setStatsData([
          {
            key: 'activeMembersCount',
            icon: FiUsers,
            end: activeMembers,
            suffix: '+',
            label: 'Active TN Members',
          },
          {
            key: 'categoryCount',
            icon: FiGrid,
            end: categories,
            suffix: '+',
            label: 'Category Count',
          },
          {
            key: 'totalRegions',
            icon: FiMapPin,
            end: regionCount,
            suffix: '+',
            label: 'Region Count',
          },
        ]);
      }
    };

    fetchStats();
  }, []);

  useEffect(() => {
    setCounts(statsData.map(() => 0));
  }, [statsData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    statsData.forEach((item, index) => {
      let start = 0;
      const end = parseStatValue(item.end);
      const duration = 2000;
      const increment = end > 0 ? Math.max(1, end / (duration / 16)) : 0;

      if (end === 0) {
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = 0;
          return updated;
        });
        return;
      }

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(start);
          return updated;
        });
      }, 16);
    });
  }, [visible, statsData]);

  const formatStatValue = (countVal, targetVal, suffix = '+') => {
    const targetNum = parseStatValue(targetVal);
    const countNum = parseStatValue(countVal);
    const formatted = countNum.toLocaleString();

    if (suffix === '+') {
      return targetNum > 0 ? `${formatted}+` : '0';
    }
    return `${formatted}${suffix || ''}`;
  };

  return (
    <section className={styles.statsSection} ref={sectionRef}>
      <div className={styles.statsContainer}>
        {statsData.map((item, idx) => {
          const Icon = item.icon;
          const currentVal = counts[idx] !== undefined ? counts[idx] : item.end;

          return (
            <div key={idx} className={styles.statItem}>
              <div className={styles.topRow}>
                <Icon className={styles.icon} />
                <div className={styles.number}>
                  {formatStatValue(currentVal, item.end, item.suffix)}
                </div>
              </div>
              <div className={styles.label}>{item.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Statistics;