import { VerseImageEditor } from "../editor/VerseImageEditor";

export class EffectsPanel {
  private editor: VerseImageEditor;
  private container: HTMLElement;

  constructor(editor: VerseImageEditor) {
    this.editor = editor;
    this.container = document.createElement("div");
    this.container.className = "editor-panel effects-panel";
    this.render();
  }

  public getElement(): HTMLElement {
    return this.container;
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="panel-section">
        <label class="panel-label">Text Drop Shadow</label>
        <div class="panel-row">
          <input type="color" id="shadow-color-picker" class="color-input-native" value="#000000" />
          <div class="panel-field">
            <label class="panel-label">Blur</label>
            <input type="range" id="shadow-blur-range" min="0" max="30" value="8" class="panel-slider" />
          </div>
        </div>
      </div>

      <div class="panel-section">
        <label class="panel-label">Text Stroke / Outline</label>
        <div class="panel-row">
          <input type="color" id="outline-color-picker" class="color-input-native" value="#000000" />
          <div class="panel-field">
            <label class="panel-label">Width</label>
            <input type="range" id="outline-width-range" min="0" max="10" value="0" class="panel-slider" />
          </div>
        </div>
      </div>

      <div class="panel-section">
        <label class="panel-label">Element Rotation (deg)</label>
        <input type="range" id="rotation-range" min="-180" max="180" value="0" class="panel-slider" />
      </div>

      <div class="panel-section">
        <label class="panel-label">Element Opacity</label>
        <input type="range" id="opacity-range" min="0" max="1" step="0.05" value="1" class="panel-slider" />
      </div>
    `;

    this.bindEvents();
  }

  private bindEvents(): void {
    const shadowColor = this.container.querySelector("#shadow-color-picker") as HTMLInputElement;
    const shadowBlur = this.container.querySelector("#shadow-blur-range") as HTMLInputElement;
    const outlineColor = this.container.querySelector("#outline-color-picker") as HTMLInputElement;
    const outlineWidth = this.container.querySelector("#outline-width-range") as HTMLInputElement;
    const rotationRange = this.container.querySelector("#rotation-range") as HTMLInputElement;
    const opacityRange = this.container.querySelector("#opacity-range") as HTMLInputElement;

    const getSelectedId = () => this.editor.getState().selected_element_id;

    shadowColor?.addEventListener("input", () => {
      const id = getSelectedId();
      if (id) this.editor.updateElement(id, { shadowColor: shadowColor.value });
    });

    shadowBlur?.addEventListener("input", () => {
      const id = getSelectedId();
      if (id) this.editor.updateElement(id, { shadowBlur: parseInt(shadowBlur.value, 10) || 0 });
    });

    outlineColor?.addEventListener("input", () => {
      const id = getSelectedId();
      if (id) this.editor.updateElement(id, { outlineColor: outlineColor.value });
    });

    outlineWidth?.addEventListener("input", () => {
      const id = getSelectedId();
      if (id) this.editor.updateElement(id, { outlineWidth: parseInt(outlineWidth.value, 10) || 0 });
    });

    rotationRange?.addEventListener("input", () => {
      const id = getSelectedId();
      if (id) this.editor.updateElement(id, { rotation: parseInt(rotationRange.value, 10) || 0 });
    });

    opacityRange?.addEventListener("input", () => {
      const id = getSelectedId();
      if (id) this.editor.updateElement(id, { opacity: parseFloat(opacityRange.value) || 1 });
    });
  }
}