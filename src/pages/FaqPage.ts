import type { Page } from '../types';
import { faqs } from '../data/FaqItem';

export const FaqPage: Page = {
  render: () => /* html */  `
    <div class="section">
      <div class="container" style="max-width: 800px;">
        <h1 class="text-center" style="margin-bottom: 16px;">Help Center & FAQ</h1>
        <p class="text-center" style="color: var(--color-text-muted); margin-bottom: 40px;">Find answers to common questions about Shepherd Bible.</p>
        
        <div class="search-container" style="margin-bottom: 40px;">
          <input type="text" id="faq-search" placeholder="Search questions..." class="search-input" aria-label="Search FAQ" />
        </div>

        <div id="faq-list" class="faq-list">
          ${faqs.map(faq => `
            <div class="faq-item" data-question="${faq.question.toLowerCase()}">
              <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${faq.id}">
                ${faq.question}
                <span class="icon">+</span>
              </button>
              <div class="faq-answer" id="faq-answer-${faq.id}" hidden>
                <p>${faq.answer}</p>
              </div>
            </div>
          `).join('')}
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
  `,
  mount: () => {
    // Accordion Logic
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
      q.addEventListener('click', () => {
        const isExpanded = q.getAttribute('aria-expanded') === 'true';
        q.setAttribute('aria-expanded', String(!isExpanded));
        const answer = q.nextElementSibling as HTMLElement;
        if (isExpanded) {
          answer.setAttribute('hidden', 'true');
          q.querySelector('.icon')!.textContent = '+';
        } else {
          answer.removeAttribute('hidden');
          q.querySelector('.icon')!.textContent = '−';
        }
      });
    });

    // Search Logic
    const search = document.getElementById('faq-search') as HTMLInputElement;
    const items = document.querySelectorAll('.faq-item');
    search?.addEventListener('input', (e) => {
      const term = (e.target as HTMLInputElement).value.toLowerCase();
      items.forEach(item => {
        const q = item.getAttribute('data-question') || '';
        (item as HTMLElement).style.display = q.includes(term) ? 'block' : 'none';
      });
    });
  }
};