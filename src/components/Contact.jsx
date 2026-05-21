import React from 'react';
import { FiPhone, FiMail, FiSend } from 'react-icons/fi';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>
            Contact Us 
          </div>
          <h2 className={styles.title}>Get In Touch With Us</h2>
          <p className={styles.subtitle}>
            Have questions about our professional networking platform? We're here to help! 
            Reach out to us and our team will get back to you as soon as possible.
          </p>
        </div>

        {/* <div className={styles.infoCards}>
          <div className={styles.card}>
            <div className={styles.iconBox}>
              <FiPhone />
            </div>
            <h3 className={styles.cardTitle}>Phone Number</h3>
            <p className={styles.cardText}>+91 9791152132</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}>
              <FiMail />
            </div>
            <h3 className={styles.cardTitle}>Email Address</h3>
            <p className={styles.cardText}>support@trustednetwork.in</p>
          </div>
        </div> */}

        <form className={styles.form}>
          <div className={styles.topRow}>
            <div className={styles.inputGroup}>
              <label>Your Name *</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Phone Number *</label>
              <input type="tel" placeholder="Enter phone number" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Your Email *</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
          </div>
          
          <div className={styles.inputGroup}>
            <label>Your Message *</label>
            <textarea placeholder="Write your message here..." rows="5" required></textarea>
          </div>

          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitBtn}>
              Send Message <FiSend />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
