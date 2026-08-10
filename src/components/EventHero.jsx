import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/EventHero.module.css";
import { FiChevronRight } from 'react-icons/fi';

const EventHero = () => (
  <section className={styles.hero}>
    <div className={styles.heroContainer}>
      <div className={styles.breadcrumbs}>
        <Link to="/">Home</Link>
        <FiChevronRight className={styles.breadcrumbSeparator} />
        <span>Events & Networking</span>
        <FiChevronRight className={styles.breadcrumbSeparator} />
        <span className={styles.breadcrumbActive}>Events & Networking</span>
      </div>
      <h1 className={styles.heroTitle}>Events & Networking</h1>
      <p className={styles.heroSubtitle}>
        Explore business insights, networking strategies, industry trends, success stories, and professional growth articles from the Trusted Network community.
      </p>
    </div>
  </section>
);

export default EventHero;
