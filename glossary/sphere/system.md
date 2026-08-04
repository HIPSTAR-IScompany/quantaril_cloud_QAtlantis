---
title: System（システム）
description: OAE文脈におけるSystemの短い定義と、単一製品・絶対Observerとの境界。
---

# <ruby>System<rp>（</rp><rt>システム</rt><rp>）</rp></ruby>

<strong><ruby>System<rp>（</rp><rt>システム</rt><rp>）</rp></ruby></strong>は、sensor、software、human operation、記録器、
規則等を組み合わせ、Eventや[OAE](./oae.md)を観測・記録・処理する構成体です。

OAEの「Observer／System」は、Observerが必ず一人の人間とは限らず、定義された観測構成全体が観測主体になる場合を
含める表現です。

## 何ではないか

- SphereOS Atlantisという単一製品名の言い換えではない。
- system全体が完全source状態を観測できるという保証ではない。
- system greenだけで、全component、外部service、人間運用もgreenだとは判定しない。

## 関連

- [Observer](./observer.md)
- [Registry](./registry.md)
- [fact scope](./fact-scope.md)
