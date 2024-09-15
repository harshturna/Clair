import { LucideIcon } from "lucide-react";
import { ComponentType, SVGProps } from "react";
import { Button } from "@/components/ui/button";

interface WidgetToolButtonProps {
  label: string;
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  width?: number;
  height?: number;
}

export const WidgetToolButton = ({
  label,
  icon: Icon,
  onClick,
  isActive,
  isDisabled,
  width,
  height,
}: WidgetToolButtonProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <Button
        disabled={isDisabled}
        onClick={onClick}
        size="icon"
        variant={isActive ? "boardActive" : "board"}
        className="w-[50px] h-[50px]"
      >
        <Icon width={width || 24} height={height || 24} strokeWidth="1" />
      </Button>
      <p className="text-[0.65rem]">{label}</p>
    </div>
  );
};
