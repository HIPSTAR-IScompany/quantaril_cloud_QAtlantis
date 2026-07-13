import {access, readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDir, '../..');
const redirectsPath = path.join(repositoryRoot, 'migration/redirects.json');
const buildDir = path.join(repositoryRoot, 'build');

async function main() {
  const redirects = JSON.parse(await readFile(redirectsPath, 'utf8'));
  if (!Array.isArray(redirects)) {
    throw new Error('redirects.jsonは配列である必要があります');
  }
  try {
    await access(buildDir);
  } catch {
    throw new Error('build/ が見つかりません。先に npm run build を実行してください');
  }

  const problems = [];
  for (const {from, to} of redirects) {
    const targetHtml = path.join(buildDir, to, 'index.html');
    try {
      await access(targetHtml);
    } catch {
      problems.push(`${from} -> ${to}: build出力に ${path.relative(repositoryRoot, targetHtml)} が見つかりません`);
    }
  }

  console.log(`redirects検査: ${redirects.length}件中 ${problems.length}件の疑義`);
  for (const problem of problems) {
    console.log(`  - ${problem}`);
  }
  if (problems.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(`check-redirects: ${error.message}`);
  process.exitCode = 1;
});
