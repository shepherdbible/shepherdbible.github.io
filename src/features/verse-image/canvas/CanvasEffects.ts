import type { TextElement } from "../editor/EditorState";

export class CanvasEffects {
  public static applyTextShadow(ctx: CanvasRenderingContext2D, element: TextElement): void {
    if (element.shadowBlur > 0 || element.shadowOffsetX !== 0 || element.shadowOffsetY !== 0) {
      ctx.shadowColor = element.shadowColor || "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = element.shadowBlur;
      ctx.shadowOffsetX = element.shadowOffsetX;
      ctx.shadowOffsetY = element.shadowOffsetY;
    } else {
      this.clearShadow(ctx);
    }
  }

  public static clearShadow(ctx: CanvasRenderingContext2D): void {
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  }

  public static drawTextOutline(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    element: TextElement
  ): void {
    if (element.outlineWidth > 0 && element.outlineColor && element.outlineColor !== "transparent") {
      ctx.save();
      ctx.strokeStyle = element.outlineColor;
      ctx.lineWidth = element.outlineWidth * 2; // centered stroke width
      ctx.lineJoin = "round";
      ctx.miterLimit = 2;
      ctx.strokeText(text, x, y);
      ctx.restore();
    }
  }

  public static withTransform(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    rotationDeg: number,
    opacity: number,
    drawCallback: () => void
  ): void {
    ctx.save();

    // Opacity
    ctx.globalAlpha = Math.max(0, Math.min(1, opacity));

    // Rotation around element center
    const centerX = x + width / 2;
    const centerY = y + height / 2;

    ctx.translate(centerX, centerY);
    if (rotationDeg !== 0) {
      ctx.rotate((rotationDeg * Math.PI) / 180);
    }
    ctx.translate(-centerX, -centerY);

    drawCallback();

    ctx.restore();
  }
}