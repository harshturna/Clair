import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const BrowserSlider: React.FC<WidgetSvgProps> = ({
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
        d="M24 11c0 -1.82 0.08 -7.77 -0.16 -8.82 -0.18 -0.8 -0.95 -0.34 -0.68 0.09a17.64 17.64 0 0 1 0.11 2.48c0 1.27 -0.13 10.52 -0.19 11.51A5.54 5.54 0 0 1 22.8 18c-0.12 -0.08 -0.58 0.11 -1.06 0.14 -2.59 0.14 -18.88 0.37 -19.84 0.05L1.37 18c-0.6 -1 0.22 -13.72 0.4 -14.84 0.08 -0.45 0.27 -0.57 1 -0.83A6.17 6.17 0 0 1 4 2.07c7 -0.35 12.82 -0.81 17 -0.29a3.17 3.17 0 0 1 1.06 0.22 0.3 0.3 0 0 0 0.41 -0.44 2.57 2.57 0 0 0 -1.1 -0.36c-4 -0.68 -8.5 -0.3 -17.49 -0.1A4.55 4.55 0 0 0 1 2.32a3.49 3.49 0 0 0 -0.31 1.59C0.37 7.36 -0.22 15 0.09 17.57 0.26 18.93 0.64 19 1.53 19.3c1.14 0.38 21.2 0.17 21.84 -0.49C24.2 18 24 14 24 11Z"
        fill={fill}
        fill-rule="evenodd"
        stroke-width="1"
      ></path>
      <path
        d="M7.15 20.72a1.16 1.16 0 0 0 -0.3 2.16 1.2 1.2 0 0 0 2 -0.84c0.15 -1.14 -1.03 -1.42 -1.7 -1.32Z"
        fill={fill}
        fill-rule="evenodd"
        stroke-width="1"
      ></path>
      <path
        d="M16 20.73a1.1 1.1 0 0 0 -0.29 2.05 1.14 1.14 0 0 0 1.91 -0.8c0.11 -1.09 -0.96 -1.35 -1.62 -1.25Z"
        fill={fill}
        fill-rule="evenodd"
        stroke-width="1"
      ></path>
      <path
        d="M11 21.24a1.07 1.07 0 0 0 0.42 1.63c1.3 0.57 2.37 -0.9 1.76 -1.64a1.53 1.53 0 0 0 -2.18 0.01Z"
        fill={fill}
        fill-rule="evenodd"
        stroke-width="1"
      ></path>
      <path
        d="M7.26 7.11c0.56 -0.46 0.18 -0.69 -0.2 -0.63 -0.18 -0.05 -1 0.7 -1.33 1 -0.77 0.66 -2.36 2 -2.31 3s2 2.1 3.35 3a0.4 0.4 0 0 0 0.5 -0.63A25.37 25.37 0 0 1 5 10.61c-0.45 -0.53 -0.32 0.21 1.44 -2.49 0.03 -0.06 0.78 -0.95 0.82 -1.01Z"
        fill={fill}
        fill-rule="evenodd"
        stroke-width="1"
      ></path>
      <path
        d="M16.42 13.35a0.4 0.4 0 0 0 0.57 0.07c2.34 -1.57 4.34 -2.38 2.77 -4.32 -0.3 -0.36 -2.76 -2.71 -3.06 -2.62 -1.07 -0.18 -0.05 0.8 0.64 1.64 1.76 2.7 1.88 2 1.44 2.49 -1.28 1.53 -2.78 2.19 -2.36 2.74Z"
        fill={fill}
        fill-rule="evenodd"
        stroke-width="1"
      ></path>
    </g>
  </svg>
);

export default BrowserSlider;
