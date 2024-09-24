import { WidgetSvgProps } from "@/types/widget-svg";
import React from "react";

const Hash: React.FC<WidgetSvgProps> = ({
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
      d="M23.565 6.36468c-1.6077 -0.17975 -3.2055 -0.39944 -4.8132 -0.54923 -0.5492 -0.05991 -1.1084 -0.09986 -1.6577 -0.12981l0.1598 -1.82743c0 -0.6391 0.0599 -1.37806 0.1398 -2.07708 0.0363 -0.43427 0.1338 -0.861236 0.2896 -1.268215 0.0233 -0.042048 0.0374 -0.088563 0.0414 -0.136469 0.0039 -0.047905 -0.0023 -0.096109 -0.0183 -0.141421 -0.0161 -0.045312 -0.0416 -0.0867 -0.0748 -0.121425 -0.0333 -0.0347259 -0.0735 -0.0619972 -0.1181 -0.0800101 -0.0404 -0.0197972 -0.0844 -0.03110433 -0.1294 -0.033224175 -0.0449 -0.002119845 -0.0899 0.004992545 -0.132 0.020898575 -0.0421 0.015906 -0.0805 0.0402685 -0.1128 0.0715851 -0.0323 0.0313166 -0.0579 0.0689236 -0.0751 0.1105016 -0.2073 0.45511 -0.355 0.935069 -0.4394 1.427989 -0.1298 0.709 -0.1897 1.44796 -0.2896 2.08706l-0.3395 1.93728h-0.5592c-1.9173 0 -3.6249 0.12982 -5.2526 0.25963 -1.10848 0.10985 -2.17698 0.18974 -3.36531 0.25964l0.34951 -3.43517c0.03226 -0.63966 0.01222 -1.2809 -0.05992 -1.9173C7.09744 0.725534 7.054 0.635137 6.98503 0.566166 6.91606 0.497195 6.82566 0.453762 6.72872 0.443014c-0.07011 -0.004748 -0.1399 0.013039 -0.19919 0.050766 -0.05928 0.037726 -0.10496 0.093416 -0.13035 0.158939 -0.00827 0.093018 -0.00827 0.186588 0 0.279606 -0.2097 0.119835 0 1.308155 0 1.677635l-0.68903 3.61492h-0.64909c-1.47658 0.00733 -2.95174 -0.09279 -4.413785 -0.29958 -0.088703 -0.01443 -0.179508 0.0069 -0.25251 0.05932 -0.073003 0.05241 -0.122248 0.13163 -0.136942 0.22029 -0.014906 0.08846 0.004771 0.17926 0.05496 0.25361 0.050188 0.07436 0.127045 0.12657 0.214661 0.14582 1.643356 0.35325 3.313626 0.56704 4.992976 0.6391l-0.09986 0.59916 -0.9986 5.8518 -1.30816 0.0599c-0.91628 0.0338 -1.82985 0.1205 -2.736145 0.2596 -0.088494 0.0124 -0.168526 0.0592 -0.222739 0.1303 -0.054212 0.071 -0.0782334 0.1606 -0.066854 0.2492 0.012458 0.0892 0.058879 0.1702 0.129579 0.226 0.0707 0.0558 0.16022 0.0821 0.249887 0.0736 0.663482 -0.0688 1.330162 -0.1021 1.997192 -0.0999h1.79747l-0.47933 3.0158c-0.21969 1.1783 -0.47932 2.3566 -0.6391 3.555 -0.1081 0.8107 -0.15151 1.6288 -0.12982 2.4465 0 0.1033 0.04104 0.2024 0.11407 0.2754 0.07304 0.073 0.1721 0.1141 0.27539 0.1141 0.05151 0.0013 0.10277 -0.0078 0.15064 -0.0269 0.04788 -0.0191 0.09136 -0.0477 0.1278 -0.0841 0.03644 -0.0365 0.06508 -0.08 0.08416 -0.1278 0.01909 -0.0479 0.02822 -0.0992 0.02685 -0.1507 0.00805 -0.7737 0.08155 -1.5454 0.21969 -2.3067 0.22968 -1.1684 0.54923 -2.3168 0.82883 -3.4652 0.27961 -1.1483 0.46934 -2.0671 0.68903 -3.1056l1.67764 0.0599c1.57778 0 3.14556 0 4.72336 -0.0998l2.1869 -0.1199h0.4194c-0.5093 2.5165 -1.0485 4.993 -1.5678 7.5394 -0.0118 0.0499 -0.0138 0.1015 -0.0056 0.1521 0.0081 0.0506 0.0261 0.0991 0.053 0.1427 0.0269 0.0436 0.0622 0.0814 0.1037 0.1114 0.0416 0.03 0.0887 0.0514 0.1385 0.0632 0.0492 0.0117 0.1003 0.0135 0.1502 0.0053 0.0499 -0.0083 0.0977 -0.0264 0.1405 -0.0534 0.0428 -0.027 0.0798 -0.0622 0.1087 -0.1037 0.029 -0.0415 0.0494 -0.0884 0.06 -0.1378 0.699 -2.5964 1.4779 -5.1428 2.087 -7.7491 0.0013 -0.0233 0.0013 -0.0466 0 -0.0699 2.3368 -0.1698 4.6835 -0.3396 6.9902 -0.4095 0.1033 0 0.2024 -0.041 0.2754 -0.114 0.073 -0.0731 0.1141 -0.1721 0.1141 -0.2754 0 -0.1033 -0.0411 -0.2024 -0.1141 -0.2754 -0.073 -0.073 -0.1721 -0.1141 -0.2754 -0.1141 -2.2768 -0.0599 -4.5336 -0.0499 -6.8004 0 0.2796 -1.3281 0.5192 -2.6762 0.699 -4.04427l0.2996 -2.4166h1.6876c1.6077 0.05992 3.2055 0.19972 4.8232 0.27961 0.0501 0.00551 0.1009 0.0007 0.1491 -0.01413 0.0482 -0.01484 0.0928 -0.03938 0.1312 -0.07212 0.0383 -0.03275 0.0696 -0.07299 0.0918 -0.11827 0.0222 -0.04527 0.0349 -0.09462 0.0373 -0.14499 0.0029 -0.09737 -0.0318 -0.19211 -0.0969 -0.2646 -0.065 -0.0725 -0.1555 -0.1172 -0.2526 -0.12485Zm-8.0586 2.65626c-0.1698 1.42796 -0.4294 2.83606 -0.709 4.23406 -1.2283 0 -2.4566 0.0799 -3.6948 0.1398 -1.23829 0.0599 -2.59638 0.1498 -3.89456 0.1997l-1.43797 0.0499c0 -0.2396 0.09986 -0.4693 0.1398 -0.709 0.29958 -1.6377 0.52926 -3.29533 0.72897 -4.94301l0.06991 -0.72897c1.15837 0 2.28678 0 3.46515 -0.08988 1.6576 -0.09986 3.3752 -0.2796 5.3325 -0.33952h0.3395l-0.3395 2.18692Z"
      clip-rule="evenodd"
      stroke-width="1"
    ></path>
  </svg>
);

export default Hash;
