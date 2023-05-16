---
title: Vue核心-绑定样式
sticky: -7
---

> 本文示例代码：[NoteDemoCode/Vue/07-Vue核心-绑定样式](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/07-Vue核心-绑定样式)

# 绑定 class 样式

```js
:class="xxx" //xxx 可以是字符串、数组、对象  
```

## 字符串写法

字符串写法适用于：类名不确定，要动态获取  

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>绑定class样式-字符串写法</title>
    <style>
      .basic {
        width: 400px;
        height: 100px;
        border: 1px solid black;
      }

      .happy {
        border: 4px solid red;
        background-color: rgba(255, 255, 0, 0.644);
        background: linear-gradient(30deg, yellow, pink, orange, yellow);
      }

      .sad {
        border: 4px dashed rgb(2, 197, 2);
        background-color: gray;
      }

      .normal {
        background-color: skyblue;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
      <div class="basic" :class="mood" @click="changeMood">{{name}}</div>
    </div>
    <script>
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          name: 'zhf',
          mood: 'normal',
        },
        methods: {
          changeMood() {
            const arr = ['happy', 'sad', 'normal']
            const index = Math.floor(Math.random() * 3)
            this.mood = arr[index]
          },
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-绑定样式01.gif](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-绑定样式01.gif)

## 数组写法

数组写法适用于：要绑定多个样式，个数不确定，名字也不确定  

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>绑定class样式-数组写法</title>
    <style>
      .basic {
        width: 400px;
        height: 100px;
        border: 1px solid black;
      }
      .zhf1 {
        background-color: yellowgreen;
      }
      .zhf2 {
        font-size: 30px;
        text-shadow: 2px 2px 10px red;
      }
      .zhf3 {
        border-radius: 20px;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器-->
    <div id="root">
      <!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
      <div class="basic" :class="classArr">{{name}}</div>
    </div>
    <script>
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          name: 'zhf',
          classArr: ['zhf1', 'zhf2', 'zhf3'],
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-绑定样式02.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-绑定样式02.png)

## 对象写法

对象写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>绑定class样式-对象写法</title>
    <style>
      .basic {
        width: 400px;
        height: 100px;
        border: 1px solid black;
      }
      .zhf1 {
        background-color: yellowgreen;
      }
      .zhf2 {
        font-size: 30px;
        text-shadow: 2px 2px 10px red;
      }
      .zhf3 {
        border-radius: 20px;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器-->
    <div id="root">
      <!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
      <div class="basic" :class="classObj">{{name}}</div>
    </div>
    <script type="text/javascript">
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          name: 'zhf',
          classObj: {
            zhf1: true,
            zhf2: false,
            zhf3: true,
          },
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-绑定样式03.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-绑定样式03.png)

# 绑定 style 样式

```js
:style="xxx"
```

样式对象中的 key，必须是存在的 CSS 属性，如 fontSize、backgroundColor（小驼峰命名法）

## 对象写法

`:style="对象"`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>绑定style样式-对象写法</title>
    <style>
      .basic {
        width: 400px;
        height: 100px;
        border: 1px solid black;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器-->
    <div id="root">
      <!-- 绑定style样式--对象写法 -->
      <div class="basic" :style="styleObj, styleObj2">{{name}}</div>
    </div>
    <script type="text/javascript">
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          name: 'zhf',
          styleObj: {
            fontSize: '40px',
            color: 'red',
          },
          styleObj2: {
            backgroundColor: 'orange',
          },
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-绑定样式04.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-绑定样式04.png)

## 数组写法

`:style="数组"`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>绑定style样式-数组写法</title>
    <style>
      .basic {
        width: 400px;
        height: 100px;
        border: 1px solid black;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器-->
    <div id="root">
      <!-- 绑定style样式--数组写法 -->
      <div class="basic" :style="styleArr">{{name}}</div>
    </div>
    <script type="text/javascript">
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          name: 'zhf',
          styleArr: [
            {
              fontSize: '40px',
              color: 'blue',
            },
            {
              backgroundColor: 'gray',
            },
          ],
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-绑定样式05.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-绑定样式05.png)
