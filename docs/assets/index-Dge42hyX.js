(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`verse-image`,icon:`🎨`,title:`Verse Image Creator`,description:`Create beautiful Scripture images`,route:`/editor`}];function t(){return e.map(e=>`
        <a
          href="${e.route}"
          class="feature-item"
          data-route
          data-feature-id="${e.id}"
        >
          <span
            class="feature-item-icon"
            aria-hidden="true"
          >
            ${e.icon}
          </span>

          <span class="feature-item-content">
            <strong>${e.title}</strong>
            <small>${e.description}</small>
          </span>
        </a>
      `).join(``)}var n={render:()=>`
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
              ${t()}
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
  `,mount:()=>{let e=document.querySelector(`.mobile-menu-btn`),t=document.querySelector(`#main-navigation`),n=document.querySelector(`.nav-dropdown`),r=document.querySelector(`.nav-dropdown-trigger`);e?.addEventListener(`click`,()=>{let n=e.getAttribute(`aria-expanded`)===`true`;e.setAttribute(`aria-expanded`,String(!n)),t?.classList.toggle(`active`,!n)}),r?.addEventListener(`click`,e=>{e.stopPropagation();let t=r.getAttribute(`aria-expanded`)===`true`;r.setAttribute(`aria-expanded`,String(!t)),n?.classList.toggle(`open`,!t)}),document.addEventListener(`click`,e=>{let t=e.target;n&&!n.contains(t)&&(n.classList.remove(`open`),r?.setAttribute(`aria-expanded`,`false`))}),t?.querySelectorAll(`a[data-route]`).forEach(i=>{i.addEventListener(`click`,()=>{t.classList.remove(`active`),e?.setAttribute(`aria-expanded`,`false`),n?.classList.remove(`open`),r?.setAttribute(`aria-expanded`,`false`)})});let i=document.getElementById(`theme-toggle`),a=localStorage.getItem(`sb-theme`);(a===`dark`||a===`light`)&&document.documentElement.setAttribute(`data-theme`,a),i?.addEventListener(`click`,()=>{let e=document.documentElement.getAttribute(`data-theme`)===`dark`?`light`:`dark`;document.documentElement.setAttribute(`data-theme`,e),localStorage.setItem(`sb-theme`,e)})}},r={render:()=>`
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

   
  `},i=[{id:`1`,category:`Getting Started`,question:`What is Shepherd Bible?`,answer:`Shepherd Bible is a Bible reading and study app designed to help you read God's Word, take notes, highlight verses, bookmark passages, and keep your personal Bible study organized.`},{id:`2`,category:`Getting Started`,question:`Is Shepherd Bible free?`,answer:`Yes. Shepherd Bible is available to use for Bible reading and study. Some features or services may vary by platform and version.`},{id:`3`,category:`Bible Versions`,question:`Which Bible versions are available?`,answer:`Shepherd Bible supports multiple Bible versions, including the King James Version (KJV) and other available editions. The available versions may vary depending on the platform and the current app release.`},{id:`4`,category:`Bible Versions`,question:`Can I read different Bible versions?`,answer:`Yes. Shepherd Bible is designed to let you work with multiple Bible versions so you can compare translations while studying a passage.`},{id:`5`,category:`Bible Reading`,question:`Can I read the Bible offline?`,answer:`Bible content available in Shepherd Bible is stored locally on your device, allowing you to access your downloaded Bible data without depending on an internet connection.`},{id:`6`,category:`Bible Study`,question:`Can I highlight Bible verses?`,answer:`Yes. Shepherd Bible provides highlighting tools so you can mark important verses and passages for personal Bible study.`},{id:`7`,category:`Bible Study`,question:`Can I bookmark Bible verses?`,answer:`Yes. You can bookmark passages that you want to quickly return to later.`},{id:`8`,category:`Notes`,question:`Can I add notes to Bible passages?`,answer:`Yes. Shepherd Bible allows you to create personal notes while reading and studying the Bible.`},{id:`9`,category:`Notes`,question:`Where are my notes and highlights stored?`,answer:`Your personal Bible study data, including notes, highlights, and bookmarks, is stored locally on your device. This allows the app to work with your study data without requiring an internet connection.`},{id:`10`,category:`Backup and Data`,question:`How can I back up my Bible study data?`,answer:`Shepherd Bible provides data backup and export functionality so you can protect your personal Bible study data. We recommend making regular backups, especially before major device or app changes.`},{id:`11`,category:`Backup and Data`,question:`What happens to my notes if I reinstall the app?`,answer:`Personal study data is stored locally on your device. Reinstalling or removing the app can affect locally stored data, so it is important to create a backup before uninstalling or resetting the application.`},{id:`12`,category:`Search`,question:`Can I search the Bible?`,answer:`Yes. Shepherd Bible includes Bible search functionality that helps you find words, phrases, and passages across the available Bible data.`},{id:`13`,category:`Community`,question:`What is the Shepherd Bible community?`,answer:`The Shepherd Bible community is a place for Bible readers to discuss Scripture, ask questions, share encouragement, and share personal testimonies with other believers.`},{id:`14`,category:`Community`,question:`Can I share my Bible study journey with others?`,answer:`Yes. The Shepherd Bible community is designed to give users a place to share thoughts, encouragement, questions, testimonies, and experiences from their Bible study journey.`},{id:`15`,category:`Verse Sharing`,question:`Can I share a specific Bible verse?`,answer:`Yes. Shepherd Bible's verse sharing features are designed to make it easy to share a specific Scripture passage with others.`},{id:`16`,category:`Verse Images`,question:`What is the Verse Image Creator?`,answer:`The Verse Image Creator lets you turn a Bible verse into a visual image that you can save and share. You can customize elements such as text, fonts, colors, backgrounds, layouts, effects, and templates.`},{id:`17`,category:`Verse Images`,question:`Can I create Bible verse images for social media?`,answer:`Yes. The Verse Image Creator is designed to help you create Scripture images in different layouts and sizes that can be shared on social media or with friends and family.`},{id:`18`,category:`Privacy`,question:`Does Shepherd Bible require an internet connection to read the Bible?`,answer:`No. Bible reading can work with locally available Bible data. Internet access may be required for online services and community-related features.`},{id:`19`,category:`Privacy`,question:`Is my personal Bible study data private?`,answer:`Personal study data such as notes, highlights, and bookmarks is stored locally on your device. Online community features are separate from your private local study data.`},{id:`20`,category:`Support`,question:`How can I report a problem or bug?`,answer:`If you encounter a problem, please report it through the available Shepherd Bible support or feedback channel. Include what you were doing when the problem occurred and, if possible, your device and app version. This information helps us investigate and fix issues.`},{id:`21`,category:`Support`,question:`How can I suggest a new feature?`,answer:`We welcome suggestions from Shepherd Bible users. Feature requests and feedback help us understand how people use the app and what would make Bible study more useful.`},{id:`22`,category:`Updates`,question:`How often is Shepherd Bible updated?`,answer:`Shepherd Bible is actively developed and updated as improvements, bug fixes, new features, and Bible study enhancements become available.`},{id:`23`,category:`Updates`,question:`Where can I see what changed in an update?`,answer:`You can check the Shepherd Bible changelog for information about new features, improvements, fixes, and other changes included in releases.`}],a={render:()=>`
    <div class="section">
      <div class="container" style="max-width: 800px;">
        <h1 class="text-center" style="margin-bottom: 16px;">Help Center & FAQ</h1>
        <p class="text-center" style="color: var(--color-text-muted); margin-bottom: 40px;">Find answers to common questions about Shepherd Bible.</p>
        
        <div class="search-container" style="margin-bottom: 40px;">
          <input type="text" id="faq-search" placeholder="Search questions..." class="search-input" aria-label="Search FAQ" />
        </div>

        <div id="faq-list" class="faq-list">
          ${i.map(e=>`
            <div class="faq-item" data-question="${e.question.toLowerCase()}">
              <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${e.id}">
                ${e.question}
                <span class="icon">+</span>
              </button>
              <div class="faq-answer" id="faq-answer-${e.id}" hidden>
                <p>${e.answer}</p>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
    <style>
      .search-input {
        width: 100%;
        padding: 16px;
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        color: var(--color-text);
        font-size: 1rem;
        font-family: var(--font-sans);
      }
      .search-input:focus { outline: 2px solid var(--color-primary); }
      .faq-item {
        border-bottom: 1px solid var(--color-border);
      }
      .faq-question {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: none;
        border: none;
        padding: 24px 0;
        font-size: 1.125rem;
        font-weight: 500;
        color: var(--color-text);
        cursor: pointer;
        text-align: left;
        font-family: var(--font-sans);
      }
      .faq-answer {
        padding-bottom: 24px;
        color: var(--color-text-muted);
        line-height: 1.6;
      }
      .faq-answer[hidden] { display: none; }
    </style>
  `,mount:()=>{document.querySelectorAll(`.faq-question`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`aria-expanded`)===`true`;e.setAttribute(`aria-expanded`,String(!t));let n=e.nextElementSibling;t?(n.setAttribute(`hidden`,`true`),e.querySelector(`.icon`).textContent=`+`):(n.removeAttribute(`hidden`),e.querySelector(`.icon`).textContent=`−`)})});let e=document.getElementById(`faq-search`),t=document.querySelectorAll(`.faq-item`);e?.addEventListener(`input`,e=>{let n=e.target.value.toLowerCase();t.forEach(e=>{let t=e.getAttribute(`data-question`)||``;e.style.display=t.includes(n)?`block`:`none`})})}},o={render:()=>`
    <div class="section">
      <div class="container">
        <div class="text-center" style="margin-bottom: 64px;">
          <h1>Community Hub</h1>
          <p style="color: var(--color-text-muted); margin-top: 16px;">
            A space to grow together. Ask questions, share your journey, and suggest improvements.
          </p>
          <div class="static-notice" style="margin-top: 24px; display: inline-block; padding: 12px 24px; background: var(--color-surface-muted); border-radius: var(--radius-md); font-size: 0.875rem;">
            <em>Note: The community board is currently a static preview. Interactive discussions and accounts will arrive in a future update.</em>
          </div>
        </div>

        <div class="grid grid-2">
          <!-- Sample Demo Post 1 -->
          <div class="card community-card">
            <div class="card-header">
              <span class="badge">Testimony</span>
              <span class="date">Oct 15, 2026</span>
            </div>
            <h3>Finding peace in the Psalms</h3>
            <p>"Reading through Psalm 91 this morning using the new highlight feature really helped center my day..."</p>
            <div class="author">— User1 <em></em></div>
          </div>

          <!-- Sample Demo Post 2 -->
          <div class="card community-card">
            <div class="card-header">
              <span class="badge badge-feature">Feature Request</span>
              <span class="date">Oct 14, 2026</span>
            </div>
            <h3>Audio Bible Support</h3>
            <p>"It would be incredible to have text-to-speech or integrated audio bibles for commuting."</p>
            <div class="author">— User2 <em></em></div>
          </div>
        </div>
      </div>
    </div>
    <style>
      .community-card { display: flex; flex-direction: column; gap: 12px; }
      .card-header { display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem; }
      .badge { background: var(--color-surface-muted); padding: 4px 12px; border-radius: 20px; font-weight: 500; }
      .badge-feature { background: #e6f0fa; color: #0056b3; }
      [data-theme="dark"] .badge-feature { background: #1a365d; color: #90cdf4; }
      .date { color: var(--color-text-muted); }
      .author { margin-top: auto; font-size: 0.875rem; color: var(--color-text-muted); font-style: italic; }
    </style>
  `},s=[{id:`v1.1.420.0`,version:`1.1.420.0`,date:`2026-09-21`,title:`Shepherd Bible Improvements`,description:`Continued improvements to Shepherd Bible with a focus on reliability, Bible study, and a better reading experience.`,changes:[`Improved application stability`,`Improved handling of Bible data and local storage`,`Improved Bible search reliability`,`Improved notes, highlights, and bookmarks handling`,`Improved error handling for damaged or unavailable local data`,`Continued performance improvements`],type:`improvement`},{id:`v1.1.416.0`,version:`1.1.416.0`,date:`2026-09-XX`,title:`Bible Study Improvements`,description:`Improvements to Bible reading and personal study features.`,changes:[`Improved Bible reading experience`,`Improved Bible search`,`Improved notes and annotation handling`,`Improved highlights and bookmarks`,`Improved application stability`],type:`improvement`},{id:`v1.1.405.0`,version:`1.1.405.0`,date:`2026-09-XX`,title:`Stability and Compatibility`,description:`Focused on compatibility, stability, and improving the reliability of Bible study data.`,changes:[`Improved application compatibility`,`Improved local data handling`,`Improved recovery from database-related problems`,`Improved error handling`,`Fixed several stability issues`],type:`fix`},{id:`community`,version:`Community`,date:`2026-09-21`,title:`Shepherd Bible Community`,description:`Introducing the Shepherd Bible community experience, created to give Bible readers a place to connect, encourage one another, and share their journey.`,changes:[`Added Bible discussion areas`,`Added encouragement posts`,`Added testimony sharing`,`Added community questions`,`Added replies and conversations`,`Added post and reply interactions`,`Added community reporting tools`],type:`feature`},{id:`verse-image`,version:`Verse Image Creator`,date:`2026-09-21`,title:`Create Scripture Images`,description:`A new creative experience for turning Bible verses into beautiful shareable images.`,changes:[`Added Bible verse image editor`,`Added customizable text`,`Added font controls`,`Added color controls`,`Added background customization`,`Added layout controls`,`Added visual effects`,`Added templates`,`Added PNG export`,`Added undo and redo support`],type:`feature`}],c={render:()=>`
      <div class="section">
        <div class="container" style="max-width: 800px;">
          
          <div class="text-center" style="margin-bottom: 56px;">
            <h1 style="margin-bottom: 16px;">Changelog & Updates</h1>
            <p style="color: var(--color-text-muted); font-size: 1.125rem;">
              Track continuous updates, fixes, and feature additions for Shepherd Bible.
            </p>
            <div style="margin-top: 20px; display: inline-block; padding: 10px 18px; background: var(--color-surface-muted); border-radius: var(--radius-md); font-size: 0.875rem;">
              <em>Demonstration release log. Official releases will be updated here live.</em>
            </div>
          </div>

          <div class="changelog-list">
            ${(s.length>0?s:[{id:`v1.0.0-preview`,version:`1.0.0 (Preview)`,date:`October 2026`,title:`Initial Web & Community Launch`,description:`The foundation for the Shepherd Bible web experience, help center, and community preview.`,changes:[`Distraction-free reading interface design and typography`,`Searchable FAQ & Help Center with accordion controls`,`Static Community Hub preview for future discussion platform`,`Light and dark peaceful themes with local preference storage`],type:`feature`},{id:`v0.9.0-beta`,version:`0.9.0 (Beta)`,date:`September 2026`,title:`Core Reading & Offline Support`,description:`Early beta build introducing local Bible caching and offline reading performance.`,changes:[`Added KJV and WEB translation support`,`Local storage caching for fast offline verse loading`,`Responsive layout optimizations for mobile and tablet readers`],type:`improvement`}]).map(e=>`
              <article class="changelog-card">
                <div class="changelog-header">
                  <div class="version-group">
                    <span class="version-tag">${e.version}</span>
                    <span class="type-badge badge-${e.type}">${e.type}</span>
                  </div>
                  <time class="release-date">${e.date}</time>
                </div>

                <h2 class="changelog-title">${e.title}</h2>
                <p class="changelog-description">${e.description}</p>

                <div class="changelog-changes">
                  <h3>What's New</h3>
                  <ul>
                    ${e.changes.map(e=>`<li>${e}</li>`).join(``)}
                  </ul>
                </div>
              </article>
            `).join(``)}
          </div>

        </div>
      </div>

      <style>
        .changelog-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .changelog-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 32px;
          box-shadow: var(--shadow-sm);
        }

        .changelog-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .version-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .version-tag {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 1.125rem;
          color: var(--color-primary);
        }

        .type-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 12px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .badge-feature {
          background: #e6f4ea;
          color: #137333;
        }

        .badge-improvement {
          background: #e8f0fe;
          color: #1a73e8;
        }

        .badge-fix {
          background: #fce8e6;
          color: #c5221f;
        }

        .badge-security {
          background: #fef7e0;
          color: #b06000;
        }

        [data-theme="dark"] .badge-feature {
          background: #132e1f;
          color: #81c995;
        }

        [data-theme="dark"] .badge-improvement {
          background: #172b4d;
          color: #8ab4f8;
        }

        [data-theme="dark"] .badge-fix {
          background: #3c1e1e;
          color: #f28b82;
        }

        [data-theme="dark"] .badge-security {
          background: #332a15;
          color: #fdd663;
        }

        .release-date {
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }

        .changelog-title {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }

        .changelog-description {
          color: var(--color-text-muted);
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .changelog-changes h3 {
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-text-muted);
          margin-bottom: 12px;
        }

        .changelog-changes ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .changelog-changes li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          color: var(--color-text);
          font-size: 1rem;
          line-height: 1.5;
        }

        .changelog-changes li::before {
          content: "•";
          position: absolute;
          left: 4px;
          color: var(--color-accent);
          font-weight: bold;
        }

        @media (max-width: 600px) {
          .changelog-card {
            padding: 24px;
          }
          .changelog-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      </style>
    `},l={render:()=>`
    <div class="section">
      <div class="container" style="max-width: 800px;">
        
        <div class="text-center" style="margin-bottom: 64px;">
          <h1 style="margin-bottom: 24px;">About Shepherd Bible</h1>
          <p class="about-lead">
            Shepherd Bible is a digital space designed for peace, focus, and connection. We believe that reading Scripture should be a distraction-free experience that brings clarity to your day.
          </p>
        </div>

        <div class="about-content">
          <h2>Our Purpose</h2>
          <p>
            In a world of constant notifications and digital noise, Shepherd Bible was created to be a quiet retreat. 
            Our application focuses on elegant typography, intuitive design, and essential study tools so you can focus entirely on the Word.
          </p>

          <h2>Development Philosophy</h2>
          <p>
            We are building this application with a simple philosophy: <strong>craftsmanship and care</strong>. 
            Instead of rushing to add every possible feature, we prioritize stability, accessibility, and a beautiful user interface. 
            Every update is thoughtfully designed to enhance your reading experience without overwhelming the screen.
          </p>

          <div class="grid grid-2 about-cards">
            <div class="card">
              <h3>The Community Mission</h3>
              <p>"Share a piece of your journey to inspire another." We envision a community where readers can encourage one another, share insights, and help shape the future of the application together.</p>
            </div>
            <div class="card">
              <h3>Supported Platforms</h3>
              <p>Shepherd Bible is currently in active development to bring you the best experience across your devices.</p>
              <p class="todo-note"><em>(TODO: Update with official iOS/Android App Store and Web release links once confirmed and published.)</em></p>
            </div>
          </div>

          <h2>How You Can Help</h2>
          <p>
            Shepherd Bible grows through the insights of its readers. Whether you have found a bug, have an idea for a new feature, or simply want to share a testimony of how reading the Word has helped you, your voice matters.
          </p>
          
          <div class="action-container">
            <a href="#/community" class="btn btn-primary">Visit the Community</a>
            <a href="#/faq" class="btn btn-secondary">Read the FAQ</a>
          </div>
        </div>

      </div>
    </div>
    
    <style>
      .about-lead {
        font-size: 1.25rem;
        color: var(--color-text-muted);
        line-height: 1.8;
      }
      
      .about-content h2 {
        margin-top: 48px;
        margin-bottom: 16px;
        font-size: 1.75rem;
      }
      
      .about-content p {
        font-size: 1.125rem;
        color: var(--color-text);
        margin-bottom: 24px;
      }
      
      .about-cards {
        margin: 48px 0;
      }
      
      .about-cards .card {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      
      .about-cards h3 {
        font-family: var(--font-sans);
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0;
      }
      
      .about-cards p {
        font-size: 0.95rem;
        color: var(--color-text-muted);
        margin: 0;
      }

      .todo-note {
        margin-top: auto !important;
        font-size: 0.85rem !important;
        background: var(--color-surface-muted);
        padding: 8px 12px;
        border-radius: 6px;
      }
      
      .action-container {
        margin-top: 40px;
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
      }

      @media (max-width: 600px) {
        .action-container {
          justify-content: stretch;
          flex-direction: column;
        }
        .action-container .btn {
          width: 100%;
        }
      }
    </style>
  `},u={render:()=>`
    <div class="section">
      <div class="container" style="max-width: 860px;">
        
        <!-- Header -->
        <div class="text-center" style="margin-bottom: 48px;">
          <h1 style="margin-bottom: 16px;">Privacy Policy & Terms of Service</h1>
          <p style="color: var(--color-text-muted); font-size: 1.1rem;">
            Last updated: October 2026
          </p>

          <!-- Toggle Sub-navigation -->
          <div class="policy-nav" style="margin-top: 32px;">
            <button class="policy-tab active" data-target="privacy-section">Privacy Policy</button>
            <button class="policy-tab" data-target="terms-section">Terms of Service</button>
          </div>
        </div>

        <!-- Privacy Policy Content -->
        <article id="privacy-section" class="policy-content card">
          <h2>Privacy Policy</h2>
          <p class="lead-text">
            At Shepherd Bible, we believe your spiritual journey and personal Bible study notes should remain private. We are committed to protecting your personal information and being transparent about our data practices.
          </p>

          <hr class="divider" />

          <h3>1. Offline-First Data Architecture</h3>
          <p>
            Shepherd Bible applications (including <em>"Bible - Multi Version"</em> on Windows, mobile, and desktop platforms) operate as offline-first software:
          </p>
          <ul>
            <li><strong>Bible Notes, Highlights, & Bookmarks:</strong> Stored locally on your personal device using local storage or a local SQLite database. We do not transmit or store your personal study notes on external servers in the current static version.</li>
            <li><strong>Audio & Scripture Downloads:</strong> Bible text translations and audio files downloaded within the app are stored locally on your device storage for offline access.</li>
          </ul>

          <h3>2. Website Data Collection</h3>
          <p>
            Our website (hosted on GitHub Pages) is a static community and informational website:
          </p>
          <ul>
            <li><strong>Theme Preference:</strong> We store a small item in your browser’s <code>localStorage</code> (<code>sb-theme</code>) strictly to remember your choice between light and dark modes.</li>
            <li><strong>No Tracking Cookies:</strong> We do not use third-party tracking cookies, invasive advertising scripts, or cross-site telemetry tools.</li>
            <li><strong>Server Logs:</strong> As a static site hosted via GitHub Pages, basic request logs (such as IP addresses and browser headers) may be automatically logged by GitHub infrastructure for security and operational diagnostics in accordance with <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener">GitHub's Privacy Statement</a>.</li>
          </ul>

          <h3>3. Third-Party App Stores</h3>
          <p>
            When downloading Shepherd Bible through app storefronts (such as the Microsoft Store, Google Play Store, or Apple App Store), telemetry related to app installations, crashes, or updates is governed by the privacy policy of the respective store platform.
          </p>

          <h3>4. Future Interactive Community Features</h3>
          <p>
            When interactive community accounts, cloud synchronization, or forum discussions are integrated in future updates, we will update this policy and request your explicit consent before collecting account credentials or sync data.
          </p>

          <h3>5. Contact Us</h3>
          <p>
            If you have questions regarding this Privacy Policy or data privacy, please reach out through our <a href="#/community">Community Hub</a> or open an inquiry on our official GitHub repository.
          </p>
        </article>

        <!-- Terms of Service Content -->
        <article id="terms-section" class="policy-content card" style="display: none;">
          <h2>Terms of Service</h2>
          <p class="lead-text">
            By downloading, installing, or using the Shepherd Bible website or application ("Bible - Multi Version"), you agree to be bound by these Terms of Service.
          </p>

          <hr class="divider" />

          <h3>1. Use of Service</h3>
          <p>
            Shepherd Bible is provided for personal, educational, and non-commercial Bible study and community growth. You agree to use the application and website in accordance with all applicable local, national, and international laws.
          </p>

          <h3>2. Scripture Translations & Intellectual Property</h3>
          <ul>
            <li><strong>Public Domain Translations:</strong> Public domain Bible versions (such as King James Version - KJV, American Standard Version - ASV, World English Bible - WEB) are distributed freely according to their respective open licensing models.</li>
            <li><strong>Copyrighted Translations:</strong> Any copyrighted translation included now or in future updates is used under license or explicit authorization from the respective publisher.</li>
            <li><strong>Application Software:</strong> The visual interface, branding, logo, custom code, and software design of Shepherd Bible remain the intellectual property of the project creators.</li>
          </ul>

          <h3>3. Community Guidelines & Conduct</h3>
          <p>
            When participating in community discussions, feature requests, or testimonies:
          </p>
          <ul>
            <li>Treat fellow community members with dignity, respect, and grace.</li>
            <li>Do not post hateful, defamatory, obscene, or harassing content.</li>
            <li>Do not post unauthorized commercial solicitations, spam, or malicious links.</li>
          </ul>

          <h3>4. Disclaimer of Warranties</h3>
          <p>
            Shepherd Bible is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis without warranties of any kind, whether express or implied. While we strive for absolute accuracy and uptime, we do not guarantee uninterrupted service or error-free software execution.
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, Shepherd Bible and its developers shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use the software or website.
          </p>

          <h3>6. Revisions to Terms</h3>
          <p>
            We reserve the right to modify these Terms at any time. Updated terms will be posted directly to this page with an updated revision date.
          </p>
        </article>

      </div>
    </div>

    <style>
      .policy-nav {
        display: inline-flex;
        gap: 8px;
        background: var(--color-surface-muted);
        padding: 6px;
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
      }

      .policy-tab {
        background: none;
        border: none;
        padding: 10px 24px;
        border-radius: var(--radius-md);
        font-family: var(--font-sans);
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--color-text-muted);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .policy-tab.active {
        background: var(--color-surface);
        color: var(--color-primary);
        font-weight: 600;
        box-shadow: var(--shadow-sm);
      }

      .policy-content {
        padding: 48px;
        border-radius: var(--radius-lg);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
      }

      .policy-content h2 {
        font-size: 2rem;
        margin-bottom: 12px;
      }

      .lead-text {
        font-size: 1.1rem;
        color: var(--color-text-muted);
        line-height: 1.7;
      }

      .divider {
        border: none;
        border-top: 1px solid var(--color-border);
        margin: 32px 0;
      }

      .policy-content h3 {
        font-family: var(--font-sans);
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--color-text);
        margin: 32px 0 12px;
      }

      .policy-content p, .policy-content li {
        font-size: 1rem;
        color: var(--color-text);
        line-height: 1.7;
      }

      .policy-content ul {
        margin: 12px 0 24px 24px;
      }

      .policy-content li {
        margin-bottom: 8px;
      }

      .policy-content code {
        background: var(--color-surface-muted);
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.875rem;
        color: var(--color-primary);
      }

      @media (max-width: 600px) {
        .policy-content {
          padding: 24px;
        }
        .policy-nav {
          width: 100%;
          justify-content: stretch;
        }
        .policy-tab {
          flex: 1;
          padding: 8px 12px;
          font-size: 0.85rem;
        }
      }
    </style>
  `,mount:()=>{let e=document.querySelectorAll(`.policy-tab`),t=document.querySelectorAll(`.policy-content`);e.forEach(n=>{n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-target`);e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),t.forEach(e=>{e.id===r?e.style.display=`block`:e.style.display=`none`})})})}};function d(){let e=`elem_verse_text`;return{width:1080,height:1080,padding:60,preset:`square`,background:{type:`gradient`,color:`#2C1B18`,gradient:{type:`linear`,colors:[`#3D1E18`,`#1A0B08`],angle:135},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.2,blur:0},elements:[{id:e,type:`text`,text:`“For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.”`,fontFamily:`Merriweather`,fontSize:42,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,letterSpacing:0,lineHeight:1.4,textTransform:`none`,color:`#FAF7F2`,gradient:{type:`linear`,colors:[`#FAF7F2`,`#FAF7F2`],angle:90},outlineColor:`transparent`,outlineWidth:0,shadowColor:`rgba(0, 0, 0, 0.4)`,shadowBlur:8,shadowOffsetX:2,shadowOffsetY:4,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0,x:90,y:360,width:900,height:300,rotation:0,opacity:1,isVerseText:!0},{id:`elem_verse_ref`,type:`text`,text:`JOHN 3:16`,fontFamily:`Montserrat`,fontSize:26,fontWeight:`600`,fontStyle:`normal`,textAlign:`center`,verticalAlign:`middle`,letterSpacing:4,lineHeight:1.2,textTransform:`uppercase`,color:`#D4AF37`,gradient:{type:`linear`,colors:[`#D4AF37`,`#D4AF37`],angle:90},outlineColor:`transparent`,outlineWidth:0,shadowColor:`rgba(0, 0, 0, 0.3)`,shadowBlur:4,shadowOffsetX:1,shadowOffsetY:2,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0,x:90,y:720,width:900,height:60,rotation:0,opacity:1,isReference:!0}],selected_element_id:e}}var f=class{listeners=new Map;on(e,t){let n=this.listeners.get(e);n||(n=new Set,this.listeners.set(e,n)),n.add(t)}off(e,t){let n=this.listeners.get(e);n&&(n.delete(t),n.size===0&&this.listeners.delete(e))}emit(e,t){let n=this.listeners.get(e);if(n)for(let e of n)e(t)}removeAll(){this.listeners.clear()}},p=class{undoStack=[];redoStack=[];maxHistorySize;constructor(e=50){this.maxHistorySize=e}deepClone(e){if(typeof structuredClone==`function`)try{return structuredClone(e)}catch{}return JSON.parse(JSON.stringify(e))}push(e){let t=this.deepClone(e);this.undoStack.push(t),this.undoStack.length>this.maxHistorySize&&this.undoStack.shift(),this.redoStack=[]}undo(e){if(!this.canUndo())return null;let t=this.undoStack.pop();return this.redoStack.push(this.deepClone(e)),this.deepClone(t)}redo(e){if(!this.canRedo())return null;let t=this.redoStack.pop();return this.undoStack.push(this.deepClone(e)),this.deepClone(t)}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}clear(){this.undoStack=[],this.redoStack=[]}},m=class{imageCache=new Map;async render(e,t,n,r){if(e.save(),r.type===`solid`)e.fillStyle=r.color||`#1A1A1A`,e.fillRect(0,0,t,n);else if(r.type===`gradient`){let i=r.gradient,a;if(i.type===`radial`){let r=t/2,i=n/2,o=Math.max(t,n)/1.2;a=e.createRadialGradient(r,i,0,r,i,o)}else{let r=(i.angle||0)*Math.PI/180,o=t/2-Math.cos(r)*t/2,s=n/2-Math.sin(r)*n/2,c=t/2+Math.cos(r)*t/2,l=n/2+Math.sin(r)*n/2;a=e.createLinearGradient(o,s,c,l)}let o=i.colors&&i.colors.length>=2?i.colors:[`#3D1E18`,`#1A0B08`];o.forEach((e,t)=>{a.addColorStop(t/(o.length-1),e)}),e.fillStyle=a,e.fillRect(0,0,t,n)}else if(r.type===`image`&&r.imageUrl){e.fillStyle=r.color||`#000000`,e.fillRect(0,0,t,n);try{let i=await this.loadImage(r.imageUrl);e.save(),r.blur>0&&(e.filter=`blur(${r.blur}px)`),e.globalAlpha=Math.max(0,Math.min(1,r.imageOpacity??1));let a=i.width/i.height,o=t/n,s=t,c=n,l=0,u=0;a>o?(s=n*a,l=(t-s)/2):(c=t/a,u=(n-c)/2),e.drawImage(i,l,u,s,c),e.restore()}catch(e){console.warn(`Failed to render background image:`,e)}}r.overlayOpacity>0&&r.overlayColor&&(e.save(),e.globalAlpha=Math.max(0,Math.min(1,r.overlayOpacity)),e.fillStyle=r.overlayColor,e.fillRect(0,0,t,n),e.restore()),e.restore()}loadImage(e){return this.imageCache.has(e)?Promise.resolve(this.imageCache.get(e)):new Promise((t,n)=>{let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>{this.imageCache.set(e,r),t(r)},r.onerror=e=>n(e),r.src=e})}clearCache(){this.imageCache.clear()}},h=class{static applyTextShadow(e,t){t.shadowBlur>0||t.shadowOffsetX!==0||t.shadowOffsetY!==0?(e.shadowColor=t.shadowColor||`rgba(0, 0, 0, 0.5)`,e.shadowBlur=t.shadowBlur||0,e.shadowOffsetX=t.shadowOffsetX||0,e.shadowOffsetY=t.shadowOffsetY||0):this.clearShadow(e)}static applyTextGlow(e,t){let n=t.glowColor,r=t.glowBlur??0,i=Math.max(0,Math.min(1,t.glowIntensity??0));if(!n||n===`transparent`||r<=0||i<=0){this.clearShadow(e);return}e.shadowColor=this.withAlpha(n,i),e.shadowBlur=r,e.shadowOffsetX=0,e.shadowOffsetY=0}static clearShadow(e){e.shadowColor=`transparent`,e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0}static drawTextOutline(e,t,n,r,i){i.outlineWidth>0&&i.outlineColor&&i.outlineColor!==`transparent`&&(e.save(),e.strokeStyle=i.outlineColor,e.lineWidth=i.outlineWidth*2,e.lineJoin=`round`,e.lineCap=`round`,e.miterLimit=2,e.strokeText(t,n,r),e.restore())}static drawRoundedRect(e,t,n,r,i,a){let o=Math.max(0,Math.min(a,Math.min(r/2,i/2)));e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+i-o),e.quadraticCurveTo(t+r,n+i,t+r-o,n+i),e.lineTo(t+o,n+i),e.quadraticCurveTo(t,n+i,t,n+i-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath()}static withAlpha(e,t){let n=Math.max(0,Math.min(1,t));if(e.startsWith(`#`)){let t=e.substring(1);if(t.length===3&&(t=t.split(``).map(e=>e+e).join(``)),t.length===6)return`rgba(${parseInt(t.substring(0,2),16)}, ${parseInt(t.substring(2,4),16)}, ${parseInt(t.substring(4,6),16)}, ${n})`}if(e.startsWith(`rgba(`))return e.replace(/rgba\(([^)]+)\)/,(e,t)=>{let r=t.split(`,`).map(e=>e.trim());return`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${n})`});if(e.startsWith(`rgb(`)){let t=e.substring(4,e.length-1).split(`,`).map(e=>e.trim());return`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${n})`}return e}static withTransform(e,t,n,r,i,a,o,s){e.save(),e.globalAlpha=Math.max(0,Math.min(1,o));let c=t+r/2,l=n+i/2;e.translate(c,l),a!==0&&e.rotate(a*Math.PI/180),e.translate(-c,-l),s(),e.restore()}},g=class{render(e,t){h.withTransform(e,t.x,t.y,t.width,t.height,t.rotation,t.opacity,()=>{this.drawTextContent(e,t)})}drawTextContent(e,t){e.save(),e.font=`${t.fontStyle===`italic`?`italic `:``}${t.fontWeight||`400`} ${t.fontSize}px "${t.fontFamily}", serif, sans-serif`,e.textAlign=t.textAlign||`center`,e.textBaseline=`middle`,`letterSpacing`in e&&(e.letterSpacing=`${t.letterSpacing||0}px`);let n=this.applyTextTransform(t.text,t.textTransform),r=this.wrapText(e,n,Math.max(1,t.width-(t.padding??0)*2));if(r.length===0){e.restore();return}let i=t.fontSize*(t.lineHeight||1.3),a=t.x+t.width/2;t.textAlign===`left`?a=t.x+(t.padding??0):t.textAlign===`right`&&(a=t.x+t.width-(t.padding??0));let o=r.length*i,s=t.y+t.height/2-o/2+i/2;t.verticalAlign===`top`?s=t.y+(t.padding??0)+i/2:t.verticalAlign===`bottom`&&(s=t.y+t.height-(t.padding??0)-o+i/2),this.drawTextBackground(e,t,r,i,a,s),r.forEach((n,r)=>{let o=s+r*i;h.applyTextGlow(e,t),this.drawTextFill(e,n,a,o,t),h.clearShadow(e),h.applyTextShadow(e,t),this.drawTextFill(e,n,a,o,t),h.clearShadow(e),h.drawTextOutline(e,n,a,o,t),this.drawTextFill(e,n,a,o,t)}),h.clearShadow(e),e.restore()}drawTextFill(e,t,n,r,i){e.fillStyle=i.gradient&&i.gradient.colors.length>=2?this.createTextGradient(e,i,n,r):i.color||`#FFFFFF`,e.fillText(t,n,r)}createTextGradient(e,t,n,r){let i=t.gradient;if(i.type===`radial`){let a=Math.max(t.width,t.height)/2,o=e.createRadialGradient(n,r,0,n,r,a);return this.addGradientStops(o,i.colors),o}let a=(i.angle||0)*Math.PI/180,o=Math.sqrt(t.width**2+t.height**2),s=t.x+t.width/2,c=t.y+t.height/2,l=s-Math.cos(a)*o/2,u=c-Math.sin(a)*o/2,d=s+Math.cos(a)*o/2,f=c+Math.sin(a)*o/2,p=e.createLinearGradient(l,u,d,f);return this.addGradientStops(p,i.colors),p}addGradientStops(e,t){let n=t.length;t.forEach((t,r)=>{let i=n<=1?0:r/(n-1);e.addColorStop(i,t)})}drawTextBackground(e,t,n,r,i,a){if(!t.backgroundColor||t.backgroundColor===`transparent`)return;let o=t.padding??0,s=Math.max(...n.map(t=>e.measureText(t).width))+o*2,c=n.length*r+o*2,l=t.x+t.width/2-s/2;t.textAlign===`left`?l=t.x:t.textAlign===`right`&&(l=t.x+t.width-s);let u=t.y+t.height/2-c/2;t.glowColor&&t.glowColor!==`transparent`&&(t.glowBlur??0)>0&&(e.save(),e.shadowColor=t.glowColor,e.shadowBlur=t.glowBlur??0,e.shadowOffsetX=0,e.shadowOffsetY=0,e.fillStyle=t.backgroundColor,h.drawRoundedRect(e,l,u,s,c,t.backgroundRadius??0),e.fill(),e.restore()),e.save(),e.fillStyle=t.backgroundColor,h.drawRoundedRect(e,l,u,s,c,t.backgroundRadius??0),e.fill(),e.restore()}applyTextTransform(e,t){switch(t){case`uppercase`:return e.toUpperCase();case`lowercase`:return e.toLowerCase();case`capitalize`:return e.replace(/\b\w/g,e=>e.toUpperCase());default:return e}}wrapText(e,t,n){if(!t)return[];let r=t.split(`
`),i=[];return r.forEach(t=>{let r=t.split(` `),a=``;for(let t=0;t<r.length;t++){let o=a?`${a} ${r[t]}`:r[t];e.measureText(o).width>n&&t>0?(i.push(a),a=r[t]):a=o}i.push(a)}),i}},_=[{id:`merriweather`,family:`Merriweather`,category:`serif`,googleFontQuery:`Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700`},{id:`playfair-display`,family:`Playfair Display`,category:`serif`,googleFontQuery:`Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600`},{id:`lora`,family:`Lora`,category:`serif`,googleFontQuery:`Lora:ital,wght@0,400;0,600;0,700;1,400;1,600`},{id:`libre-baskerville`,family:`Libre Baskerville`,category:`serif`,googleFontQuery:`Libre+Baskerville:ital,wght@0,400;0,700;1,400`},{id:`cormorant-garamond`,family:`Cormorant Garamond`,category:`serif`,googleFontQuery:`Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400`},{id:`cinzel`,family:`Cinzel`,category:`display`,googleFontQuery:`Cinzel:wght@400;600;700`},{id:`inter`,family:`Inter`,category:`sans-serif`,googleFontQuery:`Inter:wght@300;400;500;600;700`},{id:`montserrat`,family:`Montserrat`,category:`sans-serif`,googleFontQuery:`Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,400`},{id:`great-vibes`,family:`Great Vibes`,category:`handwriting`,googleFontQuery:`Great+Vibes`},{id:`caveat`,family:`Caveat`,category:`handwriting`,googleFontQuery:`Caveat:wght@400;600;700`}],v=new class{loadedFonts=new Set;loadingPromises=new Map;async loadFont(e){if(this.loadedFonts.has(e))return!0;if(this.loadingPromises.has(e))return this.loadingPromises.get(e);let t=_.find(t=>t.family.toLowerCase()===e.toLowerCase()),n=(async()=>{try{if(t){let e=`google-font-${t.id}`;if(!document.getElementById(e)){let n=document.createElement(`link`);n.id=e,n.rel=`stylesheet`,n.href=`https://fonts.googleapis.com/css2?family=${t.googleFontQuery}&display=swap`,document.head.appendChild(n)}}return`fonts`in document&&await document.fonts.load(`16px "${e}"`),this.loadedFonts.add(e),!0}catch(t){return console.warn(`Font load warning for "${e}":`,t),this.loadedFonts.add(e),!1}finally{this.loadingPromises.delete(e)}})();return this.loadingPromises.set(e,n),n}isLoaded(e){return this.loadedFonts.has(e)}getAvailableFonts(){return _}},y=class{handleSize=12;rotateDistance=34;render(e,t){e.save();let n=t.x+t.width/2,r=t.y+t.height/2;e.translate(n,r),t.rotation!==0&&e.rotate(t.rotation*Math.PI/180),e.translate(-n,-r);let i=t.x-4,a=t.x+t.width+4,o=t.y-4,s=t.y+t.height+4,c=t.x+t.width/2,l=t.y+t.height/2;e.strokeStyle=`#D4AF37`,e.lineWidth=2,e.setLineDash([6,6]),e.strokeRect(i,o,a-i,s-o),e.setLineDash([]),[{x:i,y:o},{x:a,y:o},{x:a,y:s},{x:i,y:s},{x:c,y:o},{x:a,y:l},{x:c,y:s},{x:i,y:l}].forEach(t=>{this.drawHandle(e,t.x,t.y)});let u=o-this.rotateDistance;e.beginPath(),e.moveTo(c,o),e.lineTo(c,u+7),e.strokeStyle=`#D4AF37`,e.lineWidth=2,e.stroke(),this.drawRotateHandle(e,c,u),e.restore()}drawHandle(e,t,n){let r=this.handleSize;e.save(),e.fillStyle=`#FAF7F2`,e.strokeStyle=`#3D1E18`,e.lineWidth=2,e.fillRect(t-r/2,n-r/2,r,r),e.strokeRect(t-r/2,n-r/2,r,r),e.restore()}drawRotateHandle(e,t,n){e.save(),e.beginPath(),e.arc(t,n,8,0,Math.PI*2),e.fillStyle=`#FAF7F2`,e.fill(),e.strokeStyle=`#3D1E18`,e.lineWidth=2,e.stroke(),e.beginPath(),e.arc(t,n,4,-Math.PI*.75,Math.PI*.75),e.strokeStyle=`#3D1E18`,e.lineWidth=1.5,e.stroke(),e.beginPath(),e.moveTo(t+3,n-3),e.lineTo(t+5,n-3),e.lineTo(t+4,n-1),e.stroke(),e.restore()}getHandlePoint(e,t){let n=e.x-4,r=e.x+e.width+4,i=e.y-4,a=e.y+e.height+4,o=e.x+e.width/2,s=e.y+e.height/2;switch(t){case`top-left`:return{x:n,y:i};case`top`:return{x:o,y:i};case`top-right`:return{x:r,y:i};case`right`:return{x:r,y:s};case`bottom-right`:return{x:r,y:a};case`bottom`:return{x:o,y:a};case`bottom-left`:return{x:n,y:a};case`left`:return{x:n,y:s};case`rotate`:return{x:o,y:i-this.rotateDistance}}}hitTest(e,t,n){let r=[`top-left`,`top`,`top-right`,`right`,`bottom-right`,`bottom`,`bottom-left`,`left`,`rotate`],i=e.x+e.width/2,a=e.y+e.height/2,o=-(e.rotation*Math.PI)/180,s=t-i,c=n-a,l=s*Math.cos(o)-c*Math.sin(o)+i,u=s*Math.sin(o)+c*Math.cos(o)+a;for(let t of r){let n=this.getHandlePoint(e,t);if(Math.abs(l-n.x)<=12&&Math.abs(u-n.y)<=12)return t}return null}getCursor(e){switch(e){case`left`:case`right`:return`ew-resize`;case`top`:case`bottom`:return`ns-resize`;case`top-left`:case`bottom-right`:return`nwse-resize`;case`top-right`:case`bottom-left`:return`nesw-resize`;case`rotate`:return`grab`;default:return`default`}}},b=class{canvas;ctx;backgroundRenderer=new m;textRenderer=new g;selectionHandles=new y;showSelectionControls=!0;constructor(e){this.canvas=e;let t=e.getContext(`2d`,{willReadFrequently:!0});if(!t)throw Error(`Unable to obtain 2D Canvas Context`);this.ctx=t}async render(e,t=!0){this.showSelectionControls=t,(this.canvas.width!==e.width||this.canvas.height!==e.height)&&(this.canvas.width=e.width,this.canvas.height=e.height);let n=e.elements.filter(e=>e.type===`text`).map(e=>v.loadFont(e.fontFamily));if(await Promise.all(n),this.ctx.clearRect(0,0,e.width,e.height),await this.backgroundRenderer.render(this.ctx,e.width,e.height,e.background),e.elements.forEach(e=>{e.type===`text`?this.textRenderer.render(this.ctx,e):e.type===`shape`&&this.renderShape(e)}),this.showSelectionControls&&e.selected_element_id){let t=e.elements.find(t=>t.id===e.selected_element_id);t&&this.renderSelectionOverlay(t)}}renderShape(e){h.withTransform(this.ctx,e.x,e.y,e.width,e.height,e.rotation,e.opacity,()=>{if(this.ctx.save(),this.ctx.fillStyle=e.fillColor||`transparent`,this.ctx.strokeStyle=e.strokeColor||`#D4AF37`,this.ctx.lineWidth=e.strokeWidth||2,e.shapeType===`divider`||e.shapeType===`line`)this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y+e.height/2),this.ctx.lineTo(e.x+e.width,e.y+e.height/2),this.ctx.stroke();else if(e.shapeType===`rectangle`)this.ctx.fillRect(e.x,e.y,e.width,e.height),e.strokeWidth>0&&this.ctx.strokeRect(e.x,e.y,e.width,e.height);else if(e.shapeType===`circle`){this.ctx.beginPath();let t=e.width/2,n=e.height/2;this.ctx.ellipse(e.x+t,e.y+n,t,n,0,0,Math.PI*2),this.ctx.fill(),e.strokeWidth>0&&this.ctx.stroke()}this.ctx.restore()})}renderSelectionOverlay(e){this.selectionHandles.render(this.ctx,e)}getCanvas(){return this.canvas}},x=[{id:`classic`,name:`Classic Shepherd`,description:`Rich burgundy with warm gold accents and traditional serif typography.`,presetState:{background:{type:`gradient`,color:`#2C1B18`,gradient:{type:`linear`,colors:[`#4A241B`,`#160A07`],angle:135},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.22,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:42,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,color:`#FAF7F2`,letterSpacing:0,lineHeight:1.4,outlineColor:`transparent`,outlineWidth:0,shadowColor:`rgba(0,0,0,0.45)`,shadowBlur:10,shadowOffsetX:2,shadowOffsetY:4,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:26,fontWeight:`600`,fontStyle:`normal`,textAlign:`center`,color:`#D4AF37`,letterSpacing:4,lineHeight:1.2}},{id:`midnight-glow`,name:`Midnight Scripture`,description:`Deep midnight background with bright scripture and a subtle atmospheric glow.`,presetState:{background:{type:`gradient`,color:`#080B12`,gradient:{type:`radial`,colors:[`#20283A`,`#05070C`],angle:0},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.15,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:44,fontWeight:`400`,fontStyle:`normal`,textAlign:`center`,verticalAlign:`middle`,color:`#FFFFFF`,shadowColor:`rgba(0,0,0,0.6)`,shadowBlur:12,shadowOffsetX:0,shadowOffsetY:4,glowColor:`#B9D8FF`,glowBlur:18,glowIntensity:.7,outlineColor:`transparent`,outlineWidth:0,letterSpacing:0,lineHeight:1.45,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:24,fontWeight:`600`,color:`#B9D8FF`,letterSpacing:4,textAlign:`center`}},{id:`modern-card`,name:`Modern Card`,description:`Contemporary scripture typography placed over a soft translucent text panel.`,presetState:{background:{type:`gradient`,color:`#171717`,gradient:{type:`linear`,colors:[`#3A3A3A`,`#111111`],angle:145},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.15,blur:0}},textStyle:{fontFamily:`Inter`,fontSize:40,fontWeight:`500`,fontStyle:`normal`,textAlign:`center`,verticalAlign:`middle`,color:`#FFFFFF`,letterSpacing:0,lineHeight:1.4,backgroundColor:`rgba(255,255,255,0.10)`,backgroundRadius:24,padding:32,shadowColor:`rgba(0,0,0,0.35)`,shadowBlur:12,shadowOffsetX:0,shadowOffsetY:6,outlineColor:`transparent`,outlineWidth:0,glowColor:`transparent`,glowBlur:0,glowIntensity:0,blur:0},referenceStyle:{fontFamily:`Inter`,fontSize:22,fontWeight:`700`,color:`#D4AF37`,letterSpacing:3,textAlign:`center`}},{id:`forest-psalm`,name:`Forest Psalm`,description:`Deep forest green with warm cream typography inspired by nature and the Psalms.`,presetState:{background:{type:`gradient`,color:`#10251D`,gradient:{type:`radial`,colors:[`#28533D`,`#07130E`],angle:0},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.15,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:42,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,color:`#F5EFE2`,letterSpacing:0,lineHeight:1.45,shadowColor:`rgba(0,0,0,0.5)`,shadowBlur:10,shadowOffsetX:1,shadowOffsetY:4,outlineColor:`transparent`,outlineWidth:0,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:25,fontWeight:`600`,color:`#D8C58A`,letterSpacing:4,textAlign:`center`}},{id:`bold-proclamation`,name:`Bold Proclamation`,description:`Large bold typography designed for powerful scripture statements.`,presetState:{background:{type:`solid`,color:`#F4F0E8`,gradient:{type:`linear`,colors:[`#F4F0E8`,`#DDD4C4`],angle:180},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:0,blur:0}},textStyle:{fontFamily:`Montserrat`,fontSize:54,fontWeight:`800`,fontStyle:`normal`,textAlign:`center`,verticalAlign:`middle`,color:`#241B18`,letterSpacing:-1,lineHeight:1.2,shadowColor:`transparent`,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,outlineColor:`transparent`,outlineWidth:0,glowColor:`transparent`,glowBlur:0,glowIntensity:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:22,fontWeight:`700`,color:`#8A6330`,letterSpacing:3,textAlign:`center`}},{id:`royal-word`,name:`Royal Word`,description:`Rich purple tones with elegant gold typography and a luxurious presentation.`,presetState:{background:{type:`gradient`,color:`#21112F`,gradient:{type:`radial`,colors:[`#5A3277`,`#160A20`],angle:0},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:.12,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:43,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,gradient:{type:`linear`,colors:[`#FFF3B0`,`#D4AF37`],angle:90},color:`#D4AF37`,letterSpacing:0,lineHeight:1.4,shadowColor:`rgba(0,0,0,0.55)`,shadowBlur:10,shadowOffsetX:0,shadowOffsetY:4,glowColor:`#D4AF37`,glowBlur:8,glowIntensity:.25,outlineColor:`transparent`,outlineWidth:0,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:25,fontWeight:`700`,color:`#F7E7A9`,letterSpacing:4,textAlign:`center`}},{id:`text-glow`,name:`Text Glow`,description:`Bright scripture with a strong dark glow behind the letters for clear visibility on any background.`,presetState:{background:{type:`solid`,color:`#2A1515`,gradient:{type:`linear`,colors:[`#BC6565`,`#C3A9A9`],angle:180},imageOpacity:1,overlayColor:`#000000`,overlayOpacity:0,blur:0}},textStyle:{fontFamily:`Merriweather`,fontSize:42,fontWeight:`400`,fontStyle:`italic`,textAlign:`center`,verticalAlign:`middle`,color:`#FFFFFF`,letterSpacing:0,lineHeight:1.4,glowColor:`#000000`,glowBlur:14,glowIntensity:.9,shadowColor:`rgba(0, 0, 0, 0.85)`,shadowBlur:8,shadowOffsetX:0,shadowOffsetY:2,outlineColor:`rgba(0, 0, 0, 0.75)`,outlineWidth:1,backgroundColor:`transparent`,backgroundRadius:0,padding:0,blur:0},referenceStyle:{fontFamily:`Montserrat`,fontSize:24,fontWeight:`700`,fontStyle:`normal`,textAlign:`center`,color:`#FFFFFF`,letterSpacing:4,glowColor:`#000000`,glowBlur:10,glowIntensity:.85,shadowColor:`rgba(0, 0, 0, 0.8)`,shadowBlur:6,shadowOffsetX:0,shadowOffsetY:2,outlineColor:`rgba(0, 0, 0, 0.7)`,outlineWidth:1}}],S=class{static getTemplates(){return x}static applyTemplate(e,t){let n=x.find(t=>t.id===e);if(!n)return t;let r=JSON.parse(JSON.stringify(t));return n.presetState.background&&(r.background=JSON.parse(JSON.stringify(n.presetState.background))),n.presetState.width!==void 0&&(r.width=n.presetState.width),n.presetState.height!==void 0&&(r.height=n.presetState.height),n.presetState.padding!==void 0&&(r.padding=n.presetState.padding),n.presetState.preset!==void 0&&(r.preset=n.presetState.preset),r.elements=r.elements.map(e=>{if(e.type!==`text`)return e;let t=e;return t.isReference&&n.referenceStyle?{...t,...n.referenceStyle}:n.textStyle?{...t,...n.textStyle}:t}),r}},C={format:`png`,quality:.95,fileName:`bible-verse`},w=class{static async exportDesign(e,t={}){let n={...C,...t},r=document.createElement(`canvas`);r.width=e.width,r.height=e.height,await new b(r).render(e,!1);let i=this.getMimeType(n.format),a=r.toDataURL(i,n.quality),o=`${n.fileName||`bible-verse`}.${n.format}`,s=document.createElement(`a`);s.download=o,s.href=a,document.body.appendChild(s),s.click(),document.body.removeChild(s)}static getMimeType(e){switch(e.toLowerCase()){case`jpeg`:case`jpg`:return`image/jpeg`;case`webp`:return`image/webp`;default:return`image/png`}}},T=`shepherd_bible_verse_image_editor`,E=class{state;events;history;renderer;canvasElement;selectionHandles=new y;shiftPressed=!1;activeHandle=null;isDragging=!1;isTransforming=!1;dragStartX=0;dragStartY=0;elementInitialX=0;elementInitialY=0;elementInitialWidth=0;elementInitialHeight=0;elementInitialRotation=0;operationHistoryStarted=!1;constructor(e){this.canvasElement=e,this.events=new f,this.history=new p,this.renderer=new b(e),this.state=this.loadLocalState()||d(),this.initPointerInteractions(),this.requestRender(),window.addEventListener(`keydown`,e=>{e.key===`Shift`&&(this.shiftPressed=!0)}),window.addEventListener(`keyup`,e=>{e.key===`Shift`&&(this.shiftPressed=!1)})}getState(){return this.state}getEvents(){return this.events}getHistory(){return this.history}updateState(e){this.history.push(this.state),e(this.state),this.saveLocalState(),this.events.emit(`state_changed`,{state:this.state}),this.events.emit(`history_changed`,{canUndo:this.history.canUndo(),canRedo:this.history.canRedo()}),this.requestRender()}updateElement(e,t){this.updateState(n=>{let r=n.elements.findIndex(t=>t.id===e);r!==-1&&(n.elements[r]={...n.elements[r],...t})})}increaseTextSize(e,t=2){let n=this.state.elements.find(t=>t.id===e&&t.type===`text`);n&&this.updateTextFontSize(e,Math.min(n.fontSize+t,150))}decreaseTextSize(e,t=2){let n=this.state.elements.find(t=>t.id===e&&t.type===`text`);n&&this.updateTextFontSize(e,Math.max(n.fontSize-t,12))}updateTextFontSize(e,t){let n=this.state.elements.find(t=>t.id===e&&t.type===`text`);if(!n)return;let r=n.fontSize;if(r<=0)return;let i=t/r;this.updateElement(e,{fontSize:t,width:n.width*i,height:n.height*i})}updateBackground(e){this.updateState(t=>{t.background={...e}})}updateCanvasDimensions(e,t){this.updateState(n=>{let r=n.width,i=n.height;n.width=e,n.height=t,n.elements.forEach(n=>{let a=n.x+n.width/2,o=n.y+n.height/2,s=Math.abs(a-r/2)<2,c=Math.abs(o-i/2)<2;s&&(n.x=(e-n.width)/2),c&&(n.y=(t-n.height)/2)})})}addTextElement(e=`New Text`){let t=`elem_${Date.now()}`,n={id:t,type:`text`,text:e,fontFamily:`Inter`,fontSize:32,fontWeight:`400`,fontStyle:`normal`,textAlign:`center`,color:`#FAF7F2`,letterSpacing:0,lineHeight:1.3,shadowColor:`rgba(0,0,0,0.4)`,shadowBlur:4,shadowOffsetX:1,shadowOffsetY:2,outlineColor:`transparent`,outlineWidth:0,x:this.state.width/2-300,y:this.state.height/2-40,width:600,height:80,rotation:0,opacity:1};this.updateState(e=>{e.elements.push(n),e.selected_element_id=t}),this.events.emit(`element_selected`,{elementId:t})}selectElement(e){this.state.selected_element_id=e,this.events.emit(`element_selected`,{elementId:e}),this.requestRender()}applyTemplate(e){this.history.push(this.state),this.state=S.applyTemplate(e,this.state),this.saveLocalState(),this.events.emit(`template_applied`,{templateId:e}),this.events.emit(`state_changed`,{state:this.state}),this.requestRender()}undo(){let e=this.history.undo(this.state);e&&(this.state=e,this.saveLocalState(),this.events.emit(`state_changed`,{state:this.state}),this.events.emit(`history_changed`,{canUndo:this.history.canUndo(),canRedo:this.history.canRedo()}),this.requestRender())}redo(){let e=this.history.redo(this.state);e&&(this.state=e,this.saveLocalState(),this.events.emit(`state_changed`,{state:this.state}),this.events.emit(`history_changed`,{canUndo:this.history.canUndo(),canRedo:this.history.canRedo()}),this.requestRender())}exportImage(e={}){return w.exportDesign(this.state,e)}requestRender(){this.renderer.render(this.state,!0)}initPointerInteractions(){this.canvasElement.style.touchAction=`none`;let e=e=>{let t=this.canvasElement.getBoundingClientRect(),n=this.state.width/t.width,r=this.state.height/t.height;return{x:(e.clientX-t.left)*n,y:(e.clientY-t.top)*r}};this.canvasElement.addEventListener(`pointerdown`,t=>{let n=e(t),r=this.state.selected_element_id;if(r){let e=this.state.elements.find(e=>e.id===r);if(e){let r=this.selectionHandles.hitTest(e,n.x,n.y);if(r){this.activeHandle=r,this.isTransforming=!0,this.dragStartX=n.x,this.dragStartY=n.y,this.elementInitialX=e.x,this.elementInitialY=e.y,this.elementInitialWidth=e.width,this.elementInitialHeight=e.height,this.elementInitialRotation=e.rotation,this.history.push(this.state),this.operationHistoryStarted=!0,this.canvasElement.setPointerCapture(t.pointerId);return}}}let i=[...this.state.elements].reverse().find(e=>this.hitTestElement(e,n.x,n.y));i?(this.selectElement(i.id),this.isDragging=!0,this.dragStartX=n.x,this.dragStartY=n.y,this.elementInitialX=i.x,this.elementInitialY=i.y,this.elementInitialWidth=i.width,this.elementInitialHeight=i.height,this.elementInitialRotation=i.rotation,this.history.push(this.state),this.operationHistoryStarted=!0,this.canvasElement.setPointerCapture(t.pointerId)):this.selectElement(null)}),this.canvasElement.addEventListener(`pointermove`,t=>{let n=e(t);if(this.isTransforming&&this.state.selected_element_id&&this.activeHandle){let e=this.state.elements.find(e=>e.id===this.state.selected_element_id);if(!e)return;this.activeHandle===`rotate`?this.rotateElement(e,n.x,n.y):this.resizeElement(e,n.x,n.y,this.activeHandle),this.requestRender();return}if(this.isDragging&&this.state.selected_element_id){let e=this.state.elements.find(e=>e.id===this.state.selected_element_id);if(!e)return;let t=n.x-this.dragStartX,r=n.y-this.dragStartY;e.x=this.elementInitialX+t,e.y=this.elementInitialY+r,this.requestRender();return}this.updateHoverCursor(n.x,n.y)});let t=e=>{let t=this.isDragging||this.isTransforming;if(this.isDragging=!1,this.isTransforming=!1,this.activeHandle=null,t){try{this.canvasElement.releasePointerCapture(e.pointerId)}catch{}this.saveLocalState(),this.events.emit(`state_changed`,{state:this.state}),this.events.emit(`history_changed`,{canUndo:this.history.canUndo(),canRedo:this.history.canRedo()}),this.operationHistoryStarted=!1}this.canvasElement.style.cursor=`default`};this.canvasElement.addEventListener(`pointerup`,t),this.canvasElement.addEventListener(`pointercancel`,t)}saveLocalState(){try{localStorage.setItem(T,JSON.stringify(this.state))}catch(e){console.warn(`Unable to save Verse Image State to localStorage:`,e)}}loadLocalState(){try{let e=localStorage.getItem(T);if(!e)return null;let t=JSON.parse(e);if(t&&typeof t.width==`number`&&Array.isArray(t.elements))return t}catch(e){console.warn(`Invalid local state found in localStorage, clearing:`,e),localStorage.removeItem(T)}return null}hitTestElement(e,t,n){let r=e.x+e.width/2,i=e.y+e.height/2,a=-(e.rotation*Math.PI)/180,o=t-r,s=n-i,c=o*Math.cos(a)-s*Math.sin(a)+r,l=o*Math.sin(a)+s*Math.cos(a)+i;return c>=e.x&&c<=e.x+e.width&&l>=e.y&&l<=e.y+e.height}resizeElement(e,t,n,r){let i=this.elementInitialX+this.elementInitialWidth/2,a=this.elementInitialY+this.elementInitialHeight/2,o=-(this.elementInitialRotation*Math.PI)/180,s=t-i,c=n-a,l=s*Math.cos(o)-c*Math.sin(o)+i,u=s*Math.sin(o)+c*Math.cos(o)+a,d=this.elementInitialX,f=this.elementInitialX+this.elementInitialWidth,p=this.elementInitialY,m=this.elementInitialY+this.elementInitialHeight;(r===`left`||r===`top-left`||r===`bottom-left`)&&(d=Math.min(l,f-40)),(r===`right`||r===`top-right`||r===`bottom-right`)&&(f=Math.max(l,d+40)),(r===`top`||r===`top-left`||r===`top-right`)&&(p=Math.min(u,m-30)),(r===`bottom`||r===`bottom-left`||r===`bottom-right`)&&(m=Math.max(u,p+30)),e.x=d,e.y=p,e.width=Math.max(40,f-d),e.height=Math.max(30,m-p),e.rotation=this.elementInitialRotation}rotateElement(e,t,n){let r=this.elementInitialX+this.elementInitialWidth/2,i=this.elementInitialY+this.elementInitialHeight/2,a=Math.atan2(n-i,t-r)*180/Math.PI+90;this.isShiftPressed()&&(a=Math.round(a/15)*15),e.rotation=a}updateHoverCursor(e,t){let n=this.state.selected_element_id;if(!n){this.canvasElement.style.cursor=`default`;return}let r=this.state.elements.find(e=>e.id===n);if(!r){this.canvasElement.style.cursor=`default`;return}let i=this.selectionHandles.hitTest(r,e,t);if(i){this.canvasElement.style.cursor=this.selectionHandles.getCursor(i);return}if(this.hitTestElement(r,e,t)){this.canvasElement.style.cursor=`move`;return}this.canvasElement.style.cursor=`default`}isShiftPressed(){return!1}},D=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel text-panel`,this.render(),this.editor.getEvents().on(`element_selected`,()=>this.updateControls()),this.editor.getEvents().on(`state_changed`,()=>this.updateControls())}getElement(){return this.container}render(){this.container.innerHTML=`
      <div class="panel-section">
        <label class="panel-label" for="input-verse-text">Verse Content</label>
        <textarea
          id="input-verse-text"
          class="panel-textarea"
          rows="4"
          placeholder="Enter verse passage..."
        ></textarea>
      </div>

      <div class="panel-section">
        <label class="panel-label" for="input-verse-ref">Reference</label>
        <input
          id="input-verse-ref"
          type="text"
          class="panel-input"
          placeholder="e.g. JOHN 3:16"
        />
      </div>

      <div class="panel-row">
        <div class="panel-field">
          <label class="panel-label">Size (px)</label>

          <div class="font-size-control">
            
            <input
              id="input-font-size"
              type="number"
              class="panel-input font-size-input"
              min="12"
              max="150"
              step="2"
            />

           
          </div>
        </div>

        <div class="panel-field">
          <label class="panel-label" for="input-line-height">Line Height</label>
          <input
            id="input-line-height"
            type="number"
            class="panel-input"
            min="0.8"
            max="2.5"
            step="0.1"
          />
        </div>
      </div>

      <div class="panel-row">
        <div class="panel-field">
          <label class="panel-label" for="input-letter-spacing">
            Letter Spacing
          </label>

          <input
            id="input-letter-spacing"
            type="number"
            class="panel-input"
            min="-2"
            max="20"
            step="1"
          />
        </div>

        <div class="panel-field">
          <label class="panel-label">Alignment</label>

          <div class="btn-group">
            <button
              id="btn-align-left"
              class="btn-icon"
              type="button"
              aria-label="Align Left"
            >
              ⯇
            </button>

            <button
              id="btn-align-center"
              class="btn-icon"
              type="button"
              aria-label="Align Center"
            >
              ☰
            </button>

            <button
              id="btn-align-right"
              class="btn-icon"
              type="button"
              aria-label="Align Right"
            >
              ⯈
            </button>
          </div>
        </div>
      </div>

      <div class="panel-row">
        <button id="btn-toggle-bold" class="panel-btn" type="button">
          Bold
        </button>

        <button id="btn-toggle-italic" class="panel-btn" type="button">
          Italic
        </button>
      </div>

      <div class="panel-section">
        <button
          id="btn-add-text"
          class="panel-btn panel-btn-primary"
          type="button"
        >
          + Add New Text Element
        </button>
      </div>
    `,this.bindEvents(),this.updateControls()}bindEvents(){let e=this.container.querySelector(`#input-verse-text`),t=this.container.querySelector(`#input-verse-ref`),n=this.container.querySelector(`#input-font-size`),r=this.container.querySelector(`#input-line-height`),i=this.container.querySelector(`#input-letter-spacing`),a=this.container.querySelector(`#btn-font-size-minus`),o=this.container.querySelector(`#btn-font-size-plus`);e?.addEventListener(`input`,()=>{let t=this.getSelectedTextElement();t&&this.editor.updateElement(t.id,{text:e.value})}),t?.addEventListener(`input`,()=>{let e=this.editor.getState().elements.find(e=>e.isReference);e&&this.editor.updateElement(e.id,{text:t.value})}),n?.addEventListener(`change`,()=>{let e=this.getSelectedTextElement();if(!e)return;let t=parseFloat(n.value);if(!Number.isFinite(t))return;let r=Math.min(Math.max(t,12),150);this.editor.updateTextFontSize(e.id,r)}),a?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();if(!e)return;let t=this.getFontSizeStep();this.editor.decreaseTextSize(e.id,t)}),o?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();if(!e)return;let t=this.getFontSizeStep();this.editor.increaseTextSize(e.id,t)}),r?.addEventListener(`change`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{lineHeight:parseFloat(r.value)||1.3})}),i?.addEventListener(`change`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{letterSpacing:parseInt(i.value,10)||0})}),this.container.querySelector(`#btn-align-left`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{textAlign:`left`})}),this.container.querySelector(`#btn-align-center`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{textAlign:`center`})}),this.container.querySelector(`#btn-align-right`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();e&&this.editor.updateElement(e.id,{textAlign:`right`})}),this.container.querySelector(`#btn-toggle-bold`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();if(e){let t=e.fontWeight===`700`||e.fontWeight===`bold`;this.editor.updateElement(e.id,{fontWeight:t?`400`:`700`})}}),this.container.querySelector(`#btn-toggle-italic`)?.addEventListener(`click`,()=>{let e=this.getSelectedTextElement();if(e){let t=e.fontStyle===`italic`;this.editor.updateElement(e.id,{fontStyle:t?`normal`:`italic`})}}),this.container.querySelector(`#btn-add-text`)?.addEventListener(`click`,()=>{this.editor.addTextElement(`New Scripture Line`)})}getFontSizeStep(){let e=this.editor.getState().width;return e>=3e3?8:e>=2e3?4:2}getSelectedTextElement(){let e=this.editor.getState();if(!e.selected_element_id)return null;let t=e.elements.find(t=>t.id===e.selected_element_id);return t&&t.type===`text`?t:null}updateControls(){let e=this.getSelectedTextElement(),t=this.container.querySelector(`#input-verse-text`),n=this.container.querySelector(`#input-verse-ref`),r=this.container.querySelector(`#input-font-size`),i=this.container.querySelector(`#input-line-height`),a=this.container.querySelector(`#input-letter-spacing`),o=this.container.querySelector(`#btn-font-size-minus`),s=this.container.querySelector(`#btn-font-size-plus`),c=this.editor.getState().elements.find(e=>e.isReference);c&&n&&(n.value=c.text),e?(t&&(t.value=e.text),r&&(r.value=e.fontSize.toString()),i&&(i.value=e.lineHeight.toString()),a&&(a.value=e.letterSpacing.toString()),o&&(o.disabled=e.fontSize<=12),s&&(s.disabled=e.fontSize>=150)):(r&&(r.value=``),i&&(i.value=``),a&&(a.value=``),o&&(o.disabled=!0),s&&(s.disabled=!0))}},O=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel font-panel`,this.render()}getElement(){return this.container}render(){this.container.innerHTML=`
      <div class="panel-section">
        <label class="panel-label">Typography Style</label>
        <div class="font-list" id="font-list-container"></div>
      </div>
    `;let e=this.container.querySelector(`#font-list-container`);_.forEach(t=>{let n=document.createElement(`button`);n.className=`font-item-card`,n.innerHTML=`
        <span class="font-name" style="font-family: '${t.family}', serif">${t.family}</span>
        <span class="font-category">${t.category}</span>
      `,n.addEventListener(`click`,async()=>{await v.loadFont(t.family);let e=this.editor.getState();e.selected_element_id&&this.editor.updateElement(e.selected_element_id,{fontFamily:t.family})}),e.appendChild(n)})}},k=class{element;editor;constructor(e){this.editor=e,this.element=document.createElement(`div`),this.element.className=`panel-content color-panel`,this.render()}render(){let e=[`#ffffff`,`#000000`,`#f43f5e`,`#3b82f6`,`#10b981`,`#f59e0b`,`#8b5cf6`];this.element.innerHTML=`
      <div class="panel-section">
        <label class="panel-label">Text Color</label>
        <div class="color-picker-row flex items-center gap-2 mb-3">
          <input type="color" id="text-color-input" value="#ffffff" class="w-8 h-8 rounded cursor-pointer border-0" />
          <span id="color-hex-display" class="text-xs font-mono text-slate-300">#ffffff</span>
        </div>
        
        <label class="panel-label">Presets</label>
        <div class="preset-colors flex flex-wrap gap-2">
          ${e.map(e=>`<button type="button" class="color-swatch w-7 h-7 rounded-full border border-slate-600 transition-transform hover:scale-105" data-color="${e}" style="background-color: ${e};"></button>`).join(``)}
        </div>
      </div>
    `,this.attachEvents()}attachEvents(){let e=this.element.querySelector(`#text-color-input`),t=this.element.querySelector(`#color-hex-display`);e?.addEventListener(`input`,e=>{let n=e.target.value;t&&(t.textContent=n),this.updateColor(n)}),this.element.querySelectorAll(`.color-swatch`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-color`);r&&(e&&(e.value=r),t&&(t.textContent=r),this.updateColor(r))})})}updateColor(e){typeof this.editor.setTextColor==`function`&&this.editor.setTextColor(e)}getElement(){return this.element}},A=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel background-panel`,this.render()}getElement(){return this.container}render(){this.container.innerHTML=`
      <div class="panel-section">
        <label class="panel-label">Background Mode</label>
        <div class="btn-group">
          <button id="bg-mode-gradient" class="panel-btn">Gradient</button>
          <button id="bg-mode-solid" class="panel-btn">Solid</button>
          <button id="bg-mode-image" class="panel-btn">Image</button>
        </div>
      </div>

      <div id="bg-gradient-controls" class="panel-section">
        <label class="panel-label">Gradient Color 1</label>
        <input type="color" id="bg-grad-1" class="color-input-native" value="#3D1E18" />
        
        <label class="panel-label" style="margin-top:10px;">Gradient Color 2</label>
        <input type="color" id="bg-grad-2" class="color-input-native" value="#1A0B08" />
      </div>

      <div id="bg-image-controls" class="panel-section" style="display:none;">
        <label class="panel-label">Upload Custom Image</label>
        <input type="file" id="bg-file-input" accept="image/*" class="panel-input-file" />
        
        <label class="panel-label" style="margin-top:10px;">Blur Effect (px)</label>
        <input type="range" id="bg-blur-slider" min="0" max="20" value="0" class="panel-slider" />
      </div>

      <div class="panel-section">
        <label class="panel-label">Overlay Color & Opacity</label>
        <div class="panel-row">
          <input type="color" id="bg-overlay-color" class="color-input-native" value="#000000" />
          <input type="range" id="bg-overlay-opacity" min="0" max="1" step="0.05" value="0.2" class="panel-slider" />
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){let e=this.container.querySelector(`#bg-grad-1`),t=this.container.querySelector(`#bg-grad-2`),n=this.container.querySelector(`#bg-file-input`),r=this.container.querySelector(`#bg-blur-slider`),i=this.container.querySelector(`#bg-overlay-color`),a=this.container.querySelector(`#bg-overlay-opacity`),o=this.container.querySelector(`#bg-gradient-controls`),s=this.container.querySelector(`#bg-image-controls`);this.container.querySelector(`#bg-mode-gradient`)?.addEventListener(`click`,()=>{o.style.display=`block`,s.style.display=`none`;let e=this.editor.getState().background;e.type=`gradient`,this.editor.updateBackground(e)}),this.container.querySelector(`#bg-mode-solid`)?.addEventListener(`click`,()=>{o.style.display=`none`,s.style.display=`none`;let e=this.editor.getState().background;e.type=`solid`,this.editor.updateBackground(e)}),this.container.querySelector(`#bg-mode-image`)?.addEventListener(`click`,()=>{o.style.display=`none`,s.style.display=`block`});let c=()=>{let n=this.editor.getState().background;n.type=`gradient`,n.gradient.colors=[e.value,t.value],this.editor.updateBackground(n)};e?.addEventListener(`input`,c),t?.addEventListener(`input`,c),n?.addEventListener(`change`,e=>{let t=e.target.files?.[0];if(t){let e=URL.createObjectURL(t),n=this.editor.getState().background;n.type=`image`,n.imageUrl=e,this.editor.updateBackground(n)}}),r?.addEventListener(`input`,()=>{let e=this.editor.getState().background;e.blur=parseFloat(r.value)||0,this.editor.updateBackground(e)}),i?.addEventListener(`input`,()=>{let e=this.editor.getState().background;e.overlayColor=i.value,this.editor.updateBackground(e)}),a?.addEventListener(`input`,()=>{let e=this.editor.getState().background;e.overlayOpacity=parseFloat(a.value)||0,this.editor.updateBackground(e)})}},j=class{editor;container;presets={square:{label:`Square`,description:`1080 × 1080`,width:1080,height:1080},portrait:{label:`Portrait`,description:`1080 × 1350`,width:1080,height:1350},story:{label:`Story`,description:`1080 × 1920`,width:1080,height:1920},landscape:{label:`Landscape`,description:`1200 × 630`,width:1200,height:630},phone:{label:`Phone`,description:`1170 × 2532`,width:1170,height:2532},"phone-landscape":{label:`Phone Landscape`,description:`2532 × 1170`,width:2532,height:1170},"tablet-portrait":{label:`Tablet Portrait`,description:`1536 × 2048`,width:1536,height:2048},"tablet-landscape":{label:`Tablet Landscape`,description:`2048 × 1536`,width:2048,height:1536},"desktop-hd":{label:`Desktop HD`,description:`1920 × 1080`,width:1920,height:1080},"desktop-qhd":{label:`Desktop QHD`,description:`2560 × 1440`,width:2560,height:1440},"desktop-4k":{label:`Desktop 4K`,description:`3840 × 2160`,width:3840,height:2160},presentation:{label:`Presentation`,description:`1920 × 1080`,width:1920,height:1080},"a4-portrait":{label:`A4 Portrait`,description:`2480 × 3508`,width:2480,height:3508},"a4-landscape":{label:`A4 Landscape`,description:`3508 × 2480`,width:3508,height:2480},"three-four":{label:`3 : 4`,description:`1200 × 1600`,width:1200,height:1600},"four-three":{label:`4 : 3`,description:`1600 × 1200`,width:1600,height:1200},"two-three":{label:`2 : 3`,description:`1200 × 1800`,width:1200,height:1800},"three-two":{label:`3 : 2`,description:`1800 × 1200`,width:1800,height:1200},"five-four":{label:`5 : 4`,description:`1500 × 1200`,width:1500,height:1200},"four-five":{label:`4 : 5`,description:`1200 × 1500`,width:1200,height:1500},ultrawide:{label:`Ultrawide`,description:`2560 × 1080`,width:2560,height:1080},cinema:{label:`Cinema`,description:`2560 × 1080`,width:2560,height:1080}};constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel layout-panel`,this.render()}getElement(){return this.container}render(){this.container.innerHTML=`
      <!-- ================================= -->
      <!-- Dimension Presets                 -->
      <!-- ================================= -->

      <div class="panel-section">
        <label class="panel-label">
          Dimension Presets
        </label>

        <!-- Social Media -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Social Media
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="square">
              Square
              <small>1080 × 1080</small>
            </button>

            <button
              class="panel-btn"
              data-preset="portrait">
              Portrait
              <small>1080 × 1350</small>
            </button>

            <button
              class="panel-btn"
              data-preset="story">
              Story
              <small>1080 × 1920</small>
            </button>

            <button
              class="panel-btn"
              data-preset="landscape">
              Landscape
              <small>1200 × 630</small>
            </button>

          </div>
        </div>


        <!-- Phone -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Phone
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="phone">
              Phone Portrait
              <small>1170 × 2532</small>
            </button>

            <button
              class="panel-btn"
              data-preset="phone-landscape">
              Phone Landscape
              <small>2532 × 1170</small>
            </button>

          </div>
        </div>


        <!-- Tablet -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Tablet
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="tablet-portrait">
              Tablet Portrait
              <small>1536 × 2048</small>
            </button>

            <button
              class="panel-btn"
              data-preset="tablet-landscape">
              Tablet Landscape
              <small>2048 × 1536</small>
            </button>

          </div>
        </div>


        <!-- Desktop -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Desktop
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="desktop-hd">
              Full HD
              <small>1920 × 1080</small>
            </button>

            <button
              class="panel-btn"
              data-preset="desktop-qhd">
              QHD
              <small>2560 × 1440</small>
            </button>

            <button
              class="panel-btn"
              data-preset="desktop-4k">
              4K
              <small>3840 × 2160</small>
            </button>

          </div>
        </div>


        <!-- Presentation -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Presentation
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="presentation">
              Presentation
              <small>1920 × 1080</small>
            </button>

          </div>
        </div>


        <!-- Print -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Print
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="a4-portrait">
              A4 Portrait
              <small>2480 × 3508</small>
            </button>

            <button
              class="panel-btn"
              data-preset="a4-landscape">
              A4 Landscape
              <small>3508 × 2480</small>
            </button>

          </div>
        </div>


        <!-- Common Ratios -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Aspect Ratios
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="three-four">
              3 : 4
              <small>1200 × 1600</small>
            </button>

            <button
              class="panel-btn"
              data-preset="four-three">
              4 : 3
              <small>1600 × 1200</small>
            </button>

            <button
              class="panel-btn"
              data-preset="two-three">
              2 : 3
              <small>1200 × 1800</small>
            </button>

            <button
              class="panel-btn"
              data-preset="three-two">
              3 : 2
              <small>1800 × 1200</small>
            </button>

            <button
              class="panel-btn"
              data-preset="four-five">
              4 : 5
              <small>1200 × 1500</small>
            </button>

            <button
              class="panel-btn"
              data-preset="five-four">
              5 : 4
              <small>1500 × 1200</small>
            </button>

          </div>
        </div>


        <!-- Wide -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Wide
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="ultrawide">
              Ultrawide
              <small>2560 × 1080</small>
            </button>

            <button
              class="panel-btn"
              data-preset="cinema">
              Cinema
              <small>2560 × 1080</small>
            </button>

          </div>
        </div>

      </div>


      <!-- ================================= -->
      <!-- Custom Canvas Size                -->
      <!-- ================================= -->

      <div class="panel-section">

        <label class="panel-label">
          Custom Canvas Size
        </label>

        <div class="panel-row">

          <div class="panel-field">

            <label class="panel-label">
              Width
            </label>

            <input
              type="number"
              id="canvas-width-input"
              class="panel-input"
              value="1080"
              min="1"
              max="10000"
              step="10"
            />

          </div>


          <div class="panel-field">

            <label class="panel-label">
              Height
            </label>

            <input
              type="number"
              id="canvas-height-input"
              class="panel-input"
              value="1080"
              min="1"
              max="10000"
              step="10"
            />

          </div>

        </div>

      </div>
    `,this.bindEvents()}bindEvents(){let e=this.container.querySelector(`#canvas-width-input`),t=this.container.querySelector(`#canvas-height-input`);this.container.querySelectorAll(`[data-preset]`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-preset`);if(!r)return;let i=this.presets[r];i&&(e.value=i.width.toString(),t.value=i.height.toString(),this.editor.updateCanvasDimensions(i.width,i.height),this.container.querySelectorAll(`[data-preset]`).forEach(e=>{e.classList.remove(`active`)}),n.classList.add(`active`))})});let n=()=>{let n=parseInt(e.value,10),r=parseInt(t.value,10);!Number.isFinite(n)||!Number.isFinite(r)||n<=0||r<=0||(this.editor.updateCanvasDimensions(n,r),this.container.querySelectorAll(`[data-preset]`).forEach(e=>{e.classList.remove(`active`)}))};e.addEventListener(`change`,n),t.addEventListener(`change`,n)}},M=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel effects-panel`,this.render(),this.editor.getEvents().on(`element_selected`,()=>{this.syncFromSelectedElement()}),this.editor.getEvents().on(`state_changed`,()=>{this.syncFromSelectedElement()}),this.syncFromSelectedElement()}getElement(){return this.container}render(){this.container.innerHTML=`
      <!-- ====================================== -->
      <!-- TEXT DROP SHADOW -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Text Drop Shadow
        </label>

        <div class="panel-row">
          <input
            type="color"
            id="shadow-color-picker"
            class="color-input-native"
            value="#000000"
          />

          <div class="panel-field">
            <label class="panel-label">
              Blur
            </label>

            <input
              type="range"
              id="shadow-blur-range"
              min="0"
              max="30"
              step="1"
              value="8"
              class="panel-slider"
            />
          </div>
        </div>
      </div>


      <!-- ====================================== -->
      <!-- TEXT GLOW -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Text Glow
        </label>

        <div class="panel-row">
          <input
            type="color"
            id="glow-color-picker"
            class="color-input-native"
            value="#000000"
          />

          <div class="panel-field">
            <label class="panel-label">
              Blur
            </label>

            <input
              type="range"
              id="glow-blur-range"
              min="0"
              max="50"
              step="1"
              value="0"
              class="panel-slider"
            />
          </div>
        </div>

        <div class="panel-field">
          <label class="panel-label">
            Intensity
          </label>

          <input
            type="range"
            id="glow-intensity-range"
            min="0"
            max="1"
            step="0.05"
            value="0"
            class="panel-slider"
          />
        </div>
      </div>


      <!-- ====================================== -->
      <!-- TEXT OUTLINE -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Text Stroke / Outline
        </label>

        <div class="panel-row">
          <input
            type="color"
            id="outline-color-picker"
            class="color-input-native"
            value="#000000"
          />

          <div class="panel-field">
            <label class="panel-label">
              Width
            </label>

            <input
              type="range"
              id="outline-width-range"
              min="0"
              max="10"
              step="1"
              value="0"
              class="panel-slider"
            />
          </div>
        </div>
      </div>


      <!-- ====================================== -->
      <!-- ROTATION -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Element Rotation (deg)
        </label>

        <input
          type="range"
          id="rotation-range"
          min="-180"
          max="180"
          step="1"
          value="0"
          class="panel-slider"
        />
      </div>


      <!-- ====================================== -->
      <!-- OPACITY -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Element Opacity
        </label>

        <input
          type="range"
          id="opacity-range"
          min="0"
          max="1"
          step="0.05"
          value="1"
          class="panel-slider"
        />
      </div>
    `,this.bindEvents()}bindEvents(){let e=this.container.querySelector(`#shadow-color-picker`),t=this.container.querySelector(`#shadow-blur-range`),n=this.container.querySelector(`#glow-color-picker`),r=this.container.querySelector(`#glow-blur-range`),i=this.container.querySelector(`#glow-intensity-range`),a=this.container.querySelector(`#outline-color-picker`),o=this.container.querySelector(`#outline-width-range`),s=this.container.querySelector(`#rotation-range`),c=this.container.querySelector(`#opacity-range`),l=()=>this.editor.getState().selected_element_id;e?.addEventListener(`input`,()=>{let t=l();t&&this.editor.updateElement(t,{shadowColor:e.value})}),t?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{shadowBlur:parseInt(t.value,10)||0})}),n?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{glowColor:n.value})}),r?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{glowBlur:parseInt(r.value,10)||0})}),i?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{glowIntensity:parseFloat(i.value)||0})}),a?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{outlineColor:a.value})}),o?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{outlineWidth:parseInt(o.value,10)||0})}),s?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{rotation:parseInt(s.value,10)||0})}),c?.addEventListener(`input`,()=>{let e=l();e&&this.editor.updateElement(e,{opacity:parseFloat(c.value)||1})})}syncFromSelectedElement(){let e=this.editor.getState(),t=e.selected_element_id;if(!t)return;let n=e.elements.find(e=>e.id===t);if(n){if(n.type===`text`){let e=n;this.setInputValue(`#shadow-color-picker`,this.toHexColor(e.shadowColor,`#000000`)),this.setInputValue(`#shadow-blur-range`,String(e.shadowBlur??0)),this.setInputValue(`#glow-color-picker`,this.toHexColor(e.glowColor,`#000000`)),this.setInputValue(`#glow-blur-range`,String(e.glowBlur??0)),this.setInputValue(`#glow-intensity-range`,String(e.glowIntensity??0)),this.setInputValue(`#outline-color-picker`,this.toHexColor(e.outlineColor,`#000000`)),this.setInputValue(`#outline-width-range`,String(e.outlineWidth??0))}this.setInputValue(`#rotation-range`,String(n.rotation??0)),this.setInputValue(`#opacity-range`,String(n.opacity??1))}}setInputValue(e,t){let n=this.container.querySelector(e);n&&(n.value=t)}toHexColor(e,t){if(!e)return t;if(/^#[0-9a-f]{6}$/i.test(e))return e;if(/^#[0-9a-f]{3}$/i.test(e)){let t=e.substring(1);return`#${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`}let n=e.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);return n?`#`+[Number(n[1]),Number(n[2]),Number(n[3])].map(e=>e.toString(16).padStart(2,`0`)).join(``):t}},N=class{editor;container;constructor(e){this.editor=e,this.container=document.createElement(`div`),this.container.className=`editor-panel template-panel`,this.render()}getElement(){return this.container}render(){this.container.innerHTML=`
      <div class="panel-section">
        <label class="panel-label">Built-in Themes</label>
        <div class="template-grid" id="template-cards-grid"></div>
      </div>
    `;let e=this.container.querySelector(`#template-cards-grid`);x.forEach(t=>{let n=document.createElement(`div`);n.className=`template-card`,n.innerHTML=`
        <div class="template-title">${t.name}</div>
        <div class="template-desc">${t.description}</div>
      `,n.addEventListener(`click`,()=>{this.editor.applyTemplate(t.id)}),e.appendChild(n)})}},P=class{container;editor;constructor(){this.container=document.createElement(`div`),this.container.className=`verse-image-editor-page`}render(){return this.container.innerHTML=`
      <header class="editor-header">
        <div class="editor-title">
          <h1>Verse Image Creator</h1>
          <p>Design and share God's Word beautifully.</p>
        </div>

        <div class="editor-actions">
          <button id="btn-undo" class="panel-btn" title="Undo">
            ↩ Undo
          </button>

          <button id="btn-redo" class="panel-btn" title="Redo">
            ↪ Redo
          </button>

          <button id="btn-export-png" class="panel-btn panel-btn-primary">
            💾 Save PNG
          </button>
        </div>
      </header>

      <main class="editor-body">

        <aside class="editor-sidebar">
          <nav class="tab-nav" id="editor-tabs">
            <button class="tab-btn active" data-tab="text">
              Text
            </button>

            <button class="tab-btn" data-tab="fonts">
              Fonts
            </button>

            <button class="tab-btn" data-tab="color">
              Color
            </button>

            <button class="tab-btn" data-tab="bg">
              Background
            </button>

            <button class="tab-btn" data-tab="layout">
              Layout
            </button>

            <button class="tab-btn" data-tab="effects">
              Effects
            </button>

            <button class="tab-btn" data-tab="templates">
              Templates
            </button>
          </nav>

          <div
            class="panel-container"
            id="active-panel-slot">
          </div>
        </aside>

        <section class="editor-stage">
          <div class="canvas-wrapper">
            <canvas id="verse-editor-canvas"></canvas>
          </div>
        </section>

      </main>

      <!-- MOBILE ONLY -->

      <nav
        class="mobile-editor-toolbar"
        id="mobile-editor-toolbar">

        <button
          type="button"
          class="mobile-tool-btn active"
          data-tab="text">

          <span class="mobile-tool-icon">T</span>
          <span>Text</span>

        </button>

        <button
          type="button"
          class="mobile-tool-btn"
          data-tab="fonts">

          <span class="mobile-tool-icon">Aa</span>
          <span>Fonts</span>

        </button>

        <button
          type="button"
          class="mobile-tool-btn"
          data-tab="color">

          <span class="mobile-tool-icon">●</span>
          <span>Color</span>

        </button>

        <button
          type="button"
          class="mobile-tool-btn"
          data-tab="bg">

          <span class="mobile-tool-icon">▧</span>
          <span>Background</span>

        </button>

        <button
          type="button"
          class="mobile-tool-btn"
          data-tab="layout">

          <span class="mobile-tool-icon">⌗</span>
          <span>Layout</span>

        </button>

        <button
          type="button"
          class="mobile-tool-btn"
          data-tab="effects">

          <span class="mobile-tool-icon">✦</span>
          <span>Effects</span>

        </button>

        <button
          type="button"
          class="mobile-tool-btn"
          data-tab="templates">

          <span class="mobile-tool-icon">▦</span>
          <span>Templates</span>

        </button>

      </nav>

      <section
        class="mobile-editor-sheet"
        id="mobile-editor-sheet">

        <div class="mobile-sheet-header">

          <strong id="mobile-sheet-title">
            Text
          </strong>

          <button
            type="button"
            class="mobile-sheet-close"
            id="mobile-sheet-close"
            aria-label="Close">

            ×

          </button>

        </div>

        <div
          class="mobile-sheet-content"
          id="mobile-panel-slot">
        </div>

      </section>
    `,setTimeout(()=>this.initEditor(),0),this.container}initEditor(){let e=this.container.querySelector(`#verse-editor-canvas`);if(!e)return;this.editor=new E(e);let t={text:new D(this.editor).getElement(),fonts:new O(this.editor).getElement(),color:new k(this.editor).getElement(),bg:new A(this.editor).getElement(),layout:new j(this.editor).getElement(),effects:new M(this.editor).getElement(),templates:new N(this.editor).getElement()},n=this.container.querySelector(`#active-panel-slot`);n.appendChild(t.text);let r=this.container.querySelectorAll(`.tab-btn`);r.forEach(e=>{e.addEventListener(`click`,()=>{r.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let i=e.getAttribute(`data-tab`)||`text`;n.innerHTML=``,t[i]&&n.appendChild(t[i])})});let i=this.container.querySelector(`#mobile-editor-toolbar`),a=this.container.querySelector(`#mobile-editor-sheet`),o=this.container.querySelector(`#mobile-panel-slot`),s=this.container.querySelector(`#mobile-sheet-title`),c=this.container.querySelector(`#mobile-sheet-close`),l={text:`Text`,fonts:`Fonts`,color:`Color`,bg:`Background`,layout:`Layout`,effects:`Effects`,templates:`Templates`},u={text:new D(this.editor).getElement(),fonts:new O(this.editor).getElement(),color:new k(this.editor).getElement(),bg:new A(this.editor).getElement(),layout:new j(this.editor).getElement(),effects:new M(this.editor).getElement(),templates:new N(this.editor).getElement()},d=e=>{let t=u[e];t&&(s.textContent=l[e]||e,o.innerHTML=``,o.appendChild(t),a.classList.add(`open`))},f=()=>{a.classList.remove(`open`)},p=i.querySelectorAll(`.mobile-tool-btn`);p.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-tab`)||`text`,n=e.classList.contains(`active`)&&a.classList.contains(`open`);if(p.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),n){f();return}d(t)})}),c?.addEventListener(`click`,f),d(`text`);let m=this.container.querySelector(`#btn-undo`),h=this.container.querySelector(`#btn-redo`),g=this.container.querySelector(`#btn-export-png`);m?.addEventListener(`click`,()=>this.editor.undo()),h?.addEventListener(`click`,()=>this.editor.redo()),g?.addEventListener(`click`,()=>this.editor.exportImage({format:`png`})),this.editor.getEvents().on(`history_changed`,({canUndo:e,canRedo:t})=>{m&&(m.disabled=!e),h&&(h.disabled=!t)})}},F={"/":()=>r,"/about":()=>l,"/faq":()=>a,"/community":()=>o,"/changelog":()=>c,"/privacy":()=>u,"/editor":()=>new P};function I(e){return e.length>1&&e.endsWith(`/`)?e.slice(0,-1):e||`/`}function L(){let e=document.getElementById(`app-content`);if(!e){console.error(`Router: #app-content was not found.`);return}let t=(F[I(window.location.pathname)]??F[`/`])();window.scrollTo({top:0,behavior:`auto`});let n=t.render();e.innerHTML=``,typeof n==`string`?e.innerHTML=n:e.appendChild(n),t.mount?.()}function R(e){if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target;if(!t)return;let n=t.closest(`a[data-route]`);if(!n)return;let r=n.getAttribute(`href`);if(!r||!r.startsWith(`/`))return;e.preventDefault();let i=I(window.location.pathname),a=I(r);i!==a&&(history.pushState({},``,a),L())}function z(){document.addEventListener(`click`,R),window.addEventListener(`popstate`,L),L()}function B(){let e=localStorage.getItem(`sb-theme`),t=window.matchMedia(`(prefers-color-scheme: dark)`).matches,r=e||(t?`dark`:`light`);document.documentElement.setAttribute(`data-theme`,r);let i=document.getElementById(`app-header`);i&&(i.innerHTML=n.render(),n.mount());let a=document.getElementById(`app-footer`);a&&(a.innerHTML=`
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
    `),z()}document.addEventListener(`DOMContentLoaded`,B);