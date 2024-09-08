import { rgbToHex } from "@/lib/utils";
import { SquareLayer } from "@/types/canvas";

interface SquareProps {
  id: string;
  layer: SquareLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Square = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: SquareProps) => {
  const { x, y, width, height, fill } = layer;

  return (
    <rect
      className="drop-shadow-md"
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        transform: `translate(${x}px), ${y}px)`,
      }}
      x={x}
      y={y}
      width={width}
      height={height}
      strokeWidth={1}
      fill={fill ? rgbToHex(fill) : "#888"}
      stroke={selectionColor || "transparent"}
    />
  );
};
