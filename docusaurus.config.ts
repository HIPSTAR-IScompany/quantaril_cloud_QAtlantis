import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const legacyRedirects = require('./migration/redirects.json');

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const isDev = process.env.NODE_ENV === 'development';
const config: Config = {

  title: 'Quantaril Cloud Q Atlantis',
  tagline: '神話・人格・体験・技術を、次の世界へ運ぶ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://quantaril.cloud',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: isDev ? '/dev/' : '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HIPSTAR', // Usually your GitHub org/user name.
  projectName: 'quantaril', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'ignore',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: legacyRedirects,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        path: 'about',
        routeBasePath: 'about',
        sidebarPath: require.resolve('./sidebars.about.ts'),
      },
    ],
  ],

  themeConfig: {
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
    htmlLang: 'ja',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    image: 'img/quantaril-social-card.jpg',
    navbar: {
      title: 'Q Atlantis',
      logo: {
        alt: 'quantaril.cloud Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aboutSidebar', // ← about用サイドバーID
          docsPluginId: 'about',      // ← plugin-content-docsのid
          position: 'left',
          label: 'この世界について',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectSidebar',
          position: 'left',
          label: '文書庫',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/saitoomituru/ZeroRoomLab-manifest',
          label: 'ZeroRoomLab',
          position: 'left',
        },
        {
          href: 'https://github.com/HIPSTAR-IScompany',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '目的',
          items: [
            {
              label: 'Q Atlantisへようこそ',
              to: '/about/intro',
            },
          ],


        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://x.com/K_chachamaru',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'サイト上の表現と免責',
              to: '/docs/operations/site-notice',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/saitoomituru',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} quantaril.cloud, HIPSTAR.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
