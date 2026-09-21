import type { VerseImageState, TextElement } from "../editor/EditorState";
import { TEMPLATES, type VerseTemplate } from "./templates";

export class TemplateLoader {
  public static getTemplates(): VerseTemplate[] {
    return TEMPLATES;
  }

  public static applyTemplate(templateId: string, currentState: VerseImageState): VerseImageState {
    const template = TEMPLATES.find((t) => t.id === templateId);
    if (!template) return currentState;

    const newState: VerseImageState = JSON.parse(JSON.stringify(currentState));

    // Apply background preset
    if (template.presetState.background) {
      newState.background = JSON.parse(JSON.stringify(template.presetState.background));
    }

    // Adapt font styling based on template themes
    if (templateId === "minimal") {
      newState.elements.forEach((elem) => {
        if (elem.type === "text") {
          const textElem = elem as TextElement;
          textElem.color = "#1A1A1A";
          textElem.fontFamily = "Inter";
          textElem.shadowBlur = 0;
          if (textElem.isReference) {
            textElem.color = "#800020";
          }
        }
      });
    } else if (templateId === "classic") {
      newState.elements.forEach((elem) => {
        if (elem.type === "text") {
          const textElem = elem as TextElement;
          textElem.color = "#FAF7F2";
          textElem.fontFamily = "Merriweather";
          textElem.shadowBlur = 8;
          textElem.shadowColor = "rgba(0,0,0,0.5)";
          if (textElem.isReference) {
            textElem.color = "#D4AF37";
          }
        }
      });
    } else if (templateId === "elegant-gold") {
      newState.elements.forEach((elem) => {
        if (elem.type === "text") {
          const textElem = elem as TextElement;
          textElem.color = "#F0E6D2";
          textElem.fontFamily = "Cinzel";
          if (textElem.isReference) {
            textElem.color = "#D4AF37";
          }
        }
      });
    } else if (templateId === "parchment-warm") {
      newState.elements.forEach((elem) => {
        if (elem.type === "text") {
          const textElem = elem as TextElement;
          textElem.color = "#2A1810";
          textElem.fontFamily = "Libre Baskerville";
          textElem.shadowBlur = 0;
          if (textElem.isReference) {
            textElem.color = "#800020";
          }
        }
      });
    }

    return newState;
  }
}