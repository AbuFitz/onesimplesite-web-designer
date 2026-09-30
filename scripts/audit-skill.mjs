#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillPath = resolve(root, "SKILL.md");
const skill = readFileSync(skillPath, "utf8");
const errors = [];

if (!skill.startsWith("---\n")) errors.push("SKILL.md is missing YAML frontmatter.");
if (!/^name: onesimplesite-web-designer$/m.test(skill)) errors.push("Unexpected or missing skill name.");
if (!/^description: .{80,}$/m.test(skill)) errors.push("Description is missing or not discriminating enough.");

const links = [...skill.matchAll(/\]\(([^)]+)\)/g)]
  .map((match) => match[1])
  .filter((link) => !/^https?:/.test(link));
for (const link of links) {
  if (!existsSync(resolve(root, link))) errors.push(`Missing referenced resource: ${link}`);
}

const catalogPath = resolve(root, "assets/font-catalog.json");
try {
  const catalog = JSON.parse(readFileSync(catalogPath, "utf8"));
  if (!Array.isArray(catalog.families) || catalog.families.length < 20) {
    errors.push("Font catalogue should contain at least 20 useful families.");
  }
  const names = catalog.families.map((font) => font.name);
  if (new Set(names).size !== names.length) errors.push("Font catalogue contains duplicate family names.");
} catch (error) {
  errors.push(`Font catalogue is invalid: ${error.message}`);
}

for (const required of ["evals/prompts.json", "scripts/font-pair.mjs", "agents/openai.yaml"]) {
  if (!existsSync(resolve(root, required))) errors.push(`Missing required suite resource: ${required}`);
}

if (errors.length) {
  console.error(errors.map((error) => `FAIL: ${error}`).join("\n"));
  process.exit(1);
}

console.log(`PASS: ${links.length} local references resolve; font catalogue and suite resources are valid.`);

