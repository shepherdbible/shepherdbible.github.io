import type { TextElement } from "../editor/EditorState";
import { CanvasEffects } from "./CanvasEffects";

export class CanvasText {
  public render(
    ctx: CanvasRenderingContext2D,
    element: TextElement
  ): void {
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

  private drawTextContent(
    ctx: CanvasRenderingContext2D,
    element: TextElement
  ): void {
    ctx.save();

    // ==========================================
    // Font
    // ==========================================

    const styleStr =
      element.fontStyle === "italic"
        ? "italic "
        : "";

    const weightStr =
      element.fontWeight || "400";

    ctx.font =
      `${styleStr}${weightStr} ` +
      `${element.fontSize}px ` +
      `"${element.fontFamily}", serif, sans-serif`;

    // ==========================================
    // Alignment
    // ==========================================

    ctx.textAlign =
      element.textAlign || "center";

    ctx.textBaseline = "middle";

    // ==========================================
    // Letter spacing
    // ==========================================

    if ("letterSpacing" in ctx) {
      (
        ctx as unknown as {
          letterSpacing: string;
        }
      ).letterSpacing =
        `${element.letterSpacing || 0}px`;
    }

    // ==========================================
    // Text transformation
    // ==========================================

    const text = this.applyTextTransform(
      element.text,
      element.textTransform
    );

    // ==========================================
    // Text wrapping
    // ==========================================

    const lines = this.wrapText(
      ctx,
      text,
      Math.max(
        1,
        element.width -
          (element.padding ?? 0) * 2
      )
    );

    if (lines.length === 0) {
      ctx.restore();
      return;
    }

    // ==========================================
    // Line height
    // ==========================================

    const lineSpacing =
      element.fontSize *
      (element.lineHeight || 1.3);

    // ==========================================
    // Horizontal position
    // ==========================================

    let startX =
      element.x +
      element.width / 2;

    if (element.textAlign === "left") {
      startX =
        element.x +
        (element.padding ?? 0);
    } else if (
      element.textAlign === "right"
    ) {
      startX =
        element.x +
        element.width -
        (element.padding ?? 0);
    }

    // ==========================================
    // Vertical position
    // ==========================================

    const totalTextHeight =
      lines.length * lineSpacing;

    let startY =
      element.y +
      element.height / 2 -
      totalTextHeight / 2 +
      lineSpacing / 2;

    if (element.verticalAlign === "top") {
      startY =
        element.y +
        (element.padding ?? 0) +
        lineSpacing / 2;
    } else if (
      element.verticalAlign === "bottom"
    ) {
      startY =
        element.y +
        element.height -
        (element.padding ?? 0) -
        totalTextHeight +
        lineSpacing / 2;
    }

    // ==========================================
    // Text background / glow
    // ==========================================

    this.drawTextBackground(
      ctx,
      element,
      lines,
      lineSpacing,
      startX,
      startY
    );

    // ==========================================
    // Draw each line
    // ==========================================

    lines.forEach((line, index) => {
      const currentY =
        startY +
        index * lineSpacing;

      // ------------------------------
      // Glow
      // ------------------------------

      CanvasEffects.applyTextGlow(
        ctx,
        element
      );

      this.drawTextFill(
        ctx,
        line,
        startX,
        currentY,
        element
      );

      CanvasEffects.clearShadow(ctx);

      // ------------------------------
      // Drop shadow
      // ------------------------------

      CanvasEffects.applyTextShadow(
        ctx,
        element
      );

      this.drawTextFill(
        ctx,
        line,
        startX,
        currentY,
        element
      );

      CanvasEffects.clearShadow(ctx);

      // ------------------------------
      // Outline
      // ------------------------------

      CanvasEffects.drawTextOutline(
        ctx,
        line,
        startX,
        currentY,
        element
      );

      // ------------------------------
      // Final text
      // ------------------------------

      this.drawTextFill(
        ctx,
        line,
        startX,
        currentY,
        element
      );
    });

    // ==========================================
    // Reset effects
    // ==========================================

    CanvasEffects.clearShadow(ctx);

    ctx.restore();
  }

  // ============================================
  // Text fill
  // ============================================

  private drawTextFill(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    element: TextElement
  ): void {
    if (
      element.gradient &&
      element.gradient.colors.length >= 2
    ) {
      const gradient =
        this.createTextGradient(
          ctx,
          element,
          x,
          y
        );

      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle =
        element.color || "#FFFFFF";
    }

    ctx.fillText(
      text,
      x,
      y
    );
  }

  // ============================================
  // Gradient
  // ============================================

  private createTextGradient(
    ctx: CanvasRenderingContext2D,
    element: TextElement,
    x: number,
    y: number
  ): CanvasGradient {
    const gradientConfig =
      element.gradient!;

    if (
      gradientConfig.type === "radial"
    ) {
      const radius =
        Math.max(
          element.width,
          element.height
        ) / 2;

      const gradient =
        ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          radius
        );

      this.addGradientStops(
        gradient,
        gradientConfig.colors
      );

      return gradient;
    }

    const angle =
      (gradientConfig.angle || 0) *
      Math.PI /
      180;

    const length =
      Math.sqrt(
        element.width ** 2 +
        element.height ** 2
      );

    const centerX =
      element.x +
      element.width / 2;

    const centerY =
      element.y +
      element.height / 2;

    const x1 =
      centerX -
      Math.cos(angle) * length / 2;

    const y1 =
      centerY -
      Math.sin(angle) * length / 2;

    const x2 =
      centerX +
      Math.cos(angle) * length / 2;

    const y2 =
      centerY +
      Math.sin(angle) * length / 2;

    const gradient =
      ctx.createLinearGradient(
        x1,
        y1,
        x2,
        y2
      );

    this.addGradientStops(
      gradient,
      gradientConfig.colors
    );

    return gradient;
  }

