import type { ChangelogEntry } from "../types/ChangelogEntry";

export const WindowsChangelogs: ChangelogEntry[] = [
  {
    id: "v1.1.433.0",
    version: "1.1.433.0",
    date: "2026-10-23",
    title: "Stability Fixes & Future Preparations",
    description: "Improvements, stability fixes, and preparation for future features.",
    platforms: ["windows"],
    changes: [
      "Fixed major issues causing the app to crash on launch, as reported by users in reviews. (September 7, 2026)",
      "Fixed Reader crashes and improved restoration of the last opened Bible book and chapter.",
      "Fixed the main window automatically opening on Windows startup.",
      "Added document printing capabilities.",
      "Added support for daily verse notifications.",
      "Fixed an issue where some music sheets were not displayed correctly.",
      "YouTube audio playback now remembers and restores the last listening position.",
      "Verse numbers now automatically follow the active theme color for improved visual consistency.",
      "Added support for multiple overlay windows, allowing Bible Hub and other tools to remain open simultaneously.",
      "General performance and stability enhancements.",
      "Fixed several issues related to overlay window activation and reuse.",
      "Resolved cases where previously opened overlay windows were not properly released after closing."
    ],
    type: "improvement"
  },
  {
    id: "v1.1.389.0",
    version: "1.1.389.0",
    date: "2026-06-15",
    title: "Fixes & Stability",
    description: "Fixes and general stability improvements.",
    platforms: ["windows"],
    changes: [
      "Fixed an issue where the app could crash when selecting themes and Quizzes.",
      "General performance and stability enhancements."
    ],
    type: "fix"
  },
  {
    id: "v1.1.387.0",
    version: "1.1.387.0",
    date: "2026-06-10",
    title: "Major Internal Modernization",
    description: "Major internal modernization work and preparation for future features.",
    platforms: ["windows"],
    changes: [
      "Major internal modernization work has begun across the application.",
      "Comparison results now properly adapt according to the selected Bible version.",
      "Numerous stability improvements and codebase refactoring for future features.",
      "Large-scale framework and architecture upgrades are underway.",
      "Preparations for improved performance, maintainability, and long-term support.",
      "Foundation work completed for upcoming advanced Bible study tools and integrations.",
      "The Notebook feature is currently undergoing major revisions and may contain bugs.",
      "Google Drive synchronization is still being redesigned and remains incomplete.",
      "Major Platform Upgrade: The application is being migrated from UWP to WinUI 3 and newer Microsoft technologies. This transition will enable a more modern user experience, improved performance, and better support for future features.",
      "Significant UI and user experience redesigns are planned across multiple pages, including the Projector and Notebook systems.",
      "Full notebook exporting, improved backup options, and enhanced cloud synchronization.",
      "Integration with Bible study resources such as Blue Letter Bible, Bible Hub, and Wikipedia for additional historical and reference information.",
      "New Bible study tools, productivity features, and advanced research capabilities are planned as part of future Pro and premium enhancements.",
      "Daily verse notifications and background services are being evaluated as Microsoft continues to improve support for modern desktop applications.",
      "Long-term plans include support for macOS and iOS, allowing users to access their Bible studies across multiple platforms.",
      "This release marks the beginning of a major modernization effort. While some features may temporarily experience limitations during the transition, the goal is to deliver a faster, more capable, and feature-rich Bible study platform in the coming releases."
    ],
    type: "improvement"
  },
  {
    id: "v1.1.383.0",
    version: "1.1.383.0",
    date: "2026-05-29",
    title: "Comparison Improvements",
    description: "Comparison improvements and ongoing modernization work.",
    platforms: ["windows"],
    changes: [
      "Comparison now adjusts according to the selected Bible version.",
      "General enhancements.",
      "The Notebook feature has several known bugs and requires additional development time.",
      "Google Drive synchronization is incomplete and requires further changes.",
      "Redesign the Projector page to separate text styling controls.",
      "Add complete notebook exporting.",
      "Continue UI design improvements.",
      "Integration of Blue Letter Bible for Strong's Numbers and word studies.",
      "Integration of Bible Hub for Interlinear Bible tools.",
      "Integration of Wikipedia for additional historical and reference information.",
      "Migration to the latest technologies and frameworks, including WinUI, for a more advanced application experience.",
      "Evaluate modern background-task support for daily verse notifications.",
      "Potential future support for Apple platforms, including macOS and iOS."
    ],
    type: "improvement"
  },
  {
    id: "v1.1.382.0",
    version: "1.1.382.0",
    date: "2025-12-23",
    title: "Minor Fixes",
    description: "Minor fixes and general enhancements.",
    platforms: ["windows"],
    changes: [
      "Resolved an issue where embedded hymn YouTube videos were not working.",
      "General enhancements.",
      "The Notebook feature has several known bugs and requires additional development time.",
      "Google Drive synchronization is incomplete and requires further changes.",
      "Redesign the Projector page to separate text styling controls.",
      "Add complete notebook exporting.",
      "Continue UI design improvements.",
      "Integration of Blue Letter Bible for Strong's Numbers and word studies.",
      "Integration of Bible Hub for Interlinear Bible tools.",
      "Integration of Wikipedia for additional historical and reference information.",
      "Migration to newer technologies and frameworks, including WinUI.",
      "Evaluate background services for daily verse notifications.",
      "Potential future support for Apple platforms, including macOS and iOS."
    ],
    type: "fix"
  },
  {
    id: "v1.1.378.0",
    version: "1.1.378.0",
    date: "2025-07-24",
    title: "Hymns & Changelog Fixes",
    description: "Fixed changelog and hymns controls.",
    platforms: ["windows"],
    changes: [
      "Fixed changelog buttons.",
      "Fixed hymns buttons.",
      "General enhancements.",
      "The Notebook feature has several known bugs and requires additional development time.",
      "Google Drive synchronization is incomplete and requires further changes.",
      "Redesign the Projector page to separate text styling controls.",
      "Add complete notebook exporting.",
      "Continue UI design improvements.",
      "Integration of Blue Letter Bible for Strong's Numbers and word studies.",
      "Integration of Bible Hub for Interlinear Bible tools.",
      "Integration of Wikipedia for additional information.",
      "Migration to newer technologies and frameworks, including WinUI.",
      "Potential future support for Apple platforms, including macOS and iOS."
    ],
    type: "fix"
  }
];