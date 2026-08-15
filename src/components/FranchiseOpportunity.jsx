import React from 'react';
import { FiArrowRight, FiUsers, FiTrendingUp, FiBriefcase } from 'react-icons/fi';
import styles from '../styles/FranchiseOpportunity.module.css';
import opportunityImg from '../assets/about_networking.png';

const FranchiseOpportunity = ({ onApplyClick }) => {
  return (
    <section className={styles.opportunitySection}>
      <div className="container">
        <div className={styles.sectionGrid}>
          {/* Badge (Order 1 on Mobile) */}
          <div className={styles.badgeWrapper}>
            <div className={styles.sectionBadge}>
              <span className={styles.badgeDot}></span>
              <span className={styles.badgeLine}></span>
              <span className={styles.badgeText}>FRANCHISE OPPORTUNITY</span>
            </div>
          </div>

          {/* Heading (Order 2 on Mobile) */}
          <h2 className={styles.heading}>
            Become a Trusted Network Franchise Partner
          </h2>

          {/* Description (Order 3 on Mobile) */}
          <p className={styles.description}>
            Bring Trusted Network to your city and build a strong business community through meaningful connections, networking and business opportunities.
          </p>

          {/* Image Column (Order 4 on Mobile) */}
          <div className={styles.imageColumn}>
            <div className={styles.imageFrame}>
              <img
                src={opportunityImg}
                alt="Trusted Network Franchise Partner"
                className={styles.opportunityImg}
              />
              {/* <div className={styles.imageBadgeOverlay}>
                <span className={styles.overlayText}>Exclusive Territory Partner</span>
              </div> */}
            </div>
          </div>

          {/* Highlights List (Order 5 on Mobile) */}
          <div className={styles.highlightsList}>
            <div className={styles.highlightItem}>
              <div className={styles.iconBox}>
                <FiUsers className={styles.itemIcon} />
              </div>
              <div className={styles.itemContent}>
                <h4 className={styles.itemTitle}>01 — Build Your Network</h4>
                <p className={styles.itemDesc}>
                  Build a strong community of business owners and professionals.
                </p>
              </div>
            </div>

            <div className={styles.highlightItem}>
              <div className={styles.iconBox}>
                <FiTrendingUp className={styles.itemIcon} />
              </div>
              <div className={styles.itemContent}>
                <h4 className={styles.itemTitle}>02 — Grow Your Community</h4>
                <p className={styles.itemDesc}>
                  Create meaningful business relationships within your territory.
                </p>
              </div>
            </div>

            <div className={styles.highlightItem}>
              <div className={styles.iconBox}>
                <FiBriefcase className={styles.itemIcon} />
              </div>
              <div className={styles.itemContent}>
                <h4 className={styles.itemTitle}>03 — Create Opportunities</h4>
                <p className={styles.itemDesc}>
                  Help businesses discover relevant connections and opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Apply Now Action (Order 6 on Mobile) */}
          <div className={styles.actionWrapper}>
            <button
              type="button"
              className={styles.applyBtn}
              onClick={onApplyClick}
            >
              <span>Apply Now</span>
              <FiArrowRight className={styles.btnArrow} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseOpportunity;
