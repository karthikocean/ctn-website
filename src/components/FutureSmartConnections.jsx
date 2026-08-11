import React from 'react';
import { FiLayers, FiUsers, FiCpu } from 'react-icons/fi';
import tnImg from '../assets/tnimg.png';
import styles from '../styles/FutureSmartConnections.module.css';

const FutureSmartConnections = () => {
  const capabilities = [
    {
      number: '01',
      title: 'Relevant Business Connections',
      description: 'Discover businesses and professionals based on industry, category, expertise and networking interests.',
      icon: FiLayers,
    },
    {
      number: '02',
      title: 'Smarter Recommendations',
      description: 'Find professionals whose experience, services or business needs are relevant to your networking goals.',
      icon: FiUsers,
    },
    {
      number: '03',
      title: 'Opportunity Discovery',
      description: 'In the future, intelligent recommendations can suggest potentially relevant connections, requirements and opportunities based on your activity and interests.',
      icon: FiCpu,
      isFutureTag: true,
    },
  ];

  return (
    <section className={styles.connectionsSection}>
      <div className="container">
        <div className={styles.asymmetricLayout}>
          {/* LEFT COLUMN: Decorative Image Showcase using tnimg.png */}
          <div className={styles.imageColumn}>
            <div className={styles.imageFrameOuter}>
              <div className={styles.goldCornerTL}></div>
              <div className={styles.goldCornerBR}></div>
              <div className={styles.imageWrapper}>
                <img
                  src={tnImg}
                  alt="Trusted Network Connections"
                  className={styles.networkImage}
                />
              </div>
              <div className={styles.imageBadge}>
                <span className={styles.badgeDot}></span>
                <span className={styles.badgeText}>FUTURE CONNECTION INTELLIGENCE</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Badge, Heading, Description, 3 Content Cards */}
          <div className={styles.contentColumn}>
            <div className={styles.headerWrapper}>
              <div className={styles.sectionBadge}>
                <div className={styles.badgeLine}></div>
                <span>SMARTER BUSINESS CONNECTIONS</span>
              </div>

              <h2 className={styles.sectionTitle}>
                Building More Relevant Business Connections
              </h2>

              <p className={styles.sectionDesc}>
                Trusted Network can evolve towards a smarter networking experience where businesses discover relevant professionals and opportunities based on their business needs.
              </p>
            </div>

            {/* 3 Standalone Feature Cards with Equal Dimensions */}
            <div className={styles.capabilitiesList}>
              {/* timelineLine temporarily hidden */}

              {capabilities.map((cap) => {
                const IconComp = cap.icon;
                return (
                  <div key={cap.number} className={styles.capBlock}>
                    <div className={styles.capHeaderBox}>
                      <span className={styles.capNumber}>{cap.number}</span>
                      <div className={styles.capIconWrapper}>
                        <IconComp className={styles.capIcon} />
                      </div>
                    </div>

                    <div className={styles.capBody}>
                      <div className={styles.titleRow}>
                        <h3 className={styles.capTitle}>{cap.title}</h3>
                        {/* futureTag temporarily hidden */}
                        {/* {cap.isFutureTag && (
                          <span className={styles.futureTag}>FUTURE CONCEPT</span>
                        )} */}
                      </div>
                      <p className={styles.capDescription}>{cap.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* progressionRibbon temporarily hidden */}
            {/* <div className={styles.progressionRibbon}>
              <span>Right people</span>
              <span className={styles.ribbonArrow}>→</span>
              <span>Relevant businesses</span>
              <span className={styles.ribbonArrow}>→</span>
              <span className={styles.highlightText}>Smarter recommendations</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSmartConnections;
