import React from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiLinkedin, FiTwitter, FiInstagram, FiFacebook, FiArrowRight, FiMail, FiPhone } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';
import qrCodeImg from '../assets/qr_code.png';
import mainlogo from '../assets/mainlogo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
        <div className={styles.footerGrid}>
          <div className={styles.col}>
            <Link to="/" className={styles.logo}>
              <img src={mainlogo} alt="Logo" className={styles.footerLogo} />
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

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.links}>
              <li><a href="#home"><FiArrowRight /> Contact</a></li>
              <li><a href="#about"><FiArrowRight /> Partner With Us</a></li>
              <li><Link to="/events"><FiArrowRight /> Events</Link></li>
              <li><a href="/blogs"><FiArrowRight /> Blogs</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.links}>
              <li><Link to="/privacy-policy"><FiArrowRight /> Privacy Policy</Link></li>
              <li><Link to="/terms"><FiArrowRight /> Terms & Conditions</Link></li>
              <li><Link to="/refund"><FiArrowRight /> Refund Policy</Link></li>
              <li><Link to="/community-guidelines"><FiArrowRight /> Community Guidelines</Link></li>
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

            <h4 className={styles.colTitle} style={{ marginBottom: '14px', marginTop: '10px' }}>Contact Info</h4>
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

        <div className={styles.bottomBar}>
          <p>© {currentYear} Trusted Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
