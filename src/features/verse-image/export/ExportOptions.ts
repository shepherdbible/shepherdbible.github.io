export type ExportFormat = "png" | "jpeg" | "jpg" | "webp";

export interface ExportOptions {
  format: ExportFormat;
  quality: number;
  fileName: string;
}

export const DEFAULT_EXPORT_OPTIONS: ExportOptions = {
  format: "png",
  quality: 0.95,
  fileName: "bible-verse",
};