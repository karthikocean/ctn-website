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
  { icon: FiBriefcase, title: "Business Requirements" },
  { icon: FiStar,      title: "Recommendations" },
  { icon: FiCheckCircle, title: "Wins & Milestones" },
  { icon: FiUsers,     title: "Professional Opportunities" },
  { icon: FiPhone,     title: "Business Contacts" },
  { icon: FiGlobe,     title: "Success Stories" },
  { icon: FiShare2,    title: "Networking Requests" },
  { icon: FiInfo,      title: "Industry Knowledge" },
];

const MemberSharing = () => {
  return (
    <section className={styles.shareSection}>
      <div className={styles.shareContainer}>

        {/* Section label */}
        <div className={styles.sectionLabelWrapper}>
          <div className={styles.sectionLabel}>
            <div className={styles.line} />
            <span>TRUSTED NETWORK FEATURES</span>
          </div>
        </div>

        {/* Header */}
        <div className={styles.headerWrapper}>
          <h2 className={styles.shareTitle}>What Members Can Share</h2>
        </div>

        {/* 4 × 2 feature card grid */}
        <div className={styles.cardsGrid}>
          {shareItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -5 }}
              >
                {/* Circular icon badge — overlaps left edge */}
                <div className={styles.iconCircle}>
                  <Icon />
                </div>

                {/* Title only */}
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MemberSharing;