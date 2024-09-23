import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const ToggleOff: React.FC<WidgetSvgProps> = ({
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
      d="M23.9225 11.1731c-0.0897 -0.8539 -0.398 -1.67031 -0.8951 -2.37042 -0.497 -0.70011 -1.1661 -1.26031 -1.9428 -1.62653 -0.7765 -0.30299 -1.5959 -0.48172 -2.4281 -0.5296 -1.185 -0.0599 -2.3723 -0.0599 -3.5573 0 -1.8586 0 -3.7172 0.10991 -5.57578 0.24981 -6.79485 0.5196 -6.66495 0.6595 -7.33444 1.0492 -0.55437 0.3193 -1.02922 0.76 -1.388949 1.28902 -0.277745 0.39529 -0.487165 0.83442 -0.61953 1.29902 -0.1487313 0.478 -0.2063542 0.9796 -0.1698713 1.4789 0.0611829 0.8772 0.2777193 1.7366 0.6395153 2.5381 0.381445 0.8247 0.996365 1.5196 1.768655 1.9984 0.36613 0.2149 0.76416 0.3701 1.17911 0.4597 0.84935 0.1898 1.7187 0.1199 2.638 0.2398 0.71945 0.0899 1.42891 0.1299 2.13838 0.1499 1.61877 0 3.23751 -0.0899 4.86631 -0.07h4.3067c1.011 -0.0128 2.0171 -0.1435 2.9978 -0.3897 0.72 -0.1946 1.3819 -0.5616 1.9285 -1.0691 0.5927 -0.6145 1.0327 -1.3597 1.2844 -2.1755 0.2517 -0.8158 0.308 -1.6794 0.1645 -2.521Zm-2.2183 3.8371c-0.4101 0.3846 -0.9127 0.6566 -1.4589 0.7894 -0.9027 0.224 -1.828 0.3446 -2.7579 0.3597h-4.2368c-1.6388 0 -3.2475 0.1599 -4.86632 0.1599 -0.66734 0.0086 -1.33461 -0.0215 -1.99849 -0.0899 -0.76941 -0.09 -1.50885 0 -2.22831 -0.1199 -0.43311 -0.0459 -0.85179 -0.1821 -1.22906 -0.3997 -0.63697 -0.3849 -1.14753 -0.9476 -1.46889 -1.6188 -0.33394 -0.7 -0.537127 -1.4552 -0.599545 -2.2283 -0.041726 -0.3925 -0.007806 -0.7894 0.099925 -1.1691 0.1049 -0.3866 0.27014 -0.75415 0.48963 -1.0892 0.29036 -0.41618 0.66481 -0.76681 1.09916 -1.02922 0.32975 -0.19984 0.51961 -0.59954 6.9947 -0.93928 1.8386 -0.08994 3.6872 -0.11991 5.5358 -0.09993 1.0992 0 2.2983 0 3.4574 0.09993 0.7253 0.06398 1.4364 0.23924 2.1084 0.5196 0.5992 0.30152 1.1107 0.75226 1.4852 1.30879 0.3746 0.55651 0.5995 1.20011 0.6532 1.86881 0.1123 0.6546 0.0734 1.3263 -0.1136 1.9636 -0.187 0.6374 -0.5173 1.2235 -0.9656 1.7136Z"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      d="M4.86694 9.01478c-0.68992 0.19267 -1.29516 0.61141 -1.7187 1.18912 -0.22822 0.2951 -0.39599 0.6324 -0.49373 0.9925 -0.09773 0.36 -0.1235 0.7358 -0.07584 1.1059 0.1426 0.8516 0.5901 1.6223 1.25905 2.1683 0.65713 0.5876 1.51742 0.8959 2.39818 0.8594 0.86309 -0.0885 1.66512 -0.486 2.25829 -1.1192 0.31008 -0.3069 0.54942 -0.6779 0.7013 -1.0869 0.15188 -0.409 0.21264 -0.8463 0.17803 -1.2813 -0.11544 -0.8587 -0.53782 -1.6467 -1.1891 -2.21828 -0.47512 -0.33726 -1.01823 -0.56657 -1.59129 -0.67186 -0.57306 -0.10529 -1.16222 -0.08402 -1.72619 0.06232Zm2.83785 4.44662c-0.41479 0.4245 -0.96766 0.6868 -1.55882 0.7394 -0.58336 0.0119 -1.15006 -0.1949 -1.5888 -0.5795 -0.48971 -0.3538 -0.8426 -0.8654 -0.99924 -1.4489 -0.09765 -0.5042 0.00254 -1.0266 0.27979 -1.4589 0.28706 -0.4606 0.71958 -0.81224 1.22907 -0.99925 0.43721 -0.10889 0.89335 -0.11783 1.3345 -0.02614 0.44115 0.09169 0.85595 0.28165 1.21356 0.55579 0.45908 0.4557 0.73619 1.0632 0.77941 1.7087 -0.00457 0.2854 -0.06818 0.5669 -0.18684 0.8265 -0.11867 0.2597 -0.2898 0.492 -0.50263 0.6823Z"
      stroke-width="1"
    ></path>
  </svg>
);

export default ToggleOff;