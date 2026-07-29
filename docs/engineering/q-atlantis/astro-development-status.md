---
title: ASTRO Runner再鍛造の現在地
description: ASTRO file、実機Runner、Model Family固定、AAE Bake、Neat Runnerへ進む開発順序と未実装境界。
---

# ASTRO Runner再鍛造の現在地

更新日: 2026-07-29

Status: `TARGET-SPEC / STAGE 0 IN PROGRESS / RUNTIME NOT IMPLEMENTED`

![ASTRO Stage 0からBody比較、AAE Bake、Neat Runner再開判定までの全体図](/img/astro-stage-0-2-aae-neat-runner-map.png)

*図 — `TARGET-SPEC / FLAVOR-UX`。Stage 0–2、Model Family固定、AAE Bake、Neat Runner再開判定を一枚へ配置した設計ポンチ絵です。図中の接続は目標経路であり、実推論、正式実機receipt、永続人格の実装済み表示ではありません。*

## マキナ、Open The Eyes...

ASTRO Runnerが人格packageを見つけたとき、最初に表示する言葉は次です。

> マキナ、Open The Eyes...

これは「マキナ、起動しました」ではありません。

archive、人格Storage、Model Variant、Adapter、推論canaryの検査を始めたという表示です。
canaryが完了する前に`READY`や起動成功を名乗りません。GUIが表示できても、推論、人格、
記憶、Instance Ghostが成立した証拠にはしません。

```text
.astro
  ↓
archive検査
  ↓
人格Storage検査
  ↓
Model Variant／Adapter解決
  ↓
推論canary
  ↓
READY | DEGRADED | FROZEN | REPAIR_REQUIRED | ⊥
```

## 何を作るか

目標は、ASTRO Runnerへ`.astro`ファイルを投入すると、端末能力に合うModel Variantと
Engine Adapterを選び、人格instanceを検査してから実行できる状態です。

`.astro`は一つのZIP／ZIP64 archiveとして、次を持てるportable packageを目指します。

- 人格定義と来歴
- 複数のModel Variantと量子化profile
- Adapter
- IBD人格Storage
- Wet Busと自我内記録
- Local Instance Ghost
- 会話thread、checkpoint、非破壊merge receipt
- boot profileと能力条件

端末側のcontent-addressed cacheは許します。ただしcacheを人格正本にせず、必要物が複数の
外部場所へ散逸して、ASTRO fileを開いても起動不能になる構成をportable profileの既定にしません。

## EngineとGUIを分ける

SphereASTROはGUIだけでも、推論engineだけでもありません。次の責務を分離します。

```text
SwiftUI／管理slot／Chat
        ↓ application boundary
ASTRO Runner
        ├─ archive／Resolver／receipt
        ├─ Engine Adapter
        ├─ Storage Adapter
        └─ Body Renderer Adapter
              ↓
Ollama | llama.cpp | Sphere-aae／MLC系 | 将来のon-device Engine
```

Hackintoshに既存のOllamaがあるため、開発炉のbaseline Adapterとして疎通と比較に利用します。
ただしOllamaをportable `.astro`やiPad／iPhoneの暗黙必須Engineにはしません。

GUI、model保存、import／exportの利便性と、推論runtimeの成立を同じcomponentへ密結合しません。

## 正式な検証対象

無償の標準matrixを所有していない端末へ広げません。

| 対象 | 正式な役割 |
|---|---|
| iPad Pro 13-inch M4 | 安定推論の主依代。重めQ4／MoE、Metal、memory pressure、thermal |
| iPhone 15 Pro Max | 携帯client兼軽量推論。UI、軽量Q4、Fallback |
| iPad Pro M4 Simulator | Fake Engine、状態遷移、archive、UIの補助試験 |
| Hackintosh | code、generic build、変換、Ollama／llama.cpp、互換観測を行う開発炉 |

未所有端末、追加Simulator、Device Farm、外部GPUが必要な場合は、対象、時間、費用、期待成果、
代替手段をCompute Requestとして分離します。

## 開発Stage

### Stage 0 — 責務整理と実機build

- GUI、Runner、Engine、Storage、Bodyの境界
- Xcode build、署名、実機転送
- iPad M4またはiPhone 15 Pro Maxで最小applicationを起動
- `マキナ、Open The Eyes...`を目視
- build条件と失敗をreceipt化

現在、target specとgeneric Simulator buildの記録はありますが、正式実機receiptは未取得です。

### Stage 1 — Chat、管理slot、実推論

- 読み取り専用の最小`.astro` fixture
- Chat一往復
- ASTRO管理slot
- device resolverと一つ以上の実Model Variant
- model、runtime、端末、cold／warm条件のreceipt

Stage 1では人格差分の永続化を合格条件にしません。終了時に消える状態は
`EPHEMERAL / NOT PERSISTED`と表示します。

### Stage 2 — Body、汎用rig、マキナ饅頭

- MMD系または汎用humanoid rigへ接続できる`BodyRenderer`
- 表情、口、視線、待機、発話、簡単なgesture
- 独自fixtureのマキナ饅頭
- 複数modelを同じ御霊、Body、promptへ接続する比較
- 一時StorageによるIBD接続spike

