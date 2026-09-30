# Editorial and immersive web experiences

Read this reference when the user asks for an unusually expressive, cinematic, 3D, interactive, experimental, portfolio-grade, or social-media-worthy website.

## First choose the experience mechanism

Do not pile effects together. Choose one dominant mechanism that expresses the subject:

- **Hero artifact:** a lit 3D object visitors can orbit, distort, assemble, peel, carve, or reveal.
- **Scroll film:** a controlled image sequence, video, or canvas scene scrubbed through a concise narrative.
- **Spatial journey:** the camera travels through a small 3D environment with HTML content anchored to meaningful moments.
- **Material simulation:** shaders, displacement, refraction, particles, grain, fluid, cloth, or surface response tied to the brand’s real materials.
- **Kinetic type:** typography becomes the scene through masks, depth, variable-font axes, SVG paths, or physically responsive composition.
- **Generative identity:** a rule-based visual system produces distinct but recognizable patterns from client data or interaction.

Write a one-sentence experience thesis: “The visitor ___, mirroring how the business ___.” If that sentence is weak, the effect is decoration.

## Choose the smallest capable stack

Inspect the project before choosing technology.

- Use CSS and SVG for masks, perspective, blend modes, path animation, and shallow 3D when they can produce the intended result.
- Use Canvas 2D for particles, image processing, or dense drawing without a scene graph.
- Use Three.js for a focused WebGL scene in vanilla projects.
- Use React Three Fiber and Drei only in an existing React ecosystem or when their component model materially helps.
- Use GSAP/ScrollTrigger for authored timelines and scroll choreography only after confirming the dependency or deliberately adding it.
- Use a compressed video or image sequence when photorealism matters more than real-time interaction.
- Use glTF/GLB for models. Prefer Draco or Meshopt compression, KTX2 textures, sensible mesh counts, and baked detail over brute-force geometry.

Do not introduce a heavy framework merely to produce one effect. Check package versions and existing conventions before importing anything.

## Art-direct the scene

Define before implementation:

- subject and silhouette;
- camera position, lens character, and movement arc;
- light direction, softness, contrast, and palette;
- material qualities and imperfections;
- background depth and atmosphere;
- interaction input and physical response;
- entry, peak, and exit states;
- relationship between the scene and HTML typography;
- reduced-motion and non-WebGL alternatives.

Avoid the default demo look: reflective chrome orb, floating glass blobs, star field, neon tunnel, random particle cloud, wavy shader plane, or laptop mockup with no conceptual link. Build or source an object and behavior that belongs to the client.

## Compose a showpiece page

Spectacle works best against restraint. Give the scene room, then use calmer chapters for explanation and conversion. A useful pattern is:

1. immediate visual premise and plain-language offer;
2. controlled interactive or scroll-driven reveal;
3. concise proof or selected work;
4. a tangible process or material story;
5. a direct CTA and quiet footer.

Do not turn every section into a new animation demo. Maintain one camera language, easing family, material world, and typographic system.

## Performance budget

Set a budget appropriate to the audience and test on a mid-range mobile profile.

- Lazy-load the immersive layer when it is below the fold or nonessential.
- Treat the 3D engine as progressive enhancement. Render a composed HTML/CSS or poster state in the first frame, code-split the engine, and load it on idle or clear engagement when immediate real-time rendering is not essential. A visitor should never wait for Three.js merely to read the offer.
- Keep critical CSS independent of the 3D JavaScript bundle. Do not make first paint wait for the canvas engine.
- Cap device pixel ratio, pause rendering when offscreen or hidden, and avoid an always-running loop when the scene is static.
- Reuse geometries, materials, textures, and render targets. Dispose GPU resources on teardown.
- Compress models and textures; choose texture resolution from rendered size, not source availability.
- Keep transparent layers, post-processing passes, dynamic shadows, and real-time lights deliberate.
- Animate transforms, uniforms, camera, and opacity; avoid layout work on every frame.
- Detect capability failure and WebGL context loss. Never leave a blank hero.
- Reserve media dimensions and preload only the critical first frame or minimal scene assets.
- Prevent font-driven layout shift: self-host and preload critical fonts with suitable fallback metrics, or use reliable local stacks. Remote `@import` font chains are unsuitable for a large typographic hero.

If the experience cannot stay fluid on likely client devices, simplify the scene before degrading the rest of the page.

## Responsive and accessible fallback

- Keep meaningful content and controls in semantic HTML above or alongside the canvas.
- Provide a designed poster image, static composition, or simplified CSS version when WebGL is unavailable, data saving is enabled, or motion is reduced.
- For reduced motion, remove camera travel, scrubbed parallax, continuous rotation, and pointer-chasing; preserve the final composition and all content.
- Ensure the canvas never traps keyboard or touch input. Provide explicit controls if interaction is necessary to understand the content.
- Maintain readable contrast while animated backgrounds change.
- Recompose for mobile: change camera framing, simplify geometry/effects, shorten the sequence, and keep the CTA reachable. Do not just scale down the desktop canvas.

## Signature interaction standard

A signature interaction should be understandable within seconds, respond immediately, and have a satisfying rest state. It must not delay access to navigation or the primary action. Provide a visual hint only when the interaction is not discoverable through ordinary scrolling or pointer movement.

Good examples are specific: plaster layers separating under scroll, a chair rotating to reveal joinery details, a building massing model shifting from sketch to finished material, or barber tools creating a typographic crop as the pointer crosses the hero.

## Immersive QA

In addition to the standard quality gate:

- record or inspect the full experience from entry to CTA, not isolated screenshots only;
- test mouse, trackpad, touch, keyboard, reduced motion, resize, tab background/foreground, and route teardown;
- inspect frame pacing, GPU/CPU use, media weight, loading transition, and context-loss fallback;
- audit the production build rather than the development server. Measure FCP, LCP, CLS, total blocking time, and the initial JavaScript path both before and after the immersive layer activates;
- verify camera framing and text contrast at mobile, tablet, laptop, and wide desktop sizes;
- check that scrolling remains predictable and users can escape pinned scenes;
- confirm the page remains coherent while JavaScript, WebGL, or remote media is unavailable.

The final result should feel like one authored experience, not a gallery of copied effects.
