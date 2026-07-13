---
title: 既知のnpm脆弱性(2026-07-13時点)
description: npm auditで報告された既存パッケージ脆弱性の内訳と、破壊的更新を見送った理由。
---

# 既知のnpm脆弱性(2026-07-13時点)

`npm audit`(`--force`無し)で報告された全項目の記録。`--force`による一括修正は実行しない方針(前回判断を踏襲)。

## 内訳

| 深刻度 | 件数 |
|---|---|
| critical | 1 |
| high | 13 |
| moderate | 41 |
| low | 4 |
| 合計 | 59 |

直接依存として名前が出るのは `@docusaurus/core` / `@docusaurus/plugin-client-redirects` / `@docusaurus/preset-classic` / `@docusaurus/theme-mermaid` の4件のみ。残り55件はすべて、これらDocusaurus公式パッケージ経由の間接依存(webpack-dev-server, chevrotain/mermaid, copy-webpack-plugin 等)。

## `npm audit fix`(非force)を適用しなかった理由

理論上は非破壊的な修正のはずだが、実際に適用してみたところ、`webpack`が`^5.x`の範囲内で`5.108.4`まで引き上げられ、Docusaurus 3.7.0が内部で使用する`webpackbar`が渡す旧形式の`ProgressPlugin`オプション(`name` / `color` / `reporters` / `reporter`)がwebpack側のスキーマ検証で拒否され、`npm run build`が失敗した。

```
ValidationError: Invalid options object. Progress Plugin has been initialized using an
options object that does not match the API schema.
 - options has an unknown property 'name' / 'color' / 'reporters' / 'reporter'
```

`git checkout -- package.json package-lock.json` でロールバックし、`npm run build` / `npm run typecheck` が再び成功することを確認済み。**現時点でこのリポジトリのpackage.json/package-lock.jsonに`npm audit fix`由来の変更は含まれていない。**

## 根本原因と唯一の実質的な解消経路

59件のほぼ全てが、Docusaurus 3.7.0系がバンドルする依存ツリーに由来する。`npm audit`が毎回表示する

```
Update available 3.7.0 → 3.10.2
npm i @docusaurus/core@latest @docusaurus/plugin-client-redirects@latest \
  @docusaurus/preset-classic@latest @docusaurus/theme-mermaid@latest \
  @docusaurus/module-type-aliases@latest @docusaurus/tsconfig@latest @docusaurus/types@latest
```

が示す通り、`@docusaurus/*` 一式を3.10.2へ**一括**アップグレードすることが、59件の大半を一度に解消する唯一の現実的な経路。個別パッケージ単位のピンポイント修正では、上記のような依存衝突が別の形で再発する可能性が高い。

## Critical / High(個別内訳)

| パッケージ | 深刻度 | 直接/間接 | 経路 |
|---|---|---|---|
| shell-quote | critical | 間接 | webpack-dev-server系 |
| lodash | high | 間接 | mermaid系 |
| lodash-es | high | 間接 | mermaid系 |
| express | high | 間接 | webpack-dev-server |
| ws | high | 間接 | webpack-dev-server |
| fast-uri | high | 間接 | webpack-dev-server系 |
| minimatch | high | 間接 | webpack-dev-server系 |
| node-forge | high | 間接 | webpack-dev-server系 |
| path-to-regexp | high | 間接 | express経由 |
| picomatch | high | 間接 | webpack-dev-server系 |
| serve-handler | high | 間接 | minimatch経由 |
| svgo | high | 間接 | @docusaurus/bundler系 |
| @babel/plugin-transform-modules-systemjs | high | 間接 | @babel/core系 |
| serialize-javascript | high | 間接 | @docusaurus/preset-classic経由(3.10.2で解消見込み) |

## Moderate(41件) / Low(4件)

いずれも `@docusaurus/*` 本体・`webpack-dev-server`・`mermaid`(`chevrotain`/`langium`)・`postcss`/`ajv`/`joi`/`qs` 等、上記と同じ依存ツリー内の推移的依存。個別スナップショットは`npm audit --json`で再取得可能(CI上では`npm audit`のログとして毎回出力される)。

## 対応方針

`[DEFERRED — 要みつるさん判断・ブランチ運用]`

- 唯一の実質的な解消経路は `@docusaurus/*` 一式の3.7.0→3.10.2一括アップグレード
- Docusaurus 3系内のマイナー差分でも、プラグインAPI変更やswizzle済みコンポーネントとの非互換が起こり得るため、**別ブランチを切ってビルド・型チェック・表示確認を一通り行ってからマージする**運用とする(このMemorial/legacy再編作業とは切り離した独立タスクとして扱うことを推奨)
- `--force`による semver 範囲外の強制更新は今回も見送る

関連: [GitHub Actionsビルド設定](../../.github/workflows/deploy.yml)
