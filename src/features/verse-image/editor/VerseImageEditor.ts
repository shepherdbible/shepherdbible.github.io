import {
  createDefaultState,
  type VerseImageState,
  type VerseImageElement,
  type TextElement,
  type BackgroundConfig,
  type ShapeElement,
  type ImageElement,
} from "./EditorState";
import { EditorEvents } from "./EditorEvents";
import { EditorHistory } from "./EditorHistory";
import { CanvasRenderer } from "../canvas/CanvasRenderer";
import { TemplateLoader } from "../templates/templateLoader";
import { ExportImage } from "../export/ExportImage";
import type { ExportOptions } from "../export/ExportOptions";

const STORAGE_KEY = "shepherd_bible_verse_image_editor";
import {
  CanvasSelectionHandles,
  type SelectionHandle,
} from "../canvas/CanvasSelectionHandles";

export class VerseImageEditor {
  private state: VerseImageState;
  private events: EditorEvents;
  private history: EditorHistory;
  private renderer: CanvasRenderer;
  private canvasElement: HTMLCanvasElement;

  private selectionHandles = new CanvasSelectionHandles();
  private shiftPressed = false;
  private activeHandle: SelectionHandle | null = null;

  private isDragging = false;
  private isTransforming = false;

  private dragStartX = 0;
  private dragStartY = 0;

  private elementInitialX = 0;
  private elementInitialY = 0;
  private elementInitialWidth = 0;
  private elementInitialHeight = 0;
  private elementInitialRotation = 0;

  private operationHistoryStarted = false;

  constructor(canvasElement: HTMLCanvasElement) {
    this.canvasElement = canvasElement;
    this.events = new EditorEvents();
    this.history = new EditorHistory();
    this.renderer = new CanvasRenderer(canvasElement);

    this.state = this.loadLocalState() || createDefaultState();

    this.initPointerInteractions();
    this.requestRender();

    window.addEventListener("keydown", (e) => {
      if (e.key === "Shift") {
        this.shiftPressed = true;
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.key === "Shift") {
        this.shiftPressed = false;
      }
    });
  }

  public getState(): VerseImageState {
    return this.state;
  }

  public getEvents(): EditorEvents {
    return this.events;
  }

  public getHistory(): EditorHistory {
    return this.history;
  }

  public updateState(mutator: (state: VerseImageState) => void): void {
    this.history.push(this.state);
    mutator(this.state);
    this.saveLocalState();
    this.events.emit("state_changed", { state: this.state });
    this.events.emit("history_changed", {
      canUndo: this.history.canUndo(),
      canRedo: this.history.canRedo(),
    });
    this.requestRender();
  }

  public updateElement(
    elementId: string,
    changes: Partial<TextElement | ShapeElement | ImageElement>,
  ): void {
    this.updateState((state) => {
      const idx = state.elements.findIndex((e) => e.id === elementId);
      if (idx !== -1) {
        state.elements[idx] = {
          ...state.elements[idx],
          ...changes,
        } as (typeof state.elements)[number];
      }
    });
  }
  public increaseTextSize(elementId: string, amount = 2): void {
    const element = this.state.elements.find(
      (e): e is TextElement => e.id === elementId && e.type === "text",
    );

    if (!element) return;

    this.updateTextFontSize(
      elementId,
      Math.min(element.fontSize + amount, 150),
    );
  }

  public decreaseTextSize(elementId: string, amount = 2): void {
    const element = this.state.elements.find(
      (e): e is TextElement => e.id === elementId && e.type === "text",
    );

    if (!element) return;

    this.updateTextFontSize(elementId, Math.max(element.fontSize - amount, 12));
  }

  public updateTextFontSize(elementId: string, newFontSize: number): void {
    const element = this.state.elements.find(
      (e): e is TextElement => e.id === elementId && e.type === "text",
    );

    if (!element) return;

    const oldFontSize = element.fontSize;

    if (oldFontSize <= 0) return;

    const scale = newFontSize / oldFontSize;

    this.updateElement(elementId, {
      fontSize: newFontSize,
      width: element.width * scale,
      height: element.height * scale,
    });
  }
  public updateBackground(bg: BackgroundConfig): void {
    this.updateState((state) => {
      state.background = { ...bg };
    });
  }

