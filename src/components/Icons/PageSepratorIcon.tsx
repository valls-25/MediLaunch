import React from "react";

const PageSepratorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      aria-hidden="true"
      fill="currentColor"
      focusable="false"
      {...props}
    >
      <path d="M4.5 12.5v4H3V7h1.5v3.987h15V7H21v9.5h-1.5v-4h-15Z"></path>
    </svg>
  );
};
export default PageSepratorIcon;
