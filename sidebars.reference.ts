import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  referenceSidebar: [
    'index',
    {
      type: 'category',
      label: 'Sphere family',
      link: {type: 'doc', id: 'sphere/index'},
      items: [
        'sphere/magi',
        'sphere/ibd',
      ],
    },
    {
      type: 'category',
      label: 'FAM',
      link: {type: 'doc', id: 'fam/index'},
      items: [],
    },
    {
      type: 'category',
      label: 'x800 土偶family',
      link: {type: 'doc', id: 'x800/index'},
      items: [],
    },
  ],
};

export default sidebars;
