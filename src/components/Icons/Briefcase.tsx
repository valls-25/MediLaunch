import React from "react";

import { IconProps } from "./IconProps";

const Briefcase: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  strokeWidth = 2,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-briefcase text-blue-500 text-lg ${
      className ?? ""
    }`}
    {...props}
  >
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
  </svg>
);

export default Briefcase;
