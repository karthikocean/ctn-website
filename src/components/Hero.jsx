import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiDownload, FiArrowRight } from 'react-icons/fi';
import styles from '../styles/Hero.module.css';

// Importing the requested banner image
import originalBanner from '../assets/originalbanner.svg';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Effects */}
      <div className={styles.bgGlow}></div>
      <div className={styles.bgRings}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
      </div>

      {/* Subtle Animated Particles Effect */}
      <div className={styles.particles}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroLeft}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.title}>
              India’s Trusted Business Social 
              <span className={styles.highlight}> Networking Platform</span>
            </h1>

            <p className={styles.description}>
              Connect with verified business owners, build meaningful relationships,
              exchange recommendations, and grow your professional network.
            </p>

            <div className={styles.ctaGroup}>
              <button className={styles.btnYellow}>
                <FiUsers /> Join TN
              </button>
              <button className={styles.btnOutline}>
                <FiDownload /> Download App
              </button>
              <button className={styles.btnBlue}>
                <FiArrowRight /> Start Free Trial
              </button>
            </div>

            <div className={styles.reviewSection}>
              <div className={styles.initialsGroup}>
                <div className={styles.initialCircle}>RK</div>
                <div className={styles.initialCircle}>PM</div>
                <div className={styles.initialCircle}>SJ</div>
                <div className={styles.plusCircle}>+</div>
              </div>
              <div className={styles.reviewText}>
                <strong className={styles.reviewMain}>Trusted by Business Owners Across India</strong>
                <span className={styles.reviewSub}>100% GST-verified members. Zero fake profiles.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Static Cinematic Section with requested Image */}
        <div className={styles.heroRight}>
          <div className={styles.visualWrapper}>
            <motion.div
              className={styles.carouselItem}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0] // Maintained premium floating effect
              }}
              transition={{ 
                duration: 0.8,
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <img 
                src={originalBanner} 
                alt="Trusted Network Platform" 
                className={styles.cinematicImage} 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
