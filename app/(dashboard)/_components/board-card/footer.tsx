import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FooterProps {
  isFavorite: boolean;
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  disabled: boolean;
  onClick: () => void;
}

const Footer = ({
  isFavorite,
  title,
  authorLabel,
  createdAtLabel,
  disabled,
  onClick,
}: FooterProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="text-sm truncate max-w-[calc(100% - 20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 text-xs text-muted-foreground truncate">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star
          className={cn("h-4 2-4", isFavorite && "text-blue-600 fill-blue-600")}
        />
      </button>
    </div>
  );
};

export default Footer;
