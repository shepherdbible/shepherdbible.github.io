import type { FeatureMenuCategory, FeatureMenuItem } from "./types";

export const featureMenu: FeatureMenuItem[] = [
  {
    id: "bible-reader",
    icon: "📖",
    title: "Read the Bible",
    description: "Explore all 66 books in the KJV",
    route: "/bible",
  },
  {
    id: "verse-image",
    icon: "🎨",
    title: "Verse Image Creator",
    description: "Create beautiful Scripture images",
    route: "/editor",
  },
];
