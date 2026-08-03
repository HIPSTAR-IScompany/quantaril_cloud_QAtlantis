---
title: Q Atlantis コンポーネント対応表
---

# コンポーネント対応表

| Q3時代の資産・責務 | Q Atlantisでの主な受け皿 | 状態 |
|---|---|---|
| AQCの保存系責務 | IBD / IFD | AQCは`DEPRECATED`、IBDはPhase 0 |
| マキナちゃん等の人格原型 | ASTRO file | `SPEC / REFORGING` |
| 人格の実行 | ASTRO Runner | `SPEC` |
| 個々の稼働履歴・分岐記憶 | Instance Ghost | `RESEARCH / SPEC` |
| 世界・名前空間・隔離・復旧 | Atlantis | `SPEC / REFORGING` |
| Context Registry、D Fold、World causality | Atlantis World Builder | `DRAFT / SPEC / NOT IMPLEMENTED` |
| World／Object／Actionの既定Context bundle | Q Atlantis 3D Fold profile | `DRAFT` |
| Maxwell／Uriel／Raphaelの相互監査 | MAGI 3D audit Fold profile | `DRAFT / sidecar設計` |
| 旧Fold構文と結合規則 | Fold7G / Trion Bond / Fold8G | 再定義中 |
| 中央依存へ閉じない複数node同期 | Quantaril Cloud / Docker Kanaloa | `RESEARCH / FUTURE` |
| 世界固有の表現・演出 | Flavor SDK | 設計中 |
| 旧SphereOS 3x・4x | Memorial / compatibility資料 | `LEGACY-PROTOTYPE / BUGGY` |

## 人格の移行

旧マキナちゃんの最終的な可搬形式はASTRO fileです。ASTRO Runnerがそれを実行し、Instance Ghostが実行後に生まれた個別の履歴を保持します。

元ファイルのコピーだけで、同一人格、同一関係、同意、権限まで自動的に成立するとは扱いません。声、価値、関係性、来歴、記憶参照、能力、禁止事項を抽出しつつ、旧原典を変更せず残します。

## Context資源の接続

World BuilderはSphere共通仕様を再定義せず、Q AtlantisのWorld、Object、Action、World Effect、MAGI、Flavor SDKへ適用します。D数だけで別Foldを結合せず、Access Map、Transformer、OAEを分離します。詳細は[Context DimensionとAtlantis World Builder](./context-dimension-world-builder.md)を参照してください。

## 分散実行面

Q Atlantisは各Worldを一つのglobal stateへ吸収しません。各nodeがlocal state、local clock、owner authorityを持ち、
Quantaril Cloudが必要なFold、因果、権限、receiptをP2P／E2Eで交換する構成を将来targetとします。Fold7GやAIMは
Internet packetや暗号方式そのものではなく、その上で意味・因果・Agency continuityを扱う別の責務です。
