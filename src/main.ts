import { Navbar } from './components/Navbar';
import { initRouter } from './router/router';
import "./styles/themes/theme_red.css";
import "./styles/global.css";

function initializeApp() {
  // 1. Setup Theme
  const savedTheme = localStorage.getItem('sb-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);

  // 2. Mount Static Layouts
  const header = document.getElementById('app-header');
  if (header) {
    header.innerHTML = Navbar.render();
    Navbar.mount();
  }

  const footer = document.getElementById('app-footer');
  if (footer) {
    footer.innerHTML = /* html */  `
      <div class="container text-center" style="padding: 40px 0; border-top: 1px solid var(--color-border); margin-top: 40px; color: var(--color-text-muted); font-size: 0.875rem;">
        <p>&copy; ${new Date().getFullYear()} Shepherd Bible. "Share a piece of your journey to inspire another."</p>
        <div style="margin-top: 16px; display: flex; gap: 16px; justify-content: center;">
           <a href="#/changelog" style="color: inherit;">Changelog</a>
           <a href="#/faq" style="color: inherit;">faq</a>
          <a href="#/about" style="color: inherit;">About</a>
          <a href="#/privacy" style="color: inherit;">Privacy</a>
        </div>
      </div>
    `;
  }

  // 3. Initialize Router
  initRouter();
}

document.addEventListener('DOMContentLoaded', initializeApp);