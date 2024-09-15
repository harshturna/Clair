import { WidgetSvgProps } from "@/types/widget-svg";

export const Browser: React.FC<WidgetSvgProps & { checked?: boolean }> = ({
  fill = "none",
  stroke = "currentColor",
  strokeWidth = 2,
  checked = false,
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="2"
      ry="2"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <line
      x1="2"
      y1="8"
      x2="22"
      y2="8"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <line
      x1="18"
      y1="5"
      x2="20"
      y2="7"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);
