import type { VerseImageState, VerseImageElement, TextElement, ShapeElement } from "../editor/EditorState";
import { CanvasBackground } from "./CanvasBackground";
import { CanvasText } from "./CanvasText";
import { CanvasEffects } from "./CanvasEffects";
import { fontLoader } from "../fonts/fontLoader";

export class CanvasRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private backgroundRenderer = new CanvasBackground();
  private textRenderer = new CanvasText();
  private showSelectionControls = true;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) {
      throw new Error("Unable to obtain 2D Canvas Context");
    }
    this.ctx = context;
  }

  public async render(state: VerseImageState, showSelection = true): Promise<void> {
    this.showSelectionControls = showSelection;

    // Ensure canvas size matches state resolution
    if (this.canvas.width !== state.width || this.canvas.height !== state.height) {
      this.canvas.width = state.width;
      this.canvas.height = state.height;
    }

    // Preload required fonts
    const fontPromises = state.elements
      .filter((e): e is TextElement => e.type === "text")
      .map((e) => fontLoader.loadFont(e.fontFamily));

    await Promise.all(fontPromises);

    // Clear canvas
    this.ctx.clearRect(0, 0, state.width, state.height);

    // 1. Draw Background
    await this.backgroundRenderer.render(this.ctx, state.width, state.height, state.background);

    // 2. Draw Elements in Order
    state.elements.forEach((element) => {
      if (element.type === "text") {
        this.textRenderer.render(this.ctx, element as TextElement);
      } else if (element.type === "shape") {
        this.renderShape(element as ShapeElement);
      }
    });

    // 3. Draw Selection & Drag Handles (if active)
    if (this.showSelectionControls && state.selected_element_id) {
      const selected = state.elements.find((e) => e.id === state.selected_element_id);
      if (selected) {
        this.renderSelectionOverlay(selected);
      }
    }
  }

  private renderShape(element: ShapeElement): void {
    CanvasEffects.withTransform(
      this.ctx,
      element.x,
      element.y,
      element.width,
      element.height,
      element.rotation,
      element.opacity,
      () => {
        this.ctx.save();
        this.ctx.fillStyle = element.fillColor || "transparent";
        this.ctx.strokeStyle = element.strokeColor || "#D4AF37";
        this.ctx.lineWidth = element.strokeWidth || 2;

        if (element.shapeType === "divider" || element.shapeType === "line") {
          this.ctx.beginPath();
          this.ctx.moveTo(element.x, element.y + element.height / 2);
          this.ctx.lineTo(element.x + element.width, element.y + element.height / 2);
          this.ctx.stroke();
        } else if (element.shapeType === "rectangle") {
          this.ctx.fillRect(element.x, element.y, element.width, element.height);
          if (element.strokeWidth > 0) {
            this.ctx.strokeRect(element.x, element.y, element.width, element.height);
          }
        } else if (element.shapeType === "circle") {
          this.ctx.beginPath();
          const rx = element.width / 2;
          const ry = element.height / 2;
          this.ctx.ellipse(
            element.x + rx,
            element.y + ry,
            rx,
            ry,
            0,
            0,
            Math.PI * 2
          );
          this.ctx.fill();
          if (element.strokeWidth > 0) {
            this.ctx.stroke();
          }
        }
        this.ctx.restore();
      }
    );
  }

  private renderSelectionOverlay(element: VerseImageElement): void {
    this.ctx.save();

    const centerX = element.x + element.width / 2;
    const centerY = element.y + element.height / 2;

    this.ctx.translate(centerX, centerY);
    if (element.rotation !== 0) {
      this.ctx.rotate((element.rotation * Math.PI) / 180);
    }
    this.ctx.translate(-centerX, -centerY);

    // Bounding Box
    this.ctx.strokeStyle = "#D4AF37";
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([6, 6]);
    this.ctx.strokeRect(element.x - 4, element.y - 4, element.width + 8, element.height + 8);
    this.ctx.setLineDash([]);

    // Corner Handles
    const handleSize = 12;
    this.ctx.fillStyle = "#FAF7F2";
    this.ctx.strokeStyle = "#3D1E18";
    this.ctx.lineWidth = 2;

    const corners = [
      { x: element.x - 4, y: element.y - 4 },
      { x: element.x + element.width + 4, y: element.y - 4 },
      { x: element.x - 4, y: element.y + element.height + 4 },
      { x: element.x + element.width + 4, y: element.y + element.height + 4 }
    ];

    corners.forEach((c) => {
      this.ctx.fillRect(c.x - handleSize / 2, c.y - handleSize / 2, handleSize, handleSize);
      this.ctx.strokeRect(c.x - handleSize / 2, c.y - handleSize / 2, handleSize, handleSize);
    });

    this.ctx.restore();
  }

  public getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }
}