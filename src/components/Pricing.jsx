import React from 'react';
import { FiCheck } from 'react-icons/fi';
import styles from '../styles/Pricing.module.css';

const Pricing = () => {
  const plans = [
    {
      name: "Startup Plan",
      tagline: "Ideal for new entrepreneurs and small businesses starting their networking journey.",
      price: "4,999",
      features: [
        "Limited profile connections",
        "Limited activity posts",
        "Basic networking access",
        "Trial access included"
      ],
      featured: false
    },
    {
      name: "Advanced Plan",
      tagline: "Designed for growing businesses looking for more visibility and networking opportunities.",
      price: "9,999",
      features: [
        "Increased networking limits",
        "More daily activity access",
        "Higher profile reach",
        "Better visibility inside the platform"
      ],
      featured: true
    },
    {
      name: "Business Plan",
      tagline: "Perfect for serious business professionals and companies focused on maximum networking growth.",
      price: "19,999",
      features: [
        "Maximum networking access",
        "Premium visibility",
        "Advanced recommendation features",
        "Full business networking benefits"
      ],
      featured: false
    }
  ];

  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.sectionLabelWrapper}>
        <div className={styles.sectionLabel}>
          <div className={styles.labelLine}></div>
          <span>BUSINESS GROWTH PLANS</span>
        </div>
      </div>

      <div className="container">
        <h2 className={styles.pricingTitle}>Choose Your Plan</h2>

        <p className={styles.pricingDescription}>
          Simple, transparent pricing for every business stage.
        </p>

        <div className={styles.plansGrid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.planCard} ${plan.featured ? styles.featured : ''}`}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planTagline}>{plan.tagline}</p>
                <div className={styles.price}>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.amount}>{plan.price}</span>
                  <span className={styles.period}>/yr</span>
                </div>
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <FiCheck className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.cardFooter}>
                <button className={styles.planButton}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

