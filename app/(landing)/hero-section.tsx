"use client";

import { Button } from "@/components/ui/button";
import { Playpen_Sans } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const font = Playpen_Sans({ subsets: ["latin"], weight: ["500", "700"] });

const HeroSection = () => {
  return (
    <div className="md:items-center flex flex-col ">
      <div
        className={cn(
          "font-medium lg:px-0 px-8 text-3xl md:text-4xl xl:text-5xl xl:font-medium xl:pt-14 text-center pt-6 text-sky-500",
          font.className
        )}
      >
        Draw, write, and collaborate
      </div>

      <p
        className={cn(
          "text-md md:text-lg xl:text-2xl pt-4 text-center w-2/3 mx-auto text-slate-400",
          font.className
        )}
      >
        Visualizing and communicating your ideas has never been this fun and
        beautiful
      </p>

      <div className="flex gap-4 pt-6 items-center justify-center">
        <Link href="/dashboard">
          <Button className="py-3 px-6 md:py-4 md:px-10">
            <div className="flex items-center justify-center gap-1">
              <div className="text-xs sm:text-sm md:text-md">Try Clair</div>
              <div>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Button>
        </Link>
      </div>

      <div className="pt-5 xl:pt-10 items-center justify-center">
        <img
          src="/assets/hero.png"
          alt="hero image"
          width={800}
          height={800}
          className="flex items-center justify-center mx-auto border border-slate-200 rounded-md w-[400px] sm:w-[500px] md:w-[700px] lg:w-[1000px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
