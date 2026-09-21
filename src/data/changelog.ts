import type { ChangelogEntry } from "../types";

export const changelogs: ChangelogEntry[] = [
  {
    id: "v1.1.420.0",
    version: "1.1.420.0",
    date: "2026-09-21",
    title: "Shepherd Bible Improvements",
    description:
      "Continued improvements to Shepherd Bible with a focus on reliability, Bible study, and a better reading experience.",
    changes: [
      "Improved application stability",
      "Improved handling of Bible data and local storage",
      "Improved Bible search reliability",
      "Improved notes, highlights, and bookmarks handling",
      "Improved error handling for damaged or unavailable local data",
      "Continued performance improvements",
    ],
    type: "improvement",
  },

  {
    id: "v1.1.416.0",
    version: "1.1.416.0",
    date: "2026-09-XX",
    title: "Bible Study Improvements",
    description:
      "Improvements to Bible reading and personal study features.",
    changes: [
      "Improved Bible reading experience",
      "Improved Bible search",
      "Improved notes and annotation handling",
      "Improved highlights and bookmarks",
      "Improved application stability",
    ],
    type: "improvement",
  },

  {
    id: "v1.1.405.0",
    version: "1.1.405.0",
    date: "2026-09-XX",
    title: "Stability and Compatibility",
    description:
      "Focused on compatibility, stability, and improving the reliability of Bible study data.",
    changes: [
      "Improved application compatibility",
      "Improved local data handling",
      "Improved recovery from database-related problems",
      "Improved error handling",
      "Fixed several stability issues",
    ],
    type: "fix",
  },

  {
    id: "community",
    version: "Community",
    date: "2026-09-21",
    title: "Shepherd Bible Community",
    description:
      "Introducing the Shepherd Bible community experience, created to give Bible readers a place to connect, encourage one another, and share their journey.",
    changes: [
      "Added Bible discussion areas",
      "Added encouragement posts",
      "Added testimony sharing",
      "Added community questions",
      "Added replies and conversations",
      "Added post and reply interactions",
      "Added community reporting tools",
    ],
    type: "feature",
  },

  {
    id: "verse-image",
    version: "Verse Image Creator",
    date: "2026-09-21",
    title: "Create Scripture Images",
    description:
      "A new creative experience for turning Bible verses into beautiful shareable images.",
    changes: [
      "Added Bible verse image editor",
      "Added customizable text",
      "Added font controls",
      "Added color controls",
      "Added background customization",
      "Added layout controls",
      "Added visual effects",
      "Added templates",
      "Added PNG export",
      "Added undo and redo support",
    ],
    type: "feature",
  },
];