---
title: Vue核心-数据绑定
order: 3
---

> 本文示例代码：[NoteDemoCode/Vue/03-Vue核心-数据绑定](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/03-Vue核心-数据绑定)

## 数据绑定

Vue 中有两种数据绑定的方式：
+ 单向绑定 `v-bind` 数据只能从 data 流向页面
+ 双向绑定 `v-model` 数据不仅能从 data 流向页面，还可以从页面流向 data

备注：
+ 双向绑定一般都应用在表单类元素上，如 `<input>`、`<select>`、`<textarea>` 等
+ `v-model:value` 可以简写为 `v-model`，因为 `v-model` 默认收集的就是 value 值

例：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>数据绑定</title>
    <!-- 引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <!-- 普通写法 -->
      <!-- 单向数据绑定：<input type="text" v-bind:value="name" /><br /> -->
      <!-- 双向数据绑定：<input type="text" v-model:value="name" /> -->
      <!-- 简写 -->
      单向数据绑定：<input type="text" :value="name" /><br />
      双向数据绑定：<input type="text" v-model="name" />
    </div>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          name: 'zhf',
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-数据绑定01.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-数据绑定01.gif)

## v-model 指令的修饰符

### v-model. number

使用修饰符 `.number` 可以将输入的数据转换为 Number 类型，否则虽然你输入的是数字. 但它的类型其实是 String

### v-model. trim

给 v-model 添加修饰符 `.trim` 可以自动过滤用户输入的首尾空格

### v-model. lazy

并不是实时改变，而是在失去焦点或者按回车时才会更新

在输入框中，v-model默认是在input事件中同步输入框的数据（除了输入法中文输入的情况），使用修饰符 `.lazy` 会转变为 change 事件中同步（类似懒加载）
