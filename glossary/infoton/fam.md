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

必要な<ruby>field<rp>（</rp><rt>フィールド</rt><rp>）</rp></ruby>と意味契約を保持できるなら、FAMをJSON、JSON-LD、YAML等のVesselで表現できます。Vesselが同じでも、
探索状態と停止契約を持たない通常のHowToが自動的にFAMになるわけではありません。

## 日本語branchの疎結合

FAMは、日本語を一つの「正しい標準語」へ潰さず、時代、土地、共同体、制度、世代ごとにbranchした意味を、
出典と変換loss付きで疎結合に記述する用途にも使えます。

縄文古語、弥生古語、アイヌ語、うちなー言葉、万葉仮名、律令、江戸、山手、下町、昭和、団塊、日教組、団塊Jr、
氷河期、平成、令和等は、同じ種類の分類軸ではありません。言語、表記、制度register、地域、世代語を一本の年代順へ
自動mergeせず、語形、読み、意味、使用共同体、時代scope、親branch、相互変換、未確定を別々に保持します。

この用途の主な観測棚は、人文科学、認知言語学、心理言語学（言語心理学）です。制度や時代は版番号ではなく、話者の
概念frame、比喩、感情、自己位置、聞き手想定を読む補助コンテキストとして扱います。個々の語源や日本語史上の系譜を
確定する学説そのものではありません。

## 何ではないか

- 単なるdatabase wrapper、vector検索、JSON-LD、YAMLの別名ではない。
- すべてのFAM系譜が同一<ruby>schema<rp>（</rp><rt>スキーマー</rt><rp>）</rp></ruby>・同一実装状態にあるという意味ではない。
- 文書にFAMと書かれているだけで、parser、resolver、IBD接続が実装済みになるわけではない。

## 関連

- [FAM リファレンス](/reference/fam/)
- [IBD リファレンス](/reference/sphere/ibd)
- [文書庫: 情報子工学フルスタック入門](/docs/engineering/infoton-engineering-full-stack-guide)
