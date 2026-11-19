# DVJ Snapshot – demo

> **Ej officiell specifikation.** Filerna nedan är ett litet, illustrativt exempel för att prova schema, exempeldata, AsyncAPI och automatisk validering i en PoC. De är **inte** NOPTIS PoC 2 v0.3.0 och beskriver inte alla verkliga NOPTIS-krav.

## Versioner hålls isär

| Begrepp | Betydelse här |
| --- | --- |
| NOPTIS 2.0 | Initiativets version, inte en filversion |
| `v1` i MQTT-ämnet | Illustrativ version av ämnesstrukturen |
| Schema v0.3.0 | Verkligt NOPTIS-schema; finns **inte** i detta repo |
| `demo` | Filerna på denna sida |

## Källfiler

Källfilerna ligger i repots rot. Sidan visar dem direkt från dessa filer, utan kopior i Markdown.

- [`schemas/realtime/dvj-snapshot/demo/schema.json`](https://github.com/drskanetrafiken/noptis-open-docs-poc/blob/main/schemas/realtime/dvj-snapshot/demo/schema.json) – JSON Schema Draft 2020-12
- [`examples/realtime/dvj-snapshot/demo/snapshot.json`](https://github.com/drskanetrafiken/noptis-open-docs-poc/blob/main/examples/realtime/dvj-snapshot/demo/snapshot.json) – giltigt exempel
- [`apis/realtime/dvj-snapshot/demo/asyncapi.yaml`](https://github.com/drskanetrafiken/noptis-open-docs-poc/blob/main/apis/realtime/dvj-snapshot/demo/asyncapi.yaml) – AsyncAPI 3.0 för MQTT

## Validering

`npm run validate` körs lokalt och i varje Pull Request:

- `validate:json` validerar varje `schemas/**/schema.json` mot Draft 2020-12 (Ajv) och alla exempel i motsvarande mapp under `examples/`.
- `validate:asyncapi` validerar varje `apis/**/asyncapi.yaml` med AsyncAPI-parsern, inklusive att `$ref` till schemat går att lösa.

**Begränsning:** AsyncAPI 3.0 bygger på JSON Schema Draft 07. AsyncAPI-parsern accepterar formatet `application/schema+json;version=2020-12` men kontrollerar inte innehållet. Därför kontrolleras det refererade schemat i stället med Ajv. Exemplet valideras mot schemat, inte via AsyncAPI.

## Schema

<<< @/../schemas/realtime/dvj-snapshot/demo/schema.json

## Exempel

<<< @/../examples/realtime/dvj-snapshot/demo/snapshot.json

## AsyncAPI

<<< @/../apis/realtime/dvj-snapshot/demo/asyncapi.yaml
