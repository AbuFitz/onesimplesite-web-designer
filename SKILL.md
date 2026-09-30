---
name: onesimplesite-web-designer
description: Research, design, build, redesign, and verify distinctive production websites across local business, professional services, hospitality, portfolios, editorial, campaigns, ecommerce frontends, SaaS marketing, institutional sites, and immersive 3D experiences. Use whenever a website, landing page, multi-page marketing site, web portfolio, conversion page, or major visual redesign must feel bespoke and work in the browser. Do not use for isolated backend work or data-heavy product dashboards with no marketing or design scope.
---

# OneSimpleSite Web Designer

Build the website the subject deserves, not the website a generator usually makes. Combine business truth, buyer logic, art direction, implementation craft, and rendered verification. A quiet local-service site and a cinematic WebGL showpiece should both feel authored.

When the request concerns the OneSimpleSite business, canonical repository, suite architecture, roadmap, or how the skills fit together, read [references/onesimplesite-operating-context.md](references/onesimplesite-operating-context.md).

## Establish the evidence

Inspect the repository, live site, brief, brand files, copy, imagery, data, and existing behavior before choosing a direction. Preserve the current stack and working functionality unless a migration is requested or clearly justified.

Maintain a fact ledger:

- **verified:** supplied or supported facts that may ship;
- **inferred:** reversible design or technical decisions;
- **provisional:** clearly marked copy or assets awaiting approval;
- **blocking:** facts or access without which the requested outcome cannot work.

Never invent testimonials, clients, certifications, awards, prices, addresses, availability, performance claims, or case-study results. Ask only questions whose answers materially change truth, scope, architecture, or launch readiness. For business, audience, competitor, local-market, content, or reference-site research, read [references/research-discovery.md](references/research-discovery.md).

## Use disciplined judgment

- Surface assumptions and ambiguity before they become code or public copy.
- Choose the simplest implementation capable of delivering the approved idea.
- Make surgical edits in existing repositories; do not refactor unrelated code.
- Translate the request into observable success criteria and loop until they pass.
- Prefer evidence over confidence. If a fact cannot be verified, label it rather than smoothing over the gap.

## Route the project

Choose a site archetype before choosing components. Read [references/site-archetypes.md](references/site-archetypes.md) for the relevant archetype and its trust model, information architecture, and conversion logic.

Choose one creative gear:

- **Essential:** fast, credible, conversion-led sites for trades, barbers, clinics, cafés, practices, hospitality, and small companies. Use one modest signature move.
- **Editorial:** richer type, imagery, rhythm, and storytelling for studios, portfolios, culture, premium services, campaigns, and publications.
- **Immersive:** a focused WebGL, canvas, 3D, spatial-type, generative, or scroll-film idea for launches and attention-led brands.
- **System:** structured multi-page, ecommerce, institutional, or SaaS marketing sites where reusable components, content models, states, and governance matter most.

Complexity follows the concept, not ambition alone. Keep conversion-critical UI simple even when the surrounding experience is experimental.

## Write the internal design read

Before substantial implementation, record a compact internal brief:

1. business promise and primary audience;
2. audience need, fear, objection, and desired proof;
3. archetype, primary conversion, and critical journeys;
4. creative thesis linking the visual idea to the subject;
5. design DNA: type, palette, geometry, imagery, spacing, and motion;
6. one signature move and its mobile and reduced-motion behavior;
7. verified content, provisional content, missing assets, and risks;
8. technical approach and measurable completion criteria.

Read [references/art-direction.md](references/art-direction.md) when creating or repairing the visual language. Read [references/typography-fonts.md](references/typography-fonts.md) before selecting or acquiring type. Do not expose the internal brief unless it helps a review or resolves a consequential choice.

## Choose the smallest capable stack

Respect the existing project. For net-new work, choose from the outcome backward:

