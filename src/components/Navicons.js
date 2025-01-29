import React from 'react';

const MinimalNavIcons = ({ 
  iconType, 
  size = 24, 
  color = "currentColor", 
  className = "" 
}) => {
  const icons = {
    home: (
      <g>
        <path 
          d="M19 10L12 4l-7 6v8a2 2 0 002 2h10a2 2 0 002-2v-8z" 
          fill="none" 
          stroke={color} 
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path 
          d="M9 14h6" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
      </g>
    ),

    courseSearch: (
      <g>
        <circle 
          cx="11" 
          cy="11" 
          r="6" 
          fill="none" 
          stroke={color} 
          strokeWidth="1.5"
        />
        <path 
          d="M16 16l3 3M8 11h6" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
      </g>
    ),

    myApplications: (
      <g>
        <path 
          d="M5 19V5a2 2 0 012-2h6l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2z" 
          fill="none" 
          stroke={color} 
          strokeWidth="1.5"
        />
        <path 
          d="M13 3v4a1 1 0 001 1h4M9 9h2M9 13h6M9 17h6" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
      </g>
    ),

    visaStatus: (
      <g>
        <rect 
          x="4" 
          y="4" 
          width="16" 
          height="16" 
          rx="2" 
          fill="none" 
          stroke={color} 
          strokeWidth="1.5"
        />
        <path 
          d="M9 12l2 2 4-4M8 8h8" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
    ),

    countryGuide: (
      <g>
        <circle 
          cx="12" 
          cy="12" 
          r="8" 
          fill="none" 
          stroke={color} 
          strokeWidth="1.5"
        />
        <path 
          d="M12 4v16M4 12h16" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
          opacity="0.8"
        />
        <circle cx="12" cy="12" r="1" fill={color}/>
      </g>
    ),

    community: (
      <g>
        <circle 
          cx="12" 
          cy="8" 
          r="3" 
          fill="none" 
          stroke={color} 
          strokeWidth="1.5"
        />
        <path 
          d="M20 19v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        <path 
          d="M16 8a2 2 0 100-4M8 8a2 2 0 110-4" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
      </g>
    ),

    settings: (
      <g>
        <path 
          d="M12 15a3 3 0 100-6 3 3 0 000 6z" 
          fill="none" 
          stroke={color} 
          strokeWidth="1.5"
        />
        <path 
          d="M12 4v2m0 12v2M4 12h2m12 0h2" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        <path 
          d="M6.3 6.3l1.4 1.4m8.6 8.6l1.4 1.4m0-11.4l-1.4 1.4m-8.6 8.6l-1.4 1.4" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
      </g>
    ),

    helpCenter: (
      <g>
        <circle 
          cx="12" 
          cy="12" 
          r="8" 
          fill="none" 
          stroke={color} 
          strokeWidth="1.5"
        />
        <path 
          d="M12 16v1m0-4c0-3-4-3-4-1s4 2 4 4" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        <circle cx="12" cy="8" r="1" fill={color}/>
      </g>
    ),

    finance: (
      <g>
        <rect 
          x="3" 
          y="6" 
          width="18" 
          height="12" 
          rx="2" 
          fill="none" 
          stroke={color} 
          strokeWidth="1.5"
        />
        <path 
          d="M3 10h18M12 13v3m-3-3v3m6-3v3" 
          stroke={color} 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
      </g>
    )
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {icons[iconType]}
      </svg>
    </div>
  );
};

export default MinimalNavIcons;