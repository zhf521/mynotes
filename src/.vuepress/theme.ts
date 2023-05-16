import { hopeTheme } from "vuepress-theme-hope";
export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
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
      prefix:"/frontend/",
      children:[{text:"HTML",link:"htmlnotes/"},{text:"CSS",link:"cssnotes/"},{text:"JavaScript",link:"javascriptnotes/"},{text:"框架",link:"frameworknotes/"},]
    }
  ],
  //侧边栏
});
