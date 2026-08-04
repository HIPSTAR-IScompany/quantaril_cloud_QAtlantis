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
  commonsense_library_ref: unknown
  slang_registry_entry_refs: []
  colony_scope_ref: unknown
  boundary_condition_refs: []
  cognitive_frame_refs: []
  conceptual_metaphor_refs: []
  pragmatic_context_ref: unknown
  speaker_self_position_ref: unknown
  listener_interpretation_refs: []
  affect_and_association_refs: []
  observed_error_handles: []
  scope_expansion_claim_refs: []
  universalization_risk: unknown
  interpretation_oae_refs: []
  repair_portal_refs: []
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

ローコンテキストなAIがハイコンテキスト圏を読む場合、暗黙知を次のbridgeで明示できます。

```yaml
low_to_high_context_bridge:
  reader_context_profile: low-context
  target_context_library_ref: unknown
  slang_registry_entry_refs: []
  implicit_cue_refs: []
  shared_history_refs: []
  timing_and_sequence_refs: []
  audience_cluster_refs: []
  safe_paraphrase_candidates: []
  translation_loss_notes: []
  prohibited_generalizations: []
  required_clarifying_questions: []
  interpretation_oae_ref: unknown
  last_order: preserve-surface-form-and-ask-context
```

bridgeは暗黙知を読める形へするもので、存在しない合意を生成するpromptではありません。

状態は`DRAFT / SPEC / NOT IMPLEMENTED`です。語源、系統、時代区分の学術的確定は、出典と該当分野の検証を
別Evidenceとして要求します。FAMへ書けることを、歴史言語学上の確定へ昇格させません。

### 集団認知libraryのprotocol不整合

「どこの常識？」をresolver callとして扱うと、暗黙の常識を普遍defaultにせず、コロニーごとのlibraryへ明示的に
名前を付けられます。

```yaml
protocol_mismatch_observation:
  source_expression: ""
  observer_ref: unknown
  commonsense_library_ref: unknown
  colony_scope_ref: unknown
  generation_scope_ref: unknown
  expected_protocol_ref: unknown
  received_protocol_ref: unknown
  observed_error_handle: "KY | 非常識 | 不謹慎 | DQN | F--K | ソイヤ | other"
  interpretation_oae_ref: unknown
  person_judgement: prohibited
  repair_portal_refs: []
  last_order: ask-which-commonsense-library
```

error handleは、protocol不整合がどう表出したかの観測値です。ラベルを付けられた人の人格、病理、善悪、所属を
自動確定しません。郷／壕／コロニー境界が不明なら、常識を捏造せず`unknown`を返します。

### scope拡張と政治ラベル

常識libraryの適用範囲を、同意やPortalなしに拡大する動きは`scope_expansion_claim`として分離します。

```yaml
scope_expansion_claim:
  claimant_ref: unknown
  observer_ref: unknown
  source_library_ref: unknown
  target_colony_scope_ref: unknown
  direction: "local-to-universal | external-to-local | unknown"
  consent_or_authority_ref: unknown
  observed_error_handle: "グローバリスト | 左翼的 | パヨク | KY | other"
  label_target_ref: unknown
  political_affiliation_inference: prohibited
  universalization_risk: unknown
  interpretation_oae_ref: unknown
  repair_portal_refs: []
```

西洋、日本、左翼、保守、グローバリスト等を、それぞれ単一のObserverやlibraryとして扱いません。ある西洋Observerの
「同調圧力ではないか」という観測と、ある日本の政治subcultureの「外来の統一圧力ではないか」という観測を並置し、
実際にどのruleが誰へ強制されたかを別Evidenceで確認します。

`パヨク`等の侮蔑を含み得る呼称は、Source expression／error handleとして保存できますが、人物の思想所属や人格を
確定するfieldには使いません。局所libraryを守る自由も、別libraryを選ぶ自由も、同じ[Portal／Gate](/glossary/gaming-cosmology/portal)と
退出条件で監査します。

