---
title: FAM
description: FoldAccessMapperの短い定義と、完成runtime・database wrapperとの境界。
---

# FAM

**FAM（FoldAccessMapper）**は、意味、依存、選択、出典、検証経路、停止条件をFold Treeとして記述する構造です。

## 何ではないか

- 単なるdatabase wrapperやvector検索の別名ではない。
- すべてのFAM系譜が同一schema・同一実装状態にあるという意味ではない。
- 文書にFAMと書かれているだけで、parser、resolver、IBD接続が実装済みになるわけではない。

## 関連

- [FAM Reference](/reference/fam/)
- [IBD Reference](/reference/sphere/ibd)
- [Docs: 情報子工学フルスタック入門](/docs/engineering/infoton-engineering-full-stack-guide)
