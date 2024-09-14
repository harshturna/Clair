"use client";

import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { useAuth } from "@clerk/nextjs";

import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import Overlay from "./overlay";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "@/components/actions";
import { toast } from "sonner";

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  isFavorite: boolean;
}

export const BoardCard = ({ ...props }: BoardCardProps) => {
  const { userId } = useAuth();
  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(
    api.board.favorite
  );
  const { mutate: onUnfavorite, pending: pendingUnfavorite } = useApiMutation(
    api.board.unfavorite
  );

  const toggleFavorite = () => {
    if (props.isFavorite) {
      onUnfavorite({ id: props.id }).catch(() =>
        toast.error("Failed to unfavorite")
      );
    } else {
      onFavorite({ id: props.id }).catch(() =>
        toast.error("Failed to favorite ")
      );
    }
  };

  const authorLabel = userId === props.authorId ? "You" : props.authorName;
  const createdAtLabel = formatDistanceToNow(props.createdAt, {
    addSuffix: true,
  });

  return (
    <Link href={`/board/${props.id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image
            src={props.imageUrl}
            alt={props.title}
            fill
            className="object-fit"
          />
          <Overlay />
          <Actions id={props.id} title={props.title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={props.isFavorite}
          title={props.title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          disabled={pendingFavorite || pendingUnfavorite}
          onClick={toggleFavorite}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg justify-between overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
