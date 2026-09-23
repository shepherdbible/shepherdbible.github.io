import { VerseImageEditor } from "../editor/VerseImageEditor";

export class EffectsPanel {
  private editor: VerseImageEditor;
  private container: HTMLElement;

  constructor(editor: VerseImageEditor) {
    this.editor = editor;
    this.container = document.createElement("div");
    this.container.className = "editor-panel effects-panel";

    this.render();

    this.editor
      .getEvents()
      .on("element_selected", () => {
        this.syncFromSelectedElement();
      });

    this.editor
      .getEvents()
      .on("state_changed", () => {
        this.syncFromSelectedElement();
      });

    this.syncFromSelectedElement();
  }

  public getElement(): HTMLElement {
    return this.container;
  }

  private render(): void {
    this.container.innerHTML = `
      <!-- ====================================== -->
      <!-- TEXT DROP SHADOW -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Text Drop Shadow
        </label>

        <div class="panel-row">
          <input
            type="color"
            id="shadow-color-picker"
            class="color-input-native"
            value="#000000"
          />

          <div class="panel-field">
            <label class="panel-label">
              Blur
            </label>

            <input
              type="range"
              id="shadow-blur-range"
              min="0"
              max="30"
              step="1"
              value="8"
              class="panel-slider"
            />
          </div>
        </div>
      </div>


      <!-- ====================================== -->
      <!-- TEXT GLOW -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Text Glow
        </label>

        <div class="panel-row">
          <input
            type="color"
            id="glow-color-picker"
            class="color-input-native"
            value="#000000"
          />

          <div class="panel-field">
            <label class="panel-label">
              Blur
            </label>

            <input
              type="range"
              id="glow-blur-range"
              min="0"
              max="50"
              step="1"
              value="0"
              class="panel-slider"
            />
          </div>
        </div>

        <div class="panel-field">
          <label class="panel-label">
            Intensity
          </label>

          <input
            type="range"
            id="glow-intensity-range"
            min="0"
            max="1"
            step="0.05"
            value="0"
            class="panel-slider"
          />
        </div>
      </div>


      <!-- ====================================== -->
      <!-- TEXT OUTLINE -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Text Stroke / Outline
        </label>

        <div class="panel-row">
          <input
            type="color"
            id="outline-color-picker"
            class="color-input-native"
            value="#000000"
          />

          <div class="panel-field">
            <label class="panel-label">
              Width
            </label>

            <input
              type="range"
              id="outline-width-range"
              min="0"
              max="10"
              step="1"
              value="0"
              class="panel-slider"
            />
          </div>
        </div>
      </div>


      <!-- ====================================== -->
      <!-- ROTATION -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Element Rotation (deg)
        </label>

        <input
          type="range"
          id="rotation-range"
          min="-180"
          max="180"
          step="1"
          value="0"
          class="panel-slider"
        />
      </div>


      <!-- ====================================== -->
      <!-- OPACITY -->
      <!-- ====================================== -->

      <div class="panel-section">
        <label class="panel-label">
          Element Opacity
        </label>

        <input
          type="range"
          id="opacity-range"
          min="0"
          max="1"
          step="0.05"
          value="1"
          class="panel-slider"
        />
      </div>
    `;

    this.bindEvents();
  }

