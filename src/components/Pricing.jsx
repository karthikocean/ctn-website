import React, { useState, useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';
import { getPlans, getPlanById } from '../apis/plansApi';
import styles from '../styles/Pricing.module.css';

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      try {
        const res = await getPlans();
        if (res?.status && Array.isArray(res.data) && res.data.length > 0) {
          const mappedPlans = res.data.map((planItem, idx) => {
            // Extract features from backend response object or array
            let featureList = [];

            if (Array.isArray(planItem.features)) {
              featureList = [...planItem.features];
            } else if (planItem.features && typeof planItem.features === 'object') {
              if (planItem.features.monthlyMeeting) featureList.push("Monthly network meetings");
              if (planItem.features.eventVisitor) featureList.push("Event visitor access");
              if (planItem.features.eventStall) featureList.push("Event stall access");
              if (planItem.features.spotlights) featureList.push("Spotlight visibility");
            }

            if (planItem.benefits && typeof planItem.benefits === 'object') {
              if (planItem.benefits.pointMultiplier) {
                featureList.push(`${planItem.benefits.pointMultiplier}x point multiplier`);
              }
              if (planItem.benefits.trainingDiscountPercentage) {
                featureList.push(`${planItem.benefits.trainingDiscountPercentage}% training discount`);
              }
            }

            return {
              _id: planItem._id || `plan-${idx}`,
              name: planItem.title || planItem.name || '',
              tagline: planItem.description || planItem.tagline || '',
              price: planItem.amount !== undefined && planItem.amount !== null ? planItem.amount.toLocaleString() : '',
              period: planItem.billingCycle === 'yearly' ? '/yr' : (planItem.billingCycle ? `/${planItem.billingCycle}` : '/yr'),
              features: featureList,
              featured: planItem.featured === true || planItem.sort === 1,
              rawPlan: planItem
            };
          });

          setPlans(mappedPlans);
        } else {
          setPlans([]);
        }
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
        setPlans([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handlePlanClick = async (planId) => {
    if (planId && !planId.startsWith('plan-')) {
      try {
        const res = await getPlanById(planId);
        if (res?.status && res.data) {
          setSelectedPlanDetails(res.data);
        }
      } catch (error) {
        console.error("Error fetching plan details:", error);
      }
    }
  };

  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <div className={styles.sectionLabelWrapper}>
          <div className={styles.sectionLabel}>
            <div className={styles.labelLine}></div>
            <span>BUSINESS GROWTH PLANS</span>
          </div>
        </div>

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
                {plan.tagline && <p className={styles.planTagline}>{plan.tagline}</p>}
                <div className={styles.price}>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.amount}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
              </div>

              {plan.features && plan.features.length > 0 && (
                <ul className={styles.featureList}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <FiCheck className={styles.checkIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
