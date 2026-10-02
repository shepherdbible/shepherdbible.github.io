export interface DailyVerse {
  book: string;
  words: string;
  version: string;
  date: string;
  date_updated: string;
  tags: string;
  row_number: number;
}

export interface BibleApiVerse {
  number: number;
  text: string;
}

export class DailyVerseApi {
  private static readonly BASE_URL =
    import.meta.env.VITE_DAILY_API_URL;

  private static readonly BIBLE_API_URL =
    "https://bible.helloao.org/api";

  /**
   * Get one random verse from our Google Apps Script.
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

  /**
   * Get a Bible chapter from the Free Use Bible API.
   */
  static async getChapter(
    translation: string,
    book: string,
    chapter: number
  ): Promise<BibleApiVerse[]> {
    const url =
      `${this.BIBLE_API_URL}/` +
      `${translation}/` +
      `${book}/` +
      `${chapter}.simple.json`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to get Bible chapter: ${response.status}`
      );
    }

    const data = await response.json();

    return data.chapter.content
      .filter((item: any) => item.type === "verse")
      .map((item: any) => ({
        number: item.number,
        text: item.text,
      }));
  }

  /**
   * Convert verses to HTML with superscript verse numbers.
   */
  static versesToHtml(verses: BibleApiVerse[]): string {
    return verses
      .map(
        verse =>
          `<sup>${verse.number}</sup> ${verse.text}`
      )
      .join(" ");
  }
}