  public updateCanvasDimensions(width: number, height: number): void {
    this.updateState((state) => {
      const oldWidth = state.width;
      const oldHeight = state.height;

      state.width = width;
      state.height = height;

      state.elements.forEach((element) => {
        const centerX = element.x + element.width / 2;

        const centerY = element.y + element.height / 2;

        // If the element was centered on the old canvas,
        // keep it centered on the new canvas.
        const wasCenteredX = Math.abs(centerX - oldWidth / 2) < 2;

        const wasCenteredY = Math.abs(centerY - oldHeight / 2) < 2;

        if (wasCenteredX) {
          element.x = (width - element.width) / 2;
        }

        if (wasCenteredY) {
          element.y = (height - element.height) / 2;
        }
      });
    });
  }

  public addTextElement(initialText: string = "New Text"): void {
    const newId = `elem_${Date.now()}`;
    const newElem: TextElement = {
      id: newId,
      type: "text",
      text: initialText,
      fontFamily: "Inter",
      fontSize: 32,
      fontWeight: "400",
      fontStyle: "normal",
      textAlign: "center",
      color: "#FAF7F2",
      letterSpacing: 0,
      lineHeight: 1.3,
      shadowColor: "rgba(0,0,0,0.4)",
      shadowBlur: 4,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      outlineColor: "transparent",
      outlineWidth: 0,
      x: this.state.width / 2 - 300,
      y: this.state.height / 2 - 40,
      width: 600,
      height: 80,
      rotation: 0,
      opacity: 1,
    };

    this.updateState((state) => {
      state.elements.push(newElem);
      state.selected_element_id = newId;
    });

    this.events.emit("element_selected", { elementId: newId });
  }

  public selectElement(elementId: string | null): void {
    this.state.selected_element_id = elementId;
    this.events.emit("element_selected", { elementId });
    this.requestRender();
  }

  public applyTemplate(templateId: string): void {
    this.history.push(this.state);
    this.state = TemplateLoader.applyTemplate(templateId, this.state);
    this.saveLocalState();
    this.events.emit("template_applied", { templateId });
    this.events.emit("state_changed", { state: this.state });
    this.requestRender();
  }

  public undo(): void {
    const prev = this.history.undo(this.state);
    if (prev) {
      this.state = prev;
      this.saveLocalState();
      this.events.emit("state_changed", { state: this.state });
      this.events.emit("history_changed", {
        canUndo: this.history.canUndo(),
        canRedo: this.history.canRedo(),
      });
      this.requestRender();
    }
  }

  public redo(): void {
    const next = this.history.redo(this.state);
    if (next) {
      this.state = next;
      this.saveLocalState();
      this.events.emit("state_changed", { state: this.state });
      this.events.emit("history_changed", {
        canUndo: this.history.canUndo(),
        canRedo: this.history.canRedo(),
      });
      this.requestRender();
    }
  }

  public exportImage(options: Partial<ExportOptions> = {}): Promise<void> {
    return ExportImage.exportDesign(this.state, options);
  }

  public requestRender(): void {
    this.renderer.render(this.state, true);
  }

