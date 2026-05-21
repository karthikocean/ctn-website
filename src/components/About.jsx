import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiBriefcase, FiUsers, FiCheckCircle, FiShare2, 
  FiStar, FiPhone, FiGlobe, FiInfo, FiTrendingUp, FiUserPlus 
} from 'react-icons/fi';
import SectionHeader from './Common/SectionHeader';
import styles from '../styles/About.module.css';

// Using the generated image
import aboutImg from '../assets/about_networking.png';
import aboutBg from '../assets/aboutsectionbg.svg';

const Counter = ({ value, label, suffix = "", icon: Icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (isNaN(end)) return;
      
      let duration = 2000;
      let counter = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(start);
        }
      }, duration / 50);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className={styles.statBox}>
      <div className={styles.statIcon}>
        <Icon />
      </div>
      <div className={styles.statContent}>
        <h3 className={styles.statValue}>{count}{suffix}</h3>
        <p className={styles.statLabel}>{label}</p>
      </div>
    </div>
  );
};

const About = () => {
  const stats = [
    { icon: FiCheckCircle, value: "100", suffix: "%", label: 'GST Verified Businesses' },
    { icon: FiUsers, value: "10000", suffix: "+", label: 'Verified Members' },
    { icon: FiUserPlus, value: "50000", suffix: "+", label: 'Business Connections' },
    { icon: FiTrendingUp, value: "24", label: 'Growing Business Network', suffix: "/7" },
  ];

  const shareItems = [
    { icon: FiBriefcase, label: "Business Requirements", color: "#093c72" },
    { icon: FiStar, label: "Recommendations", color: "#093c72" },
    { icon: FiCheckCircle, label: "Wins & Milestones", color: "#093c72" },
    { icon: FiUsers, label: "Professional Opportunities", color: "#093c72" },
    { icon: FiPhone, label: "Business Contacts", color: "#093c72" },
    { icon: FiGlobe, label: "Success Stories", color: "#093c72" },
    { icon: FiShare2, label: "Networking Requests", color: "#093c72" },
    { icon: FiInfo, label: "Industry Knowledge", color: "#093c72" },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.watermark}>TN</div>
      
      <div className="container">
        <div className={styles.statsLayout}>
          <div className={styles.statsLeft}>
            <div className={styles.imageWrapper}>
              <div className={styles.cornerTopLeft}></div>
              <img src={aboutImg} alt="Business Networking" className={styles.aboutImage} />
              <div className={styles.cornerBottomRight}></div>
            </div>
          </div>
          
          <div className={styles.statsRight}>
            <SectionHeader 
              label="ABOUT TRUSTED NETWORK" 
              title="Built for Professionals, by Professionals"
              centered={false}
            />
            
            <div className={styles.editorialContent}>
              <p className={styles.editorialText}>
                Trusted Network (TN) is a GST-verified professional business networking platform that connects entrepreneurs, startups, professionals, and business owners through referrals, recommendations, and trusted networking.
              </p>
              <p className={styles.editorialText}>
                Trusted Network (TN) is not a traditional business forum. It works as a dedicated business social media platform where verified professionals interact, collaborate, and help each other grow through meaningful business engagement.
              </p>
              <p className={styles.editorialText}>
                Only verified businesses are allowed inside the platform to maintain trust, authenticity, and high-quality networking opportunities. Each GST number is allowed a maximum of two accounts to ensure genuine participation and avoid spam or fake profiles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="community" className={styles.shareSection}>
        {/* Background and Dark Overlay applied ONLY to this section */}
        <img src={aboutBg} alt="" className={styles.aboutBg} />
        <div className={styles.aboutOverlay}></div>

        <div className={`container ${styles.shareContainer}`}>
          <h3 className={styles.shareTitle}>What Members Can Share</h3>
          <p className={styles.shareDescription}>
            Trusted Network (TN) creates a referral economy ecosystem where businesses grow together by sharing trusted recommendations, valuable introductions, and quality business opportunities.
          </p>
          <div className={styles.shareGrid}>
            {shareItems.map((item, index) => (
              <motion.div 
                key={index}
                className={styles.shareCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.iconBox}>
                  <item.icon size={24} />
                </div>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
