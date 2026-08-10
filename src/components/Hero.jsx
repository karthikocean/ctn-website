import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiDownload, FiArrowRight, FiStar } from 'react-icons/fi';
import styles from '../styles/Hero.module.css';
import Statistics from './Statistics';
import { FiShield } from "react-icons/fi";

// Import images
import heroBg from '../assets/heromainimg.svg';
import womanImage from '../assets/ogherosection womenimage (1).svg';

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <section
        id="home"
        className={styles.heroSection}
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark Overlay */}
        <div className={styles.heroOverlay}></div>

        {/* Main Content */}
        <div className={styles.heroContent}>

          {/* LEFT Side */}
          <div className={styles.heroLeft}>

            {/* Premium Label */}
            <div className={styles.sectionLabelWrapper}>
              <div className={styles.sectionLabel}>
                <div className={styles.line}></div>
                <span>BUSINESS SOCIAL NETWORK</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Title */}
              <h1 className={styles.heroTitle}>
                India&apos;s Trusted Business<br></br>
                <span className={styles.heroHighlight}> Social Networking Platform</span>
              </h1>

              {/* Description */}
              <p className={styles.heroDescription}>
                Connect with verified business owners, build meaningful relationships,
                exchange recommendations, and grow your professional network.
              </p>

              {/* CTA Buttons */}
              <div className={styles.ctaButtonGroup}>
                <button className={styles.ctaButton}>
                  <FiUsers /> Join TN
                </button>
                {/* <button className={styles.ctaButton}>
                  <FiDownload /> Download App
                </button> */}
                <button className={styles.ctaButton}>
                  Start Free Trial <FiArrowRight />
                </button>
              </div>

              {/* Trust / Review Section */}
              <div className={styles.trustSection}>
                <div className={styles.avatarStack}>
                  <div className={styles.avatarCircle}>RK</div>
                  <div className={styles.avatarCircle}>PM</div>
                  <div className={styles.avatarCircle}>SJ</div>
                  <div className={styles.avatarPlus}>+</div>
                </div>
                <div className={styles.trustText}>
                  <strong className={styles.trustMain}>Trusted by 10,000+ Business Owners Across India</strong>
                  <span className={styles.trustSub}>100% GST-verified members • Zero fake profiles</span>
                </div>
              </div>


            </motion.div>
          </div>

          {/* RIGHT Side — Hero Image */}
          <div className={styles.heroRight}>
            <motion.div
              className={styles.imageCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >

              {/* Floating Badge */}
              {/* <div className={styles.communityBadge}>
                <FiShield />
                <span>India's Trusted Business Community</span>
              </div> */}

              <img
                src={womanImage}
                alt="Trusted Network Platform"
                className={styles.heroImage}
              />
            </motion.div>
          </div>

        </div>
      </section>
      {/* Statistics Section */}
      <Statistics />
    </div>
  );
};

export default Hero;
