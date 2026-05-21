import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, label, light = false, centered = true }) => {
  return (
    <div style={{ 
      textAlign: centered ? 'center' : 'left', 
      marginBottom: '60px',
      maxWidth: centered ? '800px' : '100%',
      margin: centered ? '0 auto 60px' : '0 0 40px'
    }}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: '700',
            color: 'var(--accent-gold)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '15px'
          }}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: light ? '#fff' : 'var(--text-primary)',
          marginBottom: '20px'
        }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: '1.1rem',
            color: light ? 'rgba(255, 255, 255, 0.7)' : 'var(--text-secondary)',
            maxWidth: '700px',
            margin: centered ? '0 auto' : '0'
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
