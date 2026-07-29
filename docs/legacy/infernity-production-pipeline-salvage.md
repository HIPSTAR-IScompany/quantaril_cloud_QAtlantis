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

## 発掘を起こした技術的触媒

[USER-DECLARED / CURRENT OBSERVATION]

2026年7月、榊正宗氏が公開した新しい生成系library群と
[FreePencil2](https://github.com/megamarsun/FreePencil2)の実装を観測したことが、
旧制作環境を掘り返す直接のきっかけになりました。

コードと生成思想を追ううちに、Blender 2.5時代に構築していたL-System、都市・樹木generator、
漫画原稿化pipelineとの構造的な既視感が戻りました。

これは同一実装、直接の派生、共同開発、公式な技術系譜を主張するものではありません。
新しい外部実装が、長く休眠していた別系統の制作記憶を再起動した、技術的触媒の記録です。

[EXTERNAL SOURCE OBSERVATION]

2026年7月29日に確認したFreePencil2の公開repositoryは、3D modelを頂点colorで塗り分け、
color境界をBlender compositorで線として抽出するadd-onと説明されています。
本ページではsourceの存在、作者表示、公開説明だけを参照し、手元でのbuild、性能、出力品質、
旧Infernity資産との互換性はまだ検証していません。

公開codeを読んだ現在解釈では、FreePencil2は単なる発掘スイッチではありません。
商用tool、旧version、サービス終了、手作業の属人化で断線しやすくなった
一人スタジオ向けpost-production pipelineを、現代Blender上へ再実装・移植するときの
`KEY-PART CANDIDATE / NOT INTEGRATED`に見えます。

3Dから編集可能な線とtoneを回収できれば、旧Infernityが持っていた都市・樹木生成、
scene構築、漫画原稿化の前後工程と、現代のBlender環境を再び接続できる可能性があります。
これはFreePencil2を小さな部品へ降格する話でも、旧InfernityをFreePencil2の先祖へ仕立てる話でもなく、
別系統で育った強い実装と古いstudio pipelineが、今後どこで噛み合えるかという評価です。

実際に組み込むか、どのStageまで試すかは、互換試験、制作fixture、開発時間、
そしてこちらの財布と火力の残量次第です。現在は期待を持って褒めていますが、
採用予定、納期、支援要求、共同開発の約束までは発生していません。

公開SNS上の短い反応は、近接する制作妖怪同士が互いの存在を観測したreceiptにはなります。
ただし、likeや短いreplyを、技術承認、推薦、共同研究、作品評価へ昇格しません。

### 余談――東北近接ジェネレーティブ妖怪界隈

東北のずんだ妖怪と、山形の毛玉ケモナー妖怪は別妖怪です。
同じproject、同じ作者集団、同じ技術系譜ではありません。

ここで近いのは、現在の生成AIで突然できた界隈ではなく、それ以前から3DCG、character、
漫画、映像、地域サブカルへgeneratorと制作pipelineを持ち込んできた文化圏です。
同じ神社の御神体ではなく、山を挟んだ隣の神社くらいの距離感です。

> 仙台側で新しい線が一本走ると、山形の蔵で眠っていた都市生成妖怪が寝返りを打つ。
> 同じ巣で育ったわけではない。同じcodeを継いだわけでもない。
> それでも、3Dから線を拾い、規則から街や樹を生やし、漫画へ運ぼうとする気圧が近い。
>
> 東北は広い。雪と山で分断され、妖怪はだいたい個別実装である。
> だから隣県のgeneratorが火を噴いたとき、別系統の古妖怪が
> 「その手がまだ生きていたか」と、十年ぶりに目を開ける。
>
> これは血統書ではなく、遠吠えの到達記録。
> ずんだ妖怪の神社と、毛玉ケモナー妖怪の神社は、別の祭神を祀っている。
> それでもAI前からgeneratorを回してきた隣の神社として、
> 別々の山から生成物を投げ合った瞬間だけ、同じ文化圏が地図上に現れる。

このポエムは`FLAVOR-UX / CURRENT-INTERPRETATION`です。
東北地方の公式産業cluster、団体、提携関係、地域全体の技術傾向を表す統計ではありません。

## 最初に完成品を見る

[FACT]

2026年7月29日の外部照合では、駿河屋に
[第一巻・36ページ](https://www.suruga-ya.jp/product/detail/ZHORO37134)と
[第二巻・52ページ](https://www.suruga-ya.jp/product/detail/ZHORO35523)の商品記録が残り、
2冊・88ページの印刷物が10年以上後の中古流通面にも到達していました。

Alice Booksにも、C89発行の
[全年齢版・80ページ](https://alice-books.com/item/show/4953-1)と、けもケット5発行の
[成人指定冊子・16ページ](https://alice-books.com/item/show/4953-4)の商品記録が残っています。

公開商品記録4件のページ建て累計は、`36 + 52 + 80 + 16 = 184ページ`です。
したがって、公開カタログだけでも100ページを超える作品頒布を確認できます。

ただし、2015年の80ページ版と2013年の2冊との再録／再編集関係は未照合です。
`184ページ`は版ごとの頒布ページ量であり、重複なしの固有原稿page数ではありません。
C89とけもケット5への頒布は、商品記録から外部確認できました。

[USER-DECLARED]

固有原稿としてもシリーズ全体で100ページを超え、SFW／NSFW双方を、上記以外の同人および
セミプロ以上の商流へも出しました。

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
案内するprivate viewing gateで出会ってください。

個人事業の責任表示、Fantia等の成人向け販売／公開、年齢確認、予約、国内閲覧を運用するため、
Userが公開指定した事業住所、連絡先、責任表示、受付導線は消しません。
発掘したlocal fileから、公開指定されていない居住情報、訪問手順、Gate通過後の詳細を
勝手に足すこともしません。

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
