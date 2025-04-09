import React from "react";
import { IconProps } from "./IconProps";

const NotificationIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  strokeWidth = 2,
  className,
  // active = false,
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
    className={className + "item-center text-center cursor-pointer"}
    {...props}
  >
    <path
      d="M9.81812 5.44192V8.10322"
      stroke="#CFD1D4"
      strokeWidth="1.19878"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M9.83406 1.89352C6.89304 1.89352 4.51146 4.2751 4.51146 7.21612V8.89442C4.51146 9.43787 4.28768 10.253 4.00797 10.7166L2.99299 12.4109C2.36963 13.4578 2.80119 14.6246 3.95202 15.0082C7.77215 16.2789 11.904 16.2789 15.7241 15.0082C16.803 14.6486 17.2665 13.3859 16.6831 12.4109L15.6681 10.7166C15.3884 10.253 15.1647 9.42988 15.1647 8.89442V7.21612C15.1567 4.29109 12.7591 1.89352 9.83406 1.89352Z"
      stroke="#CFD1D4"
      strokeWidth="1.19878"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M12.4793 15.3359C12.4793 16.7984 11.2806 17.9972 9.81804 17.9972C9.09078 17.9972 8.41946 17.6935 7.93994 17.214C7.46043 16.7345 7.15674 16.0631 7.15674 15.3359"
      stroke="#CFD1D4"
      strokeWidth="1.19878"
      strokeMiterlimit="10"
    />
    <rect
      x="11.4165"
      y="1.09433"
      width="7.19271"
      height="7.19271"
      rx="3.59635"
      fill="#FEA450"
    />
    <rect
      x="11.4165"
      y="1.09433"
      width="7.19271"
      height="7.19271"
      rx="3.59635"
      stroke="#151924"
      strokeWidth="1.59838"
    />
  </svg>
);

export default NotificationIcon;
