import { VerseImageEditor } from "../editor/VerseImageEditor";
import type { TextElement } from "../editor/EditorState";

export class TextPanel {
  private editor: VerseImageEditor;
  private container: HTMLElement;

  constructor(editor: VerseImageEditor) {
    this.editor = editor;
    this.container = document.createElement("div");
    this.container.className = "editor-panel text-panel";
    this.render();

    this.editor.getEvents().on("element_selected", () => this.updateControls());
    this.editor.getEvents().on("state_changed", () => this.updateControls());
  }

  public getElement(): HTMLElement {
    return this.container;
  }

  private render(): void {
    this.container.innerHTML = /* html */ `
      <div class="panel-section">
        <label class="panel-label" for="input-verse-text">Verse Content</label>
        <textarea
          id="input-verse-text"
          class="panel-textarea"
          rows="4"
          placeholder="Enter verse passage..."
        ></textarea>
      </div>

      <div class="panel-section">
        <label class="panel-label" for="input-verse-ref">Reference</label>
        <input
          id="input-verse-ref"
          type="text"
          class="panel-input"
          placeholder="e.g. JOHN 3:16"
        />
      </div>

      <div class="panel-row">
        <div class="panel-field">
          <label class="panel-label">Size (px)</label>

          <div class="font-size-control">
            
            <input
              id="input-font-size"
              type="number"
              class="panel-input font-size-input"
              min="12"
              max="150"
              step="2"
            />

           
          </div>
        </div>

        <div class="panel-field">
          <label class="panel-label" for="input-line-height">Line Height</label>
          <input
            id="input-line-height"
            type="number"
            class="panel-input"
            min="0.8"
            max="2.5"
            step="0.1"
          />
        </div>
      </div>

      <div class="panel-row">
        <div class="panel-field">
          <label class="panel-label" for="input-letter-spacing">
            Letter Spacing
          </label>

          <input
            id="input-letter-spacing"
            type="number"
            class="panel-input"
            min="-2"
            max="20"
            step="1"
          />
        </div>

        <div class="panel-field">
          <label class="panel-label">Alignment</label>

          <div class="btn-group">
            <button
              id="btn-align-left"
              class="btn-icon"
              type="button"
              aria-label="Align Left"
            >
              ⯇
            </button>

            <button
              id="btn-align-center"
              class="btn-icon"
              type="button"
              aria-label="Align Center"
            >
              ☰
            </button>

            <button
              id="btn-align-right"
              class="btn-icon"
              type="button"
              aria-label="Align Right"
            >
              ⯈
            </button>
          </div>
        </div>
      </div>

      <div class="panel-row">
        <button id="btn-toggle-bold" class="panel-btn" type="button">
          Bold
        </button>

        <button id="btn-toggle-italic" class="panel-btn" type="button">
          Italic
        </button>
      </div>

      <div class="panel-section">
        <button
          id="btn-add-text"
          class="panel-btn panel-btn-primary"
          type="button"
        >
          + Add New Text Element
        </button>
      </div>
    `;

    this.bindEvents();
    this.updateControls();
  }

