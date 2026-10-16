# NOPTIS Open Documentation (PoC)

> **Proof of Concept (PoC)** - This repository is an experimental project exploring an open, GitHub-based approach to maintaining and publishing NOPTIS documentation. It does not contain official NOPTIS specifications or XSD schemas.

## Overview

The purpose of this project is to evaluate how NOPTIS standards and technical documentation can be maintained, reviewed, versioned, and published openly using GitHub.

**Markdown documentation and XML schemas (XSD) serve as the source of truth.** The documentation website, built with [VitePress](https://vitepress.dev/), provides a searchable and accessible presentation of the same source files.

The approach focuses on:

- **Open collaboration:** Propose improvements and discuss changes through GitHub Issues and Pull Requests.
- **Version control:** Maintain a transparent history of documentation and schema changes.
- **Review process:** Ensure proposed changes are reviewed before merging.
- **Versioned releases:** Publish approved specifications through GitHub Releases and tags.
- **Documentation website:** Generate a searchable website directly from Markdown.

The `main` branch represents ongoing development and should not be treated as an officially approved specification.

## Documentation

Documentation is maintained directly in this repository and can be accessed in two ways:

- **GitHub:** [Browse documentation](https://github.com/drskanetrafiken/noptis-open-docs-poc/tree/main/docs)
- **Documentation website:** [View on GitHub Pages](https://drskanetrafiken.github.io/noptis-open-docs-poc/) (once published)

GitHub remains the primary platform for collaboration, while VitePress provides a more accessible reading experience.

## How to Contribute

Contributions, feedback, and suggestions are welcome as part of this proof of concept.

### Report an Issue or Suggest an Improvement

If you find an error, identify missing information, or have an idea for improving the documentation, [open an issue](https://github.com/drskanetrafiken/noptis-open-docs-poc/issues/new).

Describe your suggestion and, where applicable, identify the affected specification, interface, or version.

### Propose Changes with a Pull Request

You can contribute directly through GitHub without installing any development tools.

1. Navigate to the [documentation directory](https://github.com/drskanetrafiken/noptis-open-docs-poc/tree/main/docs).
2. Open the Markdown file you want to improve.
3. Click the **Edit** (pencil) icon on GitHub.
4. Make your changes and propose them through a Pull Request.
5. Submit your Pull Request for review.
6. BlaBla

For larger contributions, you can fork the repository, make changes locally, and [create a Pull Request](https://github.com/drskanetrafiken/noptis-open-docs-poc/compare).

Changes to XML schemas should include corresponding documentation updates where applicable.

### Contributing Translations

Documentation may support multiple languages using language-specific directories such as `docs/<lang>/`.

To contribute a translation, create or update the relevant Markdown files and submit a Pull Request.

See [CONTRIBUTING.md](https://github.com/drskanetrafiken/noptis-open-docs-poc/blob/main/CONTRIBUTING.md) for additional guidelines.

## Run Locally

The documentation website uses VitePress and requires **Node.js 20 or later**.

Clone the repository:

```bash
git clone https://github.com/drskanetrafiken/noptis-open-docs-poc.git
cd noptis-open-docs-poc
```

Install dependencies and start the development server:

```bash
npm install
npm run docs:dev
```

Build and preview the static documentation website:

```bash
npm run docs:build
npm run docs:preview
```

For reproducible builds, commit the generated `package-lock.json` file and use `npm ci` in CI workflows once the lockfile is available.

## GitHub Pages

The documentation website can be published using the included GitHub Actions workflow.

### Publishing

1. Navigate to [Settings → Pages](https://github.com/drskanetrafiken/noptis-open-docs-poc/settings/pages).
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Open the [Actions tab](https://github.com/drskanetrafiken/noptis-open-docs-poc/actions).
4. Select **Publish docs (manual)**.
5. Click **Run workflow** to deploy the documentation.

Once deployed, the website will be available at:

https://drskanetrafiken.github.io/noptis-open-docs-poc/

The workflow is intentionally configured for **manual deployment** during the PoC. Automatic publishing after reviewed changes are merged into `main` can be considered later.

## Proof of Concept Evaluation

This repository is intended to evaluate whether GitHub provides a practical platform for managing an open technical standard.

The evaluation should cover:

1. **Collaboration:** Can contributors easily suggest and review documentation changes?
2. **Change management:** Can GitHub Issues and Pull Requests support a transparent review process?
3. **Documentation quality:** Do tables, internal links, XML examples, and technical specifications render correctly?
4. **Versioning:** Can individual specifications be managed through Git tags and Releases?
5. **Publishing:** Can the same source files be maintained on GitHub and published through VitePress without duplication?
6. **Governance:** Can responsibilities, approvals, and official releases be managed using GitHub's existing capabilities?

The goal is to identify a simple and sustainable workflow without introducing unnecessary tools or complexity.

## Governance and Versioning

Proposed changes are discussed, reviewed, and merged through Pull Requests.

However, merging a Pull Request does **not** automatically make a change part of an official NOPTIS standard.

Official specifications should be approved through an established governance process and published as versioned GitHub Releases.

Different NOPTIS interfaces, such as RII, VSI, and DOI, may be versioned independently.

See [GOVERNANCE.md](https://github.com/drskanetrafiken/noptis-open-docs-poc/blob/main/GOVERNANCE.md) for the proposed governance model.

## Licensing

Before publishing official NOPTIS documentation or schemas, the necessary permissions and licenses must be established.

This includes verifying redistribution rights for existing specifications, XML schemas, illustrations, and third-party contributions.

A public GitHub repository does not automatically grant permission to reuse or redistribute its contents.

See [LICENSING.md](https://github.com/drskanetrafiken/noptis-open-docs-poc/blob/main/LICENSING.md) for further information.

---

**Disclaimer:** This repository is an experimental proof of concept and is not an official publication of the NOPTIS standard.


