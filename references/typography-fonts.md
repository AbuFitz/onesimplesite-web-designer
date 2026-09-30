# Typography and font operations

Use this reference when selecting, acquiring, pairing, loading, or auditing fonts.

## Start with the voice

Choose type from the brand tension: rigorous but human, raw but dependable, quiet but sensual, playful but competent. Specify roles before families:

- display or campaign voice;
- reading/body voice;
- functional UI and labels;
- data/code/accent when the subject warrants it.

One family with useful axes can cover multiple roles. A pair needs meaningful contrast, not simply serif plus sans. Avoid using unusual type to compensate for weak hierarchy.

## Selection criteria

Evaluate:

- legibility at the actual body size and device;
- character set, numerals, punctuation, diacritics, and required scripts;
- family depth, italics, optical sizes, width or grade axes;
- licensing for web, commercial use, redistribution, and client handoff;
- WOFF2 availability and likely transfer size;
- fallback metrics and the effect on line breaks and layout shift;
- visual relevance to the business rather than trend popularity.

The bundled `assets/font-catalog.json` contains varied open-source starting points grouped by mood and archetype. It is a discovery aid, not a mandate. Verify the current package and licence before use.

## Acquisition

Prefer, in order:

1. client-supplied licensed webfont files and licence record;
2. an established open-source package such as Fontsource, with the licence retained;
3. a reputable provider configured for the exact required families, axes, subsets, and weights;
4. a system or local stack when speed, privacy, language coverage, or institutional constraints favour it.

Never scrape commercial font files. Never commit a font merely because it can be downloaded. Record family, source, version, licence, subsets, axes, and files used.

## Delivery

- Prefer WOFF2 for modern web delivery.
- Load the smallest useful set of families, styles, weights, axes, and scripts.
- Use `font-display` deliberately; `swap` is a good default for body text, while display decisions may vary with the fallback plan.
- Preload only the genuinely critical above-fold font files.
- Define realistic fallback stacks and use metric overrides (`size-adjust`, ascent/descent/line-gap overrides) when layout shift is material.
- Avoid CSS `@import` chains for critical typography.
- Do not animate variable axes continuously unless the motion has a purpose and remains cheap.

## Pairing checks

Render a specimen containing the real hero headline, a long heading, body paragraph, buttons, navigation, numerals, punctuation, and awkward words. Check at mobile and desktop widths.

A useful pair should answer:

- Which family carries personality?
- Which family disappears during reading?
- Are x-height, width, contrast, and rhythm complementary?
- Do bold and italic actually exist rather than being synthesised?
- Does the pair still work when the display face fails to load?

## Avoid repeatable tells

Do not make Inter, Roboto, Arial, Space Grotesk, Instrument Serif, or any other currently fashionable family a universal default. They can be right when the brief supports them. Rotate based on subject and retain a record so consecutive client sites do not converge.

## Sources

Implementation guidance is grounded in [web.dev font best practices](https://web.dev/articles/font-best-practices), the [Google Fonts CSS2 variable-font documentation](https://developers.google.com/fonts/docs/css2), and each font's own licence/source repository. Re-check current documentation when delivery details matter.

