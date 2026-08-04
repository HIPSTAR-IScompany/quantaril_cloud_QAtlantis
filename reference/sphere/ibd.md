---
title: IBD Reference
description: Infoton BaseDriverの責務、Q Atlantis側の採用状態、実装正本への入口。
---

# IBD Reference

状態: `RESEARCH / Phase 0`

IBD（Infoton BaseDriver）は、記憶、関係、provenance、FAM traceを、特定の神話、人格、model vendorへ固定せず
保存・探索するcomponentです。Q AtlantisではAQCから分離した保存責務の移行先として扱います。

## 責務

- FAMとsource provenanceを失わない保存・索引。
- Query FAMを受け、sourceを破壊しない探索・合成routeを返す。
- `unknown`、Evidence freshness、Last Orderを欠損のまま保持する。
- database binderやbackendを、上位Worldの唯一の意味定規へしない。

## 引き受けないこと

- World、神学、人格、善悪、因果の最終判定。
- Q Atlantis全体のorchestration。
- 文書に記載された将来構想を、production runtimeとして保証すること。

## 正本と関連入口

- [IBD実装repository](https://github.com/saitoomituru/IBD)
- [Docs: Q Atlantis component map](/docs/engineering/q-atlantis/component-map)
- [Docs: Q Atlantis status](/docs/engineering/q-atlantis/status)
- [用語: FAM](/glossary/infoton/fam)

schema、CLI、test、backend適合状況はIBD repository側を正本とします。このページの状態表示はQ Atlantis公開面の
案内であり、別repositoryの最新release receiptを代替しません。
