import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/CommonHero.module.css';
import seoData from '../data/seoData';

const CommonHero = ({ title }) => {
  const location = useLocation();

  // Helper to map pathname to seoData key dynamically
  const getSeoKey = (path) => {
    const p = path.toLowerCase().replace(/\/$/, '');
    const canonicalMap = {
      '': '/',
      '/': '/',
      '/pricing': '/membership-plans',
      '/privacy': '/privacy-policy',
      '/terms': '/terms-condition',
      '/refund': '/refund-policy'
    };
    if (canonicalMap[p]) return canonicalMap[p];
    if (p.startsWith('/events')) return '/events';
    if (p.startsWith('/blogs')) return '/blogs';
    return p;
  };

  // Helper to generate human-readable route name for the breadcrumb
  const getBreadcrumbName = (path) => {
    const p = path.toLowerCase().replace(/\/$/, '');
    if (p === '' || p === '/') return '';
    if (p === '/about' ) return 'About Us';
    if (p === '/membership-plans' || p === '/pricing') return 'Membership Plans';
    if (p === '/contact') return 'Contact Us';
    if (p === '/privacy-policy' || p === '/privacy') return 'Privacy Policy';
    if (p === '/terms-condition' || p === '/terms') return 'Terms and Conditions';
    if (p === '/refund-policy' || p === '/refund') return 'Refund Policy';
    if (p === '/community-guidelines') return 'Community Guidelines';
    if (p === '/franchise') return 'Franchise';
    if (p.startsWith('/events')) return 'Events';
    if (p.startsWith('/blogs')) return 'Blogs';
    if (p === '/features') return 'Features';

    // Fallback for any other/new page: capitalize words and replace dashes with spaces
    const segments = p.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1] || '';
    return lastSegment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Determine active page title dynamically from the SEO meta-title configuration
  const getHeroTitle = () => {
    const key = getSeoKey(location.pathname);
    if (key && seoData[key]) {
      const rawTitle = seoData[key].title;
      if (rawTitle) {
        return rawTitle.split('|')[0].trim();
      }
    }

    // If no seoData key/title is available, fallback to the title prop if passed
    if (title) {
      return title.split('|')[0].trim();
    }

    // Fallback using route-based name if no metadata is available
    return getBreadcrumbName(location.pathname);
  };

  const breadcrumbCurrent = getBreadcrumbName(location.pathname);
  const heroTitle = getHeroTitle();

  return (
    <section className={styles.commonHero}>
      <div className="container">
        {breadcrumbCurrent && (
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link to="/" className={styles.breadcrumbHome}>
              Home
            </Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>{breadcrumbCurrent}</span>
          </nav>
        )}

        <h1 className={styles.pageTitle}>{heroTitle}</h1>
      </div>
    </section>
  );
};

export default CommonHero;
