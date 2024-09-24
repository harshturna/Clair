import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const Container: React.FC<WidgetSvgProps> = ({
  fill = "#000000",
  stroke = "currentColor",
  strokeWidth = 2,
  width = 28,
  height = 28,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    height={height}
    width={width}
    {...props}
  >
    <g>
      <path
        d="M23.48 19.78C22.18 18.52 3.02 10.16 0.92 12.28 -0.66 14.68 0.2 37.06 0.48 37.84c0.78 2.26 19.52 8.96 23.78 8.32a1.88 1.88 0 0 0 1.52 -0.98c0.6 -1.18 -1.08 -24.22 -2.3 -25.4Zm0 23.88C19.46 44 1.74 37.52 2.28 36.98c0.16 -0.18 -0.46 -1.74 -0.74 -14.34 -0.18 -8.42 0.34 -9.6 0.3 -9.4A79.52 79.52 0 0 1 22 21.08c0.6 2.74 1.62 19.62 1.58 22.58Z"
        fill={fill}
        fill-rule="evenodd"
        stroke-width="1"
      ></path>
      <path
        d="M5.48 10.52c0.18 0 0.88 -0.76 1.5 -1.06 2.34 -1.1 7.12 -2.68 10.74 -3.86 5.46 -1.76 4 -1.66 9.72 -0.94 1.26 0.16 11.24 1.34 12.32 2.34a0.62 0.62 0 0 0 0.88 -0.88c-1.54 -1.66 -16.34 -4.74 -18.82 -4.26S6.58 7.38 4.9 9.02c-0.9 0.82 -0.18 1.78 0.58 1.5Z"
        fill={fill}
        fill-rule="evenodd"
        stroke-width="1"
      ></path>
      <path
        d="M46.32 10.8c-0.38 -1.24 -1.02 -1.84 -2.82 -1.56 -4.7 0.74 -18.28 7.46 -19.4 8.86a0.62 0.62 0 0 0 0.94 0.8C26 17.8 40.2 11.46 44 11.5c1.1 3.38 1.82 22.38 1.76 23.14 -0.24 -0.1 -0.56 0.6 -1.1 0.98a68.52 68.52 0 0 1 -16.94 7.86 0.7 0.7 0 0 0 0.32 1.38c3.82 -0.82 18.88 -6.54 19.78 -9.52 0.48 -1.34 -0.16 -20.12 -1.5 -24.54Z"
        fill={fill}
        fill-rule="evenodd"
        stroke-width="1"
      ></path>
    </g>
  </svg>
);

export default Container;