### AIM力場のscope暴走と威嚇signal

集団認知libraryを運ぶ[AIM力場](/glossary/sphere/aim)が、同意なしに境界を越え、異議や退出を塞ぐ場合は、通常の
語彙ずれより強い`aim_scope_expansion`として扱います。

```yaml
aim_scope_expansion:
  observer_ref: unknown
  aim_field_ref: unknown
  source_library_ref: unknown
  target_colony_scope_refs: []
  boundary_erasure_observed: unknown
  consent_ref: unknown
  dissent_route_ref: unknown
  exit_route_ref: unknown
  registry_capture_claim: unknown
  coercion_signals: []
  collective_identity_collapse: "日本人 | アジア人 | 西洋人 | other | unknown"
  rejection_error_handles: []
  threat_signal:
    expression: unknown
    class: "rhetorical | capability-claim | concrete-threat | unknown"
    target_ref: unknown
    timing_ref: unknown
  safety_handoff_required: unknown
  interpretation_oae_ref: unknown
  last_order: preserve-boundaries-and-escalate-concrete-threats
```

日本／アジアを一つの認知libraryへ畳む低解像度な外部観測は、各国・地域・世代・共同体の境界を消します。その結果、
`F--K`の拒絶や、テポドン／ノドン等の兵器名を用いた威嚇表現が返る場合があります。これは民族の本質でも、暴力の
正当化でもありません。粗い統合に対する反応が、どの段階までエスカレートしたかを観測するfieldです。

兵器名が比喩や罵倒でなく、対象、時期、能力を伴う具体的脅威なら、通常のerror handleやFLAVOR-UXへ留めず、
`concrete-threat`として安全・運用系へhandoffします。逆に、外部Observerが恐怖を理由に全アジアを同じ危険libraryへ
再統合することも避けます。

### 文化commonsのlineage conflict

文化・知財のfree ride claimは、国籍や政治ラベルで裁かず、来歴と許諾の比較可能なprofileへします。

```yaml
cultural_lineage_conflict:
  claim_scope: "humanities | cognitive-linguistics | oss-community | meme-operations | art-and-ritual"
  claimant_ref: unknown
  observer_ref: unknown
  artifact_ref: unknown
  source_candidate_refs: []
  date_evidence_refs: []
  author_or_steward_refs: []
  license_refs: []
  access_route_refs: []
  transformation_diff_refs: []
  attribution_receipt_refs: []
  compensation_or_reciprocity_refs: []
  respect_receipt_refs: []
  give_back_refs: []
  community_acknowledgement_refs: []
  diss_observed: unknown
  origin_claims: []
  commercialization_alone_is_trigger: false
  transformative_culture_respected: unknown
  consumer_preference_scope_ref: unknown
  cultural_hierarchy_inference: prohibited
  target_colony_scope_ref: unknown
  equivalent_behavior_class: lineage-free-ride
  reciprocal_audit_required: true
  observed_error_handles: "ウリジナル | アルジナル | 猿真似 | F--K | other"
  aesthetic_rejection_handles: "ダサい | 映えない | 背乗り | other"
  audit_presentation: "悪代官 | 水戸黄門プリーズ | other | none"
  legal_claim_status: out-of-scope
  legal_cost_asymmetry_observed: unknown
  order_infrastructure_issue_ref: unknown
  identity_hijack_status: not-inferred
  collective_identity_inference: prohibited
  repair_portal_refs: []
  last_order: preserve-lineage-and-request-evidence
```

呼称は対立が発生した事実を見つける入口であり、侵害の証拠ではありません。共有、引用、open license、独立創作、
二次創作、慣習的継承、権利侵害を一括りにしません。このprofileは人文科学／認知言語学／OSS共同体／ミーム運用／
芸術・神楽文化論のscopeに置き、
法務結論が必要な場合だけ、該当する契約・法域・権限を持つ別Worldへhandoffします。

