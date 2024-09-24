import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const Music: React.FC<WidgetSvgProps> = ({
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
        d="M42.96 3.46c-2.58 -0.54 -22.38 -1.24 -26.54 -1.2 -14.38 0 -13.12 1.42 -13.3 1.44S1.54 20.28 1.22 24.28c-1.28 16 -2 18.98 0.14 20a13.48 13.48 0 0 0 4.18 0.98c2.92 0.28 34.66 0.94 37.48 0.14a5.8 5.8 0 0 0 4.6 -5.4c0.32 -2.7 -0.46 -5.12 0.3 -29.36 0.08 -3.14 0.88 -5.94 -4.96 -7.18ZM2.18 42.42c-0.72 -0.3 0 -5.76 0 -6 0.34 -10.12 0.98 -18.78 2 -32.12 0.4 0.34 0.26 0 5.14 -0.24 0 1.14 -0.24 3.48 -0.32 4.24L8 17.52c-0.84 7.8 -2.14 25.38 -2.12 25.64a10.96 10.96 0 0 1 -3.7 -0.74Zm43.08 -18.9c-0.42 17.16 0.1 15.14 0 16.12 -0.24 2 -1.02 3.14 -4 3.64a36 36 0 0 1 -6.84 0c-7.64 -0.2 -15.42 0.18 -27.16 -0.12 -0.36 -3 2 -3.7 3.4 -34.88l0 -4.42a202.36 202.36 0 0 1 23.04 0.78c3.22 0.2 9.26 -0.12 11.74 2 0.66 0.52 0.22 0.98 -0.18 16.88Z"
        fill={fill}
        stroke-width="1"
      ></path>
      <path
        d="M36.24 11.12a13.34 13.34 0 0 0 -5.2 0A55.36 55.36 0 0 0 21.3 14c-3 1.78 -1.06 5.54 -1.62 13.72a20.24 20.24 0 0 0 -3 -0.44C11.54 28.12 10 35.56 16.3 36c7.78 0.62 4.96 -17.36 6 -19.76 0.1 -0.24 0.48 -0.32 0.8 -0.44a71.66 71.66 0 0 1 8.42 -2.42 10.96 10.96 0 0 1 4.2 0 14 14 0 0 1 0.56 3.68c0.54 4 2 11.2 -2 12.42 -2.88 0.86 -6.72 -5.2 1.84 -6.46a0.72 0.72 0 0 0 -0.2 -1.42c-10.96 1.36 -6.26 11 -1.14 9.62 5.42 -1.46 4.34 -9.12 3.8 -14.42 -0.34 -1.64 -0.08 -5.1 -2.34 -5.68ZM16.42 34.3c-4.12 -0.18 -2.98 -4.94 0.48 -5.58a15.36 15.36 0 0 1 2.66 0.34c-0.26 2.22 -0.9 5.34 -3.14 5.24Z"
        fill={fill}
        stroke-width="1"
      ></path>
    </g>
  </svg>
);

export default Music;