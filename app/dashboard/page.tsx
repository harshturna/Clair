"use client";

import { getUser, setUser } from "@/lib/utils";
import BoardList from "./_components/board-list";
import { useSearchParams } from "next/navigation";

const user = getUser();
if (!user) {
  setUser();
}

const DashboardPage = () => {
  const searchParams = useSearchParams();

  const structuredSearchParams = {
    search: searchParams.get("search") || undefined,
    favorites: searchParams.get("favorites") || undefined,
  };
  return (
    <div className=" flex-1 h-[calc(100%-80px)] p-6">
      <BoardList query={structuredSearchParams} />
    </div>
  );
};

export default DashboardPage;
