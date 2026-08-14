import React from 'react';
import styles from '../styles/LoadingState.module.css';

const LoadingState = ({ message = 'Loading content...' }) => (
  <div className={styles.container}>
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner}></div>
    </div>
    <p className={styles.text}>{message}</p>
  </div>
);

export default LoadingState;