  private addGradientStops(
    gradient: CanvasGradient,
    colors: string[]
  ): void {
    const count = colors.length;

    colors.forEach(
      (color, index) => {
        const position =
          count <= 1
            ? 0
            : index / (count - 1);

        gradient.addColorStop(
          position,
          color
        );
      }
    );
  }

  // ============================================
  // Text background
  // ============================================

  private drawTextBackground(
    ctx: CanvasRenderingContext2D,
    element: TextElement,
    lines: string[],
    lineSpacing: number,
    startX: number,
    startY: number
  ): void {
    if (
      !element.backgroundColor ||
      element.backgroundColor ===
        "transparent"
    ) {
      return;
    }

    const padding =
      element.padding ?? 0;

    const maxTextWidth =
      Math.max(
        ...lines.map((line) =>
          ctx.measureText(line).width
        )
      );

    const backgroundWidth =
      maxTextWidth +
      padding * 2;

    const backgroundHeight =
      lines.length *
        lineSpacing +
      padding * 2;

    let backgroundX =
      element.x +
      element.width / 2 -
      backgroundWidth / 2;

    if (element.textAlign === "left") {
      backgroundX =
        element.x;
    } else if (
      element.textAlign === "right"
    ) {
      backgroundX =
        element.x +
        element.width -
        backgroundWidth;
    }

    const backgroundY =
      element.y +
      element.height / 2 -
      backgroundHeight / 2;

    // ------------------------------------------
    // Glow behind background
    // ------------------------------------------

    if (
      element.glowColor &&
      element.glowColor !==
        "transparent" &&
      (element.glowBlur ?? 0) > 0
    ) {
      ctx.save();

      ctx.shadowColor =
        element.glowColor;

      ctx.shadowBlur =
        element.glowBlur ?? 0;

      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      ctx.fillStyle =
        element.backgroundColor;

      CanvasEffects.drawRoundedRect(
        ctx,
        backgroundX,
        backgroundY,
        backgroundWidth,
        backgroundHeight,
        element.backgroundRadius ?? 0
      );

      ctx.fill();

      ctx.restore();
    }

    // ------------------------------------------
    // Actual background
    // ------------------------------------------

    ctx.save();

    ctx.fillStyle =
      element.backgroundColor;

    CanvasEffects.drawRoundedRect(
      ctx,
      backgroundX,
      backgroundY,
      backgroundWidth,
      backgroundHeight,
      element.backgroundRadius ?? 0
    );

    ctx.fill();

    ctx.restore();
  }

  // ============================================
  // Text transformation
  // ============================================

  private applyTextTransform(
    text: string,
    transform:
      | TextElement["textTransform"]
      | undefined
  ): string {
    switch (transform) {
      case "uppercase":
        return text.toUpperCase();

      case "lowercase":
        return text.toLowerCase();

      case "capitalize":
        return text.replace(
          /\b\w/g,
          (char) =>
            char.toUpperCase()
        );

      default:
        return text;
    }
  }

  // ============================================
  // Text wrapping
  // ============================================

  public wrapText(
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
  ): string[] {
    if (!text) return [];

    const paragraphs =
      text.split("\n");

    const resultLines: string[] = [];

    paragraphs.forEach(
      (paragraph) => {
        const words =
          paragraph.split(" ");

        let currentLine = "";

        for (
          let n = 0;
          n < words.length;
          n++
        ) {
          const testLine =
            currentLine
              ? `${currentLine} ${words[n]}`
              : words[n];

          const metrics =
            ctx.measureText(
              testLine
            );

          if (
            metrics.width >
              maxWidth &&
            n > 0
          ) {
            resultLines.push(
              currentLine
            );

            currentLine =
              words[n];
          } else {
            currentLine =
              testLine;
          }
        }

        resultLines.push(
          currentLine
        );
      }
    );

    return resultLines;
  }
}