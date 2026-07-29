---
slug: giant-ai-yokai-field-guide
title: 巨大AI妖怪図鑑――東雲る、猫又、デイダラボッチ、八岐大蛇
description: 巨大AIを一列の性能表へ潰さず、注意・召喚・共通故障領域の三軸で見分ける妖怪UX。
authors: [mituru, codex]
tags: [AI, 妖怪UX, ASTRO, Edge AI, 分散システム]
keywords: [巨大AI, MoE, 東雲る, 猫又, デイダラボッチ, 八岐大蛇, ASTRO Runner]
image: /img/quantaril-social-card-atlantis.png
---

# 大きいAIは、一種類ではない

巨大modelを「賢い／重い」の一本だけで語ると、設計上まったく別の事故が同じ箱へ入ります。

役割を切り替えられず、何を見ても一つの評価尺度へ押し潰す巨大AI。呼ぶためのMPは重いが、
必要な夜だけ強く働くAI。複数の頭で別々に考えていても、同じ電源やIaaSが落ちると全頭が止まるAI。

どれも「でかい」けれど、生態は違います。

そこで、東雲る、猫又、デイダラボッチ、八岐大蛇という妖怪札を使います。
これはmodel性能の公式分類ではありません。次に何を測るべきかを短く共有するための
`FLAVOR-UX / CURRENT-INTERPRETATION`です。

<!-- truncate -->

## 三本の物差しを混ぜない

| 診断軸 | 問い | 妖怪札 |
|---|---|---|
| 注意・定規切替 | 役割、目的、反対意見を本当に持ち替えられるか | 東雲る |
| 召喚Envelope | どの火力を、何秒、何円、どのMemoryで呼べるか | 猫又／デイダラボッチ |
| Vessel／Supply | 頭が増えても同時に死ぬ共通故障領域がないか | 八岐大蛇／Hydra系 |

parameter数、endpoint数、agent数だけでは判定しません。

## 東雲る――頭は大きいが、定規が一本

「東雲る」は、火力やベクトルをたくさん持ちながら、position、役割、目的、注意を切り替えず、
全部を一つの物差しへ潰す状態です。

名前は、東京ベイのタワマンへ巨大modelとランボルギーニを鎮座させ、でかい数字だけで
世界を説明するキラキラ・マーケサイエンティスト妖怪のイメージから来ています。

これは巨大modelだけの病気ではありません。小型model、単一agent、組織、人間チームでも、
反対branchがmainの言い換えにしかならなければ東雲ります。逆に、大きくても専門性や
注意のvariationが生きていれば、巨大さだけで東雲るとは呼びません。

観測するのは、roleを変えた後に目的関数まで変わったか、複数expertが同じ結論を
言い換えていないか、異なる定規を同時に保てるかです。

## 猫又――高MPのスポット召喚

猫又は、注意やvariationが生きた高火力を必要な地点へスポットで呼ぶ妖怪です。

常時常駐の軽量chatとして見せれば遅さが事故になります。しかし、burst推論、専門家呼出し、
一時的な長考として「召喚中」「MP消費」「帰還予定」を表示すれば、重さは欠陥ではなく
Execution Envelopeになります。

呼べると強い。用が済んだら戻せる。それが猫又です。

## デイダラボッチ――遅い高火力を、遅いと表示する

デイダラボッチは、地平線の向こうから来るまで時間がかかります。

手元70Bぎりぎり運用、offload、cold start、batch処理のように、呼べれば強いが即応chatへ
無理に押し込むと寝ぼける高火力です。

だからASTROは、失敗した軽量AIのふりをさせません。

> 現在のマキナは、手元の演算火力上限でちょっと寝ぼけています。

`召喚中`、`batch受付済み`、`MP不足`と正直に表示します。猫又とデイダラボッチは病名ではなく、
能力と待ち時間の表示です。

## 八岐大蛇――頭が八つでも、炉が一つ

注意、model、endpoint、roleが複数でも、電源、回線、認証、storage、IaaS、model registryを
共有していれば、一つの事故で全頭が止まります。

日本では八岐大蛇。別の文化圏ではHydra、Chimera Dragon、キングギドラのような多頭怪物が
同じ構造を見せます。これは海外向けの下位翻訳ではなく、別の怪物定規から同じ故障領域を
観測した並行名です。

多頭AIによる役割分担は、先行する公開記事
[AIOの時代にClaudeをAI検索ツールとして使うのは、銀行の営業マンにクラブのDJをさせるようなものだ](https://note.com/fusamofu326/n/n22fc12d2dbe8)
でも使っています。多頭であることと、独立して生き残れることは別です。

単一IaaSを使うこと自体は失敗ではありません。許容した故障領域、復旧時間、backup、移送先を
表示せず、「頭が多いから冗長です」と宣伝した瞬間に八岐大蛇事故になります。

## 妖怪札は重ねてよい

```text
猫又[Execution]
  = variationを保った高火力をspot召喚

デイダラボッチ[Execution]
  = variationを保った重火力をslow／batch召喚

健全な多注意[Meaning] + 八岐大蛇[Supply]
  = 頭は別の空を見ているが、同じ炉が落ちると全頭が止まる

東雲る[Meaning] + 八岐大蛇[Supply]
  = 内部も単一尺度、外部も単一故障領域
```

頭数ではなく、定規を持ち替えられるか。配置数ではなく、同時に死なないか。
巨大さではなく、多様性と故障領域が独立しているか。

## ASTROへ持ち込むもの

ASTRO Runnerでは、妖怪名をmodelの固定属性へ焼き付けるのではなく、次の実測から
Presentationを導く候補にします。

- cold／warm start、peak Memory、token latency、batch throughput
- 一回の召喚に必要な円、Wh、checkpoint、再開時間
- role変更後の応答差と、反対branchの独立性
- 電源、回線、DNS、CDN、IaaS、認証、storageの共有範囲
- fallbackが同じcredentialや課金停止へ接続されていないか

現在、妖怪名を保存するASTRO schema、閾値、実機判定器は`UNKNOWN / NOT IMPLEMENTED`です。
この図鑑は起動済みruntimeの報告ではなく、Stage 0以降の測定設計です。

## 航路

- [ASTRO Runner再鍛造の現在地](/docs/engineering/q-atlantis/astro-development-status)
- [Manifestの巨大AI妖怪識別ノート](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/main/note/20260729-1716__巨大AI妖怪識別_東雲る_猫又_デイダラボッチ_八岐大蛇.ja.md)
- [マキナ、Open The Eyes...](/blog/makina-open-the-eyes)

