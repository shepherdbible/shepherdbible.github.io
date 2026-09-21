import type { VerseImageEditor } from "../editor/VerseImageEditor";

export class ColorPanel {
  private element: HTMLElement;
  private editor: VerseImageEditor;

  constructor(editor: VerseImageEditor) {
    this.editor = editor;
    this.element = document.createElement("div");
    this.element.className = "panel-content color-panel";
    this.render();
  }

  private render(): void {
    const presetColors = [
      "#ffffff", "#000000", "#f43f5e", 
      "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"
    ];

    this.element.innerHTML = `
      <div class="panel-section">
        <label class="panel-label">Text Color</label>
        <div class="color-picker-row flex items-center gap-2 mb-3">
          <input type="color" id="text-color-input" value="#ffffff" class="w-8 h-8 rounded cursor-pointer border-0" />
          <span id="color-hex-display" class="text-xs font-mono text-slate-300">#ffffff</span>
        </div>
        
        <label class="panel-label">Presets</label>
        <div class="preset-colors flex flex-wrap gap-2">
          ${presetColors
            .map(
              (color) =>
                `<button type="button" class="color-swatch w-7 h-7 rounded-full border border-slate-600 transition-transform hover:scale-105" data-color="${color}" style="background-color: ${color};"></button>`
            )
            .join("")}
        </div>
      </div>
    `;

    this.attachEvents();
  }

  private attachEvents(): void {
    const colorInput = this.element.querySelector("#text-color-input") as HTMLInputElement;
    const hexDisplay = this.element.querySelector("#color-hex-display");

    colorInput?.addEventListener("input", (e) => {
      const color = (e.target as HTMLInputElement).value;
      if (hexDisplay) hexDisplay.textContent = color;
      this.updateColor(color);
    });

    const swatches = this.element.querySelectorAll(".color-swatch");
    swatches.forEach((swatch) => {
      swatch.addEventListener("click", () => {
        const color = swatch.getAttribute("data-color");
        if (color) {
          if (colorInput) colorInput.value = color;
          if (hexDisplay) hexDisplay.textContent = color;
          this.updateColor(color);
        }
      });
    });
  }

  private updateColor(color: string): void {
    // Call your editor's color update method here
    if (typeof (this.editor as any).setTextColor === "function") {
      (this.editor as any).setTextColor(color);
    }
  }

  public getElement(): HTMLElement {
    return this.element;
  }
}