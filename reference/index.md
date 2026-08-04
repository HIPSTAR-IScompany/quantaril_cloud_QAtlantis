---
title: Product / Module Reference
description: Q Atlantis familyの製品、module、SDK、schema、version、実装状態を確認する入口。
slug: /
---

# Product / Module Reference

ここは、Q Atlantis familyを**実装する人の棚**です。

製品名やmodule名から、責務、interface、現在の実装状態、正本、依存先、非対象へ到達できます。思想や設計理由を
読み解く本文は[/docs/](/docs/intro)、単語の意味だけを調べる場合は[Glossary](/glossary/)へ分けます。

## 三棚の契約

| 棚 | 読者の動詞 | 主に置くもの |
|---|---|---|
| `/docs/` | 読む・考える・試す | 哲学、信仰、実践、研究、設計判断、実験、事故記録 |
| `/reference/` | 製品・moduleを実装する | interface、schema、version、status、依存、停止条件、正本 |
| `/glossary/` | 言葉を解決する | 短い定義、非定義、所属family、参照先 |

この分離は、工学を上位へ置く格付けではありません。長い思想文からAPI情報を探す負荷と、短い用語説明へ
実装済みclaimが混ざる事故を減らすためのAccess Mapです。

## 現在の実装入口

| family | 入口 | この棚で扱う範囲 |
|---|---|---|
| Sphere | [Sphere family](./sphere/index.md) | SphereOS Atlantis、MAGI、IBD等の責務と実装境界 |
| FAM | [FAM](./fam/index.md) | FAMの仕様系譜、入出力、Last Order、実装状態 |
| x800 | [x800 土偶family](./x800/index.md) | OND800、SAO800、FAN800等、八百万へ増殖できる土偶製品family |

## 状態の読み方

- `VERIFIED-CODE`: 指定したcode、入力、出力、試験境界を確認できる。
- `IMPLEMENTED-ALPHA`: alpha実装が存在するが、安定版や全機能完成を意味しない。
- `SPEC`: 責務またはinterfaceを定義している。runtime実装の証明ではない。
- `RESEARCH`: 仮説、比較、実験設計の段階。
- `LEGACY-PROTOTYPE`: 過去の試作・運用系譜。現在の安定稼働を意味しない。
- `NOT IMPLEMENTED`: 文書や構想はあるが、対象runtimeは未実装。
- `UNKNOWN`: 現在の参照範囲では確定しない。

各referenceは、Q Atlantisでの公開案内と、component実装正本を分けます。このサイトに説明があることだけを理由に、
別repositoryの実装状態やreleaseを上書きしません。
