import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const Mobile: React.FC<WidgetSvgProps> = ({
  fill = "#000000",
  stroke = "currentColor",
  strokeWidth = 2,
  width = 28,
  height = 28,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    width={width}
    {...props}
  >
    <g>
      <path
        d="M12.07 2.59a1.12 1.12 0 1 0 -0.74 2.11c1.25 0.44 2.38 -1.52 0.74 -2.11Z"
        fill={fill}
        stroke-width="1"
      ></path>
      <path
        d="M19.71 4a7.42 7.42 0 0 0 -0.11 -1.5A2.59 2.59 0 0 0 18 0.42C16.54 -0.27 14.19 0.09 12.82 0.1l-2 0.06L8.7 0.31a12.34 12.34 0 0 0 -2.65 0.17 2 2 0 0 0 -1.18 0.79 4.06 4.06 0 0 0 -0.54 1.79C4.2 4.39 4.42 6 4.41 7c0 2.9 -0.09 5.55 -0.1 8.27 0 1.78 0 3.59 0.07 5.51a0.3 0.3 0 0 0 0.3 0.28 0.28 0.28 0 0 0 0.32 -0.34l0 -5.5c0.06 -2.7 0.17 -5.36 0.27 -8.25 0 -0.81 -0.11 -2.11 0 -3.29a3.65 3.65 0 0 1 0.46 -1.86 1.27 1.27 0 0 1 0.94 -0.45 20 20 0 0 1 2.16 0l2.13 -0.12 1.92 0A18.4 18.4 0 0 1 17 1.23a1.76 1.76 0 0 1 1.52 1.42A8 8 0 0 1 18.61 4c0 1.09 -0.14 2.22 -0.14 3.27l-0.14 10.82a13.75 13.75 0 0 1 -0.11 2.86 2.62 2.62 0 0 1 -0.82 1.47 3.58 3.58 0 0 1 -2 0.76 26 26 0 0 1 -3.67 -0.06 40 40 0 0 1 -4.21 0A3 3 0 0 1 5.24 22a0.32 0.32 0 0 0 -0.45 -0.09 0.32 0.32 0 0 0 -0.1 0.45 3.12 3.12 0 0 0 1.95 1.24 24.05 24.05 0 0 0 5 0.25 27.15 27.15 0 0 0 3.78 0.12A4.48 4.48 0 0 0 18 23a3.37 3.37 0 0 0 1.13 -1.92 13.72 13.72 0 0 0 0.18 -3.06l0.28 -10.81c-0.02 -1.02 0.12 -2.16 0.12 -3.21Z"
        fill={fill}
        stroke-width="1"
      ></path>
    </g>
  </svg>
);

export default Mobile;