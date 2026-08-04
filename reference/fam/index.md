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
判定せず、必要<ruby>field<rp>（</rp><rt>フィールド</rt><rp>）</rp></ruby>、意味、停止契約、系譜を確認します。

## 日本語Meaning branch profile

日本語の疎結合な拡張性は、FAMで扱える自然言語ユースケースです。標準語へ正規化してSourceの声を捨てるのでなく、
地域、時代、共同体、制度、世代、表記体系ごとの意味branchを、変換可能性とloss付きで保持します。

```yaml
language_meaning_branch:
  branch_ref: fam://language/ja/example@draft
  source_form: ""
  reading: ""
  meaning_in_scope: ""
  language_or_variety_ref: unknown
  script_profile_ref: unknown
  region_scope_ref: unknown
  era_scope_ref: unknown
  community_scope_ref: unknown
  generation_scope_ref: unknown
  institution_register_ref: unknown
  cognitive_frame_refs: []
  conceptual_metaphor_refs: []
  pragmatic_context_ref: unknown
  speaker_self_position_ref: unknown
  listener_interpretation_refs: []
  affect_and_association_refs: []
  parent_branch_refs: []
  transformation_refs: []
  loss_notes: []
  evidence_refs: []
  status: unknown
  last_order: preserve-source-and-ask
```

縄文古語／弥生古語、アイヌ語／うちなー言葉、万葉仮名、律令／江戸、山手／下町、昭和／団塊／日教組／団塊Jr／
氷河期／平成／令和等は、分類型が異なる候補ラベルです。単一の`version`軸へ並べず、複数scopeを交差させます。

このprofileの主眼は制度科学や制度史の分類ではなく、人文科学、認知言語学、心理言語学（言語心理学）から、話者と
聞き手の意味生成を記述することです。制度、地域、時代、世代は、認知frameと語用を読む補助コンテキストに置きます。

状態は`DRAFT / SPEC / NOT IMPLEMENTED`です。語源、系統、時代区分の学術的確定は、出典と該当分野の検証を
別Evidenceとして要求します。FAMへ書けることを、歴史言語学上の確定へ昇格させません。

## 系譜境界

FAMには仕様、旧実装、現行reference、MCP等の複数系譜があります。旧運用claim、toy model、現在の仕様を
単一の完成runtimeへmergeしません。個別実装を使う際は、repository、revision、input/output、test boundaryを
確認してください。

## 関連入口

- [用語: FAM](/glossary/infoton/fam)
- [文書庫: 情報子工学フルスタック入門](/docs/engineering/infoton-engineering-full-stack-guide)
- [IBD リファレンス](/reference/sphere/ibd)
- [Q Atlantis status](/docs/engineering/q-atlantis/status)
