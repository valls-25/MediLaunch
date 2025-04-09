import React from "react";

const PreformattedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rectangle representing a text/code block */}
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" fill="none" />

      {/* Three horizontal lines inside to represent preformatted text */}
      <line x1="6" y1="9" x2="18" y2="9" />
      <line x1="6" y1="13" x2="14" y2="13" />
      <line x1="6" y1="17" x2="10" y2="17" />
    </svg>
  );
};

export default PreformattedIcon;
