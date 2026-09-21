import { Navbar } from "./components/Navbar";
import { initRouter } from "./router/router";

import "./styles/themes/theme_red.css";
import "./styles/global.css";

function initializeApp(): void {
  // ---------------------------------------------------------
  // Theme
  // ---------------------------------------------------------

  const savedTheme = localStorage.getItem("sb-theme");

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", initialTheme);

  // ---------------------------------------------------------
  // Header
  // ---------------------------------------------------------

  const header = document.getElementById("app-header");

  if (header) {
    header.innerHTML = Navbar.render();
    Navbar.mount();
  }

  // ---------------------------------------------------------
  // Footer
  // ---------------------------------------------------------

  const footer = document.getElementById("app-footer");

  if (footer) {
    footer.innerHTML = /* html */ `
      <div
        class="container text-center"
        style="
          padding: 40px 0;
          border-top: 1px solid var(--color-border);
          margin-top: 40px;
          color: var(--color-text-muted);
          font-size: 0.875rem;
        "
      >
        <p>
          &copy; ${new Date().getFullYear()} Shepherd Bible.
          "Share a piece of your journey to inspire another."
        </p>

        <div
          style="
            margin-top: 16px;
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
          "
        >
          <a
            href="/changelog"
            data-route
            style="color: inherit;"
          >
            Changelog
          </a>

          <a
            href="/faq"
            data-route
            style="color: inherit;"
          >
            FAQ
          </a>

          <a
            href="/about"
            data-route
            style="color: inherit;"
          >
            About
          </a>

          <a
            href="/privacy"
            data-route
            style="color: inherit;"
          >
            Privacy
          </a>
          <a href="mailto:shepherdbiblecommunity@gmail.com" style="color: inherit;">Contact</a>
        </div>
      </div>
    `;
  }

  // ---------------------------------------------------------
  // Router
  // ---------------------------------------------------------

  initRouter();
}

document.addEventListener("DOMContentLoaded", initializeApp);
