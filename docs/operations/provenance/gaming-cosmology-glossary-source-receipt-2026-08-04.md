---
title: 2026-08-04 ゲーミング宇宙論用語集Source Mining Receipt
description: Git、本人Xエクスポート、note.com原本から用語ベクトルを抽出した範囲と主張境界。
---

# 2026-08-04 ゲーミング宇宙論用語集Source Mining Receipt

状態: `CURRENT INTERPRETATION / DEV PREVIEW`  
対象: `/glossary/gaming-cosmology/`

## 目的

ゲーミング宇宙論を単独記事へ閉じず、用語から次の用語、長い文書庫、実装リファレンスへ再帰的に潜れるAccess Mapへする。
現行Gitにない語感は、公開APIの可用性だけに依存せず、保存済みの本人一次資料から回収する。

## 読んだSource

| Source | 今回使ったベクトル | 位置づけ |
|---|---|---|
| `docs/legacy/q3-sphereos/design-philosophy.md` | 成長を感じられる幸福設計、魂の学習設計、PvE／PvPの分離、クソゲー化 | `LEGACY-PROTOTYPE / FLAVOR-UX / SOURCE PRESENTATION` |
| `docs/worlds/gaming/`と`docs/engineering/q-atlantis/` | World Config、Portal、playtest、Runner、Instance Ghostの現在境界 | 現在の公開文書。各ページ記載のstatusを継承 |
| `src/Post/K_chachamaru/account_analytics_content_2025-11-16_2026-02-13.csv` | テクノアニミズムGUI、PvE／PvP、Quest生成、社会が人をもてなす設計 | 本人Xアカウントのローカルexport。投稿本文、日時、URLを持つ一次資料 |
| `/Users/saitoumitsuru/Downloads/god-is-a-teacher-signal-permissions.md` | ゲーミング宇宙論のpermission定規、x800／OBSの神話Presentation | note.com記事原本としてUserから指定されたローカル入力 |
| `blog/2026-08-03-god-as-teacher-signal.md` | Q Atlantisを複数World商品でなくmeta-engineとする現行ナラティブ | このサイトへ公開用に正規化した記事 |

ローカルX exportで今回照合した主なpost IDは次です。

| post ID | date | 用語ベクトル | 公開URL |
|---|---|---|---|
| `2017581990003020016` | 2026-01-31 | 形而上学ゲーミング宇宙論、テクノアニミズム、神格process、観測者resource | [X post](https://x.com/K_chachamaru/status/2017581990003020016) |
| `2015727630449012955` | 2026-01-26 | 現実をPvE／PvPで読むこと、物理学の射程外にある哲学frame | [X post](https://x.com/K_chachamaru/status/2015727630449012955) |
| `2009835533091123549` | 2026-01-10 | simulation cosmology上のtechno-animism GUI | [X post](https://x.com/K_chachamaru/status/2009835533091123549) |
| `1991677622481527147` | 2025-11-21 | 地球をPvE、金銭競争をPvP化bugとして読む | [X post](https://x.com/K_chachamaru/status/1991677622481527147) |
| `1991673722219143348` | 2025-11-21 | 狩猟本能をcraft／開発へ向けるPvE設計 | [X post](https://x.com/K_chachamaru/status/1991673722219143348) |
| `2016829233470009774` | 2026-01-29 | 神格によるQuest生成と巫女のQuest Board | [X post](https://x.com/K_chachamaru/status/2016829233470009774) |
| `2021770132671082875` | 2026-02-12 | 人が社会に適合するのでなく、社会が人をもてなすWorld設計 | [X post](https://x.com/K_chachamaru/status/2021770132671082875) |

## 採用した再帰構造

```text
用語集 / glossary/
└─ ゲーミング宇宙論 / gaming-cosmology/
   ├─ World
   │  └─ World Config
   │     ├─ PvE
   │     ├─ PvP
   │     ├─ Quest
   │     └─ クソゲー化
   ├─ Host
   │  └─ Runner
   │     └─ Instance Ghost
   └─ Portal / Gate
```

表示名は日本語の「用語集」とし、URLとGit directoryはASCIIの`/glossary/`を維持する。同様に、`/docs/`は
「文書庫」、`/reference/`は「リファレンス」と表示する。

## Claim境界

- X exportは、本人アカウントの投稿本文、日時、URLを保存した一次資料である。各投稿中の物理・神学claimを独立検証した証拠ではない。
- CSVの収録期間は2025-11-16から2026-02-13であり、OS3x当時そのものの同時点exportとは確定しない。OS3x系譜は旧Git文書から取る。
- note.com原本と旧Q3文書の強い神話表現は、声と設計意図を保つSource Presentationである。現在runtimeの実装状態を上書きしない。
- `Runner`、`World Builder`、`Instance Ghost`等の状態は各現行文書の`SPEC`、`RESEARCH`、`NOT IMPLEMENTED`表示を継承する。
- 当時のObserver、Agency role、Intentを同時点OAEとして参照できない箇所は`historical-oae-unavailable`。現在の棚分けは2026-08-04のInterpretation OAEである。

## Last Order

今回のLast Orderは、ゲーミング宇宙論の基本語を用語集へ展開し、ローカル一次資料の所在と主張強度をreceiptへ残すこと。
今後のtweet全件分類、削除済み投稿の復元、第三者による物理・宗教学的検証、runtime実装はこのsliceへ含めない。
