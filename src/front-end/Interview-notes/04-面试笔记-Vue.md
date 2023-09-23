---
title: Vue
order: 4
---

## 1. Vue3和Vue2的区别

### 1. 双向数据绑定原理发生了改变

Vue2是由数据劫持结合发布-订阅的模式实现的，通过`object.defineProperty()`来劫持对象属性的`getter`和`setter`操作，在数据变动时发布消息给订阅者，触发响应的监听回调

Vue3中使用了ES6的Proxy对数据代理

### 2. 定义数据变量和方法的改变

Vue2定义数据变量是`data(){}`，创建的方法要在`methods:{}`中

Vue3直接在`setup(){}`中，在这里面定义的变量和方法因为最终要在模板中使用，所以最后都得 `return`

### 3. 生命周期函数不同

`Vue2`中的生命周期：

- `beforeCreate` 组件创建之前
- `created` 组件创建之后
- `beforeMount` 组件挂载到页面之前执行
- `mounted` 组件挂载到页面之后执行
- `beforeUpdate` 组件更新之前
- `updated` 组件更新之后

`Vue3`中的生命周期：

- `setup` 开始创建组件

- `onBeforeMount` 组件挂载到页面之前执行

- `onMounted` 组件挂载到页面之后执行

- `onBeforeUpdate` 组件更新之前

- `onUpdated` 组件更新之后

  而且`Vue3.x` 生命周期在调用前需要先进行引入

### 4. 性能更好

- 速度更快
- 体积减少
- 更易维护
- 更接近原生
- 更易使用
- 更好的TS支持

## 2. Vue组件间通信

### 1. props

适用场景：父组件传递数据给子组件

使用：

- 子组件设置`props`属性，定义接收父组件传递过来的参数
- 父组件在使用子组件标签中通过字面量来传递值

`Children.vue`

```vue
<template>
    <div id="children">
        <p>{{msg}}</p>
        <button @click="fn">按钮</button>
    </div>
</template>
<script>
export default {
    name: "Children",
    props: ["msg", "fn"]
};
</script>
```

`Father.vue`

```vue
<template>
    <div id="father">
        <Children :msg="msgData" :fn="myFunction"></Children>
    </div>
</template>

<script>
import Children from "./Children.vue";
export default {
    name: "Father",
    data() {
        msgData: "父组件数据";
    },
    methods: {
        myFunction() {
            console.log("vue");
        }
    },
    components: {
        Children
    }
};
</script>
```

### 2. $emit触发自定义事件

适用场景：子组件传递数据给父组件

使用：

- 子组件通过`$emit`触发自定义事件，`$emit`第二个参数为传递的数值
- 父组件绑定监听器获取到子组件传递过来的参数

`Children.vue`

```vue
this.$emit('add', good) 
```

`Father.vue`

```vue
<Children @add="cartAdd($event)" />
```

### 3. ref

使用：

- 父组件在使用子组件的时候设置`ref`
- 父组件通过设置子组件`ref`来获取数据

`Father.vue`

```vue
<Children ref="foo" />  
  
this.$refs.foo  // 获取子组件实例，通过子组件实例我们就能拿到对应的数据  
```

### 4. 事件总线（EventBus）

适用场景：兄弟组件传值

使用：

- 创建一个中央事件总线`EventBus`
- 兄弟组件通过`$emit`触发自定义事件，`$emit`第二个参数为传递的数值
- 另一个兄弟组件通过`$on`监听自定义事件

安装全局事件总线：

```js
new Vue({
   	...
   	beforeCreate() {
   		Vue.prototype.$bus = this // 安装全局事件总线，$bus 就是当前应用的 vm
   	},
    ...
})
```

发送事件：

```vue
<template>
  <div>
    <button @click="add">加法</button>    
  </div>
</template>

<script>

export default {
  data(){
    return{
      num:0
    }
  },
  methods:{
    add(){
      this.$bus.$emit('addition', {
        num:this.num++
      })
    }
  }
}
</script>
```

接收事件：

```vue
<template>
  <div>求和: {{count}}</div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    this.$bus.$on('addition', param => {
      this.count = this.count + param.num;
    })
  }
}
</script>
```

### 5. provide与inject

使用：

- 在祖先组件定义`provide`属性，返回传递的值
- 在后代组件通过`inject`接收组件传递过来的值

祖先组件：

```vue
provide(){  
    return {  
        foo:'foo'  
    }  
} 
```

后代组件

```vue
inject:['foo'] // 获取到祖先组件传递过来的值 
```

### 6. $parent/\$children

+ 使用\$parent可以让组件访问父组件的实例（访问的是上一级父组件的属性和方法）
+ 使用\$children可以让组件访问子组件的实例，但是，$children并不能保证顺序，并且访问的数据也不是响应式的

### 7. $attrs/\$listeners

适用场景：祖先传递数据给子孙

### 8. 总结

- 父子关系的组件数据传递选择 `props` 与 `$emit`进行传递，也可选择`ref`
- 兄弟关系的组件数据传递可选择`$bus`，其次可以选择`$parent`进行传递
- 祖先与后代组件数据传递可选择`attrs`与`listeners`或者 `Provide`与 `Inject`
- 复杂关系的组件数据传递可以通过`vuex`存放共享的变量

## 3. Vue的基本原理

当一个Vue实例创建时，Vue会遍历data中的属性，用 `Object.defineProperty`（Vue3.0使用proxy ）将它们转为 getter/setter，并且在内部追踪相关依赖，在属性被访问和修改时通知变化。 每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新

## 4. Vue双向数据绑定的原理

Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过`Object.defineProperty()`来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。主要分为以下几个步骤：

1. 需要observer对数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化
2. compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
3. Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是: ①在自身实例化时往属性订阅器(dep)里面添加自己 ②自身必须有一个update()方法 ③待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退
4. MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果

