import { WidgetSvgProps } from "@/types/widget-svg";

const Toast: React.FC<WidgetSvgProps> = ({
  fill = "none",
  stroke = "currentColor",
  strokeWidth = 2,
  ...props
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" {...props}>
      <path
        d="M10,10 C10,5 15,5 20,5 H280 C285,5 290,5 290,10 V90 C290,95 285,95 280,95 H20 C15,95 10,95 10,90 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="5"
      />
      <path
        d="M20,80 Q30,76 40,80 Q50,84 60,80 Q70,76 80,80 Q90,84 100,80"
        fill={fill}
        stroke={stroke}
        strokeWidth="5"
      />
      <circle
        cx="250"
        cy="25"
        r="15"
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
      />
      <text x="244" y="30" fill={fill} stroke={stroke}>
        ×
      </text>
    </svg>
  );
};

export default Toast;
