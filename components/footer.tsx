import { cn } from "@/lib/utils";
import { Hash } from "lucide-react";
import { Playpen_Sans } from "next/font/google";
import Link from "next/link";

const font = Playpen_Sans({ subsets: ["latin"], weight: ["700"] });

const Footer = () => {
  return (
    <div className="p-8 flex items-center gap-2 text-center justify-center">
      <div className="flex items-center gap-1">
        <Hash className="w-10 h-10" />
        <p className={cn("text-3xl", font.className)}>Clair</p>
      </div>
      <div className="text-muted-foreground flex items-center mt-2">
        <Link href="https://harshturna.com" target="_blank">
          by harsh
        </Link>
      </div>
    </div>
  );
};

export default Footer;
