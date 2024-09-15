import {
  AppWindow,
  Calendar,
  CircleUser,
  ClipboardIcon,
  Database,
  File,
  FolderClosed,
  Image,
  Laptop,
  Mail,
  Menu,
  Monitor,
  MousePointer,
  Smartphone,
  ToggleLeft,
  ToggleRight,
  Tv,
  Wifi,
  Youtube,
} from "lucide-react";
import Toast from "./toast";
import Telephone from "./telephone";
import { Browser } from "./browser";

export const widgets = [
  {
    element: MousePointer,
    name: "Mouse Pointer",
    strokeOverflow: true,
  },
  {
    element: ToggleRight,
    name: "Switch Right",
    strokeOverflow: false,
  },
  {
    element: ToggleLeft,
    name: "Switch Left",
    strokeOverflow: false,
  },
  {
    element: Toast,
    name: "Toast",
    strokeOverflow: false,
  },
  {
    element: File,
    name: "Document",
    strokeOverflow: false,
  },
  {
    element: FolderClosed,
    name: "Folder",
    strokeOverflow: false,
  },
  {
    element: Mail,
    name: "Email",
    strokeOverflow: false,
  },
  {
    element: CircleUser,
    name: "User",
    strokeOverflow: false,
  },
  {
    element: Wifi,
    name: "Wifi",
    strokeOverflow: false,
  },
  {
    element: AppWindow,
    name: "App Window",
    strokeOverflow: false,
  },
  {
    element: Image,
    name: "Image",
    strokeOverflow: false,
  },
  {
    element: Youtube,
    name: "Video",
    strokeOverflow: false,
  },
  {
    element: Browser,
    name: "Browser",
    strokeOverflow: false,
  },
  {
    element: Database,
    name: "Database",
    strokeOverflow: false,
  },
  {
    element: ClipboardIcon,
    name: "Clipboard",
    strokeOverflow: false,
  },
  {
    element: Menu,
    name: "Menu",
    strokeOverflow: false,
  },
  {
    element: Smartphone,
    name: "Smartphone",
    strokeOverflow: false,
  },
  {
    element: Telephone,
    name: "Telephone",
    strokeOverflow: false,
  },
  {
    element: Laptop,
    name: "Laptop",
    strokeOverflow: false,
  },
  {
    element: Tv,
    name: "TV",
    strokeOverflow: false,
  },
  {
    element: Monitor,
    name: "Monitor",
    strokeOverflow: false,
  },
  {
    element: Calendar,
    name: "Calendar",
    strokeOverflow: false,
  },
];
