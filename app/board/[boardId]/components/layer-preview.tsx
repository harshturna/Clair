"use client";

import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react/suspense";
import { memo } from "react";
import { Square } from "./square";
import { Ellipse } from "./ellipse";
import { Text } from "./text";
import { Note } from "./note";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

export const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));
    if (!layer) return null;

    switch (layer.type) {
      case LayerType.Ellipse:
        return (
          <Ellipse
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Square:
        return (
          <Square
            id={id}
            onPointerDown={onLayerPointerDown}
            layer={layer}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Text:
        return (
          <Text
            id={id}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
            layer={layer}
          />
        );
      case LayerType.Note:
        return (
          <Note
            id={id}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
            layer={layer}
          />
        );
      default:
        console.warn("Unknown layer type");
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";
