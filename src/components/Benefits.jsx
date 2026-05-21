import React from 'react';
import { FiCheckCircle, FiSmartphone, FiUserPlus, FiMapPin, FiCalendar, FiZap, FiGlobe } from 'react-icons/fi';
import SectionHeader from './Common/SectionHeader';
import styles from '../styles/Benefits.module.css';

const Benefits = () => {
  const topRow = [
    {
      icon: FiCheckCircle,
      title: "Verified Business Community",
      description: "Only GST-verified business owners and professionals can access TN, creating a trusted and high-quality networking environment."
    },
    {
      icon: FiSmartphone,
      title: "Business Social Media Platform",
      description: "TN works like a professional business social media platform focused entirely on business growth and networking."
    },
    {
      icon: FiUserPlus,
      title: "Referral-Based Growth",
      description: "Members grow through trusted referrals, recommendations, introductions, and business discussions."
    },
    {
      icon: FiMapPin,
      title: "Nearby Networking",
      description: "Connect with nearby professionals and businesses based on location, category, and networking interests."
    }
  ];

  const bottomRow = [
    {
      icon: FiCalendar,
      title: "Structured Daily Activities",
      description: "Daily engagement activities help members stay active, visible, and connected inside the platform."
    },
    {
      icon: FiZap,
      title: "Points & Rewards System",
      description: "Members earn activity points for networking, referrals, participation, and helping the community."
    },
    {
      icon: FiGlobe,
      title: "Online + Offline Networking",
      description: "TN combines digital networking with physical business meetings, monthly networking meets, and regional events."
    }
  ];

  const BenefitCard = ({ benefit }) => (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.iconContainer}>
          <benefit.icon size={32} />
        </div>
        <h3 className={styles.cardTitle}>{benefit.title}</h3>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardDescription}>{benefit.description}</p>
      </div>
    </div>
  );

  return (
    <section 
      id="benefits" 
      className={styles.benefits} 
      style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('/benifitesbg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <SectionHeader
          title="Key Benefits Section"
          subtitle="A powerful ecosystem built for business growth"
        />

        <div className={styles.topRow}>
          {topRow.map((benefit, index) => (
            <BenefitCard key={`top-${index}`} benefit={benefit} />
          ))}
        </div>

        <div className={styles.bottomRow}>
          {bottomRow.map((benefit, index) => (
            <BenefitCard key={`bottom-${index}`} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
