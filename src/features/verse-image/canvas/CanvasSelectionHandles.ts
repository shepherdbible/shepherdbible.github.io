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
  | "rotate";

export interface HandlePoint {
  x: number;
  y: number;
}

export class CanvasSelectionHandles {
  private readonly handleSize = 12;
  private readonly rotateDistance = 34;

  public render(
    ctx: CanvasRenderingContext2D,
    element: VerseImageElement
  ): void {
    ctx.save();

    const centerX =
      element.x + element.width / 2;

    const centerY =
      element.y + element.height / 2;

    ctx.translate(centerX, centerY);

    if (element.rotation !== 0) {
      ctx.rotate(
        (element.rotation * Math.PI) / 180
      );
    }

    ctx.translate(-centerX, -centerY);

    const left = element.x - 4;
    const right =
      element.x + element.width + 4;

    const top = element.y - 4;
    const bottom =
      element.y + element.height + 4;

    const middleX =
      element.x + element.width / 2;

    const middleY =
      element.y + element.height / 2;

    // ==========================================
    // Bounding box
    // ==========================================

    ctx.strokeStyle = "#D4AF37";
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);

    ctx.strokeRect(
      left,
      top,
      right - left,
      bottom - top
    );

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
      this.drawHandle(
        ctx,
        handle.x,
        handle.y
      );
    });

    // ==========================================
    // Rotation handle
    // ==========================================

    const rotateY =
      top - this.rotateDistance;

    ctx.beginPath();

    ctx.moveTo(
      middleX,
      top
    );

    ctx.lineTo(
      middleX,
      rotateY + 7
    );

    ctx.strokeStyle = "#D4AF37";
    ctx.lineWidth = 2;
    ctx.stroke();

    this.drawRotateHandle(
      ctx,
      middleX,
      rotateY
    );

    ctx.restore();
  }

  private drawHandle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number
  ): void {
    const size = this.handleSize;

    ctx.save();

    ctx.fillStyle = "#FAF7F2";
    ctx.strokeStyle = "#3D1E18";
    ctx.lineWidth = 2;

    ctx.fillRect(
      x - size / 2,
      y - size / 2,
      size,
      size
    );

    ctx.strokeRect(
      x - size / 2,
      y - size / 2,
      size,
      size
    );

    ctx.restore();
  }

  private drawRotateHandle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number
  ): void {
    const radius = 8;

    ctx.save();

    ctx.beginPath();
    ctx.arc(
      x,
      y,
      radius,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = "#FAF7F2";
    ctx.fill();

    ctx.strokeStyle = "#3D1E18";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Rotation arrow
    ctx.beginPath();

    ctx.arc(
      x,
      y,
      4,
      -Math.PI * 0.75,
      Math.PI * 0.75
    );

    ctx.strokeStyle = "#3D1E18";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(
      x + 3,
      y - 3
    );

    ctx.lineTo(
      x + 5,
      y - 3
    );

    ctx.lineTo(
      x + 4,
      y - 1
    );

    ctx.stroke();

    ctx.restore();
  }

  public getHandlePoint(
    element: VerseImageElement,
    handle: SelectionHandle
  ): HandlePoint {
    const left = element.x - 4;
    const right =
      element.x + element.width + 4;

    const top = element.y - 4;
    const bottom =
      element.y + element.height + 4;

    const middleX =
      element.x + element.width / 2;

    const middleY =
      element.y + element.height / 2;

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
    y: number
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
    ];

    const centerX =
      element.x + element.width / 2;

    const centerY =
      element.y + element.height / 2;

    // Convert pointer coordinates into
    // the element's unrotated coordinate system.
    const angle =
      -(element.rotation * Math.PI) / 180;

    const dx = x - centerX;
    const dy = y - centerY;

    const localX =
      dx * Math.cos(angle) -
      dy * Math.sin(angle) +
      centerX;

    const localY =
      dx * Math.sin(angle) +
      dy * Math.cos(angle) +
      centerY;

    const hitRadius = 12;

    for (const handle of handles) {
      const point =
        this.getHandlePoint(
          element,
          handle
        );

      if (
        Math.abs(localX - point.x) <=
          hitRadius &&
        Math.abs(localY - point.y) <=
          hitRadius
      ) {
        return handle;
      }
    }

    return null;
  }

  public getCursor(
    handle: SelectionHandle
  ): string {
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

      default:
        return "default";
    }
  }
}