# OneSimpleSite context for ChatGPT

This is reference knowledge for conversations that prepare prompts for Claude Code. Behavioral rules belong in `PROJECT_INSTRUCTIONS.md`.

## Canonical repository

https://github.com/AbuFitz/onesimplesite-web-designer

The repository contains the portable Claude Code and Codex skill suite, specialist references, font catalogue, evaluation prompts, installers, repository-level Claude context, and the OneSimpleSite showcase.

## Vision

OneSimpleSite should be able to create the full range of public-facing websites:

- distinctive, conversion-led customer sites for barbers, builders, trades, clinics, cafés, hospitality, practices, and other service businesses;
- editorial, portfolio, campaign, ecommerce-frontend, SaaS-marketing, institutional, and multi-page sites;
- cinematic and social-media-worthy experiences using Three.js, WebGL, canvas, shaders, spatial typography, generative systems, and scroll choreography when those techniques belong to the subject.

The repeatable product is not a visual template. It is a standard of reasoning: evidence, buyer logic, subject-specific art direction, complete implementation, accessible responsive behavior, performance restraint, and proof in the rendered browser.

## Claude skills

### `$onesimplesite-web-designer`

The central builder. It researches, designs, builds, redesigns, and verifies production websites. It chooses a site archetype and creative gear, preserves working repositories, uses a fact ledger, builds complete states/routes, and verifies production output in the browser.

Creative gears:

- **Essential:** fast, credible, conversion-led sites with one modest signature move.
- **Editorial:** richer type, imagery, rhythm, composition, and storytelling.
- **Immersive:** one focused 3D, WebGL, canvas, generative, spatial-type, or scroll-film idea.
- **System:** structured multi-page, ecommerce, institutional, or SaaS-marketing work where components, content models, states, and governance matter most.

### `$onesimplesite-research`

Use independently for evidence-backed business, audience, competitor, local-market, content, SEO-language, reference-site, and integration research. Its output is a sourced fact ledger and decision-ready website brief.

### `$onesimplesite-skill-lab`

Use only to audit, test, rewrite, or improve the OneSimpleSite skills themselves using realistic evaluations and regression evidence.

## Truth discipline

Every consequential project item belongs to one state:

- **verified:** supplied or supported facts that may ship;
- **inferred:** reversible design or technical decisions;
- **provisional:** draft copy or assets awaiting approval;
- **blocking:** facts or access without which the requested outcome cannot work.

Claude must not invent testimonials, clients, certifications, awards, prices, addresses, availability, performance claims, integrations, or case-study results.

## Design and engineering principles

- Derive the art direction from the business, audience, market, material, personality, and appetite for spectacle.
- Pick one coherent creative thesis and one context-specific signature move.
- Avoid default AI patterns unless they have a specific job: generic centred hero, equal rounded-card wall, eyebrow above every section, purple glow, random glass, repeated pills, fake dashboards, decorative metrics, and vague premium copy.
- Choose fonts by voice, legibility, language support, licence, variable axes, and delivery cost.
- Use real or intentionally commissioned/generated assets with known provenance; do not fill layouts with random stock.
- Prefer the smallest capable stack. Preserve established repositories and make surgical changes.
- Establish a runnable spine before heavy scenes or polish.
- Keep essential content and conversion in semantic HTML rather than canvas.
- Design mobile deliberately; do not merely stack desktop columns.
- For immersive work, provide reduced-motion, mobile, non-WebGL, and loading fallbacks.
- Build the complete requested site, states, routes, and conversion paths—not only a hero.
- Run tests and a production build, then inspect desktop and mobile renders and critical journeys before completion.

The engineering behavior incorporates four Karpathy-inspired safeguards: think before coding, simplicity first, surgical changes, and goal-driven verification.

## Font system

The suite contains a catalogue of 31 open-source font families and a deterministic pairing helper. It stores metadata and package names rather than redistributing a large archive of binaries. Claude should still verify current package availability, glyph coverage, licence, subsets, axes, fallback metrics, and rendered specimens before client use.

## Showcase

The repository includes a Vite/React/Three.js OneSimpleSite business and capability site. It has a code-split 3D hero, live Essential/Editorial/Immersive mode switching, responsive navigation, reduced-motion behavior, labelled demonstration concepts, and a root Vercel configuration.

The showcase is a demonstration, not evidence of real customers or results. Its example email address is provisional and must be replaced before a real business launch.

## Centralisation

Ordinary guidance—art direction, client strategy, content, typography, architecture, integrations, motion, 3D, accessibility, performance, SEO, and QA—stays inside the central web-designer skill as selectively loaded references. Separate skills exist only for the independently triggered research and skill-improvement workflows.

## Current handoff expectation

Prompts prepared for Claude should invoke the correct skill, provide verified facts and labelled assumptions, translate references into design attributes, define the outcome and acceptance criteria, preserve repository constraints, and require production build plus rendered browser verification.

