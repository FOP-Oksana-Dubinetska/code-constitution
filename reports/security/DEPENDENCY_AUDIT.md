# Bootstrap dependency audit

Audit date: 2026-07-28.

## Result

`npm audit --omit=dev` reports 0 vulnerabilities. The remaining findings are confined to development tooling.

Targeted updates moved Vitest from `3.2.4` to `3.2.7`, AJV from `8.17.1` to `8.20.0`, and Markdownlint CLI2 from `0.18.1` through `0.22.1` to `0.23.2`. The complete `npm run check` contract passes with Markdownlint CLI2 `0.23.2`. These updates remove the reported critical Vitest development-server advisory and the direct AJV, Markdownlint, `js-yaml`, and `markdown-it` findings without applying `npm audit fix --force`.

`npm audit --audit-level=low` now reports 11 high-severity transitive findings on one advisory. The chain begins at `brace-expansion` and reaches the repository through `minimatch`, then through ESLint configuration packages and TypeScript-ESLint packages. Production execution does not import this chain. Local and CI checks invoke it as a development-only lint tool against repository-controlled paths and configuration. This boundary limits current reachability to trusted development input, while an untrusted path pattern could still expose a developer or CI runner to resource exhaustion.

## Update boundary

The audit proposes ESLint `10.8.0` through `npm audit fix --force`. That migration changes the lint platform and requires a compatible TypeScript-ESLint dependency line, a dedicated dependency record, configuration compatibility checks, and fixture execution under BASE-D01 through BASE-D03. The bootstrap records the remaining chain explicitly and preserves the controlled upgrade boundary.
