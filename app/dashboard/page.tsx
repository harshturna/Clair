"use client";

import BoardList from "./_components/board-list";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  return (
    <div className=" flex-1 h-[calc(100%-80px)] p-6">
      <BoardList query={searchParams} />
    </div>
  );
};

export default DashboardPage;
