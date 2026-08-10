import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiInfo, FiChevronRight, FiGlobe, FiMail, FiPhone } from 'react-icons/fi';
import styles from '../styles/RefundPolicy.module.css';

const RefundPolicy = () => {
  const [activeSection, setActiveSection] = useState('subscription');

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Set up IntersectionObserver to update active sidebar link dynamically on scroll
  useEffect(() => {
    const sectionIds = [
      'subscription',
      'non-refundable',
      'duplicate',
      'failed',
      'cancellation',
      'eligibility',
      'processing',
      'gst',
      'changes',
      'contact'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-120px 0px -60% 0px',
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleSidebarClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarOffset = 110;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  const navItems = [
    { label: '1. Subscription Payments', id: 'subscription' },
    { label: '2. Non-Refundable Fees', id: 'non-refundable' },
    { label: '3. Duplicate Transactions', id: 'duplicate' },
    { label: '4. Failed Transactions', id: 'failed' },
    { label: '5. Cancellation Policy', id: 'cancellation' },
    { label: '6. Refund Eligibility', id: 'eligibility' },
    { label: '7. Refund Processing', id: 'processing' },
    { label: '8. GST', id: 'gst' },
    { label: '9. Changes to Refund Policy', id: 'changes' },
    { label: '10. Contact Information', id: 'contact' }
  ];

  return (
    <div className={styles.page}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.breadcrumbs}>
            <Link to="/">Home</Link>
            <FiChevronRight className={styles.breadcrumbSeparator} />
            <span>Legal</span>
            <FiChevronRight className={styles.breadcrumbSeparator} />
            <span className={styles.breadcrumbActive}>Refund Policy</span>
          </div>
          <h1 className={styles.heroTitle}>Refund Policy</h1>
          <p className={styles.heroSubtitle}>
            Please review our refund policy carefully before purchasing any membership or subscription.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <div className={styles.contentGrid}>


            {/* Content Card */}
            <main className={styles.contentCard}>
              <div className={styles.metaHeader}>
                <div className={styles.lastUpdated}>
                  Last Updated: <span className={styles.lastUpdatedSpan}>June 27, 2026</span>
                </div>
                <div className={styles.tnBadge}>TRUSTED NETWORK</div>
              </div>

              {/* Legal Disclaimer Card */}
              <div className={styles.disclaimerCard}>
                <FiInfo className={styles.disclaimerIcon} />
                <div className={styles.disclaimerContent}>
                  <h4>Important Legal Notice</h4>
                  <p>
                    All payments, GST invoices, agreements, subscriptions, and compliance activities are managed and processed under <a href="https://oceansoftwares.com" target="_blank" rel="noopener noreferrer">Oceansoftwares Pvt. Ltd.</a>
                  </p>
                </div>
              </div>

              {/* Clause Sections */}
              <section id="subscription" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>1.</span> Subscription Payments
                </h2>
                <p className={styles.clauseText}>
                  All membership upgrades, renewals, directory listings, sponsorship slots, and subscription payments are processed under and managed by <a href="https://oceansoftwares.com" target="_blank" rel="noopener noreferrer">Oceansoftwares Pvt. Ltd.</a>
                </p>
              </section>

              <section id="non-refundable" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>2.</span> Non-Refundable Fees
                </h2>
                <p className={styles.clauseText}>
                  Unless otherwise specified or mandated by law, membership fees, listing costs, and platform subscription fees are generally non-refundable once the membership status or slot has been activated.
                </p>
              </section>

              <section id="duplicate" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>3.</span> Duplicate Transactions
                </h2>
                <p className={styles.clauseText}>
                  In the event of duplicate payment transactions (where a user is billed twice for the same subscription period due to network lag, gateway retry, or system glitches), the excess amount will be refunded after verification.
                </p>
              </section>

              <section id="failed" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>4.</span> Failed Transactions
                </h2>
                <p className={styles.clauseText}>
                  If a payment is successfully deducted from your bank account or credit card but membership activation does not occur within 2 hours, users should contact support immediately with transaction details (UTR number, billing email) to get it manually provisioned.
                </p>
              </section>

              <section id="cancellation" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>5.</span> Cancellation Policy
                </h2>
                <p className={styles.clauseText}>
                  Users may cancel recurring subscriptions at any time through their membership dashboard or by contacting customer support:
                </p>
                <ul className={styles.clauseList}>
                  <li className={styles.clauseListItem}>
                    Cancellation prevents future billing cycles from being initiated.
                  </li>
                  <li className={styles.clauseListItem}>
                    No partial refunds will be provided for the remaining days of the current billing cycle. Access will continue until the active period expires.
                  </li>
                </ul>
              </section>

              <section id="eligibility" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>6.</span> Refund Eligibility
                </h2>
                <p className={styles.clauseText}>
                  Refund requests may be considered under specific, verified conditions:
                </p>
                <ul className={styles.clauseList}>
                  <li className={styles.clauseListItem}>Duplicate payment transactions.</li>
                  <li className={styles.clauseListItem}>Severe technical errors caused by the platform that prevent basic feature usage for over 72 consecutive hours.</li>
                  <li className={styles.clauseListItem}>Incorrect billing or mathematical invoice discrepancies.</li>
                </ul>
              </section>

              <section id="processing" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>7.</span> Refund Processing
                </h2>
                <p className={styles.clauseText}>
                  Once a refund request is approved by our billing team, the amount will be processed and credited to the original payment source (credit card, bank account, UPI wallet) within 7–14 business days.
                </p>
              </section>

              <section id="gst" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>8.</span> GST
                </h2>
                <p className={styles.clauseText}>
                  Goods and Services Tax (GST) charged on subscription invoices shall be governed by applicable Indian tax regulations. Refunds of GST amounts are subject to refund limits and credit note timelines defined by tax laws.
                </p>
              </section>

              <section id="changes" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>9.</span> Changes to Refund Policy
                </h2>
                <p className={styles.clauseText}>
                  Trusted Network reserves the right to modify, add, or replace clauses in this Refund Policy at any time. The modified policy will be posted on this page and takes effect immediately.
                </p>
              </section>

              <section id="contact" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>10.</span> Contact Information
                </h2>
                <p className={styles.clauseText}>
                  For any billing inquiries, duplicate payment claims, or refund requests, please contact our billing team:
                </p>
                <div className={styles.contactGridContainer}>
                  <div className={styles.contactCard}>
                    <div className={styles.contactIconWrapper}>
                      <FiGlobe />
                    </div>
                    <div className={styles.contactDetails}>
                      <span className={styles.contactLabel}>Website</span>
                      <a href="https://trustednetwork.in" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>
                        https://trustednetwork.in
                      </a>
                    </div>
                  </div>

                  <div className={styles.contactCard}>
                    <div className={styles.contactIconWrapper}>
                      <FiMail />
                    </div>
                    <div className={styles.contactDetails}>
                      <span className={styles.contactLabel}>Email</span>
                      <a href="mailto:support@trustednetwork.in" className={styles.contactValue}>
                        support@trustednetwork.in
                      </a>
                    </div>
                  </div>

                  <div className={styles.contactCard}>
                    <div className={styles.contactIconWrapper}>
                      <FiPhone />
                    </div>
                    <div className={styles.contactDetails}>
                      <span className={styles.contactLabel}>Phone</span>
                      <a href="tel:+919876543210" className={styles.contactValue}>
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
