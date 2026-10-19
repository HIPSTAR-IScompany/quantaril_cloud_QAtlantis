---
title: Documentation publication and chronology (2026-10-19, en-US)
description: Reference manuscript for the Japanese publication report, source pins, retained archives, and unresolved migration decisions.
canonical_language: ja-JP
translation_language: en-US
translation_status: reference-manuscript
---

# Documentation publication and chronology

Date: 2026-10-19  
Author: 齋藤みつるSaitooMituru-Fusamofu-ふさもふ  
[Canonical Japanese report](./publication-2026-10-19.ja.md)

This en-US text is a reference manuscript derived from the Japanese original. Consult the Japanese source when definitions, responsibilities, conceptual boundaries, or interpretations differ. Do not use this manuscript alone to overwrite, narrow, normalize, or reverse-translate the canonical text. Technical identifiers retain their contractually meaningful English spelling. The Japanese Meaning Kernel is retained; this explanation is not an executable translation.

## Published source scope

The four documentation repositories now contain 29 Japanese/en-US pairs (58 pages) on main. The source material remains in Manifest. Domain deployment and DOI issuance are separate states.

| Site | Pairs | Entry points | Content commit | Bilingual build |
| --- | ---: | --- | --- | --- |
| [Fold](https://github.com/HIPSTAR-IScompany/fold/tree/main/docs) | 10 | [Japanese](https://github.com/HIPSTAR-IScompany/fold/blob/main/README.md) / [en-US](https://github.com/HIPSTAR-IScompany/fold/blob/main/README.en-US.md) | [021aa5d](https://github.com/HIPSTAR-IScompany/fold/commit/021aa5dd4e0b59f1b0cb1bf168fe69ca3663d455) | [passed](https://github.com/HIPSTAR-IScompany/fold/actions/runs/39249966918) |
| [SphereOS](https://github.com/HIPSTAR-IScompany/sphereos/tree/main/docs) | 7 | [Japanese](https://github.com/HIPSTAR-IScompany/sphereos/blob/main/README.md) / [en-US](https://github.com/HIPSTAR-IScompany/sphereos/blob/main/README.en-US.md) | [065020b](https://github.com/HIPSTAR-IScompany/sphereos/commit/065020ba369675caf5a120e7cc236e7a3af6b2d4) | [passed](https://github.com/HIPSTAR-IScompany/sphereos/actions/runs/39250017437) |
| [Quantaril](https://github.com/HIPSTAR-IScompany/quantaril/tree/main/docs) | 6 | [Japanese](https://github.com/HIPSTAR-IScompany/quantaril/blob/main/README.md) / [en-US](https://github.com/HIPSTAR-IScompany/quantaril/blob/main/README.en-US.md) | [492aa63](https://github.com/HIPSTAR-IScompany/quantaril/commit/492aa63602540f6e197924aeedbcdf11e56a945e) | [passed](https://github.com/HIPSTAR-IScompany/quantaril/actions/runs/39250025316) |
| [World](https://github.com/HIPSTAR-IScompany/i-s-world/tree/main/docs) | 6 | [Japanese](https://github.com/HIPSTAR-IScompany/i-s-world/blob/main/README.md) / [en-US](https://github.com/HIPSTAR-IScompany/i-s-world/blob/main/README.en-US.md) | [fb7835f](https://github.com/HIPSTAR-IScompany/i-s-world/commit/fb7835fbb8b12ac615fbed069789b77a03ccabf8) | [passed](https://github.com/HIPSTAR-IScompany/i-s-world/actions/runs/39250033746) |

Fold covers Infoton Engineering, candidate clusters and dynamic graph crosswalks, ABC evidence scope and OAE, FAM reference boundaries, and protocol source links. SphereOS covers SDK documentation, the development control plane, current main versus future work, versioning, and implementation ownership. Quantaril explains the distributed fabric proposal and AQC lineage. World covers philosophy, mythology, faith, world building, and practice without converting those accounts into scientific or clinical findings.

Each repository records paired paths, source paths, exact revisions, declared licenses, and editorial mode in `sources/publication-batch-2026-10-19.json`. This is an edited explanatory projection. Whole-document extraction with retained history, all asset migration, and complete legacy cutover remain unfinished. Historical `TRANSFERRED` entries describe their original transfer, not publication of the four new sites.

## Decisions in chronological order

- July 13–20: The v1 ledger and transfer receipts describe earlier work inside Q Atlantis. They remain historical records.
- July 29: The DOS first-boot article documents its contemporary observations and preview policy. Later authorization is not retroactively inserted into that event.
- August 31: The [final #20 decision](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/20#issuecomment-5479450957) fixed the SphereOS domain as `sphere.i-s.dev` and the future top-level slug as `infinite-synthesis`.
- August 31: Issues #21–31 described staged deployment and content cutover.
- October 19: The user authorized source-preserving editorial work, main integration, and builds before deployment. DNS, TLS, existing-site evacuation, and Patron decisions remain separate conditions.

The top-level rename still requires verified publication of all four sites. Its slug has already been decided. Earlier dependency statements do not revoke the current authorization for documentation work.

## Inventory and unknowns

The baseline is Q main [39a67f2](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/tree/39a67f2ed68c3cf826493c7f97462c1552c943dc), with 314 tracked files. The v2 ledger records each path, including content, assets, source archives, routes, sidebars, and supporting files. There are 224 preservation entries and 90 entries requiring decisions. A candidate repository is not an approved migration destination.

Full text, asset references, and third-party redistribution rights have not been completely reviewed. Unknown licenses and unscanned asset references remain explicit. The ordinary CI check verifies inventory coverage, retained files, source pins, and bilingual batch structure. It does not certify publication readiness. The separate `--publish` mode fails on unresolved conditions.

Old URLs and source files remain in place. History extraction, reference scanning, URL mappings, rights review, and cutover remain in [#25](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/25) and the site migration Issues #26–29.

## Branches and unresolved differences

The four documentation dev branches have no unique commits. No new branch was created. The AGENTS and CONTRIBUTING files in the Atlantis issue-intake branch are identical to main, so its text is not applied twice. The user explicitly excluded and retained `dev/m6xx.1-reincarnation-sdk`.

Q dev contains an additional binary image, `45F9A112-F9F0-4B49-8446-6926FF6D9BC1.jpeg`. Its purpose and rights require a decision in [#25](https://github.com/HIPSTAR-IScompany/quantaril_cloud_QAtlantis/issues/25); it is not merged automatically.

Dated Q3 definitions and current reference boundaries remain distinguishable. Crosswalks to physics and dynamic graphs are not promoted to equivalence, universal mathematical results, or established scientific findings. Further disciplinary references and conceptual conflicts belong to [Manifest #42](https://github.com/saitoomituru/ZeroRoomLab-manifest/issues/42).

## Verification and remaining conditions

The four content commits passed dependency installation, type checking, bilingual Docusaurus builds, source-pair checks, domain checks, and existing SEO checks. A follow-up commit tracks the pinned toolchain, additional bilingual SEO checks, and receipt artifact inclusion. Policy sources were reviewed manually; neither the Python MAGI resolver nor a local shell was executed. Missing historical OAE remains `historical-oae-unavailable`.

Build success is not evidence of DNS, vhost, TLS, or live publication. Deployment remains in #23, environment and WordPress/WooCommerce evacuation in #24, and Patron placement in #29. Enabling Zenodo integration does not itself issue a DOI; release scope and metadata still need verification.
