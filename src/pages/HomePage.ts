import type { Page } from "../types";
import "../styles/homepage.css";
import "../styles/home_qr.css";
import {
  renderPlatformShowcase,
  initPlatformShowcase,
} from "../components/PlatformShowcase";

export const HomePage: Page = {
  render: () => /* html */ `
    <!-- Hero Section -->
    <section class="hero section">
      <div class="container text-center">
        <div class="hero-badge">
          <span class="pulse-dot"></span>
          Now Available on Windows — "Shepherd Bible"
        </div>
        
        <h1 class="hero-title">Grow in the Word.<br>Walk together.</h1>
        <p class="hero-subtitle">
          Discover Shepherd Bible — a fast, lightweight, offline-first Bible study app available across Windows, Android, macOS, and iOS.
        </p>

        <!-- Primary Platform CTA Group -->
        <div class="hero-cta-group">
          <a href="https://apps.microsoft.com/detail/9pprws532n91" target="_blank" rel="noopener noreferrer" class="btn btn-store btn-windows">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3.449L9.75 2.1v9.451H0m9.75 1.35V22.35L0 20.9v-8zm1.05-20.1L24 0v11.25H10.8m13.2 1.35V24l-13.2-1.8v-9.45"/>
            </svg>
            <div class="btn-text">
              <span class="subtext">Get it on</span>
              <span class="maintext">Microsoft Store</span>
            </div>
          </a>

          <a href="/store" class="btn btn-secondary">
            Visit Store
          </a>
        </div>

        <!-- App Preview Device Mockup -->
        <div class="hero-visual">
          <div class="mockup-container">
            <div class="mockup-topbar">
              <div class="mockup-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <div class="mockup-title">Shepherd Bible</div>
            </div>
            <div class="mockup-content">
              <aside class="mockup-sidebar">
                <div class="sidebar-item active">📖 Reading</div>
                <div class="sidebar-item">🔍 Search</div>
                <div class="sidebar-item">🔖 Bookmarks</div>
                <div class="sidebar-item">📝 Notebooks</div>
                <div class="sidebar-item">🎵 Hymns</div>
              </aside>
              <main class="mockup-reader">
                <div class="reader-header">
                  <h2>Psalm 23:1-6</h2>
                  <span class="version-select">KJV ▼</span>
                </div>
                <div class="reader-body">
                  <p><span class="v-num">1</span> The <span class="god-name">LORD</span> is my shepherd; I shall not want.</p>
                  <p><span class="v-num">2</span> He maketh me to lie down in green pastures: he leadeth me beside the still waters.</p>
                  <p><span class="v-num">3</span> He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.</p>
                  <p><span class="v-num">4</span> Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.</p>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Availability Showcase -->
    <section class="section platforms-section">
        ${renderPlatformShowcase()}
    </section>

    <!-- App Features Grid -->
    <section class="section features">
      <div class="container">
        <h2 class="text-center">Built for Daily Scripture Study</h2>
        <p class="text-center section-lead">Everything you need to read, listen, research, and grow.</p>

        <div class="grid grid-3 feature-grid">
          <div class="card feature-card">
            <div class="feature-emoji">⚡</div>
            <h3>Multi-Version & Offline</h3>
            <p>Read freely without internet access. Supports SQLite Bible databases, KJV, WEB, ASV, and more.</p>
          </div>

          <div class="card feature-card">
            <div class="feature-emoji">🎧</div>
            <h3>Audio Bibles</h3>
            <p>Listen to dramatized Bible audio readings while commuting, walking, or resting in God's Word.</p>
          </div>

          <div class="card feature-card">
            <div class="feature-emoji">🔍</div>
            <h3>Fast Verse Search</h3>
            <p>Locate any verse or passage instantly with rapid search filters, concordance, and Greek/Hebrew references.</p>
          </div>

          <div class="card feature-card">
            <div class="feature-emoji">📌</div>
            <h3>Highlights & Notes</h3>
            <p>Personalize your Bible journey. Mark favorite passages with color highlights, bookmarks, and study notebooks.</p>
          </div>

          <div class="card feature-card">
            <div class="feature-emoji">🎵</div>
            <h3>Worship & Hymns</h3>
            <p>Browse Christian hymns with lyrics and praise songs integrated right alongside your Bible reader.</p>
          </div>

          <div class="card feature-card">
            <div class="feature-emoji">🤝</div>
            <h3>Community Driven</h3>
            <p>Share inspiring verses, ask study questions, and contribute ideas to shape future app updates.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Callout Section -->
    <section class="section community-banner">
      <div class="container text-center">
        <h2>"Share a piece of your journey to inspire another."</h2>
        <p class="banner-subtext">Join our growing reader community to suggest features, get support, and share testimony.</p>
        <div class="banner-actions">
         <a
  href="https://shepherherdbible.discourse.group/"
  class="btn btn-primary"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit Community Hub
</a>
          <a href="/faq" class="btn btn-secondary">Help & FAQ</a>
        </div>
      </div>
    </section>

   
  `,
  mount: (): void => {
    renderPlatformShowcase();
    initPlatformShowcase();
  },
};
