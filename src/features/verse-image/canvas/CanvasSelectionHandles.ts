import type { VerseImageElement } from "../editor/EditorState";

export type SelectionHandle =
  | "top-left"
  | "top"
  | "top-right"
  | "right"
  | "bottom-right"
  | "bottom"
  | "bottom-left"
  | "left"
  | "rotate"
  | "delete";

export interface HandlePoint {
  x: number;
  y: number;
}

export class CanvasSelectionHandles {
  private readonly baseHandleSize = 12;
  private readonly baseRotateDistance = 50;

  private readonly baseRotateRadius = 12;
  private readonly baseRotateHitRadius = 24;

  // Canvas units per CSS pixel; keeps handles usable on scaled-down canvases.
  public uiScale = 1;

  private get handleSize(): number {
    return this.baseHandleSize * this.uiScale;
  }

  private get rotateRadius(): number {
    return this.baseRotateRadius * this.uiScale;
  }

  private get rotateDistance(): number {
    return this.baseRotateDistance * this.uiScale;
  }

  public render(
    ctx: CanvasRenderingContext2D,
    element: VerseImageElement,
  ): void {
    ctx.save();

    const centerX = element.x + element.width / 2;

    const centerY = element.y + element.height / 2;

    ctx.translate(centerX, centerY);

    if (element.rotation !== 0) {
      ctx.rotate((element.rotation * Math.PI) / 180);
    }

    ctx.translate(-centerX, -centerY);

    const left = element.x - 4;
    const right = element.x + element.width + 4;

    const top = element.y - 4;
    const bottom = element.y + element.height + 4;

    const middleX = element.x + element.width / 2;

    const middleY = element.y + element.height / 2;

    // ==========================================
    // Bounding box
    // ==========================================

    ctx.strokeStyle = "#D4AF37";
    ctx.lineWidth = 2 * this.uiScale;
    ctx.setLineDash([6 * this.uiScale, 6 * this.uiScale]);

    ctx.strokeRect(left, top, right - left, bottom - top);

    ctx.setLineDash([]);

    // ==========================================
    // Resize handles
    // ==========================================

    const handles: HandlePoint[] = [
      // Corners
      { x: left, y: top },
      { x: right, y: top },
      { x: right, y: bottom },
      { x: left, y: bottom },

      // Sides
      { x: middleX, y: top },
      { x: right, y: middleY },
      { x: middleX, y: bottom },
      { x: left, y: middleY },
    ];

    handles.forEach((handle) => {
      this.drawHandle(ctx, handle.x, handle.y);
    });

    // Delete button
    this.drawDeleteHandle(
      ctx,
      right + 14 * this.uiScale,
      top - 14 * this.uiScale,
    );

    // ==========================================
    // Rotation handle
    // ==========================================

    const rotateY = top - this.rotateDistance;

    ctx.beginPath();

    ctx.moveTo(middleX, top);

    ctx.lineTo(middleX, rotateY + 7);

    ctx.strokeStyle = "#D4AF37";
    ctx.lineWidth = 2 * this.uiScale;
    ctx.stroke();

    this.drawRotateHandle(ctx, middleX, rotateY);

    ctx.restore();
  }

  private drawHandle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
    const size = this.handleSize;

    ctx.save();

    ctx.fillStyle = "#FAF7F2";
    ctx.strokeStyle = "#3D1E18";
    ctx.lineWidth = 2 * this.uiScale;

    ctx.fillRect(x - size / 2, y - size / 2, size, size);

    ctx.strokeRect(x - size / 2, y - size / 2, size, size);

