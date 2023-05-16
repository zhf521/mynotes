import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchProPlugin } from "vuepress-plugin-search-pro";
export default defineUserConfig({
  base: "/mynotes/",
  theme,
  //插件配置
  plugins: [
    //搜索插件
    searchProPlugin({
      indexContent: true,
    }),
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
