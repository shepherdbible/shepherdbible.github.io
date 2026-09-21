import { VerseImageEditor } from "../editor/VerseImageEditor";

export class LayoutPanel {
  private editor: VerseImageEditor;
  private container: HTMLElement;

  constructor(editor: VerseImageEditor) {
    this.editor = editor;
    this.container = document.createElement("div");
    this.container.className = "editor-panel layout-panel";
    this.render();
  }

  public getElement(): HTMLElement {
    return this.container;
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="panel-section">
        <label class="panel-label">Dimension Presets</label>
        <div class="preset-grid">
          <button class="panel-btn" data-preset="square">Square (1080x1080)</button>
          <button class="panel-btn" data-preset="portrait">Portrait (1080x1350)</button>
          <button class="panel-btn" data-preset="story">Story (1080x1920)</button>
          <button class="panel-btn" data-preset="landscape">Landscape (1200x630)</button>
        </div>
      </div>

      <div class="panel-section">
        <label class="panel-label">Custom Canvas Size</label>
        <div class="panel-row">
          <div class="panel-field">
            <label class="panel-label">Width</label>
            <input type="number" id="canvas-width-input" class="panel-input" value="1080" step="10" />
          </div>
          <div class="panel-field">
            <label class="panel-label">Height</label>
            <input type="number" id="canvas-height-input" class="panel-input" value="1080" step="10" />
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  private bindEvents(): void {
    const widthInput = this.container.querySelector("#canvas-width-input") as HTMLInputElement;
    const heightInput = this.container.querySelector("#canvas-height-input") as HTMLInputElement;

    this.container.querySelectorAll("[data-preset]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const preset = btn.getAttribute("data-preset");
        let w = 1080;
        let h = 1080;

        if (preset === "portrait") {
          w = 1080;
          h = 1350;
        } else if (preset === "story") {
          w = 1080;
          h = 1920;
        } else if (preset === "landscape") {
          w = 1200;
          h = 630;
        }

        widthInput.value = w.toString();
        heightInput.value = h.toString();
        this.editor.updateCanvasDimensions(w, h);
      });
    });

    const updateCustom = () => {
      const w = parseInt(widthInput.value, 10) || 1080;
      const h = parseInt(heightInput.value, 10) || 1080;
      this.editor.updateCanvasDimensions(w, h);
    };

    widthInput?.addEventListener("change", updateCustom);
    heightInput?.addEventListener("change", updateCustom);
  }
}