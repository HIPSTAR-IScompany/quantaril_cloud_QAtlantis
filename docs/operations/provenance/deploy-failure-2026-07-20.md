---
title: 2026-07-20 本番deploy失敗receipt
description: 初回main production runがSSH秘密鍵のunlock前提で停止し、公開に到達しなかった事実を保存する。
---

# 2026-07-20 本番deploy失敗receipt

判定: `DEPLOYMENT FAILED / PUBLICATION NOT OBSERVED`

## 観測

```yaml
repository: HIPSTAR-IScompany/quantaril_cloud_QAtlantis
branch: main
commit: 5af1383dea6b1ca0900c917be0e1980a4d589d4b
run_id: 29724337535
build: success
deploy: failure
failed_step: Install pinned SSH identity
publication_url: https://quantaril.cloud
publication_observation: HTTP 404
```

runnerは`HAGE_ED`を受け取りましたが、秘密鍵ファイル自体がpassphrase付きで、headless runnerにはunlock手段が
ありませんでした。logは`incorrect passphrase supplied to decrypt private key`を返しています。これはSakuraの
server account passwordとは別の境界です。

失敗はSSH接続より前です。したがって、次はまだ判定していません。

- 公開鍵loginの可否
- deploy directoryの存在、作成、書込み権限
- target identityと明示的adoptの必要性
- SCP転送
- DNS、TLS、document root、cache

## 修正方針

workflowは次の二方式を受け付けます。

1. deployment専用のpassphraseなし秘密鍵を`HAGE_ED`へ置く。
2. 暗号化された`HAGE_ED`を維持し、Environment secret
   `HAGE_ED_PASSPHRASE`を追加してrunner内の`ssh-agent`でunlockする。

鍵とpassphraseの値は、Note、commit、log、artifactへ記録しません。設定後に`dev`の修正を`main`へ統合し、
新しいrunで接続以降を観測します。今回の失敗runを再解釈して成功扱いにはしません。

## 同時に検出したlocal preview不整合

旧設定は`NODE_ENV=development`のときだけ`baseUrl=/dev/`へ変更していました。しかしproduction buildのHTMLは
`/assets/...`を参照し、`docusaurus serve`側はそのURLを`/dev/`へredirectしたため、HTML 200でもCSS/JSが読み込めない
二重定規になりました。productionとlocal previewをともに`baseUrl=/`へ固定し、正規入口を
`http://127.0.0.1:3000/`へ戻します。

## Last Order

`SSH-KEY-UNLOCK-REQUIRED / stop-publication-claim`

新しい本番runで公開receiptを回収するまで、Q Atlantis siteをデプロイ済みと主張しません。
