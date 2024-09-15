import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const Telephone: React.FC<WidgetSvgProps> = ({
  fill = "none",
  stroke = "currentColor",
  strokeWidth = 2,
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      d="M3,5 C2,4 2,2 3,2 L7,2 C8,2 9,3 9,4 L10,8 C10,9 9,10 8,10 L6,11 C8,15 13,20 17,22 L18,20 C19,19 20,18 21,19 L23,22 C24,23 23,24 22,24 L19,24 C10,24 3,17 3,8 Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10,4 C14,5 19,10 20,14"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Telephone;
