import React from 'react';
import { FiAlertCircle, FiRefreshCw } from 'react-icons/fi';
import styles from '../styles/ErrorState.module.css';

const ErrorState = ({
  title = 'Unable to load content',
  message = 'Please check your internet connection and try again.',
  onRetry,
}) => (
  <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <FiAlertCircle />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.message}>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className={styles.retryBtn}>
          <FiRefreshCw className={styles.btnIcon} />
          <span>Try Again</span>
        </button>
      )}
    </div>
  </div>
);

export default ErrorState;
