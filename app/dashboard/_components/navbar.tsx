"use client";

import { Button } from "@/components/ui/button";
import SearchInput from "./search-input";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden sm:block">
        <SearchInput />
      </div>
    </div>
  );
};

export default Navbar;
