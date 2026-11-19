# AGENTS.md

Shared instructions for AI coding agents and human contributors working in this repository.

## Purpose and status

- Public proof of concept (PoC) for maintaining and publishing NOPTIS documentation openly on GitHub.
- Nothing here is an official or approved NOPTIS specification. `main` is always a draft.
- Merging a PR does **not** approve a standard. Official versions require the separate decision and release process in [GOVERNANCE.md](GOVERNANCE.md).
- Most existing project texts (governance, contributing, VitePress UI) are in Swedish; keep the language of the file you edit.

## Layout

- `docs/` – VitePress site. Config: `docs/.vitepress/config.mts` (base path from `VITEPRESS_BASE`, local search, edit links).
- `schemas/` – canonical machine-readable contracts (source of truth), e.g. `schemas/rii/2.0/`.
- `apis/` – API definitions (e.g. AsyncAPI), once introduced.
- `examples/` – sample messages and small runnable examples; mirror the `schemas/` directory tree.
- `scripts/` – repository validation scripts, once introduced.
- `.github/workflows/` – `checks.yml` (build on PRs and pushes to `main`) and `pages.yml` (manual Pages deploy).

`schemas/rii/2.0/` and `examples/rii/2.0/` hold placeholders only. Do not add or change RII material unless asked.

## Commands

Node.js 22 is used in CI (README says 20+). Use the existing `package-lock.json`.

```bash
npm ci               # install exact locked dependencies
npm run docs:dev     # local dev server
npm run docs:build   # build the site to docs/.vitepress/dist
npm run docs:preview # preview the built site
```

No validation scripts exist yet. Do not document or call commands that are not in `package.json`.

## Publishing

- GitHub Pages deploys **manually** via `pages.yml` (`workflow_dispatch`) with `VITEPRESS_BASE=/noptis-open-docs-poc/`.
- Never switch it to automatic deployment or change the base path as a side effect.

## Source of truth and versioning

- Schemas and API files live at the repository root (`schemas/`, `apis/`), not inside `docs/`.
- Documentation links to or includes canonical files; never maintain a copied version in Markdown.
- Do not label illustrative or demo content as normative. Keep versions distinct (e.g. initiative version, topic version, schema version, `demo`).
- When approved official contracts are imported, preserve their original filenames, namespaces, versions and relative paths.
- Do not import real NOPTIS material until publishing rights are confirmed ([LICENSING.md](LICENSING.md)).

## Workflow

1. Inspect the relevant files before editing; never overwrite unrelated work or uncommitted changes.
2. Keep changes focused. Update schema, examples and docs together in the same PR when a contract changes.
3. Build (and validate, once available) locally before opening a PR.
4. Use PRs and review; follow [CONTRIBUTING.md](CONTRIBUTING.md) (branch names like `docs/…`, `feat/…`, `schema/…`).
5. Do not commit, push or publish unless asked.

## Working style

- Minimal dependencies; prefer built-in Node APIs and small, readable scripts.
- No code generators, frameworks or abstractions without a clear need.
- No extra agent files or folders (`.agent/`, `ARCHITECTURE.md`, session notes, etc.). This file is the single agent guide; `CLAUDE.md` only imports it.
- Report actual check results; never claim a check passed without running it.
