import React from 'react';
import styles from "../styles/SectionLabel.module.css";

/**
 * Premium label component used throughout the site.
 * Props:
 *   label: string – the uppercase text to display next to the dot‑line.
 */
const SectionLabel = ({ label }) => (
  <div className={styles.sectionLabelWrapper}>
    <div className={styles.sectionLabel}>
      <div className={styles.line} />
      <span>{label}</span>
    </div>
  </div>
);

export default SectionLabel;