  private bindEvents(): void {
    const shadowColor =
      this.container.querySelector(
        "#shadow-color-picker"
      ) as HTMLInputElement;

    const shadowBlur =
      this.container.querySelector(
        "#shadow-blur-range"
      ) as HTMLInputElement;

    const glowColor =
      this.container.querySelector(
        "#glow-color-picker"
      ) as HTMLInputElement;

    const glowBlur =
      this.container.querySelector(
        "#glow-blur-range"
      ) as HTMLInputElement;

    const glowIntensity =
      this.container.querySelector(
        "#glow-intensity-range"
      ) as HTMLInputElement;

    const outlineColor =
      this.container.querySelector(
        "#outline-color-picker"
      ) as HTMLInputElement;

    const outlineWidth =
      this.container.querySelector(
        "#outline-width-range"
      ) as HTMLInputElement;

    const rotationRange =
      this.container.querySelector(
        "#rotation-range"
      ) as HTMLInputElement;

    const opacityRange =
      this.container.querySelector(
        "#opacity-range"
      ) as HTMLInputElement;

    const getSelectedId = () =>
      this.editor.getState()
        .selected_element_id;

    shadowColor?.addEventListener(
      "input",
      () => {
        const id = getSelectedId();

        if (!id) return;

        this.editor.updateElement(id, {
          shadowColor: shadowColor.value,
        });
      }
    );

    shadowBlur?.addEventListener(
      "input",
      () => {
        const id = getSelectedId();

        if (!id) return;

        this.editor.updateElement(id, {
          shadowBlur:
            parseInt(
              shadowBlur.value,
              10
            ) || 0,
        });
      }
    );

    // ==========================================
    // GLOW
    // ==========================================

    glowColor?.addEventListener(
      "input",
      () => {
        const id = getSelectedId();

        if (!id) return;

        this.editor.updateElement(id, {
          glowColor: glowColor.value,
        });
      }
    );

    glowBlur?.addEventListener(
      "input",
      () => {
        const id = getSelectedId();

        if (!id) return;

        this.editor.updateElement(id, {
          glowBlur:
            parseInt(
              glowBlur.value,
              10
            ) || 0,
        });
      }
    );

    glowIntensity?.addEventListener(
      "input",
      () => {
        const id = getSelectedId();

        if (!id) return;

        this.editor.updateElement(id, {
          glowIntensity:
            parseFloat(
              glowIntensity.value
            ) || 0,
        });
      }
    );

    // ==========================================
    // OUTLINE
    // ==========================================

    outlineColor?.addEventListener(
      "input",
      () => {
        const id = getSelectedId();

        if (!id) return;

        this.editor.updateElement(id, {
          outlineColor:
            outlineColor.value,
        });
      }
    );

    outlineWidth?.addEventListener(
      "input",
      () => {
        const id = getSelectedId();

        if (!id) return;

        this.editor.updateElement(id, {
          outlineWidth:
            parseInt(
              outlineWidth.value,
              10
            ) || 0,
        });
      }
    );

    // ==========================================
    // ROTATION
    // ==========================================

    rotationRange?.addEventListener(
      "input",
      () => {
        const id = getSelectedId();

        if (!id) return;

        this.editor.updateElement(id, {
          rotation:
            parseInt(
              rotationRange.value,
              10
            ) || 0,
        });
      }
    );

    // ==========================================
    // OPACITY
    // ==========================================

    opacityRange?.addEventListener(
      "input",
      () => {
        const id = getSelectedId();

        if (!id) return;

        this.editor.updateElement(id, {
          opacity:
            parseFloat(
              opacityRange.value
            ) || 1,
        });
      }
    );
  }

  private syncFromSelectedElement(): void {
    const state = this.editor.getState();

    const selectedId =
      state.selected_element_id;

    if (!selectedId) {
      return;
    }

    const element =
      state.elements.find(
        (e) => e.id === selectedId
      );

    if (!element) return;

    // Effects are text-specific.
    if (element.type === "text") {
      const textElement = element;

      this.setInputValue(
        "#shadow-color-picker",
        this.toHexColor(
          textElement.shadowColor,
          "#000000"
        )
      );

      this.setInputValue(
        "#shadow-blur-range",
        String(
          textElement.shadowBlur ?? 0
        )
      );

      this.setInputValue(
        "#glow-color-picker",
        this.toHexColor(
          textElement.glowColor,
          "#000000"
        )
      );

      this.setInputValue(
        "#glow-blur-range",
        String(
          textElement.glowBlur ?? 0
        )
      );

      this.setInputValue(
        "#glow-intensity-range",
        String(
          textElement.glowIntensity ?? 0
        )
      );

      this.setInputValue(
        "#outline-color-picker",
        this.toHexColor(
          textElement.outlineColor,
          "#000000"
        )
      );

      this.setInputValue(
        "#outline-width-range",
        String(
          textElement.outlineWidth ?? 0
        )
      );
    }

    this.setInputValue(
      "#rotation-range",
      String(element.rotation ?? 0)
    );

    this.setInputValue(
      "#opacity-range",
      String(element.opacity ?? 1)
    );
  }

  private setInputValue(
    selector: string,
    value: string
  ): void {
    const input =
      this.container.querySelector(
        selector
      ) as HTMLInputElement | null;

    if (input) {
      input.value = value;
    }
  }

  private toHexColor(
    color: string | undefined,
    fallback: string
  ): string {
    if (!color) {
      return fallback;
    }

    // Native color inputs require a hex value.
    if (
      /^#[0-9a-f]{6}$/i.test(color)
    ) {
      return color;
    }

    if (
      /^#[0-9a-f]{3}$/i.test(color)
    ) {
      const value = color.substring(1);

      return `#${value[0]}${value[0]}${value[1]}${value[1]}${value[2]}${value[2]}`;
    }

    // Convert rgba()/rgb() to hex.
    const match =
      color.match(
        /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/
      );

    if (match) {
      const r = Number(match[1]);
      const g = Number(match[2]);
      const b = Number(match[3]);

      return (
        "#" +
        [r, g, b]
          .map((value) =>
            value
              .toString(16)
              .padStart(2, "0")
          )
          .join("")
      );
    }

    return fallback;
  }
}