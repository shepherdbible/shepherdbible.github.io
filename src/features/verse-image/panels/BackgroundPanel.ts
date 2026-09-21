import { VerseImageEditor } from "../editor/VerseImageEditor";

export class BackgroundPanel {
  private editor: VerseImageEditor;
  private container: HTMLElement;

  constructor(editor: VerseImageEditor) {
    this.editor = editor;
    this.container = document.createElement("div");
    this.container.className = "editor-panel background-panel";
    this.render();
  }

  public getElement(): HTMLElement {
    return this.container;
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="panel-section">
        <label class="panel-label">Background Mode</label>
        <div class="btn-group">
          <button id="bg-mode-gradient" class="panel-btn">Gradient</button>
          <button id="bg-mode-solid" class="panel-btn">Solid</button>
          <button id="bg-mode-image" class="panel-btn">Image</button>
        </div>
      </div>

      <div id="bg-gradient-controls" class="panel-section">
        <label class="panel-label">Gradient Color 1</label>
        <input type="color" id="bg-grad-1" class="color-input-native" value="#3D1E18" />
        
        <label class="panel-label" style="margin-top:10px;">Gradient Color 2</label>
        <input type="color" id="bg-grad-2" class="color-input-native" value="#1A0B08" />
      </div>

      <div id="bg-image-controls" class="panel-section" style="display:none;">
        <label class="panel-label">Upload Custom Image</label>
        <input type="file" id="bg-file-input" accept="image/*" class="panel-input-file" />
        
        <label class="panel-label" style="margin-top:10px;">Blur Effect (px)</label>
        <input type="range" id="bg-blur-slider" min="0" max="20" value="0" class="panel-slider" />
      </div>

      <div class="panel-section">
        <label class="panel-label">Overlay Color & Opacity</label>
        <div class="panel-row">
          <input type="color" id="bg-overlay-color" class="color-input-native" value="#000000" />
          <input type="range" id="bg-overlay-opacity" min="0" max="1" step="0.05" value="0.2" class="panel-slider" />
        </div>
      </div>
    `;

    this.bindEvents();
  }

  private bindEvents(): void {
    const bg1 = this.container.querySelector("#bg-grad-1") as HTMLInputElement;
    const bg2 = this.container.querySelector("#bg-grad-2") as HTMLInputElement;
    const fileInput = this.container.querySelector("#bg-file-input") as HTMLInputElement;
    const blurSlider = this.container.querySelector("#bg-blur-slider") as HTMLInputElement;
    const overlayColor = this.container.querySelector("#bg-overlay-color") as HTMLInputElement;
    const overlayOpacity = this.container.querySelector("#bg-overlay-opacity") as HTMLInputElement;

    const gradControls = this.container.querySelector("#bg-gradient-controls") as HTMLElement;
    const imgControls = this.container.querySelector("#bg-image-controls") as HTMLElement;

    this.container.querySelector("#bg-mode-gradient")?.addEventListener("click", () => {
      gradControls.style.display = "block";
      imgControls.style.display = "none";
      const bg = this.editor.getState().background;
      bg.type = "gradient";
      this.editor.updateBackground(bg);
    });

    this.container.querySelector("#bg-mode-solid")?.addEventListener("click", () => {
      gradControls.style.display = "none";
      imgControls.style.display = "none";
      const bg = this.editor.getState().background;
      bg.type = "solid";
      this.editor.updateBackground(bg);
    });

    this.container.querySelector("#bg-mode-image")?.addEventListener("click", () => {
      gradControls.style.display = "none";
      imgControls.style.display = "block";
    });

    const updateGrad = () => {
      const bg = this.editor.getState().background;
      bg.type = "gradient";
      bg.gradient.colors = [bg1.value, bg2.value];
      this.editor.updateBackground(bg);
    };

    bg1?.addEventListener("input", updateGrad);
    bg2?.addEventListener("input", updateGrad);

    fileInput?.addEventListener("change", (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        const bg = this.editor.getState().background;
        bg.type = "image";
        bg.imageUrl = objectUrl;
        this.editor.updateBackground(bg);
      }
    });

    blurSlider?.addEventListener("input", () => {
      const bg = this.editor.getState().background;
      bg.blur = parseFloat(blurSlider.value) || 0;
      this.editor.updateBackground(bg);
    });

    overlayColor?.addEventListener("input", () => {
      const bg = this.editor.getState().background;
      bg.overlayColor = overlayColor.value;
      this.editor.updateBackground(bg);
    });

    overlayOpacity?.addEventListener("input", () => {
      const bg = this.editor.getState().background;
      bg.overlayOpacity = parseFloat(overlayOpacity.value) || 0;
      this.editor.updateBackground(bg);
    });
  }
}