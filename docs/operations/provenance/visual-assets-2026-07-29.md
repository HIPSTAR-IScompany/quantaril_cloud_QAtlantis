---
title: 2026-07-29 DOS／ASTROポンチ絵の画像受領票
description: Note向けに制作された3枚のポンチ絵を、Q AtlantisのFLAVOR-UXとローカル観測図へ配置した来歴。
---

# 2026-07-29 DOS／ASTROポンチ絵の画像受領票

更新日: 2026-07-29

Status: `CURRENT INTERPRETATION / USER-PROVIDED / PUBLICATION REQUESTED`

## 受領境界

ユーザーがNote向けに制作し、このrepositoryの`static/img/`へ配置した3枚のPNGについて、
意味対応を確認して安定名へ変更し、Q Atlantisの公開projectionへ組み込みました。

元の生成会話、生成時の正確なmodel、prompt、同時点OAEはrepository内で確認していません。
そのためcreator surfaceをfilenameから遡及確定せず、`historical-oae-unavailable`を保持します。
現在確認できるのは、ユーザー提供、今回の公開組込指示、画像bytes、配置先、現在の解釈です。

## ファイル対応

| 受領時filename | 公開path | SHA-256 | 寸法 | 配置とclaim scope |
|---|---|---|---|---|
| `ChatGPT Image 2026年7月29日 16_11_20.png` | `/img/atlantis-dos-small-context-control-plane-concept.png` | `220e689c2d7829f9f2e6fe19464f1c092f8cf2a085f06c9b920bff4a2c250de0` | 1733×907 | Atlantis DOSの`FLAVOR-UX / CONCEPT ART`。稼働画面の証拠には使わない |
| `ChatGPT Image 2026年7月29日 16_18_36.png` | `/img/astro-local-model-inventory-2026-07-29.png` | `1af87ebcf28834a280e28bb005f20941cac51ff7400305831b03d50ffdbf6df0` | 1733×907 | local Ollama棚の観測図。配置ラベルはPresentation |
| `ChatGPT Image 2026年7月29日 16_39_24.png` | `/img/astro-stage-0-2-aae-neat-runner-map.png` | `f4ce641bc5478b6b3b6af342f67ed658d0df84703ecc81550160a9c9471e8a5e` | 864×1821 | ASTRO Stage、AAE Bake、Neat Runnerの`TARGET-SPEC / FLAVOR-UX` |

rename前後でSHA-256が一致することを確認し、画像bytesは変更していません。

## local Ollama再観測

モデル観測図の事実境界を確認するため、2026年7月29日のdev整理時に、
この開発炉の既存Ollamaへ`ollama list`と`ollama show`を実行しました。
新規modelのinstall、pull、学習、性能benchmarkは行っていません。

| local tag | parameters | quantization | この受領票で確認した範囲 |
|---|---:|---|---|
| `qwen3:8b` | 8.2B | `Q4_K_M` | presence、metadata |
| `deepseek-r1:8b` | 8.2B | `Q4_K_M` | presence、metadata |
| `gpt-oss:20b` | 20.9B | `MXFP4` | presence、metadata |
| `llama3:70b` | 70.6B | `Q4_0` | presence、metadata |
| `phi3:3.8b-mini-128k-instruct-q4_K_S` | 3.8B | `Q4_K_S` | presence、metadata |
| `mistral:7b-instruct-q4_K_S` | 7B | `Q4_K_S` | presence、metadata |

この観測はmodelの存在とmetadataを確認したものです。日本語品質、人格同一性、長時間安定、
端末適合、Body制御、AAE Bakeの合格receiptには昇格しません。

## 配置先

- [SphereOS Atlantis DOS 初回ブートの現在地](../../engineering/q-atlantis/atlantis-dos-first-boot-status.md)
- [ASTRO Runner再鍛造の現在地](../../engineering/q-atlantis/astro-development-status.md)
- [マキナ、Open The Eyes...](/blog/makina-open-the-eyes)

同じ画像を参照する場合もbytesや説明本文を複製せず、`static/img/`の安定pathへ接続します。
