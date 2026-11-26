import "../bible/BiblePage.css";
import "./AudioReadingPage.css";

type Testament = "OT" | "NT";
type BibleBook = { osis: string; name: string; testament: Testament; chapters: Record<string, number> };
type BibleManifest = { translation: string; name: string; verseCount: number; books: BibleBook[] };
type BibleVerse = { id: string; osis: string; human: string; chapter: number; verse: number; reference: string; text: string; is_nt: number; red: { start_offset: number; length: number }[] };
type BibleHeading = { title: string; osis: string; chapter: number; verse: number };
type SavedHighlight = { id: string; osis: string; bookName: string; chapter: number; verse: number; text: string };
type ChapterBuffer = { chapter: number; verseCount: number; verses: BibleVerse[]; received: number };

const HIGHLIGHT_KEY = "sb-bible-highlights-v1";
const TIP_KEY = "sb-audio-reading-tip-dismissed-v1";
const WORKER_COUNT = 18;

export class AudioReadingPage {
  public container: HTMLElement;
  private readonly versionCode: string;
  private abortController: AbortController | null = null;
  private highlights = new Set<string>();
  private manifest: BibleManifest | null = null;
  private headings: BibleHeading[] = [];
  private book: BibleBook | null = null;
  private startChapter = 1;

  constructor(versionCode = "kjv") {
    this.versionCode = /^[a-z0-9-]+$/i.test(versionCode) ? versionCode.toLowerCase() : "kjv";
    this.container = document.createElement("main");
    this.container.className = "bible-reader bible-audio-reader";
    this.container.innerHTML = `
      <div class="bible-reader__shell">
        <header class="bible-reader__intro">
          <div class="bible-reader__eyebrow"><span class="bible-reader__eyebrow-mark" aria-hidden="true">♫</span> Continuous reading</div>
          <div class="bible-reader__intro-row">
            <div><h1 data-reading-title>Preparing your reading</h1><p>Chapters flow together from your selected place to the end of this book.</p></div>
            <div class="bible-audio-actions"><a class="bible-tool-button" data-route data-reading-back href="/bible/kjv"><span aria-hidden="true">←</span><span>Back to Bible</span></a><button class="bible-tool-button" data-reading-tip-open type="button" hidden>Listening tip</button></div>
          </div>
        </header>
        <div class="bible-audio-tip" data-reading-tip role="note" hidden>
          <div><strong>Listen with your browser</strong><p>Wait until this page is ready, then open your browser’s Reading Mode and choose Read aloud. Verse numbers are omitted so they are not spoken.</p></div>
          <button type="button" data-reading-tip-close aria-label="Dismiss listening tip">×</button>
        </div>
        <section class="bible-reading bible-audio-reading" aria-label="Continuous Bible reading">
          <div class="bible-reader__status is-loading" data-reading-status role="status">Loading Bible text…</div>
          <progress class="bible-audio-progress" data-reading-progress max="1" value="0" aria-label="Loading Bible chapters"></progress>
          <article class="bible-audio-article" data-reading-content></article>
          <div class="bible-audio-finish" data-reading-finish hidden>End of this book.</div>
        </section>
        <p class="bible-reader__footnote">Chapter headings are supplied with this Bible text.</p>
      </div>`;
    this.restoreHighlights();
  }

  public render(): HTMLElement { return this.container; }

  public mount(): void {
    this.attachTipEvents();
    this.load();
  }

  private attachTipEvents(): void {
    const tip = this.container.querySelector<HTMLElement>("[data-reading-tip]")!;
    const close = this.container.querySelector<HTMLButtonElement>("[data-reading-tip-close]")!;
    const open = this.container.querySelector<HTMLButtonElement>("[data-reading-tip-open]")!;
    const show = () => { tip.hidden = false; open.hidden = true; };
    const hide = () => { tip.hidden = true; open.hidden = false; };
    close.addEventListener("click", () => {
      try { localStorage.setItem(TIP_KEY, "true"); } catch { /* Dismissal still works without storage. */ }
      hide();
    });
    open.addEventListener("click", show);
    try { if (localStorage.getItem(TIP_KEY) === "true") hide(); else show(); }
    catch { show(); }
  }

