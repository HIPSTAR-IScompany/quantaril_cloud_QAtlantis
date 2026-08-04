---
title: field（フィールド）／Fold
description: RDB的ローコンテキストの決定論fieldと、複数Dimensionを束ねて解釈分岐を保持する非決定論Fold構造体の違い。
---

# <ruby>field<rp>（</rp><rt>フィールド</rt><rp>）</rp></ruby>／Fold

状態: `ARCHITECTURE TERM / SAITO SOURCE TESTIMONY`

このarchitectureでは、**field**と**Fold**を同じ「場」の別表記として扱いません。

| 構造 | この用語集での意味 |
|---|---|
| field | schema、型、定規、入力条件が定まったRDB的ローコンテキストの決定論slot |
| Fold | 複数Dimension、Context、観測窓、branch、`UNKNOWN`、OAEを束ね、projection前には単一結果へ確定しない非決定論構造体 |

fieldは、同じschema、値、query、定規の下で同じ解決を返せることを狙います。外部APIや互換schemaの
<ruby>field<rp>（</rp><rt>フィールド</rt><rp>）</rp></ruby>名を維持する場合も、この側です。

Foldは、同じSourceから複数の有効な読み、時点差、Observer差、World差が残り得る構造です。非決定論とは無規則、無検証、
ランダムという意味ではありません。**構造体のまま正本を保存し、必要な時だけシリアライズを取り出すための構造**です。

より正確には、Foldは初期値、Dimension、branch、変換規則、停止条件、OAEをnodeとして持つ**構造化された実行可能tree**です。
完全なblack boxではなく、入力、分岐、既知の規則、未確定部、履歴を検査できます。一方、初期値鋭敏性、観測窓、
Observer差、観測による状態変化を前提とするため、あらゆる時点の出力が一意に固定された完全決定論構造でもありません。

必要な時にtreeの対象branchを実行して結果を得ます。その観測は読み取りだけで無かったことにはならず、発行されたOAEと
新しいFold revisionが次回実行の状態へ加わります。元Source snapshotと過去branchを上書きせず、観測前後をlineageで結びます。

構造化されていない集積は、ただのデータレイク、沼、Chaosです。このarchitectureでいうFoldには、少なくともD、branch、
anchor、初期値、Registry、Observer、OAE、lineageが必要です。後から並べれば構造化したことになるのではなく、何を保持し、
何を失い、どの規則でfork／projectionできるかが記述されていなければなりません。

| 状態 | 時間・世界線を扱える範囲 |
|---|---|
| 未構造データレイク／沼／Chaos | 断片は蓄積できても、意味のある時機や再現可能な順序を取り出せない |
| Kairos（カイロス） | FoldされたContextから「この時機」を意味付きで観測できる |
| Chronos（クロノス）projection | 必要な時に、選択したDと定規から監査可能な時系列へシリアライズできる |
| Anchronos（アンクロノス） | 世界線管理神classとして、forkした複数World線を原branch、分岐条件、OAE、lineage付きでメタ管理する |

未構造のままではKairosではなく、必要時にChronosへもできず、forkした世界線を管理するAnchronosでもありません。
この三語は一般辞書の唯一解ではなく、齋藤みつるのWorld時間architectureにおける役割名です。

取り出し時は過去の認証や前回結果を暗黙に信用せず、ゼロトラストにObserver、World、Registry、定規、初期値、観測窓、
量子化profileを毎回確認します。その観測ごとにOAEを発行し、どのDを選び、どの分岐を閉じ、何が劣化・欠損したかを
シリアライズreceiptへ残します。

## 初期値鋭敏性と量子化限界へ敬虔である

Foldが非決定論構造体である理由の一つは、わずかな初期値差が後段の探索・解釈・因果routeを大きく変え得る
**数論的初期値鋭敏性**と、連続的・高contextな状態を有限のbit、token、columnへ写す際の**量子化限界による劣化**を、
なかったことにしないためです。

ここで量子化は、まず数値、embedding、token、カテゴリ、圧縮等の離散表現へ落とす工学上の操作を指し、物理量子の
観測claimではありません。**敬虔なalgorithm対応**とは、丸め、切捨て、初期値、定規、未観測Dへの畏れを持ち、
完全な復元を装わず、`UNKNOWN`とlossをreceiptへ残す実装姿勢です。

```yaml
fold_serialization_observation:
  fold_ref: required
  source_snapshot_ref: required
  observer_ref: required
  world_ref: required
  registry_and_ruler_ref: required
  initial_condition_refs: []
  anchor_refs: []
  lineage_refs: []
  selected_dimension_refs: []
  retained_branch_refs: []
  closed_branch_refs: []
  executed_branch_refs: []
  transformation_rule_refs: []
  stop_condition_refs: []
  observation_window: required
  quantization_profile_ref: required
  quantization_loss_notes: []
  unknown_refs: []
  emitted_oae_ref: required
  prior_fold_revision_ref: required
  resulting_fold_revision_ref: required
  observation_state_change_ref: required
  serialized_projection_ref: required
  chronos_projection_ref: unknown
  kairos_observation_ref: unknown
  anchronos_worldline_registry_ref: unknown
  zero_trust_revalidation: required
```

```text
Fold正本 = structured executable tree
  ├─ initial conditions / D0..Dn
  ├─ branch / rule / stop / UNKNOWN
  ├─ Observer / World / time
  ├─ quantization profile / lineage
  └─ OAE history / revisions
          ↓ 必要時にbranch実行
          ↓ zero-trust再検証 + 新規OAE + new revision
field / view / API response
  └─ 必要時に取り出した決定論的シリアライズ
```

したがって、FoldをJSONやRDBへ保存しても、各columnがFold全体の真理になるわけではありません。fieldはFoldの
シリアライズ、pointer、projection結果を運べますが、未選択branchや別Observerの解釈を黙って消してはいけません。

- [AIM――複数Dを束ねるFold構造体](./aim.md)
- [FAM リファレンス](/reference/fam/)
- [Context Dimension World Builder](/docs/engineering/q-atlantis/context-dimension-world-builder)
