---
title: BeatSQL项目
order: 1
---

## 1. 引入normalize.css

在项目中引入`normalize.css`可以清楚默认样式

方法：

1. 在Vue项目中安装`normalize.css`

   ```bsh
   npm install normalize.css
   ```

2. 在项目的入口文件（如：main.js）中引入

   ```js
   import 'normalize.css';
   ```

## 2. 网站SEO优化

`index.html`：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/public/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BeatSQL - SQL自学网站</title>
    <meta
      name="keywords"
      content="SQL,数据库,数据分析,程序员,编程,SQL学习,SQL教程,MySQL,DB"
    />
    <meta name="description" content="SQL自学网站" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

## 3. 引入ant-design-vue

1. 安装

   ```bash
   npm install ant-design-vue@next
   ```

2. 在入口文件`main.js`中全局完整注册

   ```js
   import { createApp } from 'vue';
   import Antd from 'ant-design-vue';
   import App from './App';
   import 'ant-design-vue/dist/reset.css';
   
   const app = createApp(App);
   
   app.use(Antd).mount('#app');
   ```

## 4. 引入VueRouter

### 4.1 基本使用

1. 安装

   ```bash
   npm install vue-router@next
   ```

2. 在应用程序中创建一个新的路由文件，例如 `router/index.js`，并导入必要的依赖：

   ```js
   import { createRouter, createWebHistory } from 'vue-router';
   import Home from './views/Home.vue';
   import About from './views/About.vue';
   
   // 创建路由实例
   const router = createRouter({
     history: createWebHistory(),
     routes: [
       {
         path: '/',
         component: Home,
       },
       {
         path: '/about',
         component: About,
       },
     ],
   });
   
   export default router;
   ```

   我们创建了两个简单的路由页面：`Home` 和 `About`

3. 在 `main.js` 文件中，将路由实例与 Vue 应用程序进行关联：

   ```js
   import { createApp } from 'vue';
   import App from './App.vue';
   import router from './router';
   
   createApp(App)
     .use(router)
     .mount('#app');
   ```

4. 在组件中使用 `<router-view>` 组件来显示当前路由对应的组件，并使用 `<router-link>` 组件来生成链接到不同路由的导航

   ```vue
   <template>
     <div>
       <router-link to="/">Home</router-link>
       <router-link to="/about">About</router-link>
       <router-view></router-view>
     </div>
   </template>
   ```

### 4.2 VueRouter和组合式API

因为我们在 `setup` 里面没有访问 `this`，所以我们不能再直接访问 `this.$router` 或 `this.$route`。作为替代，我们使用 `useRouter` 和 `useRoute` 函数：

```js
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {
          ...route.query,
          ...query,
        },
      })
    }
  },
}
```

### 4.3 项目的路由配置

```js
import { createRouter, createWebHistory } from 'vue-router'
import LearnPage from '../views/LearnPage.vue'
import LevelsPage from '../views/LevelsPage.vue'
import PlaygroundPage from '../views/PlaygroundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LearnPage,
      redirect: '/learn',
      props: true,
    },
    {
      path: '/learn/:levelKey?',
      component: LearnPage,
      props: true,
    },
    {
      path: '/levels',
      component: LevelsPage,
    },
    {
      path: '/playground',
      component: PlaygroundPage,
    },
  ],
})

export default router

```

首先，通过 `import` 语句引入了 Vue Router 相关的模块和组件

然后，通过 `createRouter` 函数创建了一个路由实例，并传入了一个包含路由配置的对象。其中，使用 `createWebHistory()` 创建了一个 Web 历史记录管理器，用于处理浏览器的导航

在路由配置的 `routes` 字段中，定义了几个路由规则：

- `'/'` 路径对应的组件是 `LearnPage`，并且在访问根路径时重定向到 `/learn` 路径。`props: true` 表示将路由参数作为 props 传递给组件。
- `'/learn/:levelKey?'` 路径对应的组件也是 `LearnPage`，其中 `:levelKey?` 表示这是一个可选的路由参数，即可以通过 `/learn` 访问，也可以通过 `/learn/someLevelKey` 访问。同样，`props: true` 表示将路由参数作为 props 传递给组件。
- `'/levels'` 路径对应的组件是 `LevelsPage`，没有配置额外的 props。
- `'/playground'` 路径对应的组件是 `PlaygroundPage`，没有配置额外的 props。

