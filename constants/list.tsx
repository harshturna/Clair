import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const List: React.FC<WidgetSvgProps> = ({
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
    <g id="ui-webpage-bullets">
      <g id="Group">
        <path
          id="Vector"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.3164 0.394449c-0.08887 0.03714 -0.15935 0.108062 -0.19593 0.197164s-0.03626 0.189085 0.00088 0.277955c0.03714 0.088869 0.10806 0.159342 0.19716 0.195922s0.18909 0.03627 0.27796 -0.00087c2.30057 -0.900228 3.40084 1.6004 2.34058 3.34083 -0.71018 1.18029 -3.00075 1.07027 -3.68092 0.23006 -0.26341 -0.38762 -0.418918 -0.83836 -0.450559 -1.30594 -0.031641 -0.46758 0.061726 -0.93516 0.270519 -1.35473 0.02501 -0.03909 0.04123 -0.08315 0.04752 -0.12913 0.0063 -0.04598 0.00252 -0.09278 -0.01108 -0.13716 -0.01359 -0.04437 -0.03667 -0.08526 -0.06764 -0.11983 -0.03097 -0.03456 -0.069082 -0.06198 -0.111701 -0.08035C0.890569 1.49 0.844464 1.48111 0.79807 1.48234c-0.046394 0.00122 -0.091967 0.01251 -0.133562 0.0331 -0.041594 0.02059 -0.078214 0.04997 -0.107321 0.08612 -0.029107 0.03615 -0.050005 0.07819 -0.061245 0.12322C-1.77462 6.44596 4.39691 7.84631 5.99731 5.03561 7.32765 2.68502 5.68724 -1.08592 2.3164 0.394449Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.538 10.977c-0.9 0.52 -1.14 2.38 -0.14 2.94 0.30867 0.1613 0.6518 0.2455 1 0.2455 0.3482 0 0.6913 -0.0842 1 -0.2455 1.84 -1.06 -0.01 -4.05996 -1.86 -2.94Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.36796 17.8388c-0.9 0.52 -1.15 2.38 -0.15 2.93 0.30789 0.1637 0.65128 0.2493 1.00004 0.2493 0.3487 0 0.6921 -0.0856 1 -0.2493 1.84 -1.02 -0.01 -4 -1.85004 -2.93Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.1513 1.37469c-4.1648 -0.2975 -8.3472 -0.24397 -12.50307 0.16004 -0.17005 0 -1.08027 0.08002 -1.2003 0.12003 -0.06122 0.01884 -0.11564 0.05508 -0.15661 0.10431 -0.04098 0.04922 -0.06675 0.10931 -0.07418 0.17293 -0.00742 0.06361 0.00383 0.12802 0.03237 0.18536 0.02855 0.05733 0.07316 0.10513 0.1284 0.13755 0.12003 0.06002 -0.06002 0 1.30032 0 4.15537 0.23673 8.32157 0.20666 12.47307 -0.09002 0.8503 0 2.0706 0 1.8105 -0.4101 0.2501 -0.3801 -0.7702 -0.33009 -1.8105 -0.3801Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.6687 5.97582c2.3408 0.10293 4.6859 -0.02438 7.0018 -0.3801 0.0864 -0.01436 0.165 -0.05893 0.2217 -0.12579 0.0566 -0.06686 0.0877 -0.15165 0.0877 -0.2393 0 -0.08764 -0.0311 -0.17244 -0.0877 -0.23929 -0.0567 -0.06686 -0.1353 -0.11144 -0.2217 -0.1258 -1.3604 0 -3.0008 -0.08002 -4.5112 -0.08002 -2.0805 0 -3.4708 0.17004 -4.50108 0.23006 -0.61015 0 -1.09027 0 -1.15028 0.07002 -0.06002 0.07001 -0.4001 0.51012 0.13003 0.62015 0.19005 0 1.90043 0.16004 3.03073 0.27007Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_6"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.0716 11.8973c-1.7805 0 -3.3909 -0.18 -5.4414 -0.07 -0.9402 0.05 -1.7604 0.16 -2.3306 0.2 -0.3344 0.0043 -0.6684 0.0277 -1.0002 0.0701 -0.0724 0.0263 -0.1328 0.0779 -0.1702 0.1452 -0.0374 0.0673 -0.0493 0.1458 -0.0335 0.2212 0.0158 0.0753 0.0583 0.1425 0.1196 0.1891 0.0612 0.0466 0.1373 0.0695 0.2141 0.0646 0.1601 0 2.5006 0.2901 3.5909 0.3201 1.7117 -0.0059 3.4205 -0.143 5.1113 -0.4101 0.0868 -0.0199 0.1635 -0.0703 0.2161 -0.1422 0.0526 -0.0718 0.0775 -0.1602 0.0702 -0.2489 -0.0073 -0.0887 -0.0463 -0.1718 -0.1099 -0.2341 -0.0636 -0.0623 -0.1476 -0.0996 -0.2364 -0.105Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_7"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.1416 19.3392c-1.7505 0 -3.4409 -0.1901 -5.4414 -0.0801 -0.9402 0.06 -1.7604 0.1601 -2.3306 0.2001 -0.5701 0.04 -1.0002 0.05 -1.0002 0.07 0 0.02 -0.4001 0.5101 0.13 0.6202 0.1801 0 2.5407 0.3 3.5909 0.32 1.7113 -0.0066 3.4198 -0.1403 5.1113 -0.4001 0.0868 -0.0198 0.1635 -0.0703 0.2161 -0.1421 0.0526 -0.0718 0.0775 -0.1602 0.0702 -0.249 -0.0073 -0.0887 -0.0463 -0.1718 -0.1099 -0.2341 -0.0636 -0.0623 -0.1476 -0.0995 -0.2364 -0.1049Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.33701 11.6165c0.09639 -0.0026 0.18795 -0.0427 0.25519 -0.1118 0.06724 -0.0691 0.10484 -0.1618 0.10481 -0.2582 0.19 -0.73 0.26 -2.55999 -0.35 -2.59999 -0.04465 -0.00133 -0.08913 0.00615 -0.1309 0.02202 -0.04176 0.01586 -0.07998 0.0398 -0.11249 0.07045 -0.0325 0.03065 -0.05865 0.0674 -0.07694 0.10816 -0.01829 0.04076 -0.02838 0.08472 -0.02967 0.12937 -0.49 1.16999 -0.17 2.63999 0.34 2.63999Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_9"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.33701 15.7476c0.09639 -0.0026 0.18795 -0.0428 0.25519 -0.1119 0.06724 -0.0691 0.10484 -0.1617 0.10481 -0.2581 0.19 -0.73 0.26 -2.56 -0.35 -2.6 -0.08536 -0.0031 -0.16875 0.026 -0.2336 0.0816 -0.06485 0.0556 -0.10641 0.1335 -0.1164 0.2184 -0.49 1.21 -0.17 2.67 0.34 2.67Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_10"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.33701 20.0386c0.09639 -0.0026 0.18795 -0.0428 0.25519 -0.1119 0.06724 -0.0691 0.10484 -0.1617 0.10481 -0.2581 0.19 -0.73 0.26 -2.56 -0.35 -2.6 -0.08595 -0.0056 -0.17067 0.0227 -0.23607 0.0787 -0.06539 0.0561 -0.10628 0.1355 -0.11393 0.2213 -0.49 1.2 -0.17 2.67 0.34 2.67Z"
          fill={fill}
          stroke-width="1"
        ></path>
        <path
          id="Vector_11"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.57698 21.4596c-0.00663 -0.0849 -0.0467 -0.1636 -0.1114 -0.2189 -0.0647 -0.0554 -0.14873 -0.0827 -0.2336 -0.0761 -0.08487 0.0066 -0.16363 0.0467 -0.21895 0.1114 -0.05532 0.0647 -0.08268 0.1487 -0.07605 0.2336 -0.18004 0.3005 -0.28008 0.6421 -0.29058 0.9922 -0.0105 0.3501 0.06888 0.6971 0.23058 1.0078 -0.0088 0.053 -0.00596 0.1073 0.00833 0.1591 0.01429 0.0517 0.03969 0.0998 0.07442 0.1408 0.03473 0.041 0.07797 0.0739 0.12672 0.0965 0.04874 0.0225 0.10181 0.0342 0.15553 0.0342 0.05372 0 0.10679 -0.0117 0.15553 -0.0342 0.04875 -0.0226 0.09199 -0.0555 0.12672 -0.0965s0.06013 -0.0891 0.07442 -0.1408c0.01429 -0.0518 0.01713 -0.1061 0.00833 -0.1591 0.24 -0.88 0.49 -0.93 -0.03 -2.05Z"
          fill={fill}
          stroke-width="1"
        ></path>
      </g>
    </g>
  </svg>
);

export default List;
