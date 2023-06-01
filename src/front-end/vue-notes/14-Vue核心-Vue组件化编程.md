---
title: Vue核心-Vue组件化编程
order: 14
---

## 1. 模块与组件、模块化与组件化

![Vue核心-Vue组件化编程01.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-Vue组件化编程01.png)

![Vue核心-Vue组件化编程02.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-Vue组件化编程02.png)

### 模块  

+ 理解：向外提供特定功能的 js 程序，一般就是一个 js 文件  
+ 为什么：js 文件很多，很复杂  
+ 作用：复用、简化 js 的编写，提高 js 运行效率  

### 组件 

+ 定义：用来实现局部功能的代码和资源的集合（html/css/js/image…）  
+ 为什么：一个界面的功能很复杂  
+ 作用：复用编码，简化项目编码，提高运行效率  

### 模块化 

当应用中的 js 都以模块来编写的，那这个应用就是一个模块化的应用  

### 组件化  

当应用中的功能都是多组件的方式来编写的，那这个应用就是一个组件化的应用

## 非单文件组件

非单文件组件：一个文件中包含有 n 个组件   
单文件组件：一个文件中只包含有 1 个组件  

### 基本使用

Vue 中使用组件的三大步骤：
+ 定义组件  
	+ 使用 `Vue.extend(options)` 创建，其中 `options` 和 `new Vue(options)` 时传入的 `options` 几乎一样，但也有点区别
		+ `el` 不要写，因为最终所有的组件都要经过一个 vm 的管理，由 vm 中的 `el` 才决定服务哪个容器  
		+ `data` 必须写成函数式，避免组件被复用时，数据存在引用关系  
+ 注册组件  
	+ 局部注册：`new Vue()` 的时候 `options` 传入 `components` 选项
	+ 全局注册：`Vue.component('组件名',组件)`  
+ 使用组件
	+ 编写组件标签，如 `<school></school>`

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>基本使用</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
</head>

<body>
  <!-- 准备好一个容器-->
  <div id="root">
    <hello></hello>
    <hr>
    <h1>{{msg}}</h1>
    <hr>
    <!-- 第三步：编写组件标签 -->
    <school></school>
    <hr>
    <!-- 第三步：编写组件标签 -->
    <student></student>
  </div>

  <div id="root2">
    <hello></hello>
  </div>
</body>

<script type="text/javascript">
  Vue.config.productionTip = false

  //第一步：创建school组件
  const school = Vue.extend({
    template: `
        <div class="demo">
            <h2>学校名称：{{schoolName}}</h2>
            <h2>学校地址：{{address}}</h2>
            <button @click="showName">点我提示学校名</button>	
        </div>
	`,
    // el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
    data() {
      return {
        schoolName: '尚硅谷',
        address: '北京昌平'
      }
    },
    methods: {
      showName() {
        alert(this.schoolName)
      }
    },
  })

  //第一步：创建student组件
  const student = Vue.extend({
    template: `
        <div>
            <h2>学生姓名：{{studentName}}</h2>
            <h2>学生年龄：{{age}}</h2>
        </div>
	`,
    data() {
      return {
        studentName: '张三',
        age: 18
      }
    }
  })

  //第一步：创建hello组件
  const hello = Vue.extend({
    template: `
        <div>	
            <h2>你好啊！{{name}}</h2>
        </div>
	`,
    data() {
      return {
        name: 'Tom'
      }
    }
  })

  //第二步：全局注册组件
  Vue.component('hello', hello)

  //创建vm
  new Vue({
    el: '#root',
    data: {
      msg: '你好啊！'
    },
    //第二步：注册组件（局部注册）
    components: {
      school,
      student
    }
  })

  new Vue({
    el: '#root2',
  })
</script>

</html>
```

### 组件注意事项

关于组件名：
+ 一个单词组成
	+ 第一种写法（首字母小写）：school  
	+ 第二种写法（首字母大写）：School 
+ 多个单词组成
	+ 第一种写法（kebab-case 命名）：my-school  
	+ 第二种写法（CamelCase 命名）：MySchool（需要 Vue 脚手架支持）
+ 备注 
	+ 组件名尽可能回避 HTML 中已有的元素名称，例如：`h2`、`H2` 都不行
	+ 可以使用 `name` 配置项指定组件在开发者工具中呈现的名字   

关于组件标签：
+ 第一种写法：`<school></school>` 
+ 第二种写法：`<school/>`（需要 Vue 脚手架支持） 
+ 备注：不使用脚手架时，`<school/>` 会导致后续组件不能渲染  

一个简写方式：`const school = Vue.extend(options)` 可简写为 `const school = options`，因为父组件 `components` 引入的时候会自动创建

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>几个注意点</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
</head>

<body>
  <!-- 准备好一个容器-->
  <div id="root">
    <h1>{{msg}}</h1>
    <school></school>
  </div>
</body>

<script type="text/javascript">
  Vue.config.productionTip = false

  //定义组件
  const s = Vue.extend({
    name: 'atguigu',
    template: `
        <div>
            <h2>学校名称：{{name}}</h2>	
            <h2>学校地址：{{address}}</h2>	
        </div>
	`,
    data() {
      return {
        name: '尚硅谷',
        address: '北京'
      }
    }
  })

  new Vue({
    el: '#root',
    data: {
      msg: '欢迎学习Vue!'
    },
    components: {
      school: s
    }
  })
</script>

</html>
```

### 组件的嵌套

