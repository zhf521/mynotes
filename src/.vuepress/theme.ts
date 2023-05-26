import { hopeTheme } from "vuepress-theme-hope";
export default hopeTheme({
  //热重载，调试时使用
  // hotReload: true,
  //网站favicon图标
  favicon:"/assets/icon/favicon.ico",
  //作者信息
  author: {
    name: "Mr.Zhao",
    email:"3407085928@qq.com",
  },
  iconAssets: "iconfont",
  //网站图标
  logo: "/logo.png",
  //文档仓库地址
  repo: "https://github.com/zhf521/mynotes",
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
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
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
      text: "主页",
      icon: "home",
      link: "/",
    },
    {
      text: "前端",
      icon:"html",
      prefix: "/front-end/",
      children: [
        {
          text: "HTML笔记",
          icon: "html",
          link: "html-notes/"
        },
        {
          text: "CSS笔记",
          icon: "css",
          link: "css-notes/"
        },
        {
          text: "JavaScript笔记",
          icon: "javascript",
          link: "javascript-notes/"
        },
        {
          text: "Vue笔记",
          icon: "vue",
          link: "vue-notes/"
        },
      ]
    },
    {
      text: "软件工具",
      prefix: "/software-tool/",
      icon:"tool",
      children: [
        {
          text: "Alist",
          icon: "box",
          link: "alist/"
        },
        {
          text: "Emmet",
          icon: "emmet",
          link: "emmet/"
        },
        {
          text: "Git",
          icon: "git",
          link: "git/"
        },
        {
          text: "Halo",
          icon: "blog",
          link: "halo/"
        },
        {
          text: "MarkDown",
          icon: "markdown",
          link: "markdown/"
        },
        {
          text: "NodeJS",
          icon: "nodeJS",
          link: "nodejs/"
        },
        {
          text: "Photoshop",
          icon: "editor",
          link: "photoshop/"
        },
        {
          text: "VSCode",
          icon: "vscode",
          link: "vscode/"
        },
        {
          text: "图床",
          icon: "pic",
          link: "image-hosting-website/"
        },
      ]
    },
    {
      text: "电脑使用技巧",
      icon:"operate",
      prefix: "/computer-usage-skills/",
      children: [
        {
          text: "疑难解答",
          icon: "question",
          link: "troubleshoot/"
        },
        {
          text: "优化设置",
          icon: "config",
          link: "optimization/"
        }
      ]
    },
    {
      text: "计算机网络",
      prefix: "/computer-network/",
      icon:"network",
      children: [
        {
          text: "小林coding计网",
          icon: "network",
          link: "xiaolin-coding-network/"
        },
      ]
    }
  ],
  //侧边栏
  sidebar: {
    "/front-end/": "structure",
    "/software-tool/": "structure",
    "/computer-usage-skills/": "structure",
    "/computer-network/":"structure",
  },
});
