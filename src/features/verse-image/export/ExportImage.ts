import type { VerseImageState } from "../editor/EditorState";
import { CanvasRenderer } from "../canvas/CanvasRenderer";
import { type ExportOptions, DEFAULT_EXPORT_OPTIONS } from "./ExportOptions";

export class ExportImage {
  public static async exportDesign(
    state: VerseImageState,
    options: Partial<ExportOptions> = {}
  ): Promise<void> {
    const mergedOptions: ExportOptions = { ...DEFAULT_EXPORT_OPTIONS, ...options };

    // Create an offscreen export canvas to avoid showing selection outlines
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = state.width;
    exportCanvas.height = state.height;

    const exportRenderer = new CanvasRenderer(exportCanvas);

    // Render design cleanly without selection handles
    await exportRenderer.render(state, false);

    const mimeType = this.getMimeType(mergedOptions.format);
    const dataUrl = exportCanvas.toDataURL(mimeType, mergedOptions.quality);

    const filename = `${mergedOptions.fileName || "bible-verse"}.${mergedOptions.format}`;

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private static getMimeType(format: string): string {
    switch (format.toLowerCase()) {
      case "jpeg":
      case "jpg":
        return "image/jpeg";
      case "webp":
        return "image/webp";
      case "png":
      default:
        return "image/png";
    }
  }
}