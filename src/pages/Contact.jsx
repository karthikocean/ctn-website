import React from 'react';
import CommonHero from '../components/CommonHero';
import ContactInformation from '../components/ContactInformation';
import ContactForm from '../components/ContactForm';
import styles from '../styles/ContactInformation.module.css';

const Contact = () => {
  return (
    <main>
      <CommonHero title="Contact Us" />
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactLayout}>
            <ContactInformation />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
