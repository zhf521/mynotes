---
title: Vuex
order: 22
---

> 本文示例代码：[NoteDemoCode/Vue/22-Vuex](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/22-Vuex)

## 1. 理解Vuex

### 1.1 Vuex是什么

概念：专门在 Vue 中实现集中式状态（数据）管理的一个 Vue 插件，对 Vue 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信

![Vuex01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vuex01.png)

![Vuex02.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vuex02.png)

### 1.2 什么时候使用Vuex

+ 多个组件依赖于同一状态
+ 来自不同组件的行为需要变更同一状态

以前的解决办法：
1. 将数据以及操作数据的行为都定义在父组件
2. 将数据以及操作数据的行为传递给需要的各个子组件 (有可能需要多级传递)

### 1.3 Vuex工作原理

![Vuex03.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vuex03.png)

Vuex 由三个部分构成，Actions (动作)，Mutations (修改，加工维护)，State (状态，即数据)，将数据交给 Vuex 中的 state 对象进行保管，通过 store 来管理 Vuex 的三个部分，当组件需要修改状态时，通过调用 mutations 中的方法来提交 mutation。Mutation 是同步的操作，它会更新状态的值。在某些情况下，组件可能需要进行异步操作，例如从服务器获取数据。在这种情况下，可以调用 actions 中的方法来触发异步操作。Action 会执行异步任务，并在任务完成后提交对应的 mutation。

理解：State 相当于菜，VueComponents 相当于客人，Actions 相当于服务员，Mutations 相当于后厨

### 1.4 Vuex相关概念

#### 1.4.1 state

1.  Vuex 管理的状态对象
2.  它应该是唯一的

```js
const state = {sum:0};
```

#### 1.4.2 mutations

1.  包含多个直接更新 state 的方法 (回调函数)的对象
2.  谁来触发: action 中的 `commit ('mutation 名称')`
3.  只能包含同步的代码, 不能写异步代码

```js
const mutations = {
	ADD (state, value) {
		// 更新state 的某个属性
        state.sum += value;
	};
};
```

#### 1.4.3 actions

1.  包含多个事件回调函数的对象
2.  通过执行: `commit()` 来触发 mutation 的调用, 间接更新 state
3.  谁来触发: 组件中: `$store.dispatch ('action 名称', value) `
4.  可以包含异步代码 (定时器, Ajax)

```js
const actions = {
	add (context, value) {
		context.commit('ADD', value)
	};
};
```

#### 1.4.4 getters

1.  包含多个计算属性 (get) 的对象
2.  谁来读取: 组件中: `$store.getters.xxx`

```js
const getters = {
	bigNum(state) {
		return state.sum * 10;
	};
};
```

#### 1.4.5 modules

1.  包含多个 module 
2.  一个 module 是一个 store 的配置对象 
3.  与一个组件 (包含有共享数据)对应 

#### 1.4.6 向外暴露store对象代码

```js
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});
```

#### 1.4.7 引入store

```js
import store from './store';
new Vue({
	store
});
```

#### 1.4.8 store对象

1. 所有用 Vuex 管理的组件中都多了一个属性 `$store`, 它就是一个 store 对象 

2. 属性:  
  + state: 注册的 state 对象
  + getters: 注册的 getters 对象

3. 方法：

   `dispatch(actionsName, value)`，分发调用 action

   `commit(mutationsName, value)`，分发调用 mutations

## 2. Vuex环境搭建

1. 下载安装 Vuex

   ```js
   npm i vuex
   // Vue2版本
   npm i vuex@3
   ```

2. 创建store对象并导出挂载

   创建 `src/store/index.js` 文件，该文件用于创建 Vuex 中最为核心的 `store`

   ```js
   import Vue from 'vue'; //引入Vue核心库
   import Vuex from 'vuex';	// 引入Vuex
   Vue.use(Vuex);	// 应用Vuex插件
   const actions = {}; // 准备actions对象——用于响应组件中的动作（获取后端API数据或者进行业务逻辑处理）
   const mutations = {}; // 准备mutations对象——用于操作数据（即修改state中的数据）
   const state = {}; // 准备state对象——用于存储数据
   // 创建并暴露store
   export default new Vuex.Store({
   	actions,
   	mutations,
   	state,
   });
   ```

