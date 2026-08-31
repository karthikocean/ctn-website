import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/AboutWhoWeAre.module.css';
import whoWeAreImg from '../assets/about_img.png';

const AboutWhoWeAre = () => {
  return (
    <section className={styles.whoWeAreSection}>
      <div className="container">
        <motion.div
          className={styles.whoWeAreGrid}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* 1. Section Badge / Eyebrow */}
          <div className={styles.sectionBadge}>
            <div className={styles.badgeLine}></div>
            <span>ABOUT TRUSTED NETWORK</span>
          </div>

          {/* 2. Main Heading */}
          <h2 className={styles.sectionTitle}>
            Built Around People, Connections and Business Growth
          </h2>

          {/* 3. Image Container */}
          <div className={styles.imageWrapper}>
            <div className={styles.cornerTopLeft}></div>
            <img
              src={whoWeAreImg}
              alt="About Trusted Network Business Community"
              className={styles.featureImage}
            />
            <div className={styles.cornerBottomRight}></div>
          </div>

          {/* 4. Content Paragraphs */}
          <div className={styles.paragraphsList}>
            <div className={styles.paragraphItem}>
              <div className={styles.dotAccent}></div>
              <p className={styles.paragraphText}>
                Trusted Network is a professional business community created to bring entrepreneurs, business owners, startups and professionals together through meaningful relationships and trusted business connections.
              </p>
            </div>

            <div className={styles.paragraphItem}>
              <div className={styles.dotAccent}></div>
              <p className={styles.paragraphText}>
                We believe that every business has the potential to grow when it has access to the right people, the right relationships and the right opportunities. Trusted Network was created to make those connections easier, more meaningful and accessible.
              </p>
            </div>

            <div className={styles.paragraphItem}>
              <div className={styles.dotAccent}></div>
              <p className={styles.paragraphText}>
                Our business community brings together professionals from different industries, locations and areas of expertise, creating opportunities to connect, collaborate and build valuable business relationships.
              </p>
            </div>

            <div className={styles.paragraphItem}>
              <div className={styles.dotAccent}></div>
              <p className={styles.paragraphText}>
                Trusted Network is more than a place for finding contacts. It is a business community where members can exchange value, discover business opportunities, build trusted relationships and support each other throughout their business journey.
              </p>
            </div>

            <div className={styles.paragraphItem}>
              <div className={styles.dotAccent}></div>
              <p className={styles.paragraphText}>
                Our vision is to create a connected business ecosystem where meaningful relationships can lead to new opportunities and long term growth. Trusted Network is powered by Oceansoftwares Pvt Ltd., combining technology and business expertise to create a smarter way for professionals and businesses to connect.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
