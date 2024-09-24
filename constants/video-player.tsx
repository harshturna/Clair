import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const VideoPlayer: React.FC<WidgetSvgProps> = ({
  fill = "#000000",
  stroke = "currentColor",
  strokeWidth = 2,
  width = 28,
  height = 28,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height={height}
    width={width}
    {...props}
  >
    <path
      fill={fill}
      fill-rule="evenodd"
      d="M18.9795 5.66687H14.813c-1.933 0 -3.866 0.09014 -5.78897 0.20031 -2.42377 0.14022 -4.85755 0.35055 -7.29134 0.52081 -0.5809 0.16025 -0.50078 0.69108 0 0.7712h7.35143c1.92298 0 3.83598 -0.17026 5.75898 -0.23036 1.3821 -0.07011 2.7543 -0.14022 4.1364 -0.18028h3.0548c0.5708 -0.11017 0.5208 -0.83129 -0.1503 -0.83129 -0.9815 -0.18028 -1.9029 -0.23036 -2.9045 -0.25039Z"
      clip-rule="evenodd"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      fill-rule="evenodd"
      d="M23.9873 8.37114c0.0471 -1.12102 -0.0369 -2.2437 -0.2504 -3.3452 -0.1751 -0.8092 -0.5702 -1.55436 -1.1418 -2.15335 -0.5424 -0.54091 -1.2449 -0.8922 -2.0031 -1.00156 -0.962 -0.1049 -1.9325 -0.1049 -2.8945 0L0.951479 2.87259c-0.079901 0.00234 -0.156042 0.03446 -0.213484 0.09005 -0.057441 0.05559 -0.092037 0.13064 -0.096998 0.21042 -0.078846 0.0096 -0.151594 0.04728 -0.204932 0.10614 -0.053337 0.05885 -0.083696 0.13495 -0.08552 0.21436 0 1.84286 -0.280436 5.8591 -0.350545 8.71354v3.7759c0.0500779 0.8413 7.5e-9 2.0031 0.100156 2.9345 0.068154 0.4881 0.224251 0.9598 0.460716 1.3922 0.432731 0.6524 1.081778 1.1312 1.832848 1.3521 1.4892 0.3942 3.02719 0.5729 4.5671 0.5308 2.72356 0.053 5.44808 -0.0339 8.16268 -0.2604 2.7142 -0.2203 5.4184 -0.5609 8.0826 -1.0015 0.0939 -0.0208 0.1765 -0.0764 0.2311 -0.1556 0.0546 -0.0792 0.0772 -0.1761 0.0632 -0.2713 -0.0139 -0.0951 -0.0634 -0.1815 -0.1385 -0.2417 -0.075 -0.0601 -0.1701 -0.0897 -0.266 -0.0826 -2.6541 0.3405 -5.3383 0.5909 -8.0125 0.7211 -2.6691 0.1339 -5.34326 0.1339 -8.01241 0 -1.21285 0.0023 -2.42328 -0.1084 -3.61562 -0.3305 -0.67134 -0.0871 -1.28401 -0.4275 -1.71266 -0.9515 -0.21213 -0.4067 -0.33505 -0.854 -0.36056 -1.312 -0.09014 -0.8413 -0.05008 -1.7427 -0.11017 -2.4538 -0.12019 -1.2219 -0.17027 -2.4538 -0.20031 -3.6858 -0.05008 -2.51387 0 -6.61024 0 -8.66343 1.92299 0 7.43155 -0.08012 11.75823 -0.18028 2.2235 0 4.1265 -0.12019 5.0078 -0.15023 0.8691 -0.09013 1.7451 -0.09013 2.6141 0 0.489 0.0665 0.9464 0.27949 1.312 0.61095 0.4114 0.42813 0.6957 0.96212 0.8213 1.54239 0.1102 0.40063 0.3105 2.91454 0.3205 3.00468l0.0801 4.55712v3.906c0 0.8814 0 1.7528 0.0902 2.6241 0.0025 0.05 0.0149 0.099 0.0365 0.1442 0.0215 0.0452 0.0518 0.0857 0.089 0.1192s0.0806 0.0593 0.1279 0.076c0.0472 0.0167 0.0972 0.0239 0.1472 0.0212 0.0495 -0.0013 0.0983 -0.0125 0.1435 -0.0329 0.0451 -0.0205 0.0857 -0.0498 0.1193 -0.0862 0.0337 -0.0364 0.0596 -0.0792 0.0764 -0.1259 0.0168 -0.0466 0.0241 -0.0961 0.0214 -0.1456v-2.5841c0 -1.302 0.0801 -2.604 0.1302 -3.906l0.02 -4.52706Z"
      clip-rule="evenodd"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      fill-rule="evenodd"
      d="M12.0387 15.0415c0.7612 -0.4107 1.4623 -1.0016 2.1133 -1.4623 0.2304 -0.1502 0.6009 -0.3305 0.8714 -0.5308 0.185 -0.1219 0.3449 -0.2783 0.4707 -0.4607 0.0776 -0.1099 0.1193 -0.2411 0.1193 -0.3756 0 -0.1345 -0.0417 -0.2657 -0.1193 -0.3756 -0.2898 -0.3251 -0.6082 -0.6234 -0.9515 -0.8914 -0.5038 -0.3648 -1.0289 -0.6992 -1.5724 -1.00154 -0.5453 -0.30822 -1.1108 -0.57926 -1.6927 -0.81126 -0.0855 -0.03933 -0.1827 -0.04466 -0.272 -0.01489 -0.0893 0.02976 -0.1639 0.09237 -0.2087 0.17514 -0.0659 -0.04257 -0.142 -0.06677 -0.2204 -0.07011 -0.0447 0.00255 -0.0885 0.01391 -0.1288 0.03343 -0.0404 0.01952 -0.0765 0.04681 -0.1063 0.08031 -0.0297 0.0335 -0.0526 0.07254 -0.0673 0.1149 -0.0146 0.04235 -0.0208 0.08718 -0.0181 0.13192v4.8275c0 0.1302 -0.1201 0.3706 -0.1201 0.4908 0.0012 0.1646 0.0658 0.3224 0.1802 0.4407 0.0797 0.0867 0.1814 0.1502 0.2942 0.1837 0.1129 0.0335 0.2328 0.0358 0.3468 0.0065 0.383 -0.1089 0.7475 -0.2743 1.0817 -0.4907ZM10.967 9.8434c0.5275 0.2519 1.0333 0.5466 1.5124 0.8814 0.4817 0.3329 0.9432 0.6941 1.3822 1.0817l0.4106 0.3104 -0.7812 0.4407c-0.5609 0.3606 -1.1618 0.8413 -1.7928 1.242l-0.4006 0.2503 -0.0601 -0.8713 -0.2705 -3.34521v0.01001Z"
      clip-rule="evenodd"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      fill-rule="evenodd"
      d="M3.58556 18.1462c-0.08692 0.0148 -0.16472 0.0628 -0.21702 0.1337 -0.0523 0.071 -0.07504 0.1595 -0.06341 0.2469 0.00609 0.0436 0.02085 0.0856 0.04339 0.1234 0.02254 0.0379 0.05242 0.0708 0.08788 0.097 0.03545 0.0261 0.07577 0.0449 0.11859 0.0552 0.04282 0.0103 0.08726 0.012 0.13073 0.0049 0.57089 -0.0501 1.14177 -0.0802 1.70265 -0.0902h1.07166c0.26041 1.1418 0.3205 1.3521 0.65101 1.3321 0.33052 -0.02 0.35055 -0.2704 0.47074 -1.3221h1.87291c1.53241 -0.0801 3.06481 -0.1302 4.58711 -0.2403 2.2936 -0.1503 4.5671 -0.3906 6.8707 -0.5509 0.05 -0.0013 0.0992 -0.0124 0.1449 -0.0328 0.0457 -0.0203 0.0869 -0.0494 0.1213 -0.0857s0.0614 -0.079 0.0793 -0.1257c0.0179 -0.0467 0.0264 -0.0964 0.0251 -0.1464 -0.0052 -0.1001 -0.0486 -0.1944 -0.1213 -0.2633 -0.0727 -0.069 -0.1691 -0.1074 -0.2693 -0.1073 -2.3236 0 -4.6172 0 -6.9208 0.0701 -1.5324 0.0601 -3.0047 0.1903 -4.58712 0.2905l-1.8028 0.1502c0.00487 -0.0733 0.00487 -0.147 0 -0.2203 -0.36056 -1.4222 -0.62097 -1.4222 -0.75117 -1.4222 -0.1302 0 -0.38059 0 -0.49076 1.5223 -0.005 0.0767 -0.005 0.1537 0 0.2304l-1.00156 0.0901c-0.5809 0.0802 -1.16181 0.1603 -1.75273 0.2604Z"
      clip-rule="evenodd"
      stroke-width="1"
    ></path>
  </svg>
);

export default VideoPlayer;
