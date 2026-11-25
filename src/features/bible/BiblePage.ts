import "./BiblePage.css";
import { bibleBookOrder } from "../books/books";

type Testament = "OT" | "NT";
type BibleBook = { osis: string; name: string; testament: Testament; chapters: Record<string, number> };
type BibleManifest = { translation: string; name: string; verseCount: number; pathTemplate: string; headingsPath: string; books: BibleBook[] };
type BibleVerse = { id: string; osis: string; human: string; chapter: number; verse: number; code: string; is_nt: number; reference: string; text: string; red: { start_offset: number; length: number }[] };
type BibleHeading = { title: string; reference: string; osis: string; chapter: number; verse: number };
type SavedHighlight = { id: string; osis: string; bookName: string; chapter: number; verse: number; text: string };

const HIGHLIGHT_KEY = "sb-bible-highlights-v1";
const LAST_READ_KEY = "sb-bible-last-read-v1";

export class BiblePage {
  public container: HTMLElement;
  private manifest: BibleManifest | null = null;
  private bookIndex = 0;
  private chapter = 1;
  private verses: BibleVerse[] = [];
  private headings: BibleHeading[] = [];
  private highlights = new Map<string, SavedHighlight>();
  private searchTerm = "";
  private requestId = 0;
  private elements!: {
    bookSelect: HTMLSelectElement; chapterSelect: HTMLSelectElement;
    title: HTMLElement; subtitle: HTMLElement; count: HTMLElement; list: HTMLElement; status: HTMLElement;
    search: HTMLInputElement; searchCount: HTMLElement; previous: HTMLButtonElement; next: HTMLButtonElement;
    copyChapter: HTMLButtonElement; copyLink: HTMLButtonElement; highlightsToggle: HTMLButtonElement;
    highlightsPanel: HTMLElement; highlightsList: HTMLElement; highlightsEmpty: HTMLElement; live: HTMLElement;
  };

