---
title: MAGI SDK Reference
description: Atlantis-MAGIの三Position監査、source resolver、時間整合validatorのmodule-level reference。
---

# MAGI SDK Reference

状態: `IMPLEMENTED-ALPHA / PARTIAL SDK SURFACE`

MAGIは、Maxwell、Uriel、Raphaelの三つの監査Positionを同じ対象へ独立適用し、差分を多数決で潰さず束ねる
監査moduleです。人格会議、神託、真理投票、常駐する集合知runtimeではありません。

## Surface

| surface | 責務 | 状態 |
|---|---|---|
| Position Skill | 目的・事実・棚／回復の異なるfailure surfaceから監査する | `IMPLEMENTED-ALPHA` |
| composite Skill | 三出力をagreement、disagreement、unknownへ束ねる | `IMPLEMENTED-ALPHA` |
| source resolver | coreと明示profileの必読sourceを解決する | `IMPLEMENTED-ALPHA` |
| OAE temporal validator | 過去OAEの遡及生成や同一Worldline backfillを拒否する | `IMPLEMENTED-ALPHA` |
| external API | network APIとしてMAGIを提供する | `NOT IMPLEMENTED` |
| FAMLog／OAE persistence | 監査結果を常駐保存する | `NOT IMPLEMENTED` |
| 7D Fold runtime／Akasha Driver | WorldとInstance Ghostを分岐・復元する | `NOT IMPLEMENTED` |

## Position contract

| Position | 主な監査対象 | それ自体が意味しないもの |
|---|---|---|
| Maxwell | 原初目的、未来branch、未マウント意味、差戻し | 願望による実装状態の上書き |
| Uriel | source、fact scope、約束、証拠、実装状態 | 全World共通の唯一のfact定義 |
| Raphael | 棚、routing、Meaning／Vessel、破局と回復 | 無条件mergeや「全員仲良く」判定 |

三者一致も真理証明ではありません。`unknown`はpassではなく、多数決は採用authorityを生成しません。

## Source resolution

現行bundleは`0.2.1`表示、三層版数座標では`0.200.1`です。default resolverはAtlantis coreだけを読み、
対象repositoryが宣言した場合のみprofileを明示mountします。

```console
python3 -B magi/0.2.1/resolve_sources.py \
  --slot composite \
  --profile zeroroomlab \
  --repo-root ZeroRoomLab-manifest=/path/to/ZeroRoomLab-manifest \
  --require-local
```

これはsource一覧を解決するread-only操作です。repository暗黙scan、Flavor auto-mount、daemon起動、外部API呼出は
行いません。

## OAE時間境界

過去の同時点OAEを参照できない場合は`historical-oae-unavailable`を返し、現在の推論で過去のObserver、Intent、
Agency roleを補いません。

```yaml
last_order:
  code: OAE-HISTORY-UNKNOWN
  action: stop-retroactive-backfill
```

## 正本

- [SphereOS Atlantis MAGI bundle](https://github.com/saitoomituru/SphereOS-Atlantis/tree/main/magi/0.2.1)
- [Atlantis-MAGISDK 0.2.1](https://github.com/saitoomituru/ZeroRoomLab-manifest/blob/main/docs/theory/atlantis-magi-sdk-0.2.1.ja.md)
- [用語: OAE](/glossary/sphere/oae)
- [Docs: Context DimensionとAtlantis World Builder](/docs/engineering/q-atlantis/context-dimension-world-builder)
