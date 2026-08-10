import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import styles from '../styles/Download.module.css';
import appMockup from '../assets/originalmobile.svg';

const Download = () => {
  return (
    <section id="download" className={styles.download}>

      <div className="container">

        <div className={styles.banner}>
          <div className={styles.content}>
            {/* Premium Label */}
            <div className={styles.sectionLabelWrapper}>
              <div className={styles.sectionLabel}>
                <div className={styles.line}></div>
                <span>JOIN THE TRUSTED NETWORK</span>
              </div>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.title}
            >
              Start Your Trusted Business Network Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={styles.description}
            >
              Download the TN mobile app and connect with verified professionals,
              business owners, and entrepreneurs across your region.
            </motion.p>

            <div className={styles.storeButtons}>
              <motion.a
                href="#"
                className={styles.storeCard}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.cardIcon}><FaApple /></div>
                <div className={styles.cardText}>
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </motion.a>
              <motion.a
                href="#"
                className={styles.storeCard}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.cardIcon}><FaGooglePlay /></div>
                <div className={styles.cardText}>
                  <span>GET IT ON</span>
                  <strong>Google Play</strong>
                </div>
              </motion.a>
            </div>
          </div>

          <motion.div
            className={styles.mockupContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={appMockup} alt="TN Mobile App" className={styles.appMockup} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Download;
