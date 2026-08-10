import React from 'react';
import styles from '../styles/ShowMoreButton.module.css';

const ShowMoreButton = ({ onClick, label }) => (
  <button className={styles.button} onClick={onClick}>
    {label}Show More
  </button>
);

export default ShowMoreButton;
