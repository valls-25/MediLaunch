import React from "react";

const CarouselIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4 4h16v12H4z" />
    <path d="M8 16l4-4-4-4" />
    <path d="M16 16l-4-4 4-4" />
  </svg>
);
export default CarouselIcon;
