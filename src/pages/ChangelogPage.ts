import type { Page, ChangelogEntry } from '../types';
import { changelogs } from '../data/changelog';

export const ChangelogPage: Page = {
  render: () => {
    // Fallback to sample release data if data file is empty
    const entries: ChangelogEntry[] = changelogs.length > 0 ? changelogs : [
      {
        id: 'v1.0.0-preview',
        version: '1.0.0 (Preview)',
        date: 'October 2026',
        title: 'Initial Web & Community Launch',
        description: 'The foundation for the Shepherd Bible web experience, help center, and community preview.',
        changes: [
          'Distraction-free reading interface design and typography',
          'Searchable FAQ & Help Center with accordion controls',
          'Static Community Hub preview for future discussion platform',
          'Light and dark peaceful themes with local preference storage'
        ],
        type: 'feature'
      },
      {
        id: 'v0.9.0-beta',
        version: '0.9.0 (Beta)',
        date: 'September 2026',
        title: 'Core Reading & Offline Support',
        description: 'Early beta build introducing local Bible caching and offline reading performance.',
        changes: [
          'Added KJV and WEB translation support',
          'Local storage caching for fast offline verse loading',
          'Responsive layout optimizations for mobile and tablet readers'
        ],
        type: 'improvement'
      }
    ];

    return `
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
            ${entries.map(entry => `
              <article class="changelog-card">
                <div class="changelog-header">
                  <div class="version-group">
                    <span class="version-tag">${entry.version}</span>
                    <span class="type-badge badge-${entry.type}">${entry.type}</span>
                  </div>
                  <time class="release-date">${entry.date}</time>
                </div>

                <h2 class="changelog-title">${entry.title}</h2>
                <p class="changelog-description">${entry.description}</p>

                <div class="changelog-changes">
                  <h3>What's New</h3>
                  <ul>
                    ${entry.changes.map(change => `<li>${change}</li>`).join('')}
                  </ul>
                </div>
              </article>
            `).join('')}
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
    `;
  }
};