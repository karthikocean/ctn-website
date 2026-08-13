import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineUserGroup, HiOutlineShieldCheck } from 'react-icons/hi';
import { FiGrid } from 'react-icons/fi';
import { getCommonStats } from '../apis/commonApi';
import styles from '../styles/Statistics.module.css';

const defaultStatsData = [
  {
    key: 'activeMembersCount',
    icon: HiOutlineUserGroup,
    end: 0,
    suffix: '+',
    label: 'Active TN Members',
  },
  {
    key: 'gstVerified',
    icon: HiOutlineShieldCheck,
    end: 0,
    suffix: '+',
    label: 'GST Verified Network',
  },
  {
    key: 'categoryCount',
    icon: FiGrid,
    end: 0,
    suffix: '+',
    label: 'Business Categories',
  },
];

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
        const activeMembers = d.activeMembersCount > 0 ? d.activeMembersCount : 0;
        const categories = d.categoryCount > 0 ? d.categoryCount : 0;
        const regionCount = d.totalRegions > 0 ? d.totalRegions : 0;

        setStatsData([
          {
            key: 'activeMembersCount',
            icon: HiOutlineUserGroup,
            end: activeMembers,
            suffix: '+',
            label: 'Active TN Members',
          },
          {
            key: 'categoryCount',
            icon: HiOutlineShieldCheck,
            end: categories,
            suffix: '+',
            label: 'Category Count',
          },
          {
            key: 'totalRegions',
            icon: FiGrid,
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
      const end = item.end;
      const duration = 2000;
      const increment = Math.max(1, end / (duration / 16));

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

  const formatNumber = (num) => {
    return (num || 0).toLocaleString();
  };

  return (
    <section className={styles.statsSection} ref={sectionRef}>
      <div className={styles.statsContainer}>
        {statsData.map((item, idx) => {
          const Icon = item.icon;

          return (
            <div key={idx} className={styles.statItem}>
              <div className={styles.topRow}>
                <Icon className={styles.icon} />
                <div className={styles.number}>
                  {formatNumber(counts[idx] !== undefined ? counts[idx] : item.end)}{item.suffix}
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