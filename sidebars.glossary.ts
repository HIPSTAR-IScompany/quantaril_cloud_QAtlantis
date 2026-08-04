import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  glossarySidebar: [
    'index',
    {
      type: 'category',
      label: 'Sphere',
      link: {type: 'doc', id: 'sphere/index'},
      items: [
        'sphere/oae',
        'sphere/agency',
        'sphere/observer',
        'sphere/system',
        'sphere/registry',
        'sphere/fact-scope',
        'sphere/field-and-fold',
        'sphere/effect',
        'sphere/aim',
        'sphere/archiangel',
      ],
    },
    {
      type: 'category',
      label: '情報子',
      link: {type: 'doc', id: 'infoton/index'},
      items: [
        'infoton/infoton',
        'infoton/fam',
      ],
    },
    {
      type: 'category',
      label: 'ゲーミング宇宙論',
      link: {type: 'doc', id: 'gaming-cosmology/index'},
      items: [
        'gaming-cosmology/world',
        'gaming-cosmology/world-config',
        'gaming-cosmology/host',
        'gaming-cosmology/runner',
        'gaming-cosmology/portal',
        'gaming-cosmology/instance-ghost',
        'gaming-cosmology/pve',
        'gaming-cosmology/pvp',
        'gaming-cosmology/quest',
        'gaming-cosmology/kusoge-ka',
        'gaming-cosmology/commons-free-ride',
      ],
    },
    {
      type: 'category',
      label: 'アジアスラング・レジスター辞典',
      link: {type: 'doc', id: 'asian-slang/index'},
      items: [
        'asian-slang/uriginal',
        'asian-slang/aliginal',
        'asian-slang/sarumane',
        'asian-slang/ky',
        'asian-slang/scope-miss-diss',
        'asian-slang/scope-error-handles',
        'asian-slang/directional-scope',
        'asian-slang/ashi-tarinu',
      ],
    },
    {
      type: 'category',
      label: 'スピリチュアル',
      link: {type: 'doc', id: 'spiritual/index'},
      items: [],
    },
  ],
};

export default sidebars;
