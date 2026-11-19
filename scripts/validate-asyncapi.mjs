// Validates every apis/**/asyncapi.yaml with the official AsyncAPI parser.
// The parser checks the document structure and resolves $refs (broken refs fail),
// but it does not validate JSON Schema Draft 2020-12 payloads. Payloads declared as
// Draft 2020-12 are therefore checked here with Ajv; other formats must be ones the
// parser itself supports, so nothing is silently skipped.
// Usage: node scripts/validate-asyncapi.mjs [repoRoot]   (default: this repo)
import { readdirSync, existsSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Parser, fromFile, DiagnosticSeverity } from '@asyncapi/parser';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const DRAFT_2020_12 = 'https://json-schema.org/draft/2020-12/schema';
const FORMAT_2020_12 = 'application/schema+json;version=2020-12';
const root = resolve(process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), '..'));
const rel = (p) => relative(root, p).split(sep).join('/');

let failures = 0;
const fail = (file, msg) => {
  failures++;
  console.error(`FAIL ${rel(file)}: ${msg}`);
};

// All files under dir (sorted, recursive), skipping dot folders and node_modules.
function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    .flatMap((e) => {
      if (e.name.startsWith('.') || e.name === 'node_modules') return [];
      const p = join(dir, e.name);
      return e.isDirectory() ? walk(p) : [p];
    });
}

// Checks a resolved Draft 2020-12 payload schema with Ajv; returns an error message or null.
// The parser adds its own "x-parser-*" annotations to resolved schemas; drop them first.
function check2020(resolved) {
  const schema = JSON.parse(JSON.stringify(resolved, (k, v) => (k.startsWith('x-parser-') ? undefined : v)));
  if (schema?.$schema !== DRAFT_2020_12) {
    return `$schema must be "${DRAFT_2020_12}" (found ${JSON.stringify(schema?.$schema)})`;
  }
  const ajv = new Ajv2020({ allErrors: true });
  addFormats(ajv);
  if (!ajv.validateSchema(schema)) {
    return `not a valid Draft 2020-12 schema: ${ajv.errorsText(ajv.errors)}`;
  }
  try {
    ajv.compile(schema);
  } catch (err) {
    return `cannot compile schema: ${err.message}`;
  }
  return null;
}

const files = walk(join(root, 'apis')).filter((p) => p.endsWith(`${sep}asyncapi.yaml`));
if (files.length === 0) fail(join(root, 'apis'), 'no asyncapi.yaml files found');

const parser = new Parser();
for (const file of files) {
  const { document, diagnostics } = await fromFile(parser, file).parse();
  for (const d of diagnostics) {
    const where = d.path?.length ? ` at ${d.path.join('.')}` : '';
    if (d.severity === DiagnosticSeverity.Error) fail(file, `${d.code}${where}: ${d.message}`);
    else if (d.severity === DiagnosticSeverity.Warning) console.warn(`warn ${rel(file)}: ${d.code}${where}: ${d.message}`);
  }
  if (!document) {
    if (!diagnostics.some((d) => d.severity === DiagnosticSeverity.Error)) fail(file, 'parser returned no document');
    continue;
  }

  let ok = true;
  for (const message of document.allMessages()) {
    const payload = message.payload();
    if (!payload) continue;
    const format = payload.schemaFormat();
    let error = null;
    if (format === FORMAT_2020_12) {
      error = check2020(payload.json().schema);
    } else if (!parser.parserRegistry.has(format)) {
      error = `unsupported schemaFormat "${format}" (neither the AsyncAPI parser nor this script validates it)`;
    }
    if (error) {
      ok = false;
      fail(file, `message "${message.id()}" payload: ${error}`);
    }
  }
  if (ok) console.log(`ok   ${rel(file)}`);
}

if (failures > 0) {
  console.error(`\n${failures} AsyncAPI validation problem(s).`);
  process.exit(1);
}
console.log(`\nAll ${files.length} AsyncAPI document(s) are valid.`);