  constructor() {
    this.container = document.createElement("main");
    this.container.className = "bible-reader";
    this.container.innerHTML = `
      <div class="bible-reader__shell">
        <header class="bible-reader__intro">
          <div class="bible-reader__eyebrow"><span class="bible-reader__eyebrow-mark" aria-hidden="true">✦</span> A quiet place in the Word</div>
          <div class="bible-reader__intro-row"><div><h1>Read the Bible</h1><p>Take your time. Find a chapter, settle in, and carry a verse with you.</p></div><div class="bible-reader__version-pill"><span class="bible-reader__version-dot" aria-hidden="true"></span><span>KJV</span><span class="bible-reader__version-name">King James Version</span></div></div>
        </header>
        <section class="bible-picker" aria-label="Choose a passage">
          <div class="bible-picker__fields"><label class="bible-field bible-field--book"><span>BOOK</span><select aria-label="Book"></select><span class="bible-field__chevron" aria-hidden="true">⌄</span></label><label class="bible-field bible-field--chapter"><span>CHAPTER</span><select aria-label="Chapter"></select><span class="bible-field__chevron" aria-hidden="true">⌄</span></label></div>
          <div class="bible-picker__hint"><span aria-hidden="true">↳</span> 66 books · from Genesis to Revelation</div>
        </section>
        <div class="bible-reader__body">
          <section class="bible-reading" aria-labelledby="bible-chapter-title">
            <div class="bible-reading__topline"><span class="bible-reading__section-label">TODAY, IN SCRIPTURE</span><span class="bible-reading__chapter-count"></span></div>
            <div class="bible-reading__heading"><div><h2 id="bible-chapter-title">Genesis 1</h2><p class="bible-reading__subtitle">King James Version</p></div><div class="bible-reading__tools"><button class="bible-tool-button" type="button" data-action="copy-link" aria-label="Copy link to this chapter" title="Copy link"><span aria-hidden="true">↗</span><span>Share</span></button><button class="bible-tool-button" type="button" data-action="copy-chapter" aria-label="Copy chapter text" title="Copy chapter"><span aria-hidden="true">▢</span><span>Copy</span></button></div></div>
            <div class="bible-reading__search-row"><label class="bible-search"><span class="bible-search__icon" aria-hidden="true">⌕</span><input type="search" placeholder="Find in this chapter" aria-label="Find text in this chapter"></label><button type="button" class="bible-highlights-toggle" data-action="toggle-highlights" aria-expanded="false"><span aria-hidden="true">✧</span> Highlights <span class="bible-highlights-toggle__count">0</span></button></div>
            <div class="bible-search-count" aria-live="polite"></div>
            <div class="bible-highlight-panel" hidden><div class="bible-highlight-panel__heading"><strong>Your saved verses</strong><span>Only you can see these on this device.</span></div><div class="bible-highlight-list"></div><p class="bible-highlight-empty" hidden>No highlights yet. Tap a verse while you read to save it here.</p></div>
            <div class="bible-reader__status" role="status"></div><div class="bible-verses" aria-live="polite"></div><p class="bible-reader__live visually-hidden" aria-live="polite"></p>
            <div class="bible-reading__footer"><span>King James Version</span><span>Tap a verse to save or remove its highlight</span></div>
          </section>
          <aside class="bible-side-note" aria-label="Reading note"><div class="bible-side-note__icon" aria-hidden="true">✦</div><p class="bible-side-note__label">A moment to reflect</p><p class="bible-side-note__copy">Read slowly. Let a word or phrase stay with you.</p><div class="bible-side-note__rule"></div><p class="bible-side-note__meta">Your highlights are saved in this browser.</p></aside>
        </div>
        <nav class="bible-chapter-nav" aria-label="Chapter navigation">
          <button class="bible-chapter-nav__button bible-chapter-nav__button--previous" type="button" data-action="previous"><span class="bible-chapter-nav__arrow" aria-hidden="true">←</span><span><small>PREVIOUS</small><strong>Previous chapter</strong></span></button>
          <div class="bible-chapter-nav__position"><span class="bible-chapter-nav__position-mark" aria-hidden="true"></span><span></span></div>
          <button class="bible-chapter-nav__button bible-chapter-nav__button--next" type="button" data-action="next"><span><small>NEXT</small><strong>Next chapter</strong></span><span class="bible-chapter-nav__arrow" aria-hidden="true">→</span></button>
        </nav>
        <p class="bible-reader__footnote">Scripture text from the public domain King James Version.</p>
      </div>`;
    this.readHighlights();
  }

  public render(): HTMLElement { return this.container; }

  public mount(): void {
    this.cacheElements();
    this.attachEvents();
    this.updateHighlightCount();
    void this.loadManifest();
  }

  private cacheElements(): void {
    const q = <T extends Element>(selector: string) => this.container.querySelector<T>(selector)!;
    this.elements = {
      bookSelect: q<HTMLSelectElement>(".bible-field--book select"), chapterSelect: q<HTMLSelectElement>(".bible-field--chapter select"),
      title: q<HTMLElement>("#bible-chapter-title"), subtitle: q<HTMLElement>(".bible-reading__subtitle"), count: q<HTMLElement>(".bible-reading__chapter-count"),
      list: q<HTMLElement>(".bible-verses"), status: q<HTMLElement>(".bible-reader__status"), search: q<HTMLInputElement>(".bible-search input"), searchCount: q<HTMLElement>(".bible-search-count"),
      previous: q<HTMLButtonElement>("[data-action='previous']"), next: q<HTMLButtonElement>("[data-action='next']"), copyChapter: q<HTMLButtonElement>("[data-action='copy-chapter']"), copyLink: q<HTMLButtonElement>("[data-action='copy-link']"),
      highlightsToggle: q<HTMLButtonElement>("[data-action='toggle-highlights']"), highlightsPanel: q<HTMLElement>(".bible-highlight-panel"), highlightsList: q<HTMLElement>(".bible-highlight-list"), highlightsEmpty: q<HTMLElement>(".bible-highlight-empty"), live: q<HTMLElement>(".bible-reader__live"),
    };
  }

