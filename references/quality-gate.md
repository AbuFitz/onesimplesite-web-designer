# Browser quality gate

Use this after implementation. Compile/lint success is necessary but not sufficient.

## Content truth and conversion

- The first viewport says what the business does, for whom, and—when relevant—where.
- The primary action is obvious, accurately labeled, and reaches a real destination.
- Claims, contact details, reviews, credentials, prices, and locations are verified or flagged as provisional.
- Every section contributes new information or useful proof.
- No lorem ipsum, fake people, invented metrics, dead `#` links, or silent form submission remains.

## Visual system

- The page has one recognizable art direction linked to the business.
- Type roles, palette, radii, borders, shadows, icon style, image treatment, and motion remain coherent.
- Hierarchy survives without relying on effects.
- Line lengths, heading wraps, alignment, and whitespace look intentional at rendered sizes.
- Repeated components share baselines and internal rhythm without becoming a template wall.
- Images are sharp enough, well cropped, properly attributed/licensed where needed, and have useful alternative text when meaningful.

## Responsive inspection

Capture full-page or representative screenshots at roughly 390 × 844 for mobile and 1440 × 1000 for desktop. Add 768 × 1024 when layouts change substantially, and inspect around 320 px if the audience may use older devices.

Look for horizontal overflow, clipped focus rings, awkward folds, stranded words, oversized navigation, crop failures, stacking-order mistakes, excessive mobile whitespace, and tap targets below about 44 CSS pixels.

## Interaction and accessibility

- Navigate the whole page by keyboard in logical order.
- Check visible focus, skip link, landmark structure, heading order, labels, errors, and modal/menu focus behavior.
- Test normal, hover, focus, active, loading, success, error, and empty states that exist in scope.
- Confirm reduced-motion behavior and that essential information does not depend on animation, color, hover, or image alone.
- Check foreground/background contrast and zoom to 200% without losing content or controls.

## Engineering and delivery

- Run the repository’s applicable tests, lint, typecheck, and production build.
- Test a production preview, not only the development server. Use Lighthouse or equivalent field-oriented tooling as evidence; aim for accessibility, best-practices, and SEO scores of 95+ and performance of 90+ unless a measured, client-approved tradeoff justifies otherwise.
- Treat Core Web Vitals as constraints: target CLS below 0.1, LCP below 2.5 seconds, and minimal main-thread blocking under a representative mobile profile. Investigate causes instead of accepting a low aggregate score.
- Check console errors, failed requests, broken assets, missing routes, and import/package mismatches.
- Avoid layout shift from fonts and unsized media; lazy-load below-fold media where suitable.
- Provide useful metadata, favicon, social preview support, and error/404 handling when in scope.
- Test the actual form destination, phone links, email links, maps, booking path, analytics/consent behavior, and external integrations before claiming they work.

## Final critique

Judge screenshots in this order: comprehension in five seconds, trust and relevance, composition and hierarchy, typographic and image craft, then interaction polish. Fix the biggest weakness first and recapture. Continue until no major issue is visible at any required viewport. Record external dependencies or missing client inputs in the handoff rather than hiding them.
