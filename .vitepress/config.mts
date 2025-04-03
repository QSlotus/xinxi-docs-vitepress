import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "昕夕亭 - 文档",
  description: "A Document For XinXi (Minecraft)",
  head: [['link', { rel: 'icon', href: 'assets/images/icon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/simple' }
    ],

    sidebar: [
      {
        text: '基础',
        items: [
          { text: '关于昕夕亭的一切', link: '/simple' }
        ]
      },
      {
        text: '进阶',
        items: [
          { text: '服务器指令', link: '/command' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '加入我们', link: '/join-us' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 外观
    darkModeSwitchLabel: '外观',

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '菜单',

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
