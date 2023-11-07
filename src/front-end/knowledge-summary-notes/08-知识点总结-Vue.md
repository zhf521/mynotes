---
title: Vue
order: 8
---

## 1. Vue 基本使用

### 1. vue-cli 创建项目

```bash
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建Vue项目，选择Vue版本
vue create xxx
```

### 2. 插值与指令

详见：[模板语法](https://zhf521.github.io/mynotes/front-end/vue-notes/02-Vue%E6%A0%B8%E5%BF%83-%E6%A8%A1%E6%9D%BF%E8%AF%AD%E6%B3%95.html)

### 3. computed和watch

详见：[计算属性与侦听属性](https://zhf521.github.io/mynotes/front-end/vue-notes/06-Vue%E6%A0%B8%E5%BF%83-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E4%B8%8E%E4%BE%A6%E5%90%AC%E5%B1%9E%E6%80%A7.html)

注意：

- computed 是有缓存的，data 不变就不会重新计算
- watch
  - 如何深度监听：设置`deep:true`
  - 引用类型无法拿到 oldVal

### 4. class 和 style

详见：[绑定样式](https://zhf521.github.io/mynotes/front-end/vue-notes/07-Vue%E6%A0%B8%E5%BF%83-%E7%BB%91%E5%AE%9A%E6%A0%B7%E5%BC%8F.html)

### 5. 条件

详见：[条件渲染](https://zhf521.github.io/mynotes/front-end/vue-notes/08-Vue%E6%A0%B8%E5%BF%83-%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93.html)

- v-if 和 v-show 的区别，以及使用场景 —— 频繁切换用 v-show ，否则用 v-if（不展示的 dom 元素会直接移除）

### 6. 循环

详见：[列表渲染](https://zhf521.github.io/mynotes/front-end/vue-notes/09-Vue%E6%A0%B8%E5%BF%83-%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93%E4%B8%8E%E6%95%B0%E6%8D%AE%E7%9B%91%E8%A7%86.html#_1-%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93)

- 遍历数组，遍历对象
- key
- v-for 和 v-if 不要一起用
  - v-for 会优先于 v-if 执行
  - 因此 v-if 会在每一个 v-for 中都计算一遍
  - v-if 和 v-for 拆开使用

### 7. 事件

详见：[事件处理](https://zhf521.github.io/mynotes/front-end/vue-notes/05-Vue%E6%A0%B8%E5%BF%83-%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86.html)
【注意】vue 事件是被注册到当前 DOM 元素的

- 传参
- event 参数
- 事件修饰符
- 按键修饰符
- 【注意】用 vue 绑定的事件，组建销毁时会自动被解绑。自己绑定的事件，需要自己销毁

事件修饰符：

```html
<!-- 阻止单击事件继续冒泡 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

按键修饰符：

```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```

### 8. 表单

详见：[表单](https://zhf521.github.io/mynotes/front-end/vue-notes/10-Vue%E6%A0%B8%E5%BF%83-%E6%94%B6%E9%9B%86%E8%A1%A8%E5%8D%95%E6%95%B0%E6%8D%AE.html)

- textarea 要用 v-model

修饰符：lazy number trim

## 2. Vue 组件使用

详见：[生命周期](https://zhf521.github.io/mynotes/front-end/vue-notes/13-Vue%E6%A0%B8%E5%BF%83-Vue%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html)

详见：[组件化编程](https://zhf521.github.io/mynotes/front-end/vue-notes/14-Vue%E6%A0%B8%E5%BF%83-Vue%E7%BB%84%E4%BB%B6%E5%8C%96%E7%BC%96%E7%A8%8B.html)

## 3. Vue 高级特性

### 1. 自定义 v-model

详见：[Vue自定义组件如何实现v-model数据双向绑定](https://www.mulianju.com/vue-v-model/)

为了保证数据完整性，Vue在自定义组件的props定义中，只允许父组件向子组件传递数据，子组件不能直接修改props中的数据，在实际项目中有很多需要子组件内部更新属性，并同步给父组件的情况，也就是v-model数据双向绑定，那自定义组件如何实现v-model数据双向绑定呢？

在 Vue 中,自定义组件可以通过 props 传递数据,然后通过 emit 触发事件向父级组件发送更新。这样就可以实现类似 v-model 的双向绑定效果。
具体步骤如下:

1. 在自定义组件中定义一个 prop 用于接收值,例如:

   ```js
   props: ['value'] 
   ```

2. 在自定义组件中维护该值的内部状态,例如:

   ```js
   data() {
     return {
       innerValue: this.value 
     }
   }
   ```

3. 在自定义组件中定义一个 model 属性,例如:

   ```js
   model: {
     prop: 'value',
     event: 'input'
   }
   ```

4. 然后在内部状态发生变化时触发该事件,例如:

   ```js
   this.$emit('input', this.innerValue) 
   ```

5. 最后,在使用自定义组件的父级组件中,使用 v-model 双向绑定 prop 和 emit,例如:

   ```html
   <my-component v-model="someValue"></my-component> 
   ```

这相当于:

```
<my-component 
  :value="someValue"
  @input="someValue = $event"
></my-component>
```

通过这 5 个步骤,我们就实现了自定义组件的 v-model 效果,以下是一个完整示例:

父组件:

```
<template>
  <my-component v-model="message"></my-component>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello' 
    }
  }
}
</script>
```

自定义组件:

```
<template>
  <input type="text" :value="innerValue" @input="onInput">
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      innerValue: this.value 
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  }
  methods: {
    onInput(e) {
      this.innerValue = e.target.value 
      this.$emit('input', this.innerValue)
    }
  }
}
</script>
```

### 2. $nextTick

详见：[$nextTick](https://zhf521.github.io/mynotes/front-end/vue-notes/17-Vue%E6%A0%B8%E5%BF%83-%E5%85%B6%E5%AE%83%E5%B0%8F%E7%9F%A5%E8%AF%86.html#_6-nexttick)

### 3. slot

详见：[插槽](https://zhf521.github.io/mynotes/front-end/vue-notes/18-Vue%E6%A0%B8%E5%BF%83-slot%E6%8F%92%E6%A7%BD.html)

**作用域插槽**

即子组件管理数据，父组件通过插槽的作用域来获取。

**具名插槽**

```html
<!-- NamedSlot 组件 -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

```html
<NamedSlot>
  <template v-slot:header> <!-- 缩写 <template #header> -->
    <h1>将插入 header slot 中</h1>
  </template>

  <p>将插入到 main slot 中，即未命名的 slot</p>

  <template v-slot:footer>
    <p>将插入到 footer slot 中</p>
  </template>
</NamedSlot>
```

### 4. 动态组件

关键代码如下，其中 `TplDemoName` 要有定义

```html
<component v-bind:is="TplDemoName"></component>
```

```js
import TplDemo from '../BaseUse/TplDemo'

export default {
    components: {
        TplDemo
    },
    data() {
        return {
            TplDemoName: 'TplDemo'
        }
    }
}
```

### 5. 异步组件

`import()`函数实现

### 6. keep-alive

缓存组件

使用`<keep-alive></keep-alive>`包裹

### 7. mixin

详见：[混入](https://zhf521.github.io/mynotes/front-end/vue-notes/17-Vue%E6%A0%B8%E5%BF%83-%E5%85%B6%E5%AE%83%E5%B0%8F%E7%9F%A5%E8%AF%86.html#_3-mixin%E6%B7%B7%E5%85%A5)

【注意】mixin 不是完美的解决方案，**它的变量作用域不明确**

vue3 的 composition API 也是想解决这个问题

## 4. Vuex

详见：[Vuex](https://zhf521.github.io/mynotes/front-end/vue-notes/22-Vuex.html)

## 5. VueRouter 使用

- vue-router
- 动态路由
- to 和 push
- hash 和 history
- 懒加载（配合动态组件）

详见：[VueRouter](https://zhf521.github.io/mynotes/front-end/vue-notes/23-VueRouter.html)

