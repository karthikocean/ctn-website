import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiMessageCircle, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import styles from '../styles/FloatingActions.module.css';

const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  // Scroll to top on route change (solves mobile/tablet navigation scroll issue)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className={styles.backToTop}
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <div className={styles.iconGlow} />
            <FiArrowUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Action Button */}
      <motion.a
        href="https://wa.me/919791152132"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, y: 15, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.whatsappGlow} />
        <FaWhatsapp size={32} className={styles.whatsappIcon} />
      </motion.a>

      {/* Commented out Chatbot & Telegram Section for future restoration
      <div
        className={styles.chatWrapper}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className={styles.tooltipBubble}
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <span className={styles.tooltipPulse} />
              <div>
                <strong className={styles.tooltipTitle}>
                  Get Supporttt
                </strong>
              </div>
              <span className={styles.tooltipArrow} />
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          className={styles.telegramBtn} 
          aria-label="Support Telegram"
          onClick={() => window.open('https://t.me/trustednetwork', '_blank')}
        >
          <FiSend size={18} className={styles.telegramIcon} />
        </button>

        <motion.button
          className={styles.chatBtn}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -6, 0],
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
      */}
    </div>
  );
};

export default FloatingActions;
