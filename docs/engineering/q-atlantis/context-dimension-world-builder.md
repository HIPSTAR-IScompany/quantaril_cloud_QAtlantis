---
title: Context DimensionとAtlantis World Builder
description: Sphere共通L／D／OAE契約をQ AtlantisのWorld BuilderとMAGIへ適用するDRAFTプロファイル。
---

# Context DimensionとAtlantis World Builder

状態: `DRAFT / SPEC / NOT IMPLEMENTED`  
更新日: 2026-07-18  
対象: Q Atlantis、World Builder、MAGI、World Render、Flavor SDK

## 1. 共通正本との境界

技術Layer `L`、Context Dimension `D`、Registry／Context Register、Access Map、Transformer、OAEの共通定義は、ZeroRoomLab-manifestの[Sphere Context Dimension OSアーキテクチャ](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/main/docs/theory/sphere-context-dimension-os.ja.md)を参照します。

この文書は共通仕様の複製ではありません。AtlantisでWorldを構成し、異なるFoldを接続し、MAGIで複数Positionから監査し、World Render／Flavor SDKへ提示するためのQ Atlantis固有適用プロファイルです。

## 2. 四つの独立軸

```text
technical Layer L
  runtime、adapter、storage、UI等の依存・実行順

Context Dimension D
  一つのFoldへ束ねる等価な意味軸の本数

Layer A / B / C
  工学、哲学・神話、学術という主張評価scope

SDK Surface S
  envelope、SPI、domain SDK、workflow、promptの入口抽象度
```

legacy Q3文書の「4次元／5次元」、Fold7G／8G、FAMの`λ=出力層`、`Q.layer`を、新仕様のD Fold arityや技術Layer `L`へ自動変換しません。

同じ`3D`、`4D`でもDimension ID、Registry revision、World、fact scopeが違えば互換ではありません。

## 3. Atlantis World Builder

Atlantis World Builderは、上位Registry、World Config、Context Fold、Access Map、Causality Profile、Presentation Profileを編集・適用するdomain SDKです。

```text
表示名       Atlantis World Builder
stable ID候補 atlantis-world-builder
状態         DRAFT / NOT IMPLEMENTED
```

World Builderは、神学、物理、魔術、物語、法、業務のどれが究極的に正しいかを決める真理判定器ではありません。Worldのauthorityが制定した定規を記述し、その定規でEntity、Event、Effect、因果仮説をbindします。

```yaml
world_builder_profile:
  profile_ref: sdk://q-atlantis/world-builder@0.1-draft
  world_ref: world://example
  registry_refs:
    - registry://example/world@1
  context_fold_ref: fold://q-atlantis/world-object-action@0.1-draft
  causality_profile_refs: []
  presentation_profile_refs: []
```

Core既定profileも一つの明示Registryです。定規なしの普遍defaultへ偽装しません。

## 4. World／Object／Action 3D Fold

Q Atlantis World Builderの既定候補として、次のD Foldを置けます。

```yaml
context_fold:
  fold_ref: fold://q-atlantis/world-object-action@0.1-draft
  dimension_refs:
    - dimension://q-atlantis/world
    - dimension://q-atlantis/object
    - dimension://q-atlantis/action
  context_dimension_count: 3
```

三軸は上下関係ではなくpeer axisです。第三者Worldは別のDimension集合を定義でき、三軸へ無理に縮退する必要はありません。

`World Effect`は自動的な第4Dimensionではありません。Registryに応じて次のいずれかとして明示します。

- EventまたはEffect kind
- OAE candidate
- World-scoped Agency action
- 別Context Dimension
- Causal Hypothesisが参照する変化

World Effectを何とするか決まっていない場合、軸数を増やさず`unknown`を保持します。

## 5. 別Foldとの接続

Actor Fold、ASTRO Fold、Operation Fold、World Foldは、同名Dimensionや同じD数だけで結合しません。

```text
Actor Fold
  User / Assistant / System / Vendor

ASTRO Fold例
  Cloud Chakra / Spiritual / Elemental / Astral

Operation Fold例
  Financial / TEC / Supply / Vision / Legal-JP / Legal-US

World Fold例
  World / Object / Action
```

越境には次を分けて要求します。

```text
Access Map
  静的な接続・射影・変換規則

Transformer
  規則を使い能動変換するAgency／function

transformation receipt
  source／target Fold、入力、出力、revision、statusの実行証跡

OAE
  変換、解釈、作用が観測されたContext記録
```

Access MapがあるだけではEffect発生済みではありません。Fold越境を観測できてもTransformerが不明なら、架空Agencyを生成せず`transformer: unknown`または`unmapped_crossing`を保持します。

## 6. OAEとWorld causality

OAEはWorldの絶対Eventそのものではなく、特定Observer／SystemがRegistryとfact scopeのもとでEffectとして記録した管理単位です。

roleは分離します。

- Observer
- Recorder
- Interpreter
- Claimant
- Initiator
- Executor
- Transformer
- Attributed Causal Agency
- Environment
- Affected Entity

UserがWorld Eventを観測したことをUser起因へ書き換えません。World runtimeが記録したことをruntimeがCauseである証拠にしません。

