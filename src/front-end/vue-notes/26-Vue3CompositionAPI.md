---
title: Vue3CompositionAPI（Vue3组合式API）
order: 26
---

在 Vue2 中，我们使用 Options API，选项式的 API，我们要创建一个 Vue实例，然后在里面传入一个配置对象，里面要写 data、methods、watch 等的东西，而 Vue3提出了全新的 Composition API，组合式API，我们不用直接创建 Vue 实例，而是创建一个 app，然后按需引入需要的 API来进行使用

## 1. Options API存在的问题

使用传统 Options API（选项式 API）中，新增或者修改一个需求，就需要分别在 data，methods，computed 里修改

![Vue3CompositionAPI01.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue3CompositionAPI01.gif)

![Vue3CompositionAPI02.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue3CompositionAPI02.gif)

## 2. Composition API的优势

我们可以更加优雅的组织我们的代码、函数。让相关功能的代码更加有序的组织在一起

![Vue3CompositionAPI03.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue3CompositionAPI03.gif)

![Vue3CompositionAPI04.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue3CompositionAPI04.gif)

## 3. 常用的Composition API

### 3.1 拉开序幕的setup

1. 理解：Vue 3.0 中一个新的配置项，值为一个函数
2. setup 是所有==Composition API（组合式 API）==“表演的舞台”
4. 组件中所用到的：数据、方法等等，均要配置在 setup 中
5. setup 函数的两种返回值：
   1. 若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用（重点关注！）
   2. 若返回一个渲染函数：则可以自定义渲染内容（了解）
6. 注意点：
   1. 尽量不要与 Vue 2. x 配置混用
      - Vue 2. x 配置（data、methos、computed...）中可以访问到setup中的属性、方法
      - 但在 setup 中不能访问到Vue 2. x 配置（data、methos、computed...）
      - 如果有重名, setup 优先
   2. setup 不能是一个 async 函数，因为返回值不再是 return 的对象, 而是 promise, 模板看不到 return 对象中的属性（后期也可以返回一个 Promise 实例，但需要 Suspense 和异步组件的配合）

代码演示：
```vue
<template>
  <h1>博主的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>性别：{{gender}}</h2>
  <button @click="sayInfo">显示信息</button>
</template>

<script>
export default {
  name: "App",
  //此处只是测试一下setup，暂时不考虑响应式的问题
  setup(){
    // 数据
    let name = "zhf"
    let age = 18
    let gender = "男"

    // 方法
    function sayInfo(){
      alert(`你好${name}，你太厉害了吧`)
    }
    return {
      name,age, gender,sayInfo
    }
  }
}
</script>
```

效果：

![Vue3CompositionAPI05.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue3CompositionAPI05.gif)

如果返回的是渲染函数，那么你在 `template` 里写的模板都不奏效了，页面渲染的就是你写的 h 函数里面的内容

```vue
<template>
  <h1>博主的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ gender }}</h2>
  <button @click="showInfo">显示信息</button>
</template>

<script>
import { h } from 'vue'
export default {
  name: "App",
  //此处只是测试一下setup，暂时不考虑响应式的问题
  setup() {
    // 数据
    let name = "zhf"
    let age = 18
    let gender = "男"

    // 方法
    function showInfo() {
      alert(`你好${name}!`)
    }
    // return {
    //   name, age, gender, showInfo
    // }
    return () => h('h1', 'zhfyyds')
  }
}
</script>
```

效果：

![Vue3CompositionAPI06.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue3CompositionAPI06.png)

### 3.2 ref函数

作用: 定义一个响应式的数据

语法: `const xxx = ref(initValue)` 

创建一个包含响应式数据的==引用对象（reference 对象，简称 ref 对象）==

JS 中操作数据： `xxx.value`

模板中读取数据: 不需要`.value`，直接：`<div>{{xxx}}</div>`

备注：
- 接收的数据可以是基本类型也可以是对象类型
- 基本类型的数据：响应式依然是靠 `Object.defineProperty()` 的 `get` 与 `set` 完成的
- 对象类型的数据：内部“求助”了 Vue 3.0 中的一个新函数—— `reactive` 函数

