import {access, mkdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDir, '../..');
const registryPath = path.join(repositoryRoot, 'pipeline/transfer-queue.json');
const allowedStatuses = new Set(['DRAFT', 'REVIEW', 'CANONICAL', 'TRANSFER-QUEUED', 'TRANSFERRED', 'UNKNOWN']);
const allowedLayers = new Set(['A', 'B', 'C']);
const allowedModes = new Set(['copy', 'extract', 'rewrite', 'index-only']);
const allowedSourceKinds = new Set(['local-file', 'remote-reference']);
const allowedTargetRoots = new Set(['docs', 'blog', 'about']);

function fail(message) {
  throw new Error(message);
}

function requireText(value, field, id) {
  if (typeof value !== 'string' || value.trim() === '') {
    fail(`${id}: ${field} は空でない文字列が必要です`);
  }
}

function resolveSource(sourcePath) {
  return path.isAbsolute(sourcePath)
    ? path.normalize(sourcePath)
    : path.resolve(repositoryRoot, sourcePath);
}

async function loadRegistry() {
  const registry = JSON.parse(await readFile(registryPath, 'utf8'));
  if (registry.version !== 1 || !Array.isArray(registry.entries)) {
    fail('transfer-queue.jsonのversionまたはentriesが不正です');
  }
  return registry;
}

async function validateRegistry(registry) {
  const ids = new Set();

  for (const entry of registry.entries) {
    const id = entry?.id ?? '<unknown>';
    requireText(entry?.id, 'id', id);
    requireText(entry?.title, 'title', id);
    requireText(entry?.target, 'target', id);
    requireText(entry?.shelf, 'shelf', id);

    if (!/^[a-z0-9][a-z0-9-]*$/.test(entry.id)) fail(`${id}: idの形式が不正です`);
    if (ids.has(entry.id)) fail(`${id}: idが重複しています`);
    ids.add(entry.id);

    if (!allowedStatuses.has(entry.status)) fail(`${id}: statusが不正です`);
    if (!allowedLayers.has(entry.layer)) fail(`${id}: layerが不正です`);
    if (!allowedModes.has(entry.mode)) fail(`${id}: modeが不正です`);
    if (!entry.source || !allowedSourceKinds.has(entry.source.kind)) fail(`${id}: source.kindが不正です`);
    requireText(entry.source.path, 'source.path', id);

    const normalizedTarget = path.posix.normalize(entry.target);
    const targetRoot = normalizedTarget.split('/')[0];
    if (normalizedTarget.startsWith('../') || !allowedTargetRoots.has(targetRoot)) {
      fail(`${id}: targetはdocs / blog / aboutの配下に限定されます`);
    }

    if (entry.source.kind === 'local-file') {
      try {
        await access(resolveSource(entry.source.path));
      } catch {
        fail(`${id}: 原典が見つかりません: ${entry.source.path}`);
      }
    }
  }

  return registry.entries;
}

function printList(entries) {
  for (const entry of entries) {
    console.log(`${entry.id}\t${entry.status}\tLayer ${entry.layer}\t${entry.mode}\t${entry.target}`);
  }
}

async function stageEntry(entries, id) {
  requireText(id, 'entry-id', 'stage');
  const entry = entries.find((candidate) => candidate.id === id);
  if (!entry) fail(`転送キューに存在しないIDです: ${id}`);

  const stageDir = path.join(repositoryRoot, 'pipeline/staging', entry.id);
  try {
    await access(stageDir);
    fail(`既存のステージングを上書きしません: ${stageDir}`);
  } catch (error) {
    if (!String(error.message).startsWith('既存のステージング')) {
      await mkdir(stageDir, {recursive: true});
    } else {
      throw error;
    }
  }

  const metadata = {
    ...entry,
    source: {
      ...entry.source,
      resolvedPath: entry.source.kind === 'local-file' ? resolveSource(entry.source.path) : undefined,
    },
    stagedAt: new Date().toISOString(),
    publishDirectly: false,
  };

  if (entry.source.kind === 'local-file') {
    const sourceBytes = await readFile(resolveSource(entry.source.path));
    await writeFile(path.join(stageDir, 'source.md'), sourceBytes, {flag: 'wx'});
  } else {
    await writeFile(path.join(stageDir, 'source-reference.txt'), `${entry.source.path}\n`, {flag: 'wx'});
  }

  await writeFile(path.join(stageDir, 'transfer.json'), `${JSON.stringify(metadata, null, 2)}\n`, {flag: 'wx'});
  await writeFile(
    path.join(stageDir, 'README.md'),
    `# ${entry.title}\n\n原文とtransfer.jsonを確認し、抽出範囲・未転送部分・主張境界を決めてから公開文書を作成してください。\n`,
    {flag: 'wx'},
  );

  console.log(`ステージングを作成しました: ${path.relative(repositoryRoot, stageDir)}`);
}

async function main() {
  const command = process.argv[2] ?? 'check';
  const registry = await loadRegistry();
  const entries = await validateRegistry(registry);

  if (command === 'check') {
    console.log(`転送キュー検査OK: ${entries.length}件`);
    return;
  }
  if (command === 'list') {
    printList(entries);
    return;
  }
  if (command === 'stage') {
    await stageEntry(entries, process.argv[3]);
    return;
  }
  fail(`未対応のコマンドです: ${command}`);
}

main().catch((error) => {
  console.error(`content-pipeline: ${error.message}`);
  process.exitCode = 1;
});