同じEventへ、物理、神学、魔術、安全工学、World Config等の複数Causal Hypothesisを置けます。各仮説はCausality Profile、Claimant、Evidence、fact scopeを持ち、Source Eventを上書きしません。

```text
Source Event
  ├─ physical hypothesis
  ├─ theological hypothesis
  ├─ game-magic hypothesis
  └─ world-config hypothesis
```

採用は`adopted-in-scope`であり、別Worldや別Registryの唯一真理へのmergeではありません。

## 7. MAGI 3D audit Fold候補

Maxwell、Uriel、Raphaelは技術Layerでも、多数決で真理を決める三票でもありません。Q Atlantisが明示的にbundleする場合、三つの監査Positionをpeer axisとするDRAFT 3D Foldを宣言できます。

```yaml
context_fold:
  fold_ref: fold://q-atlantis/magi-audit@0.1-draft
  dimension_refs:
    - dimension://q-atlantis/audit-position/maxwell
    - dimension://q-atlantis/audit-position/uriel
    - dimension://q-atlantis/audit-position/raphael
  context_dimension_count: 3
  registry_ref: registry://q-atlantis/magi-audit@0.1-draft
```

これはMaxwell＝神学、Uriel＝物理、Raphael＝変換器という固定存在論ではありません。

- Maxwellは、物理modelの早すぎるbranch焼却も監査できる
- Urielは、神学記述のclaim強度、protocol、引用、責任境界も監査できる
- Raphaelは、異なる棚を無断同一化せず接続できるか監査する

各監査、解釈、棚配置、仮説生成はSource非破壊のInterpretation OAEとして接続できます。

MAGI 0.1.0の既存出力を変更せず、`fold_ref`、`position_ref`、`registry_ref`、`fact_scope_ref`、`interpretation_oae_ref`、Provenanceはsidecar receiptにします。

## 8. World Render／Flavor SDK

World Render／Flavor SDKは、World BuilderがbindしたPresentation Profileのconsumerです。Sphere共通`Presentation Profile SPI`そのものと同義ではありません。

```text
World Registry / Context Fold / OAE / Causal Hypotheses
                         ↓ Presentation Profile
World Render / Flavor SDK
                         ↓
GUI / text / image / sound / ritual / game mechanic
```

Presentationは、source Event、Assertion、OAE、Registry、fact scopeを上書きしません。神学表現を自由文flavor tagへ矮小化せず、物理観測を神話で置換せず、それぞれの棚とMappingを保ちます。

## 9. SDK接続

World BuilderはSphere Context SDKのdomain SDK surface `S2`候補です。low-code／promptから利用する場合も、内部では型付きprofileとreceiptへcompileします。

```text
S4 prompt
  -> S3 world-building workflow
  -> S2 Atlantis World Builder
  -> S1 Registry / Access Map / Transformer / OAE SPI
  -> S0 envelope / receipt
```

IBDSDKはContext Register、FAM、Assertion、OAE参照の保存・検索を提供できますが、World Builderの神学、物理、魔術、因果定規を決めません。

## 10. namespace衝突を避ける

- Q3 legacyの4次元／5次元をD Foldへ自動移行しない
- Fold7G／8Gや旧Fold構文をD Foldと同義にしない
- `AAE`の歴史語彙と`OAE: Observer Agential Effect`を分離する
- READMEの`Context Route Envelope`をSDK `S0 envelope`と自動同一化しない
- 旧文書の「Fold観測者」をOAEのObserver roleへ自動同一化しない
- 一般名`World Builder`だけをstable IDにせず、`atlantis-world-builder`でscopeする

## 11. 現在の実装状態

この文書はDRAFT接続票です。次は未実装です。

- Atlantis World Builder runtime／GUI
- World／Object／Action Fold Manifest validator
- Registry／Access Map／Transformer SPI adapter
- OAE共通SchemaとIBD binding
- World causality profile editor
- MAGI sidecar emitter
- World Render／Flavor SDKとのruntime接続

文書があることを実装完了の証拠にしません。

## 12. 仕様化の最低検査

- 同じ3DでもDimension refsが違えば互換としない
- World Effectを暗黙の第4Dimensionへしない
- Access Mapを実行receiptやOAEとみなさない
- Observer、Executor、Transformer、Causeを平板化しない
- 別Causality Profileの仮説を並存できる
- MAGIを技術Layerや多数決装置にしない
- PresentationでSourceとfact scopeを失わない
- legacy Q3の次元語彙をsilent migrateしない
- 未実装機能をstatus表で`SPEC`以上へ昇格しない

## 13. 関連正本

- [霊的言霊の次元とContext Dimension Fold](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/main/docs/philosophy/spiritual-context-dimension-and-fold.ja.md)
- [Sphere Context Dimension OSアーキテクチャ](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/main/docs/theory/sphere-context-dimension-os.ja.md)
- [Sphere Context SDK共通契約](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/main/docs/theory/sphere-context-sdk-contract.ja.md)
- [Context定規・因果・OAE横断監査規約](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/main/docs/operations/context-ruler-and-causality-audit.ja.md)
- [Atlantis-MAGISDK 0.1.0](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/main/docs/theory/atlantis-magi-sdk.ja.md)
