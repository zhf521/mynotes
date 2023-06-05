---
title: VueUI组件库
order: 21
---

> 本文示例代码：无

## 1. 常用UI组件库

### 1.1 移动端常用UI组件库

1.  [Vant](https://youzan.github.io/vant)
2. [Cube UI](https://didi.github.io/cube-ui)
3. [Mint UI](http://mint-ui.github.io/)
4. [NutUI](https://nutui.jd.com/#/)

### 1.2 PC端常用UI组件库

1. [Element UI](https://element.eleme.cn/)
2. [IView UI](https://www.iviewui.com/)

## 2. ElementUI基本使用

安装 element-ui：`npm i element-ui`

`src/main.js`

```js
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui' // 引入ElementUI组件库
import 'element-ui/lib/theme-chalk/index.css' // 引入ElementUI全部样式
Vue.config.productionTip = false
Vue.use(ElementUI) // 使用ElementUI
new Vue({
el:"#app",
render: h => h(App),
})
```

`src/App.vue`
```vue
<template>
<div>
<br>
<el-row>
<el-button icon="el-icon-search" circle></el-button>
<el-button type="primary" icon="el-icon-edit" circle></el-button>
<el-button type="success" icon="el-icon-check" circle></el-button>
<el-button type="info" icon="el-icon-message" circle></el-button>
<el-button type="warning" icon="el-icon-star-off" circle></el-button>
<el-button type="danger" icon="el-icon-delete" circle></el-button>
</el-row>
</div>
</template>

<script>
export default {
name:'App',
}
</script>
```

## 3. ElementUI按需引入

安装 babel-plugin-component：`npm i babel-plugin-component -D`

修改`babel-config-js`
```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {        
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

`src/main.js`
```js
import Vue from 'vue'
import App from './App.vue'
import { Button,Row } from 'element-ui'	// 按需引入

Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Row)
 */

new Vue({
    el:"#app",
    render: h => h(App),
})
```
