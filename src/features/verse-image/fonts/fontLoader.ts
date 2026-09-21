import { FONTS, type FontDefinition } from "./fonts";

class FontLoader {
  private loadedFonts = new Set<string>();
  private loadingPromises = new Map<string, Promise<boolean>>();

  public async loadFont(fontFamily: string): Promise<boolean> {
    if (this.loadedFonts.has(fontFamily)) {
      return true;
    }

    if (this.loadingPromises.has(fontFamily)) {
      return this.loadingPromises.get(fontFamily)!;
    }

    const fontDef = FONTS.find(
      (f) => f.family.toLowerCase() === fontFamily.toLowerCase()
    );

    const promise = (async () => {
      try {
        if (fontDef) {
          const linkId = `google-font-${fontDef.id}`;
          if (!document.getElementById(linkId)) {
            const link = document.createElement("link");
            link.id = linkId;
            link.rel = "stylesheet";
            link.href = `https://fonts.googleapis.com/css2?family=${fontDef.googleFontQuery}&display=swap`;
            document.head.appendChild(link);
          }
        }

        // Use FontFaceObserver API or document.fonts check
        if ("fonts" in document) {
          await document.fonts.load(`16px "${fontFamily}"`);
        }

        this.loadedFonts.add(fontFamily);
        return true;
      } catch (err) {
        console.warn(`Font load warning for "${fontFamily}":`, err);
        // Fallback gracefully without throwing
        this.loadedFonts.add(fontFamily);
        return false;
      } finally {
        this.loadingPromises.delete(fontFamily);
      }
    })();

    this.loadingPromises.set(fontFamily, promise);
    return promise;
  }

  public isLoaded(fontFamily: string): boolean {
    return this.loadedFonts.has(fontFamily);
  }

  public getAvailableFonts(): FontDefinition[] {
    return FONTS;
  }
}

export const fontLoader = new FontLoader();