# OneSimpleSite Web Designer

A portable Claude Code and Codex skill suite for researching, designing, building, and verifying distinctive websites—from practical local-business sites to editorial brands, ecommerce frontends, multi-page systems, and cinematic 3D experiences.

The repository also contains the OneSimpleSite showcase website, a licensed open-font discovery catalogue, Windows and macOS installers, and realistic evaluation prompts.

`CLAUDE.md` gives Claude Code the repository mission, architecture, current state, and continuation rules automatically whenever Claude opens this repository.

## The suite

### `onesimplesite-web-designer`

The central skill. It routes the project by site archetype and creative gear, maintains a verified/inferred/provisional/blocking fact ledger, selects an appropriate stack, builds complete responsive states, and requires production-browser verification.

Creative gears:

- **Essential** — clear, fast, high-trust customer websites;
- **Editorial** — richer narrative, typography, imagery, and composition;
- **Immersive** — focused WebGL, 3D, canvas, generative, or scroll-led experiences;
- **System** — multi-page, institutional, ecommerce, or SaaS marketing systems.

### `onesimplesite-research`

An optional separately invokable companion for business, audience, competitor, local-market, reference-site, content, SEO-language, and integration research. It produces a source-backed brief and fact ledger instead of unsourced marketing claims.

### `onesimplesite-skill-lab`

An optional companion for testing and improving the suite itself. It compares candidate instructions with a baseline across varied website prompts and negative trigger cases.

Research and anti-hallucination remain built into the main skill. The companions are separate only because research-only and skill-development requests benefit from precise invocation without loading the whole website builder.

## Install

Download or clone this repository, then run the installer from the repository root.

### Windows PowerShell — Claude Code

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install.ps1 -Target Claude
```

Use `-Target Codex` or `-Target Both` when needed.

### macOS or Linux — Claude Code

```bash
sh scripts/install.sh claude
```

Use `codex` or `both` as the argument when needed.

The installer copies only the skill resources, not the showcase, Git history, or repository documentation.

## Use

In Claude Code or Codex:

```text
Use $onesimplesite-web-designer in Immersive mode to build a one-page launch site for a recycled-glass surface studio. Keep essential copy and conversion in semantic HTML, create a concept-specific 3D hero, and verify mobile, reduced-motion, and no-WebGL fallbacks.
```

For a normal customer site:

```text
Use $onesimplesite-web-designer in Essential mode to build a distinctive website for a Leeds roofing company. Use only supplied facts, label missing proof, make calling and quote requests obvious on mobile, and test the production build.
```

For evidence gathering without building:

```text
Use $onesimplesite-research to research this business, its local market, audience questions, competitors, and reference sites. Return a cited fact ledger and decision-ready website brief.
```

## Font system

The catalogue in `assets/font-catalog.json` contains varied OFL-licensed starting points and Fontsource package names. It deliberately stores metadata rather than redistributing a large pile of font binaries. This keeps the skill portable, forces a current licence/package check, and lets each project acquire only the families, axes, and subsets it needs.

```bash
node scripts/font-pair.mjs --list
node scripts/font-pair.mjs --mood "warm industrial"
node scripts/font-pair.mjs --archetype hospitality
```

## Validate

```bash
node scripts/audit-skill.mjs
python /path/to/skill-creator/scripts/quick_validate.py .
```

The behavioural prompt set lives in `evals/prompts.json`. A passing validator does not replace rendered website evaluation.

## Showcase

The `showcase/` directory is the OneSimpleSite business site and capability demonstration. Run it independently:

```bash
cd showcase
npm install
npm run dev
```

The root `vercel.json` points Vercel at the showcase automatically, so the GitHub repository can be imported without changing its root directory.

## Structure

```text
SKILL.md
agents/openai.yaml
assets/font-catalog.json
evals/prompts.json
references/
scripts/
skills/
  onesimplesite-research/
  onesimplesite-skill-lab/
showcase/
```

## Research and provenance

The suite was informed by, but does not copy wholesale:

- [Anthropic's frontend-design skill](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design/skills/frontend-design) for committing to a clear visual direction;
- [Anthropic's skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator) for progressive disclosure and evaluate–rewrite loops;
- [Taste Skill](https://github.com/Leonxlnx/taste-skill) for anti-default discipline and contextual design controls;
- [Web Design Skills](https://github.com/MattiaAlessi/Web-Design-Skills) for selective orchestration across professional website concerns;
- [Karpathy-inspired Claude guidelines](https://github.com/multica-ai/andrej-karpathy-skills) for explicit assumptions, simplicity, surgical edits, and goal-driven verification;
- [W3C WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/), [web.dev font guidance](https://web.dev/articles/font-best-practices), and [Google Fonts CSS2 documentation](https://developers.google.com/fonts/docs/css2) for platform practices.

Third-party projects retain their own licences. Font files acquired for client projects must retain and comply with their upstream licences.