  private async load(): Promise<void> {
    this.abortController?.abort();
    const controller = new AbortController();
    this.abortController = controller;
    const status = this.container.querySelector<HTMLElement>("[data-reading-status]")!;
    const progress = this.container.querySelector<HTMLProgressElement>("[data-reading-progress]")!;
    const content = this.container.querySelector<HTMLElement>("[data-reading-content]")!;
    const params = new URLSearchParams(window.location.search);
    const requestedOsis = params.get("book") ?? "Gen";
    const requestedChapter = Number(params.get("chapter") ?? 1);
    status.hidden = false;
    status.className = "bible-reader__status is-loading";
    status.textContent = "Loading Bible index…";
    progress.hidden = false;
    progress.value = 0;
    content.replaceChildren();
    this.container.querySelector<HTMLElement>("[data-reading-finish]")!.hidden = true;

    try {
      const root = `/bible/${this.versionCode}`;
      const manifestResponse = await fetch(`${root}/index.json`, { signal: controller.signal });
      if (!manifestResponse.ok) throw new Error(`Bible index returned ${manifestResponse.status}`);
      this.manifest = await manifestResponse.json() as BibleManifest;
      this.container.querySelector<HTMLElement>(".bible-audio-reading")?.setAttribute("aria-label", `Continuous ${this.manifest.name} reading`);
      this.book = this.manifest.books.find((candidate) => candidate.osis.toLowerCase() === requestedOsis.toLowerCase()) ?? this.manifest.books[0] ?? null;
      if (!this.book) throw new Error("No books are listed in this Bible index.");
      const maxChapter = Object.keys(this.book.chapters).length;
      this.startChapter = Number.isInteger(requestedChapter) && requestedChapter >= 1 && requestedChapter <= maxChapter ? requestedChapter : 1;
      this.container.querySelector<HTMLElement>("[data-reading-title]")!.textContent = `${this.book.name} ${this.startChapter} · ${this.manifest.translation.toUpperCase()}`;
      const back = this.container.querySelector<HTMLAnchorElement>("[data-reading-back]")!;
      back.href = `/bible/${this.versionCode}?book=${encodeURIComponent(this.book.osis)}&chapter=${this.startChapter}`;
      document.title = `${this.book.name} ${this.startChapter} onward · ${this.manifest.translation.toUpperCase()} | Shepherd Bible`;

      try {
        const headingResponse = await fetch(`${root}/headings.json`, { signal: controller.signal });
        if (headingResponse.ok) this.headings = await headingResponse.json() as BibleHeading[];
      } catch (error) {
        if (controller.signal.aborted) return;
        console.warn("Audio reading: section headings could not be loaded.", error);
      }
      await this.loadBookRemainder(root, controller, status, progress, content);
    } catch (error) {
      if (controller.signal.aborted) return;
      controller.abort();
      console.error("Audio reading: unable to prepare the continuous reading.", error);
      status.className = "bible-reader__status is-error";
      status.textContent = "This reading could not be loaded. Check your connection and try again.";
      const retry = document.createElement("button");
      retry.className = "bible-retry-button";
      retry.type = "button";
      retry.textContent = "Retry loading";
      retry.addEventListener("click", () => void this.load());
      status.appendChild(retry);
    }
  }

  private async loadBookRemainder(root: string, controller: AbortController, status: HTMLElement, progress: HTMLProgressElement, content: HTMLElement): Promise<void> {
    const book = this.book!;
    const buffers: ChapterBuffer[] = [];
    for (let chapter = this.startChapter; chapter <= Object.keys(book.chapters).length; chapter += 1) {
      const verseCount = book.chapters[String(chapter)];
      if (!verseCount) continue;
      buffers.push({ chapter, verseCount, verses: new Array<BibleVerse>(verseCount), received: 0 });
    }
    const jobs = buffers.flatMap((buffer, bufferIndex) => Array.from({ length: buffer.verseCount }, (_, index) => ({ bufferIndex, verse: index + 1 })));
    let cursor = 0;
    let completed = 0;
    let chapterToAppend = 0;
    const updateStatus = () => {
      progress.max = jobs.length;
      progress.value = completed;
      status.textContent = `Preparing ${book.name} ${this.startChapter}–${buffers[buffers.length - 1]?.chapter ?? this.startChapter} · ${completed.toLocaleString()} of ${jobs.length.toLocaleString()} verses`;
    };
    updateStatus();

    const worker = async () => {
      while (cursor < jobs.length) {
        if (controller.signal.aborted) return;
        const job = jobs[cursor++];
        const buffer = buffers[job.bufferIndex];
        const response = await fetch(`${root}/${encodeURIComponent(book.osis)}/${buffer.chapter}/${job.verse}.json`, { signal: controller.signal });
        if (!response.ok) throw new Error(`${book.osis} ${buffer.chapter}:${job.verse} returned ${response.status}`);
        buffer.verses[job.verse - 1] = await response.json() as BibleVerse;
        buffer.received += 1;
        completed += 1;
        if (completed === jobs.length || completed % 36 === 0) updateStatus();
        while (buffers[chapterToAppend] && buffers[chapterToAppend].received === buffers[chapterToAppend].verseCount) {
          this.renderChapter(buffers[chapterToAppend], content);
          chapterToAppend += 1;
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(WORKER_COUNT, jobs.length) }, worker));
    if (controller.signal.aborted) return;
    status.hidden = true;
    progress.hidden = true;
    this.container.querySelector<HTMLElement>("[data-reading-finish]")!.hidden = false;
  }

