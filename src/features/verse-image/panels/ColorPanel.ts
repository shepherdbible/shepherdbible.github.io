import type { VerseImageEditor } from "../editor/VerseImageEditor";
import type { TextElement } from "../editor/EditorState";

export class ColorPanel {
  private element: HTMLElement;
  private editor: VerseImageEditor;

  constructor(editor: VerseImageEditor) {
    this.editor = editor;
    this.element = document.createElement("div");
    this.element.className = "panel-content color-panel";

    this.render();

    this.editor.getEvents().on("element_selected", () => {
      this.updateControls();
    });

    this.editor.getEvents().on("state_changed", () => {
      this.updateControls();
    });
  }

  public getElement(): HTMLElement {
    return this.element;
  }

  private render(): void {
    const presetColors = [
      "#ffffff",
      "#000000",
      "#f43f5e",
      "#3b82f6",
      "#10b981",
      "#f59e0b",
      "#8b5cf6",
    ];

    this.element.innerHTML = `
      <div class="panel-section">
        <label class="panel-label" for="text-color-input">
          Text Color
        </label>

        <div class="color-picker-row flex items-center gap-2 mb-3">
          <input
            type="color"
            id="text-color-input"
            value="#332624"
            class="w-8 h-8 rounded cursor-pointer border-0"
          />

          <span
            id="color-hex-display"
            class="text-xs font-mono"
          >#332624</span>
        </div>

        <label class="panel-label">Presets</label>

        <div class="preset-colors flex flex-wrap gap-2">
          ${presetColors
            .map(
              (color) => `
                <button
                  type="button"
                  class="color-swatch w-7 h-7 rounded-full border transition-transform hover:scale-105"
                  data-color="${color}"
                  style="background-color: ${color};"
                  aria-label="Set text color to ${color}"
                  title="${color}"
                ></button>
              `,
            )
            .join("")}
        </div>
      </div>
    `;

    this.attachEvents();
    this.updateControls();
  }

  private attachEvents(): void {
    const colorInput = this.element.querySelector(
      "#text-color-input",
    ) as HTMLInputElement;

    const swatches =
      this.element.querySelectorAll<HTMLButtonElement>(".color-swatch");

    colorInput.addEventListener("input", () => {
      this.updateColor(colorInput.value);
    });

    swatches.forEach((swatch) => {
      swatch.addEventListener("click", () => {
        const color = swatch.dataset.color;

        if (!color) return;

        colorInput.value = color;
        this.updateColor(color);
      });
    });
  }

  private getSelectedTextElement(): TextElement | null {
    const state = this.editor.getState();
    const selectedId = state.selected_element_id;

    if (!selectedId) return null;

    const selected = state.elements.find((item) => item.id === selectedId);

    if (!selected || selected.type !== "text") return null;

    return selected as TextElement;
  }

  private updateColor(color: string): void {
    const state = this.editor.getState();
    const selectedId = state.selected_element_id;

    if (!selectedId) {
      console.warn("No selected element");
      return;
    }

    const selected = state.elements.find(
      (element) => element.id === selectedId,
    );

    if (!selected || selected.type !== "text") {
      console.warn("Selected element is not text", selected);
      return;
    }

    console.log("Updating text color:", selected.id, color);

    // Explicitly set gradient to undefined to remove it
    this.editor.updateElement(selected.id, {
      color: color,
      gradient: undefined,
    });

    console.log(
      "Updated element color:",
      this.editor
        .getState()
        .elements.find((element) => element.id === selectedId),
    );
  }
  private updateControls(): void {
    const colorInput = this.element.querySelector(
      "#text-color-input",
    ) as HTMLInputElement;

    const hexDisplay = this.element.querySelector(
      "#color-hex-display",
    ) as HTMLElement;

    const selected = this.getSelectedTextElement();

    const color = selected?.color || "#332624";

    if (/^#[0-9a-f]{6}$/i.test(color)) {
      colorInput.value = color;
      hexDisplay.textContent = color;
    } else {
      // HTML color inputs require a hexadecimal color.
      colorInput.value = "#332624";
      hexDisplay.textContent = color;
    }
  }
}
