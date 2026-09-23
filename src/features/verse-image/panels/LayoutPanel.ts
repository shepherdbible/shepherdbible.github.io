import { VerseImageEditor } from "../editor/VerseImageEditor";

interface LayoutPreset {
  label: string;
  description: string;
  width: number;
  height: number;
}

export class LayoutPanel {
  private editor: VerseImageEditor;
  private container: HTMLElement;

  private readonly presets: Record<string, LayoutPreset> = {
    // ==============================
    // Social Media
    // ==============================

    square: {
      label: "Square",
      description: "1080 × 1080",
      width: 1080,
      height: 1080,
    },

    portrait: {
      label: "Portrait",
      description: "1080 × 1350",
      width: 1080,
      height: 1350,
    },

    story: {
      label: "Story",
      description: "1080 × 1920",
      width: 1080,
      height: 1920,
    },

    landscape: {
      label: "Landscape",
      description: "1200 × 630",
      width: 1200,
      height: 630,
    },

    // ==============================
    // Phone
    // ==============================

    phone: {
      label: "Phone",
      description: "1170 × 2532",
      width: 1170,
      height: 2532,
    },

    "phone-landscape": {
      label: "Phone Landscape",
      description: "2532 × 1170",
      width: 2532,
      height: 1170,
    },

    // ==============================
    // Tablet
    // ==============================

    "tablet-portrait": {
      label: "Tablet Portrait",
      description: "1536 × 2048",
      width: 1536,
      height: 2048,
    },

    "tablet-landscape": {
      label: "Tablet Landscape",
      description: "2048 × 1536",
      width: 2048,
      height: 1536,
    },

    // ==============================
    // Desktop
    // ==============================

    "desktop-hd": {
      label: "Desktop HD",
      description: "1920 × 1080",
      width: 1920,
      height: 1080,
    },

    "desktop-qhd": {
      label: "Desktop QHD",
      description: "2560 × 1440",
      width: 2560,
      height: 1440,
    },

    "desktop-4k": {
      label: "Desktop 4K",
      description: "3840 × 2160",
      width: 3840,
      height: 2160,
    },

    // ==============================
    // Presentation
    // ==============================

    presentation: {
      label: "Presentation",
      description: "1920 × 1080",
      width: 1920,
      height: 1080,
    },

    // ==============================
    // Print
    // ==============================

    "a4-portrait": {
      label: "A4 Portrait",
      description: "2480 × 3508",
      width: 2480,
      height: 3508,
    },

    "a4-landscape": {
      label: "A4 Landscape",
      description: "3508 × 2480",
      width: 3508,
      height: 2480,
    },

    // ==============================
    // Common Ratios
    // ==============================

    "three-four": {
      label: "3 : 4",
      description: "1200 × 1600",
      width: 1200,
      height: 1600,
    },

    "four-three": {
      label: "4 : 3",
      description: "1600 × 1200",
      width: 1600,
      height: 1200,
    },

    "two-three": {
      label: "2 : 3",
      description: "1200 × 1800",
      width: 1200,
      height: 1800,
    },

    "three-two": {
      label: "3 : 2",
      description: "1800 × 1200",
      width: 1800,
      height: 1200,
    },

    "five-four": {
      label: "5 : 4",
      description: "1500 × 1200",
      width: 1500,
      height: 1200,
    },

    "four-five": {
      label: "4 : 5",
      description: "1200 × 1500",
      width: 1200,
      height: 1500,
    },

    // ==============================
    // Wide
    // ==============================

    "ultrawide": {
      label: "Ultrawide",
      description: "2560 × 1080",
      width: 2560,
      height: 1080,
    },

    "cinema": {
      label: "Cinema",
      description: "2560 × 1080",
      width: 2560,
      height: 1080,
    },
  };

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
    this.container.innerHTML = /* html */ `
      <!-- ================================= -->
      <!-- Dimension Presets                 -->
      <!-- ================================= -->

      <div class="panel-section">
        <label class="panel-label">
          Dimension Presets
        </label>

        <!-- Social Media -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Social Media
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="square">
              Square
              <small>1080 × 1080</small>
            </button>

            <button
              class="panel-btn"
              data-preset="portrait">
              Portrait
              <small>1080 × 1350</small>
            </button>

            <button
              class="panel-btn"
              data-preset="story">
              Story
              <small>1080 × 1920</small>
            </button>

            <button
              class="panel-btn"
              data-preset="landscape">
              Landscape
              <small>1200 × 630</small>
            </button>

          </div>
        </div>


        <!-- Phone -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Phone
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="phone">
              Phone Portrait
              <small>1170 × 2532</small>
            </button>

            <button
              class="panel-btn"
              data-preset="phone-landscape">
              Phone Landscape
              <small>2532 × 1170</small>
            </button>

          </div>
        </div>


        <!-- Tablet -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Tablet
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="tablet-portrait">
              Tablet Portrait
              <small>1536 × 2048</small>
            </button>

            <button
              class="panel-btn"
              data-preset="tablet-landscape">
              Tablet Landscape
              <small>2048 × 1536</small>
            </button>

          </div>
        </div>


        <!-- Desktop -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Desktop
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="desktop-hd">
              Full HD
              <small>1920 × 1080</small>
            </button>

            <button
              class="panel-btn"
              data-preset="desktop-qhd">
              QHD
              <small>2560 × 1440</small>
            </button>

            <button
              class="panel-btn"
              data-preset="desktop-4k">
              4K
              <small>3840 × 2160</small>
            </button>

          </div>
        </div>


        <!-- Presentation -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Presentation
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="presentation">
              Presentation
              <small>1920 × 1080</small>
            </button>

          </div>
        </div>


        <!-- Print -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Print
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="a4-portrait">
              A4 Portrait
              <small>2480 × 3508</small>
            </button>

            <button
              class="panel-btn"
              data-preset="a4-landscape">
              A4 Landscape
              <small>3508 × 2480</small>
            </button>

          </div>
        </div>


        <!-- Common Ratios -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Aspect Ratios
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="three-four">
              3 : 4
              <small>1200 × 1600</small>
            </button>

            <button
              class="panel-btn"
              data-preset="four-three">
              4 : 3
              <small>1600 × 1200</small>
            </button>

            <button
              class="panel-btn"
              data-preset="two-three">
              2 : 3
              <small>1200 × 1800</small>
            </button>

            <button
              class="panel-btn"
              data-preset="three-two">
              3 : 2
              <small>1800 × 1200</small>
            </button>

            <button
              class="panel-btn"
              data-preset="four-five">
              4 : 5
              <small>1200 × 1500</small>
            </button>

            <button
              class="panel-btn"
              data-preset="five-four">
              5 : 4
              <small>1500 × 1200</small>
            </button>

          </div>
        </div>


        <!-- Wide -->
        <div class="panel-subsection">
          <div class="panel-section-title">
            Wide
          </div>

          <div class="preset-grid">

            <button
              class="panel-btn"
              data-preset="ultrawide">
              Ultrawide
              <small>2560 × 1080</small>
            </button>

            <button
              class="panel-btn"
              data-preset="cinema">
              Cinema
              <small>2560 × 1080</small>
            </button>

          </div>
        </div>

      </div>


      <!-- ================================= -->
      <!-- Custom Canvas Size                -->
      <!-- ================================= -->

      <div class="panel-section">

        <label class="panel-label">
          Custom Canvas Size
        </label>

        <div class="panel-row">

          <div class="panel-field">

            <label class="panel-label">
              Width
            </label>

            <input
              type="number"
              id="canvas-width-input"
              class="panel-input"
              value="1080"
              min="1"
              max="10000"
              step="10"
            />

          </div>


          <div class="panel-field">

            <label class="panel-label">
              Height
            </label>

            <input
              type="number"
              id="canvas-height-input"
              class="panel-input"
              value="1080"
              min="1"
              max="10000"
              step="10"
            />

          </div>

        </div>

      </div>
    `;

