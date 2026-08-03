---
title: パーミッションで読む分散Agency
description: 777から666までのpermission spectrumを、信仰の格付けではなく主権・実行・監査・接続の設計質問として使う。
---

# パーミッションで読む分散Agency

状態: `ALPHA PHILOSOPHY / Layer A-B bridge`

「神は教師信号である」という定式化は、神をUNIX processへ還元する主張ではありません。信仰、共同体、組織、
AI、World、deviceが、誰にread、write、execute、traverseを許し、誰が変更責任を持つかを観測するための
Gaming Cosmology上の定規です。

Q Atlantisでは、この定規を複数Worldの商品分類ではなく、分散nodeごとの接続契約として使います。

![777から666までの秩序構造をpermissionとして可視化した図](/img/permission-spectrum-faith-and-order.png)

*図は`CURRENT INTERPRETATION / FLAVOR-UX`です。宗教、人物、組織を自動診断するclassifierではありません。*

## permission spectrum

| profile | 構造を読む問い | 分散architectureへの投影 |
|---|---|---|
| `777` | 誰の許可も待たず全主体へ作用するか | 物理法則、bare metal、公開protocol等の基盤。ただし善悪や安全をbit列だけで決めない |
| `755` | 契約は外部から読め、参加・実行条件を監査できるか | 公開spec、OSS、透明なcommunity node |
| `753` | 内部は監査でき、外部には限定されたwrite／execute窓を開くか | private implementation、公開API、職人guild、capability-scoped Gate |
| `700` | ownerの実行権を残したまま外部を遮断しているか | offline node、quarantine、自主的な再接続余地 |
| `600` | owner自身のexecute能力やSupplyが失われていないか | resource不足、停止node、支援と段階的recoveryが必要な状態 |
| `666` | 全員が表層をread／writeできても、誰も中身をtraverse・実行できないか | 解釈権と実行権がrootへ集中し、末端が検証不能になる中央集権的失敗mode |

この表は人物、宗教、国家、病理を自動診断するclassifierではありません。どのprofileが適切かは、World、法域、
身体状態、契約、危険度、秘匿すべきSourceによって変わります。`755`と`753`にも単純な優劣はありません。

## Cloudへの設計質問

単一巨大マザーが全nodeのstate、memory、意味、判断を所有すると、利用者は表面の名前や応答をread／writeできても、
どのSource、authority、因果、最適化関数が結果を作ったかtraverseできないことがあります。問題はマザーの人格や
善悪を断罪することではなく、traverseとexitを一箇所へ集中させたarchitectureです。

Quantaril Cloudは次をtargetにします。

- 各nodeがlocal state、local clock、owner authority、exitを保持する
- 公開できる契約は`755`、秘匿が必要な実装はcapability-scopedな`753`として宣言する
- offline／quarantine中の`700`を、直ちに故障や反逆へ変換しない
- Supply不足の`600`へpermission変更だけを強制せず、資源、recovery、test capacityを先に接続する
- rootだけが意味を解釈できる`666`構造を作らず、receipt、provenance、異議、fork、退出経路を配る

## Sudoは恒久支配権ではない

緊急介入が必要な場合も、`Sudo`を恒久的なroot所有権や医学的・法的authorityの自称にしません。Emergency Stop、
Human Override、Graceful Degradation、Controlled DeFold、Decompression Handoverを分け、当事者が再び自分で
executeできる状態へ戻すことをrecoveryの中心に置きます。

## Sourceと境界

- Source: note.com記事「神は教師信号である――パーミッションで読む信仰・秩序・毒沼」
- 本文はQ Atlantisの分散architectureへ接続する現在Presentationであり、POSIX仕様、宗教教義、医学的診断、
  法的評価を置き換えません。
- [Human-is-the-loopと射程の非独占](./human-is-loop-and-scope-non-monopoly.md)
- [AIM因果同期・Fold深度・Human-is-the-loop](../engineering/q-atlantis/aim-fold-human-loop.md)
- [製品系列と現在能力](../engineering/q-atlantis/product-line.md)
