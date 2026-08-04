---
title: FAM Reference
description: FoldAccessMapperの責務、複数系譜、Last Order、実装正本へ進むreference entry。
---

# FAM Reference

状態: `SPEC / MULTIPLE-LINEAGES`

FAM（FoldAccessMapper）は、意味、依存、選択、出典、検証経路をFold Treeとして記述し、入力から結果までに
何を選び、何を保留し、どこで止まったかを追跡するための構造です。

## 最小契約

| 要素 | 意味 |
|---|---|
| `ψ` | situation、入力、扱う情報子 |
| `∇φ` | method、探索・変換方向 |
| `λ` | purpose、到達条件、出力 |
| `Q` | 制約、scope、Evidence、停止条件 |
| Last Order | 解決不能時に欠損を捏造せず返す最終指示 |

## 系譜境界

FAMには仕様、旧実装、現行reference、MCP等の複数系譜があります。旧運用claim、toy model、現在の仕様を
単一の完成runtimeへmergeしません。個別実装を使う際は、repository、revision、input/output、test boundaryを
確認してください。

## 関連入口

- [用語: FAM](/glossary/infoton/fam)
- [Docs: 情報子工学フルスタック入門](/docs/engineering/infoton-engineering-full-stack-guide)
- [IBD Reference](/reference/sphere/ibd)
- [Q Atlantis status](/docs/engineering/q-atlantis/status)