代码演示：
```vue
<template>
  <h1>博主的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>职业： {{ job.type }}</h2>
  <h2>工资：{{ job.salary }}</h2>
  <button @click="sayInfo">显示信息</button>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { ref } from "vue"
export default {
  name: "App",
  setup() {
    // 数据
    let name = ref("zhf")
    let age = ref(18)
    let job = ref({
      type: "前端工程师",
      salary: "30K",
    })
    // 方法
    function sayInfo() {
      alert(`你好${name.value}，你太厉害了吧，薪水${job.value.salary}这么高`)
    }
    function changeInfo() {
      name.value = "三十年后的zhf"
      age.value = 48;
      job.value.type = "工程师"
      job.value.salary = "200K"
    }
    return {
      name,
      age,
      job,
      sayInfo,
      changeInfo,
    }
  },
}
</script>
```

效果：

![Vue3CompositionAPI07.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue3CompositionAPI07.gif)

通过看源码可以知道调用 ref 会返回一个 RefImpl 的实例对象，RefImpl 类中有 getter 和 setter 可以检测到数据的变化

### 3.3 reactive函数

作用: 定义一个==对象类型==的响应式数据（基本类型不要用它，要用 `ref` 函数）

语法：`const 代理对象= reactive(源对象)` 接收一个对象（或数组），返回一个==代理对象（Proxy 的实例对象，简称 proxy 对象）==

reactive 定义的响应式数据是“深层次的”

内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作

代码演示：

```vue
<template>
  <h1>博主的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>职业： {{ person.job.type }}</h2>
  <h2>工资：{{ person.job.salary }}</h2>
  <h2>爱好：{{ person.hobby }}</h2>
  <h3>测试数据：{{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import { reactive } from "vue"
export default {
  name: "App",
  setup() {
    // 数据
    let person = reactive({
      name: "zhf",
      age: 18,
      hobby: ["写博客", "学习", "看书"],
      job: {
        type: "前端工程师",
        salary: "30K",
        a: {
          b: {
            c: 666,
          },
        },
      },
    })

    // 方法
    function changeInfo() {
      person.name = "三十年后的zhf"
      person.age = 48
      person.job.type = "工程师"
      person.job.salary = "200K"
      person.job.a.b.c = 888
      // 直接通过数组下标修改，可以触发响应式
      person.hobby[0] = "写小说"
    }
    return {
      person,
      changeInfo,
    }
  },
}
</script>
```

效果：

![Vue3CompositionAPI08.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue3CompositionAPI08.gif)

### 3.4 Vue3.0中的响应式原理

#### 3.4.1 vue2.x的响应式

实现原理：
- 对象类型：通过 `Object.defineProperty()` 对属性的读取、修改进行拦截（数据劫持）
- 数组类型：通过重写更新数组的一系列方法来实现拦截（对数组的变更方法进行了包裹）

  ```js
  Object.defineProperty(data, 'count', {
      get () {}, 
      set () {}
  })
  ```

存在问题：
- 新增属性、删除属性，界面不会更新
- 直接通过下标修改数组，界面不会自动更新

解决方案：
+ 使用 `Vue.set` 、`Vue.delete` 或者 `vm.$set`、`vm.$delete` 这些 API

模拟 Vue2 中实现响应式
```js
//源数据
let person = {
	name:'张三',
	age:18
}
//模拟Vue2中实现响应式
let p = {}
Object.defineProperty(p,'name',{
	configurable:true,
	get(){ //有人读取name时调用
		return person.name
	},
	set(value){ //有人修改name时调用
		console.log('有人修改了name属性，我发现了，我要去更新界面！')
		person.name = value
	}
})
Object.defineProperty(p,'age',{
	get(){ //有人读取age时调用
		return person.age
	},
	set(value){ //有人修改age时调用
		console.log('有人修改了age属性，我发现了，我要去更新界面！')
		person.age = value
	}
})
```

#### 3.4.2 Vue3.0的响应式

