import { featureMenu } from "../features/navigation/featureMenu";
import "../styles/navbar.css";

function renderFeatureMenu(): string {
  return featureMenu
    .map(
      (item) => /* html */ `
        <a
          href="${item.route}"
          class="feature-item"
          data-route
          data-feature-id="${item.id}"
        >
          <span
            class="feature-item-icon"
            aria-hidden="true"
          >
            ${item.icon}
          </span>

          <span class="feature-item-content">
            <strong>${item.title}</strong>
            <small>${item.description}</small>
          </span>
        </a>
      `,
    )
    .join("");
}

export const Navbar = {
  render: () => /* html */ `
    <nav class="navbar" aria-label="Main Navigation">

      <div class="container navbar-container">

        <!-- Logo -->
        <a
          href="/"
          class="logo"
          data-route
          aria-label="Shepherd Bible Home"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          </svg>

          <span>Shepherd Bible</span>
        </a>

        <!-- Mobile Menu Button -->
        <button
          class="mobile-menu-btn"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          aria-controls="main-navigation"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </button>

        <!-- Navigation -->
        <div
          class="nav-links"
          id="main-navigation"
        >

          <a href="/" data-route>Home</a>

          <!-- Features -->
          <div class="nav-dropdown">

            <button
              class="nav-dropdown-trigger"
              type="button"
              aria-expanded="false"
              aria-haspopup="true"
              aria-controls="features-menu"
            >
              <span>Features</span>

              <svg
                class="dropdown-chevron"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            <div
              class="features-menu"
              id="features-menu"
              role="menu"
            >
              ${renderFeatureMenu()}
            </div>

          </div>

          <a href="/community" data-route>Community</a>

          <a href="/changelog" data-route>Changelog</a>

          <!-- Theme -->
          <button
            id="theme-toggle"
            class="theme-toggle"
            type="button"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            <span aria-hidden="true">🌓</span>
          </button>

        </div>
      </div>
    </nav>
  `,

  mount: () => {
    const mobileMenuButton =
      document.querySelector<HTMLButtonElement>(".mobile-menu-btn");

    const navLinks =
      document.querySelector<HTMLElement>("#main-navigation");

    const dropdown =
      document.querySelector<HTMLElement>(".nav-dropdown");

    const dropdownTrigger =
      document.querySelector<HTMLButtonElement>(
        ".nav-dropdown-trigger",
      );

    /*
     * ---------------------------------------------------------
     * Mobile menu
     * ---------------------------------------------------------
     */

    mobileMenuButton?.addEventListener("click", () => {
      const isOpen =
        mobileMenuButton.getAttribute("aria-expanded") === "true";

      mobileMenuButton.setAttribute(
        "aria-expanded",
        String(!isOpen),
      );

      navLinks?.classList.toggle("active", !isOpen);
    });

    /*
     * ---------------------------------------------------------
     * Features dropdown
     * ---------------------------------------------------------
     */

    dropdownTrigger?.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen =
        dropdownTrigger.getAttribute("aria-expanded") === "true";

      dropdownTrigger.setAttribute(
        "aria-expanded",
        String(!isOpen),
      );

      dropdown?.classList.toggle("open", !isOpen);
    });

    /*
     * ---------------------------------------------------------
     * Desktop hover
     * ---------------------------------------------------------
     */

    dropdown?.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) {
        dropdown.classList.add("open");

        dropdownTrigger?.setAttribute(
          "aria-expanded",
          "true",
        );
      }
    });

    dropdown?.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768) {
        dropdown.classList.remove("open");

        dropdownTrigger?.setAttribute(
          "aria-expanded",
          "false",
        );
      }
    });

    /*
     * ---------------------------------------------------------
     * Close Features menu outside click
     * ---------------------------------------------------------
     */

    document.addEventListener("click", (event) => {
      const target = event.target as Node;

      if (dropdown && !dropdown.contains(target)) {
        dropdown.classList.remove("open");

        dropdownTrigger?.setAttribute(
          "aria-expanded",
          "false",
        );
      }
    });

    /*
     * ---------------------------------------------------------
     * Close mobile navigation after navigation
     * ---------------------------------------------------------
     */

    navLinks?.querySelectorAll("a[data-route]").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        mobileMenuButton?.setAttribute(
          "aria-expanded",
          "false",
        );

        dropdown?.classList.remove("open");

        dropdownTrigger?.setAttribute(
          "aria-expanded",
          "false",
        );
      });
    });

    /*
     * ---------------------------------------------------------
     * Theme
     * ---------------------------------------------------------
     */

    const themeButton =
      document.getElementById("theme-toggle");

    const savedTheme =
      localStorage.getItem("sb-theme");

    if (
      savedTheme === "dark" ||
      savedTheme === "light"
    ) {
      document.documentElement.setAttribute(
        "data-theme",
        savedTheme,
      );
    }

    themeButton?.addEventListener("click", () => {
      const currentTheme =
        document.documentElement.getAttribute(
          "data-theme",
        );

      const newTheme =
        currentTheme === "dark"
          ? "light"
          : "dark";

      document.documentElement.setAttribute(
        "data-theme",
        newTheme,
      );

      localStorage.setItem(
        "sb-theme",
        newTheme,
      );
    });
  },
};