3. 在`src/main.js` 中引入`store`对象

   ```js
   ......
   
   import store from './store/index';	// 引入store
   
   ......
   
   new Vue({
   	el: '#app',
   	render: h => h(App),
   	store,  // 引入store
   });
   ```

## 3. Vuex的基本使用

1. 初始化数据 state，配置 actions、mutations，操作文件 `store.js` 
2. 组件中读取 Vuex 中的数据 `$store.state.数据`  
3. 组件中修改 vuex 中的数据 `$store.dispatch('action中的方法名',数据)`或`$store.commit('mutations中的方法名', 数据) `

==注意：若没有网络请求或其他业务逻辑，组件中也可越过 actions，即不写 dispatch，直接编写 commit==

## 4. 求和案例

效果：

![Vuex04.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vuex04.gif)

### 4.1 纯Vue版本

`src/App.vue`

```vue
<template>
  <div>
    <Count></Count>
  </div>
</template>

<script>
import Count from './components/Count'
export default {
  name: 'App',
  components: { Count }
}
</script>
```

`src/components/Count.vue`

```vue
<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <select v-model.number="n">
      <!-- 这里的.number是指令修饰符，将输入的数据转换为数字 -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数时再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>
<script>
export default {
  name: 'Count',
  data() {
    return {
      sum: 0,//当前的和
      n: 1,//用户选择的数字
    }
  },
  methods: {
    increment() {
      this.sum += this.n
    },
    decrement() {
      this.sum -= this.n
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n
      }, 500)
    },
  },
}
</script>
```

### 4.2 Vuex版本

`src/store/index.js` 该文件用于创建 Vuex 中最为核心的 store
```js
import Vue from 'vue' //引入Vue核心库
import Vuex from 'vuex' // 引入Vuex

Vue.use(Vuex) // 应用Vuex插件

// 准备actions对象——用于响应组件中的动作
// 包含多个方法: 触发mutation调用, 间接更新state
// 一个方法就是一个action
// action中可以有逻辑代码和异步代码
// action由组件来触发调用: this.$store.dispatch('actionName')
const actions = {
	//第二步
  jia(context, value) {
    context.commit('JIA', value) //开发中一般大写
  },
  jian(context, value) {
    context.commit('JIAN', value)
  },
  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500)
  },
}

// 准备mutations对象——用于操作数据（即修改state中的数据）
// 包含多个方法: 能直接更新state
// 一个方法就是一个mutation
// mutation只能包含更新state的同步代码, 也不会有逻辑
// mutation由action触发调用: commit('mutationName')
const mutations = {
	//第三步
  JIA(state, value) {
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  },
}

// 准备state对象——用于存储数据
//state 对象
//类似于data
const state = {
  sum: 0,
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
})
```

`src/components/Count.vue`
```vue
<template>
  <div>
    <h2>当前求和为：{{ $store.state.sum }}</h2>
    <select v-model.number="n">
      <!-- 这里的.number是指令修饰符，将输入的数据转换为数字 -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数时再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>
<script>
export default {
  name: 'Count',
  data() {
    return {
      n: 1,//用户选择的数字
    }
  },
  methods: {
    increment() {
    //第一步
      this.$store.dispatch('jia', this.n)
    },
    decrement() {
      this.$store.dispatch('jian', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.n)
    },
  },
}
</script>
```

`main.js`
```js
import Vue from 'vue'
import App from './App.vue'
import store from './store' // 引入store

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: (h) => h(App),
  store,
})
```

`App.vue`
```vue
<template>
  <div>
    <Count></Count>
  </div>
</template>

<script>
import Count from './components/Count'
export default {
  name: 'App',
  components: { Count }
}
</script>
```

## 5. getters配置项

概念：当 state 中的数据需要经过加工后再使用时，可以使用 getters 加工，相当于全局计算属性

在 `store.js` 中追加 getters 配置：
```js
......

const getters = {
	bigSum(state){
		return state.sum * 10
	}
}

// 创建并暴露store
export default new Vuex.Store({
	......
	getters
})
```

