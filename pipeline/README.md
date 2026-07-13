# content pipeline

外部ノートと原典をQ Atlantisの公開文書へ変換する領域です。公開先へ直接書かず、原文と転送メタデータをステージングしてから人間が編集・承認します。

## コマンド

```bash
npm run content:list
npm run content:check
npm run content:stage -- <entry-id>
```

- `list`: 転送キューを一覧表示する。
- `check`: ID、状態、Layer、移行方式、公開先、ローカル原典の存在を検査する。
- `stage`: `pipeline/staging/<entry-id>/`へ原文のバイトコピーと`transfer.json`を作る。

`stage`は既存ステージングを上書きしません。生成後は原文、抽出範囲、主張境界、声、転送しない部分を確認してから、通常の編集手順で`docs / blog / about`へ反映します。

## 構成

- `transfer-queue.json`: ZeroRoomLab等から受け取るアンカーと着地候補
- `scripts/`: 検査・ステージング用の最小実装
- `schemas/`: transfer entryの機械可読schema
- `staging/`: レビュー前出力。gitignore対象
- `legacy/`: Q3時代の直接書き込み型生成器。実行禁止

Google Drive等の取得物は、最初に`sources/imports/`へrevisionを固定してから、`local-file`として登録します。認証済みDriveを自動同期して公開先を上書きする運用にはしません。