  private bindEvents(): void {
    const verseInput = this.container.querySelector(
      "#input-verse-text",
    ) as HTMLTextAreaElement;

    const refInput = this.container.querySelector(
      "#input-verse-ref",
    ) as HTMLInputElement;

    const fontSizeInput = this.container.querySelector(
      "#input-font-size",
    ) as HTMLInputElement;

    const lineHeightInput = this.container.querySelector(
      "#input-line-height",
    ) as HTMLInputElement;

    const letterSpacingInput = this.container.querySelector(
      "#input-letter-spacing",
    ) as HTMLInputElement;

    const fontSizeMinus = this.container.querySelector("#btn-font-size-minus");

    const fontSizePlus = this.container.querySelector("#btn-font-size-plus");

    verseInput?.addEventListener("input", () => {
      const selected = this.getSelectedTextElement();

      if (selected) {
        this.editor.updateElement(selected.id, {
          text: verseInput.value,
        });
      }
    });

    refInput?.addEventListener("input", () => {
      const refElem = this.editor
        .getState()
        .elements.find((e) => (e as TextElement).isReference);

      if (refElem) {
        this.editor.updateElement(refElem.id, {
          text: refInput.value,
        });
      }
    });

    // Direct font-size input
    fontSizeInput?.addEventListener("change", () => {
      const selected = this.getSelectedTextElement();

      if (!selected) return;

      const value = parseFloat(fontSizeInput.value);

      if (!Number.isFinite(value)) return;

      const fontSize = Math.min(Math.max(value, 12), 150);

      this.editor.updateTextFontSize(selected.id, fontSize);
    });

    // Decrease font size
    fontSizeMinus?.addEventListener("click", () => {
      const selected = this.getSelectedTextElement();

      if (!selected) return;

      const step = this.getFontSizeStep();

      this.editor.decreaseTextSize(selected.id, step);
    });

    // Increase font size
    fontSizePlus?.addEventListener("click", () => {
      const selected = this.getSelectedTextElement();

      if (!selected) return;

      const step = this.getFontSizeStep();

      this.editor.increaseTextSize(selected.id, step);
    });

    lineHeightInput?.addEventListener("change", () => {
      const selected = this.getSelectedTextElement();

      if (selected) {
        this.editor.updateElement(selected.id, {
          lineHeight: parseFloat(lineHeightInput.value) || 1.3,
        });
      }
    });

    letterSpacingInput?.addEventListener("change", () => {
      const selected = this.getSelectedTextElement();

      if (selected) {
        this.editor.updateElement(selected.id, {
          letterSpacing: parseInt(letterSpacingInput.value, 10) || 0,
        });
      }
    });

    this.container
      .querySelector("#btn-align-left")
      ?.addEventListener("click", () => {
        const selected = this.getSelectedTextElement();

        if (selected) {
          this.editor.updateElement(selected.id, {
            textAlign: "left",
          });
        }
      });

    this.container
      .querySelector("#btn-align-center")
      ?.addEventListener("click", () => {
        const selected = this.getSelectedTextElement();

        if (selected) {
          this.editor.updateElement(selected.id, {
            textAlign: "center",
          });
        }
      });

    this.container
      .querySelector("#btn-align-right")
      ?.addEventListener("click", () => {
        const selected = this.getSelectedTextElement();

        if (selected) {
          this.editor.updateElement(selected.id, {
            textAlign: "right",
          });
        }
      });

    this.container
      .querySelector("#btn-toggle-bold")
      ?.addEventListener("click", () => {
        const selected = this.getSelectedTextElement();

        if (selected) {
          const isBold =
            selected.fontWeight === "700" || selected.fontWeight === "bold";

          this.editor.updateElement(selected.id, {
            fontWeight: isBold ? "400" : "700",
          });
        }
      });

    this.container
      .querySelector("#btn-toggle-italic")
      ?.addEventListener("click", () => {
        const selected = this.getSelectedTextElement();

        if (selected) {
          const isItalic = selected.fontStyle === "italic";

          this.editor.updateElement(selected.id, {
            fontStyle: isItalic ? "normal" : "italic",
          });
        }
      });

    this.container
      .querySelector("#btn-add-text")
      ?.addEventListener("click", () => {
        this.editor.addTextElement("New Scripture Line");
      });
  }

  private getFontSizeStep(): number {
    const width = this.editor.getState().width;

    if (width >= 3000) return 8;
    if (width >= 2000) return 4;

    return 2;
  }

  private getSelectedTextElement(): TextElement | null {
    const state = this.editor.getState();

    if (!state.selected_element_id) return null;

    const elem = state.elements.find((e) => e.id === state.selected_element_id);

    return elem && elem.type === "text" ? (elem as TextElement) : null;
  }

  private updateControls(): void {
    const selected = this.getSelectedTextElement();

    const verseInput = this.container.querySelector(
      "#input-verse-text",
    ) as HTMLTextAreaElement;

    const refInput = this.container.querySelector(
      "#input-verse-ref",
    ) as HTMLInputElement;

    const fontSizeInput = this.container.querySelector(
      "#input-font-size",
    ) as HTMLInputElement;

    const lineHeightInput = this.container.querySelector(
      "#input-line-height",
    ) as HTMLInputElement;

    const letterSpacingInput = this.container.querySelector(
      "#input-letter-spacing",
    ) as HTMLInputElement;

    const minusButton = this.container.querySelector(
      "#btn-font-size-minus",
    ) as HTMLButtonElement;

    const plusButton = this.container.querySelector(
      "#btn-font-size-plus",
    ) as HTMLButtonElement;

    const refElem = this.editor
      .getState()
      .elements.find((e) => (e as TextElement).isReference) as
      | TextElement
      | undefined;

    if (refElem && refInput) {
      refInput.value = refElem.text;
    }

    if (selected) {
      if (verseInput) {
        verseInput.value = selected.text;
      }

      if (fontSizeInput) {
        fontSizeInput.value = selected.fontSize.toString();
      }

      if (lineHeightInput) {
        lineHeightInput.value = selected.lineHeight.toString();
      }

      if (letterSpacingInput) {
        letterSpacingInput.value = selected.letterSpacing.toString();
      }

      if (minusButton) {
        minusButton.disabled = selected.fontSize <= 12;
      }

      if (plusButton) {
        plusButton.disabled = selected.fontSize >= 150;
      }
    } else {
      if (fontSizeInput) fontSizeInput.value = "";
      if (lineHeightInput) lineHeightInput.value = "";
      if (letterSpacingInput) letterSpacingInput.value = "";

      if (minusButton) minusButton.disabled = true;
      if (plusButton) plusButton.disabled = true;
    }
  }
}
