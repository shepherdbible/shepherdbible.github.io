import type { TextElement } from "../editor/EditorState";

export class CanvasEffects {
  /**
   * Apply the normal drop shadow configured on the text.
   */
  public static applyTextShadow(
    ctx: CanvasRenderingContext2D,
    element: TextElement
  ): void {
    if (
      element.shadowBlur > 0 ||
      element.shadowOffsetX !== 0 ||
      element.shadowOffsetY !== 0
    ) {
      ctx.shadowColor =
        element.shadowColor || "rgba(0, 0, 0, 0.5)";

      ctx.shadowBlur = element.shadowBlur || 0;
      ctx.shadowOffsetX = element.shadowOffsetX || 0;
      ctx.shadowOffsetY = element.shadowOffsetY || 0;
    } else {
      this.clearShadow(ctx);
    }
  }

  /**
   * Apply a soft glow around text.
   *
   * Canvas text glow is implemented using the canvas shadow system:
   * - no offset
   * - configurable blur
   * - configurable color
   * - configurable intensity
   */
  public static applyTextGlow(
    ctx: CanvasRenderingContext2D,
    element: TextElement
  ): void {
    const glowColor = element.glowColor;

    const glowBlur = element.glowBlur ?? 0;

    const glowIntensity = Math.max(
      0,
      Math.min(1, element.glowIntensity ?? 0)
    );

    if (
      !glowColor ||
      glowColor === "transparent" ||
      glowBlur <= 0 ||
      glowIntensity <= 0
    ) {
      this.clearShadow(ctx);
      return;
    }

    ctx.shadowColor = this.withAlpha(
      glowColor,
      glowIntensity
    );

    ctx.shadowBlur = glowBlur;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  }

  /**
   * Clear all canvas shadow properties.
   */
  public static clearShadow(
    ctx: CanvasRenderingContext2D
  ): void {
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  }

  /**
   * Draw a text outline/stroke.
   */
  public static drawTextOutline(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    element: TextElement
  ): void {
    if (
      element.outlineWidth > 0 &&
      element.outlineColor &&
      element.outlineColor !== "transparent"
    ) {
      ctx.save();

      ctx.strokeStyle = element.outlineColor;
      ctx.lineWidth = element.outlineWidth * 2;

      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.miterLimit = 2;

      ctx.strokeText(text, x, y);

      ctx.restore();
    }
  }

  /**
   * Draw a rounded rectangle.
   */
  public static drawRoundedRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ): void {
    const r = Math.max(
      0,
      Math.min(
        radius,
        Math.min(width / 2, height / 2)
      )
    );

    ctx.beginPath();

    ctx.moveTo(x + r, y);
    ctx.lineTo(x + width - r, y);

    ctx.quadraticCurveTo(
      x + width,
      y,
      x + width,
      y + r
    );

    ctx.lineTo(
      x + width,
      y + height - r
    );

    ctx.quadraticCurveTo(
      x + width,
      y + height,
      x + width - r,
      y + height
    );

    ctx.lineTo(x + r, y + height);

    ctx.quadraticCurveTo(
      x,
      y + height,
      x,
      y + height - r
    );

    ctx.lineTo(x, y + r);

    ctx.quadraticCurveTo(
      x,
      y,
      x + r,
      y
    );

    ctx.closePath();
  }

  /**
   * Convert a normal color into an rgba color.
   *
   * Supports:
   * - #RGB
   * - #RRGGBB
   * - rgb(...)
   * - rgba(...)
   * - named colors
   *
   * For rgba/rgb/named colors, the browser is used
   * to resolve the actual color.
   */
  private static withAlpha(
    color: string,
    alpha: number
  ): string {
    const clampedAlpha = Math.max(
      0,
      Math.min(1, alpha)
    );

    // Hex colors
    if (color.startsWith("#")) {
      let hex = color.substring(1);

      if (hex.length === 3) {
        hex = hex
          .split("")
          .map((c) => c + c)
          .join("");
      }

      if (hex.length === 6) {
        const r = parseInt(
          hex.substring(0, 2),
          16
        );

        const g = parseInt(
          hex.substring(2, 4),
          16
        );

        const b = parseInt(
          hex.substring(4, 6),
          16
        );

        return `rgba(${r}, ${g}, ${b}, ${clampedAlpha})`;
      }
    }

    // Already rgba
    if (color.startsWith("rgba(")) {
      return color.replace(
        /rgba\(([^)]+)\)/,
        (_, values: string) => {
          const parts = values.split(",").map((v) => v.trim());

          return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${clampedAlpha})`;
        }
      );
    }

    // rgb(...)
    if (color.startsWith("rgb(")) {
      const values = color
        .substring(4, color.length - 1)
        .split(",")
        .map((v) => v.trim());

      return `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${clampedAlpha})`;
    }

    // Let canvas resolve named colors and other CSS colors.
    return color;
  }

  /**
   * Apply element rotation and opacity.
   *
   * IMPORTANT:
   * This keeps the existing coordinate system:
   * x/y remain canvas coordinates.
   */
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

    ctx.globalAlpha = Math.max(
      0,
      Math.min(1, opacity)
    );

    const centerX = x + width / 2;
    const centerY = y + height / 2;

    ctx.translate(centerX, centerY);

    if (rotationDeg !== 0) {
      ctx.rotate(
        (rotationDeg * Math.PI) / 180
      );
    }

    ctx.translate(
      -centerX,
      -centerY
    );

    drawCallback();

    ctx.restore();
  }
}