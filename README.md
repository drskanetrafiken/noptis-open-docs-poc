# NOPTIS Open Documentation – proof of concept

> **Experimentell prototyp.** Detta är inte officiell NOPTIS-dokumentation och innehåller inga officiella specifikationer eller XSD-filer.

## Syfte

Testa ett GitHub-baserat arbetssätt för att publicera och vidareutveckla en standard öppet. **Markdown-filerna och eventuella XSD-filer är källmaterial.** En webbplats är bara en presentation av samma filer.

- Läs specifikationerna direkt i GitHub under [`docs/`](docs/index.md).
- Föreslå ändringar via Issues och Pull Requests.
- Använd GitHub Releases och taggar för beslutade versioner, inte `main` som officiell specifikation.
- Bygg valfritt en sökbar dokumentationswebbplats med VitePress.
- Ingen PDF-generering ingår i första testet.

## Kör lokalt (valfritt)

Kräver Node.js 20+.

```bash
npm install
npm run docs:dev
```

Bygg en statisk webbplats:

```bash
npm run docs:build
npm run docs:preview
```

Första `npm install` skapar `package-lock.json`. **Lägg till den i Git** och byt därefter `npm install` till `npm ci` i GitHub Actions för reproducerbara byggen.

## GitHub-test

1. Skapa ett **publikt** testrepo och ladda upp innehållet.
2. Lägg in en testfråga genom `Issues` och låt en annan deltagare föreslå en textändring med en Pull Request.
3. Säkerställ att Pull Requests kräver granskning innan merge (branch protection/ruleset).
4. Testa samma dokument direkt i GitHub och som VitePress-webbsida.
5. Kontrollera om dokumentens tabeller, länkar, XML-exempel och versioner fungerar utan speciallösningar.
6. Pröva att skapa en versionsspecifik GitHub Release med en tagg, exempelvis `rii-v2.0.0-demo` (endast test).

För publicering av VitePress med `.github/workflows/pages.yml`:

- Ändra `VITEPRESS_BASE` i arbetsflödet till `/<ditt-repo>/`, eller `/` för egen domän.
- Välj **Settings → Pages → Build and deployment → GitHub Actions**.
- Starta arbetsflödet **Publish docs (manual)** manuellt från Actions.
- När webbplatsen har godkänts kan ni överväga automatisk publicering efter granskad merge till `main`.

## Viktigt innan officiell publicering

- Kontrollera rättigheterna till NOPTIS befintliga dokument, scheman, illustrationer och exempel.
- Bestäm och publicera godkända licenser för dokumentation och kod/schema.
- Utse ansvariga granskare och slå på skyddade brancher. `.github/CODEOWNERS` innehåller enbart ett exempel och är **inte aktivt**.
- Importera bara material som ni har rätt att återpublicera.
- Markera tydligt skillnaden mellan **utkast** och **officiellt fastställd version**.

Se även [CONTRIBUTING.md](CONTRIBUTING.md), [GOVERNANCE.md](GOVERNANCE.md) och [LICENSING.md](LICENSING.md).
