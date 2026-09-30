# Stack, architecture, and integration decisions

Use this reference for net-new project setup, migrations, multi-page systems, forms, CMS, commerce, or third-party services.

## Decision order

Choose based on content ownership, route count, rendering needs, interaction depth, integration constraints, team capability, hosting, and maintenance. Do not begin with a favourite framework.

| Need | Usually sufficient |
|---|---|
| One durable brochure page | semantic HTML/CSS/JS or existing stack |
| Content-rich mostly-static site | Astro or established static framework |
| Interactive marketing site | Vite with existing UI framework |
| App-adjacent marketing and authenticated routes | existing product framework, often Next/Nuxt/SvelteKit |
| Frequent nontechnical editing | suitable CMS with defined content model |
| Real commerce | established commerce platform and checkout |
| Focused 3D scene | Three.js; R3F only when React composition helps |

## Runnable spine

Create and preserve an early vertical slice: entry point, routing if needed, global tokens, semantic page structure, one representative component, and a passing production build. Add heavy assets and effects only after the spine works. This prevents a beautiful collection of disconnected files.

## Content model before CMS components

Define entities, required fields, relationships, slugs, states, media constraints, preview needs, ownership, and migration rules. Avoid letting a page-builder component tree become the content model.

## External services

For forms, bookings, maps, email, CRM, payments, search, analytics, consent, or social embeds:

- confirm the real provider and destination;
- separate public identifiers from secrets;
- model loading, success, error, validation, timeout, and vendor outage;
- minimise transmitted personal data;
- document domain, webhook, DNS, and environment requirements;
- do not claim the integration works until tested end to end.

## Dependency discipline

Inspect `package.json` and lockfiles before importing. Prefer platform features or existing dependencies when capable. Add a library for a repeated or difficult problem, not for a single trivial effect. Check current official documentation for unstable APIs. Remove only dependencies made unnecessary by the current work.

## Existing repositories

Preserve conventions, tests, comments, routes, and working behavior outside scope. Diagnose before migrating. Every changed line should support the requested outcome or be a direct consequence of it.

