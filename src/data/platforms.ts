export interface Platform {
  id: string;
  name: string;
  icon: string;
  iconClass: string;
  status: string;
  statusClass: "live" | "preview";
  description: string;
  storeName: string;
  storeUrl?: string;
  installerUrl?: string;
  installerName?: string;
  available: boolean;
}

export const platforms: Platform[] = [
  {
    id: "windows",
    name: "Windows PC",
    icon: "windows",
    iconClass: "windows-icon",
    status: "Live on Windows 10/11",
    statusClass: "live",
    description:
      "Fast, offline-first Bible study with multi-translation support.",
    storeName: "Microsoft Store",
    storeUrl: "https://apps.microsoft.com/detail/9pprws532n91",
    installerUrl:
      "https://get.microsoft.com/installer/download/9pprws532n91?referrer=appbadge",
    installerName: "Windows Installer (.exe)",
    available: true,
  },
  {
    id: "android",
    name: "Android",
    icon: "android",
    iconClass: "android-icon",
    status: "Live on the Play Store",
    statusClass: "live",
    description:
      "Bible reading, quick verse navigation, audio options, and daily devotions.",
    storeName: "Google Play",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.nxtccode.biblenotebook",
    available: true,
  },
  {
    id: "macos",
    name: "macOS",
    icon: "apple",
    iconClass: "mac-icon",
    status: "Planned",
    statusClass: "preview",
    description:
      "A desktop Bible reading experience planned for Apple Silicon and Intel Macs.",
    storeName: "Coming in the future",
    available: false,
  },
  {
    id: "ios",
    name: "iOS & iPadOS",
    icon: "apple",
    iconClass: "ios-icon",
    status: "Planned",
    statusClass: "preview",
    description:
      "A focused Bible reading experience planned for iPhone and iPad.",
    storeName: "App Store",
    available: false,
  },
  {
    id: "linux",
    name: "Linux",
    icon: "terminal",
    iconClass: "linux-icon",
    status: "Planned",
    statusClass: "preview",
    description:
      "A desktop Bible study experience planned for Linux distributions.",
    storeName: "Coming in the future",
    available: false,
  },
];
