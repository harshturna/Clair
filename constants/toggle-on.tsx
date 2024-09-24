import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const ToggleOn: React.FC<WidgetSvgProps> = ({
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
      d="M23.9225 11.1731c-0.0897 -0.8539 -0.398 -1.67031 -0.8951 -2.37042 -0.497 -0.70011 -1.1661 -1.26031 -1.9428 -1.62653 -0.7765 -0.30299 -1.5959 -0.48172 -2.4281 -0.5296 -1.185 -0.0599 -2.3723 -0.0599 -3.5573 0 -1.8586 0 -3.7172 0.10991 -5.57578 0.24981 -6.79485 0.5196 -6.66495 0.6595 -7.33444 1.0492 -0.55437 0.3193 -1.02922 0.76 -1.388949 1.28902 -0.277745 0.39529 -0.487165 0.83442 -0.61953 1.29902 -0.1487313 0.478 -0.2063542 0.9796 -0.1698713 1.4789 0.0611829 0.8772 0.2777193 1.7366 0.6395153 2.5381 0.381445 0.8247 0.996365 1.5196 1.768655 1.9984 0.36545 0.2163 0.76371 0.3716 1.17911 0.4597 0.84935 0.1898 1.7187 0.1199 2.638 0.2398 0.71945 0.0899 1.42891 0.1299 2.13838 0.1499 1.61877 0 3.23751 -0.0899 4.86631 -0.07h4.3067c1.011 -0.0128 2.0171 -0.1435 2.9978 -0.3897 0.72 -0.1946 1.3819 -0.5616 1.9285 -1.0691 0.5927 -0.6145 1.0327 -1.3597 1.2844 -2.1755 0.2517 -0.8158 0.308 -1.6794 0.1645 -2.521Zm-2.2183 3.8371c-0.4101 0.3846 -0.9127 0.6566 -1.4589 0.7894 -0.9027 0.224 -1.828 0.3446 -2.7579 0.3597h-4.2368c-1.6388 0 -3.2475 0.1599 -4.86632 0.1599 -0.66734 0.0086 -1.33461 -0.0215 -1.99849 -0.0899 -0.76941 -0.09 -1.50885 0 -2.22831 -0.1199 -0.43311 -0.0459 -0.85179 -0.1821 -1.22906 -0.3997 -0.63697 -0.3849 -1.14753 -0.9476 -1.46889 -1.6188 -0.33394 -0.7 -0.537127 -1.4552 -0.599545 -2.2283 -0.041726 -0.3925 -0.007806 -0.7894 0.099925 -1.1691 0.1049 -0.3866 0.27014 -0.75415 0.48963 -1.0892 0.29036 -0.41618 0.66481 -0.76681 1.09916 -1.02922 0.32975 -0.19984 0.51961 -0.59954 6.9947 -0.93928 1.8386 -0.08994 3.6872 -0.11991 5.5358 -0.09993 1.0992 0 2.2983 0 3.4574 0.09993 0.7253 0.06398 1.4364 0.23924 2.1084 0.5196 0.5992 0.30152 1.1107 0.75226 1.4852 1.30879 0.3746 0.55651 0.5995 1.20011 0.6532 1.86881 0.1123 0.6546 0.0734 1.3263 -0.1136 1.9636 -0.187 0.6374 -0.5173 1.2235 -0.9656 1.7136Z"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      d="M15.379 10.2338c-0.2283 0.2951 -0.396 0.6324 -0.4938 0.9925 -0.0977 0.36 -0.1235 0.7358 -0.0758 1.1059 0.1469 0.8501 0.5936 1.6194 1.259 2.1683 0.6583 0.5858 1.5178 0.8938 2.3982 0.8594 0.8639 -0.0859 1.6668 -0.4838 2.2583 -1.1192 0.3101 -0.3069 0.5494 -0.6779 0.7013 -1.0869 0.1519 -0.4091 0.2126 -0.8463 0.178 -1.2813 -0.1048 -0.8706 -0.5284 -1.6716 -1.1891 -2.24826 -0.758 -0.56219 -1.7027 -0.81235 -2.6395 -0.69896 -0.9369 0.1134 -1.7947 0.5817 -2.3966 1.30852Zm4.5565 3.2275c-0.4148 0.4245 -0.9677 0.6868 -1.5588 0.7395 -0.5834 0.0118 -1.1501 -0.1949 -1.5888 -0.5796 -0.4897 -0.3538 -0.8426 -0.8654 -0.9993 -1.4489 -0.0976 -0.5042 0.0026 -1.0266 0.2798 -1.4589 0.2012 -0.2993 0.4641 -0.5521 0.7711 -0.74138 0.3069 -0.18931 0.6508 -0.31076 1.0086 -0.35619 0.3577 -0.04543 0.7211 -0.01379 1.0656 0.09279 0.3445 0.10658 0.6623 0.28564 0.9319 0.52518 0.459 0.4557 0.7362 1.0632 0.7794 1.7087 -0.0032 0.2871 -0.0662 0.5705 -0.1849 0.832 -0.1187 0.2615 -0.2905 0.4954 -0.5046 0.6868Z"
      stroke-width="1"
    ></path>
  </svg>
);

export default ToggleOn;
