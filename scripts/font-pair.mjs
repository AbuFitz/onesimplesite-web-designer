#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const catalog = JSON.parse(readFileSync(resolve(here, "../assets/font-catalog.json"), "utf8"));
const args = process.argv.slice(2);

const valueAfter = (flag) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1]?.toLowerCase() : undefined;
};

if (args.includes("--list")) {
  for (const font of catalog.families) {
    console.log(`${font.name.padEnd(22)} ${font.roles.join(", ").padEnd(20)} ${font.moods.join(", ")}`);
  }
  process.exit(0);
}

const terms = `${valueAfter("--mood") ?? ""} ${valueAfter("--archetype") ?? ""}`
  .split(/[^a-z0-9-]+/)
  .filter(Boolean);

if (!terms.length) {
  console.error("Use --list, --mood \"warm industrial\", or --archetype hospitality.");
  process.exit(1);
}

const score = (font) => {
  const tags = [...font.moods, ...font.archetypes].map((item) => item.toLowerCase());
  return terms.reduce((total, term) => total + tags.filter((tag) => tag.includes(term) || term.includes(tag)).length, 0);
};

const ranked = catalog.families
  .map((font) => ({ ...font, score: score(font) }))
  .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

const display = ranked.find((font) => font.roles.includes("display"));
const body = ranked.find((font) => font.roles.includes("body") && font.name !== display?.name);

if (!display || !body || (display.score === 0 && body.score === 0)) {
  console.error(`No strong catalogue match for: ${terms.join(" ")}. Use --list and choose deliberately.`);
  process.exit(2);
}

console.log(`Display: ${display.name} (${display.moods.join(", ")})`);
console.log(`Body:    ${body.name} (${body.moods.join(", ")})`);
console.log(`Install: npm install ${display.package} ${body.package}`);
console.log("Imports:");
console.log(`  import \"${display.package}\";`);
console.log(`  import \"${body.package}\";`);
console.log("Verify the current packages, required subsets/axes, rendered specimen, and OFL licences before shipping.");

