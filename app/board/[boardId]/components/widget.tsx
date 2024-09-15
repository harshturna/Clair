import { getContrastingTextColor, rgbToHex } from "@/lib/utils";
import { WidgetLayer } from "@/types/canvas";
import { widgets } from "@/constants/widgets";

interface WidgetProps {
  id: string;
  layer: WidgetLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Widget = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: WidgetProps) => {
  const { x, y, width, height, fill, name } = layer;

  const widget = widgets.find((widget) => widget.name === name);

  if (!widget) return null;

  const WidgetComponent = widget.element;

  return (
    <WidgetComponent
      className="bg-neutral-100"
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      x={x}
      y={y}
      width={width}
      height={height}
      strokeWidth={0.25}
      fill={fill ? rgbToHex(fill) : "#888"}
      stroke={widget.strokeOverflow ? "#000" : getContrastingTextColor(fill)}
    />
  );
};
