"use client";

import { getUser, setUser } from "@/lib/utils";
import BoardList from "./_components/board-list";
import { useSearchParams } from "next/navigation";

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
  const testSearchParams = useSearchParams();
  console.log("SEARCH PARAMS FROM PROPS:", searchParams);
  console.log("SEARCH PARAMS FROM HOOK", Object.fromEntries(testSearchParams));
  return (
    <div className=" flex-1 h-[calc(100%-80px)] p-6">
      <BoardList query={searchParams} />
    </div>
  );
};

export default DashboardPage;
