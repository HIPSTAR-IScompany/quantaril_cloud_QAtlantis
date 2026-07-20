---
title: 2026-07-20 公開資料マイニング受領票
description: Manifest、Atlantis、Google DriveからQ Atlantisへ採用した論点と、採用しなかった旧状態を記録する。
---

# 2026-07-20 公開資料マイニング受領票

状態: `CURRENT INTERPRETATION / PUBLICATION RECEIPT`

この受領票は、Q Atlantisの公開面を更新するために参照した資料と、どの主張をどの棚へ投影したかを記録します。
Google Drive上の資料は読み取り専用で参照し、原文の公開可否を変更していません。Driveへのアクセスを持たない
読者でもこのサイトの公開文書だけで状態を読めるようにし、access-controlledな原文を公開依存にしません。

## 採用した正本・研究Source

| Source | 採用した範囲 | 投影先 |
|---|---|---|
| Atlantis `0.25.1-alpha.1` release candidate | `OPEN / RESOURCE-WAIT`、旧3x/4x残骸保存、runner未着手、edge火力待ち | status、製品系列 |
| Atlantis Fold深度・減圧Unfold note `1e9c3c3` | L/D/G、Controlled Unfold、Agencyと観測価値、長期Gテスト | 工学、ゲーム、信仰、哲学 |
| Manifest横断受領note `3ed558d` | 棚別配信、unknown保全、MAGI Position監査 | 運用、来歴 |
| Fold 7G Trion Bond Protocol `v0.0.1β` | 意味・因果・規範状態の同期候補、物理無線の非主張 | Fold研究地図 |
| OS3x/4x調査報告 | 旧実行系の実在証跡、サービス終了、精霊流し、未サルベージ範囲 | Memorial、系譜 |

## Google Driveから採用した素材

| 文書名 | 最終観測 | 採用方法 |
|---|---:|---|
| SphereOS Atlantis マーケティング素材｜虚空の揺籠からシャンフロ世代エンジンへ｜レジスター拡張案 | 2026-07-16 | 創作原型、現行技術、宣伝文を別レジスターへ分離 |
| SphereOS・Quantaril Cloud・情報子工学 統合アーキテクチャ／プロジェクトデータシート 0.5 | 2026-07-12 | 製品ライン候補と状態ラベルを抽出し、現行repoで再照合 |
| ZeroRoomLab OS3x/4x時代ドキュメント調査報告書 | 2026-07-12 | 旧世代の実体、サ終理由、精霊流し候補、未検証穴を抽出 |
| ふさもふ霊的占術フレームワーク FAM | 2026-07-16 | 信仰告白を工学証拠へ変換せず、FAMを複数Worldで使う例として参照 |

## 採用しなかった、または上書きした旧状態

- Drive文書中の「SphereOS全体は凍結中」は、2026-07-19以降の現行statusと衝突するため現在表示へ採用しない。
- 現在は完成品開発の全面再開でも全体凍結でもなく、開発入口を開いた`OPEN / RESOURCE-WAIT / REVIEW-WANTED`である。
- `Fold7G / Fold8G`を通信層へ置いた図だけから、runtime、無線規格、machine contractが実装済みとは書かない。
- `虚空の揺籠`とゲーム作品の比喩は創作・マーケ棚に置き、第三者作品との提携・公式互換を主張しない。
- スピリチュアル資料は本人の信仰告白・実践Worldとして扱い、科学的実証または全宗派の共通仕様へ変換しない。

## 現在も残る穴

- Fold8Gの独立した責務、接続条件、失敗状態、Fold7Gとの差分は`unknown`。
- Fold7G各GのRegistry、D宣言、Controlled Unfoldのmachine schemaは`NOT IMPLEMENTED`。
- 旧3x/4xの全ログ、旧オーケストレーターヘッド構成、未読原典は全量回収済みではない。
- ASTRO Runner、Atlantis Server、Server Advanced、Docker Kanaloaは製品系列候補で、完成配布物ではない。

穴は宣伝上の欠陥として隠さず、参加者が調査・実装・反証を持ち込める公開クエストとして残します。

## MAGI Position監査

```yaml
declared_position: Q Atlantis公開面の再構成担当
position_talk_risks:
  - marketing素材を現在の実装状態へ昇格する
  - engineeringが信仰とゲームExperienceを補助データへ縮退する
  - 旧凍結表示を現在へ遡及適用する
  - Fold8Gの空白を推測で埋める
ruler_provenance:
  - current Atlantis status and release candidate
  - Manifest cross-shelf contracts
  - access-controlled Drive source review
preserved_unknowns:
  - Fold8G contract
  - production runtime
  - unsalvaged legacy evidence
historical_oae_status: historical-oae-unavailable
last_order: OAE-HISTORY-UNKNOWN / stop-retroactive-backfill
```

## 関連

- [棚別文書レジスターと公開パイプライン](../cross-shelf-publication-register.md)
- [来歴と正本](./index.md)
- 受領台帳: `pipeline/transfer-queue.json`
