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

export class VerseImageEditor {
  private state: VerseImageState;
  private events: EditorEvents;
  private history: EditorHistory;
  private renderer: CanvasRenderer;
  private canvasElement: HTMLCanvasElement;

  private isDragging = false;
  private dragStartX = 0;
  private dragStartY = 0;
  private elementInitialX = 0;
  private elementInitialY = 0;

  constructor(canvasElement: HTMLCanvasElement) {
    this.canvasElement = canvasElement;
    this.events = new EditorEvents();
    this.history = new EditorHistory();
    this.renderer = new CanvasRenderer(canvasElement);

    this.state = this.loadLocalState() || createDefaultState();

    this.initPointerInteractions();
    this.requestRender();
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

  public updateBackground(bg: BackgroundConfig): void {
    this.updateState((state) => {
      state.background = { ...bg };
    });
  }

  public updateCanvasDimensions(width: number, height: number): void {
    this.updateState((state) => {
      state.width = width;
      state.height = height;
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

    this.canvasElement.addEventListener("pointerdown", (e: PointerEvent) => {
      const rect = this.canvasElement.getBoundingClientRect();
      const scaleX = this.state.width / rect.width;
      const scaleY = this.state.height / rect.height;

      const clickX = (e.clientX - rect.left) * scaleX;
      const clickY = (e.clientY - rect.top) * scaleY;

      // Find top-most hit element
      const hit = [...this.state.elements].reverse().find((elem) => {
        return (
          clickX >= elem.x &&
          clickX <= elem.x + elem.width &&
          clickY >= elem.y &&
          clickY <= elem.y + elem.height
        );
      });

      if (hit) {
        this.selectElement(hit.id);
        this.isDragging = true;
        this.dragStartX = clickX;
        this.dragStartY = clickY;
        this.elementInitialX = hit.x;
        this.elementInitialY = hit.y;
        this.canvasElement.setPointerCapture(e.pointerId);
      } else {
        this.selectElement(null);
      }
    });

    this.canvasElement.addEventListener("pointermove", (e: PointerEvent) => {
      if (!this.isDragging || !this.state.selected_element_id) return;

      const rect = this.canvasElement.getBoundingClientRect();
      const scaleX = this.state.width / rect.width;
      const scaleY = this.state.height / rect.height;

      const currentX = (e.clientX - rect.left) * scaleX;
      const currentY = (e.clientY - rect.top) * scaleY;

      const deltaX = currentX - this.dragStartX;
      const deltaY = currentY - this.dragStartY;

      const elem = this.state.elements.find(
        (e) => e.id === this.state.selected_element_id,
      );
      if (elem) {
        elem.x = this.elementInitialX + deltaX;
        elem.y = this.elementInitialY + deltaY;
        this.requestRender();
      }
    });

    const endDrag = (e: PointerEvent) => {
      if (this.isDragging) {
        this.isDragging = false;
        try {
          this.canvasElement.releasePointerCapture(e.pointerId);
        } catch {
          // ignore
        }
        this.saveLocalState();
      }
    };

    this.canvasElement.addEventListener("pointerup", endDrag);
    this.canvasElement.addEventListener("pointercancel", endDrag);
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
}
