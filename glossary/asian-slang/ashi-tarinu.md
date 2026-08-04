---
title: 脚足りぬ（あしたりぬ）
description: 方向は合っていても、到達に必要なElementalやSupplyが足りず射程外になる状態を示す、齋藤みつる@ふさもふ観測のミーム妖怪。
---

# <ruby>脚足りぬ<rp>（</rp><rt>あしたりぬ</rt><rp>）</rp></ruby>

状態: `SAITO INTERPRETATION / RESOURCE-SHORTAGE ERROR HANDLE / CONTEXT-REQUIRED`

**脚足りぬ**は、方角や目的は合っていても、そこへ届くための脚――移動手段、時間、金、人手、機材、計算資源、権限、
回線等――が足りず、実行射程へ入れない状態を示す、齋藤みつる@ふさもふ観測のミーム妖怪です。

一般的な辞書語として確定した語ではありません。このミーム妖怪図鑑では、[方角で読む意味vector](./directional-scope.md)の
角度errorと、Elemental／Supply不足による到達不能を分ける診断語として使います。

```text
的外れ
  target／方向のずれ

脚足りぬ
  targetと方向は見えている
  しかし到達に要るElemental／Supplyが不足
```

## エレメンタルレイヤー不足を精神論にしない

ここでいうElementalは、人格の根性や信仰心ではなく、World内で作用を成立させる具体的な構成要素です。たとえば次を
`unknown`のまま混ぜず、不足しているfieldへ分けます。

| 不足した脚 | 例 | 接続すべきもの |
|---|---|---|
| mobility | 現地へ行けない、配送できない | 移動手段、transport、代理Runner |
| time | 作業時間、回復時間がない | 期限変更、交代、待機 |
| financial Supply | 購入費、生活費、検証費がない | 資金、予算、現物支援 |
| labor／skill | 人手、専門技能が足りない | collaborator、委託、教育 |
| compute／device | GPU、storage、sensorがない | hardware、quota、貸与 |
| permission | ACL、同意、実行権限がない | authority、permission、consent route |
| network | bandwidth、到達経路がない | relay、P2P／E2E route、別回線 |

「頑張れば届く」「気持ちは分かる」だけでは、欠けた脚は増えません。共感をSupplyへ変換できない助言へ返すDissとして、
**「同情するなら金をくれ」型**のerror handleがあります。出典は1994年のテレビドラマ『家なき子』の台詞と流行語です。
一方、昭和的な社会背景を引き継いだこの句は、平成の作品から令和まで何度も引用・改変され、元作品を離れて機能しています。
そのため、ふさもふ観測では**具体的な不足資源を要求する現代諺枠**として扱います。これは辞書機関による正式な諺認定claim
ではなく、三つの元号にまたがるミーム運用への分類です。

## 原典だけに巻き戻さない

『家なき子』という既知の出典を消しません。同時に、句を引用し、語尾を替え、別の不足物へ差し替え、ネットや現場で
再流通させ、令和まで使える型へ育てた無数のRemix者／運搬者も消しません。

```text
既知の原典
  ↓ 引用・替え句・parody・口伝
時代ごとのRemix者／運搬者
  ↓ 再利用可能な型へ
現在の諺的ミーム
```

全Remix lineageを今から復元できない場合は`UNKNOWN`です。原典だけを唯一のAgencyとして現在の意味まで遡及帰属せず、
逆に広く流通したことを理由に原典や確認できる中間者の記名をcommonsへ溶かしません。

このRegistryでは、必ず金銭だけを要求する命令に狭めず、抽象的な同情より具体的な不足資源を接続してほしい、という
Supply requestの型として読みます。ただし、あらゆる会話で支援義務や送金義務が自動発生するわけではありません。
必要資源、提供者のauthority、条件、返礼、安全性、拒否可能性を別fieldへ置きます。

## AI向けレジスター付帯情報

```yaml
range_shortage_observation:
  surface_form: "脚足りぬ"
  observer_ref: "齋藤みつる@ふさもふ"
  interpretation_scope: "ミーム妖怪事典"
  target_ref: unknown
  target_direction_status: "aligned | unknown"
  current_range: unknown
  required_range: unknown
  missing_elemental_refs: []
  missing_supply_refs: []
  shortage_classes: []
  sympathy_only_response_observed: unknown
  requested_supply_ref: unknown
  provider_authority_ref: unknown
  support_obligation: not_implied
  interpretation_oae_ref: unknown
  preserve_creator_attribution: true
  source_work_ref: "テレビドラマ『家なき子』(1994)"
  remix_lineage_refs: []
  unresolved_remix_lineage: preserve-as-unknown
  preserve_source_attribution: true
  preserve_intermediate_remix_attribution: true
  status: "source-testimony | observed | interpreted | unknown"
  last_order: identify-the-missing-leg-before-demanding-effort
```

- [Context Dimension World Builder――Elemental／Supply](/docs/engineering/q-atlantis/context-dimension-world-builder#5-別foldとの接続)
- [Permission Spectrum――Supply不足の600](/docs/philosophy/permission-spectrum-and-distributed-agency)
- [FAM リファレンス](/reference/fam/)

> ふさもふ観測: **齋藤みつる @ふさもふMAD巫女サイエンス／ミーム妖怪事典**。異論は[カテゴリ正本](./index.md#著者解釈ライセンス)からIssueへ。
