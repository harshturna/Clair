import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const Image: React.FC<WidgetSvgProps> = ({
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
      d="M12.9741 9.58917c0.1365 -0.16764 0.235 -0.3629 0.2886 -0.57232 0.0537 -0.20941 0.0612 -0.42797 0.0222 -0.64058 -0.0071 -0.28763 -0.0783 -0.57005 -0.2084 -0.82669 -0.13 -0.25664 -0.3157 -0.48105 -0.5434 -0.65687 -0.4789 -0.25758 -1.0371 -0.32557 -1.5638 -0.19045 -0.2346 0.03679 -0.4586 0.1237 -0.6567 0.2548 -0.1981 0.13111 -0.36557 0.30334 -0.49112 0.50498 -0.12555 0.20164 -0.20619 0.42795 -0.23644 0.66355 -0.03026 0.23559 -0.00941 0.47494 0.06111 0.70176 0.59145 2.01485 2.81675 1.36325 3.32795 0.76182Zm-2.2955 -1.0024c-0.0113 -0.07239 -0.0073 -0.14636 0.0119 -0.21708 0.0192 -0.07072 0.053 -0.13661 0.0994 -0.19336 0.0463 -0.05675 0.1041 -0.1031 0.1696 -0.13601 0.0654 -0.03291 0.1371 -0.05165 0.2103 -0.05499 0.2202 -0.07962 0.4614 -0.07962 0.6816 0 0.2306 0.12029 0.2607 0.40096 0.3008 0.55132 0.0401 0.15036 0.0902 0.38091 0 0.49118 -0.0903 0.11026 -1.3032 0.91218 -1.4535 -0.41099l-0.0201 -0.03007Z"
      clip-rule="evenodd"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      fill-rule="evenodd"
      d="M17.515 10.6518c-0.3329 -0.2809 -0.7228 -0.4861 -1.1427 -0.6014 -0.6853 -0.1848 -1.4094 -0.16739 -2.085 0.0501 -0.6465 0.1987 -1.2394 0.5414 -1.7342 1.0024 -0.4306 0.4209 -0.7955 0.9041 -1.0826 1.4334 -0.6424 1.1713 -0.9575 2.4941 -0.9122 3.8292 -0.0027 0.0456 0.0038 0.0912 0.0191 0.1343 0.0153 0.043 0.0391 0.0825 0.0699 0.1162 0.0309 0.0336 0.0682 0.0608 0.1097 0.0797 0.0416 0.019 0.0865 0.0294 0.1321 0.0307 0.0469 0.0027 0.0939 -0.0041 0.1381 -0.0199 0.0443 -0.0158 0.0849 -0.0403 0.1195 -0.0721 0.0346 -0.0317 0.0624 -0.0702 0.0819 -0.1129 0.0195 -0.0428 0.0301 -0.089 0.0314 -0.136 0.1832 -1.3752 0.7812 -2.6619 1.7141 -3.6888 0.4014 -0.4985 0.8991 -0.9111 1.4635 -1.2129 0.5284 -0.3016 1.1412 -0.4214 1.7442 -0.3408 0.2859 0.0413 0.5594 0.1439 0.8019 0.3007 0.4311 0.2807 0.812 0.6516 1.2631 1.0024 0.0822 0.0546 0.1816 0.0769 0.2793 0.0627 0.0976 -0.0142 0.1866 -0.0639 0.2499 -0.1396 0.0633 -0.0757 0.0965 -0.1721 0.0931 -0.2707 -0.0033 -0.0987 -0.0429 -0.1926 -0.1111 -0.2639 -0.4812 -0.421 -0.832 -0.8019 -1.243 -1.1828Z"
      clip-rule="evenodd"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      fill-rule="evenodd"
      d="M11.1798 12.0351c-0.445 -0.2724 -0.9191 -0.4943 -1.41335 -0.6616 -0.53292 -0.1752 -1.09375 -0.25 -1.65397 -0.2205 -0.87106 0.1018 -1.70217 0.4225 -2.41578 0.9322 -0.47113 0.3509 -0.74178 2.0951 0.29069 1.3834 0.36033 -0.2434 0.73527 -0.4643 1.12269 -0.6616 0.36648 -0.193 0.75774 -0.3346 1.16279 -0.421 0.4143 -0.075 0.8387 -0.075 1.253 0 0.44615 0.0872 0.88263 0.2181 1.30313 0.3909 0.0474 0.0326 0.1013 0.0547 0.158 0.0647 0.0566 0.01 0.1148 0.0076 0.1705 -0.0069 0.0557 -0.0145 0.1076 -0.0408 0.1523 -0.0772 0.0446 -0.0363 0.0808 -0.0819 0.1063 -0.1335 0.0254 -0.0516 0.0395 -0.1081 0.0411 -0.1657 0.0017 -0.0575 -0.009 -0.1147 -0.0314 -0.1677 -0.0225 -0.0531 -0.056 -0.1006 -0.0985 -0.1395 -0.0424 -0.0389 -0.0927 -0.0682 -0.1475 -0.0859v-0.0301Z"
      clip-rule="evenodd"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      fill-rule="evenodd"
      d="M23.2086 18.1798c-1.0599 -0.1413 -2.1284 -0.2083 -3.1976 -0.2005 0.1102 -0.7919 0.2205 -1.5838 0.3107 -2.3656 0.1303 -1.233 0.2306 -2.4459 0.2907 -3.6789 0.0602 -1.2329 0.0902 -2.44582 0.1103 -3.66875 0.0321 -0.61104 0.0321 -1.22335 0 -1.83439 -0.0215 -0.35025 -0.1172 -0.69193 -0.2807 -1.0024 -0.3797 -0.56877 -0.9656 -0.96774 -1.6339 -1.11267 -1.2258 -0.19977 -2.4715 -0.24691 -3.7089 -0.14033 -3.3881 0.07016 -6.68601 0.7518 -10.02401 1.0024H4.9549v-0.68164c0.14034 -1.36326 0.32077 -2.7165 0.5413 -4.009601 0.02068 -0.045703 0.03131 -0.095309 0.03119 -0.145471 -0.00013 -0.050162 -0.01101 -0.099714 -0.03191 -0.145315 -0.0209 -0.045601 -0.05133 -0.086189 -0.08925 -0.1190286 -0.03792 -0.0328393 -0.08244 -0.0571655 -0.13056 -0.0713381 -0.04543 -0.00870292 -0.09213 -0.00833722 -0.13741 0.00107607C5.09297 0.0167557 5.04999 0.0350307 5.0118 0.0611161c-0.0382 0.0260853 -0.07086 0.0594659 -0.09611 0.0982219 -0.02524 0.038755 -0.04258 0.082121 -0.051 0.127601 -0.2761 1.352861 -0.51343 2.713341 -0.71171 4.079771 0 0.27065 -0.07017 0.5413 -0.11026 0.82197 -1.07003 0.04479 -2.14187 0.01465 -3.207687 -0.09021 -0.104888 -0.01131 -0.210004 0.01918 -0.292564 0.08486 -0.082561 0.06567 -0.135913 0.16123 -0.148493 0.26598 -0.00702 0.0514 -0.003738 0.10368 0.009653 0.15381 0.013391 0.05012 0.036625 0.09707 0.068346 0.13812 0.031722 0.04105 0.071297 0.07538 0.116419 0.10098 0.045122 0.0256 0.094888 0.04197 0.146399 0.04814 1.066537 0.14226 2.141767 0.20925 3.217707 0.20048 -0.11026 0.7919 -0.22053 1.5838 -0.31074 2.36567 -0.13032 1.22293 -0.23056 2.45589 -0.2907 3.67879 -0.06014 1.223 -0.09022 2.4459 -0.11026 3.6688 -0.03213 0.6111 -0.03213 1.2234 0 1.8344 0.02146 0.3503 0.11713 0.6919 0.28067 1.0024 0.37494 0.5645 0.95289 0.963 1.61387 1.1127 1.22575 0.1997 2.47153 0.2469 3.70888 0.1403 3.38808 -0.0702 6.68598 -0.7518 10.02398 -1.0024h0.1203v0.6816c-0.1363 1.3422 -0.3169 2.6794 -0.5413 4.0096 -0.0087 0.0455 -0.0083 0.0922 0.0011 0.1375 0.0094 0.0452 0.0277 0.0882 0.0538 0.1264 0.0261 0.0382 0.0594 0.0709 0.0982 0.0961 0.0388 0.0253 0.0821 0.0426 0.1276 0.051 0.0454 0.0087 0.0921 0.0084 0.1374 -0.001 0.0453 -0.0095 0.0883 -0.0277 0.1265 -0.0538s0.0708 -0.0595 0.0961 -0.0982c0.0252 -0.0388 0.0426 -0.0822 0.051 -0.1276 0.2807 -1.3332 0.5112 -2.6965 0.7117 -4.0698 0 -0.2706 0.0702 -0.5413 0.1103 -0.822 1.07 -0.0448 2.1418 -0.0146 3.2076 0.0903 0.1049 0.0113 0.21 -0.0192 0.2926 -0.0849 0.0826 -0.0657 0.1359 -0.1612 0.1485 -0.266 -0.0013 -0.0513 -0.0127 -0.1019 -0.0336 -0.1488 -0.0208 -0.047 -0.0507 -0.0893 -0.088 -0.1247 -0.0372 -0.0354 -0.081 -0.0631 -0.129 -0.0815 -0.0479 -0.0184 -0.099 -0.0272 -0.1504 -0.0259Zm-3.8191 -9.92377v4.36047c0 1.0024 -0.0501 1.9346 -0.1203 2.9069 -0.0501 0.812 -0.1203 1.634 -0.1905 2.4459h-0.2205c-3.328 0.1103 -6.6359 0.6716 -10.024 0.6215 -0.98226 0.0556 -1.96727 0.0389 -2.94706 -0.0501 -0.2409 -0.0007 -0.47874 -0.054 -0.6969 -0.1561 -0.21816 -0.1022 -0.41137 -0.2507 -0.56613 -0.4353 -0.0887 -0.2054 -0.12982 -0.4281 -0.12029 -0.6516v-5.844c0 -1.0024 0 -1.93464 0.12029 -2.90697 0 -0.81195 0.12029 -1.63392 0.19046 -2.44586h0.22053c3.32797 -0.11027 6.6359 -0.67161 10.024 -0.62149 0.9808 -0.07751 1.9662 -0.07751 2.9471 0 0.2411 -0.00072 0.4794 0.05193 0.6978 0.15418 0.2183 0.10225 0.4114 0.25157 0.5652 0.43724 0.0887 0.20534 0.1298 0.42808 0.1203 0.65156 0.0601 0.60144 0 1.19285 0 1.53367Z"
      clip-rule="evenodd"
      stroke-width="1"
    ></path>
  </svg>
);

export default Image;
