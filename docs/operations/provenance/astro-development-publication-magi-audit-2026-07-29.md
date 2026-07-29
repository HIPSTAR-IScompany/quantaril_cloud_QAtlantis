---
title: 2026-07-29 ASTRO開発状況公開前MAGI監査
description: Open The Eyes、ASTRO Stage、AAE Bake、妖怪顕現UX、Neat Runnerの公開claimをdev preview前に監査する。
---

# 2026-07-29 ASTRO開発状況公開前MAGI監査

- Status: `INTERPRETATION-OAE / DEV-PREVIEW`
- Observation: `2026-07-29T13:54:27+09:00`
- Q Atlantis target branch: `dev`
- Q Atlantis status revision: `3f3e6f4804ec4e2109b3e20325fb6dd085f86e27`
- Manifest source revision: `47c03a73c49940b40358537d2818017675f51b2a`
- SphereASTRO source revision: `31ba77cbb6b427d3656716dfe0ad138a7a38ce26`
- Sphere-aae source revision: `d4d84500944cb69a72066675bce1b9bdf7a74f51`
- Production: `NOT DEPLOYED / NOT OBSERVED`

## User Gate

Userは、ManifestとSphere-aaeへ開発マイルストーンを掲示し、Q Atlantisの既存`dev`へ
開発状況を告知することを承認した。

Q Atlantisの`dev`から`main`へのmergeとdeployは、localhost:3000のUser目視後に
別指示があるまで停止する。

既決で競合しない仕様は実装し、前段を止めない曖昧事項は`UNKNOWN`のまま進める。
曖昧かつcriticalで他の全作業を止める場合だけIssueとLast OrderをUserへ返す。

## 検証範囲・除外

今回の範囲:

- Q AtlantisのASTRO開発状況page
- 実装・移行statusと製品系列
- sidebar
- 開発告知blog
- Manifest、SphereASTRO、Sphere-aaeへの参照
- Neat Runner Issue #9への参照

今回から除外:

- iPad M4／iPhone 15 Pro Maxの実機build
- 実model推論
- model weight取得
- Model Family固定
- AAE Bake
- IBD／Wet Bus／Instance Ghostの永続化
- Neat Runner Provider実装
- `main` mergeとproduction deploy
- pixel-levelのUser目視結果

## 監査座標

```yaml
declared_position:
  role: Q Atlantis public development-status editor
  objective: ASTRO先行の開発順序を神道UXと実装statusの両方を保って公開する
medium_registers:
  - engineering status
  - public development chronicle
  - flavor UX
  - operations receipt
historical_oae_status: historical-oae-unavailable
last_order: OAE-HISTORY-UNKNOWN / stop-retroactive-backfill
```

## Declared Position

- `マキナ、Open The Eyes...`は検査開始であり、起動成功ではない
- Stage 0から2で実機、実推論、Body、人格driftを観測してからModel Familyを固定する
- AAE BakeはStage 2 receiptを受ける後段であり、現時点では未実装
- Neat Runnerは中止せず、必要火力の実測値が揃うまで`RESOURCE-WAIT`へ置く
- 神道／妖怪Presentationは能力制限を伝える第一級のUXであり、技術ノイズとして削らない
- 正式な実機対象を所有するiPad M4とiPhone 15 Pro Maxへ限定する

## Position-talk Risk

- `Open The Eyes`を人格覚醒、推論成功、記憶復元へ誤昇格する
- target specをcode、actual device receipt、runtime成立へ誤昇格する
- マキナ饅頭を人格同一性の証明または性能benchmarkへ使う
- 手元Apple Silicon profileを全端末・全modelの一般解へ広げる
- 火力不足を、Sphere全体の凍結または価値低下へ変換する
- 現在のUser Gateを過去のMakina、Q3、旧SphereOSの当時意図へbackfillする

## Ruler Provenance

- 実機、branch、merge、deploy gate: Userの現在指示
- 横断開発順序: ZeroRoomLab-manifest
- Runner、archive、人格Storage、顕現UX: SphereASTRO
- runtime、AAE Bake、Neat Runner: Sphere-aae
- Q3／Atlantis公開状態: 本repositoryのAGENTS、README、status
- MAGI監査: Atlantis-MAGISDK 0.2.1とManifest横断監査規約

