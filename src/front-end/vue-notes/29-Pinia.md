---
title: Pinia
order: 29
---

Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态，类似Vuex

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
import { createApp } from 'vue';
// 引入 createPinia
import { createPinia } from 'pinia';
import App from './App.vue';

// 创建pinia 实例
const pinia = createPinia();
const app = createApp(App);
// 挂载到根实例上
app.use(pinia);
app.mount('#app');
```

## 3. 定义Store

store 是使用`defineStore()` 定义的，第一个参数是整个应用中store的唯一名称(id)

> 建议：可以为defineStore()的返回值任意命名，但是最好使用use加上store的名称和Store，例如：useUserStore、useCartStore、useProductStore

新建文件夹`store`，在`store`中新建文件`index.js`

```typescript
import { defineStore } from 'pinia';
import {ref,computed} from 'vue';
//定义容器
export const useMainStore = defineStore('main',()=>{
     // 数据（state）
    const sum = ref(0);
    // 修改数据的方法（action+mutations）
    const add = ()=>{
        sum.value++;
    };
    const cSum = computed(()=>{
        return sum.value*10;
    });
    return{
        sum,
        cSum,
        add
    };
});
```

## 4. 基本使用

如果在组件中使用，需要先将store引入，并在setup中声明调用，使用模板语法即可在模板中使用

```vue
<template>
	<button @click="mainStore.add()">{{mainStore.sum}}</button>
	<h3>放大十倍为：{{mainStore.cSum}}</h3>
</template>

<script setup>
//导入定义的store
import { useMainStore } from '../store';
//获取容器中的state
const mainStore = useMainStore();
//从store中取值
console.log(mainStore.sum);
</script>
```

如果取多个值时，每次都需要mainStore，这样就很麻烦

我们想到用解构赋值，但是这样取出来的数据是有问题的，它已经丢失了响应式，也就是一次性的

```typescript
// Pinia 其实就是把 state 数据都做了 reactive 处理了
const { sum,cSum } = mainStore;
```

就像上面这段代码，解构出来的数据就已经失去了响应式，如果之后对数据的修改Vue是无法监测到数据变化的

解决办法：这里就需要使用Pinia为我们提供的`storeToRefs()`API

```vue
<template>
	<button @click="add()">{{sum}}</button>
	<h3>放大十倍为：{{cSum}}</h3>
</template>

<script setup>
import { storeToRefs } from 'pinia';
//导入定义的store
import { useMainStore } from '../store';
//获取容器中的state
const mainStore = useMainStore();
const { sum,cSum } = storeToRefs(mainStore);
</script>
```

方法解构时使用普通解构即可

```js
const {add} = mainStore;
```