  private initPointerInteractions(): void {
    this.canvasElement.style.touchAction = "none";

    // ==========================================
    // Convert browser coordinates -> canvas
    // ==========================================

    const getCanvasPoint = (e: PointerEvent) => {
      const rect = this.canvasElement.getBoundingClientRect();

      const scaleX = this.state.width / rect.width;

      const scaleY = this.state.height / rect.height;

      return {
        x: (e.clientX - rect.left) * scaleX,

        y: (e.clientY - rect.top) * scaleY,
      };
    };

    // ==========================================
    // Pointer DOWN
    // ==========================================

    this.canvasElement.addEventListener("pointerdown", (e: PointerEvent) => {
      const point = getCanvasPoint(e);

      const selectedId = this.state.selected_element_id;

      // ----------------------------------------
      // Check handles of currently selected item
      // ----------------------------------------

      if (selectedId) {
        const selected = this.state.elements.find(
          (element) => element.id === selectedId,
        );

        if (selected) {
          const handle = this.selectionHandles.hitTest(
            selected,
            point.x,
            point.y,
          );

          if (handle) {
            this.activeHandle = handle;
            this.isTransforming = true;

            this.dragStartX = point.x;
            this.dragStartY = point.y;

            this.elementInitialX = selected.x;

            this.elementInitialY = selected.y;

            this.elementInitialWidth = selected.width;

            this.elementInitialHeight = selected.height;

            this.elementInitialRotation = selected.rotation;

            // One history entry for the
            // entire resize/rotate operation.
            this.history.push(this.state);
            this.operationHistoryStarted = true;

            this.canvasElement.setPointerCapture(e.pointerId);

            return;
          }
        }
      }

      // ========================================
      // Find top-most element
      // ========================================

      const hit = [...this.state.elements]
        .reverse()
        .find((element) => this.hitTestElement(element, point.x, point.y));

      if (hit) {
        this.selectElement(hit.id);

        this.isDragging = true;

        this.dragStartX = point.x;
        this.dragStartY = point.y;

        this.elementInitialX = hit.x;
        this.elementInitialY = hit.y;

        this.elementInitialWidth = hit.width;

        this.elementInitialHeight = hit.height;

        this.elementInitialRotation = hit.rotation;

        // One history entry for dragging.
        this.history.push(this.state);
        this.operationHistoryStarted = true;

        this.canvasElement.setPointerCapture(e.pointerId);
      } else {
        this.selectElement(null);
      }
    });

    // ==========================================
    // Pointer MOVE
    // ==========================================

    this.canvasElement.addEventListener("pointermove", (e: PointerEvent) => {
      const point = getCanvasPoint(e);

      // ----------------------------------------
      // Active transform
      // ----------------------------------------

      if (
        this.isTransforming &&
        this.state.selected_element_id &&
        this.activeHandle
      ) {
        const element = this.state.elements.find(
          (item) => item.id === this.state.selected_element_id,
        );

        if (!element) return;

        if (this.activeHandle === "rotate") {
          this.rotateElement(element, point.x, point.y);
        } else {
          this.resizeElement(element, point.x, point.y, this.activeHandle);
        }

        this.requestRender();
        return;
      }

      // ----------------------------------------
      // Normal drag
      // ----------------------------------------

      if (this.isDragging && this.state.selected_element_id) {
        const element = this.state.elements.find(
          (item) => item.id === this.state.selected_element_id,
        );

        if (!element) return;

        const deltaX = point.x - this.dragStartX;

        const deltaY = point.y - this.dragStartY;

        element.x = this.elementInitialX + deltaX;

        element.y = this.elementInitialY + deltaY;

        this.requestRender();
        return;
      }

      // ========================================
      // Hover cursor
      // ========================================

      this.updateHoverCursor(point.x, point.y);
    });

    // ==========================================
    // Pointer UP
    // ==========================================

    const endPointerOperation = (e: PointerEvent) => {
      const wasOperating = this.isDragging || this.isTransforming;

      this.isDragging = false;
      this.isTransforming = false;
      this.activeHandle = null;

      if (wasOperating) {
        try {
          this.canvasElement.releasePointerCapture(e.pointerId);
        } catch {
          // Ignore pointer capture errors.
        }

        this.saveLocalState();

        this.events.emit("state_changed", {
          state: this.state,
        });

        this.events.emit("history_changed", {
          canUndo: this.history.canUndo(),

          canRedo: this.history.canRedo(),
        });

        this.operationHistoryStarted = false;
      }

      this.canvasElement.style.cursor = "default";
    };

    this.canvasElement.addEventListener("pointerup", endPointerOperation);

    this.canvasElement.addEventListener("pointercancel", endPointerOperation);
  }

