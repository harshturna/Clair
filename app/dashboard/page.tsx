"use client";

import { getUser, setUser } from "@/lib/utils";
import BoardList from "./_components/board-list";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const user = getUser();
if (!user) {
  setUser();
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  console.log("SEARCH PARAMS:", searchParams);
  return (
    <div className=" flex-1 h-[calc(100%-80px)] p-6">
      <BoardList query={searchParams} />
    </div>
  );
};

export default DashboardPage;
