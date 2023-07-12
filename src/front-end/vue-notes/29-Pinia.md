---
title: Pinia
order: 29
---

Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态，类似vuex

## 1. 安装Pinia

在项目中安装：

```bash
yarn add pinia
# or with npm
npm install pinia
```

## 2. 创建Pinia实例并挂载

在`src/main.ts`中创建pinia实例并挂载到Vue实例上

```typescript
import { createApp } from 'vue'
// 引入 createPinia
import { createPinia } from 'pinia'
import App from './App.vue'

// 创建pinia 实例
const pinia = createPinia()
const app = createApp(App)
// 挂载到根实例上
app.use(pinia)
app.mount('#app')
```

## 3. 定义Store

store 是使用`defineStore()` 定义的，第一个参数是整个应用中store的唯一名称(id)

> 建议：可以为defineStore()的返回值任意命名，但是最好使用use加上store的名称和Store，例如：useUserStore、useCartStore、useProductStore

```typescript
import { defineStore } from 'pinia'
//定义容器
export const useMainStore = defineStore('main', {
  // 具体代码...
})
```

## 4. Store中的选项

类似于Vue的选项式API，也可以传递一个带有state、actions和getters属性的选项对象

state就类似于组件的 data ，用来存储全局状态的，getters就类似于组件的 computed，用来封装计算属性，有缓存功能，actions类似于组件的 methods，用来封装业务逻辑，修改 state

```typescript
export const useMainStore = defineStore('main', {
  state: () => ({ 
      
  }),
  getters: {
    
  },
  actions: {
      
  },
})
```

## 5. 基本使用

如果在组件中使用，需要先将store引入，并在setup中声明调用，使用模板语法即可在模板中使用

```vue
<template>
  {{ mainStore.count }}
  {{ mainStore.foo }}
</template>

<script setup lang="ts">
//导入定义的store
import { useMainStore } from '../store'
//获取容器中的state
const mainStore = useMainStore()
//从store中取值
console.log(mainStore.count)
</script>
```

如果取多个值时，每次都需要mainStore，这样就很麻烦

我们想到用结构赋值，但是这样取出来的数据是有问题的，它已经丢失了响应式，也就是一次性的

```typescript
// Pinia 其实就是把 state 数据都做了 reactive 处理了
const { count, foo } = mainStore
```

就像上面这段代码，解构出来的数据就已经失去了响应式，如果之后对数据的修改Vue是无法监测到数据变化的

解决办法：这里就需要使用Pinia为我们提供的`storeToRefs()`API

```vue
<template>
  {{ mainStore.count }}
  {{ mainStore.foo }}
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
//导入定义的store
import { useMainStore } from '../store'
//获取容器中的state
const mainStore = useMainStore()
const { count, foo } = storeToRefs(mainStore)
</script>
```

## 6. 状态更新和Actions

Actions相当于组件中的方法

它们可以使用`defineStore()`中的actions属性来定义，并且它们非常适合定义业务逻辑

有四种方法来修改数据

例如：这里我们需要修改state中的count、foo、arr

```typescript
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 100,
    foo: 'bar',
    arr: [1, 2, 3],
  }),
  ...
}
```

```vue
<template>
    <p>{{ count }}</p>
    <p>{{ foo }}</p>
    <p>{{ arr }}</p>
    <hr />
    <p>
        <button @click="handleChangeState">修改数据</button>
    </p>
</template>

<script setup>
	...
  const handleChangeState = () =>{
    ...
  }
</script>
```

方法一：最简单的方式修改

```typescript
mainStore.count++
mainStore.foo = 'hello'
```

方法二：如果需要修改多个数据，建议使用 `$patch`批量更新

```typescript
mainStore.$patch({
  count: mainStore.count + 1,
  foo: 'hello',
  // 由于是以对象形式传递的，显然如果要给数组追加元素不是一个很好的选择
  arr: [...mainStore.arr, 4],
})
```

方法三：更好的批量更新的方法：`$patch`也可以传递一个函数

```typescript
mainStore.$patch((state) => {
  // 这里接收的形参就是state
  state.count++
  state.foo = 'hello'
  state.arr.push(4)
})
```

方法四：逻辑比较多的时候可以封装到 actions 里面

```typescript
mainStore.changeState() // 在修改数据的方法中可以直接调用这个封装在actions里面的函数
```

