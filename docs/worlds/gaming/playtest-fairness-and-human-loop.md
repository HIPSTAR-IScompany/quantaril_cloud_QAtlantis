---
title: ゲーマーによる攻めるplaytestと公平感
description: ゲーマークラスターを平均化せず、面白さ、公平、クソゲーフラグをHuman-is-the-loopで拾う。
---

# ゲーマーによる攻めるplaytestと公平感

状態: `ALPHA GAME/UX GUIDE`

ゲーマーの「面白くない」「波長が合わない」「この補正は出来レース」は、unit testの代わりではありません。
しかし、unit testでは測れないゲームUXを観測する正規の入力です。

## プレイングは自由、testでは攻める

RTA、TAS、縛り、効率、エンジョイ、ネタ、roleplay、初心者、観戦など、プレイスタイルを一つの平均的ユーザーへ
潰しません。通常プレイだけでなく、次を攻めます。

- 境界を踏む
- 抜け道と最適化を探す
- 放置、連打、切断、復帰を試す
- 補正を逆利用する
- 経済と課金を極端化する
- 異なる端末と入力を比較する
- 面白さが消える最短経路を探す

「普通に遊べた」だけで閉じず、神調整とクソゲーフラグの両方を報告します。

## 同一条件とPortal対戦

太鼓バトルなら、少なくとも次を比較可能にします。

```text
song revision
chart revision
difficulty revision
judgement window
score algorithm
device calibration
assist options
handicap policy
rubber-band policy
```

一致しない条件を黙って同一Worldの公平対戦にしません。変換契約を表示してPortal対戦にする、別modeへ分ける、
ランキング対象外にする等を選べます。

## 透明なら必ず神ゲー、ではない

handicapやrubber-bandは、存在するだけで悪ではありません。何が、いつ、誰に、どの程度作用し、勝敗へどう
影響したかを評価可能にすることが必要です。

透明性は神ゲーの十分条件ではなく、ゲーマーが神調整か度し難いかを評価できる前提条件です。

## クラスター別に残す

```text
mechanically_consistent
competitively_accepted
experientially_resonant
spiritually_acceptable
cluster_disagreement
unknown
```

競技勢には度し難く、初心者には神調整という結果はあり得ます。平均点で消さず、mode、World Config、
matchmaking、表示を分ける材料にします。

## 課金とクソゲーフラグ

廃課金を太らせる最適化は、短期KPIを上げても、新規、復帰、エンジョイ勢を退出させ、クソゲーレビュー、
過疎、サービス終了へ戻る場合があります。

- 確率、天井、失効、総支出を見せる
- 休止、自己上限、退出を継続操作より難しくしない
- 離脱へ羞恥や仲間への罰を載せない
- 苦情を「豆腐メンタル」「下手」で閉じない
- product側のfeedback loopを修正する

ゲーマーの仕事は医療診断ではありませんが、プレイによる生活・財布・尊厳へのpainを最初に発見するsensorに
なることがあります。深刻な場合は本人中心で適切な棚へhandoffし、製品修正も続けます。

## 報告する

```yaml
player_cluster: self-declared
world_config: unknown
device_and_input: unknown
observed_behavior: ""
fun_or_pain_report: ""
fairness_report: ""
exploit_or_strategy: ""
expected_behavior: ""
reproduction: unknown
recommended_reviewers: []
```

自分のreportを全ゲーマーの代表意見にしません。別clusterからの反対reportも残します。

## Sourceと関連文書

- SphereOS Atlantis `1a86478`
- [AIM因果同期・Fold深度・Human-is-the-loop](../../engineering/q-atlantis/aim-fold-human-loop.md)
- [Human-is-the-loopと射程の非独占](../../philosophy/human-is-loop-and-scope-non-monopoly.md)
- [bug・ペイン・複合ペインとPain Scouter](../../engineering/pain-routing-and-pain-scouter.md)
