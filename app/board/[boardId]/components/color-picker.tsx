"use client";

import { rgbToHex } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      <ColorButton
        onClick={onChange}
        color={{
          r: 20,
          g: 184,
          b: 166,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 232,
          g: 121,
          b: 249,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 244,
          g: 63,
          b: 94,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 168,
          g: 85,
          b: 247,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 59,
          g: 130,
          b: 246,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 234,
          g: 88,
          b: 12,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 82,
          g: 82,
          b: 91,
        }}
      />
      <ColorButton
        onClick={onChange}
        color={{
          r: 251,
          g: 191,
          b: 36,
        }}
      />
    </div>
  );
};

export const ColorButton = ({ color, onClick }: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center justify-center flex hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{ background: rgbToHex(color) }}
      />
    </button>
  );
};
