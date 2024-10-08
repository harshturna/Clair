"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Playpen_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Hint } from "@/components/hint";
import { useRenameModal } from "@/store/use-rename-modal";
import { Actions } from "@/components/actions";
import { Hash, Menu } from "lucide-react";
import TabSeparator from "@/components/tab-separator";

interface InfoProps {
  boardId: string;
}

const font = Playpen_Sans({
  subsets: ["latin"],
  weight: ["600"],
});

const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();
  const data = useQuery(api.board.get, { id: boardId as Id<"boards"> });

  if (!data) return;

  return (
    <div className="rounded-md px-1.5 h-12 flex items-center">
      <Hint label="View all boards" sideOffset={10}>
        <Button asChild className="px-2" variant="board">
          <Link href="/dashboard">
            <Hash className="w-8 h-8" />
            <span
              className={cn(
                "font-semibold text-xl ml-1 text-black",
                font.className
              )}
            >
              Clair
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label="Edit board name" sideOffset={10}>
        <Button
          variant="board"
          className="text-base font-normal px-2"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeparator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffSet={10}>
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button variant="board" size="icon">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export default Info;
