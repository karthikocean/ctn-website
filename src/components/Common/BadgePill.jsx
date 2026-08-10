import React from 'react';

const BadgePill = ({ children, color = 'gold', icon: Icon }) => {
  const styles = {
    gold: {
      background: 'rgba(240, 165, 0, 0.15)',
      color: 'var(--accent-gold)',
      border: '1px solid rgba(240, 165, 0, 0.3)',
    },
    blue: {
      background: 'rgba(4, 74, 167, 0.1)',
      color: 'var(--primary-blue)',
      border: '1px solid rgba(4, 74, 167, 0.2)',
    }
  };

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '6px 16px',
      borderRadius: '50px',
      fontSize: '0.85rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      ...styles[color]
    }}>
      {Icon && <Icon size={14} />}
      {children}
    </div>
  );
};

export default BadgePill;
