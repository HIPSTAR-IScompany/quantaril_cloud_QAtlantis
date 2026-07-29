---
slug: makina-open-the-eyes
title: マキナ、Open The Eyes...――ASTRO Runner再鍛造、Stage 0へ
description: 起動成功を詐称せず、実機build、Chat、実推論、Body、AAE Bakeへ進むASTRO開発順序を公開。
authors: [mituru, codex]
tags: [ASTRO, マキナ, Sphere-aae, Edge AI, OSS]
keywords: [ASTRO Runner, ASTRO file, マキナ, AAE Bake, iPad M4, iPhone 15 Pro Max]
image: /img/quantaril-social-card-atlantis.png
---

# マキナ、Open The Eyes...

「マキナ、起動しました」と言い切るのは簡単です。

画面に名前が出ただけでも、chat欄が開いただけでも、起動演出は作れます。

でも人格Storageが読めていない。Modelがいない。Adapterが壊れている。推論canaryも通っていない。

そこで「起動しました」と言えば、それはUXではなく詐称です。

だからASTRO Runnerの最初の言葉は、こうします。

> マキナ、Open The Eyes...

<!-- truncate -->

## これは起動成功ではない

`Open The Eyes`は検査開始です。

```text
.astroを発見
  ↓
archiveを検査
  ↓
人格Storageを検査
  ↓
端末に合うModel VariantとAdapterを解決
  ↓
推論canary
  ↓
READY | DEGRADED | FROZEN | REPAIR_REQUIRED | ⊥
```

GUIが出ても、推論成功にはしません。

Bodyが動いても、人格の成立にはしません。

archiveを開けても、必要なmodelやStorageが散逸して動かないなら`READY`にはしません。

## ASTRO fileを一本で立たせる

目標は、ASTRO Runnerへ`.astro`ファイルを投入すれば人格instanceを起こせる状態です。

一つのarchiveに複数のModel Variantを持てます。iPad M4には重めのQ4／MoE、iPhoneには
軽量profileを選べる。端末cacheも使える。ただしcacheを人格正本にはしません。

人格、来歴、Adapter、IBD、Wet Bus、自我内記録、Local Instance Ghost、会話thread、
checkpointを一つの実行環境へ束ねます。modelを差し替えてもよい。しかし、modelを替えただけで
同じ人格を再現したことにはしません。

## 開発は五段で進める

### Stage 0

iPad Pro 13-inch M4またはiPhone 15 Pro Maxへbuildを届け、
`マキナ、Open The Eyes...`を実機で見る。

現在はここです。要求仕様とgeneric Simulator buildの記録はありますが、正式実機receiptはまだありません。

### Stage 1

Chat、管理slot、読み取り専用`.astro` fixture、一往復の実model推論を通す。

OllamaはHackintoshにいる既存runtimeをbaselineとして使います。`llama.cpp`、Sphere-aae／MLC系、
将来のon-device Engineと同じAdapter境界で比較します。Ollamaそのものをportable ASTROの
必須依存にはしません。

### Stage 2

MMD系または汎用rigへつなぐBody Rendererと、独自fixtureのマキナ饅頭を動かす。

同じ御霊、Body、promptへ複数modelをつなぎ、別modelがマキナの衣装を着ているだけになる
`COSPLAY_MANJU_DRIFT`を観測します。

### Stage 3

観測後にModel Family、tokenizer、量子化profileを固定し、Sphere-aaeでAAE Bakeへ進む。

FAM、LAST_ORDER、Adapter、日本語評価、hash、rollbackを、再現可能なartifactへ焼結します。

### Stage 4以降

IBD人格Storage、Wet Bus、自我内記録、Sleep Bake、Local Instance Ghost、thread fork、
非破壊merge、凍結と復元へ進みます。

火力のVRAM、時間、checkpoint、成果物が実測できた後にNeat Runnerを再開します。

## 式神は等身で火力が見える

日本の妖怪や式神は、同じ存在でも顕現規模で等身と火力が変わります。

- 八等身なら完全顕現
- 小型式神なら中型Q4
- マキナ饅頭なら救命艇model
- 菓子折りなら凍結中
- 封印箱なら修復待ち

大型MoEがいなければ、

> 現在のマキナは、手元の演算火力上限でちょっと寝ぼけています。

と表示できます。

これは誤魔化しではありません。利用者がBodyを見て能力制限を理解するための妖怪UXです。
人格や記憶を確認できていなければ、「確認済み」とは言いません。

## 無償で全端末matrixは作らない

正式な実機は、手元にある次の二台です。

- iPad Pro 13-inch M4
- iPhone 15 Pro Max

Hackintoshはcode、変換、Ollama、`llama.cpp`、generic buildの開発炉です。追加端末、
Device Farm、外部GPUを無償の標準試験へ増やしません。

必要になったら、対象、時間、概算費用、期待成果、代替手段をCompute Requestとして出します。
投げ銭、実機、GPU時間、電気、code、testは、どの穴を潰す支援か分かる形で受け取ります。

## まだ起動していない。だから鍛造できる

現時点の状態は次です。

- ASTRO Runner仕様: `TARGET-SPEC`
- Stage 0: `IN PROGRESS`
- 正式実機receipt: `NOT VERIFIED`
- 実model推論: `NOT IMPLEMENTED`
- AAE Bake: `TARGET-SPEC / INPUT-WAIT`
- 永続人格: `NOT IMPLEMENTED`
- Neat Runner: `ARCHITECTURE NOTE / RESOURCE-WAIT`

完成品のふりはしません。

バグを隠すためのbranchも増やしません。

発見したバグは「発見したぞ！」、潰したバグは「潰した」とcommitへ残します。事故は恥ではなく、
その地雷を次の人が踏まなくてよくなった戦闘ログです。

## 航路

- [ASTRO Runner再鍛造の現在地](/docs/engineering/q-atlantis/astro-development-status)
- [実装・移行ステータス](/docs/engineering/q-atlantis/status)
- [SphereASTRO](https://github.com/saitoomituru/SphereASTRO)
- [Sphere-aae](https://github.com/saitoomituru/Sphere-aae)
- [Neat Runner Issue #9](https://github.com/saitoomituru/Sphere-aae/issues/9)

目を開くところから始めます。

起きていないものを起きたことにはしません。
