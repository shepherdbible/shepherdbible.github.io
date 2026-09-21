import type {
  VerseImageState,
  VerseImageElement,
  BackgroundConfig,
} from "./EditorState";

export type EditorEventMap = {
  element_selected: {
    elementId: string | null;
  };

  state_changed: {
    state: VerseImageState;
  };

  text_changed: {
    elementId: string;
    text: string;
  };

  background_changed: {
    background: BackgroundConfig;
  };

  template_applied: {
    templateId: string;
  };

  history_changed: {
    canUndo: boolean;
    canRedo: boolean;
  };

  element_updated: {
    element: VerseImageElement;
  };

  render_requested: Record<string, never>;
};

export type EventCallback<T> = (data: T) => void;

export class EditorEvents {
  /**
   * Internal listener storage.
   *
   * The public on/off/emit methods remain strongly typed.
   * `unknown` is used internally because each event has a different
   * payload type.
   */
  private listeners = new Map<
    keyof EditorEventMap,
    Set<EventCallback<unknown>>
  >();

  /**
   * Subscribe to an editor event.
   */
  public on<K extends keyof EditorEventMap>(
    event: K,
    callback: EventCallback<EditorEventMap[K]>
  ): void {
    let eventListeners = this.listeners.get(event);

    if (!eventListeners) {
      eventListeners = new Set<EventCallback<unknown>>();
      this.listeners.set(event, eventListeners);
    }

    eventListeners.add(
      callback as EventCallback<unknown>
    );
  }

  /**
   * Unsubscribe from an editor event.
   */
  public off<K extends keyof EditorEventMap>(
    event: K,
    callback: EventCallback<EditorEventMap[K]>
  ): void {
    const eventListeners = this.listeners.get(event);

    if (!eventListeners) {
      return;
    }

    eventListeners.delete(
      callback as EventCallback<unknown>
    );

    if (eventListeners.size === 0) {
      this.listeners.delete(event);
    }
  }

  /**
   * Emit an editor event.
   */
  public emit<K extends keyof EditorEventMap>(
    event: K,
    data: EditorEventMap[K]
  ): void {
    const eventListeners = this.listeners.get(event);

    if (!eventListeners) {
      return;
    }

    for (const callback of eventListeners) {
      callback(data);
    }
  }

  /**
   * Remove every registered listener.
   */
  public removeAll(): void {
    this.listeners.clear();
  }
}