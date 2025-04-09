import React from "react";
import { IconProps } from "./IconProps";

const ChevronLeft: React.FC<IconProps> = ({
  width = 20,
  height = 20,
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
    className={`lucide lucide-chevron-left ${className ?? ""}`}
    {...props}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export default ChevronLeft;