  private saveLocalState(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn("Unable to save Verse Image State to localStorage:", e);
    }
  }

  private loadLocalState(): VerseImageState | null {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return null;
      const parsed = JSON.parse(data);
      if (
        parsed &&
        typeof parsed.width === "number" &&
        Array.isArray(parsed.elements)
      ) {
        return parsed as VerseImageState;
      }
    } catch (e) {
      console.warn("Invalid local state found in localStorage, clearing:", e);
      localStorage.removeItem(STORAGE_KEY);
    }
    return null;
  }

  private hitTestElement(
    element: VerseImageElement,
    x: number,
    y: number,
  ): boolean {
    const centerX = element.x + element.width / 2;

    const centerY = element.y + element.height / 2;

    // Convert pointer into the element's
    // unrotated coordinate system.
    const angle = -(element.rotation * Math.PI) / 180;

    const dx = x - centerX;
    const dy = y - centerY;

    const localX = dx * Math.cos(angle) - dy * Math.sin(angle) + centerX;

    const localY = dx * Math.sin(angle) + dy * Math.cos(angle) + centerY;

    return (
      localX >= element.x &&
      localX <= element.x + element.width &&
      localY >= element.y &&
      localY <= element.y + element.height
    );
  }
  private resizeElement(
    element: VerseImageElement,
    pointerX: number,
    pointerY: number,
    handle: SelectionHandle,
  ): void {
    const centerX = this.elementInitialX + this.elementInitialWidth / 2;

    const centerY = this.elementInitialY + this.elementInitialHeight / 2;

    // Convert pointer into the element's
    // original unrotated coordinate system.
    const angle = -(this.elementInitialRotation * Math.PI) / 180;

    const dx = pointerX - centerX;
    const dy = pointerY - centerY;

    const localX = dx * Math.cos(angle) - dy * Math.sin(angle) + centerX;

    const localY = dx * Math.sin(angle) + dy * Math.cos(angle) + centerY;

    const minWidth = 40;
    const minHeight = 30;

    let left = this.elementInitialX;

    let right = this.elementInitialX + this.elementInitialWidth;

    let top = this.elementInitialY;

    let bottom = this.elementInitialY + this.elementInitialHeight;

    // ==========================================
    // Horizontal resize
    // ==========================================

    if (
      handle === "left" ||
      handle === "top-left" ||
      handle === "bottom-left"
    ) {
      left = Math.min(localX, right - minWidth);
    }

    if (
      handle === "right" ||
      handle === "top-right" ||
      handle === "bottom-right"
    ) {
      right = Math.max(localX, left + minWidth);
    }

    // ==========================================
    // Vertical resize
    // ==========================================

    if (handle === "top" || handle === "top-left" || handle === "top-right") {
      top = Math.min(localY, bottom - minHeight);
    }

    if (
      handle === "bottom" ||
      handle === "bottom-left" ||
      handle === "bottom-right"
    ) {
      bottom = Math.max(localY, top + minHeight);
    }

    element.x = left;
    element.y = top;

    element.width = Math.max(minWidth, right - left);

    element.height = Math.max(minHeight, bottom - top);

    element.rotation = this.elementInitialRotation;
  }
  private rotateElement(
    element: VerseImageElement,
    pointerX: number,
    pointerY: number,
  ): void {
    const centerX = this.elementInitialX + this.elementInitialWidth / 2;

    const centerY = this.elementInitialY + this.elementInitialHeight / 2;

    const angle = Math.atan2(pointerY - centerY, pointerX - centerX);

    let degrees = (angle * 180) / Math.PI + 90;

    // Shift = snap to 15 degrees.
    if (this.isShiftPressed()) {
      degrees = Math.round(degrees / 15) * 15;
    }

    element.rotation = degrees;
  }
  private updateHoverCursor(x: number, y: number): void {
    const selectedId = this.state.selected_element_id;

    if (!selectedId) {
      this.canvasElement.style.cursor = "default";
      return;
    }

    const element = this.state.elements.find((item) => item.id === selectedId);

    if (!element) {
      this.canvasElement.style.cursor = "default";
      return;
    }

    const handle = this.selectionHandles.hitTest(element, x, y);

    if (handle) {
      this.canvasElement.style.cursor = this.selectionHandles.getCursor(handle);

      return;
    }

    if (this.hitTestElement(element, x, y)) {
      this.canvasElement.style.cursor = "move";

      return;
    }

    this.canvasElement.style.cursor = "default";
  }
  private isShiftPressed(): boolean {
    return false;
  }
}
