import { Navbar } from "./components/Navbar";
import { initRouter } from "./router/router";

import "./styles/themes/theme_red.css";
import "./styles/global.css";
import "./styles/footer_support.css";

function initializeApp(): void {
  // ---------------------------------------------------------
  // Theme
  // ---------------------------------------------------------

  const savedTheme = localStorage.getItem("sb-theme");

  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: light)",
  ).matches;

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
  <div class="container text-center site-footer">
    <div class="footer-support">
      <p class="footer-support-title">
        Help Shepherd Bible grow
      </p>
      <p class="footer-support-description">
        Your voluntary support helps us maintain and improve
        free Bible-reading tools and our community.
      </p>
      <a
        href="/support"
        data-route
        class="support-project-button"
      >
        <span aria-hidden="true">♥</span>
        Support the Project
      </a>
    </div>

    <p class="footer-copyright">
      &copy; ${new Date().getFullYear()} Shepherd Bible.
      Share a piece of your journey to inspire another.
    </p>

    <nav class="footer-links" aria-label="Footer navigation">
      <a href="/changelog" data-route>Changelog</a>
      <a href="/faq" data-route>FAQ</a>
      <a href="/books" data-route>Books</a>
      <a href="/about" data-route>About</a>
      <a href="/privacy" data-route>Privacy</a>
      <a href="mailto:shepherdbiblecommunity@gmail.com">
        Contact
      </a>
    </nav>
  </div>
`;
  }

  // ---------------------------------------------------------
  // Router
  // ---------------------------------------------------------

  initRouter();
}

document.addEventListener("DOMContentLoaded", initializeApp);
