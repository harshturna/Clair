import { Hint } from "@/components/hint";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  backgroundColor?: string;
}

export const UserAvatar = ({
  src,
  name,
  fallback,
  backgroundColor,
}: UserAvatarProps) => {
  return (
    <Hint label={name || "Anonymous frog"} sideOffset={18}>
      <Avatar className="h-8 w-8" style={{ backgroundColor }}>
        <AvatarImage src={src} />
        <AvatarFallback
          className="text-xs font-semibold"
          style={{ backgroundColor, color: "#fff" }}
        >
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
};
