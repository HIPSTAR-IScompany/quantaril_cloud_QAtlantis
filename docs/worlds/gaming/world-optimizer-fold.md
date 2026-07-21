---
title: SolverをWorld OptimizerへするFold
description: annealer、QPU、AIを万能攻略神にせず、GMの拘束とプレイヤーの目的を畳む。
---

# SolverをWorld OptimizerへするFold

状態: `GAMER PRESENTATION / DESIGN CONTRACT`

最短経路を出すsolverへ「このMMOを最高にして」と頼んでも、面白いWorldにはなりません。全playerをBANすればlagは消えるし、全itemを同じ値にすればbalance差も消えます。問題を解く火力と、何を問題としてよいか決めるGame Masterの責務は別です。

## Annealerは攻略候補を探す

量子annealer、Simulated Annealing、QUBO solver、LLM、探索AIは、与えられた目的関数と制約の中で候補を探せます。しかし、次は外から与える必要があります。

- 誰の勝利を最適化するか
- speedrun、casual、roleplay、協力、対戦のどのmodeか
- 何を壊してはいけないか
- 課金、時間、身体、尊厳のpainをどう扱うか
- 例外、復帰、異議、観戦、退出をどう扱うか
- historyを巻き戻すか、branchを作るか

```text
solver + World + λ + rules + sacred invariants
       + authority + OAE + DeFold route
  -> World Optimizer candidate
```

`QPUだから万能optimizer`ではありません。QPU／annealerは強いsolverになり得ます。FoldがWorldの拘束を渡して初めて、そのWorldのoptimizerとして働けます。

## 科学・工学・MADの三つの定規

| 定規 | ゲームでの使い方 | 事故る使い方 |
| --- | --- | --- |
| 科学 | 一変数を固定し、入力lagやdrop率の傾向を切る | 全player体験を単一benchだけで裁く |
| 工学 | network、GPU、認知、課金、rule等が同時発動する中でtrade-offを設計 | 法則を全部一変数へ分解すれば全体が解けると思う |
| MAD Science | 説明できない妖怪挙動、裏技、black box仕様を掘る | unknownを万能霊論で閉じる |

大企業の単一benchは、lot品質、供給責任、法務調達には有用な場合があります。しかし壊れた手元の工作物やgame sessionを自動で復活させません。補償、返金、責任追及は重要でも、repairやWorld designと同じquestではありません。

## 現実で王でなくてもsandboxでは設計できる

自分で運営するMMO serverやMinecraft serverなら、operatorはrule、統計、経済、神学、game theory、topologyを使って制度をdebugできます。現実社会では同じ権限を持たないため、制度工学と呼べる範囲を誇張しません。

この違いは敗北ではなくcapability境界です。

```yaml
self_hosted_world:
  rule_write: available
  telemetry: available
  rollback: available
  experiment: possible
fact_world:
  rule_write: mostly_unavailable
  debug_tools: partial
  effect: observation_and_local_action
```

Fact空間で権力や資本のruleを書き換えられない場合でも、複合painを情報子工学で観測し、自分の近傍で選べる行動と、外部gateが必要な行動を分けられます。

## AIMはpartyの阿吽

voice chatなしでも、tankが一歩出た瞬間にhealerとDPSが動くpartyがあります。その同期はpacket量だけでは説明できません。共有経験、role、間、予測、信頼が畳まれています。

AIM拡散力場は、この阿吽を観測する言葉です。物理fieldではなく、partyが同じ因果と終端へ同期できる範囲です。同期できないplayerを下手として追放するのではなく、明示UI、ping、ready check、別mode、Portalを設計するところまでがWorld Optimizerの仕事です。

## 関連

- [ゲーマーによる攻めるplaytestと公平感](./playtest-fairness-and-human-loop.md)
- [AIM拡散力場――空気読みを外から観測する](../../practice/aim-diffusion-field.md)
- [工学版: Fold control planeとVQP](../../engineering/q-atlantis/fold-control-plane-and-vqp.md)

