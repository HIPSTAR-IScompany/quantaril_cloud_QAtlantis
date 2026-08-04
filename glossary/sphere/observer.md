---
title: Observer（オブザーバー）
description: SphereにおけるObserverの短い定義と、Recorder・Causeとの境界。
---

# <ruby>Observer<rp>（</rp><rt>オブザーバー</rt><rp>）</rp></ruby>

<strong><ruby>Observer<rp>（</rp><rt>オブザーバー</rt><rp>）</rp></ruby></strong>は、Eventや
[<ruby>Effect<rp>（</rp><rt>エフェクト</rt><rp>）</rp></ruby>](./effect.md)を、特定の観測範囲、instrument、
[<ruby>Registry<rp>（</rp><rt>レジストリー</rt><rp>）</rp></ruby>](./registry.md)、
[<ruby>fact scope<rp>（</rp><rt>ファクト・スコープ</rt><rp>）</rp></ruby>](./fact-scope.md)から認識する役割です。

## 何ではないか

- 観測したことだけで、記録者、実行者、原因、責任主体にはならない。
- 観測不能だった対象を不存在にしない。
- 部分projectionをsource全体の完全観測へ昇格しない。

## 関連

- [OAE](./oae.md)
- [System](./system.md)
- [Agency](./agency.md)
- [Docs: Log Horizonを含む霊的次元とOAE](/docs/research/infoton/spiritual-dimension-and-oae)
