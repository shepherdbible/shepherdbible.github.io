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

type PageFactory = () => PageInstance;

const routes: Record<string, PageFactory> = {
  "/": () => HomePage,
  "/about": () => AboutPage,
  "/faq": () => FaqPage,
  "/community": () => CommunityPage,
  "/changelog": () => ChangelogPage,
  "/privacy": () => PrivacyPage,
  "/editor": () => new VerseImagePage(),
};

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname || "/";
}

function renderRoute(): void {
  const contentDiv = document.getElementById("app-content");

  if (!contentDiv) {
    console.error("Router: #app-content was not found.");
    return;
  }

  const path = normalizePath(window.location.pathname);
  const createPage = routes[path] ?? routes["/"];
  const page = createPage();

  window.scrollTo({
    top: 0,
    behavior: "auto",
  });

  const rendered = page.render();

  contentDiv.innerHTML = "";

  if (typeof rendered === "string") {
    contentDiv.innerHTML = rendered;
  } else {
    contentDiv.appendChild(rendered);
  }

  page.mount?.();
}

function handleNavigation(event: MouseEvent): void {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const target = event.target as HTMLElement | null;

  if (!target) {
    return;
  }

  const link = target.closest<HTMLAnchorElement>("a[data-route]");

  if (!link) {
    return;
  }

  const href = link.getAttribute("href");

  if (!href || !href.startsWith("/")) {
    return;
  }

  event.preventDefault();

  const currentPath = normalizePath(window.location.pathname);
  const nextPath = normalizePath(href);

  if (currentPath === nextPath) {
    return;
  }

  history.pushState({}, "", nextPath);

  renderRoute();
}

export function initRouter(): void {
  document.addEventListener("click", handleNavigation);

  window.addEventListener("popstate", renderRoute);

  renderRoute();
}