import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const BulletsList: React.FC<WidgetSvgProps> = ({
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
      d="M10.4846 2.84461c0.6092 0 1.2485 0.13983 1.8278 0.12984l5.9926 -0.17978c0.9089 0 1.8078 0 2.7067 -0.05993 0.6093 0 1.2186 -0.06991 1.8278 -0.12984 0.091 -0.00766 0.1754 -0.05061 0.2351 -0.11967s0.0901 -0.15874 0.0845 -0.24988c-0.0101 -0.08918 -0.054 -0.17107 -0.1228 -0.22871 -0.0688 -0.05763 -0.1572 -0.08661 -0.2467 -0.08091h-1.7779c-0.8889 0 -1.7778 -0.10987 -2.6867 -0.16979 -1.0213 -0.05496 -2.0449 -0.05496 -3.0662 0 -0.9988 0.06991 -1.9976 0.21973 -2.9964 0.34957 -0.5593 0.0799 -1.1785 0 -1.7678 0.06992 -0.2836 0.01234 -0.56496 0.05588 -0.83901 0.12984 -0.04165 0.0055 -0.08168 0.01969 -0.11749 0.04166 -0.03581 0.02197 -0.06659 0.05123 -0.09036 0.08587 -0.02377 0.03465 -0.03999 0.0739 -0.04761 0.11522 -0.00761 0.04131 -0.00645 0.08377 0.00341 0.12461s0.02819 0.07915 0.05382 0.11245c0.02562 0.03329 0.05796 0.06082 0.09491 0.08081 0.03696 0.01998 0.0777 0.03197 0.11959 0.03519 0.04189 0.00322 0.08399 -0.00241 0.12356 -0.01652 0.22778 -0.03704 0.45868 -0.05043 0.68918 -0.03995Z"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      d="M10.3947 12.2431c0.3565 -0.0597 0.7173 -0.0897 1.0787 -0.0899h1.6979c0.5593 0 1.3384 0.0499 1.9976 0.0499 0.9988 0 1.9975 -0.0499 2.9963 -0.0699 0.9988 -0.02 2.1074 -0.2796 3.1761 -0.3396 0.4321 -0.0349 0.8664 -0.0349 1.2985 0 0.0883 0.0119 0.1778 -0.0105 0.2502 -0.0625 0.0724 -0.052 0.1222 -0.1296 0.1393 -0.2171 0.007 -0.0447 0.0051 -0.0903 -0.0057 -0.1342 -0.0108 -0.0439 -0.0303 -0.0852 -0.0572 -0.1215 -0.027 -0.0363 -0.061 -0.0668 -0.0999 -0.0898 -0.0389 -0.023 -0.0821 -0.038 -0.1269 -0.0441 -0.4556 -0.0748 -0.9166 -0.1115 -1.3783 -0.1098 0 0 -5.6032 0.0599 -5.693 0.0599 -0.849 0 -1.688 0.1099 -2.527 0.1798 -0.5693 0.0499 -1.1486 0.0799 -1.7179 0.1498 -0.3941 0.0507 -0.7845 0.1274 -1.1685 0.2297 -0.041 0.008 -0.0799 0.0245 -0.1142 0.0485 -0.0342 0.0239 -0.0631 0.0547 -0.0847 0.0904 -0.0216 0.0358 -0.0356 0.0757 -0.0409 0.1171 -0.0053 0.0414 -0.0019 0.0835 0.01 0.1236 0.0082 0.0399 0.0244 0.0777 0.0477 0.1111 0.0233 0.0334 0.0531 0.0617 0.0877 0.0832s0.0732 0.0357 0.1135 0.0418c0.0402 0.0061 0.0813 0.0039 0.1207 -0.0064Z"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      d="m23.2091 20.3632 -3.5257 -0.3596 -1.8877 -0.1798c-0.6393 0 -1.2785 -0.0699 -1.9077 -0.0699 -0.8582 0.0068 -1.7153 0.0635 -2.5669 0.1698 -0.6592 0.0899 -1.3483 0.1099 -1.9975 0.1998 -0.303 0.0372 -0.6033 0.0939 -0.8989 0.1697 -0.0782 0.0173 -0.1463 0.0648 -0.1894 0.1323 -0.0431 0.0674 -0.0576 0.1492 -0.0404 0.2273 0.0173 0.0782 0.0648 0.1463 0.1322 0.1893 0.0675 0.0431 0.1493 0.0576 0.2274 0.0404 0.274 -0.0468 0.5511 -0.0736 0.829 -0.0799 0.6692 0 1.3583 0.05 1.9975 0l6.2324 0.1598h3.4758c0.0446 0.0046 0.0897 0.0004 0.1326 -0.0124 0.043 -0.0129 0.083 -0.034 0.1178 -0.0623 0.0347 -0.0283 0.0636 -0.0632 0.0849 -0.1026 0.0213 -0.0394 0.0347 -0.0827 0.0393 -0.1273 0.0045 -0.0446 0.0003 -0.0897 -0.0125 -0.1326 -0.0128 -0.043 -0.034 -0.083 -0.0623 -0.1178 -0.0283 -0.0347 -0.0631 -0.0636 -0.1026 -0.0849 -0.0394 -0.0213 -0.0827 -0.0346 -0.1273 -0.0392l0.05 0.0799Z"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      d="M3.72283 5.12179c0.41398 0.06492 0.83775 0.01971 1.22872 -0.13107 0.39097 -0.15077 0.73537 -0.40181 0.99856 -0.72788 0.29448 -0.41633 0.44206 -0.91881 0.41949 -1.42826 0.05201 -0.49594 -0.04156 -0.99628 -0.26928 -1.43991C5.8726 0.95105 5.5206 0.583359 5.08732 0.336528 4.65404 0.0896959 4.15824 -0.0255889 3.66051 0.00475916 3.16278 0.0351072 2.68466 0.209774 2.28458 0.507418c-0.29335 0.170854 -0.54634 0.403059 -0.74166 0.680732 -0.19531 0.27767 -0.32835 0.59425 -0.38999 0.92809 -0.06165 0.33384 -0.05046 0.67706 0.03281 1.00618 0.08327 0.32911 0.23664 0.63635 0.44964 0.90071 0.25817 0.31187 0.57556 0.56953 0.93384 0.7581 0.35828 0.18857 0.75036 0.30431 1.15361 0.34056Zm-0.88892 -3.8553c0.39952 -0.30962 2.6268 -1.3383654 2.7067 1.27844 0.04038 0.40312 -0.07386 0.80653 -0.31961 1.12863 -0.17927 0.16696 -0.39747 0.28642 -0.63473 0.34748 -0.23725 0.06105 -0.48601 0.06177 -0.72361 0.00209 -0.50971 -0.05646 -0.97818 -0.30679 -1.30841 -0.69915 -0.12784 -0.14883 -0.22268 -0.32306 -0.27827 -0.51122 -0.0556 -0.18816 -0.07068 -0.38596 -0.04425 -0.58037 0.02642 -0.19441 0.09375 -0.38101 0.19755 -0.5475 0.1038 -0.16649 0.24171 -0.30909 0.40463 -0.4184Z"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      d="M2.14474 9.72618C1.46251 10.1578 0.953486 10.8153 0.706498 11.5839c-0.089705 0.3603 -0.106761 0.7349 -0.050172 1.1019 0.056589 0.3669 0.18569 0.719 0.379774 1.0355 0.39378 0.627 1.00575 1.0859 1.7179 1.2884 0.2355 0.0562 0.47704 0.083 0.71912 0.0799 0.22826 -0.0071 0.45548 -0.0339 0.67918 -0.0799 0.68364 -0.1499 1.29571 -0.5286 1.73515 -1.0733 0.43944 -0.5448 0.67998 -1.2231 0.6819 -1.923 -0.00796 -0.5109 -0.15427 -1.0102 -0.42338 -1.4446 -0.2691 -0.4344 -0.65093 -0.78767 -1.10487 -1.02232 -0.45393 -0.23466 -0.96298 -0.34186 -1.473 -0.31022 -0.51001 0.03164 -1.00191 0.20095 -1.42336 0.48992Zm1.78782 4.19492c-0.15454 0.0314 -0.31172 0.0481 -0.46942 0.0499 -0.14482 0.0041 -0.28946 -0.0128 -0.42948 -0.0499 -0.44584 -0.1184 -0.83089 -0.4 -1.07868 -0.7891 -0.27062 -0.3824 -0.37839 -0.8566 -0.29964 -1.3184 0.12663 -0.5782 0.45615 -1.0919 0.92887 -1.4482 0.28928 -0.2305 0.63991 -0.37096 1.00834 -0.40389 0.36842 -0.03293 0.73841 0.04309 1.06398 0.21869 0.32558 0.1755 0.59241 0.4429 0.76734 0.7688 0.17493 0.3259 0.25025 0.696 0.21661 1.0644 -0.01615 0.4677 -0.19598 0.9148 -0.50811 1.2635 -0.31214 0.3486 -0.73676 0.5766 -1.19981 0.6442Z"
      stroke-width="1"
    ></path>
    <path
      fill={fill}
      d="M2.6042 18.5354c-0.76258 0.3515 -1.37761 0.9594 -1.737885 1.7179 -0.296498 0.5855 -0.39799 1.2504 -0.289647 1.8977 0.094944 0.481 0.352368 0.9147 0.729112 1.2285 0.37204 0.2722 0.79825 0.4612 1.24974 0.5543 0.4515 0.093 0.91772 0.0879 1.36707 -0.015 0.45646 -0.0701 0.88823 -0.2529 1.25621 -0.532 0.36798 -0.279 0.66055 -0.6454 0.85122 -1.066 0.24491 -0.6227 0.24491 -1.315 0 -1.9377 -0.99878 -2.8864 -3.17613 -1.9676 -3.42582 -1.8477Zm2.57685 3.4658c-0.15401 0.2525 -0.36733 0.4637 -0.62145 0.6151 -0.25412 0.1514 -0.54135 0.2386 -0.83677 0.2538 -0.2921 0.0618 -0.59408 0.0598 -0.88536 -0.0057s-0.56502 -0.193 -0.80258 -0.3738c-0.11526 -0.0944 -0.21011 -0.2113 -0.27879 -0.3435 -0.06868 -0.1322 -0.10975 -0.277 -0.12072 -0.4256 -0.0348 -0.3598 0.01656 -0.7227 0.14981 -1.0587 0.21525 -0.5873 0.62381 -1.0839 1.15859 -1.4083 1.57808 -0.8789 2.24726 1.0987 2.32716 1.3783 0.14462 0.451 0.11249 0.9402 -0.08989 1.3684Z"
      stroke-width="1"
    ></path>
  </svg>
);

export default BulletsList;