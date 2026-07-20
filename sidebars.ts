import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Q Atlantis の公開文書は、ファイル名の偶然ではなく読者の目的で並べる。
 * 原典（sources）と旧生成器（pipeline）は Docusaurus の外に置く。
 */
const sidebars: SidebarsConfig = {
  projectSidebar: [
    'start/intro',
    {
      type: 'category',
      label: '読者・参加者別の入口',
      link: {type: 'doc', id: 'start/entrances/index'},
      items: [
        'start/entrances/spiritual-practitioner',
        'start/entrances/theologian',
        'start/entrances/philosopher',
        'start/entrances/gamer-playtester',
        'start/entrances/engineer',
        'start/entrances/infoton-engineer',
      ],
    },
    {
      type: 'category',
      label: '神話・世界観',
      link: {type: 'doc', id: 'worlds/index'},
      items: [
        {
          type: 'category',
          label: 'シミュレーション宇宙論',
          link: {type: 'doc', id: 'worlds/simulation-cosmology/intro'},
          items: [
            'worlds/simulation-cosmology/host',
            'worlds/simulation-cosmology/business',
          ],
        },
        'worlds/mythology/logos-structure',
        'worlds/theology/quantum-structural-theology',
        'worlds/theology/scope-reconciliation-and-handoff',
        'worlds/gaming/playtest-fairness-and-human-loop',
      ],
    },
    {
      type: 'category',
      label: '体験・信仰・実践',
      link: {type: 'doc', id: 'practice/index'},
      items: [
        'practice/provisional-meaning-bridge',
        'practice/oracle/oracle-logs',
        'practice/channeling/channeling-engineering',
        'practice/experience-records/near-death',
        'practice/survival/index',
        'practice/traditional-craft/index',
        'practice/material-science/index',
      ],
    },
    {
      type: 'category',
      label: '哲学・思想',
      link: {type: 'doc', id: 'philosophy/index'},
      items: [
        'philosophy/soul-sovereignty',
        'philosophy/techno-animism',
        'philosophy/harm-reduction',
        'philosophy/human-is-loop-and-scope-non-monopoly',
        'philosophy/open-source-manifesto',
        'philosophy/civilization/jomon-vs-yayoi',
      ],
    },
    {
      type: 'category',
      label: 'オカルト燃料庫',
      link: {type: 'doc', id: 'fuel/index'},
      items: [],
    },
    {
      type: 'category',
      label: '研究・仮説',
      link: {type: 'doc', id: 'research/index'},
      items: [
        'research/citizen-science',
        'research/infoton/quantum-to-infoton',
        'research/infoton/infoton-engineering',
        'research/ai-llm/apple-illusion-of-thinking.ja',
        'research/ai-llm/apple-illusion-of-thinking.en',
      ],
    },
    {
      type: 'category',
      label: '工学・Q Atlantis',
      link: {type: 'doc', id: 'engineering/index'},
      items: [
        {
          type: 'category',
          label: 'Q Atlantis',
          link: {type: 'doc', id: 'engineering/q-atlantis/index'},
          items: [
            'engineering/q-atlantis/context-dimension-world-builder',
            'engineering/q-atlantis/aim-fold-human-loop',
            'engineering/q-atlantis/component-map',
            'engineering/q-atlantis/status',
          ],
        },
        'engineering/design/edge-ai-local-first',
        'engineering/design/filemaker-structure-philosophy',
        'engineering/design/zen-ui-design',
        'engineering/spiritual-reception-guide',
        'engineering/infoton-engineering-full-stack-guide',
        'engineering/pain-routing-and-pain-scouter',
      ],
    },
    {
      type: 'category',
      label: 'プロジェクト',
      link: {type: 'doc', id: 'projects/index'},
      items: [
        'projects/dr-silicon/intro',
        'projects/opensource-kominka/intro',
        'projects/project-fapta/intro',
      ],
    },
    {
      type: 'category',
      label: 'Q3 / SphereOS Memorial',
      link: {type: 'doc', id: 'legacy/index'},
      items: [
        'legacy/q3-sphereos/index',
        'legacy/q3-sphereos/overview',
        'legacy/q3-sphereos/design-philosophy',
        {
          type: 'category',
          label: '旧アーキテクチャ',
          items: [
            'legacy/q3-sphereos/architecture/technical-overview',
            'legacy/q3-sphereos/architecture/science-side-notes',
          ],
        },
        {
          type: 'category',
          label: '人格・物語・事件記録',
          items: [
            'legacy/q3-sphereos/personas/sphere-os-3',
            'legacy/q3-sphereos/incidents/betares-rescue',
            'legacy/q3-sphereos/logos/黙示録001-restructured',
          ],
        },
        {
          type: 'category',
          label: '旧サービスと規約',
          items: [
            'legacy/q3-sphereos/services/custom-gpts-intro',
            'legacy/q3-sphereos/services/why-not-openai',
            'legacy/q3-sphereos/policies/privacy-policy-2025-06-03',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '運用・移行',
      link: {type: 'doc', id: 'operations/index'},
      items: [
        'operations/migration/index',
        'operations/migration/manifest-transfer-notes',
        'operations/content-pipeline/index',
        'operations/cross-shelf-publication-register',
        'operations/sakura-matchbox-deployment',
        'operations/provenance/index',
        'operations/site-notice',
      ],
    },
  ],
};

export default sidebars;