  private attachEvents(): void {
    this.elements.bookSelect.addEventListener("change", () => void this.navigateTo(this.elements.bookSelect.value, 1));
    this.elements.chapterSelect.addEventListener("change", () => void this.navigateTo(this.currentBook().osis, Number(this.elements.chapterSelect.value)));
    this.elements.previous.addEventListener("click", () => void this.moveChapter(-1));
    this.elements.next.addEventListener("click", () => void this.moveChapter(1));
    this.elements.search.addEventListener("input", () => { this.searchTerm = this.elements.search.value.trim().toLocaleLowerCase(); this.renderVerses(); });
    this.elements.copyChapter.addEventListener("click", () => void this.copyChapter());
    this.elements.copyLink.addEventListener("click", () => void this.copyLink());
    this.elements.highlightsToggle.addEventListener("click", () => {
      const open = this.elements.highlightsPanel.hidden;
      this.elements.highlightsPanel.hidden = !open;
      this.elements.highlightsToggle.setAttribute("aria-expanded", String(open));
      this.renderHighlights();
    });
  }

  private async loadManifest(): Promise<void> {
    this.setStatus("Loading the King James Version…", "loading");
    try {
      const response = await fetch("/bible/kjv/index.json");
      if (!response.ok) throw new Error(`Manifest request failed (${response.status})`);
      const manifest = await response.json() as BibleManifest;
      if (!Array.isArray(manifest.books) || manifest.books.length !== 66) throw new Error("The Bible book index is incomplete.");
      this.manifest = manifest;
      try {
        const headingsResponse = await fetch("/bible/kjv/headings.json");
        if (headingsResponse.ok) this.headings = await headingsResponse.json() as BibleHeading[];
      } catch (error) {
        console.warn("Bible: section headings could not be loaded.", error);
      }
      const params = new URLSearchParams(window.location.search);
      const saved = this.readLastRead();
      const requestedBook = params.get("book") ?? saved?.osis ?? "Gen";
      const requestedChapter = Number(params.get("chapter") ?? saved?.chapter ?? 1);
      const initial = manifest.books.find((book) => book.osis === requestedBook) ?? manifest.books[0];
      this.bookIndex = manifest.books.indexOf(initial);
      this.renderBookOptions();
      const max = this.chapterCount(initial);
      this.chapter = Number.isInteger(requestedChapter) && requestedChapter > 0 && requestedChapter <= max ? requestedChapter : 1;
      this.syncSelectors();
      this.writeLastRead();
      await this.renderChapter();
    } catch (error) {
      console.error("Bible: unable to load the static KJV data.", error);
      this.setStatus("The Bible could not be loaded. Check your connection and try again.", "error");
      const retry = document.createElement("button"); retry.className = "bible-retry-button"; retry.type = "button"; retry.textContent = "Try again";
      retry.addEventListener("click", () => void this.loadManifest()); this.elements.status.appendChild(retry);
    }
  }

  private renderBookOptions(): void {
    this.elements.bookSelect.replaceChildren();
    for (const [testament, label] of [["OT", "Old Testament"], ["NT", "New Testament"]] as const) {
      const group = document.createElement("optgroup"); group.label = label;
      this.manifest?.books.filter((book) => book.testament === testament).forEach((book) => {
        const option = document.createElement("option"); option.value = book.osis; option.textContent = book.name; group.appendChild(option);
      });
      this.elements.bookSelect.appendChild(group);
    }
  }

