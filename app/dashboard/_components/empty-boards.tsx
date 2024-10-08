"use client";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { Hash } from "lucide-react";
import { getUser } from "@/lib/utils";

export const EmptyBoards = () => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      title: "Untitled",
      userId: getUser() || "",
    })
      .then((id) => {
        toast.success("Board created");
      })
      .catch(() => toast.error("Failed to create a board"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Hash width="120px" height="120px" />
      <h2 className="text-2xl font-semibold mt-6">Crete your first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          {pending ? "Creating board..." : "Create board"}
        </Button>
      </div>
    </div>
  );
};
