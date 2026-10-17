# OneSimpleSite homepage intro film — plan

**Angle.** Someone has an idea. OneSimpleSite takes it from a loose spark to a working, responsive website built around their kind of business. Tone: dark, expressive, creative and human.

**Hook (0–4s).** A lime spark on a near-black field. "You've got *an idea.*" lands in huge Bricolage Grotesque with the Newsreader accent, while loose shapes drift in around it.

## Identity sources (inspected, not invented)
| Thing | Source | Value |
|---|---|---|
| Dark background | `showcase/index.html` theme-color, `styles.css` `--ink` | `#11110f` / `#171713` |
| Green accent | `styles.css` `--lime` (the "Essential" gear, contact section) | `#d8ff3e` |
| Other gear accents | `--coral`, `--blue` | `#ff6d4a`, `#85a8ff` |
| Type | `main.jsx` imports | Bricolage Grotesque (display), Newsreader (accent, upright — no italic file is shipped and `font-synthesis: none`), Manrope (UI) |
| Logo | `.brand` markup in `main.jsx`: circled "1" + "OneSimpleSite" wordmark | rebuilt from the same fonts; no separate logo file exists in the repo |
| Interface shown | the built showcase (`vite build`) rendered live in an iframe | real markup, CSS, fonts and the real Three.js hero scene |

## Fact ledger
- **Verified:** the showcase's hero, three creative gears (Essential / Editorial / Immersive) and their copy, responsive layout (desktop → phone reflow), the Rook & Lime concept visual, the brand mark and wordmark.
- **Verified but labelled by the site as demonstration concepts:** Rook & Lime, Morrow. They appear for about a second, unlabelled-as-client, with no claims attached.
- **Not verified — deliberately not shown:** enquiry forms, booking flows, customer portals. The showcase contains none, so the "built around your business" beat uses the real gear switcher instead (it re-tunes the site's look, 3D scene and copy to a business type). **Blocking question if you want a booking/enquiry/portal beat:** point me at a real, verified example and I will swap it in.
- **Avoided:** pricing, testimonials, statistics, stock footage, the word "premium". The contact email in the showcase is provisional and never appears.

## Storyboard (20.0s, 1920×1080, 30fps, 600 frames)
| Time | On screen | Motion |
|---|---|---|
| 0–3.2 | "You've got an idea." Spark + 15 loose shapes | spark pops from centre, words rise from masks, shapes drift |
| 3.2–5.3 | Shapes converge into a wireframe browser | staggered travel to measured positions of the real hero (brand mark, nav pill, headline bars, button, 3D panels, gear pills) |
| 4.5–8 | "Let's bring it online." | wireframe dissolves, real site fades in with live Three.js scene and parallax |
| 8–13 | "A website that feels like you." | real page scrolls to the lime statement block; then the frame morphs desktop→phone with true responsive reflow; phone scrolls to the Rook & Lime concept |
| 13–16.7 | "Built around your business." (accent follows the gear) | a cursor clicks the real gear switcher: Editorial (coral) → Immersive (blue) → Essential (lime); page, copy and 3D scene retune |
| 16.7–19.2 | Logo + "Let's build yours." | lime iris opens from the frame; logo and line hold ≥1.1s |
| 19.2–20 | — | lime iris closes to a 28px dot at screen centre = frame 0, glow and all. Loops seamlessly |

## Sound
One piece in A minor, 96 BPM feel: pad (Am | F | Dm | Em → Am), felt-piano melody timed to the words, slow sub heartbeat on chord changes, tonal UI blips on the three clicks (A–B–E), swells on the two transitions, shared reverb. The reverb tail folds onto the start so the audio loops too. The film reads fully without it.

## Deliverables
`onesimplesite-intro-master.mp4`, `onesimplesite-intro-web.mp4` (fast-start), `onesimplesite-intro-poster.jpg`, `share-copy.txt`, plus `work/` (composition, scripts, soundtrack).
