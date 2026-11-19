// Validates every schemas/**/schema.json (JSON Schema Draft 2020-12) and the
// JSON examples in the matching examples/<same relative directory>/.
// Usage: node scripts/validate-json.mjs [repoRoot]   (default: this repo)
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const DRAFT_2020_12 = 'https://json-schema.org/draft/2020-12/schema';
const root = resolve(process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), '..'));
const schemasDir = join(root, 'schemas');
const examplesDir = join(root, 'examples');

let failures = 0;
const fail = (file, msg) => {
  failures++;
  console.error(`FAIL ${rel(file)}: ${msg}`);
};
const rel = (p) => relative(root, p).split(sep).join('/');

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

function readJson(file) {
  try {
    return JSON.parse(readFileSync(file, 'utf8'));
  } catch (err) {
    fail(file, `invalid JSON: ${err.message}`);
    return undefined;
  }
}

const formatErrors = (errors) =>
  errors.map((e) => `\n    ${e.instancePath || '/'} ${e.message} ${JSON.stringify(e.params)}`).join('');

// Pair each schema with examples/<relative dir>/*.json.
const schemaFiles = walk(schemasDir).filter((p) => p.endsWith(`${sep}schema.json`));
const pairedDirs = new Set(schemaFiles.map((p) => relative(schemasDir, dirname(p))));
const examplesByDir = new Map([...pairedDirs].map((d) => [d, []]));

for (const file of walk(examplesDir).filter((p) => p.endsWith('.json'))) {
  const dir = relative(examplesDir, dirname(file));
  if (examplesByDir.has(dir)) {
    examplesByDir.get(dir).push(file);
  } else if (![...pairedDirs].some((d) => dir.startsWith(d + sep))) {
    fail(file, `orphan example: no schemas/${dir.split(sep).join('/')}/schema.json`);
  } // else: nested sample-code directory below a paired example directory; ignored.
}

if (schemaFiles.length === 0) {
  fail(schemasDir, 'no schema.json files found');
}

for (const schemaFile of schemaFiles) {
  const schema = readJson(schemaFile);
  if (schema === undefined) continue;
  if (schema?.$schema !== DRAFT_2020_12) {
    fail(schemaFile, `$schema must be "${DRAFT_2020_12}" (found ${JSON.stringify(schema?.$schema)})`);
    continue;
  }

  // Ajv default strict mode (unknown keywords/formats are errors).
  const ajv = new Ajv2020({ allErrors: true });
  addFormats(ajv);
  if (!ajv.validateSchema(schema)) {
    fail(schemaFile, `not a valid Draft 2020-12 schema:${formatErrors(ajv.errors)}`);
    continue;
  }
  let validate;
  try {
    validate = ajv.compile(schema);
  } catch (err) {
    fail(schemaFile, `cannot compile schema: ${err.message}`);
    continue;
  }

  const dir = relative(schemasDir, dirname(schemaFile));
  const examples = examplesByDir.get(dir);
  if (examples.length === 0) {
    fail(schemaFile, `no examples found in examples/${dir.split(sep).join('/')}/`);
    continue;
  }
  console.log(`ok   ${rel(schemaFile)}`);

  for (const exampleFile of examples) {
    const data = readJson(exampleFile);
    if (data === undefined) continue;
    if (validate(data)) {
      console.log(`ok   ${rel(exampleFile)}`);
    } else {
      fail(exampleFile, `does not match ${rel(schemaFile)}:${formatErrors(validate.errors)}`);
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} JSON validation problem(s).`);
  process.exit(1);
}
console.log(`\nAll ${schemaFiles.length} schema(s) and their examples are valid.`);
