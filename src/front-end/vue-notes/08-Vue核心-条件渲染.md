---
title: 条件渲染
order: 8
---

> 本文示例代码：[NoteDemoCode/Vue/08-Vue核心-条件渲染](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/08-Vue核心-条件渲染)

v-if  
+ 写法跟 if else 语法类似  
	+ `v-if="表达式"`  
	+ `v-else-if="表达式"`  
	+ `v-else`  
+ 适用于：切换频率较低的场景，因为不展示的 DOM 元素直接被移除   
+ 注意：`v-if` 可以和 `v-else-if` `v-else` 一起使用，但要求结构不能被打断   

v-show 
+ 写法：`v-show="表达式"`  
+ 适用于：切换频率较高的场景  
+ 特点：不展示的 DOM 元素未被移除，仅仅是使用样式隐藏掉 `display:none;`

备注：
+ 使用 `v-if` 的时，元素可能无法获取到，而使用 `v-show` 一定可以获取到  
+ template 标签不影响结构，页面 html 中不会有此标签，但只能配合 v-if，不能配合 v-show 

例：

v-if
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>条件渲染v-if</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2>当前的n值是：{{n}}</h2>
      <button @click="n++">点我n+1</button>
      <!-- 使用v-if做条件渲染 -->
      <h2 v-if="false">欢迎来到{{name}}</h2>
      <h2 v-if="1 === 1">欢迎来到{{name}}</h2>
      <!-- v-else和v-else-if -->
      <div v-if="n === 1">A</div>
      <div v-else-if="n === 2">B</div>
      <div v-else-if="n === 3">C</div>
      <div v-else>哈哈哈</div>
      <!-- v-if与template的配合使用 -->
      <template v-if="n === 1">
        <h3>你好</h3>
        <h3>QFNU</h3>
        <h3>曲阜</h3>
      </template>
    </div>
    <script>
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          name: 'QFNU',
          n: 0,
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-条件渲染01.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-条件渲染01.gif)

v-show
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>条件渲染v-show</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2>当前的n值是:{{ n }}</h2>
      <button @click="n++">点我n+1</button>
      <!-- 使用v-show做条件渲染 -->
      <h2 v-show="false">欢迎来到{{name}}</h2>
      <h2 v-show="n===1">欢迎来到{{name}}</h2>
    </div>
    <script type="text/javascript">
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          name: 'QFNU',
          n: 0,
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-条件渲染02.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-条件渲染02.gif)
