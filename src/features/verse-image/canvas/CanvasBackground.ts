import type { BackgroundConfig } from "../editor/EditorState";

export class CanvasBackground {
  private imageCache = new Map<string, HTMLImageElement>();

  public async render(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    config: BackgroundConfig
  ): Promise<void> {
    ctx.save();

    // 1. Base background
    if (config.type === "solid") {
      ctx.fillStyle = config.color || "#1A1A1A";
      ctx.fillRect(0, 0, width, height);
    } else if (config.type === "gradient") {
      const grad = config.gradient;
      let canvasGrad: CanvasGradient;

      if (grad.type === "radial") {
        const cx = width / 2;
        const cy = height / 2;
        const radius = Math.max(width, height) / 1.2;
        canvasGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      } else {
        // Linear angle
        const rad = ((grad.angle || 0) * Math.PI) / 180;
        const x1 = width / 2 - (Math.cos(rad) * width) / 2;
        const y1 = height / 2 - (Math.sin(rad) * height) / 2;
        const x2 = width / 2 + (Math.cos(rad) * width) / 2;
        const y2 = height / 2 + (Math.sin(rad) * height) / 2;
        canvasGrad = ctx.createLinearGradient(x1, y1, x2, y2);
      }

      const colors = grad.colors && grad.colors.length >= 2 ? grad.colors : ["#3D1E18", "#1A0B08"];
      colors.forEach((col, idx) => {
        canvasGrad.addColorStop(idx / (colors.length - 1), col);
      });

      ctx.fillStyle = canvasGrad;
      ctx.fillRect(0, 0, width, height);
    } else if (config.type === "image" && config.imageUrl) {
      ctx.fillStyle = config.color || "#000000";
      ctx.fillRect(0, 0, width, height);

      try {
        const img = await this.loadImage(config.imageUrl);
        ctx.save();

        if (config.blur > 0) {
          ctx.filter = `blur(${config.blur}px)`;
        }

        ctx.globalAlpha = Math.max(0, Math.min(1, config.imageOpacity ?? 1));

        // Aspect ratio cover algorithm
        const imgRatio = img.width / img.height;
        const canvasRatio = width / height;
        let renderW = width;
        let renderH = height;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
          renderW = height * imgRatio;
          offsetX = (width - renderW) / 2;
        } else {
          renderH = width / imgRatio;
          offsetY = (height - renderH) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
        ctx.restore();
      } catch (err) {
        console.warn("Failed to render background image:", err);
      }
    }

    // 2. Overlay Color & Opacity
    if (config.overlayOpacity > 0 && config.overlayColor) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, config.overlayOpacity));
      ctx.fillStyle = config.overlayColor;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }

    ctx.restore();
  }

  private loadImage(url: string): Promise<HTMLImageElement> {
    if (this.imageCache.has(url)) {
      return Promise.resolve(this.imageCache.get(url)!);
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        this.imageCache.set(url, img);
        resolve(img);
      };
      img.onerror = (e) => reject(e);
      img.src = url;
    });
  }

  public clearCache(): void {
    this.imageCache.clear();
  }
}