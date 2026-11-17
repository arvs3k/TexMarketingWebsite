#!/usr/bin/env node
/**
 * Rebuilds the placeholder table in CONTENT-TODO.md from `CONTENT-TODO(id): text`
 * tags in src/. Run `npm run content:todo` after adding or resolving a tag.
 * `npm run content:check` exits 1 while any tag remains (useful before go-live).
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const check = process.argv.includes("--check");
const START = "<!-- content-todo:start -->";
const END = "<!-- content-todo:end -->";

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : /\.(ts|tsx|css|mjs)$/.test(name) ? [p] : [];
  });
}

const rows = [];
for (const file of walk(join(root, "src"))) {
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      const m = line.match(/CONTENT-TODO\(([\w-]+)\):\s*(.+?)\s*(\*\/)?$/);
      if (m) rows.push({ id: m[1], text: m[2], where: `${relative(root, file)}:${i + 1}` });
    });
}
rows.sort((a, b) => a.where.localeCompare(b.where, "en", { numeric: true }));

if (check) {
  if (rows.length) {
    console.error(`${rows.length} content placeholders remain:\n` + rows.map((r) => `  ${r.where}  ${r.id}`).join("\n"));
    process.exit(1);
  }
  console.log("No content placeholders remain.");
  process.exit(0);
}

const table = [
  "| # | ID | What to supply | Where it goes |",
  "|---|---|---|---|",
  ...rows.map((r, i) => `| ${i + 1} | \`${r.id}\` | ${r.text.replace(/\|/g, "\\|")} | \`${r.where}\` |`),
].join("\n");

const path = join(root, "CONTENT-TODO.md");
const doc = readFileSync(path, "utf8");
const a = doc.indexOf(START);
const b = doc.indexOf(END);
if (a < 0 || b < 0) throw new Error("CONTENT-TODO.md is missing the content-todo markers");
writeFileSync(path, `${doc.slice(0, a + START.length)}\n${table}\n${doc.slice(b)}`);
console.log(`CONTENT-TODO.md updated: ${rows.length} placeholders.`);