组件中读取数据 `$store.getters.bigSum`

例：
求和案例可以添加一个计算求和放大十倍的功能
`src/store/index.js`
```js
import Vue from 'vue' //引入Vue核心库
import Vuex from 'vuex' // 引入Vuex

Vue.use(Vuex) // 应用Vuex插件

// 准备actions对象——用于响应组件中的动作
// 包含多个方法: 触发mutation调用, 间接更新state
// 一个方法就是一个action
// action中可以有逻辑代码和异步代码
// action由组件来触发调用: this.$store.dispatch('actionName')
const actions = {
  jia(context, value) {
    context.commit('JIA', value) //开发中一般大写
  },
  jian(context, value) {
    context.commit('JIAN', value)
  },
  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500)
  },
}

// 准备mutations对象——用于操作数据（即修改state中的数据）
// 包含多个方法: 能直接更新state
// 一个方法就是一个mutation
// mutation只能包含更新state的同步代码, 也不会有逻辑
// mutation由action触发调用: commit('mutationName')
const mutations = {
  JIA(state, value) {
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  },
}

// 准备state对象——用于存储数据
//state 对象
//类似于data
const state = {
  sum: 0,
}

// 准备getters——用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10
  },
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
```

`src/components/Count.vue`
```vue
<template>
  <div>
    <h2>当前求和为：{{ $store.state.sum }}</h2>
    <h3>当前求和放大10倍为:{{ $store.getters.bigSum }}</h3>
    <select v-model.number="n">
      <!-- 这里的.number是指令修饰符，将输入的数据转换为数字 -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数时再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>
<script>
export default {
  name: 'Count',
  data() {
    return {
      n: 1,//用户选择的数字
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('jia', this.n)
    },
    decrement() {
      this.$store.dispatch('jian', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.n)
    },
  },
}
</script>
```

效果：

![Vuex05.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vuex05.png)

## 6. 常用map映射对象

map映射对象在使用时应该先引入

```js
import {map映射对象} from 'vuex';
```

### 6.1 mapState与mapGetters

mapState用于将 Vuex store 的状态映射到组件的计算属性中，可以简化在组件中访问 Vuex store 状态的代码：
```js
computed: {
  	// 借助mapState生成计算属性：sum、mySchool、subject（写法一：对象写法）
  	...mapState({sum:'sum',mySchool:'school',subject:'subject'}),

  	// 借助mapState生成计算属性：sum、school、subject（写法二：数组写法）
  	...mapState(['sum','school','subject']),
},
```

mapGetters用于将 Vuex store 的 getters 映射到组件的计算属性中，可以简化在组件中访问 Vuex store getters 的代码：
```js
computed: {
    //借助mapGetters生成计算属性：bigSum（写法一：对象写法）
    ...mapGetters({bigSum:'bigSum'}),

    //借助mapGetters生成计算属性：bigSum（写法二：数组写法）
    ...mapGetters(['bigSum'])
},
```

### 6.2 mapState与mapGetters代码演示

在求和案例中，我们再添加一行 `我在QFNU学习前端`，模板里要写 `$store.state.sum`、`$store.getters.bigSum` 等，会很麻烦，使用 map 方法我们在模板中只需要写 `sum`、`bigSum` 等，更加方便

`src/store/index.js`

```js
import Vue from 'vue' //引入Vue核心库
import Vuex from 'vuex' // 引入Vuex

Vue.use(Vuex) // 应用Vuex插件

// 准备actions对象——用于响应组件中的动作
// 包含多个方法: 触发mutation调用, 间接更新state
// 一个方法就是一个action
// action中可以有逻辑代码和异步代码
// action由组件来触发调用: this.$store.dispatch('actionName')
const actions = {
  jia(context, value) {
    context.commit('JIA', value) //开发中一般大写
  },
  jian(context, value) {
    context.commit('JIAN', value)
  },
  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500)
  },
}

// 准备mutations对象——用于操作数据（即修改state中的数据）
// 包含多个方法: 能直接更新state
// 一个方法就是一个mutation
// mutation只能包含更新state的同步代码, 也不会有逻辑
// mutation由action触发调用: commit('mutationName')
const mutations = {
  JIA(state, value) {
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  },
}

// 准备state对象——用于存储数据
//state 对象
//类似于data
const state = {
  sum: 0,
  school: 'QFNU',
  subject: '前端',
}

// 准备getters——用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10
  },
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
})
```

