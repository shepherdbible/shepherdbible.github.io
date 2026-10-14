import '../features/books/osis-identifiers.css';
import { bibleBookOrder } from '../features/books/books';

export class OsisIdentifiersPage {
  public container: HTMLElement;
  private searchTerm: string = '';
  private testamentFilter: 'All' | 'OT' | 'NT' = 'All';
  
  private tbody!: HTMLTableSectionElement;
  private searchInput!: HTMLInputElement;
  private filterSelect!: HTMLSelectElement;
  private exportBtn!: HTMLButtonElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'osis-page';

    this.buildStaticDOM();
    this.cacheDOM();
    this.attachEventListeners();
    this.renderTable();
  }

  private buildStaticDOM(): void {
    this.container.innerHTML = `
      <header class="osis-hero">
        <div style="max-width: 1000px; margin: 0 auto;">
          <h1>A Common Language for Bible Book Identifiers</h1>
          <p class="subtitle">One consistent reference. Thousands of languages. Greater compatibility.</p>
          <p style="color: #4B5563; font-size: 1.125rem;">
            Bible translations exist in many languages, and book names differ across languages and applications. OSIS book identifiers offer a common machine-readable naming approach that applications can use independently of the language used to display a book's name.
          </p>
        </div>
      </header>

      <main class="osis-section">
        <section class="osis-statement">
          "We believe Bible resources should be easier to connect across languages and platforms. By encouraging consistent use of established OSIS book identifiers, we aim to help developers build a more interoperable Bible ecosystem while preserving each language's unique traditions."
        </section>

        <section style="margin-bottom: 4rem;">
          <h2 class="osis-heading">Our Vision</h2>
          <p style="font-size: 1.125rem;">We encourage the international Bible software community to use established OSIS book identifiers as shared identifiers for Bible books. This initiative encourages adoption of existing conventions; the Shepherd Bible Community does not establish official worldwide standards.</p>
        </section>

        <section>
          <h2 class="osis-heading">Why a Shared Identifier Matters</h2>
          <div class="osis-cards">
            <div class="osis-card"><h3>International compatibility</h3><p>Help applications exchange references across language boundaries.</p></div>
            <div class="osis-card"><h3>Consistent data</h3><p>Reduce mismatches caused by different localized book names.</p></div>
            <div class="osis-card"><h3>Simpler integration</h3><p>Make Bible imports, exports, and APIs easier to integrate.</p></div>
            <div class="osis-card"><h3>Language independence</h3><p>Keep identifiers separate from localized interface text.</p></div>
          </div>
        </section>

        <section style="margin-bottom: 4rem;">
          <h2 class="osis-heading">How It Works</h2>
          <p>The identifier remains stable while the visible book name is translated. For example:</p>
          <div class="osis-table-container">
            <table class="osis-table">
              <thead>
                <tr><th>Language</th><th>Display Name</th><th>Shared OSIS ID</th></tr>
              </thead>
              <tbody>
                <tr><td>English</td><td>Genesis</td><td class="osis-id-text">Gen</td></tr>
                <tr><td>Filipino</td><td>Genesis / lokal na pangalan</td><td class="osis-id-text">Gen</td></tr>
                <tr><td>Spanish</td><td>Génesis</td><td class="osis-id-text">Gen</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 class="osis-heading">Book Order and Identifiers (Protestant Canon)</h2>
          <div class="osis-controls">
            <div style="display: flex; gap: 1rem; flex: 1; flex-wrap: wrap;">
              <input type="text" class="osis-search" id="osis-search-input" placeholder="Search by book or OSIS ID..." />
              <select class="osis-filter" id="osis-testament-filter">
                <option value="All">All Testaments</option>
                <option value="OT">Old Testament</option>
                <option value="NT">New Testament</option>
              </select>
            </div>
            <button class="osis-btn" id="osis-export-btn">Export JSON</button>
          </div>
          <div class="osis-table-container">
            <table class="osis-table">
              <thead>
                <tr>
                  <th style="width: 10%">#</th>
                  <th style="width: 30%">English Name</th>
                  <th style="width: 30%">OSIS ID</th>
                  <th style="width: 20%">Testament</th>
                  <th style="width: 10%">Action</th>
                </tr>
              </thead>
              <tbody id="osis-dynamic-tbody"></tbody>
            </table>
          </div>
        </section>
      </main>
    `;
  }

  private cacheDOM(): void {
    this.searchInput = this.container.querySelector('#osis-search-input') as HTMLInputElement;
    this.filterSelect = this.container.querySelector('#osis-testament-filter') as HTMLSelectElement;
    this.exportBtn = this.container.querySelector('#osis-export-btn') as HTMLButtonElement;
    this.tbody = this.container.querySelector('#osis-dynamic-tbody') as HTMLTableSectionElement;
  }

  private attachEventListeners(): void {
    this.searchInput.addEventListener('input', (e: Event) => {
      this.searchTerm = (e.target as HTMLInputElement).value.toLowerCase();
      this.renderTable();
    });

    this.filterSelect.addEventListener('change', (e: Event) => {
      this.testamentFilter = (e.target as HTMLSelectElement).value as 'All' | 'OT' | 'NT';
      this.renderTable();
    });

    this.exportBtn.addEventListener('click', () => {
      this.exportJSON();
    });
  }

  private renderTable(): void {
    this.tbody.innerHTML = ''; // Clear previous rows

    const filtered = bibleBookOrder.filter(book => {
      const matchSearch = book.name.toLowerCase().includes(this.searchTerm) || book.osis.toLowerCase().includes(this.searchTerm);
      const matchTestament = this.testamentFilter === 'All' || book.testament === this.testamentFilter;
      return matchSearch && matchTestament;
    });

    if (filtered.length === 0) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 5;
      td.textContent = 'No books found matching your criteria.';
      td.style.textAlign = 'center';
      tr.appendChild(td);
      this.tbody.appendChild(tr);
      return;
    }

    filtered.forEach(book => {
      const tr = document.createElement('tr');

      // Order
      const tdOrder = document.createElement('td');
      tdOrder.textContent = book.order.toString();
      tr.appendChild(tdOrder);

      // Name
      const tdName = document.createElement('td');
      tdName.textContent = book.name;
      tr.appendChild(tdName);

      // OSIS
      const tdOsis = document.createElement('td');
      tdOsis.className = 'osis-id-text';
      tdOsis.textContent = book.osis;
      tr.appendChild(tdOsis);

      // Testament
      const tdTestament = document.createElement('td');
      const spanTestament = document.createElement('span');
      spanTestament.className = book.testament === 'OT' ? 'tag-ot' : 'tag-nt';
      spanTestament.textContent = book.testament === 'OT' ? 'Old Testament' : 'New Testament';
      tdTestament.appendChild(spanTestament);
      tr.appendChild(tdTestament);

      // Action / Copy
      const tdAction = document.createElement('td');
      const copyBtn = document.createElement('button');
      copyBtn.className = 'osis-copy-btn';
      copyBtn.textContent = 'Copy';
      
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(book.osis);
          copyBtn.textContent = 'Copied!';
          copyBtn.classList.add('copied');
          setTimeout(() => {
            copyBtn.textContent = 'Copy';
            copyBtn.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy', err);
          copyBtn.textContent = 'Error';
        }
      });
      
      tdAction.appendChild(copyBtn);
      tr.appendChild(tdAction);

      this.tbody.appendChild(tr);
    });
  }

  private exportJSON(): void {
    const dataStr = JSON.stringify(bibleBookOrder, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    link.download = 'osis-bible-book-identifiers.json';
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /**
   * Returns the generated HTMLElement for appending to the DOM.
   */
  public render(): HTMLElement {
    return this.container;
  }
}