最后，通过 `export default` 导出了路由实例，以便在其他地方引入和使用该实例

### 4.4 路由传参

在 Vue 3 中，你可以使用路由的 `params` 或 `query` 来传递参数到目标组件。下面是两种常用的方式：

1. 使用 `params` 传递参数：

   在路由定义中，可以通过 `props: true` 来启用路由参数自动注入到组件的 props 中

   ```js
   const routes = [
     {
       path: '/user/:userId',
       name: 'User',
       component: UserComponent,
       props: true
     }
   ];
   ```

   然后在接收参数的组件中，可以直接声明接收的 props 属性，并且路由参数会自动注入到这些 props 中。

   ```vue
   <template>
     <div>
       <h1>User ID: {{ userId }}</h1>
     </div>
   </template>
   
   <script>
   export default {
     props: ['userId']
   };
   </script>
   ```

2. 使用 `query` 传递参数：

   在路由跳转时，可以使用 `router-link` 或 `router.push` 来添加查询参数。

   ```vue
   <!-- 使用 router-link -->
   <router-link :to="{ path: '/user', query: { userId: '123' } }">User</router-link>
   
   <!-- 使用 router.push -->
   <button @click="goToUser">Go to User</button>
   
   <script>
   export default {
     methods: {
       goToUser() {
         this.$router.push({ path: '/user', query: { userId: '123' } });
       }
     }
   };
   </script>
   ```

   在接收参数的组件中，可以使用 `$route.query` 来获取查询参数。

   ```vue
   <template>
     <div>
       <h1>User ID: {{ $route.query.userId }}</h1>
     </div>
   </template>
   ```

   这两种方式可以根据你的需求来选择适合的方法来传递参数到目标组件。注意，使用 `params` 传递参数时，参数会作为路由路径的一部分，而使用 `query` 传递参数时，参数会以查询字符串的形式出现在 URL 中。

## 5. Ant Design Vue踩坑记录

Menu导航菜单高亮效果没有出现，原因是在 Vue Router 中，路由的 `path` 和菜单项的 `key` 需要保持一致才能正确地匹配并高亮显示菜单项

在你之前的代码中，你给菜单项的 `key` 设置的是没有前面的 `/`，所以导致了路径匹配不上，菜单项无法正确高亮显示

为了解决这个问题，你可以通过在菜单项的 `key` 前加上 `/` 来保持和路由的 `path` 一致。例如：

```js
const items = ref([
  {
    key: '/learn',
    label: '学习',
    title: '学习'
  },
  {
    key: '/levels',
    label: '关卡',
    title: '关卡'
  },
  {
    key: '/playground',
    label: '广场',
    title: '广场'
  }
]);
```

这样，当路由的 `path` 与菜单项的 `key` 匹配时，菜单项就会被正确高亮显示了

实现思路：

```vue
<template>
	<a-menu mode="horizontal" :items="items" :style="{ lineHeight: '64px' }" @click="clickMenu"
        :selected-keys="selectedKeys" />
</template>
<script setup>
import { computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const selectedKeys = computed(() => [route.path])
const items = ref([{
  key: '/learn',
  label: '学习',
  title: '学习',
}, {
  key: '/levels',
  label: '关卡',
  title: '关卡',
}, {
  key: '/playground',
  label: '广场',
  title: '广场',
}]);
// 点击菜单触发菜单切换
const clickMenu = ({ item, key, keyPath }) => {
  router.push(key)
};
</script>
```

## 6. 页面基本结构

`APP.vue`

