import { VerseImageEditor } from "../editor/VerseImageEditor";
import { TEMPLATES } from "../templates/templates";

export class TemplatePanel {
  private editor: VerseImageEditor;
  private container: HTMLElement;

  constructor(editor: VerseImageEditor) {
    this.editor = editor;
    this.container = document.createElement("div");
    this.container.className = "editor-panel template-panel";
    this.render();
  }

  public getElement(): HTMLElement {
    return this.container;
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="panel-section">
        <label class="panel-label">Built-in Themes</label>
        <div class="template-grid" id="template-cards-grid"></div>
      </div>
    `;

    const grid = this.container.querySelector("#template-cards-grid")!;

    TEMPLATES.forEach((tpl) => {
      const card = document.createElement("div");
      card.className = "template-card";
      card.innerHTML = `
        <div class="template-title">${tpl.name}</div>
        <div class="template-desc">${tpl.description}</div>
      `;

      card.addEventListener("click", () => {
        this.editor.applyTemplate(tpl.id);
      });

      grid.appendChild(card);
    });
  }
}