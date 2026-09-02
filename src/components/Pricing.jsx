import React, { useState, useEffect } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import { getPlans, getPlanById } from '../apis/plansApi';
import styles from '../styles/Pricing.module.css';

const getFormattedDiscount = (plan) => {
  let pct = null;
  const rawPct = plan.percentage ?? plan.discountPercentage ?? plan.discount;
  if (rawPct !== undefined && rawPct !== null && rawPct !== '') {
    const num = parseFloat(String(rawPct).replace('%', '').trim());
    if (!isNaN(num) && num > 0) {
      pct = num;
    }
  }

  if (pct === null && plan.offerPrice !== undefined && plan.offerPrice !== null && plan.amount) {
    const amount = Number(plan.amount);
    const offerPrice = Number(plan.offerPrice);
    if (amount > 0 && offerPrice < amount) {
      pct = ((amount - offerPrice) / amount) * 100;
    }
  }

  if (pct === null || isNaN(pct) || pct <= 0) {
    return null;
  }

  const formattedPct = Number(pct.toFixed(1)).toString();
  return `${formattedPct}% OFF`;
};

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchPlans = async () => {
      setLoading(true);
      try {
        const res = await getPlans();
        if (isMounted) {
          if (res?.status && Array.isArray(res.data)) {
            setPlans(res.data);
          } else {
            setPlans([]);
          }
        }
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
        if (isMounted) setPlans([]);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPlans();

    return () => {
      isMounted = false;
    };
  }, []);

  const handlePlanClick = async (planId) => {
    if (planId) {
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

        {loading ? (
          <div className={styles.loadingWrapper}>
            <span>Loading subscription plans...</span>
          </div>
        ) : (
          <div className={styles.plansGrid}>
            {plans.map((plan) => {
              const isFeatured = plan.featured === true || plan.sort === 1 || plan.billingType === 'standard';
              const discountLabel = getFormattedDiscount(plan);

              return (
                <div
                  key={plan._id}
                  className={`${styles.planCard} ${isFeatured ? styles.featured : ''}`}
                  onClick={() => handlePlanClick(plan._id)}
                >
                  <div className={styles.cardHeader}>
                    <h3 className={styles.planName}>{plan.title || plan.name}</h3>
                    {plan.description && <p className={styles.planTagline}>{plan.description}</p>}
                    
                    <div className={styles.priceContainer}>
                      {plan.offerPrice !== undefined && plan.offerPrice !== null && plan.offerPrice < plan.amount ? (
                        <>
                          <div className={styles.originalPriceWrapper}>
                            <span className={styles.originalPrice}>
                              ₹{Number(plan.amount).toLocaleString('en-IN')}
                            </span>
                            {discountLabel ? (
                              <span className={styles.discountBadge}>{discountLabel}</span>
                            ) : null}
                          </div>
                          <div className={styles.price}>
                            <span className={styles.currency}>₹</span>
                            <span className={styles.amount}>
                              {Number(plan.offerPrice).toLocaleString('en-IN')}
                            </span>
                            <span className={styles.period}>
                              {plan.billingCycle === 'yearly' ? '/yr' : (plan.billingCycle ? `/${plan.billingCycle}` : '/yr')}
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className={styles.price}>
                          <span className={styles.currency}>₹</span>
                          <span className={styles.amount}>
                            {plan.amount !== undefined && plan.amount !== null
                              ? Number(plan.amount).toLocaleString('en-IN')
                              : '0'}
                          </span>
                          <span className={styles.period}>
                            {plan.billingCycle === 'yearly' ? '/yr' : (plan.billingCycle ? `/${plan.billingCycle}` : '/yr')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Core Features Section */}
                  {plan.features && typeof plan.features === 'object' && (
                    <>
                      <div className={styles.sectionDividerTitle}>Features</div>
                      <ul className={styles.featureList}>
                        <li className={styles.featureItem}>
                          {plan.features.monthlyMeeting ? (
                            <FiCheck className={styles.checkIcon} />
                          ) : (
                            <FiX className={styles.crossIcon} />
                          )}
                          <span className={!plan.features.monthlyMeeting ? styles.disabledFeature : ''}>
                            Monthly network meetings
                          </span>
                        </li>
                        <li className={styles.featureItem}>
                          {plan.features.eventVisitor ? (
                            <FiCheck className={styles.checkIcon} />
                          ) : (
                            <FiX className={styles.crossIcon} />
                          )}
                          <span className={!plan.features.eventVisitor ? styles.disabledFeature : ''}>
                            Event visitor access
                          </span>
                        </li>
                        <li className={styles.featureItem}>
                          {plan.features.eventStall ? (
                            <FiCheck className={styles.checkIcon} />
                          ) : (
                            <FiX className={styles.crossIcon} />
                          )}
                          <span className={!plan.features.eventStall ? styles.disabledFeature : ''}>
                            Event stall access
                          </span>
                        </li>
                        <li className={styles.featureItem}>
                          {plan.features.spotlights ? (
                            <FiCheck className={styles.checkIcon} />
                          ) : (
                            <FiX className={styles.crossIcon} />
                          )}
                          <span className={!plan.features.spotlights ? styles.disabledFeature : ''}>
                            Spotlight visibility
                          </span>
                        </li>
                      </ul>
                    </>
                  )}

                  {/* Benefits Section */}
                  {plan.benefits && typeof plan.benefits === 'object' && (
                    <>
                      <div className={styles.sectionDividerTitle}>Key Benefits</div>
                      <ul className={styles.featureList}>
                        {plan.benefits.requirementResponseLimit !== undefined && (
                          <li className={styles.featureItem}>
                            <FiCheck className={styles.checkIcon} />
                            <span>
                              Requirement Response Limit: <strong>{plan.benefits.requirementResponseLimit}</strong>
                            </span>
                          </li>
                        )}
                        {plan.benefits.pointMultiplier !== undefined && (
                          <li className={styles.featureItem}>
                            <FiCheck className={styles.checkIcon} />
                            <span>
                              Point Multiplier: <strong>{plan.benefits.pointMultiplier}x</strong>
                            </span>
                          </li>
                        )}
                        {plan.benefits.trainingDiscountPercentage !== undefined && (
                          <li className={styles.featureItem}>
                            <FiCheck className={styles.checkIcon} />
                            <span>
                              Training Discount: <strong>{plan.benefits.trainingDiscountPercentage}%</strong>
                            </span>
                          </li>
                        )}
                        {plan.benefits.referralBonusMonths !== undefined && (
                          <li className={styles.featureItem}>
                            <FiCheck className={styles.checkIcon} />
                            <span>
                              Referral Bonus: <strong>{plan.benefits.referralBonusMonths} {plan.benefits.referralBonusMonths === 1 ? 'Month' : 'Months'}</strong>
                            </span>
                          </li>
                        )}
                      </ul>
                    </>
                  )}

                  {/* Modules Section */}
                  {Array.isArray(plan.modules) && plan.modules.length > 0 && (
                    <>
                      <div className={styles.sectionDividerTitle}>Module Usage Limits</div>
                      <div className={styles.moduleGrid}>
                        {plan.modules.map((mod, idx) => (
                          <span key={idx} className={styles.moduleBadge}>
                            {mod.moduleName}: <span className={styles.moduleLimit}>{mod.countLimit}/{mod.frequency}</span>
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