```vue
<template>
  <a-row class="header" type="flex" align="middle">
    <a-col flex="160px" style="margin: 0 auto;">
      <router-link to="/">
        <a-row align="middle">
          <img src="./assets/logo.png" alt="BeatSQL" class="logo">
          <span class="title">BeatSQL</span>
        </a-row>
      </router-link>
    </a-col>
    <a-col flex="auto">
      <a-menu mode="horizontal" :items="items" :style="{ lineHeight: '64px' }" @click="clickMenu"
        :selected-keys="selectedKeys" />
    </a-col>
  </a-row>
  <div class="content">
    <router-view></router-view>
  </div>
  <div class="footer">
    BeatSQL - SQL 自学网站 ©2023 by
    <a href="https://github.com/zhf521" target="_blank">zhf</a>
  </div>
  <a-back-top :style="{ right: '24px' }"></a-back-top>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const selectedKeys = computed(() => [route.path])
const items = ref([{
  key: '/learn',
  label: '学习',
  title: '学习',
}, {
  key: '/levels',
  label: '关卡',
  title: '关卡',
}, {
  key: '/playground',
  label: '广场',
  title: '广场',
}]);
// 点击菜单触发菜单切换
const clickMenu = ({ item, key, keyPath }) => {
  router.push(key)
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #f0f0f0;
  padding: 0 24px;
}

.ant-menu-horizontal {
  border-bottom: none !important;
}

.logo {
  width: 56px;
}

.title {
  margin-left: 8px;
  font-size: 20px;
  color: #000;
}

.content {
  padding: 24px;
}

.footer {
  padding: 12px;
  text-align: center;
  background: #efefef;
}
</style>
```

`views/LearnPage.vue`

```vue
<template>
  <a-row :gutter="[16, 16]">
    <!-- 左半部分区域 -->
    <a-col :lg="11" :xs="24">
      <!-- 问题面板 -->
    </a-col>
    <!-- 右半部分区域 -->
    <a-col :lg="13" :xs="24">
      <!-- SQL编辑区 -->
      <!-- 可折叠区域 -->
      <a-collapse v-model:activeKey="activeKey" style="margin-top: 16px;">
        <a-collapse-panel key="result" header="查看执行结果">
        </a-collapse-panel>
        <a-collapse-panel key="hint" header="查看提示">
        </a-collapse-panel>
        <a-collapse-panel key="ddl" header="查看建表语句">
        </a-collapse-panel>
        <a-collapse-panel key="answer" header="查看答案">
        </a-collapse-panel>
      </a-collapse>
    </a-col>
  </a-row>
</template>
<script  setup>
import { ref } from 'vue';
const activeKey = ref(['result']);
</script>
<style></style>
```

## 7. 引入ByteMD

1. 安装

   ```bash
   npm i @bytemd/vue-next
   ```

2. 使用

   它有两个组件 `Editor` 和 `Viewer` 这两个，比较通俗易懂， `Editor` 顾名思义，就是 Markdown 编辑器，`viewer` 用于显示渲染的 Markdown 结果

   ```js
   import { Editor, Viewer } from '@bytemd/vue-next'
   ```

   在使用组件之前，请记住导入 CSS 文件以使样式正确

   ```js
   import 'bytemd/dist/index.css'
   ```

3. 示例

   ```vue
   <template>
     <Viewer :value="value" :plugins="plugins" />
   </template>
   <script setup>
   import { Viewer } from '@bytemd/vue-next';
   // 插件：支持 GFM（自动链接文字、删除线、表格、任务列表）
   import gfm from '@bytemd/plugin-gfm';
   // 插件：支持代码高亮
   import heighlight from '@bytemd/plugin-highlight';
   import 'highlight.js/styles/default.css';
   // 引入github-markdown-css主题
   import 'github-markdown-css/github-markdown.css';
   import 'bytemd/dist/index.css';
   
   const plugins = [gfm(), heighlight()];
   const props = defineProps(['value']);
   
   </script>
   ```

## 8. 引入github-markdown-css主题

1. 安装

   ```bash
   npm install github-markdown-css
   ```

2. 引入

   ```js
   import 'github-markdown-css/github-markdown.css';
   ```


## 9. 引入monaco-editor

1. 安装

   ```bash
   npm install monaco-editor
   ```

