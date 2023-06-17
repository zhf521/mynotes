import { defineClientConfig } from "@vuepress/client";
 import ImageViewer from './components/ImageViewer.vue'
export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("ImageViewer", ImageViewer);
  },
});