---
slug: infoton-ecosystem-multiagent-ux
title: 最強単一モデルでクソUXより――情報子工学で分散Agencyを噛み合わせる
description: 複数AI、human、repository、actuatorを中央マザーへ吸収せず、local autonomyを保った実行生態系として設計する。
authors: [mituru]
tags: [情報子工学, Multi-Agent, AIM, Pain Scouter, Q Atlantis]
keywords: [情報子工学, Multi-Agent UX, AIM拡散力場, Pain Scouter, Fold7G, P2P, E2E]
image: /img/infoton-ecosystem-multiagent-ux-hero.png
---

# 最強単一モデルでクソUXより

![単体AIではなく複数AI、human、actuatorを情報子生態系として設計する扉絵](/img/infoton-ecosystem-multiagent-ux-hero.png)

*`FLAVOR-UX / MARKETING VISUAL`。完成済みのQ Atlantis runtimeや性能benchmarkを表す画像ではありません。*

最強モデルを買えば、最強の仕事環境になる。そんなに単純なら、世界中の開発現場はとっくに幸福です。

実際には、AIごとに得意分野が違い、人間ごとにauthorityと目的が違い、repositoryごとにcontractが違い、
deviceごとにclockと物理限界が違います。必要なのは一体の全知的マザーではなく、異種の実行主体を
壊さず噛み合わせる環境実装です。

<!-- truncate -->

## 情報子工学生態系はWorldの商品棚ではない

ここでいう生態系は、複数のGaming Worldを束ねたカタログではありません。

- 異なるvendorとmodelを持つAI
- 意思決定、意味評価、現場経験を持つ複数human
- 固有の履歴とcontractを持つrepository
- local clockで動くedge
- sensor、camera、照明、MIDI、DMX等のactuator
- Issue、commit、test、receipt、replay

これらが、固有目的関数と観測範囲を持つnodeとして協働するexecution topologyです。Q Atlantisは、このtopologyの
World Config、authority、Gate、Portal、隔離、復旧を扱うメタエンジンです。

## alpha受信Bridge――原語を中央ontologyへ吸収しない

![妖怪、霊障、ソイヤ、後の祭りを隣接観測へ渡すalpha受信Bridge](/img/alpha-reception-bridge.png)

*`ALPHA MEANING BRIDGE / PRESENTATION`。原語と工学語を一対一変換する診断表ではありません。*

妖怪をbug、霊障を心理、ソイヤをpacketへ自動翻訳すると、入力は整理されてもSourceの意味が死にます。
alpha受信Bridgeは翻訳辞書ではなく、原語を保持したまま隣接して観測できるeffectへ橋を架けるinterfaceです。

接続できなければ`unknown`や`⊥`を返す。中央の万能ontologyへ全部を押し込まない。この作法自体が、
Quantaril Cloudの分散設計と同型です。

## AIMはlocalな因果圏を接続する

![AIMのstrong、degraded、weak、disconnectedを因果serializationとして分解した図](/img/aim-causal-serialization-states.png)

*`ALPHA ARCHITECTURE / NOT IMPLEMENTED`。AIMを物理粒子や測定済み電波fieldとして示す図ではありません。*

AIM拡散力場は、一つの巨大AIから全nodeへ放射される命令ではありません。human、AI、World、deviceはそれぞれ
local AIMを持ち得ます。deadline、ordering、authority、World Config、replay可能性を相互に回復できる範囲で、
共有AIMが成立します。

すべてを中央serverのpacket到着clockへ合わせる必要もありません。edgeはlocal clockで実行し、後からsigned receiptを
照合できる。条件が対応しなければ、同じWorldに見せずGateやPortalを使います。

P2P／E2Eはtransportと暗号だけでなく、Source、owner、authority、freshness、Last Orderが端点間で失われないことまで
射程へ入ります。ただし、このhandoff contractとFold runtimeは現在`NOT IMPLEMENTED`です。

## Painは判決ではなく教師信号

