import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const AppWindowBookmark: React.FC<WidgetSvgProps> = ({
  fill = "#000000",
  stroke = "currentColor",
  strokeWidth = 2,
  width = 28,
  height = 28,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    {...props}
  >
    <g id="app-window-bookmark">
      <g id="Group">
        <path
          id="Vector"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.0296 2.91585c-0.1272 -0.51379 -0.374 -0.99027 -0.7203 -1.39064C20.2088 0.254616 17.6376 -0.00550483 16.1869 0.204593c-0.6898 0.072651 -1.352 0.310663 -1.9302 0.693836 -0.5783 0.383171 -1.0555 0.900191 -1.3913 1.507191 -0.5003 0.90041 -0.3502 7.52349 -0.2401 8.68398 0 0.1901 0.4002 3.0815 0.4202 3.1615 0.016 0.1099 0.0568 0.2147 0.1193 0.3064 0.0626 0.0917 0.1453 0.1679 0.2417 0.2229 0.0965 0.055 0.2042 0.0873 0.315 0.0944 0.1108 0.0071 0.2217 -0.0112 0.3244 -0.0534 0.417 -0.3276 0.7756 -0.7234 1.0605 -1.1706 0.4816 -1.0159 0.9058 -2.058 1.2706 -3.1214 0.1501 -0.3502 -0.1501 -0.77037 0.5403 0.5602 0.3138 0.8964 0.7847 1.7298 1.3906 2.4612 0.5403 0.3702 1.0605 0.09 1.3306 -0.5202 1.0005 -2.8814 -0.6203 -7.27343 -0.2601 -9.59451 0 -0.2301 0.5002 -0.14006 0.5803 -0.13006 0.4971 -0.00231 0.9922 0.06504 1.4707 0.2001 0.6002 0.27012 0.6703 -0.26012 0.6002 -0.59028Zm-2.4411 -0.4402c-0.1592 0.01944 -0.3113 0.07685 -0.4436 0.16739 -0.1323 0.09054 -0.241 0.21155 -0.3168 0.35285 -0.7803 1.25058 1.0005 8.45391 -0.13 9.77451 -0.2274 -0.4496 -0.4052 -0.9226 -0.5303 -1.4106 0 0 -1.1405 -2.55121 -1.2005 -2.60123 -0.2601 -0.4302 -0.8404 -0.48023 -1.2006 0.19008 -0.4986 1.43965 -1.0798 2.84925 -1.7408 4.22195 0 -0.2601 -0.1501 -0.5402 -0.3201 -2.191 -0.0501 -0.4702 -0.4703 -7.37343 -0.0801 -8.15379 0.2666 -0.49843 0.6496 -0.92515 1.1164 -1.2439 0.4668 -0.31874 1.0036 -0.5201 1.5649 -0.58695 1.3591 -0.199225 2.7469 -0.008406 4.0018 0.55026 0.3953 0.24584 0.7195 0.59072 0.9405 1.00046 0.3701 0.6503 -0.4302 -0.23011 -1.6408 -0.07003h-0.02Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.6304 8.30834c-0.1301 -1.19055 -0.1501 -4.50209 -1.0005 -5.12238 -0.2601 -0.20009 -0.4202 0.60028 -0.3101 0.83039 0.11 0.2301 0.06 0.09004 0.1901 0.90042 0.13 0.81037 0.5602 6.78313 0.5502 9.34433 0 1.0005 -0.2901 6.3329 -0.7203 7.1333 -2.6212 1.4707 -20.47954 2.001 -20.93975 0C0.879806 19.0033 0.489625 6.31742 1.01987 3.33603c0.00054 -0.07029 -0.023603 -0.13855 -0.068232 -0.19286 -0.044628 -0.05432 -0.106905 -0.09124 -0.175971 -0.10434 -0.069067 -0.0131 -0.140539 -0.00154 -0.201955 0.03266s-0.108879 0.08888 -0.134111 0.15449c-0.630292 3.00139 -0.540251 15.85732 0 18.42852 0.110052 0.5303 0.710329 1.0505 1.750819 1.3907 4.5321 1.4907 20.00928 0.8304 21.08978 -1.1105 0.4002 -0.7204 0.3902 -1.9209 0.5703 -3.6917 0.2565 -3.3107 0.1828 -6.6386 -0.2201 -9.93466Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.25045 3.07595c1.00047 0 4.00186 0.14006 6.00279 0.08003 1.28059 0 2.64126 -0.17008 4.00186 -0.2301 0.0796 0 0.1559 -0.03162 0.2122 -0.08791 0.0563 -0.05629 0.0879 -0.13263 0.0879 -0.21223s-0.0316 -0.15595 -0.0879 -0.21223c-0.0563 -0.05629 -0.1326 -0.08791 -0.2122 -0.08791 -3.32426 -0.40703 -6.68733 -0.38013 -10.00465 0.08004 -0.07896 0.01369 -0.15055 0.05482 -0.20214 0.11613 -0.0516 0.06132 -0.0799 0.13888 -0.0799 0.21902 0 0.08014 0.0283 0.1577 0.0799 0.21902 0.05159 0.06131 0.12318 0.10244 0.20214 0.11614Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.45089 5.65662c0.07862 0.08449 0.1738 0.15188 0.27961 0.19797 0.10581 0.04608 0.21998 0.06986 0.33539 0.06986 0.11542 0 0.22959 -0.02378 0.3354 -0.06986 0.10581 -0.04609 0.20099 -0.11348 0.2796 -0.19797 0.08712 -0.16502 0.11381 -0.35529 0.07546 -0.5379 -0.03835 -0.18261 -0.13932 -0.34607 -0.28546 -0.4621 -0.76 -0.47 -1.7 0.34 -1.02 1Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.08212 5.37655c0.0769 0.0856 0.17096 0.15405 0.27605 0.20092 0.1051 0.04686 0.21888 0.07108 0.33395 0.07108 0.11507 0 0.22885 -0.02422 0.33395 -0.07108 0.10509 -0.04687 0.19915 -0.11532 0.27605 -0.20092 0.08631 -0.16437 0.11354 -0.35339 0.07713 -0.53543 -0.03641 -0.18204 -0.13425 -0.34605 -0.27713 -0.46457 -0.77 -0.47 -1.7 0.31 -1.02 1Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_6"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.94344 5.37655c0.07861 0.08449 0.17379 0.15188 0.27961 0.19797 0.10581 0.04608 0.21998 0.06986 0.33539 0.06986 0.11541 0 0.22958 -0.02378 0.3354 -0.06986 0.10581 -0.04609 0.20096 -0.11348 0.27956 -0.19797 0.0852 -0.16545 0.1109 -0.35518 0.0726 -0.53729 -0.0382 -0.18212 -0.138 -0.34552 -0.28256 -0.46271 -0.76 -0.47 -1.7 0.31 -1.02 1Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_7"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.22997 7.84817c2.99378 0.30238 6.01041 0.30238 9.00423 0 0.0902 0 0.1767 -0.03584 0.2405 -0.09963s0.0996 -0.15031 0.0996 -0.24053 -0.0358 -0.17674 -0.0996 -0.24053c-0.0638 -0.06379 -0.1503 -0.09963 -0.2405 -0.09963 -2.9927 -0.34647 -6.01646 -0.32631 -9.00423 0.06003 -0.08225 0 -0.16114 0.03268 -0.2193 0.09084 -0.058164 0.05816 -0.09084 0.13705 -0.09084 0.2193 0 0.08226 0.032676 0.16115 0.09084 0.21931 0.05816 0.05816 0.13705 0.09084 0.2193 0.09084Z"
          fill={fill}
          stroke-width="1"
        ></path>
      </g>
    </g>
  </svg>
);

export default AppWindowBookmark;