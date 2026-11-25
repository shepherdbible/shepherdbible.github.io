import argparse
import json
import sqlite3
from pathlib import Path


def main():
    parser = argparse.ArgumentParser(description="Export each KJV verse as static JSON.")
    parser.add_argument("database", type=Path, help="Path to the KJV SQLite database")
    parser.add_argument("output", type=Path, help="Output directory, usually public/bible/kjv")
    args = parser.parse_args()

    db = sqlite3.connect(f"file:{args.database.resolve().as_posix()}?mode=ro", uri=True)
    db.row_factory = sqlite3.Row
    rows = db.execute("SELECT id, book, osis, human, chapter, verse, content, code, is_nt, tags FROM verses ORDER BY id").fetchall()
    story_rows = db.execute("SELECT title, book, osis, chapter, verse FROM stories ORDER BY id").fetchall()
    args.output.mkdir(parents=True, exist_ok=True)
    books = {}
    for row in rows:
        item = dict(row)
        reference = item.pop("book")
        item["reference"] = reference
        item["text"] = item.pop("content")
        item["id"] = reference
        item.pop("tags", None)
        book = item["osis"]
        chapter = item["chapter"]
        verse = item["verse"]
        target = args.output / book / str(chapter) / f"{verse}.json"
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(json.dumps(item, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")
        entry = books.setdefault(book, {"osis": book, "name": item["human"], "testament": "NT" if item["is_nt"] else "OT", "chapters": {}})
        entry["chapters"][str(chapter)] = max(verse, entry["chapters"].get(str(chapter), 0))

    headings = [
        {"title": title, "reference": reference, "osis": osis, "chapter": chapter, "verse": verse}
        for title, reference, osis, chapter, verse in story_rows
    ]
    (args.output / "headings.json").write_text(json.dumps(headings, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")
    manifest = {"translation": "KJV", "name": "King James Version", "verseCount": len(rows), "pathTemplate": "./{osis}/{chapter}/{verse}.json", "headingsPath": "./headings.json", "books": list(books.values())}
    (args.output / "index.json").write_text(json.dumps(manifest, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")
    print(f"Exported {len(rows)} verses to {args.output}")


if __name__ == "__main__":
    main()
