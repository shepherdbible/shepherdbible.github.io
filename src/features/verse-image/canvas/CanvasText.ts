import type { TextElement } from "../editor/EditorState";
import { CanvasEffects } from "./CanvasEffects";

export class CanvasText {
  public render(ctx: CanvasRenderingContext2D, element: TextElement): void {
    CanvasEffects.withTransform(
      ctx,
      element.x,
      element.y,
      element.width,
      element.height,
      element.rotation,
      element.opacity,
      () => {
        this.drawTextContent(ctx, element);
      }
    );
  }

  private drawTextContent(ctx: CanvasRenderingContext2D, element: TextElement): void {
    ctx.save();

    const styleStr = element.fontStyle === "italic" ? "italic " : "";
    const weightStr = element.fontWeight || "400";
    ctx.font = `${styleStr}${weightStr} ${element.fontSize}px "${element.fontFamily}", serif, sans-serif`;
    ctx.fillStyle = element.color || "#FFFFFF";
    ctx.textAlign = element.textAlign || "center";
    ctx.textBaseline = "top";

    // Handle letter spacing native or fallback
    if ("letterSpacing" in ctx) {
      (ctx as unknown as { letterSpacing: string }).letterSpacing = `${element.letterSpacing || 0}px`;
    }

    const lines = this.wrapText(ctx, element.text, element.width);
    const lineSpacing = element.fontSize * (element.lineHeight || 1.3);

    let startX = element.x + element.width / 2;
    if (element.textAlign === "left") {
      startX = element.x;
    } else if (element.textAlign === "right") {
      startX = element.x + element.width;
    }

    let startY = element.y;

    lines.forEach((line, index) => {
      const currentY = startY + index * lineSpacing;

      // 1. Draw Shadow
      CanvasEffects.applyTextShadow(ctx, element);

      // 2. Draw Fill
      ctx.fillText(line, startX, currentY);

      // 3. Clear shadow for outline
      CanvasEffects.clearShadow(ctx);

      // 4. Draw Outline / Stroke
      CanvasEffects.drawTextOutline(ctx, line, startX, currentY, element);
    });

    ctx.restore();
  }

  public wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
    if (!text) return [];

    const paragraphs = text.split("\n");
    const resultLines: string[] = [];

    paragraphs.forEach((paragraph) => {
      const words = paragraph.split(" ");
      let currentLine = "";

      for (let n = 0; n < words.length; n++) {
        const testLine = currentLine ? `${currentLine} ${words[n]}` : words[n];
        const metrics = ctx.measureText(testLine);

        if (metrics.width > maxWidth && n > 0) {
          resultLines.push(currentLine);
          currentLine = words[n];
        } else {
          currentLine = testLine;
        }
      }
      resultLines.push(currentLine);
    });

    return resultLines;
  }
}