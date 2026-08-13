import React, { useState, useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';
import { getPlans, getPlanById } from '../apis/plansApi';
import styles from '../styles/Pricing.module.css';

const defaultPlans = [
  {
    _id: 'default-1',
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
    _id: 'default-2',
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
    _id: 'default-3',
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

const Pricing = () => {
  const [plans, setPlans] = useState(defaultPlans);
  const [loading, setLoading] = useState(false);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      const res = await getPlans();
      if (res?.status && Array.isArray(res.data) && res.data.length > 0) {
        const mappedPlans = res.data.map((planItem, idx) => {
          // Extract features from plan object or backend properties
          let featureList = [];

          if (planItem.features) {
            if (planItem.features.monthlyMeeting) featureList.push("Monthly network meetings");
            if (planItem.features.eventVisitor) featureList.push("Event visitor access");
            if (planItem.features.eventStall) featureList.push("Event stall access");
            if (planItem.features.spotlights) featureList.push("Spotlight visibility");
          }

          if (planItem.benefits) {
            if (planItem.benefits.pointMultiplier) featureList.push(`${planItem.benefits.pointMultiplier}x point multiplier`);
            if (planItem.benefits.trainingDiscountPercentage) featureList.push(`${planItem.benefits.trainingDiscountPercentage}% training discount`);
          }

          // Fallback features if API object features list is concise
          if (featureList.length < 3) {
            featureList = [
              "Networking access & connections",
              "Member directory listing",
              "Community discussion access",
              "Platform benefits & growth support"
            ];
          }

          return {
            _id: planItem._id || `plan-${idx}`,
            name: planItem.title || planItem.name || `Plan ${idx + 1}`,
            tagline: planItem.description || planItem.tagline || "Comprehensive business growth features.",
            price: planItem.amount !== undefined ? planItem.amount.toLocaleString() : planItem.price,
            period: planItem.billingCycle === 'yearly' ? '/yr' : '/yr',
            features: featureList,
            featured: planItem.sort === 1 || idx === 1 || planItem.featured === true,
            rawPlan: planItem
          };
        });

        setPlans(mappedPlans);
      }
      setLoading(false);
    };

    fetchPlans();
  }, []);

  const handlePlanClick = async (planId) => {
    if (planId && !planId.startsWith('default-')) {
      const res = await getPlanById(planId);
      if (res?.status && res.data) {
        setSelectedPlanDetails(res.data);
      }
    }
  };

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
              key={plan._id}
              className={`${styles.planCard} ${plan.featured ? styles.featured : ''}`}
              onClick={() => handlePlanClick(plan._id)}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planTagline}>{plan.tagline}</p>
                <div className={styles.price}>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.amount}>{plan.price}</span>
                  <span className={styles.period}>{plan.period || '/yr'}</span>
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

              {/* <div className={styles.cardFooter}>
                <button className={styles.planButton}>
                  Get Started
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
