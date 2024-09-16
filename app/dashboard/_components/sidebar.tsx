"use client";

import Link from "next/link";
import Image from "next/image";
import { Playpen_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Hash, LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";

const font = Playpen_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

const Sidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 ">
      <Link href="/">
        <div className="flex items-center gap-1">
          <Hash width="40px" height="40px" />
          <span className={cn("font-semibold text-2xl", font.className)}>
            Clair
          </span>
        </div>
      </Link>
      <div className="space-y-1 w-full">
        <Button
          variant={favorites ? "ghost" : "secondary"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href="/dashboard">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            All boards
          </Link>
        </Button>
        <Button
          variant={!favorites ? "ghost" : "secondary"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link
            href={{
              pathname: "/dashboard",
              query: { favorites: true },
            }}
          >
            <Star className="h-4 w-4 mr-2" />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