    ctx.restore();
  }

  private drawDeleteHandle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
    const r = 11 * this.uiScale;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "#D93025";
    ctx.fill();
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 2 * this.uiScale;
    ctx.stroke();
    const d = r * 0.45;
    ctx.beginPath();
    ctx.moveTo(x - d, y - d);
    ctx.lineTo(x + d, y + d);
    ctx.moveTo(x + d, y - d);
    ctx.lineTo(x - d, y + d);
    ctx.stroke();
    ctx.restore();
  }

  private drawRotateHandle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
  ): void {
    const radius = this.rotateRadius;

    ctx.save();

    // Outer gold ring
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#D4AF37";
    ctx.fill();

    ctx.strokeStyle = "#3D1E18";
    ctx.lineWidth = 2 * this.uiScale;
    ctx.stroke();

    // Inner circle
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.72, 0, Math.PI * 2);
    ctx.fillStyle = "#FAF7F2";
    ctx.fill();

    // Rotation arrow
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.42, -Math.PI * 0.8, Math.PI * 0.8);

    ctx.strokeStyle = "#3D1E18";
    ctx.lineWidth = 2 * this.uiScale;
    ctx.lineCap = "round";
    ctx.stroke();

    // Arrowhead
    const arrowX = x + radius * 0.3;
    const arrowY = y - radius * 0.3;

    ctx.beginPath();
    ctx.moveTo(arrowX - radius * 0.12, arrowY - radius * 0.08);
    ctx.lineTo(arrowX + radius * 0.12, arrowY - radius * 0.08);
    ctx.lineTo(arrowX + radius * 0.06, arrowY + radius * 0.14);

    ctx.strokeStyle = "#3D1E18";
    ctx.lineWidth = 2 * this.uiScale;
    ctx.lineJoin = "round";
    ctx.stroke();

    ctx.restore();
  }

  public getHandlePoint(
    element: VerseImageElement,
    handle: SelectionHandle,
  ): HandlePoint {
    const left = element.x - 4;
    const right = element.x + element.width + 4;

    const top = element.y - 4;
    const bottom = element.y + element.height + 4;

    const middleX = element.x + element.width / 2;

    const middleY = element.y + element.height / 2;

    switch (handle) {
      case "top-left":
        return { x: left, y: top };

      case "top":
        return { x: middleX, y: top };

      case "top-right":
        return { x: right, y: top };

      case "right":
        return { x: right, y: middleY };

      case "bottom-right":
        return { x: right, y: bottom };

      case "bottom":
        return { x: middleX, y: bottom };

      case "bottom-left":
        return { x: left, y: bottom };

      case "left":
        return { x: left, y: middleY };

      case "delete":
        return {
          x: right + 14 * this.uiScale,
          y: top - 14 * this.uiScale,
        };

      case "rotate":
        return {
          x: middleX,
          y: top - this.rotateDistance,
        };
    }
  }

  public hitTest(
    element: VerseImageElement,
    x: number,
    y: number,
  ): SelectionHandle | null {
    const handles: SelectionHandle[] = [
      "top-left",
      "top",
      "top-right",
      "right",
      "bottom-right",
      "bottom",
      "bottom-left",
      "left",
      "rotate",
      "delete",
    ];

    const centerX = element.x + element.width / 2;

    const centerY = element.y + element.height / 2;

    // Convert pointer coordinates into
    // the element's unrotated coordinate system.
    const angle = -(element.rotation * Math.PI) / 180;

    const dx = x - centerX;
    const dy = y - centerY;

    const localX = dx * Math.cos(angle) - dy * Math.sin(angle) + centerX;

    const localY = dx * Math.sin(angle) + dy * Math.cos(angle) + centerY;

    const hitRadius =
      12 * Math.max(this.uiScale, 1) +
      (this.uiScale > 1 ? 6 * this.uiScale : 0);
    // Check the rotation circle first so other handles
    // cannot intercept the pointer.
    const rotatePoint = this.getHandlePoint(element, "rotate");

    const rotateHitRadius = Math.max(
      this.baseRotateHitRadius * this.uiScale,
      24,
    );

    if (
      Math.hypot(localX - rotatePoint.x, localY - rotatePoint.y) <=
      rotateHitRadius
    ) {
      return "rotate";
    }
    for (const handle of handles) {
      const point = this.getHandlePoint(element, handle);

      if (
        Math.abs(localX - point.x) <= hitRadius &&
        Math.abs(localY - point.y) <= hitRadius
      ) {
        return handle;
      }
    }

    return null;
  }

  public getCursor(handle: SelectionHandle): string {
    switch (handle) {
      case "left":
      case "right":
        return "ew-resize";

      case "top":
      case "bottom":
        return "ns-resize";

      case "top-left":
      case "bottom-right":
        return "nwse-resize";

      case "top-right":
      case "bottom-left":
        return "nesw-resize";

      case "rotate":
        return "grab";

      case "delete":
        return "pointer";

      default:
        return "default";
    }
  }
}
