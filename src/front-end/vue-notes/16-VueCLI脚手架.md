---
title: VueCLI脚手架
order: 16
---

> 本文示例代码：[NoteDemoCode/Vue/16-VueCLI脚手架](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/16-VueCLI脚手架)

## 1. 说明

+ Vue 脚手架是 Vue 官方提供的标准化开发工具（开发平台）  
+ 文档 [Vue CLI](https://cli.vuejs.org/zh/)

## 2. 具体步骤

1. 如果下载缓慢请配置 npm 淘宝镜像  
```
npm config set registry http://registry.npm.taobao.org
```
2. 全局安装 @vue/cli 
```
npm install -g @vue/cli
```
3. 切换到创建项目的目录，使用命令创建项目
```
vue create xxx
```
4. 选择使用 vue 的版本  
5. 启动项目
```
npm run serve
```
6. 打包项目
```
npm run build 
```
7. 暂停项目 `Ctrl+C`

注意：Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpack 配置，请执行`vue inspect > output.js`

## 3. 脚手架文件结构

```markdown
.文件目录
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   └── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
└── package-lock.json: 包版本控制文件
```

`src/components/School.vue`
```vue
<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>
<script>
export default {
  name: "School",
  data() {
    return {
      name: "QFNU",
      address: "曲阜",
    }
  },
  methods: {
    showName() {
      alert(this.name)
    }
  }
}
</script>
<style>
.demo {
  background-color: orange;
}
</style>
```

`src/components/Student.vue`
```vue
<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>
<script>
export default {
  name: "Student",
  data() {
    return {
      name: "zhf",
      age: 18,
    }
  }
}
</script>
```

`src/App.vue`

```vue
<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
//引入组件
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    School, Student
  }
}
</script>
```

`src/main.js`
```js
// 该文件是整个项目的入口文件

import Vue from 'vue'				// 引入Vue
import App from './App.vue'	// 引入App组件，它是所有组件的父组件

Vue.config.productionTip = false

new Vue({
	el:'#app',
  render: h => h(App),			// render函数完成了这个功能：将App组件放入容器中
})// .$mount('#app')
```

`public/index.html`
```html
<!DOCTYPE html>
<html lang="">
    <head>
        <meta charset="UTF-8">
      
        <!-- 针对IE浏览器的特殊配置，含义是让IE浏览器以最高渲染级别渲染页面 -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
      
        <!-- 开启移动端的理想端口 -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
        <!-- 配置页签图标  <%= BASE_URL %> 是public所在路径，使用绝对路径 -->
        <link rel="icon" href=" <%= BASE_URL %> favicon.ico">
      
        <!-- 配置网页标题 -->
        <title> <%= htmlWebpackPlugin. options. title %> </title>
    </head>
    <body>
      
      	<!-- 当浏览器不支持js时，noscript中的元素就会被渲染 -->
      	<noscript>
      		<strong>We're sorry but  <%= htmlWebpackPlugin. options. title %>  doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    		</noscript>
          
        <!-- 容器 -->
        <div id="app"></div>
    </body>
</html>
```

效果：

![VueCLI脚手架01.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/VueCLI脚手架01.gif)

## 4. render函数

render 是一个函数，应用于残缺版 vue, 能够接收参数 createElement (类型是一个函数)，借助它来渲染内容 

```js
render(createElement){  
//createElement创建标签<h1>你好啊</h1>  
return createElement('h1','你好啊')
}
```
简写为： 
```js
render p=>p('h1','你好啊')  
// 如果只有模板的话可直接写为如下格式
render p=>p(App) //App是以一个模板的名称  
```

```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  // render函数功能：将App组件放入容器中
  // 简写形式
  render: h => h(App),
  // 完整形式
  // render(createElement){
  //   return createElement(App)
  // }
})
```

## 5. 关于不同版本的函数

+ `vue.js` 与 `vue.runtime.xxx.js` 的区别  
	+ `vue.js` 是完整版的 Vue，包含：核心功能+模板解析器
	+ `vue.runtime.xxx.js` 是运行版的 Vue，只包含核心功能，没有模板解析器  
+ 因为 `vue.runtime.xxx.js` 没有模板解析器，所以不能使用 template 配置项，需要使用 render 函数接收到的 createElement 函数去指定具体内容

## 6. vue.config.js配置文件

`vue inspect > output.js`命令可以查看到 Vue 脚手架的默认配置  

使用 `vue.config.js` 可以对脚手架进行个性化定制，和 `package.json` 同级目录，详见 [配置参考 | Vue CLI](https://cli.vuejs.org/zh/config/#vue-config-js)

```js
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js' // 入口
    }
  },
  lintOnSave: false	// 关闭语法检查
}
```
