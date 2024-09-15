"use client";
import { widgets } from "@/constants/widgets";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
import { WidgetToolButton } from "./widget-tool-button";

interface SideToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
}

const SideToolbar = ({ canvasState, setCanvasState }: SideToolbarProps) => {
  return (
    <div className="bg-white shadow-md absolute grid grid-cols-3 gap-y-4 top-[86px] px-4 py-4 gap-4 overflow-y-scroll h-[calc(100vh_-_85px)]">
      {widgets.map((widget) => (
        <WidgetToolButton
          key={widget.name}
          width={40}
          height={40}
          label={widget.name}
          icon={widget.element}
          isActive={
            canvasState.mode === CanvasMode.Widget &&
            canvasState.name === widget.name
          }
          onClick={() => {
            setCanvasState({
              mode: CanvasMode.Widget,
              layerType: LayerType.Widget,
              name: widget.name,
            });
          }}
        />
      ))}
    </div>
  );
};

export default SideToolbar;
