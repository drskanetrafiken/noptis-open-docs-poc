# Bidra till NOPTIS Open Docs

Detta dokument är ett **utkast**, inte ett beslut från NOPTIS.

Välkommen! Detta projekt är en **Proof of Concept (PoC)** för att utforska hur NOPTIS-standarder kan dokumenteras, diskuteras och vidareutvecklas genom ett öppet och transparent arbetssätt med GitHub.

Alla är välkomna att bidra med frågor, synpunkter, förbättringsförslag och tekniska ändringar. Du behöver inte vara utvecklare för att delta.

## Så bidrar du

### 1. Skapa ett Issue

Börja med att [skapa ett Issue](https://github.com/drskanetrafiken/noptis-open-docs-poc/issues) för att rapportera ett fel, ställa en fråga eller föreslå en förbättring.

Beskriv gärna:

- **Vad:** Vad gäller frågan eller förslaget?
- **Var:** Vilket gränssnitt, dokument eller schema berörs?
- **Version:** Vilken version gäller det, om tillämpligt?
- **Varför:** Vad är problemet eller behovet?
- **Påverkan:** Vilka system, integrationer eller användare kan påverkas?

Sök gärna bland befintliga Issues innan du skapar ett nytt för att undvika dubbletter.

Du kan också delta i diskussioner genom att kommentera befintliga Issues.

### 2. Föreslå en ändring

Vill du själv föreslå en konkret ändring gör du det genom en **Pull Request (PR)**.

1. Skapa en *fork* (egen kopia) av projektet på GitHub.
2. Skapa en separat branch för din ändring.
3. Genomför ändringarna i din branch.
4. Skapa en Pull Request mot projektets `main`-branch.
5. Beskriv ändringen och länka till relevant Issue.

Håll varje Pull Request fokuserad på ett tydligt avgränsat förslag. Undvik att blanda orelaterade ändringar.

**Tips:** För mindre dokumentationsändringar kan du använda GitHubs webbgränssnitt direkt. Du behöver inte installera Git, utvecklingsverktyg eller VitePress lokalt.


### 3. Branch naming

Use a short, descriptive branch name that reflects the proposed change.

Recommended format: `<type>/<short-description>`

Examples:
- `docs/add-doi-page`
- `fix/incorrect-rti-description`
- `feat/add-interface-documentation`
- `schema/update-rti-elements`

Use lowercase letters and hyphens to separate words.

This convention is recommended but not mandatory for external contributors. Clear Pull Request descriptions are more important than strict branch naming.

### 4. Dokumentation och scheman

Projektet innehåller bland annat:

- `docs/` - Dokumentation och beskrivningar av standarderna.
- `schemas/` - Tekniska scheman, exempelvis XSD.
- `examples/` - Exempel på meddelanden och användning.

Tänk på följande:

- Använd tydligt och konsekvent språk.
- Följ befintlig struktur, namngivning och formatering.
- Om dokumentation och schema beskriver samma funktionalitet ska båda uppdateras i samma Pull Request.
- Uppdatera eller komplettera exempel när ändringen kräver det.
- Undvik ändringar som inte är relevanta för förslaget.

### 5. Ändringar som påverkar kompatibilitet

Ändringar i tekniska scheman eller gränssnitt kan påverka befintliga integrationer.

Beskriv därför:

- Vad som förändras och varför.
- Om befintliga meddelanden fortfarande är giltiga.
- Om äldre klienter och system kan fortsätta fungera utan ändringar.
- Eventuella begränsningar eller migreringsbehov.

Bifoga relevanta testexempel och beskriv hur ändringen har verifierats.

**Bakåtkompatibilitet är viktig.** Ändringar som riskerar att bryta befintliga integrationer ska identifieras tydligt och diskuteras innan de godkänns.


## Granskning och godkännande

Alla Pull Requests granskas innan de kan slås samman (*merge*).

Granskningen kan omfatta:

- Teknisk korrekthet och konsekvens.
- Påverkan på befintliga standarder och integrationer.
- Bakåtkompatibilitet.
- Dokumentationens tydlighet och kvalitet.
- Eventuella testresultat.

En utsedd ansvarig granskar förslaget och kan begära kompletteringar eller justeringar.

Diskussioner och beslut ska så långt som möjligt dokumenteras i tillhörande Issue eller Pull Request, så att ändringarnas bakgrund går att följa.

### Viktigt om officiella standardversioner

**En godkänd och sammanslagen Pull Request innebär inte automatiskt att ändringen är en officiellt fastställd NOPTIS-standard.**

Officiella versioner fastställs genom en separat godkännandeprocess och identifieras med en release och versionsmärkning (Git-tagg).

Detta gör det möjligt att utveckla och diskutera förslag öppet utan att varje ändring automatiskt blir en del av en officiell standardversion.

## Uppförande och samarbete

Vi eftersträvar ett öppet, konstruktivt och respektfullt samarbete.

- Håll diskussioner sakliga och relevanta.
- Motivera förslag och tekniska ställningstaganden.
- Var öppen för synpunkter och alternativa lösningar.
- Respektera att andra kan ha olika tekniska förutsättningar och perspektiv.

Målet är att tillsammans skapa tydligare, mer tillgängliga och välförankrade standarder.

## Viktigt - projektets PoC-status

Detta projekt är fortfarande en prototyp. Licensvillkor, publiceringsrättigheter och formella godkännanderegler är ännu inte slutligt fastställda.

**Publicera eller skicka inte in verkligt NOPTIS-material, skyddad information eller innehåll som du saknar rätt att dela förrän publiceringsrätten är bekräftad.**

Under PoC-fasen kan exempel, testdata och diskussioner användas för att utvärdera arbetssättet.

---

**Har du en fråga eller idé?** Börja gärna med att [skapa ett Issue](https://github.com/drskanetrafiken/noptis-open-docs-poc/issues/new).

