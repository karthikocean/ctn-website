import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = ({ children, variant = 'primary', onClick, className = '' }) => {
  const variants = {
    primary: {
      background: 'var(--accent-gold)',
      color: '#1a1a2e',
      boxShadow: '0 8px 25px -5px rgba(240, 165, 0, 0.4)',
    },
    outline: {
      background: 'rgba(255, 255, 255, 0.05)',
      color: '#fff',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(5px)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent-gold)',
      padding: '0',
    },
    join: {
      background: 'transparent',
      color: 'var(--accent-gold)',
      border: '1px solid var(--accent-gold)',
    }
  };

  const style = {
    padding: variant === 'ghost' ? '0' : '12px 32px',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '700',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    ...variants[variant]
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05, 
        boxShadow: variant === 'primary' ? 'var(--gold-glow)' : 'none',
        y: -2,
        backgroundColor: variant === 'join' ? 'var(--accent-gold)' : undefined,
        color: variant === 'join' ? '#fff' : undefined,
      }}
      whileTap={{ scale: 0.95 }}
      style={style}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;
