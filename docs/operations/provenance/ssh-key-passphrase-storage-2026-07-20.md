---
title: 2026-07-20 SSH鍵passphrase保管判断
description: Sakura production用SSH秘密鍵のpassphraseをGitHub Actionsへ渡す場合の保管場所、限界、代替策を記録する。
---

# 2026-07-20 SSH鍵passphrase保管判断

判定: `ENVIRONMENT SECRET / SAME-JOB TRUST BOUNDARY`

秘密値そのものはこの文書、repository、Issue、Pull Request、commit、Actions inputへ書きません。maintainer端末の
`.ssh/config`、秘密鍵、macOSキーチェーンも採掘・複製しません。

## 当面の置き場所

暗号化済み`HAGE_ED`を維持する場合、passphraseはGitHub repositoryの
`sakura-matchbox-production` Environmentへ、Environment secret
`HAGE_ED_PASSPHRASE`としてmaintainer本人が登録します。

```text
Repository Settings
  -> Environments
  -> sakura-matchbox-production
  -> Environment secrets
  -> HAGE_ED_PASSPHRASE
```

Repository variable、Environment variable、`.env`、`.ssh/config`のcommit、workflow_dispatch input、Issue本文へは
置きません。secret値をAgent、Chat、Noteへ渡す必要もありません。

GitHub公式仕様ではEnvironment secretは、そのEnvironmentを参照するjobだけが利用でき、required reviewerを
設定した場合は承認前にjobへ渡りません。またsecretはGitHubへ到達する前に暗号化されます。ただしworkflowが
明示的に参照すればrunnerは平文として利用できるため、保管時暗号化だけで悪意あるworkflowを防げるわけでは
ありません。

## この分離が守るもの、守らないもの

| 境界 | 効果 |
|---|---|
| private keyとpassphraseを別secretにする | 片方だけの誤コピー、単独流出、local file盗難への追加防壁 |
| Environmentへ限定する | build-onlyの`dev` jobや通常PRからproduction secretを遠ざける |
| selected deployment branchを`main`へ限定する | 別branchからEnvironmentを呼ぶworkflowへの防壁を追加する |
| required reviewer | production secretを読むjobの開始前に人間gateを置く |
| 同じdeploy jobが鍵とpassphraseを読む | そのjobまたは採用Actionが悪意を持つ場合、二分しただけでは守れない |

したがって、鍵とpassphraseを同じEnvironmentへ置くことは「完全な二者分離」ではありません。実効防壁は、
workflow変更のreview、`main`制限、Environment保護、Action revision、deploy専用鍵、rotation、server側権限の
最小化を束ねて作ります。

## 推奨設定

現在の少人数alphaでは、次を順に採用します。

1. `HAGE_ED_PASSPHRASE`をEnvironment secretとして登録する。
2. Deployment branches and tagsをselected branch `main`だけへ限定する。
3. team reviewerを置ける人数になったらrequired reviewerを有効にする。
4. 管理者bypassは緊急復旧手順が固まった後に無効化を検討する。
5. `HAGE_ED`を日常SSH鍵と共有せず、Sakura deploy専用鍵へrotationする。
6. server側で可能なら、deploy account、配置path、接続元、authorized_keys optionを最小化する。

同一人物しかreviewできない段階でprevent self-reviewを有効にすると本番を永久停止させるため、現在の体制では
人員増加後のgateです。安全機能を形だけ有効化して運用不能にするのではなく、現在のAgency構成を告白して段階的に
強くします。

## 代替案

完全無人deployを優先するなら、passphraseなしの**deployment専用**Ed25519鍵を`HAGE_ED`としてEnvironment secretに
置く方式があります。GitHub-hosted runnerでは結局jobが利用可能な形へunlockする必要があるため、暗号化鍵と
passphraseを同じjobへ渡す構成より単純です。その代わり、鍵単体が流出した場合の影響を抑えるため、日常鍵との
分離、server側権限、rotationが必須です。

どちらが絶対安全という話ではありません。今回の暗号化鍵を使い続けるならEnvironment secret方式、今後CI/CD専用
identityを作れるなら専用鍵方式を選びます。

## Source

- [GitHub Docs: Deployments and environments](https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments)
- [GitHub Docs: Secrets](https://docs.github.com/en/actions/concepts/security/secrets)

## Last Order

`SECRET-VALUE-MAINTAINER-ONLY / environment-scope / stop-local-secret-mining`

maintainerがGitHub UIでsecretを設定するまで、Agentはlocal keychainや`.ssh`からpassphraseを推測・抽出せず、
production publicationを成功と主張しません。
