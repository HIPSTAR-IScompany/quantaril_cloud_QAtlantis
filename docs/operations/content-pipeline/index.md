---
title: ノートから公開文書へのパイプライン
---

# ノートから公開文書へのパイプライン

ZeroRoomLab-manifest、Google Drive、ローカルノート、黙示録原典などから、このサイトへ安全に記述するための運用です。

```text
原典・ノート
  → source registryへ登録
  → 重複・世代・正本候補を判定
  → Layer A/B/Cと棚候補を提示
  → stagingへ生成
  → 人間が差分・声・主張範囲を確認
  → docs / blog / aboutへ公開
```

## 直接上書きしない

旧`generate_*.py`は、固定された絶対パスと旧階層を使い、公開ディレクトリへ直接書き込むため、`pipeline/legacy/`へ移しました。資料として保存しますが、現行生成器として実行しません。

## 現在の最小実装

リポジトリの`pipeline/transfer-queue.json`に、Atlantisハブ、Grainer、精霊流し、funeral、Product Architecture、
IBD/AQC、Instance Ghost、GUI、Infoton、棚別Meaning Bridge、Fold深度・減圧Unfold等のアンカー17件を
登録しています。

```bash
npm run content:list
npm run content:check
npm run content:stage -- <entry-id>
```

`content:stage`は原文と転送メタデータを`pipeline/staging/`へ作り、`docs / blog / about`には書き込みません。同じIDのステージングが存在する場合は上書きせず停止します。

新しい生成系には次を要求します。

- `--dry-run`を既定にする。
- 出力は`pipeline/staging/`へ作る。
- 原典のrepository、path、revision、dateを必須にする。
- 手書き文書との衝突時は停止する。
- 削除や上書きを自動承認しない。
- `DRAFT / REVIEW / CANONICAL / TRANSFERRED`を記録する。
- 体験、解釈、仮説、実装を一つの断定文へ圧縮しない。
- 日本語原文と人格の声を保持する。

## 転送単位

文書全体ではなく、必要に応じて節・主張・仕様・人格属性単位で転送できます。その場合も、元文書、抽出範囲、転送しなかった部分を台帳へ残します。
