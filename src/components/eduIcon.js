import React from 'react';

const EducationIcon = ({ name, size = 24, color = "currentColor", className = "" }) => {
  // SVG definitions object
  const icons = {
    students: (
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    faculty: (
      <>
        <path
          d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle 
          cx="12" 
          cy="12" 
          r="3" 
          fill="none" 
          stroke={color} 
          strokeWidth="1.5"
        />
      </>
    ),
    programs: (
      <>
        <path
          d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 01-2.5-2.5z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 7h8M8 11h8M8 15h5"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
    global: (
      <>
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
      </>
    )
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {icons[name]}
    </svg>
  );
};

// Example usage component
const IconExample = () => {
  return (
    <div className="flex gap-4 p-4">
      <EducationIcon 
        name="students" 
        size={32} 
        color="#4F46E5" 
        className="hover:scale-110 transition-transform" 
      />
      <EducationIcon 
        name="faculty" 
        size={32} 
        color="#10B981" 
      />
      <EducationIcon 
        name="programs" 
        size={32} 
        color="#6366F1" 
      />
      <EducationIcon 
        name="global" 
        size={32} 
        color="#EC4899" 
      />
    </div>
  );
};

export default EducationIcon;