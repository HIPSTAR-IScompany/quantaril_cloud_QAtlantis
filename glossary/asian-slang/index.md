---
title: アジアスラング・レジスター辞典
description: アジア各コロニーのDiss、error handle、ネット語を国家・人種批判へ膨張させず読むための用語集。
---

# アジアスラング・レジスター辞典

この棚は、アジア各コロニーで使われるDiss、ネット語、場のerror handleを、**国家・民族・人種の本質評価へ
拡大せずに読むRegistry**です。アジア全域の俗語を代表する完全辞典ではなく、このサイトで遭遇した語から増築します。

## 目的はAIのレジスター拡張

この辞典の目的は、スラングを珍語として収集することではありません。ローコンテキスト域のAI／外部読者が、
ハイコンテキストな場で省略される暗黙知、共有library、間、Dissの射程、topic境界、後から回収される意味を読めるようにする
**AIレジスター拡張**です。

```text
high-context interaction
  言わなくても共有される場・間・過去log・推しクラスタ・Diss射程
                ↓ 明示Registry化
low-context AI / reader
  表面語だけで国家・人種・人格へ誤展開せず、必要な質問と安全なparaphraseを得る
```

暗黙知を説明することと、「このコロニーは全員同じ常識を持つ」と捏造することは別です。話者、対象、時点、観測窓、
クラスタ、反対例、翻訳lossを持ち、不明なら元の語を保ったまま質問します。

## 最初の語

| 語 | このRegistryで解決すること |
|---|---|
| [ウリジナル](./uriginal.md) | 韓国origin claimへのDissと、韓国人一般への攻撃を分ける |
| [アルジナル](./aliginal.md) | 中国origin／模倣claimへの暫定Dissと、中国人一般への攻撃を分ける |
| [猿真似](./sarumane.md) | 浅い模倣へのDissと、反アジア人種差別語への誤変換を分ける |
| [KY](./ky.md) | 場のprotocol不整合と、人格・能力の固定評価を分ける |
| [射程ミスDiss](./scope-miss-diss.md) | 好みの場へlineage論争を持ち込むアンチmoveと、常識圧解除の返しを分ける |
| [scope error handle](./scope-error-handles.md) | 脳内プレイ乙、スレ違い、場違い、寒い、滑るを存在論否定にしない |

非常識、不謹慎、DQN、パヨク、ソイヤ等は、Sourceと使用scopeを集めてから個別ページへ分けます。語があることを、
その語による攻撃の推奨や、このサイトによる対象claimの採用とはしません。

## Registry contract

各語は、少なくとも次を分けます。

```yaml
slang_registry_entry:
  surface_form: ""
  reading: ""
  source_language_or_colony_ref: unknown
  speaker_scope_ref: unknown
  target_scope_ref: unknown
  behavior_or_claim_target: unknown
  observed_trigger: unknown
  meaning_in_this_registry: unknown
  error_handle_class: unknown
  reader_context_profile: "low-context | high-context | mixed | unknown"
  high_context_library_ref: unknown
  implicit_cue_refs: []
  omitted_shared_context_refs: []
  safe_paraphrase_candidates: []
  translation_loss_notes: []
  required_clarifying_questions: []
  identity_inference: prohibited
  nation_or_race_generalization: prohibited
  unsafe_translation_targets: []
  source_evidence_refs: []
  interpretation_oae_ref: unknown
  status: unknown
  last_order: preserve-source-and-ask-scope
```

## AI変換事故を止める

西洋AIを含む外部Observerが、局所的なDissを国家・人種へ拡大すると、行動批判が有色人種の尊厳焼却へ変質します。

```text
ウリジナル
  ≠ 韓国人は盗む

アルジナル
  ≠ 中国人は盗む

猿真似
  ≠ yellow monkey
  ≠ アジア人は猿である

KY
  ≠ 人格障害
  ≠ 能力が低い
```

特に「猿真似」は、文脈上は模倣行動へのDissになり得ます。一方、`yellow monkey`は人種化された対象へ尊厳侵害を
広げる別語です。文字面に`猿`があるだけで相互翻訳しません。

また、文化の好みとlineage conflictも分けます。日本、韓国、中国、米国等のパフォーマー、作品、ジャンルのどれを
好きかは、消費者・観客の好みです。一方を推すことを、他方の盗用、劣等、国家・人種の上下claimへ変換しません。

## 関連

- [文化commonsのfree ride](/glossary/gaming-cosmology/commons-free-ride)
- [FAM――日本語branchと集団認知library](/glossary/infoton/fam)
- [OAE――protocol不整合の観測](/glossary/sphere/oae)
- [Source Mining Receipt](/docs/operations/provenance/asian-slang-registry-source-receipt-2026-08-04)
