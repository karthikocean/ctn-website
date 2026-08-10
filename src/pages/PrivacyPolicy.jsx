import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiInfo, FiChevronRight, FiGlobe, FiMail, FiPhone } from 'react-icons/fi';
import styles from '../styles/PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('collect');

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Set up IntersectionObserver to update active sidebar link dynamically on scroll
  useEffect(() => {
    const sectionIds = [
      'collect',
      'use-info',
      'cookies',
      'sharing',
      'security',
      'retention',
      'rights',
      'links',
      'children',
      'updates',
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
    { label: '1. Information We Collect', id: 'collect' },
    { label: '2. How We Use Information', id: 'use-info' },
    { label: '3. Cookies & Analytics', id: 'cookies' },
    { label: '4. Data Sharing', id: 'sharing' },
    { label: '5. Data Security', id: 'security' },
    { label: '6. Data Retention', id: 'retention' },
    { label: '7. User Rights', id: 'rights' },
    { label: '8. Third-Party Links', id: 'links' },
    { label: '9. Children\'s Privacy', id: 'children' },
    { label: '10. Policy Updates', id: 'updates' },
    { label: '11. Contact Information', id: 'contact' }
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
            <span className={styles.breadcrumbActive}>Privacy Policy</span>
          </div>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroSubtitle}>
            Your privacy is important to us. This Privacy Policy explains how Trusted Network collects, uses, and protects your information.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className={styles.mainContent}>
        <div className={styles.contentContainer}>

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
            <section id="collect" className={styles.clauseSection}>
              <h2 className={styles.clauseTitle}>
                <span className={styles.clauseNumber}>1.</span> Information We Collect
              </h2>
              <p className={styles.clauseText}>
                We collect information to verify profiles, offer tailored business matchmaking, and ensure safety. This includes:
              </p>
              <ul className={styles.clauseList}>
                <li className={styles.clauseListItem}><strong>Name:</strong> User identity validation.</li>
                <li className={styles.clauseListItem}><strong>Mobile Number:</strong> Authentication and primary contact.</li>
                <li className={styles.clauseListItem}><strong>Email Address:</strong> Official alerts, communication, and invoices.</li>
                <li className={styles.clauseListItem}><strong>Business Information:</strong> Trade name, industry, and location.</li>
                <li className={styles.clauseListItem}><strong>GST Information:</strong> Verification of business status.</li>
                <li className={styles.clauseListItem}><strong>Company Details:</strong> Company registration, size, and details.</li>
                <li className={styles.clauseListItem}><strong>Profile Information:</strong> Bio, profile photos, achievements, and search history.</li>
                <li className={styles.clauseListItem}><strong>Usage Data:</strong> How you interact with other network members.</li>
                <li className={styles.clauseListItem}><strong>Device Information:</strong> IP address, device type, and platform metadata.</li>
              </ul>
            </section>

            <section id="use-info" className={styles.clauseSection}>
              <h2 className={styles.clauseTitle}>
                <span className={styles.clauseNumber}>2.</span> How We Use Information
              </h2>
              <p className={styles.clauseText}>
                The information we collect is used strictly for core business networking purposes:
              </p>
              <ul className={styles.clauseList}>
                <li className={styles.clauseListItem}>Account creation and security checks.</li>
                <li className={styles.clauseListItem}>Business verification (GST validation, entity registration reviews).</li>
                <li className={styles.clauseListItem}>Networking recommendations and business matching.</li>
                <li className={styles.clauseListItem}>Customer support and technical troubleshooting.</li>
                <li className={styles.clauseListItem}>Platform improvement, performance tracking, and new feature research.</li>
                <li className={styles.clauseListItem}>Communication regarding services, newsletters, and policy changes.</li>
              </ul>
            </section>

            <section id="cookies" className={styles.clauseSection}>
              <h2 className={styles.clauseTitle}>
                <span className={styles.clauseNumber}>3.</span> Cookies & Analytics
              </h2>
              <p className={styles.clauseText}>
                Trusted Network may use cookies, analytics tools, and similar technologies to improve user experience. You can manage cookie preferences directly from your device web browser configurations.
              </p>
            </section>

            <section id="sharing" className={styles.clauseSection}>
              <h2 className={styles.clauseTitle}>
                <span className={styles.clauseNumber}>4.</span> Data Sharing
              </h2>
              <p className={styles.clauseText}>
                Trusted Network does not sell personal information under any circumstances. Information may be shared with:
              </p>
              <ul className={styles.clauseList}>
                <li className={styles.clauseListItem}>
                  <strong>Service providers:</strong> Infrastructure, analytics, and software hosting providers.
                </li>
                <li className={styles.clauseListItem}>
                  <strong>Government authorities:</strong> When legally required to verify entities or satisfy laws.
                </li>
                <li className={styles.clauseListItem}>
                  <strong>Payment providers:</strong> To process premium subscriptions, invoices, and billing under Oceansoftwares Pvt. Ltd.
                </li>
              </ul>
            </section>

            <section id="security" className={styles.clauseSection}>
              <h2 className={styles.clauseTitle}>
                <span className={styles.clauseNumber}>5.</span> Data Security
              </h2>
              <p className={styles.clauseText}>
                Industry-standard security practices (including encryption and secure API communication) are implemented to safeguard user data from unauthorized access, leakage, or modification.
              </p>
            </section>

            <section id="retention" className={styles.clauseSection}>
              <h2 className={styles.clauseTitle}>
                <span className={styles.clauseNumber}>6.</span> Data Retention
              </h2>
              <p className={styles.clauseText}>
                Information will be retained only as long as necessary for active business operations, community security audits, and tax/legal compliance purposes under Oceansoftwares Pvt. Ltd.
              </p>
            </section>

            <section id="rights" className={styles.clauseSection}>
              <h2 className={styles.clauseTitle}>
                <span className={styles.clauseNumber}>7.</span> User Rights
              </h2>
              <p className={styles.clauseText}>
                We believe in giving you complete control over your business data. Users may:
              </p>
              <ul className={styles.clauseList}>
                <li className={styles.clauseListItem}>Access their registered information.</li>
                <li className={styles.clauseListItem}>Update or correct information from the profile settings panel.</li>
                <li className={styles.clauseListItem}>Request account deletion by contacting support.</li>
              </ul>
            </section>

            <section id="links" className={styles.clauseSection}>
              <h2 className={styles.clauseTitle}>
                <span className={styles.clauseNumber}>8.</span> Third-Party Links
              </h2>
              <p className={styles.clauseText}>
                The platform may contain external links to member websites, tools, or resources. Trusted Network is not responsible for third-party privacy practices or external terms.
              </p>
            </section>

            <section id="children" className={styles.clauseSection}>
              <h2 className={styles.clauseTitle}>
                <span className={styles.clauseNumber}>9.</span> Children's Privacy
              </h2>
              <p className={styles.clauseText}>
                Our services are intended strictly for professional networking and business relationships. The platform is not intended for or directed to individuals below 18 years of age.
              </p>
            </section>

            <section id="updates" className={styles.clauseSection}>
              <h2 className={styles.clauseTitle}>
                <span className={styles.clauseNumber}>10.</span> Policy Updates
              </h2>
              <p className={styles.clauseText}>
                Trusted Network may update this Privacy Policy periodically. We will notify you of any material changes by updating the "Last Updated" date at the top of this document.
              </p>
            </section>

            <section id="contact" className={styles.clauseSection}>
              <h2 className={styles.clauseTitle}>
                <span className={styles.clauseNumber}>11.</span> Contact Information
              </h2>
              <p className={styles.clauseText}>
                If you have questions about how we process your personal data, or wish to exercise your rights, please reach out to us:
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
      </section >
    </div >
  );
};

export default PrivacyPolicy;
