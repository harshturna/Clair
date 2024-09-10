import { rgbToHex } from "@/lib/utils";
import { EllipseLayer } from "@/types/canvas";

interface EllipseProps {
  id: string;
  layer: EllipseLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Ellipse = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: EllipseProps) => {
  const { x, y, width, height, fill } = layer;
  return (
    <ellipse
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      className="drop-shadow-md"
      onPointerDown={(e) => onPointerDown(e, id)}
      cx={width / 2}
      cy={height / 2}
      rx={width / 2}
      ry={height / 2}
      strokeWidth={1}
      fill={fill ? rgbToHex(fill) : "#888"}
      stroke={selectionColor || "transparent"}
    />
  );
};
