---
title: 文書サイト日英展開と時系列整理（2026-10-19）
description: Manifestから4文書siteへ編集した日英解説、出典固定、旧Q原典保持、未解決事項の所在。
canonical_language: ja-JP
translation_status: canonical-editorial-projection
---

# 文書サイト日英展開と時系列整理

更新日: 2026-10-19  
著者: 齋藤みつるSaitooMituru-Fusamofu-ふさもふ  
[en-US参照写本](./publication-2026-10-19.en-US.md)

日本語が正本です。en-USは日本語の意図・責務・事実強度を運ぶ参照写本です。定義、解釈、責務が競合する場合は日本語を照合し、英語だけから正本を逆翻訳・縮約・一般化しません。技術識別子と原語は必要に応じて英語を保持します。Meaning Kernelは日本語を保持し、英語解説を実行契約として再登録しません。

## 今回読めるようにした範囲

Manifestの原典を残し、読者向けに29組・58ページを編集しました。文書の所在はmain、公開domainへのdeployとDOIは別工程です。

| 文書site | 日英組数 | 入口 | 本文commit | 日英build |
| --- | ---: | --- | --- | --- |
| [Fold](https://github.com/HIPSTAR-IScompany/fold/tree/main/docs) | 10 | [日本語](https://github.com/HIPSTAR-IScompany/fold/blob/main/README.md) / [en-US](https://github.com/HIPSTAR-IScompany/fold/blob/main/README.en-US.md) | [021aa5d](https://github.com/HIPSTAR-IScompany/fold/commit/021aa5dd4e0b59f1b0cb1bf168fe69ca3663d455) | [成功](https://github.com/HIPSTAR-IScompany/fold/actions/runs/39249966918) |
| [SphereOS](https://github.com/HIPSTAR-IScompany/sphereos/tree/main/docs) | 7 | [日本語](https://github.com/HIPSTAR-IScompany/sphereos/blob/main/README.md) / [en-US](https://github.com/HIPSTAR-IScompany/sphereos/blob/main/README.en-US.md) | [065020b](https://github.com/HIPSTAR-IScompany/sphereos/commit/065020ba369675caf5a120e7cc236e7a3af6b2d4) | [成功](https://github.com/HIPSTAR-IScompany/sphereos/actions/runs/39250017437) |
| [Quantaril](https://github.com/HIPSTAR-IScompany/quantaril/tree/main/docs) | 6 | [日本語](https://github.com/HIPSTAR-IScompany/quantaril/blob/main/README.md) / [en-US](https://github.com/HIPSTAR-IScompany/quantaril/blob/main/README.en-US.md) | [492aa63](https://github.com/HIPSTAR-IScompany/quantaril/commit/492aa63602540f6e197924aeedbcdf11e56a945e) | [成功](https://github.com/HIPSTAR-IScompany/quantaril/actions/runs/39250025316) |
| [World](https://github.com/HIPSTAR-IScompany/i-s-world/tree/main/docs) | 6 | [日本語](https://github.com/HIPSTAR-IScompany/i-s-world/blob/main/README.md) / [en-US](https://github.com/HIPSTAR-IScompany/i-s-world/blob/main/README.en-US.md) | [fb7835f](https://github.com/HIPSTAR-IScompany/i-s-world/commit/fb7835fbb8b12ac615fbed069789b77a03ccabf8) | [成功](https://github.com/HIPSTAR-IScompany/i-s-world/actions/runs/39250033746) |

- Fold: 情報子工学、候補の束と動的グラフの対応、ABC証拠射程とOAE、FAM参照境界、protocol正本への導線。
- SphereOS: SDKと開発制御面、公開mainとfutureの区別、版番号・旧世代資料・実装正本への導線。
- Quantaril: P2P／Distributed World Fabricの構想、旧AQC系譜、統合と役割境界。
- World: 哲学、神話、信仰、World設計、実践の位置付け。自然科学の確定事項や診療上の判定に読み替えません。

各siteの`sources/publication-batch-2026-10-19.json`は日英path、原典path、exact SHA、license欄、modeを記録します。原典の丸ごと移動・history-preserving extraction・全asset移植はまだ行っていません。旧Qの`TRANSFERRED`は当時の転送を表し、今回の4site公開完了を意味しません。

## 日付順に照合した決定

| 日付 | 根拠 | 現在の扱い |
| --- | --- | --- |
| 2026-07-13〜20 | v1台帳・旧転送票 | 旧Q内の整理履歴として保持。v2の4site移植と別世代 |
| 2026-07-29 | DOS初回ブート稿 | 当時のdev preview条件と観測記録。後日のmain反映許可へ遡及しない |
| 2026-08-31 | [#20最終回答](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/20#issuecomment-5479450957) | SphereOS公開先は`sphere.i-s.dev`。top将来slugは`infinite-synthesis` |
| 2026-08-31 | #21〜31段階計画 | empty-site deployを旧content切替の条件にした計画として保持 |
| 2026-10-19 | Userの今回の作業指示 | 文書編集・main反映・buildは先行。DNS／TLS／既存サイト退避／Patron判断は継続して独立 |

top renameは4site公開確認後です。slugは既決であり、再確認待ちへ戻しません。旧計画の依存関係から、現在許可された原典保持型の文書編集まで停止させません。

## 全path inventoryと未判定

基準: [Q main 39a67f2](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/tree/39a67f2ed68c3cf826493c7f97462c1552c943dc) の全314 tracked file。公開content、asset、sources、route／sidebar、support fileを一件ずつ`migration/content-ledger-v2.json`へ登録しました。224件は理由付き保存、90件は要判断です。`candidate_repository`は移動確定先ではありません。

全本文・参照元・第三者権利の精査は完了していません。licenseの`UNKNOWN`とasset参照の`NOT_SCANNED`を残し、inventory検査の成功を配布可能判定へ昇格しません。通常CIはcoverage・原典の存在・source pinと日英batch構造を検査します。`--publish`は未判定があれば失敗します。

旧URLは変更せず、redirect／retire／source削除も行いません。後続のhistory extraction、asset参照scan、URL対照、全権利reviewは[#25](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/25)とsite別[#26〜29](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/26)へ集約します。

## branchと内容競合

- 4siteの既存dev枝はmainに対する独自commitなし。新規branchは作りません。
- Atlantis `docs/agent-issue-pli-hook-20261018`のAGENTS／CONTRIBUTINGはmainと全文一致しました。同じ文を重複適用しません。
- Atlantis `dev/m6xx.1-reincarnation-sdk`はUser指定で除外・保持します。
- Qのdevにだけある画像`45F9A112-F9F0-4B49-8446-6926FF6D9BC1.jpeg`は、用途と権利が未確認です。[#25](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/25)で判断し、binaryを自動mergeしません。
- 情報子・物理学の語彙、動的グラフとの対応、旧Q3定義と現行参照境界の差は、年代とclaim scopeを付して併存させます。外部学術分野との同一性、数学的な一般定理、自然科学的な立証は自動確定しません。[Manifest #42](https://github.com/saitoomituru/ZeroRoomLab-manifest/issues/42)で継続します。

## 検証と次の工程

4siteの本文commitではnpm ci、typecheck、日英Docusaurus build、source pair、domain、SEO検査が成功しました。固定toolchain・日英SEO追加検査・receipt同梱のCIは別commitで追跡します。本作業ではMAGI原典を手動照合し、Python resolverやlocal shellは実行していません。過去の同時点OAEは`historical-oae-unavailable`のまま保持します。

build完了はDNS／vhost／TLSや公開receiptの観測ではありません。productionは[#23](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/23)、環境とWordPress／WooCommerce退避は[#24](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/24)、Patron先は[#29](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/29)の未解決条件を保持します。Zenodo連携ONだけではDOI発行ではなく、公開対象・metadata・releaseの確認を別途行います。
