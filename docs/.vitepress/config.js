import { defineConfig } from 'vitepress'
const config = defineConfig({
  base: '/caiyong.github.io/',
  lang: 'zh-CN',
  title: 'rich-flow 中文文档',
  description: '致力于提升研发效率和规范的工程化解决方案',
  lastUpdated: true,
  themeConfig: {
    sidebar: [
      {
        text: '初始化',
        collapsible: true,
        items: [
          {
            text: '项目安装',
            link: '/install.md'
          },
          {
            text: '使用模板',
            link: '/project.md'
          },
          {
            text: '项目脚本',
            link: '/start.md'
          }
        ]
      },
      {
        text: '安装插件',
        collapsible: true,
        items: [
          {
            text: 'ESLint',
            link: '/eslint.md'
          }
        ]
      },
      {
        text: 'Git集',
        collapsible: true,
        items: [
          {
            text: 'branch',
            link: '/git/branch.md'
          },
          {
            text: 'commit',
            link: '/git/commit.md'
          },
          {
            text: 'merge',
            link: '/git/merge.md'
          },
          {
            text: 'ignore',
            link: '/git/ignore.md'
          }
        ]
      },
      {
        text: 'npm',
        collapsible: true,
        items: [
          {
            text: '升级版本',
            link: '/npm.md'
          }
        ]
      }
    ],
    nav:  [
      { 
        text: '介绍', 
        link: '/guide.md',
      },
      {
        text: '版本',
        link: '/CHANGELOG.md'
      }
    ],
    editLink: {
      pattern: 'https://github.com/nanjingcaiyong/rich-flow/edit/main/docs/:path',
      text: '编辑页面'
    },
    algolia: {
      apiKey: 'fbac67facface4f8ccc1d1816529d20f',
      appId: 'JMMLA5H26B',
      indexName: 'rich-flow',
      algoliaOptions: {
        hitsPerPage: 10,
      },
    },
    // github
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nanjingcaiyong/rich-flow' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present rich'
    }
  }
})

export default config