2. 使用

   ```vue
   <template>
     <div ref="editorRef" style=" height: 280px;"></div>
     <a-space :size="16" style="margin-top: 16px;">
       <a-button type="primary" style="width: 180px;">运行</a-button>
       <a-button>格式化</a-button>
       <a-button>重置</a-button>
     </a-space>
   </template>
   <script setup>
   import * as monaco from 'monaco-editor';
   import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
   
   import { onMounted, onUnmounted, ref, toRaw } from 'vue';
   const editorRef = ref();
   const inputEditor = ref();
   self.MonacoEnvironment = {
     getWorker() {
       return new EditorWorker();
     }
   };
   onMounted(() => {
     // 初始化代码编辑器
     if (editorRef.value) {
       const initValue = '';
       inputEditor.value = monaco.editor.create(editorRef.value, {
         value: initValue,
         language: 'sql',
         theme: 'vs-dark',
         formatOnPaste: true,
         automaticLayout: true,
         fontSize: 16,
         minimap: {
           enabled: false,
         },
       });
     }
   });
   
   // 释放资源
   onUnmounted(() => {
     if (inputEditor.value) {
       // 注意：应该使用toRaw将响应式对象转换成普通对象，否则会出现内存泄漏   
       toRaw(inputEditor.value).dispose();
     }
   });
   
   </script>
   <style></style>
   ```

## 10. 引入sql-formatter

1. 下载

   ```bash
   npm i sql-formatter
   ```

2. 引入

   ```js
   import { format } from 'sql-formatter';
   ```

## 11. 引入sql.js

1. 下载

   ```bash
   npm install sql.js
   ```

2. 引入

   ```js
   import initSqlJs from "sql.js";
   ```

## 12. pinia持久化存储

使用pinia-plugin-persistedstate插件实现

1. 下载

   ```bash
   npm i pinia-plugin-persistedstate
   ```

2. 在入口文件（`main.js`）中将插件添加到 pinia 实例上

   ```js
   import { createPinia } from 'pinia';
   import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
   
   const pinia = createPinia();
   pinia.use(piniaPluginPersistedstate);
   ```

3. 在Store中使用

   ```js
   import { defineStore } from 'pinia';
   
   export const useStore = defineStore(
     'main',
     () => {
       const someState = ref('你好 pinia');
       return { someState };
     },
     {
       persist: true,
     }
   );
   ```


## 13. 项目目录结构

- public：公共静态资源

- src

  - assets：静态资源
  - components：组件
    - CodeEditor.vue：代码编辑器
    - MdViewer.vue：Markdown 浏览
    - QuestionBoard.vue：题目面板（教程区）
    - SQLEditor.vue：SQL 编辑器（练习区）
    - SQLResult.vue：SQL 执行结果（结果区）
  - levels：关卡
    - custom：自定义关卡文件夹
    - main：主线关卡文件夹
    - customLevels.js：自定义关卡列表
    - index.js：定义了关卡相关变量和函数
    - mainLevels.js：主线关卡列表

  - router：路由
    - index.js：路由配置
  - store
    - globalStore.js：全局状态管理
  - utils：核心
    - sqlExecutor.js：SQL 执行引擎
    - result.js：SQL执行结果相关变量和函数

  - views：页面
    - LearnPage.vue：学习页面
    - LevelsPage.vue：关卡页面
    - PlaygroundPage.vue：广场页面
  - App.vue：主页
  - main.js：Vue 主文件

## 14. 项目组件间通信

## 15. Vue3修改img的src属性踩坑

获取dom元素后无法直接通过`xxx.style.src`修改

```vue
<img src="../assets/smile.jpg" alt="" ref="stateImg">

const stateImg = ref(null);

stateImg.value.style.src = '../assets/xxx.png'; //这样修改是错误的
```

应该

```vue
<img src="../assets/smile.jpg" alt="" ref="stateImg">

import xxxImage from '@/assets/xxx.jpg';
const stateImg = ref(null);

stateImg.value.setAttribute('src', xxxImage);
```

`src`是从src目录中寻找

`:src`是从public目录中寻找

## 16. 使用Ant Design Vue的Message组件报错

在使用Hooks调用弹出消息组件并切换路由时，会报错： Uncaught (in promise) TypeError: Cannot read properties of null (reading 'emitsOptions')

默认弹框是关闭的，DOM中没有弹框中的内容。打开弹框再关闭后，弹框中的 DOM 元素没有被销毁，可能会因为不该存在的 DOM 元素而报错

解决办法：使用普通提示



