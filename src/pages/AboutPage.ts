import type { Page } from '../types';

export const AboutPage: Page = {
  render: () => /* html */  `
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
  `
};