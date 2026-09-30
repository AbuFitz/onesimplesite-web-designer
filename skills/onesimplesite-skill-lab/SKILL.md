---
name: onesimplesite-skill-lab
description: Audit, test, rewrite, and improve the OneSimpleSite web-design skills using realistic prompts, rendered outputs, trigger checks, and regression evidence. Use when editing SKILL.md files, improving skill quality, reducing hallucination or bloat, tuning invocation descriptions, or evaluating whether skill changes produce better websites. Do not use for ordinary client website builds.
---

# OneSimpleSite Skill Lab

Improve the skill from observed behavior rather than adding rules by instinct.

## Preserve the baseline

Read the entire selected `SKILL.md` and every resource it routes to for the behavior under test. Save the current version as the baseline. Identify the intended triggers, exclusions, outputs, and non-negotiable invariants.

## Test varied behavior

Use realistic prompts spanning local service, editorial/hospitality, immersive 3D, regulated redesign, commerce/system work, and negative prompts that should not trigger the skill. Run candidates in isolated workspaces. For visual work, inspect production builds and screenshots rather than grading text alone.

Evaluate:

- fact discipline and visible placeholders;
- useful assumptions versus avoidable questions;
- completeness and runnable output;
- subject-specific art direction;
- responsive and accessible behavior;
- conversion and content logic;
- performance and dependency restraint;
- surgical treatment of existing repositories;
- trigger precision;
- complexity, wasted steps, and repeated failure modes.

## Rewrite carefully

Trace each proposed change to evidence from a run, source, or recurring workflow. Fix the smallest general instruction that addresses the failure. Put shared routing in `SKILL.md`, conditional depth in references, repeated deterministic work in scripts, and reusable output material in assets.

Explain the reason behind rules. Avoid universal bans when context matters. Remove instructions that do not change decisions. Do not copy third-party skills wholesale; record provenance and adapt ideas to OneSimpleSite's actual workflow.

## Verify

Validate frontmatter, local links, scripts, and sample data. Re-run the affected test cases and at least one negative trigger. Compare the candidate to the baseline. Keep the candidate only if it improves meaningful behavior without creating larger regressions.

Report the evidence, change, verification, remaining uncertainty, and next evaluation—not merely that the file was rewritten.

