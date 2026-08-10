import React from 'react';
import styles from '../styles/AboutWhoWeAre.module.css';
import whoWeAreImg from '../assets/about_img.png';

const AboutWhoWeAre = () => {
  return (
    <section className={styles.whoWeAreSection}>
      <div className="container">
        <div className={styles.whoWeAreLayout}>
          {/* Header Block (Badge + Heading) */}
          <div className={styles.headerBlock}>
            <div className={styles.sectionBadge}>
              <div className={styles.badgeLine}></div>
              <span>WHO WE ARE</span>
            </div>

            <h2 className={styles.sectionTitle}>
              Built for Professionals, Connected by Trust
            </h2>
          </div>

          {/* Image Block */}
          <div className={styles.imageBlock}>
            <div className={styles.whoWeAreImageWrapper}>
              <div className={styles.cornerTopLeft}></div>
              <img
                src={whoWeAreImg}
                alt="Trusted Network professional business networking platform"
                className={styles.whoWeAreImage}
              />
              <div className={styles.cornerBottomRight}></div>
            </div>
          </div>

          {/* Paragraph Text Block */}
          <div className={styles.textBlock}>
            <p className={styles.whoWeAreParagraph}>
              Trusted Network is a professional business networking platform designed to bring entrepreneurs, business owners, startups, and professionals together through meaningful business relationships.
            </p>
            <p className={styles.whoWeAreParagraph}>
              We help members build valuable connections, exchange recommendations, discover opportunities, and grow through genuine business engagement.
            </p>
            <p className={styles.whoWeAreParagraph}>
              More than simply collecting contacts, Trusted Network is built around meaningful conversations, trusted relationships, and opportunities that can lead to long-term business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;


