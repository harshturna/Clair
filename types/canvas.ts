export type CanvasState =
  | { mode: CanvasMode.None }
  | { mode: CanvasMode.Pressing; origin: Point }
  | {
      mode: CanvasMode.Inserting;
      layerType:
        | LayerType.Ellipse
        | LayerType.Note
        | LayerType.Text
        | LayerType.Square;
    }
  | { mode: CanvasMode.Widget; layerType: LayerType.Widget; name: string }
  | { mode: CanvasMode.Resizing; initialBounds: XYWH; corner: Side }
  | { mode: CanvasMode.Translating; current: Point }
  | { mode: CanvasMode.SelectionNet; origin: Point; current?: Point }
  | { mode: CanvasMode.Pencil };

export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil,
  Widget,
}

export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Camera = {
  x: number;
  y: number;
};

export enum LayerType {
  Square,
  Ellipse,
  Path,
  Text,
  Note,
  Widget,
}

export type SquareLayer = {
  type: LayerType.Square;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
  name: string;
};

export type WidgetLayer = {
  type: LayerType.Widget;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  name: string;
  value?: string;
};

export type EllipseLayer = {
  type: LayerType.Ellipse;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
  name: string;
};

export type PathLayer = {
  type: LayerType.Path;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  points: number[][];
  value?: string;
  name: string;
};

export type TextLayer = {
  type: LayerType.Text;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
  name: string;
};

export type NoteLayer = {
  type: LayerType.Note;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
  name: string;
};

export type Point = {
  x: number;
  y: number;
};

export type XYWH = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export enum Side {
  Top = 1,
  Bottom = 2,
  Left = 4,
  Right = 8,
}

export type Layer =
  | SquareLayer
  | WidgetLayer
  | EllipseLayer
  | PathLayer
  | TextLayer
  | NoteLayer;
