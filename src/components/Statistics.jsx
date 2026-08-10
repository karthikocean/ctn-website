import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineUserGroup, HiOutlineShieldCheck } from 'react-icons/hi';
import { FiGrid } from 'react-icons/fi';
import styles from '../styles/Statistics.module.css';

const statsData = [
  {
    icon: HiOutlineUserGroup,
    end: 8000,
    suffix: '+',
    label: 'Active TN Members',
  },
  {
    icon: HiOutlineShieldCheck,
    end: 100,
    suffix: '%',
    label: 'GST Verified Network',
  },
  {
    icon: FiGrid,
    end: 250,
    suffix: '+',
    label: 'Business Categories',
  },
];

const Statistics = () => {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);

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
      const increment = end / (duration / 16);

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
  }, [visible]);

  const formatNumber = (num) => {
    return num.toLocaleString();
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
                  {formatNumber(counts[idx])}{item.suffix}
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