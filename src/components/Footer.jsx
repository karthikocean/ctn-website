import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiTwitter, FiInstagram, FiFacebook, FiArrowRight, FiMail, FiPhone } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';
import qrCodeImg from '../assets/qr_code.png';
import whiteLogo from '../assets/whitelogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className={styles.footerGrid}>
          {/* GROUP 1 — Brand Area + Company + Resources */}
          <div className={styles.group1}>
            {/* Brand Column */}
            <div className={`${styles.col} ${styles.brandCol}`}>
              <Link to="/" className={styles.logo}>
                <img src={whiteLogo} alt="Trusted Network Logo" className={styles.footerLogo} />
              </Link>
              <p className={styles.tagline}>
                India's GST-verified business social networking platform.
                Connect, collaborate, and grow with confidence.
              </p>
              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com/trustednetwork.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61593092252529"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FiFacebook />
                </a>
              </div>
            </div>

            {/* Nav Group (Company + Resources side-by-side flex columns) */}
            <div className={styles.navGroup}>
              <div className={`${styles.col} ${styles.linksCol}`}>
                <h4 className={styles.colTitle}>Company</h4>
                <ul className={styles.links}>
                  <li><a href="#home"><FiArrowRight /> Contact</a></li>
                  <li><Link to="/franchise"><FiArrowRight /> Franchise</Link></li>
                  <li><Link to="/events"><FiArrowRight /> Events</Link></li>
                  <li><a href="/blogs"><FiArrowRight /> Blogs</a></li>
                </ul>
              </div>

              <div className={`${styles.col} ${styles.linksCol}`}>
                <h4 className={styles.colTitle}>Resources</h4>
                <ul className={styles.links}>
                  <li><Link to="/privacy-policy"><FiArrowRight /> Privacy Policy</Link></li>
                  <li><Link to="/terms"><FiArrowRight /> Terms & Conditions</Link></li>
                  <li><Link to="/refund"><FiArrowRight /> Refund Policy</Link></li>
                  <li><Link to="/community-guidelines"><FiArrowRight /> Community Guidelines</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* GROUP 2 — Get the App + Contact Info */}
          <div className={styles.group2}>
            {/* Get the App Column */}
            <div className={styles.appSection}>
              <h4 className={styles.appColTitle}>Get the App</h4>
              <div className={styles.getAppContent}>
                <div className={styles.footerQr}>
                  <img src={qrCodeImg} alt="QR Code" />
                </div>
                <div className={styles.appBadges}>
                  <a href="#" className={styles.badge}>
                    <FaApple /> App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.oceansoftware.ctn_business_app&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.badge}
                  >
                    <FaGooglePlay /> Google Play
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info Column */}
            <div className={styles.contactSection}>
              <h4 className={styles.contactColTitle}>Contact Info</h4>
              <div className={styles.contactInfo}>
                <p>
                  <FiMail className={styles.contactIcon} />
                  admin@trustednetwork.in
                </p>
                <p>
                  <FiPhone className={styles.contactIcon} />
                  +91 97911 52132
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>
            © {currentYear} Trusted Network. All rights reserved. Powered by{' '}
            <a
              href="https://www.oceansoftwares.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.creditLink}
            >
              Ocean Softwares Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
