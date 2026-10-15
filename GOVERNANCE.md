# Förvaltningsprocess – förslag för test

Detta dokument är ett **utkast**, inte ett beslut från NOPTIS.

## Roller

- **Bidragsgivare:** vem som helst kan öppna Issue och föreslå PR.
- **Granskare:** utsedda representanter säkerställer teknisk kvalitet och konsekvenser.
- **Standardägare:** behörigt NOPTIS-organ avgör om en normativ ändring ska bli officiell.

## Ändringsflöde

`Issue → diskussion → Pull Request → granskning/test → merge till main (utkast) → formellt beslut → versionerad Release`

En redaktionell korrigering och en bakåtinkompatibel protokolländring ska inte behandlas identiskt. Inför en enkel klassificering i PR:n och låt standardägaren godkänna process och mandat före officiell användning.

## Versioner

- Varje gränssnitt (RII, VSI, DOI etc.) kan versioneras oberoende.
- En Release och en tagg representerar ett *fryst tillstånd*; ändra aldrig en publicerad versions innebörd tyst i efterhand.
- Exempel på namn i prototypen: `rii-v2.0.0-demo` och `vsi-v3.0.0-demo`.
- `main` är redigerbart arbetsmaterial och ska alltid betecknas som **utkast** tills annat uttryckligen fastställts.

## GitHub-inställningar som ska göras manuellt

- Aktivera `Issues` och Pull Requests.
- Skydda `main` med minst en godkänd review och godkänd CI.
- Ange riktiga team/användare i `.github/CODEOWNERS` och aktivera Code Owner-review om det behövs.
- Begränsa vem som får publicera officiella Releases.
