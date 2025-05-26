import React from 'react';

const Logo: React.FC = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <filter id="neuromorphic" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
          <feOffset dx="2" dy="2" in="blur" result="offsetBlur1" />
          <feOffset dx="-2" dy="-2" in="blur" result="offsetBlur2" />
          <feFlood floodColor="white" floodOpacity="0.5" result="highlightColor"/>
          <feFlood floodColor="black" floodOpacity="0.3" result="shadowColor"/>
          <feComposite in="highlightColor" in2="offsetBlur2" operator="in" result="highlight"/>
          <feComposite in="shadowColor" in2="offsetBlur1" operator="in" result="shadow"/>
          <feMerge>
            <feMergeNode in="highlight"/>
            <feMergeNode in="SourceGraphic"/>
            <feMergeNode in="shadow"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Three bars with different sizes */}
      <g filter="url(#neuromorphic)">
        <rect
          x="8"
          y="10"
          width="8"
          height="20"
          rx="2"
          fill="url(#gradient1)"
        />
        <rect
          x="20"
          y="6"
          width="8"
          height="28"
          rx="2"
          fill="url(#gradient2)"
        />
        <rect
          x="32"
          y="14"
          width="8"
          height="12"
          rx="2"
          fill="url(#gradient3)"
        />
      </g>
    </svg>
  );
};

export default Logo; 