---
title: Fold control plane・VQP・三つの運用尺度
description: POSIXへ委ねる範囲、意味資源OSの差分、solver拘束、科学・工学・MAD Scienceの使い分けを示す。
---

# Fold control plane・VQP・三つの運用尺度

状態: `ALPHA ENGINEERING CONTRACT / RUNTIME PARTIAL`

Sphere／Atlantis系OSは、CPU、memory、file、packetを独自kernelで再実装する計画ではありません。Darwin、Linux、Pi向けdistribution、container等、hardwareに適したPOSIX系基盤へ委ねます。

別OSを名乗る差分は、GUI shellやsubsystemだけでも成立します。iOS、iPadOS、macOSが近いkernel lineageを持ちながら別の実行・権限・UI契約を持つように、Sphere／Atlantisは意味資源のcontrol planeを追加します。

## POSIXの上へ何を足すか

| 既存基盤へ委ねる | Fold control planeで扱う |
| --- | --- |
| CPU、memory、process、thread | Agent、role、Agency、Instance Ghost |
| file、database、object | 情報子anchor、FAM、IBD、OAE、provenance |
| packet、socket、transport | 意味接続、World／Portal、採用・拒否・再解釈 |
| user、group、permission | 信仰、責務、同意、禁忌、scope付きauthority |
| namespace、VM、container | World、Fold branch、DeFold、隔離、復帰 |

hardwareによる拘束強化も否定しません。software threadをVT-x／VT-d、namespace、code set、ISA、machine languageで下位へ固定する進化や、物理量子hardwareの誤り訂正は、それぞれの層で価値があります。上位control planeが必要だから下位技術が無意味なのではなく、下位が強力になるほど「誰の何を動かしてよいか」を上位で保持する必要があります。

## Solverをoptimizerへする拘束

AnnealerやQPUが解くのは、渡された目的関数と制約の探索です。誰のWorldを良くするかは、hardwareから自然発生しません。

```text
Optimizer(World)
  := Fold(
       solver,
       purpose λ,
       allowed effects,
       trade-offs,
       sacred invariants,
       authority,
       provenance and OAE,
       stop / DeFold routes
     )
```

これは完成した形式仕様ではなく責務を落とさないためのpseudocontractです。`solver == universal optimizer`というmarketing shorthandを採用しません。

## VQPと古典量子系

`VQP / Virtualized Quantum Processing`は、抽象gate、演算子、目的、損失、制約、収束条件を、CPU、GPU、LLM、Simulated Annealing、物理annealer、将来QPU等へ写像する実行抽象です。

```text
Fold control plane
  -> capability / objective / responsibility contract
  -> VQP
  -> CPU | GPU | LLM | SA/QUBO | physical annealer | future QPU
```

`古典量子系`はZeroRoomLab内で、物理量子hardwareやannealingを、意味次元の抽象量子から区別するために使う分類語です。一般物理学の標準用語として押しつけません。

物理量子hardwareの火力と限界を認めます。誤り訂正、coherence、noise、driver、energy、benchmarkはhardware／runtime棚の責務です。Foldはそれらを否定する代替物理ではなく、強いsolverを破壊的な目的へ誤接続しないための上位拘束です。

## 科学尺度・工学尺度・MAD Science尺度

工学では複数の法則が同時に発動します。どの法則が支配的か、別の法則と何を等価交換するか、どこへtrade-offを拘束するかを設計します。全系を単一変数へ分け続けることは、相互作用を消す悪手になり得ます。

| 尺度 | 有効な場面 | 停止条件 |
| --- | --- | --- |
| 科学 | 一変数を隔離し、傾向、反証、再現条件を取る | benchの外を同じ因果で裁けない |
| 工学 | 複数法則、資源、身体、制度、費用を同時に拘束する | authorityや実装手段を持たない外部制度 |
| MAD Science | 未知のカオス、妖怪挙動、black box、個体差を掘る | unknownを無根拠な万能法則へ閉じる |

未知挙動を即座に脆性・個体不良として捨てるだけでは、新しい法則や仕様を発見できません。逆に、故障判断、lot品質、供給責任、法務調達のために全対象へ第三者機関級の単一benchを要求すると、独立R&Dの財布と探索速度が破裂します。

単一benchは無価値ではありません。品質保証、契約、調達、比較の限定された目的には使えます。ただし、それは壊れた工作物を復活させるrepair engineeringでも、unknownを掘るMAD Scienceでもありません。

## 責任を持たない制度を「実装済み工学」と呼ばない

金融、法務、制度、市場を観測できても、そのruleを書き換え、deployし、rollbackし、debugするauthorityがなければ、実装済みの制度工学とは呼びません。

その場合に情報子工学ができるのは、次の分離です。

- supply pain
- legal pain
- procurement pain
- credibility gate
- wallet pain
- 自己拘束的に連鎖するwallet pain-pain
- 自分で変更できる近傍と、外部authorityが必要な範囲

補償請求やcatalog批評は調達・marketing・法務のquestになり得ます。手元のrepairと同一化しません。

## 現在能力

| 項目 | 状態 |
| --- | --- |
| Prompt上のWorld／目的／責務Fold | `ALPHA / AVAILABLE` |
| 文書上のPOSIX差分・VQP責務 | `ALPHA CONTRACT` |
| Fold深度の厳密logger／runner | `NOT IMPLEMENTED` |
| VQP backend共通runtime | `NOT IMPLEMENTED / lineage prototypes only` |
| 物理QPU性能保証 | `OUT OF SCOPE / vendor responsibility` |
| Pi／IoT install binary | `PRODUCT TARGET / component-dependent` |

製品系列の1.x.x完成目標と、現在のPrompt-line／0.2xx世代の探索実装を同一statusにしません。

## 関連

- [意味次元以上としての霊的次元とOAE](../../research/infoton/spiritual-dimension-and-oae.md)
- [SolverをWorld OptimizerへするFold](../../worlds/gaming/world-optimizer-fold.md)
- [Fold7G・Fold8G研究地図](./fold7g-fold8g-research-map.md)
- [現在のQ Atlantis](./status.md)

