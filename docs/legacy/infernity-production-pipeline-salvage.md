---
title: 虚空のインフェルニティ制作パイプライン発掘
description: 旧Blender都市・樹木生成、漫画原稿、Minecraft局所改造を、第三者系譜と制作固有層に分けて保存するサルベージ記録。
---

# 虚空のインフェルニティ制作パイプライン発掘

更新日: 2026-07-29

Status: `SALVAGE-INDEXED / ORIGINALS READ-ONLY / REPRODUCTION NOT STARTED`

## 何が見つかったか

2008年以降の`infernoayase`／虚空のインフェルニティ制作棚を読み取り専用で調べた結果、
単一engineではなく、複数のgenerator、portable制作環境、素材library、render、漫画原稿を
束ねた制作pipelineが残っていました。

| 系統 | 発掘したもの | 現在の扱い |
|---|---|---|
| Blender 2.45〜2.49背景 | 学校、駅、空港、鉄道、都市、建物、小物 | 前史の背景資産。cloud上の一部は未取得 |
| Suicidator City Generator v0.41 | 道路成長、建物配置、都市texture | 第三者generator |
| Blender Tree-maker v3.2.22 | seed付きL-system樹木 | 第三者系譜 |
| Blended Cities v0.445 | OSM／mesh、道路、zoning、building library | 第三者GPLv3系譜 |
| SCG v0.5.6 | Blender 2.63とJava／JTSの都市生成 | 第三者generator。再配布条件に注意 |
| Blender 2.49 portable環境 | Python 2.xと多数の背景／漫画連携script | componentは第三者中心。組合せが制作環境の証拠 |
| 2013〜2020年3D制作 | 都市、宇宙船、研究所、地下室、室内、線画調背景 | infernoayase制作候補 |
| ComicStudio／CLIP／PSD | 原稿と3D生成器が同じ制作backupに同居 | 工程接続候補。page単位のsourceは未確定 |
| Minecraft Madness | 鉱石／赤石のdrop ruleを変えたclass | local実験候補。base versionと差分は未確定 |

## これは「全部自作engine」ではない

Suicidator City Generator、Blended Cities、Tree-maker、Blender script等は第三者由来です。
それらのcodeを、虚空のインフェルニティ独自engineとして公開しません。

一方で、次の制作層は別に評価します。

- どのgenerator、script、libraryを選んだか
- 同じportable環境へどう統合したか
- seed、parameter、素材、scene、camera、renderをどう設定したか
- 生成結果をどう編集し、漫画線画や原稿工程へ接続したか
- Minecraftの局所ruleをどの値へ変えたか

第三者toolの利用と、作品制作上の独自性は両立します。作者性、license、実行可能性、
作品への寄与を一語に丸めません。

## 発見できたことと、まだ動かしていないこと

| Evidence | 状態 |
|---|---|
| legacy fileとdirectoryの存在 | `OBSERVED` |
| Blender header、埋め込みscript、library構成 | `OBSERVED` |
| 複数backupのcollection hash一致 | `VERIFIED IN SUPPLIED INDEX` |
| 代表renderの視認 | `REPORTED IN SUPPLIED INDEX` |
| 原稿とgeneratorの同居 | `OBSERVED / DIRECT PAGE LINEAGE UNKNOWN` |
| Blender 2.49隔離VMでの起動 | `NOT STARTED` |
| 固定seedでの再生成 | `NOT STARTED` |
| 現代Blender／game engineへの移植 | `NOT IMPLEMENTED` |
| 公開可能なasset bundle | `RIGHTS REVIEW REQUIRED` |

旧fileを発見したことは、現在のmacOSやBlenderで動く証明ではありません。
原本を現行applicationで直接開き、保存し直すこともしません。

## 保全と再現の順序

```text
originals
  -> hash-verified representative copy
  -> isolated Blender 2.49 environment
  -> fixed seed / minimal input
  -> road / building / tree / texture output
  -> execution receipt
  -> modern neutral contract
```

同一内容のbackupは、代表一組をworking copyにし、残りをuntouched evidenceへ保ちます。
失敗した生成、欠落texture、読めないformatも消さず、再現条件として残します。

## 現代Q Atlantisへ接続できる仮説

[HYPOTHESIS]

過去assetを製品名ごとに復刻するだけでなく、次の共通構造へ抽出できる可能性があります。

```text
world / scenario command
  -> typed event graph
  -> deterministic state machine
  -> visual / audio / physics / actuator adapter
  -> provenance + execution receipt
```

- Blender／都市／樹木: 空間生成
- Minecraft Madness: block ruleと局所世界法則
- KAG／TJS／ONScripter: scenario、layer、選択、save state
- H8／Arduino／ESP32: sensor、state machine、physical I/O
- Web 3D／AR: browser projection

これは将来のWorld Builder、ASTRO Body Renderer、物理依代へ接続できる研究候補です。
現在のQ Atlantis runtimeへ実装済みではありません。

## 公開しないもの

この公開projectionは、legacy volumeや個人端末の絶対pathを掲載しません。
credential、Wi-Fi secret、player名、接続元IP、電話・営業記録、個人名、会社案件の内部情報も
転記していません。

MIPはUserが指定した完全除外領域です。filename、本文、hash、index、重複判定を含め、
今回の発掘対象へ入れていません。

## Sourceと次のGate

- supplied source: `INFERNITY_BLENDER_PIPELINE_SALVAGE_INDEX_2026-07-27.md`
- source SHA-256: `e6a938c01b904db02e1478fc39f12e33a9e431c9c196f172de2b21c0235043da`
- operation: 読み取り専用
- source status: local supplied index。Q Atlantisへ原本未転送
- historical OAE: `historical-oae-unavailable`

次の操作には、人間の別Gateが必要です。

- 代表copyの保全複製
- cloud上の必要範囲だけを選択download
- Blender 2.49隔離VMでの再現
- 原稿pageと背景renderの照合
- componentごとのlicense／共同制作／購入素材の権利確認

正本となる系譜、所管、Stage Gateは
[ZeroRoomLab Manifestのサルベージ文書](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/main/docs/projects/infernity-production-pipeline-salvage.ja.md)
を参照してください。
