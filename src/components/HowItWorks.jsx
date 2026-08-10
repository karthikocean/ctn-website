import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUserPlus, FiShield, FiEdit3, FiSearch, FiMessageCircle, FiTrendingUp } from 'react-icons/fi';
import styles from '../styles/HowItWorks.module.css';
import registeryouraccount from '../assets/registeryouraccount.svg';
import verifyyourbusiness from '../assets/verifyyourbusiness.svg';
import completeyourprofile from '../assets/completeyourprofile.svg';
import connectwithprofessionals from '../assets/connectwithprofessionals.svg';
import sharebusinessactivities from '../assets/sharebusinessactivities.svg';
import buildbusinessrelationships from '../assets/buildbusinessrelationships.svg';

const steps = [
  {
    id: 1,
    number: "01",
    tag: "STEP 1",
    title: "Register Your Account",
    description: "Download the TN mobile application and register using your mobile number and email address with OTP verification.",
    icon: <FiUserPlus size={32} />,
    image: registeryouraccount
  },
  {
    id: 2,
    number: "02",
    tag: "STEP 2",
    title: "Verify Your Business",
    description: "Complete GST verification to activate your business profile inside the platform.",
    icon: <FiShield size={32} />,
    image: verifyyourbusiness
  },
  {
    id: 3,
    number: "03",
    tag: "STEP 3",
    title: "Complete Your Profile",
    description: "Add your company details, services, networking interests, referrals required, and business information.",
    icon: <FiEdit3 size={32} />,
    image: completeyourprofile
  },
  {
    id: 4,
    number: "04",
    tag: "STEP 4",
    title: "Connect with Professionals",
    description: "Follow and connect with verified business owners relevant to your industry and interests.",
    icon: <FiSearch size={32} />,
    image: connectwithprofessionals
  },
  {
    id: 5,
    number: "05",
    tag: "STEP 5",
    title: "Share Business Activities",
    description: "Post your business requirements, recommendations, wins, opportunities, and professional updates.",
    icon: <FiMessageCircle size={32} />,
    image: sharebusinessactivities
  },
  {
    id: 6,
    number: "06",
    tag: "STEP 6",
    title: "Build Business Relationships",
    description: "Conduct business discussions, exchange recommendations, and create trusted business opportunities.",
    icon: <FiTrendingUp size={32} />,
    image: buildbusinessrelationships
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const describeSegment = (x, y, innerRadius, outerRadius, startAngle, endAngle) => {
    const startInner = polarToCartesian(x, y, innerRadius, endAngle);
    const endInner = polarToCartesian(x, y, innerRadius, startAngle);
    const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
    const endOuter = polarToCartesian(x, y, outerRadius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M", startInner.x, startInner.y,
      "A", innerRadius, innerRadius, 0, largeArcFlag, 0, endInner.x, endInner.y,
      "L", endOuter.x, endOuter.y,
      "A", outerRadius, outerRadius, 0, largeArcFlag, 1, startOuter.x, startOuter.y,
      "Z"
    ].join(" ");
  };

  const currentStepData = steps.find(s => s.id === activeStep);

  return (
    <section id="how-it-works" className={styles.howItWorks}>
      {/* Premium Label */}
      <div className={styles.sectionLabelWrapper}>
        <div className={styles.sectionLabel}>
          <div className={styles.line}></div>
          <span>SIMPLE NETWORKING PROCESS</span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How Trusted Network Works</h2>
          <p className={styles.sectionSubtitle}>Simple Steps to Build Your Business Network</p>
        </div>

        <div className={styles.mainComposition}>

          {/* LEFT: Phone Area - Touching Arc */}
          <div className={styles.leftArea}>
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStep}
                src={currentStepData.image}
                alt={currentStepData.title}
                className={styles.mockupImage}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          {/* CENTER: Larger Arc Navigation */}
          <div className={styles.centerArea}>
            <svg className={styles.arcSvg} viewBox="0 0 600 600">
              {steps.map((step, index) => {
                const startAngle = 10 + (index * 26);
                const endAngle = startAngle + 23;
                const midAngle = startAngle + 11.5;
                const innerR = 180;
                const outerR = 230;
                const badgeR = 265;
                const iconR = 205;

                const pInnerStart = polarToCartesian(300, 300, innerR, startAngle);
                const pInnerEnd = polarToCartesian(300, 300, innerR, endAngle);
                const pBadge = polarToCartesian(300, 300, badgeR, midAngle);
                const pIcon = polarToCartesian(300, 300, iconR, midAngle);

                return (
                  <g key={step.id} onClick={() => setActiveStep(step.id)} style={{ cursor: 'pointer' }}>
                    {/* Dotted Connection to Focus */}
                    <path
                      d={`M 100,${pIcon.y} Q 200,${pIcon.y} ${pIcon.x},${pIcon.y}`}
                      className={styles.connectorLine}
                    />

                    {/* Larger Segment Arc */}
                    <motion.path
                      d={describeSegment(300, 300, innerR, outerR, startAngle, endAngle)}
                      className={`${styles.segmentBase} ${activeStep === step.id ? styles.segmentActive : ''}`}
                      whileHover={{ fill: "rgba(244, 166, 35, 0.05)" }}
                    />

                    {/* Detail Corner Dots */}
                    <circle cx={pInnerStart.x} cy={pInnerStart.y} r="2.5" className={styles.cornerDot} />
                    <circle cx={pInnerEnd.x} cy={pInnerEnd.y} r="2.5" className={styles.cornerDot} />

                    {/* Icon - Hover changes color via CSS/JS transition */}
                    <foreignObject x={pIcon.x - 16} y={pIcon.y - 16} width="32" height="32">
                      <div className={`${styles.segmentIcon} ${activeStep === step.id ? styles.segmentIconActive : ''}`}>
                        {step.icon}
                      </div>
                    </foreignObject>

                    {/* Number Badge - Gold when active */}
                    <circle
                      cx={pBadge.x}
                      cy={pBadge.y}
                      r="15"
                      className={`${styles.stepNumberCircle} ${activeStep === step.id ? styles.stepNumberActive : ''}`}
                    />
                    <text
                      x={pBadge.x}
                      y={pBadge.y}
                      dominantBaseline="middle"
                      textAnchor="middle"
                      className={`${styles.stepNumberText} ${activeStep === step.id ? styles.stepNumberTextActive : ''}`}
                    >
                      {step.number}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* RIGHT: Redesigned infographic cards */}
          <div className={styles.rightArea}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={styles.infographicBody}
              >
                {/* STEP badge */}
                <div className={styles.stepBadge}>STEP {currentStepData.number}</div>

                {/* Two‑column layout */}
                <div className={styles.cardBody}>
        {/* Row 1: Number and Title */}
        <div className={styles.leftColumn}>
          <div className={styles.stepNumberLarge}>{currentStepData.number}</div>
        </div>
        <div className={styles.rightColumn}>
          <h3 className={styles.cardTitle}>{currentStepData.title}</h3>
        </div>
        {/* Row 2: Icon and Description */}
        <div className={styles.leftColumn}>
          <div className={styles.iconCard}>{currentStepData.icon}</div>
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.cardDescription}>{currentStepData.description}</p>
        </div>
      </div>


              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;