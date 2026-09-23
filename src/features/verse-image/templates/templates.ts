import type { VerseImageState, TextElement } from "../editor/EditorState";

export interface VerseTemplate {
  id: string;
  name: string;
  description: string;

  presetState: Partial<VerseImageState>;

  /**
   * Optional text styling applied to existing text elements.
   */
  textStyle?: Partial<TextElement>;

  /**
   * Optional reference styling.
   */
  referenceStyle?: Partial<TextElement>;
}
export const TEMPLATES: VerseTemplate[] = [
  {
    id: "classic",
    name: "Classic Shepherd",
    description:
      "Rich burgundy with warm gold accents and traditional serif typography.",

    presetState: {
      background: {
        type: "gradient",
        color: "#2C1B18",
        gradient: {
          type: "linear",
          colors: ["#4A241B", "#160A07"],
          angle: 135,
        },
        imageOpacity: 1,
        overlayColor: "#000000",
        overlayOpacity: 0.22,
        blur: 0,
      },
    },

    textStyle: {
      fontFamily: "Merriweather",
      fontSize: 42,
      fontWeight: "400",
      fontStyle: "italic",
      textAlign: "center",
      verticalAlign: "middle",
      color: "#FAF7F2",
      letterSpacing: 0,
      lineHeight: 1.4,

      outlineColor: "transparent",
      outlineWidth: 0,

      shadowColor: "rgba(0,0,0,0.45)",
      shadowBlur: 10,
      shadowOffsetX: 2,
      shadowOffsetY: 4,

      glowColor: "transparent",
      glowBlur: 0,
      glowIntensity: 0,

      backgroundColor: "transparent",
      backgroundRadius: 0,
      padding: 0,

      blur: 0,
    },

    referenceStyle: {
      fontFamily: "Montserrat",
      fontSize: 26,
      fontWeight: "600",
      fontStyle: "normal",
      textAlign: "center",
      color: "#D4AF37",
      letterSpacing: 4,
      lineHeight: 1.2,
    },
  },

  {
    id: "midnight-glow",
    name: "Midnight Scripture",
    description:
      "Deep midnight background with bright scripture and a subtle atmospheric glow.",

    presetState: {
      background: {
        type: "gradient",
        color: "#080B12",
        gradient: {
          type: "radial",
          colors: ["#20283A", "#05070C"],
          angle: 0,
        },
        imageOpacity: 1,
        overlayColor: "#000000",
        overlayOpacity: 0.15,
        blur: 0,
      },
    },

    textStyle: {
      fontFamily: "Merriweather",
      fontSize: 44,
      fontWeight: "400",
      fontStyle: "normal",
      textAlign: "center",
      verticalAlign: "middle",

      color: "#FFFFFF",

      shadowColor: "rgba(0,0,0,0.6)",
      shadowBlur: 12,
      shadowOffsetX: 0,
      shadowOffsetY: 4,

      glowColor: "#B9D8FF",
      glowBlur: 18,
      glowIntensity: 0.7,

      outlineColor: "transparent",
      outlineWidth: 0,

      letterSpacing: 0,
      lineHeight: 1.45,

      backgroundColor: "transparent",
      backgroundRadius: 0,
      padding: 0,

      blur: 0,
    },

    referenceStyle: {
      fontFamily: "Montserrat",
      fontSize: 24,
      fontWeight: "600",
      color: "#B9D8FF",
      letterSpacing: 4,
      textAlign: "center",
    },
  },

  {
    id: "modern-card",
    name: "Modern Card",
    description:
      "Contemporary scripture typography placed over a soft translucent text panel.",

    presetState: {
      background: {
        type: "gradient",
        color: "#171717",
        gradient: {
          type: "linear",
          colors: ["#3A3A3A", "#111111"],
          angle: 145,
        },
        imageOpacity: 1,
        overlayColor: "#000000",
        overlayOpacity: 0.15,
        blur: 0,
      },
    },

    textStyle: {
      fontFamily: "Inter",
      fontSize: 40,
      fontWeight: "500",
      fontStyle: "normal",
      textAlign: "center",
      verticalAlign: "middle",

      color: "#FFFFFF",

      letterSpacing: 0,
      lineHeight: 1.4,

      backgroundColor: "rgba(255,255,255,0.10)",
      backgroundRadius: 24,
      padding: 32,

      shadowColor: "rgba(0,0,0,0.35)",
      shadowBlur: 12,
      shadowOffsetX: 0,
      shadowOffsetY: 6,

      outlineColor: "transparent",
      outlineWidth: 0,

      glowColor: "transparent",
      glowBlur: 0,
      glowIntensity: 0,

      blur: 0,
    },

    referenceStyle: {
      fontFamily: "Inter",
      fontSize: 22,
      fontWeight: "700",
      color: "#D4AF37",
      letterSpacing: 3,
      textAlign: "center",
    },
  },

  {
    id: "forest-psalm",
    name: "Forest Psalm",
    description:
      "Deep forest green with warm cream typography inspired by nature and the Psalms.",

    presetState: {
      background: {
        type: "gradient",
        color: "#10251D",
        gradient: {
          type: "radial",
          colors: ["#28533D", "#07130E"],
          angle: 0,
        },
        imageOpacity: 1,
        overlayColor: "#000000",
        overlayOpacity: 0.15,
        blur: 0,
      },
    },

    textStyle: {
      fontFamily: "Merriweather",
      fontSize: 42,
      fontWeight: "400",
      fontStyle: "italic",
      textAlign: "center",
      verticalAlign: "middle",

      color: "#F5EFE2",

      letterSpacing: 0,
      lineHeight: 1.45,

      shadowColor: "rgba(0,0,0,0.5)",
      shadowBlur: 10,
      shadowOffsetX: 1,
      shadowOffsetY: 4,

      outlineColor: "transparent",
      outlineWidth: 0,

      glowColor: "transparent",
      glowBlur: 0,
      glowIntensity: 0,

      backgroundColor: "transparent",
      backgroundRadius: 0,
      padding: 0,

      blur: 0,
    },

    referenceStyle: {
      fontFamily: "Montserrat",
      fontSize: 25,
      fontWeight: "600",
      color: "#D8C58A",
      letterSpacing: 4,
      textAlign: "center",
    },
  },

  {
    id: "bold-proclamation",
    name: "Bold Proclamation",
    description:
      "Large bold typography designed for powerful scripture statements.",

    presetState: {
      background: {
        type: "solid",
        color: "#F4F0E8",
        gradient: {
          type: "linear",
          colors: ["#F4F0E8", "#DDD4C4"],
          angle: 180,
        },
        imageOpacity: 1,
        overlayColor: "#000000",
        overlayOpacity: 0,
        blur: 0,
      },
    },

    textStyle: {
      fontFamily: "Montserrat",
      fontSize: 54,
      fontWeight: "800",
      fontStyle: "normal",
      textAlign: "center",
      verticalAlign: "middle",

      color: "#241B18",

      letterSpacing: -1,
      lineHeight: 1.2,

      shadowColor: "transparent",
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0,

      outlineColor: "transparent",
      outlineWidth: 0,

      glowColor: "transparent",
      glowBlur: 0,
      glowIntensity: 0,

      backgroundColor: "transparent",
      backgroundRadius: 0,
      padding: 0,

      blur: 0,
    },

    referenceStyle: {
      fontFamily: "Montserrat",
      fontSize: 22,
      fontWeight: "700",
      color: "#8A6330",
      letterSpacing: 3,
      textAlign: "center",
    },
  },

  {
    id: "royal-word",
    name: "Royal Word",
    description:
      "Rich purple tones with elegant gold typography and a luxurious presentation.",

    presetState: {
      background: {
        type: "gradient",
        color: "#21112F",
        gradient: {
          type: "radial",
          colors: ["#5A3277", "#160A20"],
          angle: 0,
        },
        imageOpacity: 1,
        overlayColor: "#000000",
        overlayOpacity: 0.12,
        blur: 0,
      },
    },

    textStyle: {
      fontFamily: "Merriweather",
      fontSize: 43,
      fontWeight: "400",
      fontStyle: "italic",
      textAlign: "center",
      verticalAlign: "middle",

      gradient: {
        type: "linear",
        colors: ["#FFF3B0", "#D4AF37"],
        angle: 90,
      },

      color: "#D4AF37",

      letterSpacing: 0,
      lineHeight: 1.4,

      shadowColor: "rgba(0,0,0,0.55)",
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 4,

      glowColor: "#D4AF37",
      glowBlur: 8,
      glowIntensity: 0.25,

      outlineColor: "transparent",
      outlineWidth: 0,

      backgroundColor: "transparent",
      backgroundRadius: 0,
      padding: 0,

      blur: 0,
    },

    referenceStyle: {
      fontFamily: "Montserrat",
      fontSize: 25,
      fontWeight: "700",
      color: "#F7E7A9",
      letterSpacing: 4,
      textAlign: "center",
    },
  },
  {
    id: "text-glow",
    name: "Text Glow",
    description:
      "Bright scripture with a strong dark glow behind the letters for clear visibility on any background.",

    presetState: {
      background: {
        type: "solid",
        color: "#2A1515",
        gradient: {
          type: "linear",
          colors: ["#BC6565", "#C3A9A9"],
          angle: 180,
        },
        imageOpacity: 1,
        overlayColor: "#000000",
        overlayOpacity: 0,
        blur: 0,
      },
    },

    textStyle: {
      fontFamily: "Merriweather",
      fontSize: 42,
      fontWeight: "400",
      fontStyle: "italic",
      textAlign: "center",
      verticalAlign: "middle",

      color: "#FFFFFF",

      letterSpacing: 0,
      lineHeight: 1.4,

      // Strong dark halo around the text
      glowColor: "#000000",
      glowBlur: 14,
      glowIntensity: 0.9,

      // Additional shadow for stronger separation
      shadowColor: "rgba(0, 0, 0, 0.85)",
      shadowBlur: 8,
      shadowOffsetX: 0,
      shadowOffsetY: 2,

      // Thin dark outline makes small text remain readable
      outlineColor: "rgba(0, 0, 0, 0.75)",
      outlineWidth: 1,

      backgroundColor: "transparent",
      backgroundRadius: 0,
      padding: 0,

      blur: 0,
    },

    referenceStyle: {
      fontFamily: "Montserrat",
      fontSize: 24,
      fontWeight: "700",
      fontStyle: "normal",
      textAlign: "center",
      color: "#FFFFFF",
      letterSpacing: 4,

      glowColor: "#000000",
      glowBlur: 10,
      glowIntensity: 0.85,

      shadowColor: "rgba(0, 0, 0, 0.8)",
      shadowBlur: 6,
      shadowOffsetX: 0,
      shadowOffsetY: 2,

      outlineColor: "rgba(0, 0, 0, 0.7)",
      outlineWidth: 1,
    },
  },
];
