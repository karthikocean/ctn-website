import React from "react";
import { FiShield, FiMonitor, FiTrendingUp, FiMapPin, FiCalendar, FiAward, FiUsers } from "react-icons/fi";
import styles from "../styles/Benefits.module.css";

const cards = [
  {
    icon: <FiShield className={styles.icon} />, // Verified Business Community
    title: "Verified Business Community",
    description: "Only GST-verified business owners and professionals can access TN, creating a trusted and high-quality networking environment."
  },
  {
    icon: <FiMonitor className={styles.icon} />, // Business Social Media Platform
    title: "Business Social Media Platform",
    description: "TN works like a professional business social media platform focused entirely on business growth and networking."
  },
  {
    icon: <FiTrendingUp className={styles.icon} />, // Referral-Based Growth
    title: "Referral-Based Growth",
    description: "Members grow through trusted referrals, recommendations, introductions, and business discussions."
  },
  {
    icon: <FiMapPin className={styles.icon} />, // Nearby Networking
    title: "Nearby Networking",
    description: "Connect with nearby professionals and businesses based on location, category, and networking interests."
  },
  {
    icon: <FiCalendar className={styles.icon} />, // Structured Daily Activities
    title: "Structured Daily Activities",
    description: "Daily engagement activities help members stay active, visible, and connected inside the platform."
  },
  {
    icon: <FiAward className={styles.icon} />, // Points & Rewards System
    title: "Points & Rewards System",
    description: "Members earn activity points for networking, referrals, participation, and helping the community."
  },
  {
    icon: <FiUsers className={styles.icon} />, // Online + Offline Networking
    title: "Online + Offline Networking",
    description: "TN combines digital networking with physical business meetings, monthly networking meets, and regional events."
  }
];

const Benefits = () => (
  <section className={styles.benefits} id="benefits">
    <div className="container">
      {/* Premium Label */}
      <div className={styles.sectionLabelWrapper}>
        <div className={styles.sectionLabel}>
          <div className={styles.line}></div>
          <span>WHY PROFESSIONALS CHOOSE TN</span>
        </div>
      </div>
      <h2 className={styles.title}>Why Choose Trusted Network</h2>
      <p className={styles.subtitle}>
        Connect with trusted professionals and grow through meaningful business relationships.
      </p>
      {/* First row: 4 cards */}
      <div className={`${styles.cardsRow} ${styles.firstRow}`}>
        {cards.slice(0, 4).map((card, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.iconWrapper}>{card.icon}</div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.description}</p>
          </div>
        ))}
      </div>
      {/* Second row: 3 cards */}
      <div className={`${styles.cardsRow} ${styles.secondRow}`}>
        {cards.slice(4).map((card, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.iconWrapper}>{card.icon}</div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