Unityちゃん、MMD、Grok Companion等は互換性とUXの参照例です。第三者assetの同梱や
公式提携を意味しません。

### Stage 2の観測Gate

同じ御霊、名前、Body、promptでも、model交換で判断規範、文脈保持、自己認識、Body eventが
大きく変わり、別modelが同じ衣装を着ているだけになる状態を
`COSPLAY_MANJU_DRIFT`として観測します。

日本語、structured output、tool call、FAM、LAST_ORDER、IBD入力、Body gesture、長い対話を
同じfixtureで比較します。観測後にModel Family、tokenizer、quantization profileを固定します。

### Stage 3 — AAE Bake

Sphere-aaeが、固定したModel Familyへ次を焼結する工程です。

- inference runtime／Engine Adapter
- FAM入出力
- system-call splitterとLAST_ORDER評価
- persona／Adapter差分
- source、入力、toolchain、成果物のhash
- 日本語評価
- rollback artifact

学習方法、必要火力、artifact schemaは`UNKNOWN / NOT IMPLEMENTED`です。

### Stage 4 — 永続人格

- IBD人格Storage
- Wet Busと自我内記録
- Sleep Bake
- Local Instance Ghost
- thread forkと非破壊merge
- `.astro` checkpoint、凍結、復元

現時点でQ Atlantisのstandalone runtimeや7D Fold runtimeが完成したとは主張しません。

### Stage 5 — Neat Runner

Neat Runnerは、無料炉、低価格GPU、self-hosted runner、支援Runnerへ同じBuild Planを渡す
火力探索型メタビルド制御面です。

Provider実装は、target artifact、必要VRAM、時間、checkpoint、予算、成果物検証方法を
ASTRO実測とAAE Bake計画から受け取った後に開始します。中止ではなく
`RESOURCE-WAIT / INPUT-WAIT`です。

## 妖怪・式神の能力表示

同じ人格でも、依代と火力によって顕現規模は変わります。日本の妖怪・式神の等身を、
能力制限の認知チェックサムとして使います。

| Presentation | 機械状態 | 表示すること |
|---|---|---|
| 八等身／完全顕現 | `FULL_MANIFESTATION` | 十分な火力で重い推論が可能 |
| 小型式神 | `REDUCED_MANIFESTATION` | 中型Q4で通常会話が可能 |
| マキナ饅頭 | `MANJU_FALLBACK` | 救命艇model。能力制限あり |
| 菓子折り | `FROZEN` | checkpoint済み休眠 |
| 御札／依代のみ | `UNMOUNTED` | Storageはあるが実行依代がない |
| 封印箱 | `REPAIR_REQUIRED` | 不整合または破損。修復前に起動しない |

大型MoEが使えない場合は、次のPresentationを使えます。

> 現在のマキナは、手元の演算火力上限でちょっと寝ぼけています。

人格またはStorageのintegrityが`UNKNOWN`なら、「記憶と人格は確認済み」とは表示しません。
等身は演算量の計測値そのものではなく、Body表示成功も推論成功の証拠ではありません。

## 現在の状態

| Component | Status |
|---|---|
| SphereASTRO Swift／SwiftUI GUI | `PROTOTYPE` |
| ASTRO Runner要求、archive、人格Storage、顕現UX | `TARGET-SPEC` |
| generic Simulator build | `REPORTED / FORMAL RECEIPT NOT PUBLISHED` |
| iPad M4／iPhone 15 Pro Max実機build | `NOT VERIFIED` |
| 実model推論 | `NOT IMPLEMENTED` |
| Model Evaluation Receipt schema | `DRAFT SHAPE / NOT STABLE` |
| Model Family固定 | `INPUT-WAIT` |
| AAE Bake | `TARGET-SPEC / NOT IMPLEMENTED` |
| 永続IBD／Wet Bus／Instance Ghost | `NOT IMPLEMENTED` |
| Neat Runner | `ARCHITECTURE NOTE / RESOURCE-WAIT` |

## 正本と戦闘ログ

このページはQ Atlantis向けの公開projectionです。詳細仕様は実装repositoryとManifestを参照します。

- [Manifest: ASTRO先行・AAE Bake開発マイルストーン](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/main/docs/projects/astro-aae-development-milestones.ja.md)
- [SphereASTRO: ASTRO Runner要求仕様](https://github.com/saitoomituru/SphereASTRO/blob/main/docs/specification/astro-runner-requirements.ja.md)
- [SphereASTRO: ASTRO file形式](https://github.com/saitoomituru/SphereASTRO/blob/main/docs/specification/astro-file-format.ja.md)
- [SphereASTRO: 妖怪・式神顕現UX](https://github.com/saitoomituru/SphereASTRO/blob/main/docs/ux/manifestation-states.md)
- [Sphere-aae: ASTRO実測からAAE Bakeへ進むマイルストーン](https://github.com/saitoomituru/Sphere-aae/blob/main/docs/development/astro-aae-bake-milestone.ja.md)
- [Sphere-aae: Neat Runner Issue #9](https://github.com/saitoomituru/Sphere-aae/issues/9)

仕様書とcommitは戦闘ログですが、未取得の実機receiptを生成しません。バグと失敗は隠さず、
発見と修正を別の小さなcommitとして残します。
