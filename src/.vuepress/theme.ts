import { hopeTheme } from "vuepress-theme-hope";
export default hopeTheme({
  //热重载，调试时使用
  hotReload: true,
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
      text: "前端",
      prefix:"/front-end/",
      children:[{text:"HTML",link:"html-notes/"},{text:"CSS",link:"css-notes/"},{text:"JavaScript",link:"javascript-notes/"},{text:"Vue",link:"vue-notes/"},]
    },
    {
      text: "软件工具",
      prefix: "/software-tool/",
      children: [{ text: "Alist", link: "alist-notes/" }, { text: "Emmet", link: "emmet-notes/" }, { text: "Git", link: "git-notes/" }, { text: "Halo", link: "halo-notes/" }, { text: "MarkDown", link: "markdown-notes/" },
        {text: "NodeJS",link:"nodejs-notes / "},{text:"Photoshop",link:"photoshop-notes/"},{text:"VSCode",link:"vscode-notes/"},{text:"图床",link:"image-hosting-website-notes/"},]
    },
    {
      text: "电脑使用技巧",
      prefix: "/computer-usage-skills/",
      children:[{text:"疑难解答",link:"troubleshoot-notes/"},{text:"优化设置",link:"optimization-notes/"}]
    }
  ],
  //侧边栏
  sidebar: {
    "/front-end/": "structure",
    "/software-tool/": "structure",
    "/computer-usage-skills/":"structure",
  }
});