```typescript
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  ...
  actions: {
    // 注意：不能使用箭头函数定义，因为使用箭头函数会导致 this 指向错误
    changeState(num) {
      this.count += num
      this.foo = 'hello'
      this.arr.push(4)

      // this.$patch({}) // 这里如果批量更新和方法二、三一样
      // this.$patch((state) => {})
    },
  },
}
```

## 7. Getters使用

类似于组件的computed，用来封装计算属性，有缓存功能

可以使用`defineStore()`中的getters属性来定义它们，并且它们将state作为第一个参数接收，以鼓励使用箭头函数。如果你使用的是普通函数的话，这个参数是可选的，不接收也可以使用this

```typescript
export const useMainStore = defineStore('main', {
  state: () => ({
    count: 100,
  }),
  getters: {
    // 函数接收一个可选的参数，是 state 对象
    /* count10(state) {
            console.log('count10 被调用了')
            return state.count * 10
        }, */

    // 如果是在ts中的话，this的类型是推导不出来的，所以需要手动指定
    /* count10() {
            console.log('count10 被调用了')
            return this.count * 10
        }, */
    count10: (state) => state.count * 10,
  },
}
```

## 8. 总结

`src/store/index.js`

```js
import { defineStore } from 'pinia'

// 1、定义容器
// 参数1：容器名称 ID ，必须唯一，将来 Pinia 会把所有的容器挂载到根容器
// 参数2：选项对象
// 返回值：一个函数，调用得到容器实例
export const useMainStore = defineStore('main', {
    /**
     * 类似于组件的 data，用来存储全局状态的
     * 1、必须是函数：这样是为了在服务端渲染的时候避免交叉请求导致数据的状态污染
     * 2、必须是箭头函数：这是为了更好的 TS 类型推导
     */
    state: () => ({
        count: 100,
        foo: 'bar',
        arr: [1, 2, 3],
    }),
    /**
     * 类似于组件的 computed，用来封装计算属性，有缓存功能
     */
    getters: {
        // 函数接收一个可选的参数，是 state 对象
        /* count10(state) {
            console.log('count10 被调用了')
            return state.count * 10
        }, */

        //  如果是在ts中的话，this的类型是推导不出来的，所以需要手动指定
        /* count10() {
            console.log('count10 被调用了')
            return this.count * 10
        }, */
        count10: (state) => state.count * 10,
    },

    /**
     * 类似于组件的 methods，用来封装业务逻辑，修改 state
     */
    actions: {
        //  注意：不能使用箭头函数定义，因为使用箭头函数会导致 this 指向错误
        changeState(num) {
            this.count += num
            this.foo = 'hello'
            this.arr.push(4)

            // this.$patch({})
            // this.$patch((state) => {})
        },
    },
})
// 2、使用容器中的 state

// 3、修改 state

// 4、容器中的 action 的使用
```

`src/components/HelloWord.vue`

```vue
<template>
  <p>{{ mainStore.count }}</p>
  <p>{{ mainStore.foo }}</p>
  <p>{{ mainStore.arr }}</p>
  <p>{{ mainStore.count10 }}</p>
  <p>{{ mainStore.count10 }}</p>
  <p>{{ mainStore.count10 }}</p>
  <hr />
  <p>{{ count }}</p>
  <p>{{ foo }}</p>
  <p>
    <button @click="handleChangeState">修改数据</button>
  </p>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store'

// 【哪里使用写哪里】，此时要在HelloWorld组件中用，那就写这里。这很Composition API
const mainStore = useMainStore() 

// 禁止！这样会丧失响应性，因为pinia在底层将state用reactive做了处理
// const { count, foo } = mainStore
// 解决方案：将结构出的数据做ref响应式代理
const { count, foo } = storeToRefs(mainStore)

const handleChangeState = () => {
  // ==============数据修改的几种方式=============
  // 方式一：直接修改
  // mainStore.count++

  // 方式二：使用 $patch(对象) 批量修改，建议使用，底层做了性能优化
  // mainStore.$patch({
  //   count: mainStore.count + 1,
  //   foo: 'hello',
  //   arr: [...mainStore.arr, 4] // 这就不优雅了，所以有了方式三
  // })

  // 方式三：使用 $patch(回调函数)，这个更优雅，墙裂推荐！！！
  // 回调函数中的state参数，就是Store定义时里面的state!
  // mainStore.$patch((state) => {
  //   state.count++
  //   state.foo = 'hello'
  //   state.arr.push(4)
  // })

  // 方式四：逻辑较为复杂时，应封装到Store的actions中，并对外暴露接口
  mainStore.changeState(10)
}
</script>
```
