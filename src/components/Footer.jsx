import React from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiLinkedin, FiTwitter, FiInstagram, FiFacebook, FiArrowRight, FiMail, FiPhone } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';
import qrCodeImg from '../assets/qr_code.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className={styles.footerGrid}>
          <div className={styles.col}>
            <Link to="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <FiShield />
              </div>
              <span className={styles.logoText}>Trusted<span> Network</span></span>
            </Link>
            <p className={styles.tagline}>
              India's GST-verified business social networking platform. 
              Connect, collaborate, and grow with confidence.
            </p>
            <div className={styles.socials}>
              <a href="#"><FiLinkedin /></a>
              <a href="#"><FiTwitter /></a>
              <a href="#"><FiInstagram /></a>
              <a href="#"><FiFacebook /></a>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.links}>
              <li><a href="#home"><FiArrowRight /> About Us</a></li>
              <li><a href="#about"><FiArrowRight /> How It Works</a></li>
              <li><a href="#how-it-works"><FiArrowRight /> Membership Plans</a></li>
              <li><a href="#membership"><FiArrowRight /> Contact Us</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.links}>
              <li><Link to="/privacy-policy"><FiArrowRight /> Events</Link></li>
              <li><Link to="/terms"><FiArrowRight /> Blog</Link></li>
              <li><Link to="/refund"><FiArrowRight /> Privacy Policy</Link></li>
              <li><Link to="/community-guidelines"><FiArrowRight /> Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle} style={{ marginBottom: '14px' }}>Get the App</h4>
            <div className={styles.getAppContent}>
              <div className={styles.footerQr}>
                <img src={qrCodeImg} alt="QR Code" />
              </div>
              <div className={styles.appBadges}>
                <a href="#" className={styles.badge}>
                  <FaApple /> App Store
                </a>
                <a href="#" className={styles.badge}>
                  <FaGooglePlay /> Google Play
                </a>
              </div>
            </div>

            <h4 className={styles.colTitle} style={{ marginBottom: '14px' }}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p>
                <FiMail className={styles.contactIcon} /> 
                support@trustednetwork.in
              </p>
              <p>
                <FiPhone className={styles.contactIcon} /> 
                +91 98765 43210
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {currentYear} Trusted Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