現在のrepository、AI vendor、Ollama、MLC、Apple、一般的な線形roadmapを暗黙のmainへ置かない。

## Maxwell――火力と神話を削っていないか

判定: `PASS WITH MODEL-LOCK WATCH`

- 大型MoE、FAM、AAE Bake、永続人格、Neat Runnerを削除せず、後段branchとして保持した
- 八等身、小型式神、マキナ饅頭、菓子折り、封印箱を能力状態へ接続した
- 神道／妖怪UXを装飾へ降格せず、能力制限の認知チェックサムとして残した
- Stage 0の小さい断面を、最終製品の目的へ縮小しなかった

watch:

- Stage 2前のmodel選定を、人格基底の永久正解へ固定しない
- lightweight profileを「劣った人格」として表示しない

## Uriel――証拠と責任を伸ばしていないか

判定: `PASS FOR DEV PREVIEW / PRODUCTION UNKNOWN`

[FACT]

- SphereASTROにはSwift／SwiftUI prototypeとtarget specがある
- generic Simulator buildはSphereASTRO文書で報告されている
- 正式実機receipt、実model推論、AAE Bake、永続人格は未実装または未検証
- Neat Runner Issue #9は`saitoomituru/Sphere-aae`に存在し、上流`mlc-ai/mlc-llm`ではない
- Q Atlantisの作業branchは`dev`

status pageではgeneric buildを`REPORTED / FORMAL RECEIPT NOT PUBLISHED`とし、
実機を`NOT VERIFIED`、実推論を`NOT IMPLEMENTED`とした。

`マキナ、Open The Eyes...`は検査開始であり、canary前に`READY`を出さない。

## Raphael――棚とsystem greenを平均化していないか

判定: `PASS WITH PREVIEW WATCH`

- Manifestは横断順序、SphereASTROはRunner仕様、Sphere-aaeはBake／runtime、Qは公開projectionを所有する
- blogの物語、engineering pageのstatus、operations receiptを別棚に置いた
- GUI表示、Body描画、Engine推論、Storage、人格同一性、public deployを別greenとして扱った
- third-party character／assetは参照例とし、同梱・公式提携へ変換しなかった

watch:

- localhostのHTTP成功をUserのpixel reviewへ昇格しない
- dev build成功をproduction deployへ昇格しない

## agreements／disagreements／unknown

agreements:

- 検査開始と起動成功を分離する
- 実機receipt前にStage 0を完了扱いしない
- Model Family固定前にAAE Bakeを実装済み扱いしない
- Neat Runnerは実測値を受ける後段へ置く
- Q Atlantisは`dev`だけでpreviewし、次のUser Gateまで`main`とproductionを変えない

disagreements:

- なし。三Positionの射程差は今回の公開projectionと概念矛盾を作っていない

[UNKNOWN]

- 実機buildと推論の結果
- 採用Model Family、tokenizer、quantization、Engine
- AAE Bake手法と必要火力
- `.astro`の暗号化、署名、鍵管理
- 永続人格schema
- Userのlocalhost pixel review

## OAE Temporal Integrity

`historical-oae-unavailable`

本記録は、観測時点のsourceとUser Gateから作った現在のInterpretation OAEである。
過去のcommit、Makina persona、旧serviceへ現在のObserver、Agency role、Intentを遡及生成しない。

## Last Order

1. local content、typecheck、build、SEO、redirect等を検証する
2. `dev`へcommit／pushする
3. localhost:3000を起動する
4. Userの目視結果を待つ
5. Userの別指示まで`main` mergeとdeployを行わない

## Source

- [ASTRO Runner再鍛造の現在地](../../engineering/q-atlantis/astro-development-status.md)
- [Manifestの横断マイルストーン](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/main/docs/projects/astro-aae-development-milestones.ja.md)
- [ManifestのMAGI監査receipt](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/main/foldlog/20260729-1339__ASTRO_AAE開発順序UserGate監査.ja.md)
- [SphereASTRO要求仕様](https://github.com/saitoomituru/SphereASTRO/blob/main/docs/specification/astro-runner-requirements.ja.md)
- [Sphere-aaeのAAE Bakeマイルストーン](https://github.com/saitoomituru/Sphere-aae/blob/main/docs/development/astro-aae-bake-milestone.ja.md)
- [Neat Runner Issue #9](https://github.com/saitoomituru/Sphere-aae/issues/9)
