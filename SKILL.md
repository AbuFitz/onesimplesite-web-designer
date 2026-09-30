---
name: onesimplesite-web-designer
description: Design, build, or redesign distinctive, conversion-focused websites for OneSimpleSite clients. Use for local-business, service-business, professional-practice, hospitality, portfolio, and small-company marketing sites where the result must feel bespoke rather than like a generic AI template. Do not use for dashboards, product application interfaces, or isolated backend work.
---

# OneSimpleSite Web Designer

Build a credible client website with a clear point of view, real business substance, and production-ready responsive behavior. The skill must handle both restrained everyday client sites and highly experimental showpieces. “Premium” is not a visual style: derive the design from the client’s market, offer, audience, location, personality, proof, and appetite for spectacle.

## Start with evidence

Inspect the repository, current site, supplied brief, brand files, images, and copy before proposing a direction. Preserve the existing stack and working functionality unless the user asks for a migration.

Identify what is known and what is missing:

- business name, service, audience, geography, and primary conversion;
- differentiators and proof: work, reviews, credentials, outcomes, team, process;
- required pages, contact details, integrations, legal content, and SEO targets;
- brand assets, image rights, tone, constraints, and reference sites.

Never invent factual claims, testimonials, certifications, awards, prices, addresses, availability, or performance numbers. If critical facts are absent, ask only the questions that block a responsible build. Otherwise use concise, visibly provisional copy and record what the client must replace.

## Select the creative gear

Choose from three gears based on the brief. Do not make the user translate taste into technical terms.

- **Essential:** crisp, distinctive, fast client sites for businesses such as barbers, builders, trades, clinics, cafés, and professional services. Prioritize clarity, trust, local relevance, mobile conversion, and one modest signature detail.
- **Editorial:** higher-concept layouts, richer art direction, crafted transitions, expressive type, and more ambitious image treatment for brands that benefit from storytelling.
- **Immersive:** portfolio-grade experiences using WebGL, 3D models, shaders, canvas, scroll choreography, spatial type, or video-like sequencing when the user asks for something cinematic, experimental, “mad,” or built to stop attention.

Default to Essential for ordinary commercial briefs, but never make it bland. Move up a gear when the user asks for visual ambition or the brand and audience justify it. For mixed briefs, keep conversion-critical UI simple while concentrating spectacle into one or two hero moments.

For Editorial or Immersive work, read [immersive-web.md](references/immersive-web.md). An immersive page still needs semantic content, a usable mobile composition, and a non-WebGL fallback.

## Choose one coherent art direction

Before coding, write a short internal design brief containing:

1. **Business promise:** the concrete outcome visitors are buying.
2. **Audience state:** what they fear, need to understand, and need to trust.
3. **Creative thesis:** one sentence connecting the visual idea to this business.
4. **Design DNA:** type roles, palette roles, geometry, imagery treatment, spacing rhythm, and motion character.
5. **Signature move:** one memorable, context-specific visual or interaction motif; in Immersive mode, define the hero scene and its physical behavior.
6. **Conversion path:** primary CTA, secondary CTA, and proof needed before each ask.

Read [art-direction.md](references/art-direction.md) when choosing or repairing the visual language. Do not expose the internal brief unless it helps the user review a major design choice.

Commit to the chosen direction. Do not combine unrelated trends, decorate every section differently, or add visual novelty with no connection to the client.

## Shape the page around buyer decisions

Map the information architecture before building. The homepage should answer, in an order appropriate to the business:

- What is offered, for whom, and where?
- Why this business rather than another?
- What evidence makes the promise believable?
- What does working with them feel like?
- What is the next low-friction action?

Use [client-sites.md](references/client-sites.md) for page strategy, copy, trust, local SEO, forms, and launch requirements. Do not force a fixed funnel or identical section count onto every client.

## Build with restraint and specificity

- Reuse the project’s established components and tokens where they are sound. Check dependencies before importing packages.
- Prefer semantic HTML, fluid sizing, CSS Grid, intrinsic layouts, and a small token system over scattered one-off values.
- Use real client assets first. If images are missing, choose an intentional art direction before sourcing or generating them; never fill the page with unrelated stock imagery.
- Write specific, plain copy. Avoid empty claims such as “elevate,” “seamless,” “unlock,” “tailored solutions,” and “where quality meets innovation.”
- Treat type as structure: create clear role contrast, comfortable reading measures, balanced line breaks, and an intentional display/body pairing when appropriate.
- Use containers only when they communicate grouping. Avoid the reflexive rounded-card grid, pill-shaped label, centered hero, purple glow, gradient headline, icon-in-a-circle feature row, and oversized empty heading treatment.
- In Essential mode, motion must clarify hierarchy, feedback, or narrative; keep it sparse and do not add a motion library solely for spectacle. In Editorial or Immersive mode, choreography may itself carry the narrative, but it must remain art-directed and performant.
- Use 3D and canvas as a designed layer, not as the document structure. Keep headings, copy, navigation, CTAs, and essential media accessible in HTML.
- Make primary actions obvious without repeating the same CTA after every paragraph.
- Build mobile composition deliberately; do not merely stack desktop columns. Keep tap targets, reading order, navigation, media crops, and form ergonomics intact.

## Work in complete passes

For a net-new site:

1. Inspect and model the business.
2. Establish art direction and content hierarchy.
3. Establish a runnable spine early: valid entry point, global styles, complete semantic section structure, and a passing production build. Keep it runnable while adding heavy scenes, procedural assets, and polish.
4. Implement the complete responsive page or site in the existing stack.
5. Replace weak placeholders and connect real destinations.
6. Render, inspect, correct, and verify.

For an existing site:

1. Preserve a baseline screenshot and inventory working behavior.
2. Diagnose the largest trust, hierarchy, clarity, and visual-coherence problems.
3. Fix the underlying system before polishing isolated components.
4. Compare the result at the same viewports and retest behavior.

Do not stop at a hero mockup, style tile, or partially implemented page when the request is for a website.

## Render before calling it done

Run the project and inspect the actual rendered result. Check at minimum a narrow mobile viewport and a wide desktop viewport; add intermediate or extra-tall views when the layout warrants them. Exercise navigation, forms, accordions, carousels, menus, and every conversion route.

Read [quality-gate.md](references/quality-gate.md) for the completion review. Iterate on what the screenshots reveal—especially folds, line breaks, alignment, image crops, rhythm, and awkward empty space. A successful build must look intentional in the browser, not merely compile.

## Deliver clearly

Summarize the design direction, what was built, verification performed, and any client-supplied facts or assets still needed. Distinguish genuine completion from provisional copy or unconnected external services.
