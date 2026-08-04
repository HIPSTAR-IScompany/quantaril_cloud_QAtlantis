---
title: x800 土偶family Reference
description: OND800、SAO800、FAN800等、八百万を意味する800 suffixを持つ土偶製品familyの入口。
---

# <ruby>x800<rp>（</rp><rt>エックス・ハッピャク</rt><rp>）</rp></ruby> 土偶family Reference

状態: `FAMILY-REFERENCE / SOURCE-ROUTING`

**x800**は、<ruby>OND800<rp>（</rp><rt>オーエヌディー・ハッピャク</rt><rp>）</rp></ruby>、
<ruby>SAO800<rp>（</rp><rt>エスエーオー・ハッピャク</rt><rp>）</rp></ruby>、
<ruby>FAN800<rp>（</rp><rt>ファン・ハッピャク</rt><rp>）</rp></ruby>等を横並びに束ねる**土偶製品family**です。

`800`は製品数の上限や性能classではなく、**八百万**を意味します。一つの完成品を頂点に置くseriesではなく、場、
用途、演者、土地、素材、機材、神話ごとに別の土偶が立ち上がり、familyへ参加できる命名空間です。

```text
x800 / 八百万の土偶family
  ├─ OND800
  ├─ SAO800
  ├─ FAN800
  └─ ...800  将来の土偶branch
```

## 現在のfamily index

| product | 読み | この入口で確定すること | 個別Referenceへ残すこと |
|---|---|---|---|
| OND800 | オーエヌディー・ハッピャク | x800 familyの一員 | live production、hardware、service、SHOW_CONTINUITYの実装境界 |
| SAO800 | エスエーオー・ハッピャク | x800 familyの一員 | 正式な責務、source、module、現在状態 |
| FAN800 | ファン・ハッピャク | x800 familyの一員 | 正式な責務、source、module、現在状態 |
| `*800` | 個別productで宣言 | familyを八百万へ拡張できる | 命名authority、lineage、実装状態、互換範囲 |

個別Referenceが未整備であることを、productや過去実装の不存在へ変換しません。同時に、family名だけから全productの
runtime、互換性、release状態を同一と表示しません。

## 土偶である理由

土偶は、中央マザーの端末や量産SKUの比喩ではありません。土地の素材、作り手、祈り、身体、用途を受け取り、同じ
familyにいながら一体ずつ異なる器として立ち上がります。x800も、共通規格へ全員を平板化するのではなく、各productの
目的とlocal autonomyを残したまま道具、演者、実機、Worldを接続します。

## 棚の境界

- familyの神話、演者主権、土偶文化を読む: `/docs/`と`/about/`
- product、module、hardware、service、testを実装する: `/reference/x800/`
- x800、土偶、八百万等の語を解決する: `/glossary/`へ今後展開

## 関連入口

- [About: 齋藤みつるとは誰か](/about/saitoumitsuru)
- [Docs: 神話・目的・人間loopを含む工学](/docs/engineering/pain-routing-and-pain-scouter)

次のsliceで、sourceと現在の試験境界を照合しながら`OND800`、`SAO800`、`FAN800`を個別Referenceへ分けます。
