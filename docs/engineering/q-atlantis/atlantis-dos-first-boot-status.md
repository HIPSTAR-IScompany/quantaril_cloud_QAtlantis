---
title: SphereOS Atlantis DOS 初回ブートの現在地
description: 少量の初期指示から規約、停止条件、資源探索、試験計画、証跡固定へ進んだ開発制御面と、まだ完成していないruntimeを分ける。
---

# SphereOS Atlantis DOS 初回ブートの現在地

更新日: 2026-07-29

Status: `CONTROL PLANE OPERATING / STANDALONE RUNTIME NOT IMPLEMENTED`

## ここでいうDOS

SphereOS Atlantis DOSは、完成したAI本体や常駐daemonの名称ではありません。

Manifest、`AGENTS.md`、MAGI、Guardrails、責務境界、停止条件、作業経路、Issue、Git、
receiptを使い、異なるAIや人間が同じ開発現場へ着任できるようにする**開発制御面**です。

```text
短い着任指示
  -> repositoryの入口
  -> 正本／責務／禁止事項を読む
  -> 現地資源を観測する
  -> Semantic Stopまたは最小試験
  -> log／Issue／commit／receiptへ返す
  -> 次の実行者が続きから着任する
```

したがって、現在の「初回ブート」は次を意味します。

- repository側の規約を辿って作業順序を復元できた
- GUIへ推論Engineを直埋めしない責務境界が作用した
- 新規取得より先に既存のローカル推論資源を調べた
- build失敗をcode、environment、未所有端末へ分離した
- ASTRO先行、AAE Bake後段、Neat Runner入力待ちの順序を固定した
- 未確認、停止、認証待ち、失敗もGit上の戦闘ログへ残した

これは、ASTRO推論body、永続人格、AAE Bake、Neat Runner、Atlantis standalone runtimeが
完成したという表示ではありません。

## 初回ブート稿が報告する観測

以下は2026年7月29日の長文稿が報告する作業時観測です。生logをQ Atlantisへ同梱していない項目は、
このページでも`REPORTED / FORMAL RECEIPT NOT PUBLISHED`を維持します。

| 観測面 | 長文稿の報告 | Qでの扱い |
|---|---|---|
| 既存Ollama | 既存modelを6体確認 | `REPORTED`。新規installを要しない開発炉候補 |
| qwen3:8b Q4_K_M | 日本語structured outputとtool callが成立 | `REPORTED / FORMAL RECEIPT NOT PUBLISHED` |
| 冷間／温間 | 約44.3秒／約15.6秒、CPU-only | 条件付き参考値。製品性能値へ一般化しない |
| SphereASTRO build | generic Simulator buildを報告 | `REPORTED / FORMAL RECEIPT NOT PUBLISHED` |
| Simulator test | unit testと一部UI launch後、worker終了待ちを手動中断 | 全UI test成功へ昇格しない |
| 正式実機 | iPhone 15 Pro Max、iPad Pro 13-inch M4 | `NOT VERIFIED` |
| ASTRO実推論 | GUIとのend-to-end接続なし | `NOT IMPLEMENTED` |
| Neat Runner | Issueとarchitecture note | `RESOURCE-WAIT / INPUT-WAIT` |

既存modelの存在、単発API応答、generic buildは、それぞれ別のgreenです。
一つが通っても、人格、Storage、Body、実機、長時間安定、商用品質を自動的にgreenへしません。

## 異種AIの出勤簿

初回ブート稿では、AIの参加を一語の「理解した」で丸めず、証拠を次の階段へ分けました。

| 証拠階層 | 意味 |
|---|---|
| `Presence` | workspaceへ接続した痕跡がある |
| `Observation` | 対象本文を直接読んだ証拠がある |
| `Contribution` | 読んだ内容から成果物を作った |
| `Mutation` | 対象を変更した |
| `Verification` | buildまたはtestで変更を確認した |
| `Persistence` | Git、Issue、receiptへ残した |

接続痕跡だけを本文理解や貢献へ昇格しません。逆に、現存logが薄い参加者を「何もしていない」とも
断定しません。古い証拠が出土した場合は、この階段上の位置を更新します。

## 現在のブート経路

```text
Atlantis DOSの制御面
  -> ASTRO Stage 0: 正式実機build receipt
  -> Stage 1: Chat／管理slot／一往復の実推論
  -> Stage 2: Body／model drift観測
  -> Model Family固定
  -> Sphere-aaeでAAE Bake
  -> Neat Runner再開判定
```

Neat Runnerは中止ではありません。Model Variantごとのmemory、disk、cold start、throughput、
checkpoint、必要火力、予算停止条件が実測されるまで、巨大実装を先行させない状態です。

## 財布、停電、branchもruntime状態である

この開発炉では、課金枠、端末、電気、SSD、回線、認証が作業順序を変えます。
これらを技術の外に追い出さず、resourceとstop conditionとして扱います。

- Q Atlantisは`dev`でpreviewし、人間の目視後まで`main`へmergeしない
- それ以外は理由なくbranchを増やさない
- 小さな日本語commitとremote pushを停電時の復旧点にする
- token再認証と秘密鍵は人間のUser Gateに残す
- 失敗を別branchへ隠さず、発見と修正を戦闘ログにする

## このページの射程

このページは、提供された公開前長文稿をQ Atlantis向けに圧縮した公開projectionです。
長文稿の物語、比喩、回顧をruntime receiptへ変換していません。

- source: `SphereOS-Atlantis_DOS_初回ブート実働報告_Note長文稿_20260729-v2.md`
- source status: `公開前ドラフト v2`
- SHA-256: `89a58d72077ffa01af2a149f4116dcf4faa527f91de9a701b1c8cddafa5e3f8f`
- public projection: Q Atlantis `dev`
- historical OAE: `historical-oae-unavailable`

完成製品、全端末対応、商用SLA、AGI、意識の自然科学的証明は主張しません。
外部service、model、価格、quota、API仕様は変動します。追試、Issue、fork、PR、実機receiptを歓迎します。

## 次に読む

- [ASTRO Runner再鍛造の現在地](./astro-development-status.md)
- [製品系列と現在能力](./product-line.md)
- [実装・移行ステータス](./status.md)
- [Provenanceと監査記録](../../operations/provenance/index.md)
