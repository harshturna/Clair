import React from "react";

export interface WidgetSvgProps extends React.SVGProps<SVGSVGElement> {
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}
