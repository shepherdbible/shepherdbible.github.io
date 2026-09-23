import "../features/verse-image/VerseImageEditor.css";


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

  public render(): HTMLElement  {
    this.container.innerHTML = /* html */`
      <header class="editor-header">
        <div class="editor-title">
          
          <p>Design and share God's Word beautifully.</p>
        </div>
        <div class="editor-actions">
          <button id="btn-undo" class="panel-btn" title="Undo">↩ Undo</button>
          <button id="btn-redo" class="panel-btn" title="Redo">↪ Redo</button>
          <button id="btn-export-png" class="panel-btn panel-btn-primary">💾 Save PNG</button>
        </div>
      </header>
      
      <main class="editor-body">
        <aside class="editor-sidebar">
          <nav class="tab-nav" id="editor-tabs">
            <button class="tab-btn active" data-tab="text">Text</button>
            <button class="tab-btn" data-tab="fonts">Fonts</button>
            <button class="tab-btn" data-tab="color">Color</button>
            <button class="tab-btn" data-tab="bg">Background</button>
            <button class="tab-btn" data-tab="layout">Layout</button>
            <button class="tab-btn" data-tab="effects">Effects</button>
            <button class="tab-btn" data-tab="templates">Templates</button>
          </nav>
          <div class="panel-container" id="active-panel-slot"></div>
        </aside>

        <section class="editor-stage">
          <div class="canvas-wrapper">
            <canvas id="verse-editor-canvas"></canvas>
          </div>
        </section>
      </main>
    `;

    // Initialize Editor Controller after DOM elements exist
    setTimeout(() => this.initEditor(), 0);

    return this.container;
  }

  private initEditor(): void {
    const canvas = this.container.querySelector("#verse-editor-canvas") as HTMLCanvasElement;
    if (!canvas) return;

    this.editor = new VerseImageEditor(canvas);

    // Instantiate Panels
    const panels: Record<string, HTMLElement> = {
      text: new TextPanel(this.editor).getElement(),
      fonts: new FontPanel(this.editor).getElement(),
      color: new ColorPanel(this.editor).getElement(),
      bg: new BackgroundPanel(this.editor).getElement(),
      layout: new LayoutPanel(this.editor).getElement(),
      effects: new EffectsPanel(this.editor).getElement(),
      templates: new TemplatePanel(this.editor).getElement()
    };

    const slot = this.container.querySelector("#active-panel-slot")!;
    slot.appendChild(panels.text);

    // Setup Tab Switcher
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

    // Top Header Button Actions
    const undoBtn = this.container.querySelector("#btn-undo") as HTMLButtonElement;
    const redoBtn = this.container.querySelector("#btn-redo") as HTMLButtonElement;
    const exportBtn = this.container.querySelector("#btn-export-png") as HTMLButtonElement;

    undoBtn?.addEventListener("click", () => this.editor.undo());
    redoBtn?.addEventListener("click", () => this.editor.redo());
    exportBtn?.addEventListener("click", () => this.editor.exportImage({ format: "png" }));

    // Listen for history changes to update undo/redo button states
    this.editor.getEvents().on("history_changed", ({ canUndo, canRedo }) => {
      if (undoBtn) undoBtn.disabled = !canUndo;
      if (redoBtn) redoBtn.disabled = !canRedo;
    });
  }
}