import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/CommonHero.module.css';

const CommonHero = ({ title }) => {
  const location = useLocation();

  // Determine active page title dynamically if title prop is omitted
  const getRouteTitle = () => {
    if (title) return title;
    const path = location.pathname.toLowerCase();
    if (path.includes('membership') || path.includes('pricing')) return 'Membership Plans';
    if (path.includes('about')) return 'About Us';
    if (path.includes('blog')) return 'Blogs';
    if (path.includes('event')) return 'Events';
    if (path.includes('contact')) return 'Contact Us';
    return 'About Us';
  };

  const pageTitle = getRouteTitle();

  return (
    <section className={styles.commonHero}>
      <div className="container">
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link to="/" className={styles.breadcrumbHome}>
            Home
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>{pageTitle}</span>
        </nav>

        <h1 className={styles.pageTitle}>{pageTitle}</h1>
      </div>
    </section>
  );
};

export default CommonHero;



