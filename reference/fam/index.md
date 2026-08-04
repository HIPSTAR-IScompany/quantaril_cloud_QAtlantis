---
title: FAM リファレンス
description: FoldAccessMapperの責務、複数系譜、Last Order、実装正本へ進むreference entry。
---

# <ruby>FAM<rp>（</rp><rt>ファム</rt><rp>）</rp></ruby> リファレンス

状態: `SPEC / MULTIPLE-LINEAGES`

<ruby>FAM<rp>（</rp><rt>ファム</rt><rp>）</rp></ruby>（<ruby>FoldAccessMapper<rp>（</rp><rt>フォールド・アクセス・マッパー</rt><rp>）</rp></ruby>）は、
**探索技の状態を持つ叡智を記述する汎用叡智記述フォーマット**です。完成した知識だけでなく、入力から結果までに
何を探し、どの探索技を使い、どのbranchを選び、何を保留し、どこで停止したかを再開可能な状態で追跡します。

## 最小契約

| 要素 | 意味 |
|---|---|
| `ψ` | situation、入力、扱う情報子 |
| `∇φ` | method、探索・変換方向 |
| `λ` | purpose、到達条件、出力 |
| `Q` | 制約、scope、Evidence、停止条件 |
| Last Order | 解決不能時に欠損を捏造せず返す最終指示 |

## Vesselとの非競合

JSON-LDやYAMLは、水平な知識、関係、HowToを記述・交換する汎用Vesselとして利用できます。FAMはそれらを置換する
serialization形式ではなく、探索目的、探索技、途中状態、branch、Evidence、`unknown`、Last Orderを持つ叡智の
記述契約です。

したがって、FAM documentをJSON／JSON-LD／YAMLでmaterializeする構成も可能です。採用VesselだけからFAM互換性を
判定せず、必要field、意味、停止契約、系譜を確認します。

## 系譜境界

FAMには仕様、旧実装、現行reference、MCP等の複数系譜があります。旧運用claim、toy model、現在の仕様を
単一の完成runtimeへmergeしません。個別実装を使う際は、repository、revision、input/output、test boundaryを
確認してください。

## 関連入口

- [用語: FAM](/glossary/infoton/fam)
- [文書庫: 情報子工学フルスタック入門](/docs/engineering/infoton-engineering-full-stack-guide)
- [IBD リファレンス](/reference/sphere/ibd)
- [Q Atlantis status](/docs/engineering/q-atlantis/status)
