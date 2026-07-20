---
title: 旧「非破壊量子操作」からDeFoldへの手引き
description: OS3x/4x利用者向けに、旧語彙の設計意図を現在の情報子・DeFold語彙へ非遡及で対応づける。
---

# 旧「非破壊量子操作」からDeFoldへの手引き

状態: `ALPHA LEGACY CROSSWALK / CURRENT INTERPRETATION`

これは旧OS3x/4x文書を書き換える正誤表ではありません。旧利用者が「今のQ Atlantisでは、あの概念を何と呼ぶか」
を探すためのInterpretation Ruler Changeです。過去の同時点OAEは参照できないため、旧文書の意図を現在判断として
backfillしません。

## 中心となる対応

| 旧OS3x/4x語彙 | 現在の情報子語彙 | 継承する設計意図 | 自動継承しない主張 |
|---|---|---|---|
| 非破壊量子操作 | anchor-preserving operation / DeFold-capable transform | source、来歴、再render・修理経路を残す | 物理量子computerで実行済み |
| 量子状態の展開 | Meaning anchorからのDeFold rendering | 一つの生成結果へsourceを潰さない | 完全逆変換、元画像の完全復元 |
| 観測で状態を選ぶ | OAE、Agency、World Config付きPresentation選択 | 誰がどのContextで採用したか残す | 観測者が真理を確定すること |

ここで`DeFold`は、Fold前へ破壊的に戻す`UnFold`やunmountではありません。

```text
UnFoldの例:
  画像 -> text -> vector -> text -> 生成AI画像
  生成物を採用し、それ以前の表現を破棄する

DeFoldの例:
  保持されたtext anchor -> 画像・UI・説明・low-G操作面
  anchorと来歴を残したままPresentationをrenderする
```

## なぜ修理に必要か

長期sessionの途中で意味drift、退出不能、UX破局、Authority残留が度し難くなった時、生成済みPresentationだけが
正本なら、修理は再生成または全面rollbackへ寄ります。DeFold可能な系はMeaning anchor、G/D、Agency receiptを
保持するため、別のlow-G面、別Presentation、別Portalへ再renderする選択肢を残せます。

非破壊は「必ず元通り」の意味ではありません。圧縮、選別、欠損は起こり得ます。何を保持し、何を落とし、誰が
どのrenderを採用したかを表示できることが、修理可能性の中心です。

## 物理frontierとの境界

このcrosswalkは、二重slit実験、Copenhagen interpretation、物理学上のObserver effectをcancelする超物理機能の
完成宣言ではありません。一方、別射程の物理学Authorityやevidenceだけで、情報子・software上の非破壊DeFoldを
反証したことにもしません。

物理系へ転用した場合の効果は`unknown / NOT TESTED`です。否定も保証もしません。frontierとして主張する研究者が、
仮説、対象系、装置、control、測定量、誤差、反証条件、再現手順を宣言し、手元実験と独立追試を組んでください。
Q Atlantisは記録、World分離、receipt、比較設計を支援し得ますが、未実施の結果やAuthorityを代行生成しません。

## Source

- SphereOS Atlantis `b03b40b` — DeFold定義、legacy crosswalk、物理frontier境界
- ZeroRoomLab-manifest `b73cdf8` — 横断受領票
- [Fold7G・Fold8G研究地図](../../../engineering/q-atlantis/fold7g-fold8g-research-map.md)

Last Order: `LEGACY-CROSSWALK / stop-retroactive-backfill / experiment-your-frontier`
