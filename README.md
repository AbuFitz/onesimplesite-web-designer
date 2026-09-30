# OneSimpleSite Web Designer

A portable agent skill for designing and building distinctive websites for real client businesses—from clean local-business pages to cinematic 3D showpieces.

It is designed to correct the patterns that make AI-built sites feel interchangeable: generic hero formulas, repeated card grids, vague copy, disconnected visual trends, fabricated proof, and “finished” pages that were never inspected in a browser.

## What it changes

The skill makes the agent:

- derive a visual direction from the client’s business and audience;
- define one coherent design DNA and one context-specific signature move;
- organize the site around buyer decisions and credible proof;
- preserve real facts and flag provisional client copy;
- build responsively in the project’s existing stack;
- render the result at mobile and desktop sizes and iterate from screenshots;
- verify conversion routes, accessibility, metadata, and production behavior.

It has three creative gears:

- **Essential** for fast, trustworthy, high-converting client sites;
- **Editorial** for more expressive brand storytelling;
- **Immersive** for WebGL, 3D models, shaders, scroll films, spatial type, and social-media-worthy experiences with proper fallbacks.

## Install

### Claude Code

Copy this folder to:

```text
~/.claude/skills/onesimplesite-web-designer
```

### Codex

Copy this folder to:

```text
~/.codex/skills/onesimplesite-web-designer
```

## Use

Invoke it explicitly when useful:

```text
Use $onesimplesite-web-designer to build a one-page website for [business].
```

Provide the real business name, offer, audience, location, primary action, proof, brand assets, and any reference sites you genuinely want reflected. The skill will ask only for information that materially blocks a responsible build.

## Structure

```text
SKILL.md
agents/openai.yaml
references/art-direction.md
references/client-sites.md
references/immersive-web.md
references/quality-gate.md
```

The core workflow stays concise; detailed art-direction, client-strategy, and browser-QA guidance is loaded only when needed.
