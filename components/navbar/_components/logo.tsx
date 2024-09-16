import { Hash } from "lucide-react";
import Link from "next/link";
import { Playpen_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Playpen_Sans({
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <>
      <Link href={"/"} className="mx-4 flex items-center gap-1 text-2xl">
        <Hash className="w-8 h-8" />
        <p className={cn("font-semibold", font.className)}>Clair</p>
      </Link>
    </>
  );
};

export default Logo;
