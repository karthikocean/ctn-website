import React from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiStar,
  FiCheckCircle,
  FiUsers,
  FiPhone,
  FiGlobe,
  FiShare2,
  FiInfo,
} from "react-icons/fi";

import styles from "../styles/MemberSharing.module.css";

const shareItems = [
  {
    icon: FiBriefcase,
    title: "Business Requirements",
  },
  {
    icon: FiStar,
    title: "Recommendations",
  },
  {
    icon: FiCheckCircle,
    title: "Wins & Milestones",
  },
  {
    icon: FiUsers,
    title: "Professional Opportunities",
  },
  {
    icon: FiPhone,
    title: "Business Contacts",
  },
  {
    icon: FiGlobe,
    title: "Success Stories",
  },
  {
    icon: FiShare2,
    title: "Networking Requests",
  },
  {
    icon: FiInfo,
    title: "Industry Knowledge",
  },
];

const MemberSharing = () => {
  return (
    <section className={styles.shareSection}>
      <div className={styles.shareContainer}>
        {/* Premium label */}
        <div className={styles.sectionLabelWrapper}>
          <div className={styles.sectionLabel}>
            <div className={styles.line} />
            <span>TRUSTED NETWORK FEATURES</span>
          </div>
        </div>
        {/* Header */}
        <div className={styles.headerWrapper}>
          <h2 className={styles.shareTitle}>What Members Can Share</h2>
          <p className={styles.shareDescription}>
            Trusted Network (TN) creates a referral economy ecosystem where businesses grow together by sharing trusted recommendations, valuable introductions, and quality business opportunities.
          </p>
        </div>
        {/* Premium Feature Cards Grid */}
        <div className={styles.cardsGrid}>
          {shareItems.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className={styles.iconBox}>
                <item.icon />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberSharing;