import type { Page } from "../types";

export const PrivacyPage: Page = {
  render: () => /* html */ `
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
  `,
  mount: () => {
    // Tab Switching Logic
    const tabs = document.querySelectorAll(".policy-tab");
    const sections = document.querySelectorAll(".policy-content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetId = tab.getAttribute("data-target");

        // Update Tab States
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        // Show/Hide Sections
        sections.forEach((section) => {
          if (section.id === targetId) {
            (section as HTMLElement).style.display = "block";
          } else {
            (section as HTMLElement).style.display = "none";
          }
        });
      });
    });
  },
};
