import React from 'react';
import styles from '../styles/EmptyState.module.css';

const EmptyState = ({ icon, title, description }) => (
  <div className={styles.card}>
    <div className={styles.iconWrapper}>
      {icon}
    </div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);

export default EmptyState;
