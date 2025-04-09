import React from "react";

const PullQuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
      {/* Left Quote Symbol */}
      <path d="M7 7h4v4H7z" />
      <path d="M7 11c-2 1-3 2.5-3 5" />

      {/* Right Quote Symbol */}
      <path d="M17 7h4v4h-4z" />
      <path d="M17 11c-2 1-3 2.5-3 5" />
    </svg>
  );
};

export default PullQuoteIcon;
