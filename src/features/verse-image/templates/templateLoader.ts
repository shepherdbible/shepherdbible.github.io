import type {
  VerseImageState,
  TextElement,
} from "../editor/EditorState";

import {
  TEMPLATES,
  type VerseTemplate,
} from "./templates";

export class TemplateLoader {
  public static getTemplates(): VerseTemplate[] {
    return TEMPLATES;
  }

  public static applyTemplate(
    templateId: string,
    currentState: VerseImageState
  ): VerseImageState {
    const template = TEMPLATES.find(
      (t) => t.id === templateId
    );

    if (!template) {
      return currentState;
    }

    // Deep clone so we never mutate the original state.
    const newState: VerseImageState =
      JSON.parse(
        JSON.stringify(currentState)
      );

    // ==========================================
    // Background
    // ==========================================

    if (template.presetState.background) {
      newState.background =
        JSON.parse(
          JSON.stringify(
            template.presetState.background
          )
        );
    }

    // ==========================================
    // Canvas settings
    // ==========================================

    if (
      template.presetState.width !==
      undefined
    ) {
      newState.width =
        template.presetState.width;
    }

    if (
      template.presetState.height !==
      undefined
    ) {
      newState.height =
        template.presetState.height;
    }

    if (
      template.presetState.padding !==
      undefined
    ) {
      newState.padding =
        template.presetState.padding;
    }

    if (
      template.presetState.preset !==
      undefined
    ) {
      newState.preset =
        template.presetState.preset;
    }

    // ==========================================
    // Text styles
    // ==========================================

    newState.elements =
      newState.elements.map((element) => {
        if (element.type !== "text") {
          return element;
        }

        const textElement =
          element as TextElement;

        // Reference gets its own styling.
        if (
          textElement.isReference &&
          template.referenceStyle
        ) {
          return {
            ...textElement,
            ...template.referenceStyle,
          };
        }

        // Normal text gets the main template style.
        if (template.textStyle) {
          return {
            ...textElement,
            ...template.textStyle,
          };
        }

        return textElement;
      });

    return newState;
  }
}