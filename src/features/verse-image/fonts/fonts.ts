export interface FontDefinition {
  id: string;
  family: string;
  category: "serif" | "sans-serif" | "display" | "handwriting";
  googleFontQuery: string; // e.g. "Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400"
}

export const FONTS: FontDefinition[] = [
  {
    id: "merriweather",
    family: "Merriweather",
    category: "serif",
    googleFontQuery: "Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700"
  },
  {
    id: "playfair-display",
    family: "Playfair Display",
    category: "serif",
    googleFontQuery: "Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600"
  },
  {
    id: "lora",
    family: "Lora",
    category: "serif",
    googleFontQuery: "Lora:ital,wght@0,400;0,600;0,700;1,400;1,600"
  },
  {
    id: "libre-baskerville",
    family: "Libre Baskerville",
    category: "serif",
    googleFontQuery: "Libre+Baskerville:ital,wght@0,400;0,700;1,400"
  },
  {
    id: "cormorant-garamond",
    family: "Cormorant Garamond",
    category: "serif",
    googleFontQuery: "Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400"
  },
  {
    id: "cinzel",
    family: "Cinzel",
    category: "display",
    googleFontQuery: "Cinzel:wght@400;600;700"
  },
  {
    id: "inter",
    family: "Inter",
    category: "sans-serif",
    googleFontQuery: "Inter:wght@300;400;500;600;700"
  },
  {
    id: "montserrat",
    family: "Montserrat",
    category: "sans-serif",
    googleFontQuery: "Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,400"
  },
  {
    id: "great-vibes",
    family: "Great Vibes",
    category: "handwriting",
    googleFontQuery: "Great+Vibes"
  },
  {
    id: "caveat",
    family: "Caveat",
    category: "handwriting",
    googleFontQuery: "Caveat:wght@400;600;700"
  }
];