import { Hash } from "lucide-react";
import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Hash width={"120px"} height={"120px"} />
    </div>
  );
};
