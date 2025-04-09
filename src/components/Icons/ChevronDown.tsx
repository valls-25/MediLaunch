import React from "react";

import { IconProps } from "./IconProps";

const ChevronDown: React.FC<IconProps> = ({
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
    className={`lucide lucide-chevron-down text-gray-400 ${className ?? ""}`}
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default ChevronDown;
