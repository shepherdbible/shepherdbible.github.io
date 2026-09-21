import type { Page } from "../types";
import "../styles/homepage.css";

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

          <a href="#/community" class="btn btn-secondary">
            Visit Community
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
      <div class="container text-center">
        <h2>Available Everywhere You Are</h2>
        <p class="section-lead">Study Scripture seamlessly on desktop or mobile — online or offline.</p>

        <div class="grid grid-4 platform-grid">
          <!-- Windows -->
          <div class="card platform-card featured-platform">
            <div class="platform-icon windows-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m9.75 1.35V22.35L0 20.9v-8zm1.05-20.1L24 0v11.25H10.8m13.2 1.35V24l-13.2-1.8v-9.45"/>
              </svg>
            </div>
            <h3>Windows PC</h3>
            <span class="status-badge live">Live on Windows 10/11</span>
            <p><strong>Bible - Multi Version</strong> is live on Microsoft Store. Fast, offline-first study with multi-translation support.</p>
            <a href="https://apps.microsoft.com/detail/9pprws532n91" target="_blank" rel="noopener noreferrer" class="platform-link">
              Download from Store &rarr;
            </a>
          </div>

          <!-- Android -->
          <div class="card platform-card">
            <div class="platform-icon android-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.552 0 .9997.4482.9997.9993s-.4477.9997-.9997.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.552 0 .9997.4482.9997.9993s-.4477.9997-.9997.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.1966 13.8533 7.72 12 7.72s-3.5902.4766-5.1368 1.2298L4.8409 5.4467a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.2858.3377 14.8322.0156 19h23.9688c-.3221-4.1678-2.6733-7.7142-6.1027-9.6786"/>
              </svg>
            </div>
            <h3>Android</h3>
            <span class="status-badge preview">In Active Testing</span>
            <p>Lightweight mobile app with quick verse navigation, audio options, and daily devotions on the go.</p>
            <span class="platform-link-disabled">Google Play (Coming Soon)</span>
          </div>

          <!-- macOS -->
          <div class="card platform-card">
            <div class="platform-icon mac-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.68-.82 1.14-1.97 1.01-3.12-1 .04-2.21.67-2.92 1.5-.63.73-1.18 1.9-1.03 3.03 1.12.09 2.26-.59 2.94-1.41z"/>
              </svg>
            </div>
            <h3>macOS</h3>
            <span class="status-badge preview">In Active Testing</span>
            <p>Designed for Apple Silicon and Intel Macs with native dark mode support and keyboard shortcuts.</p>
            <span class="platform-link-disabled">Mac App Store (Coming Soon)</span>
          </div>

          <!-- iOS / iPadOS -->
          <div class="card platform-card">
            <div class="platform-icon ios-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
            </div>
            <h3>iOS & iPadOS</h3>
            <span class="status-badge preview">In Active Testing</span>
            <p>Clean, focus-driven reading experience on iPhone and iPad with offline SQLite database support.</p>
            <span class="platform-link-disabled">App Store (Coming Soon)</span>
          </div>
        </div>
      </div>
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
          <a href="#/community" class="btn btn-primary">Visit Community Hub</a>
          <a href="#/faq" class="btn btn-secondary">Help & FAQ</a>
        </div>
      </div>
    </section>

   
  `,
};
