import type { VerseImageState } from "../editor/EditorState";

export interface VerseTemplate {
  id: string;
  name: string;
  description: string;
  presetState: Partial<VerseImageState>;
}

export const TEMPLATES: VerseTemplate[] = [
  {
    id: "classic",
    name: "Classic Shepherd",
    description: "Rich burgundy gradient with gold lettering and timeless serif typography.",
    presetState: {
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
        overlayOpacity: 0.25,
        blur: 0
      }
    }
  },
  {
    id: "minimal",
    name: "Clean Light",
    description: "Modern minimalist design on off-white parchment with high-contrast slate text.",
    presetState: {
      background: {
        type: "solid",
        color: "#FAF7F2",
        gradient: { type: "linear", colors: ["#FAF7F2", "#E8DCC4"], angle: 180 },
        imageOpacity: 1,
        overlayColor: "#000000",
        overlayOpacity: 0,
        blur: 0
      }
    }
  },
  {
    id: "elegant-gold",
    name: "Golden Scripture",
    description: "Deep charcoal canvas with shimmering gold accent typography and refined margins.",
    presetState: {
      background: {
        type: "radial" as unknown as "gradient",
        color: "#121212",
        gradient: {
          type: "radial",
          colors: ["#2A241E", "#0A0A0A"],
          angle: 0
        },
        imageOpacity: 1,
        overlayColor: "#D4AF37",
        overlayOpacity: 0.05,
        blur: 0
      }
    }
  },
  {
    id: "prayer-blue",
    name: "Twilight Grace",
    description: "Calming deep indigo gradient evoking peace, prayer, and contemplation.",
    presetState: {
      background: {
        type: "gradient",
        color: "#0F172A",
        gradient: {
          type: "linear",
          colors: ["#1E293B", "#0F172A"],
          angle: 160
        },
        imageOpacity: 1,
        overlayColor: "#000000",
        overlayOpacity: 0.1,
        blur: 0
      }
    }
  },
  {
    id: "parchment-warm",
    name: "Ancient Parchment",
    description: "Warm weathered parchment aesthetics with classic biblical font styling.",
    presetState: {
      background: {
        type: "gradient",
        color: "#E8DCC4",
        gradient: {
          type: "radial",
          colors: ["#F5EBE1", "#CBB89A"],
          angle: 0
        },
        imageOpacity: 1,
        overlayColor: "#3E2723",
        overlayOpacity: 0.08,
        blur: 0
      }
    }
  }
];