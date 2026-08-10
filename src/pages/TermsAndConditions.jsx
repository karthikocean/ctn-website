import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiInfo, FiChevronRight, FiGlobe, FiMail, FiPhone } from 'react-icons/fi';
import styles from '../styles/TermsAndConditions.module.css';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('acceptance');

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Set up IntersectionObserver to update active sidebar link dynamically on scroll
  useEffect(() => {
    const sectionIds = [
      'acceptance',
      'eligibility',
      'accounts',
      'usage',
      'verification',
      'membership',
      'payments',
      'intellectual-property',
      'termination',
      'liability',
      'changes',
      'contact'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-120px 0px -60% 0px', // Adjusted to match sticky layout offsets
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
      const navbarOffset = 110; // offset for sticky main menu and header spacing
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
    { label: '1. Acceptance of Terms', id: 'acceptance' },
    { label: '2. Eligibility', id: 'eligibility' },
    { label: '3. User Accounts', id: 'accounts' },
    { label: '4. Platform Usage', id: 'usage' },
    { label: '5. Business Verification', id: 'verification' },
    { label: '6. Membership & Subscription', id: 'membership' },
    { label: '7. Payments', id: 'payments' },
    { label: '8. Intellectual Property', id: 'intellectual-property' },
    { label: '9. Termination', id: 'termination' },
    { label: '10. Limitation of Liability', id: 'liability' },
    { label: '11. Changes to Terms', id: 'changes' },
    { label: '12. Contact Information', id: 'contact' }
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
            <span className={styles.breadcrumbActive}>Terms & Conditions</span>
          </div>
          <h1 className={styles.heroTitle}>Terms & Conditions</h1>
          <p className={styles.heroSubtitle}>
            Please read these Terms & Conditions carefully before using Trusted Network.
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

                  </p>
                </div>
              </div>

              {/* Clause Sections */}
              <section id="acceptance" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>1.</span> Acceptance of Terms
                </h2>
                <p className={styles.clauseText}>
                  By accessing or using Trusted Network, you agree to comply with and be legally bound by these Terms and Conditions. If you do not agree to these terms, you are not authorized to use the platform.
                </p>
              </section>

              <section id="eligibility" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>2.</span> Eligibility
                </h2>
                <p className={styles.clauseText}>
                  To access and use our platform services, you must satisfy the following eligibility criteria:
                </p>
                <ul className={styles.clauseList}>
                  <li className={styles.clauseListItem}>
                    Users must be at least 18 years old to register.
                  </li>
                  <li className={styles.clauseListItem}>
                    Users must provide accurate, current, and verifiable business information.
                  </li>
                  <li className={styles.clauseListItem}>
                    Trusted Network reserves the right to inspect and verify all business credentials.
                  </li>
                </ul>
              </section>

              <section id="accounts" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>3.</span> User Accounts
                </h2>
                <p className={styles.clauseText}>
                  Registration and maintenance of your user profile is subject to the following rules:
                </p>
                <ul className={styles.clauseList}>
                  <li className={styles.clauseListItem}>
                    Users are responsible for maintaining account and password confidentiality.
                  </li>
                  <li className={styles.clauseListItem}>
                    Users are fully responsible for all activities and transactions performed through their account.
                  </li>
                </ul>
              </section>

              <section id="usage" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>4.</span> Platform Usage
                </h2>
                <p className={styles.clauseText}>
                  To maintain a professional and trustworthy environment, users shall not:
                </p>
                <ul className={styles.clauseList}>
                  <li className={styles.clauseListItem}>
                    Post false, outdated, or misleading information.
                  </li>
                  <li className={styles.clauseListItem}>
                    Impersonate any individual, executive, or business entity.
                  </li>
                  <li className={styles.clauseListItem}>
                    Upload, post, or share unlawful, abusive, defamatory, threatening, or misleading content.
                  </li>
                  <li className={styles.clauseListItem}>
                    Misuse or manipulate the referral ecosystem for unfair gain or spamming.
                  </li>
                </ul>
              </section>

              <section id="verification" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>5.</span> Business Verification
                </h2>
                <p className={styles.clauseText}>
                  To ensure community credibility, Trusted Network implements verification guidelines:
                </p>
                <ul className={styles.clauseList}>
                  <li className={styles.clauseListItem}>
                    Trusted Network may request GST registration documents, business certificates, or verification records.
                  </li>
                  <li className={styles.clauseListItem}>
                    The platform reserves the right to suspend, restrict, or terminate any accounts that are unverifiable.
                  </li>
                </ul>
              </section>

              <section id="membership" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>6.</span> Membership & Subscription
                </h2>
                <p className={styles.clauseText}>
                  Access to premium features and community networks is managed under pricing guidelines:
                </p>
                <ul className={styles.clauseList}>
                  <li className={styles.clauseListItem}>
                    Membership plans may include paid monthly, quarterly, or annual subscriptions.
                  </li>
                  <li className={styles.clauseListItem}>
                    All subscription fees are subject to change, with appropriate user notification where applicable.
                  </li>
                  <li className={styles.clauseListItem}>
                    Goods and Services Tax (GST) shall be applicable on all fees as per Indian tax regulations.
                  </li>
                </ul>
              </section>

              <section id="payments" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>7.</span> Payments
                </h2>
                <p className={styles.clauseText}>
                  All payment transactions, GST invoices, membership subscriptions, and legal compliance activities are managed and processed under Oceansoftwares Pvt. Ltd.
                </p>

                <ul className={styles.clauseList}>
                  <li className={styles.clauseListItem}>
                    Membership fees must be paid through the approved payment methods available on the platform.
                  </li>
                  <li className={styles.clauseListItem}>
                    All payments made are subject to applicable GST and statutory taxes as per Indian law.
                  </li>
                  <li className={styles.clauseListItem}>
                    Trusted Network reserves the right to modify pricing, subscription plans, or payment terms with prior notice.
                  </li>
                  <li className={styles.clauseListItem}>
                    Users are responsible for ensuring that their payment information is accurate and up to date.
                  </li>
                </ul>
              </section>

              <section id="intellectual-property" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>8.</span> Intellectual Property
                </h2>
                <p className={styles.clauseText}>
                  All proprietary content available on Trusted Network, including but not limited to logos, trademarks, designs, software, text, graphics, images, databases, and platform functionality, remains the exclusive property of Oceansoftwares Pvt. Ltd.
                </p>

                <ul className={styles.clauseList}>
                  <li className={styles.clauseListItem}>
                    Users may not copy, reproduce, distribute, modify, or commercially exploit any platform content without prior written permission.
                  </li>
                  <li className={styles.clauseListItem}>
                    Unauthorized use of Trusted Network intellectual property may result in legal action.
                  </li>
                  <li className={styles.clauseListItem}>
                    All rights, titles, and interests related to the platform are reserved by Oceansoftwares Pvt. Ltd.
                  </li>
                </ul>
              </section>

              <section id="termination" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>9.</span> Termination
                </h2>
                <p className={styles.clauseText}>
                  Trusted Network reserves the right to suspend, restrict, or permanently terminate user accounts violating these terms, or engaging in actions detrimental to the community, without prior notice.
                </p>
              </section>

              <section id="liability" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>10.</span> Limitation of Liability
                </h2>
                <p className={styles.clauseText}>
                  To the maximum extent permitted by applicable law, Trusted Network and Oceansoftwares Pvt. Ltd. shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from the use of the platform.
                </p>

                <ul className={styles.clauseList}>
                  <li className={styles.clauseListItem}>
                    Trusted Network does not guarantee uninterrupted, error-free, or completely secure platform access at all times.
                  </li>
                  <li className={styles.clauseListItem}>
                    The platform is not responsible for business losses, missed opportunities, or disputes arising between members.
                  </li>
                  <li className={styles.clauseListItem}>
                    Users are solely responsible for their interactions, transactions, and agreements made through the platform.
                  </li>
                  <li className={styles.clauseListItem}>
                    Trusted Network shall not be liable for damages resulting from technical failures, service interruptions, or unauthorized access.
                  </li>
                </ul>
              </section>

              <section id="changes" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>11.</span> Changes to Terms
                </h2>
                <p className={styles.clauseText}>
                  Trusted Network reserves the right to update or modify these Terms & Conditions at any time. Changes become effective immediately upon posting. Your continued use of the platform denotes acceptance of updated terms.
                </p>
              </section>

              <section id="contact" className={styles.clauseSection}>
                <h2 className={styles.clauseTitle}>
                  <span className={styles.clauseNumber}>12.</span> Contact Information
                </h2>
                <p className={styles.clauseText}>
                  For any legal concerns, questions, or clarification regarding these Terms & Conditions, please contact us at:
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

export default TermsAndConditions;
