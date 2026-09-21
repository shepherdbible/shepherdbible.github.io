import { HomePage } from "../pages/HomePage";
import { FaqPage } from "../pages/FaqPage";
import { CommunityPage } from "../pages/CommunityPage";
import { ChangelogPage } from "../pages/ChangelogPage";
import { AboutPage } from "../pages/AboutPage";
import { PrivacyPage } from "../pages/PrivacyPage";
import { VerseImagePage } from "../pages/VerseImagePage";

type PageInstance = {
  render(): string | HTMLElement;
  mount?(): void;
};

const routes: Record<string, () => PageInstance> = {
  "/": () => HomePage,
  "/about": () => AboutPage,
  "/faq": () => FaqPage,
  "/community": () => CommunityPage,
  "/changelog": () => ChangelogPage,
  "/privacy": () => PrivacyPage,
  "/editor": () => new VerseImagePage()
};

export function initRouter(): void {
  const contentDiv = document.getElementById("app-content");

  if (!contentDiv) {
    console.error("Router: #app-content was not found.");
    return;
  }

  const renderRoute = (): void => {
    const hash = window.location.hash.slice(1) || "/";
    const createPage = routes[hash] ?? routes["/"];
    const page = createPage();

    window.scrollTo(0, 0);

    const rendered = page.render();

    contentDiv.innerHTML = "";

    if (typeof rendered === "string") {
      contentDiv.innerHTML = rendered;
    } else {
      contentDiv.appendChild(rendered);
    }

    page.mount?.();
  };

  window.addEventListener("hashchange", renderRoute);

  renderRoute();
}