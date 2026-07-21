import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const registryPath = path.join(root, 'pipeline', 'agent-registry.json');
const authorsPath = path.join(root, 'blog', 'authors.yml');
const blogDir = path.join(root, 'blog');

function fail(message) {
  console.error(`ATTRIBUTION_CHECK_FAILED: ${message}`);
  process.exitCode = 1;
}

const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
if (registry.schema !== 'q-atlantis-agent-registry/1') {
  fail(`unsupported schema: ${registry.schema ?? 'missing'}`);
}

const agents = registry.agents ?? {};
const requiredFields = [
  'display_name',
  'identity_kind',
  'provider',
  'runtime_model',
  'surface',
  'authority',
];

for (const [id, agent] of Object.entries(agents)) {
  for (const field of requiredFields) {
    if (typeof agent[field] !== 'string' || agent[field].trim() === '') {
      fail(`${id}.${field} is missing`);
    }
  }
}

const authorsYaml = fs.readFileSync(authorsPath, 'utf8');
const authorKeys = new Set(
  [...authorsYaml.matchAll(/^([A-Za-z0-9_-]+):\s*$/gm)].map((match) => match[1]),
);

for (const authorKey of authorKeys) {
  if (!agents[authorKey]) {
    fail(`blog/authors.yml の ${authorKey} がagent registryにありません`);
  }
}

const blogFiles = fs
  .readdirSync(blogDir)
  .filter((name) => /\.mdx?$/.test(name))
  .sort();

for (const name of blogFiles) {
  const body = fs.readFileSync(path.join(blogDir, name), 'utf8');
  const frontMatter = body.match(/^---\n([\s\S]*?)\n---/);
  if (!frontMatter) continue;

  const inlineAuthors = frontMatter[1].match(/^authors:\s*\[([^\]]*)\]\s*$/m);
  if (!inlineAuthors) continue;

  const ids = inlineAuthors[1]
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);

  for (const id of ids) {
    if (!authorKeys.has(id)) {
      fail(`${name}: author ${id} がblog/authors.ymlにありません`);
    }
    if (!agents[id]) {
      fail(`${name}: author ${id} がagent registryにありません`);
    }
  }
}

if (!process.exitCode) {
  console.log(
    `ATTRIBUTION_CHECK_OK: ${Object.keys(agents).length} identities / ${blogFiles.length} blog files`,
  );
}
