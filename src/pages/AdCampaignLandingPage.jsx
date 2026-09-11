import React, { useState, useEffect } from 'react';
import {
  FaGooglePlay,
  FaApple,
  FaWhatsapp,
  FaShieldAlt,
  FaHandshake,
  FaUsers,
  FaBullhorn,
  FaSearch,
  FaShareAlt,
  FaFileAlt,
  FaLightbulb,
  FaIdCard,
  FaCompass,
  FaMapMarkerAlt,
  FaThLarge,
  FaComments,
  FaChartLine
} from 'react-icons/fa';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

import { createEnquiry } from '../apis/enquiryApi';
import { getCommonStats } from '../apis/commonApi';
import promationHeroImg from '../assets/promationhero.png';
import styles from '../styles/AdCampaignLandingPage.module.css';

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.oceansoftware.ctn_business_app&hl=en_IN';
const APPLE_STORE_URL = 'https://apps.apple.com/in/app/trusted-network/id6786537784';
const WHATSAPP_COMMUNITY_URL = 'https://whatsapp.com/channel/0029VbDJWDJ35fLrB3jehO2R';

// Helper to format dynamic stats numbers
const formatHeroStat = (val, isMembers = false) => {
  if (val === null || val === undefined || val === '') return '--';
  if (typeof val === 'string' && (val.includes('K') || val.includes('+') || val.includes('%'))) {
    return val;
  }
  const num = typeof val === 'string' ? parseFloat(val.replace(/,/g, '')) : Number(val);
  if (isNaN(num) || num <= 0) {
    return num === 0 ? '0' : String(val);
  }
  if (isMembers && num >= 1000) {
    const kVal = Math.floor(num / 1000);
    return `${kVal}K+`;
  }
  return `${num.toLocaleString()}+`;
};

