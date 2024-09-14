import { rgbToHex } from "@/lib/utils";
import { SquareLayer } from "@/types/canvas";
import { Star } from "lucide-react";

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

  // TODO: change back to rect and add for all different types of shapes Konty.app inspiration
  return (
    <>
      {/* <rect
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
    /> */}
      <Star
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
    </>
  );
};