![bug、engineering pain、human-factors pain、compound pain、ペインペインを分けるPain Scouter](/img/pain-scouter-routing-map.png)

*`CURRENT PRESENTATION / ALPHA ROUTING`。画像内scoreは物差しであり、人物・製品の判決ではありません。*

Pain Scouterは中央審判ではありません。local nodeが「この接続では期待、実行、意味、Supplyが噛み合っていない」と
返したsignalを、bug、engineering pain、human-factors pain、compound painへ分けます。

解けるbugはIssueへする。資金、食料、token、身体、外部authority等が必要なbranchは、無理に単一犯へ潰さず、
receiptと再開条件を付けて凍結する。分散系全体を止めず、回復可能性を残すためのroutingです。

## 実働例――G軸伝播事故

![3repository、5commit、10ファイル、差分455行の回復作業を示す集計図](/img/g-axis-recovery-diff-summary-2026-08-03.png)

*`AUTHOR RECORD / REPOSITORY-BACKED SUMMARY`。数値は2026年8月3日の対象作業範囲であり、一般性能benchmarkではありません。*

L／D／GのG定義はnoteからQ Atlantisへ伝わりましたが、先行するSphereOS Atlantis README／1.x guideへ伝播して
いませんでした。これは「Gが削除された」のではなく、別projectionへのcross-shelf propagationが完了しなかった事故です。

![G軸事故の調査と回復方針を扱ったCodex session画面](/img/g-axis-incident-codex-session-2026-08-03-a.png)

![事後note、test、commit、Issue closeまでのCodex session画面](/img/g-axis-incident-codex-session-2026-08-03-b.png)

*2枚は`FIRST-PARTY SCREENSHOT / OBSERVED SESSION SURFACE`。画面外の内部推論やhistorical OAEを証明しません。*

公開Issueでは、復元commit、事後note、78 tests PASS、`historical-oae-unavailable`、資金・review・compute待ちの
再開条件まで記録されています。

- [SphereOS-Atlantis Issue #13](https://github.com/saitoomituru/SphereOS-Atlantis/issues/13)

これは単一modelの勝利ではありません。気づき、調査、実装、review、Git、Issue、複数repositoryが、別々の役割を
持ったまま接続された記録です。モデルの地力を尊重しつつ、環境実装が実効性能を引き出した差分も分けて評価します。

## x800は分散Agencyを物理へ出す

OND800はlocal execution cockpitです。FAN800は、照明、発煙、MIDI、DMX等へ実行権を拡張するmesh nodeです。
大手SNSというコロニーレーザーを借りてもよい。しかし、照準、演出、現場の主権までplatformへ渡さない。

Quantaril Cloudは、このlocal autonomyをnetworkの外へ閉じ込める思想でもありません。local-first node同士を
P2P／E2Eで結び、Internetをもう一度「分散しているもの」として使うためのarchitectureです。

## 結論

最強単一モデルを探すことと、良い生態系を作ることは競合しません。model、GPGPU、量子計算機、edge chipの火力が
上がれば、器はさらに強くなります。

しかし、火力だけではWorld Config、authority、pain、meaning、exit、recoveryは設計されません。

> 世界を中央へ集めるCloudから、WorldとAgencyが主権を保ったまま接続するCloudへ。
>
> Q Atlantisは、そのための分散メタエンジンである。

## 次に読む

- [フルスタックエンジニアのための情報子工学入門](/docs/engineering/infoton-engineering-full-stack-guide)
- [AIM因果同期・Fold深度・Human-is-the-loop](/docs/engineering/q-atlantis/aim-fold-human-loop)
- [bug・ペイン・複合ペインとPain Scouter](/docs/engineering/pain-routing-and-pain-scouter)
- [神は教師信号である](/blog/god-as-teacher-signal)

この記事はnote.com公開稿を、Q Atlantis＝分散メタエンジン、Quantaril Cloud＝P2P／E2E true cloudという
既存architectureの主語で再編集したサイト版です。