  private renderChapter(buffer: ChapterBuffer, content: HTMLElement): void {
    const book = this.book!;
    const section = document.createElement("section");
    section.className = "bible-audio-chapter";
    section.setAttribute("aria-labelledby", `audio-chapter-${book.osis}-${buffer.chapter}`);
    const title = document.createElement("h2");
    title.className = "bible-audio-chapter__title";
    title.id = `audio-chapter-${book.osis}-${buffer.chapter}`;
    title.textContent = `${book.name} ${buffer.chapter}`;
    section.appendChild(title);

    const verses = document.createElement("div");
    verses.className = "bible-verses bible-audio-verses";
    const chapterHeadings = this.headings.filter((heading) => heading.osis === book.osis && heading.chapter === buffer.chapter);
    let paragraph: HTMLParagraphElement | null = null;
    for (const verse of buffer.verses) {
      for (const heading of chapterHeadings.filter((candidate) => candidate.verse === verse.verse)) {
        paragraph = null;
        const headingElement = document.createElement("h3");
        headingElement.className = "bible-section-heading";
        headingElement.textContent = heading.title;
        verses.appendChild(headingElement);
      }
      if (!paragraph) {
        paragraph = document.createElement("p");
        paragraph.className = "bible-paragraph";
        verses.appendChild(paragraph);
      }
      const highlighted = this.highlights.has(verse.id);
      const token = document.createElement("span");
      token.className = `bible-verse${highlighted ? " is-highlighted" : ""}`;
      token.setAttribute("tabindex", "0");
      token.dataset.highlighted = String(highlighted);
      token.title = `${verse.reference} · ${highlighted ? "Saved highlight" : "Click to highlight"}`;
      this.appendText(token, verse);
      token.addEventListener("click", () => this.toggleHighlight(token, verse));
      token.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); this.toggleHighlight(token, verse); }
      });
      paragraph.append(token, document.createTextNode(" "));
    }
    section.appendChild(verses);
    content.appendChild(section);
  }

  private appendText(container: HTMLElement, verse: BibleVerse): void {
    let cursor = 0;
    const ranges = verse.is_nt ? [...(verse.red ?? [])].sort((a, b) => a.start_offset - b.start_offset) : [];
    for (const range of ranges) {
      const start = Math.max(cursor, Math.min(verse.text.length, range.start_offset));
      const end = Math.max(start, Math.min(verse.text.length, range.start_offset + range.length));
      if (start > cursor) container.appendChild(document.createTextNode(verse.text.slice(cursor, start)));
      if (end > start) {
        const red = document.createElement("span");
        red.className = "bible-verse__red-letter";
        red.textContent = verse.text.slice(start, end);
        container.appendChild(red);
      }
      cursor = end;
    }
    if (cursor < verse.text.length) container.appendChild(document.createTextNode(verse.text.slice(cursor)));
  }

  private toggleHighlight(token: HTMLElement, verse: BibleVerse): void {
    const selected = !this.highlights.has(verse.id);
    if (selected) this.highlights.add(verse.id); else this.highlights.delete(verse.id);
    token.classList.toggle("is-highlighted", selected);
    token.dataset.highlighted = String(selected);
    token.title = `${verse.reference} · ${selected ? "Saved highlight" : "Click to highlight"}`;
    try {
      const storageKey = this.versionCode === "kjv" ? HIGHLIGHT_KEY : `${HIGHLIGHT_KEY}-${this.versionCode}`;
      const saved = JSON.parse(localStorage.getItem(storageKey) ?? "[]") as SavedHighlight[];
      const highlights = Array.isArray(saved) ? saved.filter((item) => item?.id !== verse.id) : [];
      if (selected) highlights.push({ id: verse.id, osis: verse.osis, bookName: verse.human, chapter: verse.chapter, verse: verse.verse, text: verse.text });
      localStorage.setItem(storageKey, JSON.stringify(highlights));
    } catch (error) { console.warn("Audio reading: highlight could not be saved.", error); }
  }

  private restoreHighlights(): void {
    try {
      const storageKey = this.versionCode === "kjv" ? HIGHLIGHT_KEY : `${HIGHLIGHT_KEY}-${this.versionCode}`;
      const saved = JSON.parse(localStorage.getItem(storageKey) ?? "[]") as SavedHighlight[];
      if (Array.isArray(saved)) this.highlights = new Set(saved.map((item) => item?.id).filter((id): id is string => typeof id === "string"));
    } catch { this.highlights.clear(); }
  }
}
