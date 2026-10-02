
export interface DailyVerse {
  book: string;
  words: string;
  version: string;
  date: string;
  date_updated: string;
  tags: string;
  row_number: number;
}

export class DailyVerseApi {
  private static readonly BASE_URL = import.meta.env.VITE_DAILY_API_URL;

  /**
   * Get one random verse.
   * Uses the cheap random request.
   */
  static async getRandomVerse(): Promise<DailyVerse> {
    const url = new URL(this.BASE_URL);
    url.searchParams.set("action", "random");

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(
        `Failed to get random verse: ${response.status}`
      );
    }

    return await response.json();
  }

  /**
   * Get a specific verse by Google Sheet row number.
   */
  static async getVerseByRow(rowNumber: number): Promise<DailyVerse> {
    const url = new URL(this.BASE_URL);
    url.searchParams.set("row_number", rowNumber.toString());

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(
        `Failed to get verse: ${response.status}`
      );
    }

    return await response.json();
  }
}
