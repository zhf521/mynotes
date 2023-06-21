---
title: 计算属性与侦听属性
order: 6
---

> 本文示例代码：[NoteDemoCode/Vue/06-Vue核心-计算属性与侦听属性](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/06-Vue核心-计算属性与侦听属性)

## 1. 计算属性

姓名案例：

![Vue核心-计算属性与侦听属性01.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-计算属性与侦听属性01.gif)

插值语法实现：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>插值语法实现姓名案例</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      姓：<input type="text" v-model="firstName" /> <br />
      名：<input type="text" v-model="lastName" /> <br />
      全名：<span>{{ firstName }}-{{ lastName }}</span>
    </div>

    <script type="text/javascript">
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          firstName: '张',
          lastName: '三',
        },
      })
    </script>
  </body>
</html>
```

methods 实现：

数据发生变化，模板就会被重新解析

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>methods实现姓名案例</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      姓：<input type="text" v-model="firstName" /><br />
      名：<input type="text" v-model="lastName" /><br />
      全名：<span>{{fullName()}}</span>
    </div>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          firstName: '张',
          lastName: '三',
        },
        methods: {
          fullName() {
            return this.firstName + '-' + this.lastName
          },
        },
      })
    </script>
  </body>
</html>
```

computed 计算属性实现：

1. 定义：要用的属性不存在，需要通过已有属性计算得来  
2. 原理：底层借助了 `Objcet.defineproperty()` 方法提供的 `getter` 和 `setter` 
3. get 函数什么时候执行？  
	1. 初次读取时会执行一次  
	2. 当依赖的数据发生改变时会被再次调用  
4. 优势：与 methods 实现相比，内部有缓存机制（复用），效率更高，调试方便  
5. 备注  
	1. 计算属性最终会出现在 vm 上，直接读取使用即可  
	2. 如果计算属性要被修改，那必须写 set 函数去响应修改，且 set 中要引起计算时依赖的数据发生改变  
	3. 如果计算属性确定不考虑修改，可以使用计算属性的简写形式

我们用计算属性实现姓名案例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>计算属性实现姓名案例</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      姓：<input type="text" v-model="firstName" /> <br />
      名：<input type="text" v-model="lastName" /> <br />
      全名：<span>{{fullName}}</span>
    </div>
    <script>
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          firstName: '张',
          lastName: '三',
        },
        computed: {
          //完整写法
          /*fullName: {
            get() {
              return this.firstName + '-' + this.lastName
            },
            set(value) {
              const arr = value.split('-')
              this.firstName = arr[0]
              this.lastName = arr[1]
            },
          },*/

          //简写形式
          fullName() {
            return this.firstName + '-' + this.lastName
          },
        },
      })
    </script>
  </body>