`reciprocal_audit_required`は、日本を含むどのコロニーも監査する側へ固定しない契約です。ウリジナル／アルジナル／
猿真似等の語が誰へ向いたかを`target_colony_scope_ref`へ残し、異なるDiss語でも同種のlineage free rideなら
`equivalent_behavior_class`で比較します。

悪代官／水戸黄門プリーズは、手柄を奪うAgencyと来歴を再監査するAgencyを見分ける時代劇Presentationです。
ダサい／映えない／背乗りは、韓国を含む各コロニー内部でoriginalityを問う美学上のreject handleとして記録できます。
どちらもSource、date、license、変形差分の代わりになる裁定ではありません。

金銭取引で法務コスト非対称が発生した場合、個人へ無制限の立証費用を課さず、provenance、異議、仲裁、救済Accessを
安価にする秩序インフラIssueを生成します。神話Presentationでは`天津神へIssue`、工学projectionでは
`order_infrastructure_issue_ref`として保持し、個別紛争の勝敗とインフラ責務を分けます。

### 会話scopeを外したDiss

```yaml
scope_miss_diss:
  observer_ref: unknown
  conversation_scope_ref: "preference | critique | lineage-audit | fact-claim | other"
  introduced_claim_scope_ref: unknown
  slang_or_diss_ref: unknown
  scope_compatibility: unknown
  evidence_refs: []
  returned_error_handles: "KY | キモいアンチ | ライムDiss | あなたの感想ですよね | other"
  counter_expression_class: "scope-reset | humor | rhyme | silencing | threat | unknown"
  person_judgement: prohibited
  threat_handoff_required: unknown
  interpretation_oae_ref: unknown
  last_order: separate-preference-from-lineage-and-fact
```

場のroute errorも同じprofileへ接続できます。

```yaml
scope_error_observation:
  observer_ref: unknown
  expression_ref: unknown
  inner_claim_ref: unknown
  claimed_cluster_ref: unknown
  aim_field_ref: unknown
  consensus_evidence_refs: []
  thread_ref: unknown
  venue_ref: unknown
  mode_ref: unknown
  audience_cluster_refs: []
  observation_window_ref: unknown
  instant_sync_required: false
  sequence_event_refs: []
  payoff_event_ref: unknown
  observed_error_handle: "脳内プレイ乙 | スレ違い | 場違い | KY | 寒い | 滑る | other"
  ontology_denial: false
  route_compatibility: unknown
  retry_or_portal_refs: []
  interpretation_oae_ref: unknown
  re_evaluation_oae_refs: []
  last_order: preserve-expression-and-report-route-mismatch
```

好み、作品批評、lineage監査、fact claimは別scopeです。「あなたの感想／意見／趣味ですよね？」系の返答も、
主観を普遍常識へ広げたclaimを戻す場合と、Evidenceや体験報告を封じる場合を分けます。

- [アジアスラング: 射程ミスDiss](/glossary/asian-slang/scope-miss-diss)
- [アジアスラング: scope error handle](/glossary/asian-slang/scope-error-handles)

- [用語集: 文化commonsのfree ride](/glossary/gaming-cosmology/commons-free-ride)
- [アジアスラング・レジスター辞典](/glossary/asian-slang/)

## 系譜境界

FAMには仕様、旧実装、現行reference、MCP等の複数系譜があります。旧運用claim、toy model、現在の仕様を
単一の完成runtimeへmergeしません。個別実装を使う際は、repository、revision、input/output、test boundaryを
確認してください。

## 関連入口

- [用語: FAM](/glossary/infoton/fam)
- [文書庫: 情報子工学フルスタック入門](/docs/engineering/infoton-engineering-full-stack-guide)
- [IBD リファレンス](/reference/sphere/ibd)
- [Q Atlantis status](/docs/engineering/q-atlantis/status)