  private syncSelectors(): void {
    if (!this.manifest) return;
    const book = this.currentBook();
    this.elements.bookSelect.value = book.osis;
    this.elements.chapterSelect.replaceChildren();
    for (let value = 1; value <= this.chapterCount(book); value += 1) {
      const option = document.createElement("option"); option.value = String(value); option.textContent = `Chapter ${value}`; this.elements.chapterSelect.appendChild(option);
    }
    this.elements.chapterSelect.value = String(this.chapter);
    this.elements.title.textContent = `${book.name} ${this.chapter}`;
    this.elements.count.textContent = `${this.chapterCount(book)} CHAPTERS`;
    this.elements.subtitle.textContent = `${book.testament === "OT" ? "Old Testament" : "New Testament"} · King James Version`;
    const position = this.container.querySelector<HTMLElement>(".bible-chapter-nav__position span:last-child");
    if (position) position.textContent = `Book ${this.bookIndex + 1} of 66 · Chapter ${this.chapter} of ${this.chapterCount(book)}`;
    this.elements.previous.disabled = this.bookIndex === 0 && this.chapter === 1;
    this.elements.next.disabled = this.bookIndex === this.manifest.books.length - 1 && this.chapter === this.chapterCount(book);
  }

  private async navigateTo(osis: string, chapter: number, push = true): Promise<void> {
    if (!this.manifest) return;
    const index = this.manifest.books.findIndex((book) => book.osis === osis);
    if (index < 0) return;
    this.bookIndex = index;
    this.chapter = Math.min(Math.max(1, chapter), this.chapterCount(this.currentBook()));
    this.syncSelectors(); this.searchTerm = ""; this.elements.search.value = "";
    if (push) this.writeLocation();
    this.writeLastRead();
    await this.renderChapter();
  }

  private async moveChapter(direction: -1 | 1): Promise<void> {
    if (!this.manifest) return;
    let nextBook = this.bookIndex; let nextChapter = this.chapter + direction;
    if (nextChapter < 1) {
      if (nextBook === 0) return;
      nextBook -= 1; nextChapter = this.chapterCount(this.manifest.books[nextBook]);
    } else if (nextChapter > this.chapterCount(this.currentBook())) {
      if (nextBook >= this.manifest.books.length - 1) return;
      nextBook += 1; nextChapter = 1;
    }
    await this.navigateTo(this.manifest.books[nextBook].osis, nextChapter);
  }

  private async renderChapter(): Promise<void> {
    const book = this.currentBook(); const chapter = this.chapter; const requestId = ++this.requestId;
    const verseCount = book.chapters[String(chapter)];
    this.verses = []; this.elements.list.replaceChildren(); this.elements.searchCount.textContent = "";
    this.setStatus("Preparing your chapter…", "loading"); this.syncSelectors();
    try {
      const verses = await Promise.all(Array.from({ length: verseCount }, async (_, index) => {
        const verse = index + 1;
        const response = await fetch(`/bible/kjv/${encodeURIComponent(book.osis)}/${chapter}/${verse}.json`);
        if (!response.ok) throw new Error(`${book.osis} ${chapter}:${verse} returned ${response.status}`);
        return await response.json() as BibleVerse;
      }));
      if (requestId !== this.requestId) return;
      this.verses = verses; this.setStatus("", ""); this.renderVerses();
      this.elements.live.textContent = `${book.name}, chapter ${chapter} loaded. ${verses.length} verses.`;
      document.title = `${book.name} ${chapter} · KJV | Shepherd Bible`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      if (requestId !== this.requestId) return;
      console.error("Bible: chapter could not be loaded.", error);
      this.setStatus("This chapter could not be loaded. Please check your connection and try again.", "error");
      const retry = document.createElement("button"); retry.className = "bible-retry-button"; retry.type = "button"; retry.textContent = "Reload chapter";
      retry.addEventListener("click", () => void this.renderChapter()); this.elements.status.appendChild(retry);
    }
  }

