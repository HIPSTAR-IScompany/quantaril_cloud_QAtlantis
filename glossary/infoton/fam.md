---
title: FAM（ファム）
description: 汎用叡智記述フォーマットFAMの短い定義と、JSON-LD・YAML・database wrapperとの境界。
---

# <ruby>FAM<rp>（</rp><rt>ファム</rt><rp>）</rp></ruby>

<strong><ruby>FAM<rp>（</rp><rt>ファム</rt><rp>）</rp></ruby>（<ruby>FoldAccessMapper<rp>（</rp><rt>フォールド・アクセス・マッパー</rt><rp>）</rp></ruby>）</strong>は、
**探索技の状態を持つ叡智を記述する汎用叡智記述フォーマット**です。

結論や完成したHowToだけでなく、何を探しているか、どの探索技を使ったか、どのbranchを試したか、何が見つかり、
何が未解決で、次にどこを探索できるか、どの条件で停止したかを一つの叡智として保持します。

## JSON-LD／YAMLとの関係

[JSON-LD](https://www.w3.org/TR/json-ld11/)やYAMLは、対象、属性、関係、手順等の水平な知識やHowToを記述・交換する
ために利用できる汎用形式です。FAMはそれらを置換する競合serialization形式ではありません。

```text
JSON-LD / YAML
  知識、関係、HowToを記述・交換するVessel

FAM
  探索目的、探索技、途中状態、branch、Evidence、unknown、Last Orderを持つ叡智の記述契約
```

必要な<ruby>field<rp>（</rp><rt>フィールド</rt><rp>）</rp></ruby>と意味契約を保持できるなら、FAMをJSON、JSON-LD、YAML等のVesselで表現できます。Vesselが同じでも、
探索状態と停止契約を持たない通常のHowToが自動的にFAMになるわけではありません。

## 日本語branchの疎結合

FAMは、日本語を一つの「正しい標準語」へ潰さず、時代、土地、共同体、制度、世代ごとにbranchした意味を、
出典と変換loss付きで疎結合に記述する用途にも使えます。

縄文古語、弥生古語、アイヌ語、うちなー言葉、万葉仮名、律令、江戸、山手、下町、昭和、団塊、日教組、団塊Jr、
氷河期、平成、令和等は、同じ種類の分類軸ではありません。言語、表記、制度register、地域、世代語を一本の年代順へ
自動mergeせず、語形、読み、意味、使用共同体、時代scope、親branch、相互変換、未確定を別々に保持します。

この用途の主な観測棚は、人文科学、認知言語学、心理言語学（言語心理学）です。制度や時代は版番号ではなく、話者の
概念frame、比喩、感情、自己位置、聞き手想定を読む補助コンテキストとして扱います。個々の語源や日本語史上の系譜を
確定する学説そのものではありません。

### 「どこの常識？」はlibrary resolver

会話がずれたときの「それ、どこの常識？」は、どの集団認知libraryをロードすべきか問い合わせるresolverとして
記述できます。「郷に入れば郷に従え」を壕／コロニーの比喩で読む場合も、先に郷の境界、libraryの出所、適用世代、
退出・切替条件を確定します。

KY、非常識、不謹慎、DQN、`F--K`、ソイヤ等の応答は、人間そのものの本質評価へせず、「このコロニーのprotocolと
不整合が観測された」というerror handleとして原語を残せます。その観測を[OAE](/glossary/sphere/oae)へ接続し、別の
常識libraryへ切り替える[Portal／Gate](/glossary/gaming-cosmology/portal)を探します。

このmodelを「日本人は全員こう振る舞う」という国民性claimにはしません。どの共同体、時点、Observerで観測したかを
保持するための設計です。

### 常識libraryを普遍化しない

局所libraryを「日本人全体の常識」へ広げる圧力と、外部libraryを「世界標準」として各コロニーへ強制する圧力は、
向きが逆でも同じscope拡張監査へ掛けられます。

西洋のあるObserverが日本の同調圧力を危険と見る場合も、日本のある政治subcultureが外来の統一定規を
「グローバリスト」「左翼的」「パヨク」と返す場合も、ラベルだけで正誤や思想所属を確定しません。強引な普遍化を
察知したerror handleとして、発話者、対象、library、拡張方向、適用境界を分けて記録します。

政治的な呼称をSourceから消さないことと、その呼称を人物の本質判定へ採用することは別です。

同じ設計は、文化・知財の起源claimにも使えます。「ウリジナル」「アルジナル」「猿真似」等の拒絶語を盗用判定そのものにせず、
[文化commonsのfree ride](/glossary/gaming-cosmology/commons-free-ride)としてSource、date、license、変形差分、帰属をたどります。

## 何ではないか

- 単なるdatabase wrapper、vector検索、JSON-LD、YAMLの別名ではない。
- すべてのFAM系譜が同一<ruby>schema<rp>（</rp><rt>スキーマー</rt><rp>）</rp></ruby>・同一実装状態にあるという意味ではない。
- 文書にFAMと書かれているだけで、parser、resolver、IBD接続が実装済みになるわけではない。

## 関連

- [FAM リファレンス](/reference/fam/)
- [IBD リファレンス](/reference/sphere/ibd)
- [文書庫: 情報子工学フルスタック入門](/docs/engineering/infoton-engineering-full-stack-guide)
