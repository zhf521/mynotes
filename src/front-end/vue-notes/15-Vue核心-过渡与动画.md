---
title: Vue核心-过渡与动画
order: 15
---

> 本文示例代码：[NoteDemoCode/Vue/15-Vue核心-过渡与动画](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/15-Vue核心-过渡与动画)

## 1. Vue动画的理解

操作 CSS 的 `transition` 或 `animation`

Vue 会给目标元素添加/移除特定的 `class`

## 2. 基本过渡动画的编码

1. 在目标元素外包裹 `<transition name="xxx">`
2. 定义 class 样式
	+ 指定过渡样式：transition
	+ 指定隐藏时的样式：opacity/其它

## 3. 过渡的类名

+ `xxx-enter-active`：指定显示的 transition
+ `xxx-leave-active`：指定隐藏的 transition
+ `xxx-enter`：指定隐藏时的样式

![Vue核心-过渡与动画01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-过渡与动画01.png)

## 4. 过渡代码演示

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>过渡</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <style>
      /* 显示/隐藏的过渡效果 */
      .xxx-enter-active,
      .xxx-leave-active {
        transition: opacity 0.5s;
      }
      /* 隐藏时的样式  */
      .xxx-enter,
      .xxx-leave-to {
        opacity: 0;
      }
      .move-enter-active {
        transition: all 1s;
      }
      .move-leave-active {
        transition: all 3s;
      }
      .move-enter,
      .move-leave-to {
        opacity: 0;
        transition: translateX(20px);
      }
    </style>
  </head>
  <body>
    <div id="demo1">
      <button @click="isShow=!isShow">过渡1</button>
      <transition name="xxx">
        <p v-show="isShow">学前端</p>
      </transition>
    </div>
    <div id="demo2">
      <button @click="isShow=!isShow">过渡2</button>
      <transition name="move">
        <p v-show="isShow">天天学前端</p>
      </transition>
    </div>
    <script>
      new Vue({
        el: '#demo1',
        data() {
          return {
            isShow: true,
          }
        },
      })

      new Vue({
        el: '#demo2',
        data: {
          isShow: true,
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-过渡与动画02.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-过渡与动画02.gif)

## 5. 动画代码演示

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>动画</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <style>
      .bounce-enter-active {
        animation: bounce-in 0.5s;
      }
      .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
      }
      @keyframes bounce-in {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(1.5);
        }
        100% {
          transform: scale(1);
        }
      }
    </style>
  </head>
  <body>
    <div id="example-2">
      <button @click="show = !show">Toggle show</button><br />
      <transition name="bounce">
        <p v-if="show" style="display: inline-block">一直在学前端</p>
      </transition>
    </div>
    <script>
      new Vue({
        el: '#example-2',
        data: {
          show: true,
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-过渡与动画03.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-过渡与动画03.gif)

## 6. 使用第三方动画库

第三方动画库 `Animate.css`

安装第三方库： `npm i animate.css`

使用：直接引用就可以 `import 'animate.css'`

代码演示：
```vue
<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group 
            appear
            name="animate__animated animate__bounce" 
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
        >
            <h1 v-show="!isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">哈哈哈！</h1>
        </transition-group>
    </div>
</template>

<script>
    import 'animate.css'
    export default {
        name:'Test',
        data() {
                return {
                    isShow:true
            }
        },
    }
</script>

<style scoped>
    h1{
        background-color: orange;
    }
</style>
```

## 7. 总结

作用：在插入、更新或移除 DOM 元素时，在合适的时候给元素添加样式类名

写法：  
1. 准备好样式
	+ 元素进入的样式
		+ `v-enter` 进入的起点
		+ `v-enter-active` 进入过程中
		+ `v-enter-to` 进入的终点
	+ 元素离开的样式
		+ `v-leave` 离开的起点
		+ `v-leave-active` 离开过程中
		+ `v-leave-to` 离开的终点  
2. 使用 `<transition>` 包裹要过度的元素，并配置 name 属性，此时需要将上面样式名的 v 换为 name 的值
3. 要让页面一开始就显示动画，需要添加 `appear`

备注：若有多个元素需要过度，则需要使用 `<transition-group>`，且每个元素都要指定 key 值

```vue
<transition-group name="hello" appear>
  <h1 v-show="!isShow" key="1">你好啊！</h1>
  <h1 v-show="isShow" key="2">哈哈哈！</h1>
</transition-group>
```
