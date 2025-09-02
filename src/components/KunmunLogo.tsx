import React from 'react';

interface KunmunLogoProps {
  className?: string;
  size?: number;
}

export const KunmunLogo: React.FC<KunmunLogoProps> = ({ className = "", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="50%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      
      {/* Main Circle Background */}
      <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" stroke="#92400E" strokeWidth="2"/>
      
      {/* Inner decorative circle */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="url(#accentGradient)" strokeWidth="1" opacity="0.6"/>
      
      {/* Hotel Building Icon */}
      <g transform="translate(25, 20)">
        {/* Building base */}
        <rect x="10" y="35" width="30" height="25" fill="#FFFFFF" opacity="0.9" rx="2"/>
        
        {/* Building top */}
        <rect x="15" y="25" width="20" height="15" fill="#FFFFFF" opacity="0.9" rx="1"/>
        
        {/* Roof */}
        <polygon points="12,25 25,15 38,25" fill="url(#accentGradient)"/>
        
        {/* Windows */}
        <rect x="18" y="30" width="4" height="4" fill="#D97706" rx="0.5"/>
        <rect x="28" y="30" width="4" height="4" fill="#D97706" rx="0.5"/>
        <rect x="18" y="40" width="4" height="4" fill="#D97706" rx="0.5"/>
        <rect x="28" y="40" width="4" height="4" fill="#D97706" rx="0.5"/>
        
        {/* Door */}
        <rect x="23" y="48" width="4" height="8" fill="#92400E" rx="0.5"/>
        
        {/* Door handle */}
        <circle cx="26" cy="52" r="0.5" fill="#FCD34D"/>
      </g>
      
      {/* Letter K overlay */}
      <g transform="translate(50, 50)">
        <text
          x="0"
          y="8"
          textAnchor="middle"
          fontSize="32"
          fontWeight="bold"
          fill="#FFFFFF"
          fontFamily="serif"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
        >
          K
        </text>
      </g>
      
      {/* Decorative stars */}
      <g fill="url(#accentGradient)" opacity="0.8">
        <polygon points="20,25 21,27 23,27 21.5,28.5 22,31 20,29.5 18,31 18.5,28.5 17,27 19,27" transform="scale(0.6)"/>
        <polygon points="75,25 76,27 78,27 76.5,28.5 77,31 75,29.5 73,31 73.5,28.5 72,27 74,27" transform="scale(0.6)"/>
        <polygon points="20,75 21,77 23,77 21.5,78.5 22,81 20,79.5 18,81 18.5,78.5 17,77 19,77" transform="scale(0.6)"/>
        <polygon points="75,75 76,77 78,77 76.5,78.5 77,81 75,79.5 73,81 73.5,78.5 72,77 74,77" transform="scale(0.6)"/>
      </g>
    </svg>
  );
};

export default KunmunLogo;
