---
title: Vue核心-Vue生命周期
order: 13
---

> 本文示例代码：[NoteDemoCode/Vue/13-Vue核心-Vue生命周期](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/13-Vue核心-Vue生命周期)

## 1. 引出生命周期

生命周期：
+ 又名生命周期回调函数、生命周期函数、生命周期钩子  
+ 是什么：Vue 在关键时刻帮我们调用的一些特殊名称的函数  
+ 生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的  
+ 生命周期函数中的 this 指向是 vm 或组件实例对象

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>引出生命周期</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2 v-if="a">你好啊</h2>
      <h2 :style="{opacity}">看笔记学Vue</h2>
    </div>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          a: false,
          opacity: 1,
        },
        methods: {},
        // Vue 完成模板的解析并把初始的真实 DOM 元素放入页面后（挂载完毕）调用 mounted
        mounted() {
          console.log('mounted', this)
          setInterval(() => {
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1
          }, 16)
        },
      })

      // 通过外部的定时器实现（不推荐）
      // setInterval(() => {
      // 		vm.opacity -= 0.01
      // 		if(vm.opacity <= 0) vm.opacity = 1
      // },16)
    </script>
  </body>
</html>
```

效果：

![Vue核心-Vue生命周期01.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-Vue生命周期01.gif)

## 2. 分析生命周期

1. 初始化显示
	+ `beforeCreate()`
	+ `created()`
	+ `beforeMount()`
	+ `mounted()`
2. 更新状态
	+ `beforeUpdate()`
	+ `updated()`
3. 销毁 Vue 实例：`vm.$destory()`
	+ `beforeDestory()`
	+ `destoryed()`

![Vue核心-Vue生命周期02.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-Vue生命周期02.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>分析生命周期</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root" :x="n">
      <h2>当前的n值是：{{n}}</h2>
      <button @click="add">点我n+1</button>
      <button @click="bye">点我销毁</button>
    </div>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          n: 1,
        },
        methods: {
          add() {
            console.log('add')
            this.n++
          },
          bye() {
            console.log('bye')
            this.$destroy()
          },
        },
        watch: {
          n() {
            console.log('n变了')
          },
        },
        beforeCreate() {
          console.log('beforeCreate')
        },
        created() {
          console.log('created')
        },
        beforeMount() {
          console.log('beforeMount')
        },
        mounted() {
          console.log('mounted')
        },
        beforeUpdate() {
          console.log('beforeUpdate')
        },
        updated() {
          console.log('updated')
        },
        beforeDestroy() {
          console.log('beforeDestroy')
        },
        destroyed() {
          console.log('destroyed')
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-Vue生命周期03.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-Vue生命周期03.gif)

## 3. 总结生命周期

常用的生命周期钩子：
+ `mounted` 发送 ajax 请求、启动定时器、绑定自定义事件、订阅消息等==初始化操作== 
+ `beforeDestroy` 清除定时器、解绑自定义事件、取消订阅消息等==收尾工作==

关于销毁 Vue 实例：
+ 销毁后借助 Vue 开发者工具看不到任何信息  
+ 销毁后自定义事件会失效，但原生 DOM 事件依然有效  
+ 一般不会在 `beforeDestroy` 操作数据，因为即便操作数据，也不会再触发更新流程了

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>总结生命周期</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2 :style="{opacity}">欢迎学习Vue</h2>
      <button @click="opacity = 1">透明度设置为1</button>
      <button @click="stop">点我停止变换</button>
    </div>
    <script type="text/javascript">
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          opacity: 1,
        },
        methods: {
          stop() {
            this.$destroy()
          },
        },
        // Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
        mounted() {
          console.log('mounted', this)
          this.timer = setInterval(() => {
            console.log('setInterval')
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1
          }, 16)
        },
        beforeDestroy() {
          clearInterval(this.timer)
          console.log('vm即将驾鹤西游了')
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-Vue生命周期04.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-Vue生命周期04.gif)
