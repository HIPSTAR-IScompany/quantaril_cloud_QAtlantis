---
title: Sakura Matchboxのお手軽デプロイ契約
description: GitHub Actionsがbuildから公開観測までを案内し、責務内の不足を自己修復する運用境界。
---

# Sakura Matchboxのお手軽デプロイ契約

状態: `ALPHA / OPERATIONAL CONTRACT`

Q Atlantisの`Sakura Matchbox` profileは、さくらの共有ホスティングを高火力計算機として扱いません。
GitHub-hosted runnerで静的siteをbuildし、共有hostへ転送し、公開URLから同じdeployment receiptを取得できる
ところまでを一つのデプロイ体験として扱います。

## お手軽の意味

ここでいう「お手軽」は、入力項目が少ないことだけではありません。デプロイ責務の内側にある不足を検出し、
安全に直せるものは直し、直せないものは次の操作が分かる言葉で返すことを含みます。

```text
build
  -> deploy pathを検査
  -> pathが無ければ作成
  -> 書込み可能性を検査
  -> 既存siteへ上書き転送
  -> deployment receiptを配置
  -> 公開URLからcache-busting取得
  -> 同じreceiptならPUBLICATION_OBSERVED
```

path作成は、Environmentで指定された利用者の`www`配下だけに限定します。root、home全体、別利用者領域、
shell tokenを含むpathは拒否します。

## このdefaultのWorld Position

Q Atlantisは、中立無思想だから何でも入る空箱を最初から名乗っていません。神話・スピリチュアルを大切にし、
縄文・古神道から派生する縄文2.0的な系譜、Techno-Animism、Gaming Cosmologyを自身のWorld Positionとして
先に告白しています。一方で、異なる信仰とworld flavorが自分の言葉で参加できる土俵を広く開く、非独占の
「全方位信仰」でもあります。このprofileの「お手軽」「気が利く」「観測した境界を置き土産として返す」
というdefaultも、
文化圏一般への推測ではなく、Q Atlantisが選び、責任を持って実装するHospitality policyです。

このPositionは、科学的方法、再現可能な検査、公開receipt等を否定しません。むしろspiritualityをAIの勘や
無告白の暗黙処理へ逃がさず、workflow input、許可範囲、停止条件、receiptとして検査可能にします。

同時に、このdefaultを他のWorld、信仰、文化圏、hosting profileへ普遍規則として継承させません。接続先の
World Configと一致しない場合は、別profile、adapter、Portalまたは明示的な拒否へ分けます。Qの思想を消して
中立化するのでも、相手へ押しつけるのでもなく、双方が自分のspiritualityと責務境界を告白して接続条件を
選べるようにするためです。

ここでいう全方位は、相互に矛盾する告白をすべて同時に真と認定したり、一つのWorldへ混ぜたりする意味では
ありません。Qが八百万の価値観を掲げるなら、他者が異なる哲学、信仰、world flavorを自由に記述し、選ぶ自由も
否定しません。
SphereOS Atlantis側の役目は、Qの信仰告白を全Worldへ代入することではなく、各World builderが自身の哲学・信仰を
SDKでモデリングし、その射程と接続条件を宣言できる器を用意することです。信仰内容の解釈と告白は当事者の仕事で
あり、OSやQが本人に代わって生成・認定するものではありません。

背景となる自己告白は、`README.md`、`AGENTS.md`、`docs/philosophy/techno-animism.md`、
`docs/philosophy/soul-sovereignty.md`、`docs/philosophy/civilization/jomon-vs-yayoi.md`、
`docs/worlds/index.md`を参照してください。

## 既存siteを霊的に察する

転送先に何か入っている場合、無条件で「同じsiteの旧版」とは扱いません。

| target状態 | 動作 |
|---|---|
| 空 | 初回installとして続行 |
| Q Atlantisのreceiptがあり、repositoryとschemaが一致 | 同じ製品の旧commitとして上書き |
| receiptがあるがrepositoryまたはschemaが違う | `DEPLOY_TARGET_IDENTITY_CONFLICT`で停止 |
| receiptがなく、既存fileがある | `DEPLOY_TARGET_IDENTITY_UNKNOWN`で停止 |

最後の状態は、古い手動配置や同じsiteの可能性も、別製品の可能性もあります。内容を人間が確認した後、
`workflow_dispatch`の`adopt_existing_directory=true`を明示したrunだけが引き取れます。これは確認promptの
`-y`に相当します。通常の`main` pushは、正体不明の既存directoryを自動上書きしません。

別repositoryのreceiptがあるdirectoryは、このflagでも上書きしません。製品間の移行、退避、rollbackを含む
別のmigration手順が必要です。

## GitHub Environment契約

Environment名は`sakura-matchbox-production`です。

| 種別 | 名前 | 責務 |
|---|---|---|
| Environment secret | `HAGE_ED` | SSH秘密鍵。値をlog、文書、artifactへ出さない |
| Environment variable | `SAKURA_HOST` | 初期domain等のSSH host |
| Environment variable | `SAKURA_USER` | SSH初期account |
| Environment variable | `SAKURA_DEPLOY_PATH` | `www`またはその子に限定した配置先 |

パスワードはworkflowの必須入力ではありません。公開鍵認証だけを要求し、password認証と
keyboard-interactive認証を明示的に無効化します。

## host key

接続先host keyは`.github/known_hosts/sakura-matchbox-production`へ固定します。現在のkeyは2026-07-20に
対象hostからTOFU観測したもので、独立したfingerprint照合は未実施です。host keyが変わった場合、無条件で
受理せず接続を停止し、さくら側の変更、接続先、観測経路を再確認します。

## 完了と失敗のレジスター

| 結果 | 意味 |
|---|---|
| `PUBLICATION_OBSERVED` | 今回のrun receiptを公開URLから取得できた |
| `DEPLOY_SECRET_MISSING` | 鍵secretがjobへ供給されていない |
| `DEPLOY_PATH_OUT_OF_SCOPE` | 指定pathが許可された`www`配下ではない |
| `DEPLOY_PATH_PERMISSION_DENIED` | pathを作成または書込みできない |
| `DEPLOY_TARGET_IDENTITY_UNKNOWN` | 既存fileはあるがQ Atlantisのreceiptがなく、上書き判断ができない |
| `DEPLOY_TARGET_IDENTITY_CONFLICT` | 既存receiptのrepositoryまたはschemaが異なる |
| `DNS_UNREACHABLE` | 公開URLの名前解決へ到達できない |
| `TLS_UNREACHABLE` | TLS接続または証明書検証へ到達できない |
| `DOCROOT_OR_DEPLOY_PATH_MISMATCH` | 転送先と公開document rootが一致しない可能性がある |
| `PUBLICATION_RECEIPT_MISMATCH` | HTTP応答はあるが今回のreceiptではない。cacheまたは別rootの可能性がある |
| `HTTP_UNREACHABLE` | 上記以外のHTTP到達失敗 |

DNS、TLS証明書、さくら管理画面のdomain mapping、`.htaccess`をworkflowが勝手に修正することはしません。
ただし、転送成功だけを公開成功と詐称せず、どの境界まで観測できたかを返します。

## 現在の観測

2026-07-20のmaintainer端末からの限定観測では、password認証を無効化した公開鍵SSH、SFTP往復、SCP往復、
bytes一致、probe削除まで成功しました。これはGitHub-hosted runnerからの成功やproduction公開を保証しません。
Actionsのrun receiptを公開URLから取得できた時点で、別の`PUBLICATION_OBSERVED`を記録します。