`src/components/Count.vue`
```vue
<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <h3>当前求和放大10倍为:{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <select v-model.number="n">
      <!-- 这里的.number是指令修饰符，将输入的数据转换为数字 -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数时再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1,//用户选择的数字
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('jia', this.n)
    },
    decrement() {
      this.$store.dispatch('jian', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.n)
    },
  },
  computed: {
    ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),
    ...mapGetters({ bigSum: 'bigSum' }),
  }
}
</script>
```

效果：

![Vuex06.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vuex06.png)

### 6.3 mapActions与mapMutations

mapActions用于将 Vuex store 的 actions 映射到组件的方法中，可以简化在组件中触发 Vuex store actions 的代码：
```js
methods:{
    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
    ...mapActions(['jiaOdd','jiaWait'])
}
```

mapMutations用于将 Vuex store 的 mutations 映射到组件的方法中，可以简化在组件中提交 Vuex store mutations 的代码：
```js
methods:{
    //靠mapActions生成：increment、decrement（对象形式）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    
    //靠mapMutations生成：JIA、JIAN（对象形式）
    ...mapMutations(['JIA','JIAN']),
}
```

注意：mapActions 与 mapMutations 使用时，若需要传递参数，则需要在模板中绑定事件时传递好参数，否则参数是事件对象

### 6.4 mapActions与mapMutations代码演示

`src/store/index.js`
```js
import Vue from 'vue' //引入Vue核心库
import Vuex from 'vuex' // 引入Vuex

Vue.use(Vuex) // 应用Vuex插件

// 准备actions对象——用于响应组件中的动作
// 包含多个方法: 触发mutation调用, 间接更新state
// 一个方法就是一个action
// action中可以有逻辑代码和异步代码
// action由组件来触发调用: this.$store.dispatch('actionName')
const actions = {
  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500)
  },
}

// 准备mutations对象——用于操作数据（即修改state中的数据）
// 包含多个方法: 能直接更新state
// 一个方法就是一个mutation
// mutation只能包含更新state的同步代码, 也不会有逻辑
// mutation由action触发调用: commit('mutationName')
const mutations = {
  JIA(state, value) {
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  },
}

// 准备state对象——用于存储数据
//state 对象
//类似于data
const state = {
  sum: 0,
  school: 'QFNU',
  subject: '前端',
}

// 准备getters——用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10
  },
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
})
```

`src/components/Count.vue`
```vue
<template>
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <h3>当前求和放大10倍为:{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <select v-model.number="n">
      <!-- 这里的.number是指令修饰符，将输入的数据转换为数字 -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- 这里要注意传参 -->
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数时再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations,mapActions } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1,//用户选择的数字
    }
  },
  methods: {
    ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),
    ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' })
  },
  computed: {
    ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),
    ...mapGetters({ bigSum: 'bigSum' }),
  }
}
</script>
```

## 7. 多组件共享数据

案例演示：

`src/App.vue`
```vue
<template>
  <div>
    <Count/><hr/>
    <Person/>
  </div>
</template>

<script>
import Count from "./components/Count.vue"
import Person from "./components/Person.vue"

export default {
  name: "App",
  components: { Count, Person },
}
</script>
```

`src/store/index.js` 该文件用于创建 Vuex 中最为核心的 store
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
	jiaOdd(context,value){
		console.log('actions中的jiaOdd被调用了')
		if(context.state.sum % 2){
			context.commit('JIA',value)
		}
	},
	jiaWait(context,value){
		console.log('actions中的jiaWait被调用了')
		setTimeout(()=>{
			context.commit('JIA',value)
		},500)
	}
}

