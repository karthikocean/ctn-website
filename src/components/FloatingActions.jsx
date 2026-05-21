import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiMessageCircle, FiX } from 'react-icons/fi';
import styles from '../styles/FloatingActions.module.css';

const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.fabContainer}>
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className={styles.backToTop}
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <div className={styles.iconGlow} />
            <FiArrowUp size={26} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className={styles.chatWrapper}>
        <AnimatePresence>
          {showChatPopup && (
            <motion.div
              className={styles.chatHeader}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
            >
              {/* Premium Curved Text "WE ARE HERE!" - 200px format for perfect alignment */}
              <div className={styles.curvedTextContainer}>
                <svg viewBox="0 0 200 100" className={styles.curvedSvg}>
                  <path
                    id="textCurve"
                    d="M 20 80 A 80 80 0 0 1 180 80"
                    fill="transparent"
                  />
                  <text className={styles.svgText}>
                    <textPath xlinkHref="#textCurve" startOffset="50%" textAnchor="middle">
                      WE ARE HERE!
                    </textPath>
                  </text>
                </svg>

                <button
                  className={styles.closeBtn}
                  onClick={() => setShowChatPopup(false)}
                >
                  <FiX size={14} />
                </button>
              </div>

              <div className={styles.wavingHand}>👋</div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className={styles.chatBtn}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className={styles.btnGlow} />
          <FiMessageCircle size={30} strokeWidth={2.5} className={styles.chatIcon} />
          <span className={styles.notification}>1</span>
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingActions;
