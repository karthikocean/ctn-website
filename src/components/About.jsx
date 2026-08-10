import React from 'react';
import styles from '../styles/About.module.css';
import aboutImg from '../assets/about_networking.png';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImageColumn}>
            <div className={styles.aboutImageWrapper}>
              <div className={styles.cornerTopLeft}></div>
              <img
                src={aboutImg}
                alt="Business Networking"
                className={styles.aboutImage}
              />
              <div className={styles.cornerBottomRight}></div>
            </div>
          </div>

          <div className={styles.aboutContent}>
            <div className={styles.aboutLabel}>
              <div className={styles.aboutLabelLine}></div>
              <span>ABOUT TRUSTED NETWORK</span>
            </div>

            <h2 className={styles.aboutTitle}>
              Built for Professionals, by Professionals
            </h2>

            <div className={styles.aboutDescription}>
              <p className={styles.aboutParagraph}>
                Trusted Network (TN) is a GST-verified professional business
                networking platform that connects entrepreneurs, startups,
                professionals, and business owners through referrals,
                recommendations, and trusted networking.
              </p>
              <p className={styles.aboutParagraph}>
                Trusted Network (TN) is not a traditional business forum. It works
                as a dedicated business social media platform where verified
                professionals interact, collaborate, and help each other grow through
                meaningful business engagement.
              </p>
              <p className={styles.aboutParagraph}>
                Only verified businesses are allowed inside the platform to maintain
                trust, authenticity, and high-quality networking opportunities. Each GST
                number is allowed a maximum of two accounts to ensure genuine participation
                and avoid spam or fake profiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

