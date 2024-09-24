"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  BookHeart,
  GitBranch,
  Heart,
  PackageCheck,
  Presentation,
} from "lucide-react";
import Image from "next/image";

const components: { title: string; description: string }[] = [
  {
    title: "Brainstorming",
    description:
      "Facilitate remote team ideation sessions with real-time visual collaboration.",
  },
  {
    title: "Project Planning",
    description:
      "Visualize project timelines, tasks, and dependencies using interactive diagrams and icons.",
  },
  {
    title: "UX Design",
    description:
      "Create and iterate on wireframes and user flows collaboratively with stakeholders.",
  },
  {
    title: "Education",
    description:
      "Enhance online learning through interactive visual explanations and group exercises.",
  },
  {
    title: "Strategic Mapping",
    description:
      "Develop and refine business strategies using shared mind maps and flowcharts.",
  },
  {
    title: "Remote Workshops",
    description:
      "Conduct engaging virtual workshops with interactive visual aids and group activities.",
  },
];

export function Menu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem className="cursor-default">
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent className="cursor-default">
            <div className="flex cursor-default">
              <ul className="grid  p-4 md:w-[500px]  lg:w-[500px] hover:cursor-pointer border-r cursor-default">
                <div className="flex items-center gap-3 hover:bg-gray-400/10 p-1 rounded-sm mb-2 cursor-default">
                  <Presentation className="w-8 h-8 mr-2 text-red-600" />
                  <div>
                    <a>Whiteboard</a>
                    <p className="text-gray-400 text-sm font-light">
                      Visualize your ideas instantly
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 hover:bg-gray-400/10 p-1 rounded-sm mb-2 cursor-default">
                  <PackageCheck className="w-8 h-8 mr-2 text-blue-600" />
                  <div>
                    <a>Pre-built Components</a>
                    <p className="text-gray-400 text-sm font-light">
                      Accelerate workflow with ready-made elements
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 hover:bg-gray-400/10 p-1 rounded-sm mb-2 cursor-default">
                  <BookHeart className="w-8 h-8 text-2xl mr-2 text-yellow-600" />
                  <div>
                    <a>Real-time Collaboration</a>
                    <p className="text-gray-400 text-sm font-light">
                      Work together seamlessly from anywhere
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 hover:bg-gray-400/10 p-1 rounded-sm mb-2 cursor-default">
                  <GitBranch className="w-8 h-8 text-2xl mr-2 text-purple-600" />
                  <div>
                    <a>Version History</a>
                    <p className="text-gray-400 text-sm font-light">
                      Track changes and revert with ease
                    </p>
                  </div>
                </div>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Use Cases</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-[600px] mx-auto">
              <div>
                <p
                  className={cn(
                    "mt-2 text-md font-semibold text-center text-sky-500"
                  )}
                >
                  Clair is completely free, for your team from ours
                </p>
              </div>
              <Image
                src="/assets/free.svg"
                alt="Free section image"
                width={1000}
                height={1000}
                className="w-80 pt-10 mx-auto"
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </li>
  );
});
ListItem.displayName = "ListItem";