  private renderVerses(): void {
    const found = this.verses.filter((verse) => !this.searchTerm || verse.text.toLocaleLowerCase().includes(this.searchTerm) || String(verse.verse) === this.searchTerm);
    this.elements.list.replaceChildren();
    this.elements.searchCount.textContent = this.searchTerm ? `${found.length} of ${this.verses.length} verses` : "";
    if (this.searchTerm && !found.length) {
      const empty = document.createElement("p"); empty.className = "bible-verses__empty"; empty.textContent = "No verses in this chapter match that search."; this.elements.list.appendChild(empty); return;
    }
    const chapterHeadings = this.headings.filter((heading) => heading.osis === this.currentBook().osis && heading.chapter === this.chapter);
    let paragraph: HTMLParagraphElement | null = null;
    found.forEach((verse) => {
      const headingsHere = chapterHeadings.filter((heading) => heading.verse === verse.verse);
      if (headingsHere.length) {
        paragraph = null;
        headingsHere.forEach((heading) => {
          const headingElement = document.createElement("h3");
          headingElement.className = "bible-section-heading";
          headingElement.textContent = heading.title;
          this.elements.list.appendChild(headingElement);
        });
      }
      if (!paragraph) {
        paragraph = document.createElement("p");
        paragraph.className = "bible-paragraph";
        this.elements.list.appendChild(paragraph);
      }
      const highlighted = this.highlights.has(verse.id);
      const token = document.createElement("span"); token.className = `bible-verse${highlighted ? " is-highlighted" : ""}`;
      token.setAttribute("role", "button"); token.setAttribute("tabindex", "0"); token.setAttribute("aria-pressed", String(highlighted));
      token.setAttribute("aria-label", `${verse.reference}. ${verse.text}. ${highlighted ? "Highlighted." : "Not highlighted."} Activate to ${highlighted ? "remove" : "save"} highlight.`);
      const number = document.createElement("sup"); number.className = "bible-verse__number"; number.textContent = String(verse.verse);
      const text = document.createElement("span"); text.className = "bible-verse__text";
      this.appendVerseText(text, verse);
      token.append(number, document.createTextNode(" "), text);
      token.addEventListener("click", () => this.toggleHighlight(verse, token));
      token.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); this.toggleHighlight(verse, token); }
      });
      paragraph.append(token, document.createTextNode(" "));
    });
  }

  private appendVerseText(container: HTMLElement, verse: BibleVerse): void {
    let cursor = 0;
    const ranges = verse.is_nt ? [...(verse.red ?? [])].sort((a, b) => a.start_offset - b.start_offset) : [];
    ranges.forEach((range) => {
      const start = Math.max(cursor, Math.min(verse.text.length, range.start_offset));
      const end = Math.max(start, Math.min(verse.text.length, range.start_offset + range.length));
      if (start > cursor) container.appendChild(document.createTextNode(verse.text.slice(cursor, start)));
      if (end > start) {
        const redLetter = document.createElement("span");
        redLetter.className = "bible-verse__red-letter";
        redLetter.textContent = verse.text.slice(start, end);
        container.appendChild(redLetter);
      }
      cursor = end;
    });
    if (cursor < verse.text.length) container.appendChild(document.createTextNode(verse.text.slice(cursor)));
  }

  private toggleHighlight(verse: BibleVerse, button: HTMLElement): void {
    if (this.highlights.has(verse.id)) {
      this.highlights.delete(verse.id); button.classList.remove("is-highlighted"); button.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-label", `${verse.reference}. ${verse.text}. Not highlighted. Activate to save highlight.`); this.elements.live.textContent = `Highlight removed from ${verse.reference}.`;
    } else {
      this.highlights.set(verse.id, { id: verse.id, osis: verse.osis, bookName: verse.human, chapter: verse.chapter, verse: verse.verse, text: verse.text });
      button.classList.add("is-highlighted"); button.setAttribute("aria-pressed", "true"); button.setAttribute("aria-label", `${verse.reference}. ${verse.text}. Highlighted. Activate to remove highlight.`); this.elements.live.textContent = `${verse.reference} saved to your highlights.`;
    }
    this.writeHighlights(); this.updateHighlightCount();
    if (!this.elements.highlightsPanel.hidden) this.renderHighlights();
  }

  private renderHighlights(): void {
    this.elements.highlightsList.replaceChildren();
    const items = [...this.highlights.values()].sort((a, b) => bibleBookOrder.findIndex((book) => book.osis === a.osis) - bibleBookOrder.findIndex((book) => book.osis === b.osis) || a.chapter - b.chapter || a.verse - b.verse);
    this.elements.highlightsEmpty.hidden = items.length > 0;
    items.forEach((item) => {
      const row = document.createElement("div"); row.className = "bible-highlight-item";
      const jump = document.createElement("button"); jump.type = "button"; jump.className = "bible-highlight-item__jump";
      const title = document.createElement("strong"); title.textContent = `${item.bookName} ${item.chapter}:${item.verse}`;
      const text = document.createElement("span"); text.textContent = item.text; jump.append(title, text);
      jump.addEventListener("click", () => { this.elements.highlightsPanel.hidden = true; this.elements.highlightsToggle.setAttribute("aria-expanded", "false"); void this.navigateTo(item.osis, item.chapter); });
      const remove = document.createElement("button"); remove.type = "button"; remove.className = "bible-highlight-item__remove"; remove.setAttribute("aria-label", `Remove ${item.bookName} ${item.chapter}:${item.verse} highlight`); remove.textContent = "×";
      remove.addEventListener("click", () => { this.highlights.delete(item.id); this.writeHighlights(); this.updateHighlightCount(); this.renderHighlights(); if (item.osis === this.currentBook().osis && item.chapter === this.chapter) this.renderVerses(); });
      row.append(jump, remove); this.elements.highlightsList.appendChild(row);
    });
  }

  private updateHighlightCount(): void { this.container.querySelector<HTMLElement>(".bible-highlights-toggle__count")!.textContent = String(this.highlights.size); }
  private async copyChapter(): Promise<void> { await this.copyText(this.verses.map((verse) => `${verse.reference}  ${verse.text}`).join("\n"), "Chapter copied"); }
  private async copyLink(): Promise<void> { await this.copyText(window.location.href, "Chapter link copied"); }
  private async copyText(text: string, success: string): Promise<void> {
    try { await navigator.clipboard.writeText(text); this.elements.live.textContent = `${success}.`; }
    catch { this.elements.live.textContent = "Clipboard access is unavailable in this browser."; }
  }
  private setStatus(message: string, kind: "loading" | "error" | ""): void {
    this.elements.status.className = `bible-reader__status${kind ? ` is-${kind}` : ""}`; this.elements.status.textContent = message; this.elements.status.hidden = !message;
  }
  private currentBook(): BibleBook { return this.manifest!.books[this.bookIndex]; }
  private chapterCount(book: BibleBook): number { return Object.keys(book.chapters).length; }
  private writeLocation(): void {
    const url = new URL(window.location.href); url.pathname = "/bible"; url.searchParams.set("book", this.currentBook().osis); url.searchParams.set("chapter", String(this.chapter));
    history.pushState({}, "", `${url.pathname}${url.search}`);
  }
  private writeHighlights(): void { try { localStorage.setItem(HIGHLIGHT_KEY, JSON.stringify([...this.highlights.values()])); } catch (error) { console.warn("Bible: highlights could not be saved.", error); } }
  private readHighlights(): void {
    try { const saved = JSON.parse(localStorage.getItem(HIGHLIGHT_KEY) ?? "[]") as SavedHighlight[]; if (Array.isArray(saved)) saved.forEach((item) => { if (item && typeof item.id === "string" && typeof item.text === "string") this.highlights.set(item.id, item); }); }
    catch { this.highlights.clear(); }
  }
  private writeLastRead(): void { try { localStorage.setItem(LAST_READ_KEY, JSON.stringify({ osis: this.currentBook().osis, chapter: this.chapter })); } catch { /* Reading works if browser storage is unavailable. */ } }
  private readLastRead(): { osis: string; chapter: number } | null {
    try { const value = JSON.parse(localStorage.getItem(LAST_READ_KEY) ?? "null") as { osis?: unknown; chapter?: unknown } | null; if (value && typeof value.osis === "string" && typeof value.chapter === "number") return { osis: value.osis, chapter: value.chapter }; }
    catch { /* Ignore damaged storage and start at Genesis 1. */ }
    return null;
  }
}
