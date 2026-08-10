import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

const StubPage = ({ title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ 
        padding: '160px 20px', 
        textAlign: 'center', 
        minHeight: '80vh',
        background: 'var(--light-bg)'
      }}
    >
      <h1 style={{ fontSize: '3rem', color: 'var(--primary-dark-navy)', marginBottom: '1.5rem' }}>
        {title}
      </h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
        This is a placeholder page for {title}. Trusted Network is committed to transparency and security for all our GST-verified business members.
      </p>
      <Link 
        to="/" 
        style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          color: 'var(--accent-gold)',
          fontWeight: '600',
          fontSize: '1.1rem'
        }}
      >
        <FiArrowLeft /> Back to Home
      </Link>
    </motion.div>
  );
};

export default StubPage;
