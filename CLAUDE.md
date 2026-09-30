# OneSimpleSite repository context

This repository is the canonical source for the OneSimpleSite website-building system:

https://github.com/AbuFitz/onesimplesite-web-designer

Read `SKILL.md` before changing the system. Load only the references relevant to the task. This file supplies repository context; the skill remains the source of truth for website behavior.

## Mission

OneSimpleSite must build the full range of public-facing websites:

- clean, distinctive customer sites for barbers, builders, trades, clinics, hospitality, practices, and other service businesses;
- editorial, portfolio, campaign, ecommerce-frontend, SaaS-marketing, and institutional sites;
- cinematic, social-media-worthy experiences using 3D, WebGL, canvas, spatial typography, generative systems, and scroll choreography when the subject justifies them.

The aim is not one recognisable house style. The aim is one recognisable standard of thought: business truth, subject-specific art direction, useful conversion, strong implementation, and proof in the rendered browser.

## System architecture

Keep the system centralised in this repository.

- `SKILL.md` — main `onesimplesite-web-designer` orchestrator.
- `references/` — conditional specialist guidance.
- `assets/font-catalog.json` — open-font discovery data; it does not redistribute a large font archive.
- `scripts/font-pair.mjs` — varied font discovery and pairing helper.
- `evals/prompts.json` — behavioural and negative-trigger evaluation set.
- `skills/onesimplesite-research/` — separate only because research-only work benefits from precise invocation.
- `skills/onesimplesite-skill-lab/` — separate only because skill evaluation and rewriting are not ordinary client builds.
- `showcase/` — the OneSimpleSite business/capability website.
- `chatgpt/` — ChatGPT Project instructions and source context for conversationally preparing Claude Code prompts.
- `scripts/install.ps1` and `scripts/install.sh` — install the suite for Claude Code and/or Codex.

Do not split ordinary design, content, typography, accessibility, SEO, performance, motion, 3D, or architecture guidance into more skills unless independent invocation would materially improve routing. Prefer a focused reference inside the main skill.

## Non-negotiable behavior

- Maintain a fact ledger: verified, inferred, provisional, and blocking.
- Do not invent testimonials, clients, credentials, prices, addresses, awards, statistics, case-study outcomes, or integrations.
- Surface consequential assumptions and ambiguity.
- Choose the simplest implementation capable of the creative thesis.
- Make surgical changes in existing repositories.
- Establish a runnable spine early and keep it working.
- Use one coherent, subject-specific art direction and one meaningful signature move.
- Treat fonts, imagery, motion, 3D, accessibility, SEO, and performance as system decisions rather than final decoration.
- Keep essential content and conversion outside canvas/WebGL and provide mobile, reduced-motion, and capability fallbacks.
- Build the requested site completely, including relevant states and routes.
- Run a production build and inspect real desktop and mobile renders before claiming completion.

These principles include the useful core of the Karpathy-inspired safeguards: think before coding, simplicity first, surgical changes, and goal-driven verification.

## Current state

The repository currently includes:

- Essential, Editorial, Immersive, and System creative gears;
- archetype routing for service, professional, hospitality, portfolio, campaign, editorial, ecommerce, SaaS, institutional, and immersive work;
- evidence-led research and anti-hallucination guidance;
- content, art direction, typography, font licensing, stack, integration, motion, 3D, accessibility, performance, SEO, and browser-QA references;
- a catalogue of 31 open-source font families and a tested picker;
- realistic evaluation prompts and a structural audit script;
- a complete Vite/React/Three.js showcase with responsive navigation, three live creative modes, reduced-motion support, code-split Three.js, and Vercel configuration;
- validated Claude and Codex installation scripts.

The showcase uses clearly labelled demonstration concepts. Its example email address is provisional and must be replaced with the approved OneSimpleSite contact before a real launch.

## Working in this repository

Before changing the suite:

1. Read the selected skill and every routed resource relevant to the change.
2. Preserve the current version as the behavioural baseline.
3. Trace changes to a real failure, requested capability, source, or repeated workflow.
4. Keep shared routing concise and move conditional depth into references.
5. Run `node scripts/audit-skill.mjs`.
6. Validate all three skill folders with the available skill validator.
7. If the showcase changes, run its production build and inspect desktop and mobile output.
8. Sync installed copies only when explicitly requested; do not open, modify, or interfere with unrelated Claude sessions.

Keep the ChatGPT prompt-director files aligned with the suite when the mission, skill names, creative gears, or handoff contract materially change. Do not duplicate the entire Claude skill into ChatGPT instructions; keep behavioral instructions compact and place reference knowledge in the project source file.
