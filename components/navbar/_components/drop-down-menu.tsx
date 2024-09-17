import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  BarChart,
  Building2,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  ScreenShare,
  Users,
  UserPlus,
  ArrowRight,
  Presentation,
  PackageCheck,
  BookHeart,
  GitBranch,
} from "lucide-react";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="w-screen h-screen bg-white  px-4 items-center justify-center absolute  right-0 xl:hidden">
      <Accordion
        defaultValue="item-1"
        className="pl-2"
        type="single"
        collapsible
      >
        <AccordionItem className="mt-6 border-b" value="item-1">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent defaultValue="item-1" className="space-y-2">
            <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm mb-2 cursor-default">
              <Presentation className="h-8 w-8 mr-4 text-red-600" />
              <div>
                <a>Whiteboard</a>
                <p className="text-gray-400 text-sm font-light">
                  Visualize your ideas instantly
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm mb-2 cursor-default">
              <PackageCheck className="h-8 w-8 mr-4 text-blue-600" />

              <div>
                <a>Pre-built Components</a>
                <p className="text-gray-400 text-sm font-light">
                  Accelerate workflow with ready-made elements
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm mb-2 cursor-default">
              <BookHeart className="h-8 w-8 mr-4 text-yellow-600" />
              <div>
                <a>Real-time Collaboration</a>
                <p className="text-gray-400 text-sm font-light">
                  Work together seamlessly from anywhere
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm mb-2 cursor-default">
              <GitBranch className="h-8 w-8 mr-4 text-purple-600" />

              <div>
                <a>Version History</a>
                <p className="text-gray-400 text-sm font-light">
                  Track changes and revert with ease
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className=" border-b" value="item-2">
          <AccordionTrigger>Use Cases</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-md">Brainstorming</h3>
                <p className="text-muted-foreground">
                  Facilitate remote team ideation sessions with real-time visual
                  collaboration.
                </p>
              </div>
              <div>
                <h3 className="text-md">Project Planning</h3>
                <p className="text-muted-foreground">
                  Visualize project timelines, tasks, and dependencies using
                  interactive diagrams and icons.
                </p>
              </div>
              <div>
                <h3 className="text-md">UX Design</h3>
                <p className="text-muted-foreground">
                  Create and iterate on wireframes and user flows
                  collaboratively with stakeholders.
                </p>
              </div>
              <div>
                <h3 className="text-md">Education</h3>
                <p className="text-muted-foreground">
                  Enhance online learning through interactive visual
                  explanations and group exercises.
                </p>
              </div>
              <div>
                <h3 className="text-md">Strategic Mapping</h3>
                <p className="text-muted-foreground">
                  Develop and refine business strategies using shared mind maps
                  and flowcharts.
                </p>
              </div>
              <div>
                <h3 className="text-md">Remote Workshops</h3>
                <p className="text-muted-foreground">
                  Conduct engaging virtual workshops with interactive visual
                  aids and group activities.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className=" border-b" value="item-3">
          <AccordionTrigger>Pricing</AccordionTrigger>
          <AccordionContent className="space-y-2">
            Clair is completely free :)
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="pt-12">
        <div className="  space-y-4 flex flex-col px-4">
          <Link href={"/dashboard"}>
            <Button className="w-full">Try Clair</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
