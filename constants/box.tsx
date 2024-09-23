import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const Box: React.FC<WidgetSvgProps> = ({
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
    id="Layouts-None--Streamline-Freehand"
    height={height}
    width={width}
    {...props}
  >
    <path
      d="M23.92 12.16a59.58 59.58 0 0 0 -0.85 -9.4 2.3 2.3 0 0 0 -1.42 -1A45.85 45.85 0 0 0 9.69 0.46C-0.66 0.53 0 2.05 0 12.39a56.15 56.15 0 0 0 0.56 8.93 2.11 2.11 0 0 0 0.55 1.2 10.44 10.44 0 0 0 3.26 0.64 93.67 93.67 0 0 0 12.44 0.29 24.4 24.4 0 0 0 5.39 -0.73c0.85 -0.28 1.32 -0.7 1.44 -1.1 0.36 -1.21 0.43 -5.35 0.28 -9.46Zm-1.39 9.12c0 0.06 -0.11 0.08 -0.21 0.13a3.66 3.66 0 0 1 -0.86 0.31 36.75 36.75 0 0 1 -6.9 0.67A96.62 96.62 0 0 1 4 22.11a10 10 0 0 1 -2.32 -0.36c0.11 -0.11 -0.18 -0.43 -0.26 -0.81a67.41 67.41 0 0 1 -0.59 -10.51c0 -8.36 -0.62 -9.32 8.86 -9.21a51.1 51.1 0 0 1 10.42 1.15 8.73 8.73 0 0 1 1.66 0.54c0.3 0.13 0.73 -1 1 9.29 0.13 3.95 0.12 7.92 -0.24 9.08Z"
      fill={fill}
      fill-rule="evenodd"
      stroke-width="1"
    ></path>
  </svg>
);

export default Box;
