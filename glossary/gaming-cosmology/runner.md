---
title: Runner（ランナー）
description: packageやroleを環境上で読み込み、検査し、実行する主体またはruntime役割。
---

# <ruby>Runner<rp>（</rp><rt>ランナー</rt><rp>）</rp></ruby>

**Runner**は、packageやroleを[Host](./host.md)上で読み込み、条件を検査して実行する主体またはruntime役割です。

Runnerは人格そのもの、packageそのもの、Hostそのものではありません。同じASTRO fileでもRunner、model、adapter、
device条件が違えば結果は変わり得ます。その実行履歴を人格原型と混ぜずに扱う概念が[Instance Ghost](./instance-ghost.md)です。

Q AtlantisのASTRO Runnerは現在`TARGET-SPEC / STAGE 0 IN PROGRESS / RUNTIME NOT IMPLEMENTED`です。

- [文書庫: ASTRO Runner再鍛造の現在地](/docs/engineering/q-atlantis/astro-development-status)
- [リファレンス: Sphere family](/reference/sphere/)