const AdCampaignLandingPage = () => {
  // Contact Form States
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic Hero Stats State
  const [statsData, setStatsData] = useState({
    activeMembersCount: null,
    categoryCount: null,
    totalRegions: null,
  });
  const [isStatsLoading, setIsStatsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchStats = async () => {
      try {
        const res = await getCommonStats();
        if (isMounted && res?.status && res.data) {
          setStatsData({
            activeMembersCount: res.data.activeMembersCount,
            categoryCount: res.data.categoryCount,
            totalRegions: res.data.totalRegions,
          });
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
      } finally {
        if (isMounted) {
          setIsStatsLoading(false);
        }
      }
    };

    fetchStats();
    return () => {
      isMounted = false;
    };
  }, []);

  // Field validation helpers
  const validateName = (val) => {
    const trimmed = val.trim();
    if (!trimmed) return 'Please enter your name.';
    if (!/^[A-Za-z\s]+$/.test(val)) return 'Name can contain only letters and spaces.';
    return '';
  };

  const validatePhone = (val) => {
    const trimmed = val.trim();
    if (!trimmed) return 'Please enter a valid 10-digit phone number.';
    if (!/^\d+$/.test(val) || val.length !== 10) return 'Please enter a valid 10-digit phone number.';
    return '';
  };

  const validateEmail = (val) => {
    const trimmed = val.trim();
    if (!trimmed) return 'Please enter a valid email address.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) return 'Please enter a valid email address.';
    return '';
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === 'name') setErrors((prev) => ({ ...prev, name: validateName(name) }));
    if (field === 'phone') setErrors((prev) => ({ ...prev, phone: validatePhone(phone) }));
    if (field === 'email') setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true });
    setApiError('');

    const nameErr = validateName(name);
    const phoneErr = validatePhone(phone);
    const emailErr = validateEmail(email);

    const newErrors = {
      name: nameErr,
      phone: phoneErr,
      email: emailErr
    };
    setErrors(newErrors);

    if (nameErr || phoneErr || emailErr) return;

    setIsSubmitting(true);
    try {
      const payload = {
        name,
        email,
        phoneNumber: phone,
        enquiryType: 'Ad Campaign Landing Page',
        city: '',
        companyName,
        comment: message
      };

      const result = await createEnquiry(payload);
      if (result && result.status) {
        setIsSubmitted(true);
        setName('');
        setPhone('');
        setEmail('');
        setCompanyName('');
        setMessage('');
        setTouched({});
        setErrors({});
      } else {
        setApiError(result?.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      setApiError(err.message || 'Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.landingPageWrapper}>
      <main className={styles.mainContent}>
        {/* ==========================================================================
            1. HERO / BANNER SECTION (FULL NAVY BACKGROUND + STATS BAR)
            ========================================================================== */}
        <section className={styles.bannerSection}>
          <div className={styles.bannerContainer}>
            {/* Top Area: Left Content + Absolutely Anchored Bottom-Right Visual */}
            <div className={styles.bannerTopArea}>
              {/* LEFT: Content (Badge, Heading, Description, 3 App Buttons) */}
              <div className={styles.bannerContentCol}>
                <div className={styles.sectionBadge}>
                  <span className={styles.sectionBadgeDot}></span>
                  <span className={styles.sectionBadgeLine}></span>
                  <span className={styles.sectionBadgeText}>TRUSTED BUSINESS COMMUNITY</span>
                </div>

                <h1 className={styles.bannerHeadline}>
                  Find the Right People for <span className={styles.headlineHighlight}>Your Business</span>
                </h1>

                <p className={styles.bannerDescription}>
                  Trusted Network helps you discover relevant professionals, business requirements, referrals and opportunities through a trusted business community.
                </p>

                {/* 3 Horizontal App Buttons (Google Play, App Store, WhatsApp Community) */}
                <div className={styles.bannerButtonsRow}>
                  {/* Button 1: Google Play */}
                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bannerBtn}
                    aria-label="Get it on Google Play"
                  >
                    <FaGooglePlay className={styles.bannerBtnIcon} />
                    <div className={styles.bannerBtnTextStack}>
                      <span className={styles.bannerBtnSubtext}>Get it on</span>
                      <span className={styles.bannerBtnMaintext}>Google Play</span>
                    </div>
                  </a>

                  {/* Button 2: App Store */}
                  <a
                    href={APPLE_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.bannerBtn} ${styles.bannerBtnAppStore}`}
                    aria-label="Download on App Store"
                  >
                    <FaApple className={styles.bannerBtnIcon} />
                    <div className={styles.bannerBtnTextStack}>
                      <span className={styles.bannerBtnSubtext}>Download on the</span>
                      <span className={styles.bannerBtnMaintext}>App Store</span>
                    </div>
                  </a>

                  {/* Button 3: WhatsApp Community */}
                  <a
                    href={WHATSAPP_COMMUNITY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.bannerBtn} ${styles.bannerBtnWhatsapp}`}
                    aria-label="Join WhatsApp Community"
                  >
                    <FaWhatsapp className={styles.bannerBtnIcon} />
                    <div className={styles.bannerBtnTextStack}>
                      <span className={styles.bannerBtnSubtext}>Join Our</span>
                      <span className={styles.bannerBtnMaintext}>WhatsApp Community</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* RIGHT: Dominant Large Hand + Mobile Mockup Anchored to Bottom-Right */}
              <div className={styles.bannerVisualCol}>
                <img
                  src={promationHeroImg}
                  alt="Trusted Network App - Hand and Mobile Mockup"
                  className={styles.bannerMainImage}
                />
              </div>
            </div>

            {/* BOTTOM STATS BAR (GLASSMORPHIC CONTAINER) */}
            <div className={styles.heroStatsBar}>
              <div className={styles.heroStatItem}>
                <div className={styles.heroStatIconWrap}>
                  <FaUsers />
                </div>
                <div className={styles.heroStatTextWrap}>
                  <span className={styles.heroStatNumber}>
                    {isStatsLoading ? '--' : formatHeroStat(statsData.activeMembersCount, true)}
                  </span>
                  <span className={styles.heroStatLabel}>Active Members</span>
                </div>
              </div>

              <div className={styles.heroStatDivider}></div>

              <div className={styles.heroStatItem}>
                <div className={styles.heroStatIconWrap}>
                  <FaThLarge />
                </div>
                <div className={styles.heroStatTextWrap}>
                  <span className={styles.heroStatNumber}>
                    {isStatsLoading ? '--' : formatHeroStat(statsData.categoryCount)}
                  </span>
                  <span className={styles.heroStatLabel}>Business Categories</span>
                </div>
              </div>

              <div className={styles.heroStatDivider}></div>

              <div className={styles.heroStatItem}>
                <div className={styles.heroStatIconWrap}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.heroStatTextWrap}>
                  <span className={styles.heroStatNumber}>
                    {isStatsLoading ? '--' : formatHeroStat(statsData.totalRegions)}
                  </span>
                  <span className={styles.heroStatLabel}>Cities Across India</span>
                </div>
              </div>

              <div className={styles.heroStatDivider}></div>

              <div className={styles.heroStatItem}>
                <div className={styles.heroStatIconWrap}>
                  <FaShieldAlt />
                </div>
                <div className={styles.heroStatTextWrap}>
                  <span className={styles.heroStatNumber}>100%</span>
                  <span className={styles.heroStatLabel}>Verified Members</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            2. WHY TRUSTED NETWORK? (CENTERED VALUE CARDS)
            ========================================================================== */}
        <section className={styles.whySection}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeaderCenter}>
              <div className={styles.sectionBadgeCenter}>
                <span className={styles.sectionBadgeDot}></span>
                <span className={styles.sectionBadgeLine}></span>
                <span className={styles.sectionBadgeText}>WHY TRUSTED NETWORK?</span>
              </div>
              <h2 className={styles.sectionTitle}>Why Join Trusted Network?</h2>
            </div>

            <div className={styles.whyGrid7}>
              {/* Point 1 */}
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <FaUsers />
                </div>
                <h3 className={styles.whyCardTitle}>Connect with Business Owners</h3>
                <p className={styles.whyCardDescription}>
                  Discover entrepreneurs and professionals relevant to your business.
                </p>
              </div>

              {/* Point 2 */}
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <FaHandshake />
                </div>
                <h3 className={styles.whyCardTitle}>Build Trusted Relationships</h3>
                <p className={styles.whyCardDescription}>
                  Follow and connect with people before looking for business opportunities.
                </p>
              </div>

              {/* Point 3 */}
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <FaShareAlt />
                </div>
                <h3 className={styles.whyCardTitle}>Give & Ask</h3>
                <p className={styles.whyCardDescription}>
                  Give referrals, introductions, and support—or ask your network for help.
                </p>
              </div>

              {/* Point 4 */}
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <FaBullhorn />
                </div>
                <h3 className={styles.whyCardTitle}>Promote Your Business</h3>
                <p className={styles.whyCardDescription}>
                  Share your products, services, offers, and business updates.
                </p>
              </div>

              {/* Point 5 */}
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <FaSearch />
                </div>
                <h3 className={styles.whyCardTitle}>Find Requirements</h3>
                <p className={styles.whyCardDescription}>
                  Discover what other business owners need and identify opportunities.
                </p>
              </div>

              {/* Point 6 */}
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <FaChartLine />
                </div>
                <h3 className={styles.whyCardTitle}>Grow Your Network</h3>
                <p className={styles.whyCardDescription}>
                  Build meaningful business connections beyond your existing circle.
                </p>
              </div>

              {/* Point 7 */}
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <FaShieldAlt />
                </div>
                <h3 className={styles.whyCardTitle}>Business-Focused Community</h3>
                <p className={styles.whyCardDescription}>
                  A dedicated platform designed specifically for business networking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            3. WHAT YOU GET (COMPACT FEATURE CARDS)
            ========================================================================== */}
        <section className={styles.whatYouGetSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeaderCenter}>
              <div className={styles.sectionBadgeCenter}>
                <span className={styles.sectionBadgeDot}></span>
                <span className={styles.sectionBadgeLine}></span>
                <span className={styles.sectionBadgeText}>WHAT YOU GET</span>
              </div>
              <h2 className={styles.sectionTitle}>What You Get on Trusted Network</h2>
            </div>

            <div className={styles.getGrid10}>
              {/* 1 */}
              <div className={styles.getCard}>
                <div className={styles.getCardHeader}>
                  <div className={styles.getCardIcon}>
                    <FaUsers />
                  </div>
                  <h3 className={styles.getCardTitle}>Business Network</h3>
                </div>
                <p className={styles.getCardDescription}>
                  Discover and connect with relevant business owners and professionals.
                </p>
              </div>

              {/* 2 */}
              <div className={styles.getCard}>
                <div className={styles.getCardHeader}>
                  <div className={styles.getCardIcon}>
                    <FaHandshake />
                  </div>
                  <h3 className={styles.getCardTitle}>Trusted Connections</h3>
                </div>
                <p className={styles.getCardDescription}>
                  Follow business owners, understand their business, and build relationships before doing business.
                </p>
              </div>

              {/* 3 */}
              <div className={styles.getCard}>
                <div className={styles.getCardHeader}>
                  <div className={styles.getCardIcon}>
                    <FaLightbulb />
                  </div>
                  <h3 className={styles.getCardTitle}>Business Opportunities</h3>
                </div>
                <p className={styles.getCardDescription}>
                  Find potential customers, partners, suppliers, referrals, and collaborations.
                </p>
              </div>

              {/* 4 */}
              <div className={styles.getCard}>
                <div className={styles.getCardHeader}>
                  <div className={styles.getCardIcon}>
                    <FaComments />
                  </div>
                  <h3 className={styles.getCardTitle}>Ask</h3>
                </div>
                <p className={styles.getCardDescription}>
                  Post what you need and let your network help you find the right person or connection.
                </p>
              </div>

              {/* 5 */}
              <div className={styles.getCard}>
                <div className={styles.getCardHeader}>
                  <div className={styles.getCardIcon}>
                    <FaShareAlt />
                  </div>
                  <h3 className={styles.getCardTitle}>Give</h3>
                </div>
                <p className={styles.getCardDescription}>
                  Share referrals, leads, introductions, knowledge, and business support with your network.
                </p>
              </div>

              {/* 6 */}
              <div className={styles.getCard}>
                <div className={styles.getCardHeader}>
                  <div className={styles.getCardIcon}>
                    <FaBullhorn />
                  </div>
                  <h3 className={styles.getCardTitle}>Promotion</h3>
                </div>
                <p className={styles.getCardDescription}>
                  Promote your products, services, offers, events, and business updates.
                </p>
              </div>

              {/* 7 */}
              <div className={styles.getCard}>
                <div className={styles.getCardHeader}>
                  <div className={styles.getCardIcon}>
                    <FaSearch />
                  </div>
                  <h3 className={styles.getCardTitle}>Requirements</h3>
                </div>
                <p className={styles.getCardDescription}>
                  Discover requirements posted by other business owners and identify opportunities.
                </p>
              </div>

              {/* 8 */}
              <div className={styles.getCard}>
                <div className={styles.getCardHeader}>
                  <div className={styles.getCardIcon}>
                    <FaChartLine />
                  </div>
                  <h3 className={styles.getCardTitle}>Milestones</h3>
                </div>
                <p className={styles.getCardDescription}>
                  Share business achievements, new launches, anniversaries, awards, and important milestones.
                </p>
              </div>

              {/* 9 */}
              <div className={styles.getCard}>
                <div className={styles.getCardHeader}>
                  <div className={styles.getCardIcon}>
                    <FaCompass />
                  </div>
                  <h3 className={styles.getCardTitle}>Spotlight</h3>
                </div>
                <p className={styles.getCardDescription}>
                  Discover newly added or highlighted business owners and connect with them.
                </p>
              </div>

              {/* 10 */}
              <div className={styles.getCard}>
                <div className={styles.getCardHeader}>
                  <div className={styles.getCardIcon}>
                    <FaIdCard />
                  </div>
                  <h3 className={styles.getCardTitle}>Your Business Profile</h3>
                </div>
                <p className={styles.getCardDescription}>
                  Create your business presence and let other members understand what you do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            4. HOW IT WORKS (HORIZONTAL PROCESS CARDS: LEFT CARD, RIGHT TEXT)
            ========================================================================== */}
        <section className={styles.howSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeaderCenter}>
              <div className={styles.sectionBadgeCenter}>
                <span className={styles.sectionBadgeDot}></span>
                <span className={styles.sectionBadgeLine}></span>
                <span className={styles.sectionBadgeText}>HOW IT WORKS</span>
              </div>
              <h2 className={styles.sectionTitle}>Your Journey with Trusted Network</h2>
              {/* <p className={styles.sectionSubtitle}>
                Trusted Network is simple:
              </p> */}
            </div>

            {/* 8 Process Steps with Left Process Column and Right Process Column */}
            <div className={styles.workGrid8}>
              {/* Step 1: Join (Left Side: Content -> Icon) */}
              <div className={`${styles.workCard} ${styles.workCardLeft}`}>
                <div className={styles.workCardContent}>
                  <h3 className={styles.workCardTitle}>Join</h3>
                  <p className={styles.workCardDescription}>
                    Create your business profile and introduce your business to the network.
                  </p>
                </div>
                <div className={styles.workCardIcon}>
                  <FaIdCard />
                </div>
              </div>

              {/* Step 2: Discover (Right Side: Icon -> Content) */}
              <div className={`${styles.workCard} ${styles.workCardRight}`}>
                <div className={styles.workCardIcon}>
                  <FaSearch />
                </div>
                <div className={styles.workCardContent}>
                  <h3 className={styles.workCardTitle}>Discover</h3>
                  <p className={styles.workCardDescription}>
                    Find relevant business owners based on their business, industry, location, and network.
                  </p>
                </div>
              </div>

              {/* Step 3: Connect (Left Side: Content -> Icon) */}
              <div className={`${styles.workCard} ${styles.workCardLeft}`}>
                <div className={styles.workCardContent}>
                  <h3 className={styles.workCardTitle}>Connect</h3>
                  <p className={styles.workCardDescription}>
                    Follow and connect with business owners you want to build a relationship with.
                  </p>
                </div>
                <div className={styles.workCardIcon}>
                  <FaUsers />
                </div>
              </div>

              {/* Step 4: Build Trust (Right Side: Icon -> Content) */}
              <div className={`${styles.workCard} ${styles.workCardRight}`}>
                <div className={styles.workCardIcon}>
                  <FaShieldAlt />
                </div>
                <div className={styles.workCardContent}>
                  <h3 className={styles.workCardTitle}>Build Trust</h3>
                  <p className={styles.workCardDescription}>
                    Learn about their business through their updates, promotions, achievements, requirements, and activities.
                  </p>
                </div>
              </div>

              {/* Step 5: Give (Left Side: Content -> Icon) */}
              <div className={`${styles.workCard} ${styles.workCardLeft}`}>
                <div className={styles.workCardContent}>
                  <h3 className={styles.workCardTitle}>Give</h3>
                  <p className={styles.workCardDescription}>
                    Help your network by sharing referrals, introductions, contacts, knowledge, and opportunities.
                  </p>
                </div>
                <div className={styles.workCardIcon}>
                  <FaShareAlt />
                </div>
              </div>

              {/* Step 6: Ask (Right Side: Icon -> Content) */}
              <div className={`${styles.workCard} ${styles.workCardRight}`}>
                <div className={styles.workCardIcon}>
                  <FaComments />
                </div>
                <div className={styles.workCardContent}>
                  <h3 className={styles.workCardTitle}>Ask</h3>
                  <p className={styles.workCardDescription}>
                    Post your requirements and ask your network for connections, recommendations, products, services, or support.
                  </p>
                </div>
              </div>

              {/* Step 7: Create Opportunities (Left Side: Content -> Icon) */}
              <div className={`${styles.workCard} ${styles.workCardLeft}`}>
                <div className={styles.workCardContent}>
                  <h3 className={styles.workCardTitle}>Create Opportunities</h3>
                  <p className={styles.workCardDescription}>
                    When the right people connect, business opportunities naturally happen.
                  </p>
                </div>
                <div className={styles.workCardIcon}>
                  <FaHandshake />
                </div>
              </div>

              {/* Step 8: Grow (Right Side: Icon -> Content) */}
              <div className={`${styles.workCard} ${styles.workCardRight}`}>
                <div className={styles.workCardIcon}>
                  <FaChartLine />
                </div>
                <div className={styles.workCardContent}>
                  <h3 className={styles.workCardTitle}>Grow</h3>
                  <p className={styles.workCardDescription}>
                    Keep networking, supporting others, and building trusted relationships to grow your business network.
                  </p>
                </div>
              </div>
            </div>

            {/* Dedicated Journey Strip */}
            {/* <div className={styles.journeyCardStrip}>
              <h3 className={styles.journeyTitle}>The Trusted Network Journey</h3>
              <div className={styles.journeyFlow}>
                <span className={styles.journeyStep}>JOIN</span>
                <span className={styles.journeyArrow}>→</span>
                <span className={styles.journeyStep}>DISCOVER</span>
                <span className={styles.journeyArrow}>→</span>
                <span className={styles.journeyStep}>CONNECT</span>
                <span className={styles.journeyArrow}>→</span>
                <span className={styles.journeyStep}>TRUST</span>
                <span className={styles.journeyArrow}>→</span>
                <span className={styles.journeyStep}>GIVE</span>
                <span className={styles.journeyArrow}>→</span>
                <span className={styles.journeyStep}>ASK</span>
                <span className={styles.journeyArrow}>→</span>
                <span className={styles.journeyStep}>OPPORTUNITY</span>
                <span className={styles.journeyArrow}>→</span>
                <span className={styles.journeyStep}>GROW</span>
              </div>
            </div> */}
          </div>
        </section>

        {/* ==========================================================================
            5. CONTACT US FORM (TWO-COLUMN DESKTOP/TABLET COMPOSITION)
            ========================================================================== */}
        <section className={styles.contactSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.contactContainer}>
              <div className={styles.contactLeftCol}>
                <div className={styles.sectionBadge}>
                  <span className={styles.sectionBadgeDot}></span>
                  <span className={styles.sectionBadgeLine}></span>
                  <span className={styles.sectionBadgeText}>GET IN TOUCH</span>
                </div>
                <h2 className={styles.contactTitle}>Contact Us</h2>
                <p className={styles.contactSubtitle}>
                  Have questions or want to get started with Trusted Network? Send us a message and our team will get in touch with you.
                </p>
              </div>

              <div className={styles.contactRightCol}>
                <div className={styles.contactFormCard}>
                  {isSubmitted ? (
                    <div className={styles.successBox}>
                      <FiCheckCircle className={styles.successIcon} />
                      <h3 className={styles.successTitle}>Thank You!</h3>
                      <p className={styles.successText}>
                        Your message has been submitted successfully. Our team will get back to you shortly.
                      </p>
                      <button
                        type="button"
                        className={styles.resetBtn}
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      {/* Form Grid Layout */}
                      <div className={styles.contactFormGrid}>
                        {/* 1. Name */}
                        <div className={`${styles.formGroup} ${styles.fieldName}`}>
                          <label htmlFor="contact-name" className={styles.formLabel}>
                            Name <span className={styles.requiredAsterisk}>*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            value={name}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (val === '' || /^[A-Za-z\s]+$/.test(val)) {
                                setName(val);
                                if (touched.name) setErrors((prev) => ({ ...prev, name: validateName(val) }));
                              }
                            }}
                            onBlur={() => handleBlur('name')}
                            placeholder="Enter your name"
                            className={`${styles.formInput} ${errors.name && touched.name ? styles.formInputError : ''}`}
                            disabled={isSubmitting}
                          />
                          {errors.name && touched.name && (
                            <span className={styles.fieldErrorText}>{errors.name}</span>
                          )}
                        </div>

                        {/* 2. Phone Number */}
                        <div className={`${styles.formGroup} ${styles.fieldPhone}`}>
                          <label htmlFor="contact-phone" className={styles.formLabel}>
                            Phone Number <span className={styles.requiredAsterisk}>*</span>
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (val === '' || (/^\d+$/.test(val) && val.length <= 10)) {
                                setPhone(val);
                                if (touched.phone) setErrors((prev) => ({ ...prev, phone: validatePhone(val) }));
                              }
                            }}
                            onBlur={() => handleBlur('phone')}
                            placeholder="Enter phone number"
                            className={`${styles.formInput} ${errors.phone && touched.phone ? styles.formInputError : ''}`}
                            disabled={isSubmitting}
                          />
                          {errors.phone && touched.phone && (
                            <span className={styles.fieldErrorText}>{errors.phone}</span>
                          )}
                        </div>

                        {/* 3. Email */}
                        <div className={`${styles.formGroup} ${styles.fieldEmail}`}>
                          <label htmlFor="contact-email" className={styles.formLabel}>
                            Email <span className={styles.requiredAsterisk}>*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                              const val = e.target.value;
                              setEmail(val);
                              if (touched.email) setErrors((prev) => ({ ...prev, email: validateEmail(val) }));
                            }}
                            onBlur={() => handleBlur('email')}
                            placeholder="Enter email address"
                            className={`${styles.formInput} ${errors.email && touched.email ? styles.formInputError : ''}`}
                            disabled={isSubmitting}
                          />
                          {errors.email && touched.email && (
                            <span className={styles.fieldErrorText}>{errors.email}</span>
                          )}
                        </div>

                        {/* 4. Company Name */}
                        <div className={`${styles.formGroup} ${styles.fieldCompany}`}>
                          <label htmlFor="contact-company" className={styles.formLabel}>
                            Company Name
                          </label>
                          <input
                            id="contact-company"
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="Enter company name"
                            className={styles.formInput}
                            disabled={isSubmitting}
                          />
                        </div>

                        {/* 5. Message Textarea */}
                        <div className={`${styles.formGroup} ${styles.fieldMessage}`}>
                          <label htmlFor="contact-message" className={styles.formLabel}>
                            Message
                          </label>
                          <textarea
                            id="contact-message"
                            rows={2}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tell us how we can help"
                            className={styles.formTextarea}
                            disabled={isSubmitting}
                          />
                        </div>

                        {/* 6. Submit Button */}
                        <div className={`${styles.formButtonWrap} ${styles.fieldSubmit}`}>
                          <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isSubmitting}
                          >
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            <FiSend className={styles.submitIcon} />
                          </button>
                        </div>
                      </div>

                      {/* API Error Box */}
                      {apiError && (
                        <div className={styles.apiErrorBox}>
                          {apiError}
                        </div>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdCampaignLandingPage;