</html>
```

## 2. 侦听属性

### 2.1 侦听属性基本用法

watch 侦听属性   
1. 当被侦听的属性变化时，回调函数自动调用，进行相关操作  
2. 侦听的属性必须存在，才能进行侦听，既可以侦听 data，也可以侦听计算属性 
3. 配置项属性 `immediate:false`，改为 true，则初始化时调用一次 `handler(newValue,oldValue)` 
4. 侦听有两种写法  
	1. 创建 Vue 时传入 `watch:{}`配置
	2. 通过 `vm.$watch()` 侦听

例：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>侦听的基本用法</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2>今天天气很{{info}}</h2>
      <button @click="changeWeather">切换天气</button>
    </div>
    <script>
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          isHot: true,
        },
        computed: {
          info() {
            return this.isHot ? '炎热' : '凉爽'
          },
        },
        methods: {
          changeWeather() {
            this.isHot = !this.isHot
          },
        },
        //方式一
        /*watch: {
          isHot: {
            immediate: true,
            handler(newValue, oldValue) {
              console.log('isHot被修改了', newValue, oldValue)
            },
          },
        },*/
      })
      //方式二
      vm.$watch('isHot', {
        immediate: true, //初始化时让handler调用一下
        //handler什么时候调用？当isHot发生改变时
        handler(newValue, oldValue) {
          console.log('isHot被修改了', newValue, oldValue)
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-计算属性与侦听属性02.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-计算属性与侦听属性02.gif)

### 2.2 深度侦听

1. Vue 中的 watch 默认不侦听对象内部值的改变（一层）  
2. 在 watch 中配置 `deep:true` 可以侦听对象内部值的改变（多层）   

注意：
1. Vue 自身可以侦听对象内部值的改变，但 Vue 提供的 watch 默认不可以  
2. 使用 watch 时根据侦听数据的具体结构，决定是否采用深度侦听

例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>深度侦听</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h3>a的值是:{{ numbers.a }}</h3>
      <button @click="numbers.a++">点我让a+1</button>
      <h3>b的值是:{{ numbers.b }}</h3>
      <button @click="numbers.b++">点我让b+1</button>
    </div>
    <script>
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          numbers: {
            a: 1,
            b: 1,
          },
        },
        watch: {
          // 监视多级结构中某个属性的变化
          /*'numbers.a': {
            handler() {
              console.log('a被改变了')
            },
          },*/
          //监视多级结构中所有属性的变化
          numbers: {
            deep: true,
            handler() {
              console.log('numbers改变了')
            },
          },
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-计算属性与侦听属性03.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-计算属性与侦听属性03.gif)

### 2.3 侦听属性简写

如果侦听属性除了 `handler` 没有其他配置项的话，可以进行简写

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>侦听属性简写</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h3>今天天气很{{ info }}</h3>
      <button @click="changeWeather">切换天气</button>
    </div>

    <script type="text/javascript">
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: { isHot: true },
        computed: {
          info() {
            return this.isHot ? '炎热' : '凉爽'
          },
        },
        methods: {
          changeWeather() {
            this.isHot = !this.isHot
          },
        },
        watch: {
          // 正常写法
          // isHot: {
          // 	// immediate:true, //初始化时让handler调用一下
          // 	// deep:true,	//深度监视
          // 	handler(newValue, oldValue) {
          // 		console.log('isHot被修改了', newValue, oldValue)
          // 	}
          // },

          //简写
          isHot(newValue, oldValue) {
            console.log('isHot被修改了', newValue, oldValue, this)
          },
        },
      })

      //正常写法
      // vm.$watch('isHot', {
      // 	immediate: true, //初始化时让handler调用一下
      // 	deep: true,//深度监视
      // 	handler(newValue, oldValue) {
      // 		console.log('isHot被修改了', newValue, oldValue)
      // 	}
      // })l

      //简写
      // vm.$watch('isHot', (newValue, oldValue) => {
      // 	console.log('isHot被修改了', newValue, oldValue, this)
      // })
    </script>
  </body>
</html>
```

## 3. 计算属性VS侦听属性

computed 和 watch 之间的区别：  
+ computed 能完成的功能，watch 都可以完成  
+ watch 能完成的功能，computed 不一定能完成，例如 watch 可以进行异步操作  

两个重要的小原则：
+ 所有被 Vue 管理的函数，最好写成普通函数，这样 this 的指向才是 vm 或组件实例对象  
+ 所有不被 Vue 所管理的函数（定时器的回调函数、Ajax 的回调函数、Promise 的回调函数等），最好写成箭头函数，这样 this 的指向才是 vm 或组件实例对象

上面的姓名案例：

使用计算属性：
```js
new Vue({
    el:'#root', 
    data:{ 
        firstName:'张',
        lastName:'三'
    },
    computed:{
    	fullName(){
		    return this.firstName + '-' + this.lastName
    	}
    }
})
```

使用监听属性：
```js
new Vue({
  el:'#root',
  data:{
    firstName:'张',
    lastName:'三',
    fullName:'张-三'
  },
  watch:{
    firstName(val){
      setTimeout(()=>{
        this.fullName = val + '-' + this.lastName
      },1000);
    },
    lastName(val){
      this.fullName = this.firstName + '-' + val
    }
  }
})
```
