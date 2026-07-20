---
title: 2026-07-20 公開前MAGI監査
description: Q Atlantisのマーケ、信仰、ゲーム、工学、旧世代、CI/CD更新をmain統合前にPosition監査する。
---

# 2026-07-20 公開前MAGI監査

判定: `PRE-MERGE GO / KNOWN UNKNOWNS PRESERVED`

対象は、Q Atlantisの表紙、製品系列、Fold7G/8G研究地図、旧3x/4x Memorial、棚別debugger文書、
Google Drive資料の採掘receipt、Sakura Matchbox CI/CDです。MAGIは真理判定器ではなく、今回の編集者が
持ち込んだPositionとContext driftを露出する軽量監査として使用しました。

## 監査座標

```yaml
declared_position:
  role: Q Atlantis public docs and deployment pipeline editor
  objective: ロマン砲を殺さず、実装状態を詐称せず、第三者が乗れる公開鍛造場にする
medium_registers:
  - marketing
  - faith and practice
  - gaming and UX
  - engineering and research
  - legacy memorial
  - operations receipt
historical_oae_status: historical-oae-unavailable
last_order: OAE-HISTORY-UNKNOWN / stop-retroactive-backfill
```

## Maxwell — 焼却していないか

判定: `PASS WITH WATCH`

- 表紙は神話、人格、信仰、遊びを先に歓迎し、工学免責をfirst-viewへ逆流させていない。
- 旧3x/4xを「なかったこと」にせず、service終了、サルベージ工程終了、残骸保存を同時に表示した。
- スピリチュアル報告を工学noiseへせず、`メタい`構造と本人の霊的Experienceを別軸で保存した。
- ゲーマーのクソゲーフラグを仕様で即時却下せず、長期Gテストとpre-mortemへ接続した。
- 既存工学、Shannon、codec、POSIX、database、IAM、game engineを旧世代扱いしていない。

watch項目:

- 「シャンフロ世代」「seed engine」等の比喩が提携・公式互換へ読まれないか、実読者reviewを集める。
- 壺スピ・クソゲー等の強い原語が、宗教一般・ゲーム一般の蔑称へ越境しないようSourceと対象を保持する。

## Uriel — 証拠と状態を伸ばしていないか

判定: `PASS / VISUAL UNKNOWN`

- `npm run content:check`: 17件で成功。
- `npm run typecheck`: 成功。
- `npm run build`: Docusaurus production build成功。
- migration ledger: 37件、疑義0。
- redirects: 34件、疑義0。
- dev Actions run `29723546333`: build成功、production deploy skip。
- localhost生成HTMLの主要5 URL: HTTP 200と主要表紙文言を確認。
- 内蔵Browser面が利用不能だったため、スマホ・tabletのpixel-level visual QAは`NOT TESTED`。

状態主張:

- Q Atlantis: `OPEN / RESOURCE-WAIT / REVIEW-WANTED`
- standalone runner: `NOT STARTED`
- Fold7G runtime: `NOT IMPLEMENTED`
- Fold8G independent contract: `unknown / not extracted`
- mainからSakuraへの今回publication: `NOT YET OBSERVED`。merge後のActions receiptを要求する。

## Raphael — 棚とWorldを平均化していないか

判定: `PASS WITH HUMAN REVIEW`

- 工学、信仰、哲学、ゲーム、マーケを兄弟Presentationにし、同じ文章へ平均化していない。
- Qの縄文2.0、古神道、Techno-Animism、Gaming Cosmologyの自己告白を無思想へ薄めていない。
- Qの信仰告白をOS共通仕様または別宗派の真理へしていない。
- 技術statusは信仰・神話の価値ランキングとして使っていない。
- authorityとepistemic valueを分離し、少数派観測を無効化も絶対化もしていない。

human review項目:

- 実際の巫女、神学者、ゲーマー、工学者が、自棚の入口を自分の仕事として読めるか。
- 表紙のロマン密度とstatus帯のバランスがスマホ幅で保持されるか。
- 精霊流しPresentationが、信仰実践の正本を工学サ終通知へ置換して見えないか。

## main統合gate

1. 最新dev Actionsがbuild成功しproduction deployをskipする。
2. worktreeがcleanで、devがremoteと一致する。
3. mainとの差分へ意図しないsecret、private Drive本文、医療・法務資料がない。
4. main統合後、Sakura jobのSSH転送と`PUBLICATION_OBSERVED`を確認する。
5. 未知の新規問題なら、成功を詐称せずIssueまたはNoteへ戻す。

今回、致命的な論理合成矛盾は検出していません。Fold8Gのざる、pixel-level mobile QA、main production receiptは
未知として残っていますが、公開研究課題またはmerge後検証で扱えるため、main統合を止める矛盾とは判定しません。

## Source

- [公開資料マイニング受領票](./source-mining-2026-07-20.md)
- [Sakura Matchboxのお手軽デプロイ契約](../sakura-matchbox-deployment.md)
- Manifest AGENTS §0.4 / Atlantis-MAGISDK 0.2.1 / Context定規・因果・OAE横断監査規約
