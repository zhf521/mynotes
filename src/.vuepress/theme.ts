import { hopeTheme } from 'vuepress-theme-hope'
export default hopeTheme({
  //热重载，调试时使用
  // hotReload: true,
  //网站favicon图标
  favicon: '/assets/icon/favicon.ico',
  //作者信息
  author: {
    name: 'Mr.Zhao',
    email: '3407085928@qq.com',
  },
  iconAssets: 'iconfont',
  //网站图标
  logo: '/logo.png',
  //文档仓库地址
  repo: 'https://github.com/zhf521/mynotes',
  plugins: {
    //代码复制
    copyCode: {
      showInMobile: true,
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              }
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
  //全屏按钮
  fullscreen: true,
  //导航栏
  navbar: [
    {
      text: '主页',
      icon: 'home',
      link: '/',
    },
    {
      text: '前端',
      icon: 'html',
      prefix: '/front-end/',
      children: [
        {
          text: 'HTML笔记',
          link: 'html-notes/',
        },
        {
          text: 'CSS笔记',
          link: 'css-notes/',
        },
        {
          text: 'JavaScript笔记',
          link: 'javascript-notes/',
        },
        {
          text: 'Vue笔记',
          link: 'vue-notes/',
        },
        {
          text: 'NodeJS笔记',
          link: 'nodejs-notes/',
        },
        {
          text: 'TypeScript笔记',
          link: 'typescript-notes/',
        },
        {
          text: '项目笔记',
          link: 'project-notes/',
        },
      ],
    },
    {
      text: '软件工具',
      prefix: '/software-tool/',
      icon: 'tool',
      children: [
        {
          text: 'Alist',
          link: 'alist/',
        },
        {
          text: 'Emmet',
          link: 'emmet/',
        },
        {
          text: 'Git',
          link: 'git/',
        },
        {
          text: 'Halo',
          link: 'halo/',
        },
        {
          text: 'MarkDown',
          link: 'markdown/',
        },
        {
          text: 'Photoshop',
          link: 'photoshop/',
        },
        {
          text: 'VSCode',
          link: 'vscode/',
        },
        {
          text: '图床',
          link: 'image-hosting-website/',
        },
        {
          text: 'webpack',
          link: 'webpack/',
        },
      ],
    },
    {
      text: '电脑使用技巧',
      icon: 'operate',
      prefix: '/computer-usage-skills/',
      children: [
        {
          text: '疑难解答',
          link: 'troubleshoot/',
        },
        {
          text: '优化设置',
          link: 'optimization/',
        },
      ],
    },
    {
      text: '计算机网络',
      prefix: '/computer-network/',
      icon: 'network',
      children: [
        {
          text: '小林coding计网',
          link: 'xiaolin-coding-network/',
        },
      ],
    },
    {
      text: '数据结构与算法',
      prefix: '/data-structures-and-algorithms/',
      icon: 'structure',
      children: [
        {
          text: 'JavaScript数据结构与算法',
          link: 'js-data-structures-and-algorithms/',
        },
      ],
    },
  ],
  //侧边栏
  sidebar: {
    '/front-end/': 'structure',
    '/software-tool/': 'structure',
    '/computer-usage-skills/': 'structure',
    '/computer-network/': 'structure',
    '/data-structures-and-algorithms/': 'structure',
  },
})
