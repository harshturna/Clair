"use client";

import React, { useState } from "react";
import { useQuery } from "convex/react";

import { Button } from "@/components/ui/button";

import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";
import { api } from "@/convex/_generated/api";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const currentUserId = useQuery(api.user.getCurrentUser)?._id;

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="pr-2">
      <div className=" items-center justify-center flex ">
        <div className="flex xl:space-x-4"></div>
        <div className="flex lg:space-x-4 items-center pr-4">
          <Link href={"/dashboard"}>
            <Button className="hidden lg:block">
              {currentUserId ? "View Dashboard" : "Login"}
            </Button>
          </Link>
        </div>
      </div>

      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="
        
             rounded-full
             xl:hidden
             "
        >
          <X className="h-5 w-5  items-center justify-center rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div onClick={toggleDropdown} className="flex lg:hidden">
          <AlignJustify className="h-6 w-6 items-center justify-center mr-2" />
        </div>
      )}

      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
    </div>
  );
};

export default ActionButtons;
