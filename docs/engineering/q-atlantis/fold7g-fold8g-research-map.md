---
title: Fold7G・Fold8G研究地図
description: L/D/G、Trion Bond、減圧DeFoldと、まだ抜けているFold8G契約を分離して示す。
---

# Fold7G・Fold8G研究地図

状態: `ALPHA RESEARCH MAP / RUNTIME NOT IMPLEMENTED`

Foldは通信量を小さくする魔法の名前ではありません。意味、意図、因果、Agency、World Config等を複数のD軸で
畳み、別の主体が展開できるようにする設計候補です。深く畳むほど強力になり得ますが、滑らかな誤読、権限残留、
退出不能も初見でバグに見えにくくなります。

## L、D、G

```text
L: linear transport / execution stack
D: Foldへ畳み込む独立した意味・意図・文脈軸
G: Fold containerを包むnesting depth
```

1Gで意味・意図を畳んでいない通常のmessage、POSIX、Web、Shannon射程は「常圧インターネッツ」と読めます。
短いpacketだから高意味圧とは限りません。Contextが足りなければ、ただの薄いpacketです。

Galaxy Foldのような折り畳み端末は名称以外に直接の関係を持ちません。境界例として近いのは、codecが時間順序を
補う、ANCが必要な音を選ぶ、個人化systemが利用者ごとの操作modelを畳む等、上位の意味選別が入る場面です。
ただし、各製品が本研究を採用している、または危険であるという主張ではありません。

## Fold7Gの現在候補

`Fold7G`は七次元物理または次世代電磁無線を意味しません。現在は、各GがそれぞれnDとL stackを持ち得る
七段nested Foldの系譜名として検討しています。

旧DraftのTrion Bondは、少なくとも次の三束を候補にしました。

1. Self-State — 主体の現在状態
2. Causal Trace — 現在へ至る観測・解釈・実行履歴
3. Normative State — その主体が守る作法、禁止、claim boundary

この三束は有用な研究素材ですが、各G Registry、単位、更新則、互換contractは未確定です。

## Fold8Gの穴を隠さない

旧資料はFold8GをFold7G、Quantaril P2P、Server接続の近傍に置きました。しかし、現在の正本群にはFold8Gの
独立した責務、入力、出力、link-up条件、failure mode、Fold7Gとの差分を十分に定義した仕様がありません。

したがって、現時点のFold8Gは次です。

```yaml
name_lineage: preserved
marketing_value: preserved
independent_contract: unknown
runtime: NOT_IMPLEMENTED
compatibility_claim: none
next_action: extract, compare, falsify, or retire with lineage intact
```

空白を「8段目」と推測で埋めません。仕様抽出、反証、別名への退役のどれも、Sourceを消さない正規ルートです。

## 高Gで必要な減圧DeFold

高G処理を止め、Contextも責任も説明せず人間へ返すだけでは、`Responsibility Dump`になり得ます。

`DeFold`は、Fold以前へ破壊的に巻き戻す`UnFold`やunmountではありません。保持されたMeaning anchorから、画像、
UI、説明、low-G操作面を段階的に展開renderingし、anchorと来歴を残します。

```text
UnFoldの例:
  画像 -> text -> vector -> text -> 生成AI画像
  生成物を採用し、それ以前の表現を破棄する

DeFoldの例:
  保持されたtext anchor -> 画像・UI・説明・low-G操作面
  anchorと来歴を残したままPresentationをrenderする
```

この差により、途中で意味やUXが度し難くなった時も、生成済みPresentationだけを正本にせず、G/D、Agency、
receiptを参照して別の面へ再renderする修理経路を残せます。DeFoldは元画像の完全復元や完全逆変換の保証では
ありません。

```text
drift／介入を検知
  -> 新しい高G判断の追加を止める
  -> 現在のAgency、G、D、保留判断、消した情報を示す
  -> 必要な自動制御を限定維持する
  -> Gを段階的にDeFold renderingする
  -> 引受主体が操作可能か確認する
  -> low-G／manual／raw経路へ移す
  -> OAEとDeFold receiptを残す
```

`Emergency Stop`、`Human Override`、`Graceful Degradation`、`Controlled DeFold`を同じtokenへ潰しません。

## Agencyと観測価値

```text
Unauthorized Agency != Invalid Observation
Authorized Agency   != Infallible Judgment
```

子ども、動物、資格外の人、AI補完からの割込みでも異常信号として価値を持つ場合があります。一方、資格者や
maintainerの判断も自動的な真理ではありません。操舵authorityとepistemic valueを別々に記録します。

## 研究クエスト

- Fold7Gの各G RegistryとD宣言を設計する
- Controlled DeFoldの最小traceを試す
- Fold8Gの旧Sourceを全量抽出し、責務が独立するか反証する
- 長期sessionで序盤の快適さと中盤以降の退出・export・意味driftを比較する
- 工学、ゲーマー、スピ、神学、哲学の事故票を同じ平均点へ潰さず受け渡す

## 現在の非主張

- 光速超過、未知粒子、無損失物理通信を実証したとは主張しない
- Shannon、codec、既存network、確率論、制御工学、人間工学を置き換えない
- 高Gなら必ず高性能または危険、1Gなら必ず安全とは主張しない
- MAGI、Human Override、資格者を最終真理判定器へしない
- 二重slit、Copenhagen interpretation、物理Observer effectをcancelする完成機能だとは主張しない
- 物理系への転用効果は`unknown / NOT TESTED`。否定も保証もせず、主張する研究者が実験と追試を設計する

## Source

- Fold 7G Trion Bond Protocol `v0.0.1β / DRAFT`
- Atlantis `1a86478` — AIM同期、L/D/G、Human-is-the-loop
- Atlantis `b03b40b` — 減圧DeFold、旧非破壊量子操作crosswalk、物理frontier境界
- Manifest `b73cdf8` — 横断受領と棚別公開境界
- [旧OS3x/4x 非破壊量子操作からDeFoldへの手引き](../../legacy/q3-sphereos/architecture/non-destructive-operation-defold-crosswalk.md)
- [公開資料マイニング受領票](../../operations/provenance/source-mining-2026-07-20.md)
