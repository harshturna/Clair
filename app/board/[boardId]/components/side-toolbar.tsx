"use client";

import {
  AppWindowMac,
  Braces,
  Brackets,
  Calendar,
  Database,
  Laptop,
  Monitor,
  MousePointer,
  Smartphone,
  ToggleLeft,
  ToggleRight,
  Tv,
  Youtube,
} from "lucide-react";
import { ToolButton } from "./tool-button";

const sideWidgets = [
  {
    element: Smartphone,
    name: "Phone",
  },
  {
    element: Laptop,
    name: "Laptop",
  },
  {
    element: Tv,
    name: "TV",
  },
  {
    element: Monitor,
    name: "Monitor",
  },
  {
    element: AppWindowMac,
    name: "Browser",
  },
  {
    element: Youtube,
    name: "Video",
  },
  {
    element: Database,
    name: "Database",
  },
  {
    element: MousePointer,
    name: "Mouse Pointer",
  },
  {
    element: Braces,
    name: "Braces",
  },
  {
    element: Brackets,
    name: "Brackets",
  },
  {
    element: Calendar,
    name: "Calendar",
  },
  {
    element: ToggleRight,
    name: "Switch Right",
  },
  {
    element: ToggleLeft,
    name: "Switch Left",
  },
];

const SideToolbar = () => {
  return (
    <div className="bg-white  shadow-md absolute grid grid-cols-3 bottom-0 top-[86px] p-2">
      {sideWidgets.map((widget) => (
        <ToolButton
          key={widget.name}
          width={40}
          height={40}
          label={widget.name}
          icon={widget.element}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};

export default SideToolbar;
