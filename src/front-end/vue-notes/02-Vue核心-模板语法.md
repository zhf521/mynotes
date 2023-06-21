---
title: 模板语法
order: 2
---

> 本文示例代码：[NoteDemoCode/Vue/02-Vue核心-模板语法](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/02-Vue核心-模板语法)

## 1. 模板的理解

模板就是动态 HTML 页面，这里面包含了一些 JS 语法代码

## 2. Vue模板语法

Vue 模板语法包括两大类，分别是：
+ 插值语法：双大括号表示
+ 指令语法：指令（以 `v-` 开头的自定义标签属性）

### 2.1 插值语法

功能：用于解析标签体内容

写法：`{{xxx}}`，`xxx` 是 JS 表达式，可以直接读取到 data 中的所有属性

### 2.2 指令语法

功能：用于解析标签（包括：标签属性、标签体内容、绑定事件等）

举例：`<a v-bind:href="xxx">` 或简写为 `<a :href='xxx'>`，`xxx` 同样要写 JS 表达式，可以直接读取到 data 中所有属性

备注：Vue 中有很多的指令，且形式都是 `v-xxx`，此处只是以 `v-bind` 举例

例：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>模板语法</title>
    <!-- 引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2>插值语法</h2>
      <h4>你好，{{ name }}</h4>
      <hr />
      <h2>指令语法</h2>
      <a v-bind:href="baidu.url.toUpperCase()">点我去{{ baidu.name }}1</a>
      <a :href="baidu.url">点我去{{ baidu.name }}2</a>
    </div>
  </body>
  <script type="text/javascript">
    Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
    new Vue({
      el: '#root',
      data: {
        name: 'zhf',
        baidu: {
          name: '百度',
          url: 'https://www.baidu.com/',
        },
      },
    })
  </script>
</html>
```

效果：

![Vue核心-模板语法01.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-模板语法01.gif)
