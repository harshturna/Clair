import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const Wifi: React.FC<WidgetSvgProps> = ({
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
      d="M12.9351 16.2225c-0.0928 0 -0.1818 0.0369 -0.2474 0.1025 -0.0657 0.0656 -0.1025 0.1546 -0.1025 0.2474 0 0.0928 0.0368 0.1818 0.1025 0.2474 0.0656 0.0656 0.1546 0.1024 0.2474 0.1024 1.6493 0 1.0895 2.2992 -0.23 3.0789 -0.9196 0.5398 -2.0792 0 -2.1391 -1.4095 -0.0495 -0.3507 0.008 -0.7081 0.1649 -1.0256 0.1569 -0.3174 0.406 -0.5801 0.7147 -0.7537 0.0692 -0.0333 0.1236 -0.0911 0.1526 -0.1622 0.029 -0.0711 0.0306 -0.1504 0.0045 -0.2226 -0.0262 -0.0722 -0.0782 -0.1321 -0.146 -0.1681 -0.0678 -0.0361 -0.1465 -0.0456 -0.221 -0.0269 -0.4742 0.1838 -0.8807 0.5084 -1.1649 0.9301 -0.28416 0.4218 -0.4323 0.9205 -0.42449 1.429 -0.08111 0.4598 -0.0257 0.9333 0.15938 1.362 0.18508 0.4287 0.49171 0.7937 0.88201 1.05 0.3903 0.2563 0.8471 0.3926 1.314 0.3921 0.467 -0.0005 0.9235 -0.1379 1.3132 -0.395 1.9792 -1.2695 2.3491 -4.8482 -0.3798 -4.7782Z"
      clip-rule="evenodd"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      fill-rule="evenodd"
      d="M11.4056 12.6439c-0.8969 0.1668 -1.76103 0.4774 -2.55899 0.9196 -0.95222 0.6414 -1.71233 1.5293 -2.19916 2.569 0 0.0822 0.03264 0.161 0.09076 0.2192 0.05811 0.0581 0.13693 0.0907 0.21912 0.0907 0.2599 0 0.22991 -0.1899 0.42983 -0.4298 0.52925 -0.6027 1.15817 -1.1099 1.85929 -1.4994 2.43905 -0.8697 3.91855 -1.3495 6.74745 0.4098 0.0756 0.0423 0.1642 0.055 0.2486 0.0357 0.0844 -0.0193 0.1587 -0.0692 0.2085 -0.1401 0.0497 -0.0709 0.0714 -0.1577 0.0608 -0.2437 -0.0105 -0.086 -0.0526 -0.165 -0.1181 -0.2217 -1.5094 -1.1296 -3.0188 -1.9892 -4.9881 -1.7093Z"
      clip-rule="evenodd"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      fill-rule="evenodd"
      d="M17.4033 9.57504c-1.9381 -1.26679 -4.2558 -1.8215 -6.5574 -1.5694 -1.33697 0.30165 -2.63016 0.7719 -3.84857 1.39947 -1.12957 0.5298 -3.29874 3.13879 -3.27875 3.59859 -0.00002 0.0403 0.00805 0.0801 0.02375 0.1172 0.01569 0.037 0.03868 0.0705 0.06759 0.0985 0.02891 0.028 0.06316 0.0499 0.10071 0.0643 0.03755 0.0145 0.07762 0.0213 0.11783 0.0199 0.2799 0 0.20992 -0.1899 0.45983 -0.5198 0.81198 -0.9952 1.79752 -1.8351 2.90889 -2.479 1.15279 -0.50958 2.36022 -0.88522 3.59862 -1.11961 2.0453 -0.20791 4.1055 0.21041 5.9077 1.19951 2.689 1.4495 2.9489 2.779 3.4587 2.2892 0.0648 -0.0671 0.1009 -0.1567 0.1009 -0.2499 0 -0.0933 -0.0361 -0.1829 -0.1009 -0.2499 -0.8478 -1.0123 -1.8457 -1.8888 -2.9589 -2.59906Z"
      clip-rule="evenodd"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      fill-rule="evenodd"
      d="M23.8909 8.59542c-1.2382 -1.4512 -2.6992 -2.69627 -4.3284 -3.68859 -1.6557 -0.99813 -3.4719 -1.70162 -5.3679 -2.0792 -3.8086 -0.68974 -5.90777 0.29988 -9.46641 1.84929C3.15879 5.37665 4.63e-8 9.06524 4.63e-8 9.73499 -0.000022314 9.77522 0.0080529 9.81505 0.0237448 9.8521c0.0156919 0.03706 0.0386795 0.07057 0.0675938 0.09855 0.0289144 0.02798 0.0631644 0.04985 0.1007094 0.06435 0.037546 0.0144 0.077619 0.0212 0.117834 0.0199 0.309881 0 0.159938 -0.15997 0.549789 -0.69976C2.03932 7.83897 3.47419 6.56315 5.09805 5.56658c3.21877 -1.26952 5.50785 -2.19916 8.89655 -1.5594 1.7881 0.28258 3.5132 0.87455 5.0981 1.74933 1.6015 0.88052 3.0498 2.0148 4.2884 3.35871 0.0689 0.06761 0.1619 0.10506 0.2584 0.10412 0.0965 -0.00093 0.1888 -0.04019 0.2564 -0.10912 0.0676 -0.06893 0.105 -0.16189 0.1041 -0.25843 -0.001 -0.09655 -0.0402 -0.18876 -0.1091 -0.25637Z"
      clip-rule="evenodd"
      stroke-width="1"
    ></path>
  </svg>
);

export default Wifi;