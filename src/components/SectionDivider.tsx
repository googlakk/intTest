import React from 'react';

interface SectionDividerProps {
  color?: string;
  height?: string;
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ 
  color = '#2c3e50', 
  height = '40px',
  className = ''
}) => {
  return (
    <div className={`section-divider ${className}`} style={{ height, color }}>
      <svg className="ornament-border" viewBox="0 0 400 60" preserveAspectRatio="none">
        <pattern id="pattern-unit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M0,60 Q15,40 30,60 T60,60 M0,0 Q15,20 30,0 T60,0" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M30,30 Q45,10 60,30 T30,30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-unit)"></rect>
      </svg>
    </div>
  );
};
