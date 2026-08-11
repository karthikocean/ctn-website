import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import styles from '../styles/ContactInformation.module.css';

const ContactInformation = () => {
  const contactItems = [
    {
      id: 'phone',
      icon: FiPhone,
      label: 'PHONE',
      value: '+91 97911 52132',
      link: 'tel:+919791152132',
    },
    {
      id: 'email',
      icon: FiMail,
      label: 'EMAIL',
      value: 'admin@trustednetwork.in',
      link: 'mailto:admin@trustednetwork.in',
    },
    {
      id: 'location',
      icon: FiMapPin,
      label: 'LOCATION',
      value: 'Trusted Network',
      subValue: 'Coimbatore, Tamil Nadu, India',
      link: null,
    },
    {
      id: 'hours',
      icon: FiClock,
      label: 'BUSINESS HOURS',
      value: 'Monday - Saturday',
      subValue: '9:00 AM - 6:00 PM',
      link: null,
    },
  ];

  return (
    <div className={styles.infoCard}>
      <div className={styles.sectionBadge}>
        <div className={styles.badgeLine}></div>
        <span>GET IN TOUCH</span>
      </div>

      <h2 className={styles.infoTitle}>Get in Touch</h2>

      <p className={styles.infoDesc}>
        Have a question or want to know more about Trusted Network? Reach out to our team.
      </p>

      <div className={styles.detailsList}>
        {contactItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <IconComponent className={styles.itemIcon} />
              </div>
              <div className={styles.itemContent}>
                <span className={styles.itemLabel}>{item.label}</span>
                {item.link ? (
                  <a href={item.link} className={styles.itemLink}>
                    {item.value}
                  </a>
                ) : (
                  <div className={styles.itemValue}>
                    <span>{item.value}</span>
                    {item.subValue && <span className={styles.itemSubValue}>{item.subValue}</span>}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInformation;