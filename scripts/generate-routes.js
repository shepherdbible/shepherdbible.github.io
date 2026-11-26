import fs from "node:fs";
import path from "node:path";

const docsDir = path.resolve("docs");
const sourceFile = path.join(docsDir, "index.html");

const routes = [
  "about",
  "faq",
  "community",
  "changelog",
  "privacy",
  "editor",
  "books",
  "support",
  "store",
  "brotherly",
  "stories",
  "bible",
  "reading",
];

const bibleDataDir = path.resolve("public", "bible");
const bibleVersions = fs.existsSync(bibleDataDir)
  ? fs.readdirSync(bibleDataDir, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name)
  : ["kjv"];
for (const version of bibleVersions) {
  routes.push(`bible/${version}`, `reading/${version}`);
}

if (!fs.existsSync(sourceFile)) {
  throw new Error("docs/index.html does not exist.");
}

const html = fs.readFileSync(sourceFile, "utf8");

for (const route of routes) {
  const routeDir = path.join(docsDir, route);
  const routeFile = path.join(routeDir, "index.html");

  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(routeFile, html, "utf8");

  console.log(`Generated: docs/${route}/index.html`);
}