//准备mutations——用于操作数据（state）
const mutations = {
	JIA(state,value){
		console.log('mutations中的JIA被调用了')
		state.sum += value
	},
	JIAN(state,value){
		console.log('mutations中的JIAN被调用了')
		state.sum -= value
	},
	ADD_PERSON(state,value){
		console.log('mutations中的ADD_PERSON被调用了')
		state.personList.unshift(value)
	}
}

//准备state——用于存储数据
const state = {
	sum: 0,
	school: 'QFNU',
	subject: '前端',
	personList: []
}

//准备getters——用于将state中的数据进行加工
const getters = {
	bigSum(state){
		return state.sum*10
	}
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters
})
```

`src/components/Count.vue`
```vue
<template>
	<div>
		<h1>当前求和为：{{ sum }}</h1>
		<h3>当前求和放大10倍为：{{ bigSum }}</h3>
		<h3>我在{{ school }}，学习{{ subject }}</h3>
		<h3 style="color:red">Person组件的总人数是：{{ personList.length }}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		computed:{
			...mapState(['sum','school','subject','personList']),
			...mapGetters(['bigSum'])
		},
		methods: {
			...mapMutations({increment:'JIA',decrement:'JIAN'}),
			...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
		}
	}
</script>

<style lang="css">button{margin-left: 5px;}</style>
```

`src/components/Person.vue`
```vue
<template>
	<div>
		<h1>人员列表</h1>
		<h3 style="color:red">Count组件求和为：{{ sum }}</h3>
		<input type="text" placeholder="请输入名字" v-model="name">
		<button @click="add">添加</button>
		<ul>
			<li v-for="p in personList" :key="p.id">{{ p.name }}</li>
		</ul>
	</div>
</template>

<script>
	import {nanoid} from 'nanoid'
  import { mapState } from "vuex"
  
	export default {
		name:'Person',
		data() {
			return {
				name:''
			}
		},
		computed:{
			personList(){return this.$store.state.personList},
			sum(){return this.$store.state.sum}
		},
		methods: {
			add(){
        if (this.name === "") return
				const personObj = {id:nanoid(),name:this.name}
				this.$store.commit('ADD_PERSON',personObj)
				this.name = ''
			}
		},
	}
</script>
```

效果：

![Vuex07.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vuex07.gif)

## 8. 模块化编程

目的：让代码更好维护，让多种数据分类更加明确

### 8.1 剥离到单文件

修改 `store.js`，为了解决不同模块命名冲突的问题，将不同模块的命名空间开启 `namespaced: true`，之后在不同页面中引入 `getter`、`actions`、`mutations` 时，需要加上所属的模块名
```js
const countAbout = {
  namespaced: true,	// 开启命名空间
  state: {x:1},
  mutations: { ... },
  actions: { ... },
  getters: {
    bigSum(state){ return state.sum * 10 }
  }
}

const personAbout = {
  namespaced: true,	// 开启命名空间
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    countAbout,
    personAbout
  }
})
```

开启命名空间后，组件中读取 state 数据
```js
// 方式一：自己直接读取
this.$store.state.personAbout.list
// 方式二：借助mapState读取：
...mapState('countAbout',['sum','school','subject']),
```

开启命名空间后，组件中读取 getters 数据
```js
//方式一：自己直接读取
this.$store.getters['personAbout/firstPersonName']
//方式二：借助mapGetters读取：
...mapGetters('countAbout',['bigSum'])
```

开启命名空间后，组件中调用 dispatch
```js
//方式一：自己直接dispatch
this.$store.dispatch('personAbout/addPersonWang',person)
//方式二：借助mapActions：
...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
```

开启命名空间后，组件中调用 commit
```js
//方式一：自己直接commit
this.$store.commit('personAbout/ADD_PERSON',person)
//方式二：借助mapMutations：
...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
```

### 8.2 剥离到多个文件

`xxx.js`

```js
export default{
    namespaced:true,
    actions:{},
    mutations:{},
    state:{},
    getters:{}
}
```

`index.js`

```js
import xxx1 from '@/store/xxx.js';
import xxx2 from '@/store/xxx.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        xxx1,
        xxx2
    }
});
```

