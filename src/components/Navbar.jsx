import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import mainlogo from '../assets/mainlogo.svg';
import whiteLogo from '../assets/whitelogo.png';
import { APP_STORE_LINK, PLAY_STORE_LINK } from '../config/appLinks';
import styles from '../styles/Navbar.module.css';

// Add effect to toggle a body class for pre-scroll styling on transparent home page
const usePreScrollClass = (isTransparent) => {
  useEffect(() => {
    if (isTransparent) {
      document.body.classList.add('preScroll');
    } else {
      document.body.classList.remove('preScroll');
    }
  }, [isTransparent]);
};

const Navbar = () => {
  const location = useLocation();
  const [isScrolledTop, setIsScrolledTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const isHomePage = location.pathname === '/';

  // Handle window resize to enforce desktop-only transparent navbar
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll listener for Home page transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledTop(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Transparent ONLY on Home page when scrolled to top AND on Desktop screens (>1024px)
  const showTransparent = isHomePage && isScrolledTop && isDesktop;

  // Apply body class based on transparency
  usePreScrollClass(showTransparent);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Membership Plans', href: '/membership-plans' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActiveLink = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    if (href.startsWith('/') && !href.includes('#')) {
      return (
        location.pathname === href ||
        (href === '/membership-plans' && (location.pathname === '/pricing' || location.pathname.includes('membership')))
      );
    }
    return false;
  };

  return (
    <nav className={`${styles.navBar} ${showTransparent ? styles.transparent : ''}`}>
      {/* LEFT — Logo */}
      <Link to="/" className={styles.logoLink} onClick={() => window.scrollTo(0, 0)}>
        <img
          src={showTransparent ? whiteLogo : mainlogo}
          alt="Trusted Network"
          className={styles.logoImg}
        />
      </Link>

      {/* CENTER — Nav Links */}
      <ul className={styles.navLinksList}>
        {navLinks.map((link) => {
          const active = isActiveLink(link.href);
          const isInternalRoute = link.href.startsWith('/') && !link.href.includes('#');

          return (
            <li key={link.name} className={styles.navLinkItem}>
              {isInternalRoute ? (
                <Link
                  to={link.href}
                  className={`${styles.navLinkAnchor} ${active ? styles.activeLink : ''}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={`${styles.navLinkAnchor} ${active ? styles.activeLink : ''}`}
                >
                  {link.name}
                </a>
              )}
            </li>
          );
        })}
      </ul>

      {/* RIGHT — Store Buttons + Hamburger */}
      <div className={styles.navRight}>
        <div className={styles.storeButtons}>
          <a
            href={APP_STORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.storeBtn}
          >
            <FaApple className={styles.storeIcon} />
            <span>App Store</span>
          </a>
          <a
            href={PLAY_STORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.storeBtn}
          >
            <FaGooglePlay className={styles.storeIcon} />
            <span>Google Play</span>
          </a>
        </div>

        <button
          className={styles.hamburgerBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => {
              const active = isActiveLink(link.href);
              const isInternalRoute = link.href.startsWith('/') && !link.href.includes('#');

              return (
                <li key={link.name}>
                  {isInternalRoute ? (
                    <Link
                      to={link.href}
                      className={active ? styles.activeMobileLink : ''}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className={active ? styles.activeMobileLink : ''}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
          <div className={styles.mobileStoreButtons}>
            <a
              href={APP_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileStoreBtn}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaApple className={styles.storeIcon} />
              <span>App Store</span>
            </a>
            <a
              href={PLAY_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileStoreBtn}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaGooglePlay className={styles.storeIcon} />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
