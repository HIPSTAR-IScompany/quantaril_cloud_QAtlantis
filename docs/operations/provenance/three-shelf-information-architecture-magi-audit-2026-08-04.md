---
title: 2026-08-04 Docs・Reference・Glossary三棚化MAGI監査
description: Q Atlantis公開文書を読む棚、実装する棚、用語を解決する棚へ分ける際のPosition・状態・意味経路監査。
---

# 2026-08-04 Docs・Reference・Glossary三棚化MAGI監査

- Status: `INTERPRETATION-OAE / DEV-PREVIEW`
- observed at: `2026-08-04T12:54:15+09:00`
- target: Q Atlantis Docusaurus navigation、`docs/`、`reference/`、`glossary/`
- medium: public documentation site
- claim layer: `Layer A/B/C routing`

## Declared Position

ユーザーが指定した次の読者行動を、公開URLとsidebarの責務へ実装する。

```text
/docs/       読む・考える・試す
/reference/  製品・moduleを実装する
/glossary/   言葉を解決する
```

既存Docsの神話、信仰、研究、実験、事故記録を「実装に不要な文章」としてReferenceへ吸収・削除しない。
Referenceはcomponent正本を複製せず、責務、状態、非対象、正本へのAccess Mapを置く。

## Position-talk Risk

- このrepositoryは公開Presentationのmaintainerであり、SphereOS Atlantis、IBD、OND等の実装正本そのものではない。
- Docusaurus上でページを作れたことを、module runtime実装済みの証拠へ変換するriskがある。
- 情報探索効率を理由に、神話、信仰、人物、芸能、失敗記録を低位棚へ格下げするriskがある。

## MAGI三Position

### Maxwell

- AboutとDocsが保持する原初目的、信仰、神話、未来branchをReference化で焼却しない。
- 全moduleの定義を今回一括固定せず、代表entryから始め、未マウント項目を将来branchとして残す。
- 判定: `pass with preserved branches`

### Uriel

- `IMPLEMENTED-ALPHA`、`SPEC`、`RESEARCH`、`NOT IMPLEMENTED`、`UNKNOWN`をReference上で分離する。
- Q Atlantisの公開案内と、各component repositoryのschema・code・test正本を分離する。
- Docusaurus build成功はroute成立の証拠であり、個別runtimeの動作証明ではない。
- 判定: `pass with status labels`

### Raphael

- 三棚を同一sidebar内のcategoryではなく、別docs plugin、別route、別sidebarとして分ける。
- Glossaryは短い定義からDocsとReferenceへ渡し、長い正本本文を複製しない。
- 既存`/docs/...` URLは保持し、移動は文書ごとの人間review後に行う。
- 判定: `pass with non-destructive routing`

## Agreements

- 三棚は格付けではなく、読者行動ごとのAccess Mapである。
- 実装状態と思想・信仰・研究の価値を同じscaleで採点しない。
- 初回はroute、sidebar、入口、代表用語、代表moduleをレビュー可能なsliceとして実装する。

## Preserved unknown / User Gate

- 全製品・moduleの最終taxonomyと配置。
- 既存`docs/engineering/`文書のうち、どれをReferenceへ昇格・分割するか。
- OND各moduleの正本revisionと公開可能な最新試験境界。
- Glossary各familyの完全な用語集合とstable ID。

これらはlocalhost上の人間review後に決める。今回の骨格から自動推定しない。

## OAE Temporal Integrity

過去の同時点OAEは今回の棚設計に不要であり、commitや旧文書から過去のObserver／Intentを生成しない。

```yaml
observation_mode: current-interpretation-of-current-sources
historical_oae_status: historical-oae-unavailable
retroactive_backfill: false
same_worldline_mutation: false
last_order:
  code: OAE-HISTORY-UNKNOWN
  action: stop-retroactive-backfill
```

## Action gate

`pass`。dev previewへ限定して実装し、production mergeは人間review後とする。
