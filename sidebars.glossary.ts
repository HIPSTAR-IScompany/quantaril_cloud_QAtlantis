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
      items: [],
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
