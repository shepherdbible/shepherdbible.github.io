import "../features/verse-image/VerseImageEditor.css";
import "../features/verse-image/VerseImageEditor.mobile.css";

import { VerseImageEditor } from "../features/verse-image/editor/VerseImageEditor";
import { TextPanel } from "../features/verse-image/panels/TextPanel";
import { FontPanel } from "../features/verse-image/panels/FontPanel";
import { ColorPanel } from "../features/verse-image/panels/ColorPanel";
import { BackgroundPanel } from "../features/verse-image/panels/BackgroundPanel";
import { LayoutPanel } from "../features/verse-image/panels/LayoutPanel";
import { EffectsPanel } from "../features/verse-image/panels/EffectsPanel";
import { TemplatePanel } from "../features/verse-image/panels/TemplatePanel";

export class VerseImagePage {
  private container: HTMLElement;
  private editor!: VerseImageEditor;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "verse-image-editor-page";
  }

  public render(): HTMLElement {
    this.container.innerHTML = /* html */ `
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
    `;

    setTimeout(() => this.initEditor(), 0);

    return this.container;
  }

  private initEditor(): void {
    const canvas = this.container.querySelector(
      "#verse-editor-canvas",
    ) as HTMLCanvasElement;

    if (!canvas) return;

    this.editor = new VerseImageEditor(canvas);

    /*
     * Create panels.
     *
     * These are still the same panels used by
     * the desktop editor.
     */
    const panels: Record<string, HTMLElement> = {
      text: new TextPanel(this.editor).getElement(),
      fonts: new FontPanel(this.editor).getElement(),
      color: new ColorPanel(this.editor).getElement(),
      bg: new BackgroundPanel(this.editor).getElement(),
      layout: new LayoutPanel(this.editor).getElement(),
      effects: new EffectsPanel(this.editor).getElement(),
      templates: new TemplatePanel(this.editor).getElement(),
    };

    /*
     * ---------------------------------------------------------
     * DESKTOP TAB SWITCHER
     * ---------------------------------------------------------
     *
     * This is kept exactly as the original behavior.
     */
    const slot = this.container.querySelector(
      "#active-panel-slot",
    ) as HTMLElement;

    slot.appendChild(panels.text);

    const tabs = this.container.querySelectorAll(".tab-btn");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));

        tab.classList.add("active");

        const target = tab.getAttribute("data-tab") || "text";

        slot.innerHTML = "";

        if (panels[target]) {
          slot.appendChild(panels[target]);
        }
      });
    });

    /*
     * ---------------------------------------------------------
     * MOBILE TOOLBAR
     * ---------------------------------------------------------
     */

    const mobileToolbar = this.container.querySelector(
      "#mobile-editor-toolbar",
    ) as HTMLElement;

    const mobileSheet = this.container.querySelector(
      "#mobile-editor-sheet",
    ) as HTMLElement;

    const mobileSlot = this.container.querySelector(
      "#mobile-panel-slot",
    ) as HTMLElement;

    const mobileTitle = this.container.querySelector(
      "#mobile-sheet-title",
    ) as HTMLElement;

    const mobileClose = this.container.querySelector(
      "#mobile-sheet-close",
    ) as HTMLButtonElement;

    const panelTitles: Record<string, string> = {
      text: "Text",
      fonts: "Fonts",
      color: "Color",
      bg: "Background",
      layout: "Layout",
      effects: "Effects",
      templates: "Templates",
    };

    /*
     * IMPORTANT:
     *
     * We do NOT move the desktop panel here.
     *
     * Instead, create a separate mobile instance
     * of each panel.
     */
    const mobilePanels: Record<string, HTMLElement> = {
      text: new TextPanel(this.editor).getElement(),
      fonts: new FontPanel(this.editor).getElement(),
      color: new ColorPanel(this.editor).getElement(),
      bg: new BackgroundPanel(this.editor).getElement(),
      layout: new LayoutPanel(this.editor).getElement(),
      effects: new EffectsPanel(this.editor).getElement(),
      templates: new TemplatePanel(this.editor).getElement(),
    };

    const openMobilePanel = (target: string): void => {
      const panel = mobilePanels[target];

      if (!panel) return;

      mobileTitle.textContent = panelTitles[target] || target;

      mobileSlot.innerHTML = "";
      mobileSlot.appendChild(panel);

      mobileSheet.classList.add("open");
    };

    const closeMobilePanel = (): void => {
      mobileSheet.classList.remove("open");
    };
    

    const mobileButtons = mobileToolbar.querySelectorAll(".mobile-tool-btn");

    mobileButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-tab") || "text";

        const isAlreadyActive =
          button.classList.contains("active") &&
          mobileSheet.classList.contains("open");

        mobileButtons.forEach((b) => b.classList.remove("active"));

        button.classList.add("active");

        if (isAlreadyActive) {
          closeMobilePanel();
          return;
        }

        openMobilePanel(target);
      });
    });

    mobileClose?.addEventListener("click", closeMobilePanel);

    /*
     * Open Text panel by default on mobile.
     */
    openMobilePanel("text");

    /*
     * ---------------------------------------------------------
     * HEADER BUTTONS
     * ---------------------------------------------------------
     */

    const undoBtn = this.container.querySelector(
      "#btn-undo",
    ) as HTMLButtonElement;

    const redoBtn = this.container.querySelector(
      "#btn-redo",
    ) as HTMLButtonElement;

    const exportBtn = this.container.querySelector(
      "#btn-export-png",
    ) as HTMLButtonElement;

    undoBtn?.addEventListener("click", () => this.editor.undo());

    redoBtn?.addEventListener("click", () => this.editor.redo());

    exportBtn?.addEventListener("click", () =>
      this.editor.exportImage({
        format: "png",
      }),
    );

    /*
     * ---------------------------------------------------------
     * HISTORY
     * ---------------------------------------------------------
     */

    this.editor.getEvents().on("history_changed", ({ canUndo, canRedo }) => {
      if (undoBtn) {
        undoBtn.disabled = !canUndo;
      }

      if (redoBtn) {
        redoBtn.disabled = !canRedo;
      }
    });
  }
}
