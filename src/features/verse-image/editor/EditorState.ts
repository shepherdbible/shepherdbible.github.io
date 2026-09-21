export type VerseImageElementType = "text" | "image" | "shape";

export interface VerseImageElement {
  id: string;
  type: VerseImageElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number; // in degrees
  opacity: number; // 0 to 1
}

export interface TextElement extends VerseImageElement {
  type: "text";
  text: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: string; // '400', '600', '700', 'bold', etc.
  fontStyle: "normal" | "italic";
  textAlign: "left" | "center" | "right";
  color: string;
  letterSpacing: number; // in px
  lineHeight: number; // multiplier, e.g. 1.2, 1.5
  shadowColor: string;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
  outlineColor: string;
  outlineWidth: number;
  isVerseText?: boolean;
  isReference?: boolean;
}

export interface ShapeElement extends VerseImageElement {
  type: "shape";
  shapeType: "rectangle" | "circle" | "line" | "divider";
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
}

export interface ImageElement extends VerseImageElement {
  type: "image";
  src: string;
  aspectRatio: number;
}

export interface BackgroundGradient {
  type: "linear" | "radial";
  colors: string[];
  angle: number; // linear gradient angle in degrees
}

export type BackgroundType = "solid" | "gradient" | "image";

export interface BackgroundConfig {
  type: BackgroundType;
  color: string;
  gradient: BackgroundGradient;
  imageUrl?: string;
  imageOpacity: number;
  overlayColor: string;
  overlayOpacity: number;
  blur: number; // blur in px
}

export type CanvasPreset = "square" | "portrait" | "landscape" | "story" | "custom";

export interface VerseImageState {
  width: number;
  height: number;
  padding: number;
  preset: CanvasPreset;
  background: BackgroundConfig;
  elements: (TextElement | ShapeElement | ImageElement)[];
  selected_element_id: string | null;
}

export function createDefaultState(): VerseImageState {
  const verseTextId = "elem_verse_text";
  const refTextId = "elem_verse_ref";

  return {
    width: 1080,
    height: 1080,
    padding: 60,
    preset: "square",
    background: {
      type: "gradient",
      color: "#2C1B18",
      gradient: {
        type: "linear",
        colors: ["#3D1E18", "#1A0B08"],
        angle: 135
      },
      imageOpacity: 1,
      overlayColor: "#000000",
      overlayOpacity: 0.2,
      blur: 0
    },
    elements: [
      {
        id: verseTextId,
        type: "text",
        text: "“For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.”",
        fontFamily: "Merriweather",
        fontSize: 42,
        fontWeight: "400",
        fontStyle: "italic",
        textAlign: "center",
        color: "#FAF7F2",
        letterSpacing: 0,
        lineHeight: 1.4,
        shadowColor: "rgba(0, 0, 0, 0.4)",
        shadowBlur: 8,
        shadowOffsetX: 2,
        shadowOffsetY: 4,
        outlineColor: "transparent",
        outlineWidth: 0,
        x: 90,
        y: 360,
        width: 900,
        height: 300,
        rotation: 0,
        opacity: 1,
        isVerseText: true
      },
      {
        id: refTextId,
        type: "text",
        text: "JOHN 3:16",
        fontFamily: "Montserrat",
        fontSize: 26,
        fontWeight: "600",
        fontStyle: "normal",
        textAlign: "center",
        color: "#D4AF37",
        letterSpacing: 4,
        lineHeight: 1.2,
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowBlur: 4,
        shadowOffsetX: 1,
        shadowOffsetY: 2,
        outlineColor: "transparent",
        outlineWidth: 0,
        x: 90,
        y: 720,
        width: 900,
        height: 60,
        rotation: 0,
        opacity: 1,
        isReference: true
      }
    ],
    selected_element_id: verseTextId
  };
}