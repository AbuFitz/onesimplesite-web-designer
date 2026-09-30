# Accessibility, performance, and findability

Use this reference during architecture and again before delivery. These concerns shape the build; they are not a final plugin pass.

## Accessibility baseline

- semantic landmarks and logical heading order;
- keyboard-operable controls with visible, unobscured focus;
- persistent labels, clear errors, and useful instructions;
- text and interactive contrast suitable for WCAG 2.2 AA;
- controls large and separated enough for reliable touch;
- content that survives 200% zoom, narrow reflow, and user text settings;
- alternatives for meaningful media and nonessential decoration hidden correctly;
- reduced-motion behavior and no information available only through color, hover, or motion;
- menus, dialogs, carousels, and custom widgets with tested focus behavior.

Use native elements before ARIA. Test with keyboard and at least one accessibility inspection tool. For current criteria, consult the [W3C WCAG 2.2 guidance](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/).

## Performance budget

Define budgets appropriate to the audience. Treat Core Web Vitals as constraints: aim for LCP at or below 2.5 seconds, CLS at or below 0.1, and responsive interaction under representative mobile conditions. Measure the production build.

- keep the initial JavaScript path small;
- reserve image, video, iframe, and canvas dimensions;
- serve responsive images and modern formats;
- lazy-load below-fold media and nonessential engines;
- subset and limit fonts;
- reduce third-party scripts;
- cap canvas pixel ratio and stop unnecessary render loops;
- investigate long tasks, not just aggregate scores.

## Search and sharing

Provide unique useful titles and descriptions, one clear page topic, crawlable text, canonical URLs, sensible headings, descriptive internal links, social metadata, favicon, robots and sitemap behavior, and a useful 404 when in scope. Use structured data only for verified facts and the correct entity type. Never add fake ratings.

## Privacy and security

Minimise form fields and third-party data transfer. Do not expose secrets in frontend code. Treat analytics, embeds, maps, chat, video, and font providers as data and performance decisions. Implement consent where required; do not make legal claims beyond supplied or reviewed material.

## Release evidence

Record viewport checks, keyboard path, automated audit results, production build output, bundle or media concerns, broken-link checks, metadata inspection, and the status of every external integration. Classify issues as pass, fixed, accepted risk, blocked, or not applicable.

