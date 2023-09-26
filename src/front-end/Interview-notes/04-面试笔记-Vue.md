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

## 5. 使用 Object.defineProperty() 来进行数据劫持有什么缺点？

在对一些属性进行操作时，使用这种方法无法拦截，比如通过下标方式修改数组数据或者给对象新增属性，这都不能触发组件的重新渲染，因为`Object.defineProperty()`不能拦截到这些操作。更精确的来说，对于数组而言，大部分操作都是拦截不到的，只是 Vue 内部通过重写函数的方式解决了这个问题

## 6. MVVM、MVC、MVP的区别

MVVM、MVC、MVP中的M指model层，V指view层：

- Model 层很好理解，就是存储数据
- View 层则是展示数据

### 1. MVC

`Controller` 控制器层 ： 负责连接 `Model` 层和 `View` 层，接受并处理 `View` 层触发的事件，并在 `Model` 层的数据状态变动时更新 `View`层

典型思路是 `View` 层通过事件通知到 `Controller` 层，`Controller` 层经过对事件的处理完成相关业务逻辑，要求 `Model` 层改变数据状态，`Model` 层再将新数据更新到 `View`层

> 在实际操作时，用户可以直接对 `View` 层的 `UI` 进行操作，以通过事件通知 `Controller` 层，经过处理后修改 `Model` 层的数据，`Model` 层使用最新数据更新 `View`

### 2. MVP

`Presenter` 管理层 ： 负责连接 `Model` 层和 `View` 层，处理 `View` 层的事件，负责获取数据并将获取的数据经过处理后更新 `View`

典型流程是 `View` 层触发的事件传递到 `Presenter` 层中处理，`Presenter` 层去操作 `Model` 层，并且将数据返回给 `View`层，这个过程中，`View` 层和 `Model` 层没有直接联系。而 `View` 层不部署业务逻辑，除了展示数据和触发事件之外，其它时间都在等着 `Presenter` 层来更新自己，被称为「被动视图」

> 在实际操作时，用户可以直接对 `View` 层的 `UI` 进行操作，`View` 层通知 `Presenter` 层，`Presenter` 层操作 `Model` 层的数据，`Presenter` 层获取到数据之后更新 `View`

### 3. MVVM

`ViewModel` 层相当于 `Presenter` 层，负责绑定 `Model` 层和 `View` 层，相比于 `MVP` 增加了双向绑定机制

`MVVM` 模式的特征是 `ViewModel` 层和 `View` 层采用双向绑定的形式（Binding），双向数据绑定允许视图（`View`）和视图模型（`ViewModel`）之间的数据变化相互影响，`View` 层的变动，将自动反映在 `ViewModel` 层，反之亦然

## 7. computed和watch的区别

computed：

1. 它是计算属性。主要用于值的计算并一般会返回一个值。所以它更多用于计算值的场景
2. 它具有缓存性。当访问它来获取值时，它的 getter 函数所计算出来的值会进行缓存
3. 只有当它依赖的属性值发生了改变，那下⼀次再访问时才会重新调用 getter 函数来计算
4. 它适用于计算比较消耗性能的计算场景
5. 必须要有一个返回值
6. 不支持异步

watch：

1. 它更多的是起到 “观察” 的作用，类似于对数据进行变化的监听并执行回调。主要用于观察 `props` 或本组件 `data` 的值，当这些值发生变化时，执行处理操作
2. 不一定要返回某个值
3. 支持异步

使用场景：

1. 当目的是进行数值计算，且依赖于其他数据，那么推荐使用 `computed`
2. 当需要在某个数据发生变化的同时做一些稍复杂的逻辑操作，那么推荐使用 `watch`

## 8. computed和methods的区别

可以将同一函数定义为一个 method 或者一个计算属性。对于最终的结果，两种方式是相同的 

不同点：

+ computed: 计算属性是基于它们的依赖进行缓存的，只有在它的相关依赖发生改变时才会重新求值
+ method 调用总会执行该函数

