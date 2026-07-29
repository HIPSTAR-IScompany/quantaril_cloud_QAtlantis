---
title: 虚空のインフェルニティ：一人スタジオ制作pipeline
description: 漫画家・監督・技術者が、既存toolを企画から頒布まで束ね、完成品を出した一人スタジオのsystem integration。
---

# 虚空のインフェルニティ：一人スタジオ制作pipeline

更新日: 2026-07-29

Status: `HISTORICAL STUDIO PIPELINE EVIDENCED / LEGACY RUNTIME REPRODUCTION NOT STARTED`

これは「古いBlender libraryが見つかった」という話だけではありません。

一人の漫画家／監督／技術者が、使えるgeneratorと制作toolを選び、背景を作り、絵を描き、
原稿へ仕上げ、冊子と作品にして頒布し、その環境を10年以上後の再鍛造へ残した話です。

## 最初に完成品を見る

[FACT]

2026年7月29日の外部照合では、駿河屋に
[第一巻・36ページ](https://www.suruga-ya.jp/product/detail/ZHORO37134)と
[第二巻・52ページ](https://www.suruga-ya.jp/product/detail/ZHORO35523)の商品記録が残り、
少なくとも2冊・88ページの印刷物が10年以上後の中古流通面にも到達していました。

この88ページは、いま公開検索から確認できた**非網羅的な下限**です。全作品総量でも、
SFW作品だけを数えるための上限でもありません。

[USER-DECLARED]

シリーズ全体では100ページを超える原稿を制作し、SFW／NSFW双方を、コミケ、ケモケ、
同人およびセミプロ以上の商流へ出しました。

公開検索に載りやすい作品だけを採用し、残りを制作史から消すことはしません。

## 一人でstudio分業を圧縮した

| 工程 | 一人スタジオで接続したもの |
|---|---|
| Pre-production | 世界、character、背景要件、asset選定、layout、scene計画 |
| Production | portable Blender、都市／樹木generator、model、camera、lighting、render |
| Post-production | 線画、PSD、ComicStudio／CLIP、page構成、完成原稿 |
| Publication | 冊子、Web／印刷出力、告知、event／同人商流 |
| Operations | 日付別backup、制作環境、原稿、出力、format／versionの保存 |

Hollywood、虫プロ、Production I.G等との提携や、同じ規模・固有手法を主張するものではありません。
企画、撮影／render、仕上げ、編集、頒布に分かれるstudio productionの仕事を、個人の制作環境へ
圧縮したという組織設計上の比較です。

## 第三者toolの功績とpipeline architectの功績は競合しない

Suicidator City Generator、Blended Cities、Tree-maker、Blender等には、それぞれの作者と
licenseがあります。優れたthird-party codeを、虚空の独自codeとは呼びません。

同時に、どのtoolを選ぶか、どう同居させるか、どのparameter、素材、scene、camera、
lightingを使うか、どうrenderして漫画原稿と頒布物へ運ぶかは、漫画家／監督／
system integratorの仕事です。

「componentを発明した人」と「studio pipelineを設計・運用して最終製品を出した人」を
一つの作者性へ潰さなければ、両方の功績を正しく評価できます。

## 海外で見えない作品を消さない

[USER-PUBLICATION-POLICY]

ケモショタ、非実在青少年性表現を含む法域センシティブな原稿や、海外platformへ出せない
作品も、無かったことにはしません。

日本でしか会えない原稿は、日本へ来て、秋葉原・池袋等の適法な国内取扱面、または作者が個別に
案内するprivate viewing gateで出会ってください。作者の自宅住所や非公開導線は掲載しません。

各作品の閲覧条件、年齢確認、rights、現行法への適合は、作品、媒体、時点、法域ごとの
個別Gateです。米国platformの可視性を、日本で作られた作品の存在判定には使いません。

## Atlantisで最終製品を作る人に効く理由

Atlantisのようなmiddlewareを使ってMMO、TRPG、metaverse、業務systemを作るとき、
個々のengineやlibraryが優秀なだけでは製品になりません。

```text
component
  -> production pipeline
  -> final product
  -> distribution / operation
  -> preservation / next forge
```

虚空のインフェルニティは、この鎖を同人規模の一人スタジオで実際に通したcaseです。
次のAstro、AAE、World Builderを評価するときも、「middlewareが動いた」だけで止めず、
誰が何を作れて、どう出荷・運用・保存できるかまで見るための実戦ログになります。

## 失われた環境と、残った作品

| Green | 現在地 |
|---|---|
| Historical final product | `EVIDENCED` |
| Studio production pipeline | `EVIDENCED IN READ-ONLY CORPUS` |
| Third-party component lineage | `SEPARATED` |
| Legacy Blender runtime reproduction | `NOT STARTED` |
| Modern re-forge | `HYPOTHESIS / NOT IMPLEMENTED` |
| Public asset bundle | `RIGHTS AND JURISDICTION GATE REQUIRED` |

古いruntimeを今日起動できないことは、当時の完成品を未完成へ戻しません。
復元失敗も隠さず、原本を壊さないworking copy、隔離環境、固定入力、実行receiptで
現代の制作pipelineへ再鍛造します。

技術系譜、権利境界、保存Gate、再鍛造Stageの正本は
[ZeroRoomLab Manifest：一人スタジオ制作pipeline・サルベージ](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/main/docs/projects/infernity-production-pipeline-salvage.ja.md)
に集約しています。