实现原理: 
- 通过 Proxy（代理）:  拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等
- 通过 Reflect（反射）:  对源对象的属性进行操作
- MDN 文档中描述的 Proxy 与 Reflect：
  - Proxy：[Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
  - Reflect：[Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
  

```js
new Proxy(data, {
	// 拦截读取属性值
    get (target, prop) {
    	return Reflect.get(target, prop)
    },
    // 拦截设置属性值或添加新属性
    set (target, prop, value) {
    	return Reflect.set(target, prop, value)
    },
    // 拦截删除属性
    deleteProperty (target, prop) {
    	return Reflect.deleteProperty(target, prop)
    }
})

proxy.name = 'tom'   
```

### 3.5 reactive对比ref

从定义数据角度对比：
-  ref 用来定义基本类型数据
-  reactive 用来定义对象（或数组）类型数据
-  备注：ref 也可以用来定义对象（或数组）类型数据, 它内部会自动通过 `reactive` 转为代理对象

从原理角度对比：
-  ref 通过 `Object.defineProperty()` 的 `get` 与 `set` 来实现响应式（数据劫持）
-  reactive 通过使用Proxy来实现响应式（数据劫持）, 并通过Reflect操作源对象内部的数据

从使用角度对比：
-  ref 定义的数据：操作数据需要 `.value`，读取数据时模板中直接读取不需要`.value`
-  reactive 定义的数据：操作数据与读取数据均不需要 `.value`

### 3.6 setup的两个注意点

setup 执行的时机
- 在 beforeCreate 之前执行一次，this 是 undefined

setup 的参数
- props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性
- context：上下文对象
  - attrs: 值为对象，包含：组件外部传递过来，但没有在 props 配置中声明的属性, 相当于 `this.$attrs`
  - slots: 收到的插槽内容, 相当于 `this.$slots`
  - emit: 分发自定义事件的函数, 相当于 `this.$emit`

例：

APP 组件和 HelloWorld 组件

父组件向子组件传递属性参数

`App.vue`

```vue
<template>
  <h1>博主的信息</h1>
  <HelloWorld msg="你好啊" school="ABC"></HelloWorld>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"
export default {
  name: "App",
  components: { HelloWorld },
}
</script>

<style></style>
```

`HelloWorld.vue`

```vue
<template>
  <h2>姓名：{{ person.name }}</h2>
</template>

<script>
import { reactive } from "vue"
export default {
  name: "HelloWorld",
  props: ['msg'], // 不写全会报警告
  setup(props, context) {
    let person = reactive({
      name: "zhf",
    });
    console.log('props-----', props)
    console.log()
    console.log('context.attrs-----', context.attrs)
    return { person }
  },
}
</script>
```

效果：

![Vue3CompositionAPI09.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue3CompositionAPI09.png)

自定义事件

`App.vue`

```vue
<template>
  <h1>博主的信息</h1>
  <HelloWorld @hello="showHelloMsg"></HelloWorld>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"
export default {
  name: "App",
  components: { HelloWorld },
  setup() {
    function showHelloMsg(value) {
      alert(`你好啊，你触发了hello事件，我收到的参数是:${value}！`)
    }
    return { showHelloMsg }
  },
}
</script>
```

`HelloWorld.vue`

```vue
<template>
  <h2>姓名：{{ person.name }}</h2>
  <button @click="test">测试触发一下HelloWorld组件的Hello事件</button>
</template>

<script>
import { reactive } from "vue"
export default {
  name: "HelloWorld",
  emits: ["hello"], // 不写能执行，但是会报警告
  setup(props, context) {
    let person = reactive({
      name: "zhf",
    })
    function test() {
      context.emit("hello", "**子组件的信息**")
    }
    return { person, test }
  },
}
</script>
```

结果：

![Vue3CompositionAPI10.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue3CompositionAPI10.gif)

插槽

默认插槽

```html
<template>
  <h1>博主的信息</h1>
  <HelloWorld>
    <span>zhf，你好</span>
  </HelloWorld>
</template>
```

```html
<template>
  <h2>姓名：{{ person.name }}</h2>
  <slot></slot>
</template>
```

具名插槽
```html
<template>
  <h1>博主的信息</h1>
  <HelloWorld>
	<template v-slot:personMsg>
		<span>zhf，你好</span>
	</template>
  </HelloWorld>
</template>
```

```html
<template>
  <h2>姓名：{{ person.name }}</h2>
  <slot name="personMsg"></slot>
</template>
```

### 3.7 计算属性与监视

#### 3.7.1 computed函数

与 Vue2.x 中 computed 配置功能一致

写法：

```js
import {computed} from 'vue'

setup(){
    ...
	//计算属性——简写
    let fullName = computed(()=>{
        return person.firstName + '-' + person.lastName
    })
    //计算属性——完整
    let fullName = computed({
        get(){
            return person.firstName + '-' + person.lastName
        },
        set(value){
            const nameArr = value.split('-')
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
        }
    })
}
```

#### 3.7.2 watch函数

与 Vue2.x 中 watch 配置功能一致

两个小“坑”：
- 监视 reactive 定义的响应式数据时：oldValue 无法正确获取、强制开启了深度监视（deep 配置失效）
- 监视 reactive 定义的响应式数据中某个属性时：deep 配置有效

```js
//情况一：监视ref定义的响应式数据
watch(sum,(newValue,oldValue)=>{
	console.log('sum变化了',newValue,oldValue)
},{immediate:true})

//情况二：监视多个ref定义的响应式数据
watch([sum,msg],(newValue,oldValue)=>{
	console.log('sum或msg变化了',newValue,oldValue)
}) 

/* 情况三：监视reactive定义的响应式数据
			若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
			若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 
*/
watch(person,(newValue,oldValue)=>{
	console.log('person变化了',newValue,oldValue)
},{immediate:true,deep:false}) //此处的deep配置不再奏效

//情况四：监视reactive定义的响应式数据中的某个属性
watch(()=>person.job,(newValue,oldValue)=>{
	console.log('person的job变化了',newValue,oldValue)
},{immediate:true,deep:true}) 

//情况五：监视reactive定义的响应式数据中的某些属性
watch([()=>person.job,()=>person.name],(newValue,oldValue)=>{
	console.log('person的job变化了',newValue,oldValue)
},{immediate:true,deep:true})

//特殊情况
watch(()=>person.job,(newValue,oldValue)=>{
    console.log('person的job变化了',newValue,oldValue)
},{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
```

#### 3.7.3 watchEffect函数

watch 的套路是：既要指明监视的属性，也要指明监视的回调

watchEffect 的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性

watchEffect 有点像 computed：
- 但 computed 注重的计算出来的值（回调函数的返回值），所以必须要写返回值
- 而 watchEffect 更注重的是过程（回调函数的函数体），所以不用写返回值

```js
//watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
watchEffect(()=>{
    const x1 = sum.value
    const x2 = person.age
    console.log('watchEffect配置的回调执行了')
})
```

### 3.8 生命周期

![Vue3CompositionAPI11.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue3CompositionAPI11.png)

Vue3.0 中可以继续使用 Vue2. x 中的生命周期钩子，但有有两个被更名：
- `beforeDestroy` 改名为 `beforeUnmount`
- `destroyed` 改名为 `unmounted`

Vue3.0 也提供了 Composition API 形式的生命周期钩子，与 Vue2.x 中钩子对应关系如下：
- `beforeCreate` ===> `setup()`
- `created` ===> `setup()`
- `beforeMount` ===> `onBeforeMount`
- `mounted` ===> `onMounted`
- `beforeUpdate` ===> `onBeforeUpdate`
- `updated` ===> `onUpdated`
- `beforeUnmount` ===> `onBeforeUnmount`
- `unmounted` ===> `onUnmounted`

可以直接以配置项的形式使用生命周期钩子，也可以使用组合式 API 的形式使用，尽量统一

一般来说，组合式 API 里的钩子会比配置项的钩子先执行

### 3.9 自定义hook函数

什么是 hook？—— 本质是一个函数，把 setup 函数中使用的 Composition API 进行了封装，类似于 vue2.x 中的 mixin

自定义 hook 的优势：复用代码, 让 setup 中的逻辑更清楚易懂

例：
创建一个 hooks 文件夹，里面创建 `usePoint.js`

```js
import { reactive, onMounted, onBeforeUnmount } from "vue"
export default function() {
  //实现鼠标“打点”相关的数据
  let point = reactive({
    x: 0,
    y: 0,
  })

  //实现鼠标“打点”相关的方法
  function savePoint(event) {
    point.x = event.pageX
    point.y = event.pageY
    console.log(event.pageX, event.pageY)
  }

  //实现鼠标“打点”相关的生命周期钩子
  onMounted(() => {
    window.addEventListener("click", savePoint)
  })

  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint)
  })

  return point
}
```

在组件中使用：
```vue
<template>
	<h2>我是Demo组件</h2>
	<h2>当前点击时鼠标的坐标为：x：{{point.x}}，y：{{point.y}}</h2>
</template>

<script>
	import usePoint from '../hooks/usePoint'
	export default {
		name:'Demo',
		setup(){
			const point = usePoint()
			return {point}
		}
	}
</script>
```

### 3.10 toRef

作用：创建一个 ref 对象，其 value 值指向另一个对象中的某个属性

语法：`const name = toRef(person,'name')`

应用:   要将响应式对象中的某个属性单独提供给外部使用时

扩展：```toRefs``` 与 ```toRef``` 功能一致，但可以批量创建多个 ref 对象，语法：`toRefs(person)`

例：
```vue
<template>
	<h4>{{person}}</h4>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.j1.salary}}K</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
	import {ref,reactive,toRef,toRefs} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//数据
			let person = reactive({
				name:'张三',
				age:18,
				job:{
					j1:{
						salary:20
					}
				}
			})

			// const name1 = person.name
			// console.log('%%%',name1)

			// const name2 = toRef(person,'name')
			// console.log('####',name2)

			// const x = toRefs(person)
			// console.log('******',x)

			return {
				person,
				// name:toRef(person,'name'),
				// age:toRef(person,'age'),
				// salary:toRef(person.job.j1,'salary'),
				...toRefs(person)
			}
		}
	}
</script>
```

## 4. 其它Composition API

### 4.1 shallowReactive与shallowRef

shallowReactive：只处理对象最外层属性的响应式（浅响应式）

shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理

什么时候使用?
-  如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> `shallowReactive`
-  如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> `shallowRef`

### 4.2 readonly与shallowReadonly

readonly: 让一个响应式数据变为只读的（深只读）

shallowReadonly：让一个响应式数据变为只读的（浅只读）

应用场景: 不希望数据被修改时

### 4.3 toRaw与markRaw

toRaw：
- 作用：将一个由 `reactive` 生成的响应式对象转为普通对象
- 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新

markRaw：
- 作用：标记一个对象，使其永远不会再成为响应式对象
- 应用场景:
  1. 有些值不应被设置为响应式的，例如复杂的第三方类库等
  2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能

### 4.4 customRef

作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制

实现防抖效果：
  ```vue
  <template>
  	<input type="text" v-model="keyword">
  	<h3>{{keyword}}</h3>
  </template>
  
  <script>
  	import {ref,customRef} from 'vue'
  	export default {
  		name:'Demo',
  		setup(){
  			//自定义一个myRef
  			function myRef(value,delay){
  				let timer
  				//通过customRef去实现自定义
  				return customRef((track,trigger)=>{
  					return{
  						get(){
  							track() //告诉Vue这个value值是需要被“追踪”的,通知Vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
  							return value
  						},
  						set(newValue){
  							clearTimeout(timer)
  							timer = setTimeout(()=>{
  								value = newValue
  								trigger() //告诉Vue去更新界面，通知Vue去重新解析模板
  							},delay)
  						}
  					}
  				})
  			}
  			let keyword = myRef('hello',500) //使用程序员自定义的ref
  			return {
  				keyword
  			}
  		}
  	}
  </script>
  ```

### 4.5 provide与inject

![Vue3CompositionAPI12.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue3CompositionAPI12.png)

作用：实现==祖与后代组件间==通信

套路：父组件有一个 `provide` 选项来提供数据，后代组件有一个 `inject` 选项来开始使用这些数据

具体写法：
1. 祖组件中：
   ```js
   setup(){
   	......
       let car = reactive({name:'奔驰',price:'40万'})
       provide('car',car)//给自己的后代组件传递数据
       ......
   }
   ```
2. 后代组件中：
   ```js
   setup(props,context){
   	......
       const car = inject('car')//拿到祖先的数据
       return {car}
   	......
   }
   ```

### 4.6 响应式数据的判断

isRef: 检查一个值是否为一个 ref 对象

isReactive: 检查一个对象是否是由 `reactive` 创建的响应式代理

isReadonly: 检查一个对象是否是由 `readonly` 创建的只读代理

isProxy: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理
