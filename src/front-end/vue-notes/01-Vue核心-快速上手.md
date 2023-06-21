---
title: 快速上手
order: 1 
---

> 本文示例代码：[NoteDemoCode/Vue/01-Vue核心-快速上手](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/01-Vue核心-快速上手)

## 1. Vue简介

### 1.1 官网

[英文官网](https://vuejs.org)

[中文官网](https://cn.vuejs.org/)

### 1.2 介绍与描述

+ Vue 是一套用来动态构建用户界面的渐进式 JavaScript 框架
	+ 构建用户界面：把数据通过某种办法变成用户界面
	+ 渐进式：Vue 可以自底向上逐层的应用，简单应用只需要一个轻量小巧的核心库，复杂应用可以引入各式各样的 Vue 插件
+ 作者
	+ 尤雨溪

### 1.3 Vue的特点

1. 遵循 `MVVM` 模式
2. 编码简洁，体积小，运行效率高，适合移动/PC 端开发
3. 它本身只关注 UI，可以引入其它第三方库开发项目
4. 采用组件化模式，提高代码复用率、且让代码更好维护
5. 声明式编码，让编码人员无需直接操作 DOM，提高开发效率
6. 使用虚拟 DOM 和 Diff 算法，尽量复用 DOM 节点

### 1.4 与其他 JS 框架的关联

+ 借鉴 angular 的模板和数据绑定技术 
+ 借鉴 react 的组件化和虚拟 DOM 技术

### 1.5 Vue周边库

+ vue-cli：vue 脚手架  
+ vue-resource (axios)：ajax 请求  
+ vue-router：路由  
+ vuex：状态管理（它是 vue 的插件，但是没有用 vue-xxx 的命名规则）  
+ vue-lazyload：图片懒加载  
+ vue-scroller：页面滑动相关  
+ mint-ui：基于 vue 的 UI 组件库（移动端）  
+ element-ui：基于 vue 的 UI 组件库（PC 端）

## 2. 初识Vue

### 2.1 前置工作

1. 给浏览器安装 `Vue Devtools` 插件   
2. 标签引入 Vue 包  
3. （可选）阻止 Vue 在启动时生成生产提示 `Vue.config.productionTip = false`

### 2.2 代码演示

1. 想让 Vue 工作，就必须创建一个 `Vue实例`，且要传入一个配置对象
2. 容器里的代码依然符合 HTML 规范，只不过混入了一些特殊的 Vue 语法
3. 容器里的代码被称为 Vue 模板
4. Vue 实例与容器是一一对应的
5. 真实开发中只有一个 Vue 实例，并且会配合着组件一起使用
6. `{{xxx}}` 中的 `xxx` 要写 JS 表达式，且 `xxx` 可以自动读取到 data 中的所有属性
7. 一旦 data 中的数据发生变化，那么页面中用到该数据的地方也会自动更新

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>初识Vue</title>
    <!-- 引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="demo">
      <h1>Hello，{{ name.toUpperCase() }}，{{ address }}</h1>
    </div>
    <script type="text/javascript">
      Vue.config.productionTip = false //阻止 Vue 在启动时生成生产提示
      // 创建Vue实例
      new Vue({
        el: '#demo', // el用于指定当前Vue实例为哪个容器服务，值通常为CSS选择器字符串
        data: {
          // data中用于存储数据，数据供el所指定的容器去使用，值暂时先写成一个对象
          name: 'zhf',
          address: '山东',
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-快速上手01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-快速上手01.png)

注意区分：JS 表达式和 JS 代码（语句）
1. JS 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方，如：`a`、`a+b`、`demo(1)`、`x === y ? 'a' : 'b'`  
2. JS 代码（语句），只控制代码的走向，不生成值，如：`if (){}`、`for (){}`  

### 2.3 el和data

el 用于指定当前 Vue 实例为哪个容器服务，值通常为 CSS 选择器字符串

data 中用于存储数据，数据供 el 所指定的容器去使用，值暂时先写成一个对象

el 有两种写法：
+ 创建 Vue 实例对象的时候配置 el 属性
```js
const v = new Vue({
	el:'#root', //第一种写法
	data:{
		name:'zhf'
	}
})
```
+ 先创建 Vue 实例，随后再通过 `v.$mount('选择器')` 指定 el 的值
```js
const v = new Vue({
	data:{
		name:'zhf'
	}
})
v.$mount('#root') //第二种写法
```

data 有两种写法：
+ 对象式：`data:{}`
```html
data:{
	name:'zhf'
} 
```
+ 函数式：`data(){return{}}`
```html
data(){
	console.log('@@@',this) //此处的this是Vue实例对象
	return{
		name:'zhf'
	}
}
```

如何选择：组件时，data 必须使用函数式，否则会报错

==重要原则：由 Vue 管理的函数，一定不要写箭头函数，否则 this 就不再是 Vue 实例了==
