import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn, getUser } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
  disabled?: boolean;
}

const NewBoardButton = ({ disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      title: "Untitled",
      userId: getUser() || "",
    })
      .then((id) => {
        toast.success("Board created");
        // router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create the board");
      });
  };

  return (
    <button
      disabled={disabled || pending}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-sky-400 rounded-lg hover:bg-sky-500 flex flex-col items-center justify-center py-6",
        disabled && "opacity-75 hover:bg-sky-500 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New board</p>
    </button>
  );
};

export default NewBoardButton;
