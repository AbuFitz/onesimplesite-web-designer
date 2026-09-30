# Improving the OneSimpleSite skill

Use this only when the task is to improve the skill itself.

## Loop

1. Preserve the current version as the baseline.
2. Select varied prompts from `evals/prompts.json`; add a prompt only for a genuinely uncovered behavior.
3. Run comparable builds or planning responses with the baseline and candidate skill in isolated workspaces.
4. Evaluate observable outcomes: truth discipline, completeness, originality, responsiveness, accessibility, build success, visual coherence, and unnecessary complexity.
5. Inspect the process as well as the final result. Look for repeated confusion, wasted work, unsupported claims, and helpers recreated across runs.
6. Rewrite the smallest instruction or resource that addresses the general failure.
7. Run `node scripts/audit-skill.mjs`, validate frontmatter, rerun the affected evaluations, and inspect real rendered output.

## Improvement principles

- Generalise from evidence; do not overfit one barber, builder, or 3D demo.
- Explain why a rule matters so the agent can adapt it.
- Keep routing in `SKILL.md` and conditional detail in references.
- Turn repeated deterministic work into a script or data asset.
- Remove instructions that add tokens without changing decisions.
- Preserve user intent, existing invocation behavior, and unrelated files.
- Treat strong words such as “always” and “never” as signals to justify or narrow the rule.

## Trigger quality

The frontmatter description should cover real intended requests while excluding adjacent tasks such as isolated backend changes. Test positive and negative prompts. A skill that fires everywhere competes with more relevant skills; a skill that never fires is invisible.

## Provenance

Record substantial external inspiration in the README. Do not copy another skill wholesale. This suite incorporates general patterns from Anthropic's skill-creator, the Taste Skill, professional website workflow suites, and Karpathy-inspired coding guidelines while keeping the instructions specific to OneSimpleSite's workflow.

