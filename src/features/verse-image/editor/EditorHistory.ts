import type { VerseImageState } from "./EditorState";

export class EditorHistory {
  private undoStack: VerseImageState[] = [];
  private redoStack: VerseImageState[] = [];
  private readonly maxHistorySize: number;

  constructor(maxHistorySize: number = 50) {
    this.maxHistorySize = maxHistorySize;
  }

  private deepClone<T>(obj: T): T {
    if (typeof structuredClone === "function") {
      try {
        return structuredClone(obj);
      } catch {
        // Fall back to JSON if structuredClone fails
      }
    }
    return JSON.parse(JSON.stringify(obj));
  }

  public push(state: VerseImageState): void {
    const snapshot = this.deepClone(state);
    this.undoStack.push(snapshot);
    if (this.undoStack.length > this.maxHistorySize) {
      this.undoStack.shift();
    }
    // Clear redo history when a new action is recorded
    this.redoStack = [];
  }

  public undo(currentState: VerseImageState): VerseImageState | null {
    if (!this.canUndo()) return null;
    const previousState = this.undoStack.pop()!;
    this.redoStack.push(this.deepClone(currentState));
    return this.deepClone(previousState);
  }

  public redo(currentState: VerseImageState): VerseImageState | null {
    if (!this.canRedo()) return null;
    const nextState = this.redoStack.pop()!;
    this.undoStack.push(this.deepClone(currentState));
    return this.deepClone(nextState);
  }

  public canUndo(): boolean {
    return this.undoStack.length > 0;
  }

  public canRedo(): boolean {
    return this.redoStack.length > 0;
  }

  public clear(): void {
    this.undoStack = [];
    this.redoStack = [];
  }
}