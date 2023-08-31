---
title: BeatSQL项目
order: 1
---

## 1. 引入normalize.css

在项目中引入`normalize.css`可以清楚默认样式

方法：

1. 在Vue项目中安装`normalize.css`

   ```js
   npm install normalize.css
   ```

2. 在项目的入口文件（如：main.js）中引入

   ```js
   import 'normalize.css'
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

   ```js
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

   ```js
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

