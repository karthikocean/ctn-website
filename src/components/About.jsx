import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';
import aboutImg from '../assets/about_networking.png';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.div
          className={styles.aboutGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Badge / Eyebrow */}
          <div className={styles.aboutLabel}>
            <div className={styles.aboutLabelLine}></div>
            <span>TRUSTED BUSINESS NETWORK</span>
          </div>

          {/* Main Heading */}
          <h2 className={styles.aboutTitle}>
            Where Business Connections Create New Opportunities
          </h2>

          {/* About Image */}
          <div className={styles.imageWrapper}>
            <div className={styles.cornerTopLeft}></div>
            <img
              src={aboutImg}
              alt="Trusted Business Network Opportunities"
              className={styles.aboutImage}
            />
            <div className={styles.cornerBottomRight}></div>
          </div>

          {/* Existing Content Paragraphs */}
          <div className={styles.paragraphsList}>
            <p className={styles.aboutParagraph}>
              Trusted Network is a professional business networking platform built to help business owners, entrepreneurs and professionals connect, collaborate and grow through meaningful business relationships.
            </p>
            <p className={styles.aboutParagraph}>
              Your next client, referral, partnership or business opportunity can start with the right connection. Trusted Network brings business owners and professionals together in one connected business network where you can discover relevant people, share your business and build valuable relationships.
            </p>
            <p className={styles.aboutParagraph}>
              Business networking is no longer limited to meetings and events. Stay connected with the business community, discover new opportunities and build relationships that can support your business growth wherever you are.
            </p>
            <p className={styles.aboutParagraph}>
              More than simply collecting contacts, Trusted Network helps you build a network that creates real business value through meaningful connections, relevant opportunities and long term relationships.
            </p>
            <p className={styles.aboutParagraph}>
              Trusted Network is built to help businesses connect with purpose, grow their network and discover new possibilities. The platform is powered by Ocean Softwares, bringing technology and business networking together in one connected experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
