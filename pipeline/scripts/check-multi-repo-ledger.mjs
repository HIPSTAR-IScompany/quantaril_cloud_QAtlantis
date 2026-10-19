// v1移動台帳に加えて、v2の原典保持・coverage・日英batchを検査する。
// 通常検査のsuccessはinventoryの構造だけを意味する。公開判定は--publishで別途fail-closedに行う。
import { existsSync, readFileSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const ledger = JSON.parse(readFileSync(resolve(root, 'migration/content-ledger-v2.json'), 'utf8'));
const failures = [];
const ids = new Set();
const paths = new Set();
const sha = /^[a-f0-9]{40}$/;
function fail(message) { failures.push(message); }
function localPath(path) {
  if (typeof path !== 'string' || !path || path.startsWith('/') || path.split('/').includes('..')) {
    fail('不正な相対path: ' + path);
    return null;
  }
  const full = resolve(root, path);
  if (!full.startsWith(root + sep)) { fail('scope外path: ' + path); return null; }
  return full;
}
if (ledger.schema !== 'is-multi-repository-content-ledger/2') fail('schemaが不正です');
if (!sha.test(ledger.source_snapshot?.revision)) fail('source revisionがexact SHAではありません');
if (!sha.test(ledger.source_snapshot?.tree) || !ledger.source_snapshot?.complete_tree) fail('全treeのsnapshotがありません');
if (ledger.entries?.length !== ledger.source_snapshot?.blob_count) fail('全blob数とentry数が一致しません');
for (const entry of ledger.entries ?? []) {
  if (ids.has(entry.id) || paths.has(entry.old_path)) fail('重複entry: ' + entry.old_path);
  ids.add(entry.id); paths.add(entry.old_path);
  if (!sha.test(entry.old_blob)) fail('source blob SHA不正: ' + entry.old_path);
  const full = localPath(entry.old_path);
  if (full && !existsSync(full)) fail('原典を先に削除しました: ' + entry.old_path);
  if (!entry.preserve_reason?.trim()) fail('保存理由がありません: ' + entry.old_path);
  if (!['preserved-only', 'user-gate'].includes(entry.migration_status)) fail('未定義のinventory status: ' + entry.old_path);
  if (entry.candidate_repository && !ledger.registry[entry.candidate_repository]) fail('未登録repo: ' + entry.old_path);
}
const generated = new Set((ledger.generated_paths ?? []).map(entry => entry.path));
for (const path of execFileSync('git', ['ls-files', '-z'], {cwd: root, encoding: 'utf8'}).split('\u0000').filter(Boolean)) {
  if (!paths.has(path) && !generated.has(path)) fail('inventory未登録のtracked path: ' + path);
}
let pairs = 0;
for (const batch of ledger.batches ?? []) {
  if (!ledger.registry[batch.repository] || !sha.test(batch.source_commit)) fail('batch repository/revisionが不正');
  if (batch.status !== 'built' || !batch.build_evidence?.startsWith('https://github.com/' + batch.repository + '/actions/runs/')) fail('batch build証跡がありません');
  const batchPaths = new Set();
  for (const item of batch.items ?? []) {
    pairs += 1;
    for (const path of [item.japanese, item.english]) {
      if (!path || path.startsWith('/') || path.split('/').includes('..') || batchPaths.has(path)) fail('batch path不正または重複: ' + path);
      batchPaths.add(path);
    }
    if (!item.english?.startsWith('i18n/en/') || !item.japanese?.startsWith('docs/')) fail('日英pairのpathが不正');
    if (!item.sources?.length) fail('出典がありません: ' + item.japanese);
    for (const source of item.sources ?? []) {
      if (!sha.test(source.revision) || !source.url?.startsWith('https://github.com/' + source.repository + '/blob/' + source.revision + '/')) fail('出典pinが不正: ' + item.japanese);
      if (!source.license) fail('出典license欄がありません');
    }
  }
}
if (process.argv.includes('--publish')) {
  for (const entry of ledger.entries ?? []) {
    if (!entry.target || entry.license === 'UNKNOWN' || entry.asset_ref_status !== 'VERIFIED') fail('公開未判定: ' + entry.old_path);
  }
  for (const batch of ledger.batches ?? []) if (batch.deployment !== 'PUBLIC_VERIFIED') fail('公開未観測: ' + batch.repository);
}
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
const unresolved = ledger.entries.filter(entry => entry.license === 'UNKNOWN' || entry.migration_status === 'user-gate').length;
console.log('v2 inventory: ' + paths.size + ' paths / ' + pairs + ' 日英pairs。構造と原典保持を確認。');
console.log('publication readiness: NOT_VERIFIED。権利または分類の未判定: ' + unresolved + ' paths。asset参照scan・本文review・新site deployは別工程。');
