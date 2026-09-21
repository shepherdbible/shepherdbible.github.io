import { VerseImageEditor } from "../editor/VerseImageEditor";
import { FONTS } from "../fonts/fonts";
import { fontLoader } from "../fonts/fontLoader";

export class FontPanel {
  private editor: VerseImageEditor;
  private container: HTMLElement;

  constructor(editor: VerseImageEditor) {
    this.editor = editor;
    this.container = document.createElement("div");
    this.container.className = "editor-panel font-panel";
    this.render();
  }

  public getElement(): HTMLElement {
    return this.container;
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="panel-section">
        <label class="panel-label">Typography Style</label>
        <div class="font-list" id="font-list-container"></div>
      </div>
    `;

    const listContainer = this.container.querySelector("#font-list-container")!;

    FONTS.forEach((font) => {
      const item = document.createElement("button");
      item.className = "font-item-card";
      item.innerHTML = `
        <span class="font-name" style="font-family: '${font.family}', serif">${font.family}</span>
        <span class="font-category">${font.category}</span>
      `;

      item.addEventListener("click", async () => {
        await fontLoader.loadFont(font.family);
        const state = this.editor.getState();
        if (state.selected_element_id) {
          this.editor.updateElement(state.selected_element_id, { fontFamily: font.family });
        }
      });

      listContainer.appendChild(item);
    });
  }
}