    this.bindEvents();
  }

  private bindEvents(): void {
    const widthInput =
      this.container.querySelector(
        "#canvas-width-input"
      ) as HTMLInputElement;

    const heightInput =
      this.container.querySelector(
        "#canvas-height-input"
      ) as HTMLInputElement;


    // =================================
    // Preset Buttons
    // =================================

    this.container
      .querySelectorAll("[data-preset]")
      .forEach((button) => {

        button.addEventListener("click", () => {

          const presetId =
            button.getAttribute("data-preset");

          if (!presetId) return;

          const preset =
            this.presets[presetId];

          if (!preset) return;

          widthInput.value =
            preset.width.toString();

          heightInput.value =
            preset.height.toString();

          this.editor.updateCanvasDimensions(
            preset.width,
            preset.height
          );

          // Update active state
          this.container
            .querySelectorAll("[data-preset]")
            .forEach((btn) => {
              btn.classList.remove("active");
            });

          button.classList.add("active");
        });
      });


    // =================================
    // Custom Size
    // =================================

    const updateCustom = (): void => {

      const width =
        parseInt(widthInput.value, 10);

      const height =
        parseInt(heightInput.value, 10);

      if (
        !Number.isFinite(width) ||
        !Number.isFinite(height) ||
        width <= 0 ||
        height <= 0
      ) {
        return;
      }

      this.editor.updateCanvasDimensions(
        width,
        height
      );

      // Custom dimensions are no longer
      // one of the predefined presets.
      this.container
        .querySelectorAll("[data-preset]")
        .forEach((btn) => {
          btn.classList.remove("active");
        });
    };


    widthInput.addEventListener(
      "change",
      updateCustom
    );

    heightInput.addEventListener(
      "change",
      updateCustom
    );
  }
}