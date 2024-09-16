"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import SearchInput from "./search-input";

const Navbar = () => {
  const { signOut } = useAuthActions();
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <Button onClick={() => void signOut()}>Sign Out</Button>
    </div>
  );
};

export default Navbar;