![Vue核心-Vue组件化编程03.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-Vue组件化编程03.png)

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>组件的嵌套</title>
  <!-- 引入Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
</head>

<body>
  <!-- 准备好一个容器-->
  <div id="root">

  </div>
</body>

<script type="text/javascript">
  Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

  //定义student组件
  const student = Vue.extend({
    name: 'student',
    template: `
        <div>
            <h2>学生姓名：{{name}}</h2>	
            <h2>学生年龄：{{age}}</h2>	
        </div>
	`,
    data() {
      return {
        name: '尚硅谷',
        age: 18
      }
    }
  })

  //定义school组件
  const school = Vue.extend({
    name: 'school',
    template: `
        <div>
            <h2>学校名称：{{name}}</h2>	
            <h2>学校地址：{{address}}</h2>	
            <student></student>
        </div>
	`,
    data() {
      return {
        name: '尚硅谷',
        address: '北京'
      }
    },
    //注册组件（局部）
    components: {
      student
    }
  })

  //定义hello组件
  const hello = Vue.extend({
    template: `<h1>{{msg}}</h1>`,
    data() {
      return {
        msg: '欢迎来到尚硅谷学习！'
      }
    }
  })

  //定义app组件
  const app = Vue.extend({
    template: `
        <div>	
            <hello></hello>
            <school></school>
        </div>
	`,
    components: {
      school,
      hello
    }
  })

  //创建vm
  new Vue({
    template: '<app></app>',
    el: '#root',
    //注册组件（局部）
    components: {
      app
    }
  })
</script>

</html>
```

### VueComponent

关于 VueComponent：
+ school 组件本质是一个名为 VueComponent 的构造函数，且不是程序员定义的，而是 `Vue.extend()` 生成的
+ 我们只需要写 `<school/>` 或 `<school></school>`，Vue 解析时会帮我们创建 school 组件的实例对象，即 Vue 帮我们执行的 `new VueComponent(options)`
+ 每次调用 `Vue.extend`，返回的都是一个全新的 VueComponent，即不同组件是不同的对象
+ 关于 this 指向
	+ 组件配置中 data 函数、methods 中的函数、watch 中的函数、computed 中的函数它们的 this 均是 VueComponent 实例对象
	+ `new Vue(options)` 配置中：data 函数、methods 中的函数、watch 中的函数、computed 中的函数它们的 this 均是 Vue 实例对象
+ VueComponent 的实例对象，以后简称 vc（组件实例对象），Vue 的实例对象，以后简称 vm

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>VueComponent</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
</head>

<body>
  <!-- 准备好一个容器-->
  <div id="root">
    <school></school>
    <hello></hello>
  </div>
</body>

<script type="text/javascript">
  Vue.config.productionTip = false

  //定义school组件
  const school = Vue.extend({
    name: 'school',
    template: `
        <div>
            <h2>学校名称：{{name}}</h2>	
            <h2>学校地址：{{address}}</h2>	
            <button @click="showName">点我提示学校名</button>
        </div>
        `,
    data() {
      return {
        name: '尚硅谷',
        address: '北京'
      }
    },
    methods: {
      showName() {
        console.log('showName', this)
      }
    },
  })

  const test = Vue.extend({
    template: `<span>atguigu</span>`
  })

  //定义hello组件
  const hello = Vue.extend({
    template: `
        <div>
            <h2>{{msg}}</h2>
            <test></test>	
        </div>
    `,
    data() {
      return {
        msg: '你好啊！'
      }
    },
    components: {
      test
    }
  })


  // console.log('@',school)
  // console.log('#',hello)

  //创建vm
  const vm = new Vue({
    el: '#root',
    components: {
      school,
      hello
    }
  })
</script>

</html>
```

### 一个重要的内置关系

![Vue核心-Vue组件化编程04.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-Vue组件化编程04.png)

+ 一个重要的内置关系：`VueComponent.prototype.__proto__ === Vue.prototype`
+ 为什么要有这个关系：让组件实例对象 vc 可以访问到 `Vue原型` 上的属性、方法

## 单文件组件

### 组成

模板页面：
```html
<template>
	页面模板
</template>
```

JS 模块对象：
```html
<script>
export default {
    data() {return {}},
    methods: {},
    computed: {},
    components: {}
}
</script>
```

样式：
```html
<style>
    样式定义
</style>
```

### 基本使用

1.  引入组件
2.  映射成标签
3.  使用组件标签

`School.vue`
```vue
<template>
    <div id='Demo'>
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'QFNU',
                address:'曲阜'
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        },
    }
</script>

<style>
    #Demo{
        background: orange;
    }
</style>
```

`Student.vue`
```vue
<template>
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'zhf',
                age:21
            }
        },
    }
</script>
```

`App.vue`
```vue
<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    import School from './School.vue'
    import Student from './Student.vue'

    export default {
        name:'App',
        components:{
            School,
            Student
        }
    }
</script>
```

`main.js`
```js
import App from './App.vue'

new Vue({
    template:`<App></App>`,
    el:'#root',
    components:{App}
})
```

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>单文件组件练习</title>
</head>
<body>
    <div id="root"></div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="./main.js"></script>
</body>
</html>
```

此时无法运行，应该使用脚手架才可以

## 组件化编码流程

1. 拆分静态组件：组件要按照功能点拆分，命名不要与 html 元素冲突
2. 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用

	+ 一个组件在用：放在组件自身即可
	+ 一些组件在用：放在他们共同的父组件上（状态提升）  
3. 实现交互：从绑定事件开始 
