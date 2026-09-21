import type { Page } from "../types";

export const CommunityPage: Page = {
  render: () => /* html */ `
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
  `,
};
