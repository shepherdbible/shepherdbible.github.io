import type { Page } from '../../types';
import "../changelog/changelog.css";
import { WindowsChangelogs } from './data/Windows';
import { AndroidChangelogs } from './data/Android';
import { Webchangelogs } from './data/Web';

// ---------------------------------------------------------
// THIS IS PURE TYPESCRIPT
// It runs once when the module is loaded and handles clicks
// ---------------------------------------------------------
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement; // <-- TypeScript type casting
    const tab = target.closest('.platform-tab');

    if (!tab) return;

    // 1. Update Active State
    document.querySelectorAll('.platform-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // 2. Get the selected filter
    const filter = tab.getAttribute('data-filter');
    let visibleCount = 0;

    // <-- TypeScript NodeListOf type
    const cards = document.querySelectorAll('.changelog-card') as NodeListOf<HTMLElement>;

    // 3. Filter Cards
    cards.forEach(card => {
      const platforms = card.getAttribute('data-platforms')?.split(',') || [];

      if (filter === 'all' || platforms.includes(filter as string)) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // 4. Toggle empty state
    const emptyState = document.getElementById('changelog-empty');
    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  });
}

// ---------------------------------------------------------
// COMPONENT RENDER (HTML String)
// ---------------------------------------------------------
export const ChangelogPage: Page = {
  render: () => {
    // Combine all arrays and sort by date descending
    const entries = [
      ...WindowsChangelogs,
      ...AndroidChangelogs,
      ...Webchangelogs
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const icons: Record<string, string> = {
      all: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
      windows: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M0,0 H11.4 V11.4 H0 V0 M12.6,0 H24 V11.4 H12.6 V0 M0,12.6 H11.4 V24 H0 V12.6 M12.6,12.6 H24 V24 H12.6 V12.6" /></svg>`,
      android: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.76 4.84 5.2 2.14a.5.5 0 0 1 .86-.5l1.58 2.74a8.9 8.9 0 0 1 8.72 0l1.58-2.74a.5.5 0 1 1 .86.5l-1.56 2.7A8.4 8.4 0 0 1 21 11H3a8.4 8.4 0 0 1 3.76-6.16ZM7 7.5a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm10 0a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8ZM3 12h18v6a2 2 0 0 1-2 2h-1v2a1.5 1.5 0 0 1-3 0v-2H9v2a1.5 1.5 0 0 1-3 0v-2H5a2 2 0 0 1-2-2v-6Zm-2 1.5a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-3 0v-4Zm19 0a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-3 0v-4Z"/>
</svg>`,
      ios: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.35 10.83c-.03-2.6 2.13-3.87 2.23-3.92-1.2-1.76-3.07-2-3.7-2.03-1.58-.16-3.08.93-3.9.93-.8 0-2.04-.9-3.37-.88-1.72.02-3.32.99-4.2 2.53-1.8 3.12-.46 7.73 1.28 10.25.86 1.23 1.87 2.6 3.16 2.55 1.24-.05 1.74-.8 3.25-.8s1.97.8 3.27.78c1.33-.03 2.18-1.25 3.03-2.48.98-1.42 1.38-2.8 1.4-2.87-.03-.02-2.7-1.04-2.7-3.66zm-2.07-5.96c.7-.85 1.18-2.02 1.05-3.18-1.01.04-2.22.67-2.93 1.5-.63.75-1.2 1.95-1.05 3.08 1.13.09 2.23-.55 2.93-1.4z"/></svg>`,
      linux: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>`,
      web: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
    };

    return `
      <div class="section">
        <div class="container" style="max-width: 800px;">
          
          <div class="text-center" style="margin-bottom: 40px;">
            <h1 style="margin-bottom: 16px;">Changelog & Updates</h1>
            <p style="color: var(--color-text-muted); font-size: 1.125rem;">
              Track continuous updates, fixes, and feature additions for Shepherd Bible across all platforms.
            </p>
          </div>

          <div class="platform-tabs" id="changelog-filters">
            <button class="platform-tab active" data-filter="all">
              <span class="tab-icon">${icons.all}</span>
              All Platforms
            </button>
            <button class="platform-tab" data-filter="windows">
              <span class="tab-icon">${icons.windows}</span>
              Windows
            </button>
            <button class="platform-tab" data-filter="android">
              <span class="tab-icon">${icons.android}</span>
              Android
            </button>
            <button class="platform-tab" data-filter="ios">
              <span class="tab-icon">${icons.ios}</span>
              iOS / Mac
            </button>
            <button class="platform-tab" data-filter="linux">
              <span class="tab-icon">${icons.linux}</span>
              Linux
            </button>
            <button class="platform-tab" data-filter="web">
              <span class="tab-icon">${icons.web}</span>
              Web
            </button>
          </div>

          <div class="changelog-list" id="changelog-list">
            ${entries.map(entry => {
      const entryPlatforms = entry.platforms ? entry.platforms.join(',') : 'all';

      return `
              <article class="changelog-card" data-platforms="${entryPlatforms}">
                <div class="changelog-header">
                  <div class="version-group">
                    <span class="version-tag">${entry.version}</span>
                    <span class="type-badge badge-${entry.type}">${entry.type}</span>
                    <div class="platform-indicators">
                      ${(entry.platforms || []).map((p: string) => `
                        <span class="indicator-icon" title="${p}">${icons[p] || ''}</span>
                      `).join('')}
                    </div>
                  </div>
                  <time class="release-date">${entry.date}</time>
                </div>

                <h2 class="changelog-title">${entry.title}</h2>
                <p class="changelog-description">${entry.description}</p>

                <div class="changelog-changes">
                  <h3>What's New</h3>
                  <ul>
                    ${entry.changes.map((change: string) => `<li>${change}</li>`).join('')}
                  </ul>
                </div>
              </article>
            `}).join('')}
          </div>

          <!-- Empty State -->
          <div id="changelog-empty" style="display: none; text-align: center; padding: 60px 20px; color: var(--color-text-muted); background: var(--color-surface); border-radius: var(--radius-lg); border: 1px dashed var(--color-border);">
             <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 16px; opacity: 0.5;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
             <h3 style="margin-bottom: 8px; font-size: 1.25rem; color: var(--color-text);">No updates yet</h3>
             <p>There are no changelog entries for this platform at the moment. Check back soon!</p>
          </div>

        </div>
      </div>
    `; // Notice we completely removed the <script> block from the string!
  }
};