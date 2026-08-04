---
title: FAM（ファム）
description: 汎用叡智記述フォーマットFAMの短い定義と、JSON-LD・YAML・database wrapperとの境界。
---

# <ruby>FAM<rp>（</rp><rt>ファム</rt><rp>）</rp></ruby>

<strong><ruby>FAM<rp>（</rp><rt>ファム</rt><rp>）</rp></ruby>（<ruby>FoldAccessMapper<rp>（</rp><rt>フォールド・アクセス・マッパー</rt><rp>）</rp></ruby>）</strong>は、
**探索技の状態を持つ叡智を記述する汎用叡智記述フォーマット**です。

結論や完成したHowToだけでなく、何を探しているか、どの探索技を使ったか、どのbranchを試したか、何が見つかり、
何が未解決で、次にどこを探索できるか、どの条件で停止したかを一つの叡智として保持します。

## JSON-LD／YAMLとの関係

[JSON-LD](https://www.w3.org/TR/json-ld11/)やYAMLは、対象、属性、関係、手順等の水平な知識やHowToを記述・交換する
ために利用できる汎用形式です。FAMはそれらを置換する競合serialization形式ではありません。

```text
JSON-LD / YAML
  知識、関係、HowToを記述・交換するVessel

FAM
  探索目的、探索技、途中状態、branch、Evidence、unknown、Last Orderを持つ叡智の記述契約
```

必要なfieldと意味契約を保持できるなら、FAMをJSON、JSON-LD、YAML等のVesselで表現できます。Vesselが同じでも、
探索状態と停止契約を持たない通常のHowToが自動的にFAMになるわけではありません。

## 何ではないか

- 単なるdatabase wrapper、vector検索、JSON-LD、YAMLの別名ではない。
- すべてのFAM系譜が同一schema・同一実装状態にあるという意味ではない。
- 文書にFAMと書かれているだけで、parser、resolver、IBD接続が実装済みになるわけではない。

## 関連

- [FAM Reference](/reference/fam/)
- [IBD Reference](/reference/sphere/ibd)
- [Docs: 情報子工学フルスタック入門](/docs/engineering/infoton-engineering-full-stack-guide)