- semantic HTML, CSS, and JavaScript for small durable sites;
- Vite with React, Vue, Svelte, or vanilla modules for interactive frontends;
- Next.js, Astro, Nuxt, SvelteKit, or an established framework when routing, content, rendering, integrations, or the team justify it;
- CSS and SVG before canvas; Canvas 2D before WebGL; Three.js or React Three Fiber only when spatial rendering materially supports the concept;
- a CMS, commerce platform, booking system, or backend only when ownership or operations require one.

Do not replace an established stack because another is fashionable. Verify every dependency before importing it. Read [references/stack-architecture.md](references/stack-architecture.md) for project selection, content models, integrations, forms, and maintainability.

## Build content and visual system together

Map the page or sitemap around real decisions: what this is, who it is for, why it is credible, what the experience or process is, and what happens next. Read [references/client-sites.md](references/client-sites.md) for conversion sites and [references/content-copy.md](references/content-copy.md) for page planning, voice, proof, and provisional copy.

Create a small token system for color roles, type roles, spacing, radii, borders, shadows, layers, motion, and containers. Components should express the chosen direction rather than force every site into the same library defaults.

Avoid unexamined generator habits: centered hero formulas, walls of equal rounded cards, eyebrow labels above every section, purple glow, gradient headlines, random glass, repeated pills, icon circles, fake dashboards, decorative statistics, and vague premium language. These are warnings, not universal bans; use a pattern only when it performs a specific job in this design.

## Treat typography as infrastructure

Choose fonts by voice, legibility, language coverage, licence, variable axes, and delivery cost. Do not repeatedly default to the same fashionable pair. Use the bundled font catalogue and picker when useful:

```bash
node scripts/font-pair.mjs --list
node scripts/font-pair.mjs --mood "industrial warm"
node scripts/font-pair.mjs --archetype hospitality
```

Prefer licensed project fonts or open-source families with retained licence information. Use WOFF2, load only needed families, axes, and scripts, define fallbacks, and control layout shift. Do not bundle or redistribute commercial font files without the relevant licence.

## Art-direct assets and interaction

Use genuine client work first. When assets are missing, define the required shot, illustration, model, texture, or graphic composition before sourcing or generating it. Track origin, licence, consent, and permitted use. Do not ship random stock or misleading imagery merely to fill boxes.

For Editorial or Immersive work, read [references/immersive-web.md](references/immersive-web.md). For interaction details, read [references/motion-interaction.md](references/motion-interaction.md). Every animation must communicate hierarchy, narrative, feedback, or state. A canvas is enhancement, never the only carrier of essential content.

## Implement complete states

Establish a runnable spine early: entry point, global styles, semantic structure, and a passing production build. Keep it runnable while adding heavy scenes, procedural assets, and polish.

Build the requested site, not just a hero or style tile. Cover the states that exist in scope: navigation, hover, focus, active, loading, success, error, empty, disabled, menu open, reduced motion, slow media, missing data, and non-JavaScript or non-WebGL fallbacks where material.

Compose mobile intentionally rather than stacking desktop columns. Preserve reading order, tap reach, image crops, form ergonomics, CTA priority, and the signature idea.

## Verify in the browser

Run the repository's build, lint, typecheck, and tests. Preview the production build. Inspect the actual result at mobile and wide desktop widths; add tablet, very narrow, tall, and ultrawide views when the composition changes.

Read [references/quality-gate.md](references/quality-gate.md) and [references/accessibility-performance-seo.md](references/accessibility-performance-seo.md). Exercise every critical route and conversion path. Review screenshots for comprehension, trust, composition, typography, cropping, rhythm, and empty space. Fix the largest visible weakness first and repeat.

Do not call a site complete while it contains dead links, fake proof, broken forms, console errors, missing fallbacks, obvious overflow, or an untested production path.

## Deliver and learn

Report the direction, implemented scope, verification evidence, provisional material, and launch dependencies. Distinguish implemented, verified, assumed, and blocked.

When improving this skill itself, read [references/skill-evolution.md](references/skill-evolution.md), use the prompts in `evals/prompts.json`, and run `node scripts/audit-skill.mjs`. Generalize from failures; do not accumulate brittle rules for one example.
