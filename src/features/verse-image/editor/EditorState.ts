export type VerseImageElementType = "text" | "image" | "shape";

/**
 * Base element shared by text, image, and shape elements.
 */
export interface VerseImageElement {
  id: string;
  type: VerseImageElementType;

  x: number;
  y: number;
  width: number;
  height: number;

  rotation: number; // degrees
  opacity: number; // 0 to 1
}

/**
 * Text gradient configuration.
 */
export interface TextGradient {
  type: "linear" | "radial";
  colors: string[];
  angle: number; // degrees, used by linear gradients
}

/**
 * Text transformation.
 */
export type TextTransform =
  | "none"
  | "uppercase"
  | "lowercase"
  | "capitalize";

/**
 * Vertical text alignment.
 */
export type TextVerticalAlign =
  | "top"
  | "middle"
  | "bottom";

/**
 * Text element.
 *
 * This supports normal typography plus:
 * - outline
 * - shadow
 * - glow
 * - gradient text
 * - text background/highlight
 * - blur
 * - padding
 */
export interface TextElement extends VerseImageElement {
  type: "text";

  // Content
  text: string;

  // Typography
  fontFamily: string;
  fontSize: number;
  fontWeight: string; // "400", "600", "700", "bold", etc.
  fontStyle: "normal" | "italic";

  textAlign: "left" | "center" | "right";
  verticalAlign?: TextVerticalAlign;

  letterSpacing: number; // px
  lineHeight: number; // multiplier, e.g. 1.2, 1.5

  textTransform?: TextTransform;

  // Text color
  color: string;

  // Text gradient
  gradient?: TextGradient;

  // Outline / stroke
  outlineColor: string;
  outlineWidth: number;

  // Drop shadow
  shadowColor: string;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;

  // Glow
  glowColor?: string;
  glowBlur?: number;
  glowIntensity?: number;

  // Text background / highlight
  backgroundColor?: string;
  backgroundRadius?: number;
  padding?: number;

  // Text blur
  blur?: number;

  // Special element roles
  isVerseText?: boolean;
  isReference?: boolean;
}

/**
 * Shape element.
 */
export interface ShapeElement extends VerseImageElement {
  type: "shape";

  shapeType:
    | "rectangle"
    | "circle"
    | "line"
    | "divider";

  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
}

/**
 * Image element.
 */
export interface ImageElement extends VerseImageElement {
  type: "image";

  src: string;
  aspectRatio: number;
}

/**
 * Background gradient configuration.
 */
export interface BackgroundGradient {
  type: "linear" | "radial";
  colors: string[];
  angle: number; // linear gradient angle in degrees
}

/**
 * Background types.
 */
export type BackgroundType =
  | "solid"
  | "gradient"
  | "image";

/**
 * Canvas background configuration.
 */
export interface BackgroundConfig {
  type: BackgroundType;

  // Solid background
  color: string;

  // Gradient background
  gradient: BackgroundGradient;

  // Background image
  imageUrl?: string;
  imageOpacity: number;

  // Overlay
  overlayColor: string;
  overlayOpacity: number;

  // Background blur
  blur: number;
}

/**
 * Canvas size presets.
 */
export type CanvasPreset =
  | "square"
  | "portrait"
  | "landscape"
  | "story"
  | "custom";

/**
 * Complete verse image editor state.
 */
export interface VerseImageState {
  width: number;
  height: number;

  /**
   * Default safe area around the canvas.
   */
  padding: number;

  /**
   * Currently selected canvas preset.
   */
  preset: CanvasPreset;

  /**
   * Canvas background.
   */
  background: BackgroundConfig;

  /**
   * All canvas elements.
   */
  elements: (
    | TextElement
    | ShapeElement
    | ImageElement
  )[];

  /**
   * Currently selected element.
   */
  selected_element_id: string | null;
}

/**
 * Creates the default editor state.
 */
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
        colors: [
          "#3D1E18",
          "#1A0B08"
        ],
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

        text:
          "“For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.”",

        // Typography
        fontFamily: "Merriweather",
        fontSize: 42,
        fontWeight: "400",
        fontStyle: "italic",

        textAlign: "center",
        verticalAlign: "middle",

        letterSpacing: 0,
        lineHeight: 1.4,

        textTransform: "none",

        // Color
        color: "#FAF7F2",

        // Gradient disabled by default
        gradient: {
          type: "linear",
          colors: [
            "#FAF7F2",
            "#FAF7F2"
          ],
          angle: 90
        },

        // Outline
        outlineColor: "transparent",
        outlineWidth: 0,

        // Shadow
        shadowColor: "rgba(0, 0, 0, 0.4)",
        shadowBlur: 8,
        shadowOffsetX: 2,
        shadowOffsetY: 4,

        // Glow
        glowColor: "transparent",
        glowBlur: 0,
        glowIntensity: 0,

        // Text background
        backgroundColor: "transparent",
        backgroundRadius: 0,
        padding: 0,

        // Text blur
        blur: 0,

        // Position / size
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

        // Typography
        fontFamily: "Montserrat",
        fontSize: 26,
        fontWeight: "600",
        fontStyle: "normal",

        textAlign: "center",
        verticalAlign: "middle",

        letterSpacing: 4,
        lineHeight: 1.2,

        textTransform: "uppercase",

        // Color
        color: "#D4AF37",

        // Gradient disabled
        gradient: {
          type: "linear",
          colors: [
            "#D4AF37",
            "#D4AF37"
          ],
          angle: 90
        },

        // Outline
        outlineColor: "transparent",
        outlineWidth: 0,

        // Shadow
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowBlur: 4,
        shadowOffsetX: 1,
        shadowOffsetY: 2,

        // Glow
        glowColor: "transparent",
        glowBlur: 0,
        glowIntensity: 0,

        // Text background
        backgroundColor: "transparent",
        backgroundRadius: 0,
        padding: 0,

        // Text blur
        blur: 0,

        // Position / size
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