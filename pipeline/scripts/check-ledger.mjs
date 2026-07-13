import {access, readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDir, '../..');
const ledgerPath = path.join(repositoryRoot, 'migration/content-ledger.yml');

function parseEntries(text) {
  const lines = text.split('\n');
  const entries = [];
  let current = null;
  for (const line of lines) {
    const oldMatch = line.match(/^\s*-\s*old:\s*(.+)$/);
    const newMatch = line.match(/^\s*new:\s*(.+)$/);
    if (oldMatch) {
      if (current) entries.push(current);
      current = {old: oldMatch[1].trim(), new: null};
      continue;
    }
    if (newMatch && current && current.new === null) {
      current.new = newMatch[1].trim();
    }
  }
  if (current) entries.push(current);
  return entries;
}

function isConcretePath(candidate) {
  return Boolean(candidate) && !candidate.includes('*') && !candidate.includes(' ');
}

async function exists(relativePath) {
  try {
    await access(path.resolve(repositoryRoot, relativePath));
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const text = await readFile(ledgerPath, 'utf8');
  const entries = parseEntries(text);
  if (entries.length === 0) {
    throw new Error('台帳エントリを1件も読めませんでした(パース失敗の可能性)');
  }

  const problems = [];
  for (const entry of entries) {
    if (!entry.new) {
      problems.push(`${entry.old}: newフィールドが読み取れません`);
      continue;
    }
    if (isConcretePath(entry.new) && !(await exists(entry.new))) {
      problems.push(`${entry.old} -> ${entry.new}: new側のファイルが存在しません`);
    }
    if (entry.old !== entry.new && isConcretePath(entry.old) && (await exists(entry.old))) {
      problems.push(`${entry.old} -> ${entry.new}: old側のファイルがまだ存在しています(移行未完了の可能性)`);
    }
  }

  console.log(`台帳検査: ${entries.length}件中 ${problems.length}件の疑義`);
  for (const problem of problems) {
    console.log(`  - ${problem}`);
  }
  if (problems.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(`check-ledger: ${error.message}`);
  process.exitCode = 1;
});
