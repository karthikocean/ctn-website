import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShield, FiDownload } from 'react-icons/fi';
import CTAButton from './Common/CTAButton';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Community', href: '#community' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Membership', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/' + href;
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container-fluid ${styles.navContainer}`}>
        <Link to="/" className={styles.logo} onClick={() => window.scrollTo(0, 0)}>
          <div className={styles.logoIcon}>
            <FiShield />
          </div>
          <span className={styles.logoText}>Trusted<span> Network</span></span>
        </Link>

        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className={styles.navLink}
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <CTAButton variant="join" className={styles.joinBtn}>
            Join TN
          </CTAButton>
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <div className={styles.mobileActions}>
                <CTAButton variant="primary" className={styles.mobileBtn}>
                  Download App
                </CTAButton>
                <CTAButton variant="join" className={styles.mobileBtn}>
                  Join TN
                </CTAButton>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
