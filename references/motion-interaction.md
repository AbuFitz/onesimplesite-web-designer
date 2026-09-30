# Motion and interaction system

Use this reference when the design includes animation, scrolling choreography, menus, carousels, cursors, hover physics, transitions, or gesture-driven behavior.

## Give motion a job

Every animation should communicate at least one of:

- hierarchy: guide attention;
- narrative: reveal in a meaningful order;
- feedback: acknowledge input;
- state: make change understandable;
- spatial continuity: show where an element came from or went.

If the only explanation is “it looks cool,” remove or rethink it.

## Define the motion language

Choose a small family of durations, easing or spring behavior, distances, and stagger. Relate the feel to the brand: crisp, weighted, elastic, restrained, mechanical, or atmospheric. Do not apply one reveal preset to every element.

## Implementation

- Prefer CSS transitions and keyframes for local UI states.
- Use the Web Animations API or a maintained library for coordinated sequences only when it reduces complexity.
- Use transform and opacity for frequent motion; avoid layout work every frame.
- Keep continuous pointer or scroll values outside component render loops.
- Pause offscreen, hidden, or background animation.
- Clean up listeners, observers, timelines, and GPU resources.

## Scrolling

Pinned or scrubbed sequences must be concise, escapable, and predictable. Test touchpads, wheels, touch, keyboard, resize, back/forward navigation, and restored scroll. Do not hijack ordinary reading to demonstrate tooling.

## Accessibility

Honor `prefers-reduced-motion`. Preserve the final composition and all content while removing parallax, camera travel, continuous rotation, flashing, and pointer chasing. Never require hover, motion, or a precision gesture to access information. Keep focus visible and unobscured when overlays or sticky elements animate.

## Verification

Inspect entry, peak, rest, interruption, resize, and teardown. Look for jank, delayed input, layout shift, flashing, unreadable moving backgrounds, stacked transforms, and animation that restarts unexpectedly.

