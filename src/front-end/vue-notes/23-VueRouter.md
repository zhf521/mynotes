---
title: VueRouter
order: 23
---

> 本文示例代码：[NoteDemoCode/Vue/23-VueRouter](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/23-VueRouter)

## 1. 相关理解

### 1.1 vue-router的理解

Vue 的一个插件库，专门用来实现 SPA 应用

### 1.2 对SPA应用的理解

1. 单页 Web 应用（single page web application，SPA） 
2. 整个应用只有一个完整的页面
3. 点击页面中的导航链接不会刷新页面，只会做页面的局部更新
4. 数据需要通过 Ajax 请求获取

### 1.3 路由的理解

什么是路由?  
+ 一个路由就是一组映射关系（key - value）  
+ key 为路径，value 可能是 function 或 component

路由分类：
+ 后端路由  
	+ 理解：value 是 function，用于处理客户端提交的请求  
	+ 工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据  
+ 前端路由  
	+ 理解：value 是 component，用于展示页面内容
	+ 工作过程：当浏览器的路径改变时，对应的组件就会显示

## 2. 安装VueRouter

安装 VueRouter，命令 `npm i vue-router`，如果是 Vue 2，则 `npm i vue-router@3` 

## 3. 基本路由

使用步骤：

1. 应用 VueRouter 插件
2. 编写路由组件
3. 编写其他组件
4. 编写 router 入口文件：创建 router 实例对象，编写路由规则
5. 编写应用的根组件
	+ router-link 标签：实现路由切换
	+ router-view 标签：指定路由组件的展示位置

### 3.1 应用VueRouter插件

在 `src` 目录下创建 `main.js` 项目主入口文件，编写如下代码来应用 VueRouter 插件，注册路由器对象（router）

`main.js`
```js
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器（不写文件名，就默认找router目录下的index.js）
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false;
//应用插件
Vue.use(VueRouter);

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})
```

###  3.2 编写路由组件 

`src/pages/About.vue`
```vue
<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About'
}
</script>
```

`src/pages/Home.vue`
```vue
<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
  name: 'Home'
}
</script>
```

### 3.3 编写其他组件

`src/components/Banner.vue`
```vue
<template>
  <div>
    <h2>Vue Router Demo</h2>
  </div>
</template>
<script>
export default {
  name: 'Banner'
}
</script>
```

### 3.4 编写router入口文件

在 `src` 目录下创建 router 文件夹，在 router 文件夹中创建 `index.js`（叫该名称的文件，引入的时候可以写到 router 文件夹，而不用写文件名，叫其他名称的话，要写到文件名），创建 router 实例对象，编写路由规则

`src/router/index.js`
```js
import VueRouter from 'vue-router' // 引入VueRouter
import About from '../pages/About' // 路由组件
import Home from '../pages/Home' // 路由组件

// 创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
    },
  ],
})

//暴露router
export default router
```

### 3.5 编写应用的根组件

实现路由切换：`<router-link></router-link>`，并指定路由组件的展示位置：`<router-view></router-view>`

`src/App.vue`
```js
<template>
  <div>
    <Banner></Banner>
    <!-- 原始html中我们使用a标签实现页面的跳转 -->
    <!-- <a href="./about.html">About</a> -->
    <!-- <a href="./home.html">Home</a> -->

    <!-- Vue中借助router-link标签实现路由的切换 -->
    <router-link to="/about">About</router-link>
    <br>
    <router-link to="/home">Home</router-link>
    <!-- 指定组件的呈现位置 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from './components/Banner'
export default {
  name: 'App',
  components: { Banner }
}
</script>
```

效果：



### 3.6 注意

1. 路由组件通常存放在 pages 文件夹中，一般组件通常存放在 components 文件夹中
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载  
3. 每个组件都有自己的 `$route` 属性，里面存储着自己的路由信息  
4. 整个应用只有一个 router，可以通过组件的 `$router` 属性获取到

## 4. 嵌套（多级）路由

配置路由规则，使用 children 配置项
```js
routes:[
	{
		path:'/about',
		component:About,
	},
	{
		path:'/home',
		component:Home,
		children:[ 					// 通过children配置子级路由
			{
				path:'news', 		// 此处一定不要带斜杠，写成 /news
				component:News
			},
			{
				path:'message',	// 此处一定不要写成 /message
				component:Message
			}
		]
	}
]
```

跳转（要写完整路径）
```vue
<router-link to="/home/news">News</router-link>
```

将上述案例添加嵌套路由

`src/router/index.js`
```js
import VueRouter from 'vue-router' // 引入VueRouter
import About from '../pages/About' // 路由组件
import Home from '../pages/Home' // 路由组件
import News from '../pages/News' // 路由组件
import Message from '../pages/Message' // 路由组件

// 创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
      children: [
        //通过children配置子级路由
        {
          // path: 'news' // 简化写法，此处一定不要带斜杠
          path: '/home/news', //完整写法
          component: News,
        },
        {
          path: 'message', // 简化写法
          component: Message,
        },
      ],
    },
  ],
})

//暴露router
export default router
```

添加两个子路由

`src/pages/News.vue`
```vue
<template>
  <ul>
    <li v-for="(news, index) in newsArr" :key="index">{{ news }}</li>
  </ul>
</template>

<script>
export default {
  name:'News',
  data() {
    return {
      newsArr: ["news001", "news002", "news003", "news004"],
    }
  },
}
</script>
<style></style>
```

`src/pages/Message.vue`
```vue
<template>
  <ul>
    <li v-for="message in messages" :key="message.id">
      <a href="#">{{ message.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name:'Message',
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    //模拟Ajax请求从后台获取数据
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: "message001",
        },
        {
          id: 2,
          title: "message002",
        },
        {
          id: 3,
          title: "message003",
        },
      ]
      this.messages = messages;
    }, 1000)
  },
}
</script>
<style></style>
```

`src/pages/Home.vue`
```vue
<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <router-link to="/home/news">News</router-link>
      <br>
      <router-link to="/home/message">Message</router-link>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
```

## 5. 命名路由

作用：可以简化路由的跳转

给路由命名：
```js
{
	path:'/demo',
	component:Demo,
	children:[
		{
			path:'test',
			component:Test,
			children:[
				{
					name:'hello' // 给路由命名
					path:'welcome',
					component:Hello,
				}
			]
		}
	]
}
```

简化跳转：
```vue
<!--简化前，需要写完整的路径 -->
<router-link to="/demo/test/welcome">跳转</router-link>

<!--简化后，直接通过名字跳转 -->
<router-link :to="{name:'hello'}">跳转</router-link>
```

例：
将上述案例中 News 组件跳转简化，命名为`xinwen`

`src/router/index.js`
```js
import VueRouter from 'vue-router' // 引入VueRouter
import About from '../pages/About' // 路由组件
import Home from '../pages/Home' // 路由组件
import News from '../pages/News' // 路由组件
import Message from '../pages/Message' // 路由组件

// 创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
      children: [
        //通过children配置子级路由
        {
          // path: 'news' // 简化写法，此处一定不要带斜杠
          path: '/home/news', //完整写法
          name: 'xinwen', //给路由命名
          component: News,
        },
        {
          path: 'message', // 简化写法
          component: Message,
        },
      ],
    },
  ],
})

//暴露router
export default router
```

`src/pages/Home.vue`
```vue
<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <router-link :to="{ name: 'xinwen' }">News</router-link>
      <br>
      <router-link to="/home/message">Message</router-link>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
```


## 6. 向路由组件传递数据（路由传参）

### 6.1 路由的query参数

传递参数：
```vue
<!-- 跳转并携带query参数，to的字符串写法 -->
<router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{message.title}}</router-link>
				
<!-- 跳转并携带query参数，to的对象写法（推荐） -->
<router-link 
	:to="{
		path:'/home/message/detail',
		query:{
		   id: message.id,
	       title: message.title
		}
	}"
>{{message.title}}</router-link>
```

接收参数：
```vue
$route.query.id
$route.query.title
```

例：
我们在 Message 组件下展示一个 Detail 组件

`src/pages/Message.vue`
```vue
<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{ message.title
        }}</router-link> -->

        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <router-link :to="{
            path: '/home/message/detail',
            query: {
              id: message.id,
              title: message.title,
            }
          }">{{ message.title }}</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Message',
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    //模拟Ajax请求从后台获取数据
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: "message001",
        },
        {
          id: 2,
          title: "message002",
        },
        {
          id: 3,
          title: "message003",
        },
      ]
      this.messages = messages;
    }, 1000)
  },
}
</script>
<style></style>
```

`src/pages/Detail.vue`
```vue
<template>
  <div>
    <ul>
      <li>消息编号：{{ $route.query.id }}</li>
      <li>消息标题：{{ $route.query.title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Detail'
}
</script>
```

`src/router/index.js`
```js
import VueRouter from 'vue-router' // 引入VueRouter
import About from '../pages/About' // 路由组件
import Home from '../pages/Home' // 路由组件
import News from '../pages/News' // 路由组件
import Message from '../pages/Message' // 路由组件
import Detail from '../pages/Detail' // 路由组件

// 创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
      children: [
        //通过children配置子级路由
        {
          // path: 'news' // 简化写法，此处一定不要带斜杠
          path: '/home/news', //完整写法
          name: 'xinwen', //给路由命名
          component: News,
        },
        {
          path: 'message', // 简化写法
          component: Message,
          children: [
            {
              path: 'detail',
              component: Detail,
            },
          ],
        },
      ],
    },
  ],
})

//暴露router
export default router
```

### 6.2 路由的params参数

配置路由，声明接收 params 参数：
```js
{
	path:'/home',
	component:Home,
	children:[
		{
			path:'news',
			name: 'xinwen', //给路由命名
			component:News
		},
		{
			component:Message,
			children:[
				{
					name:'xiangqing',//命名路由
					path:'detail/:id/:title', // 使用占位符声明接收params参数
					component:Detail
				}
			]
		}
	]
}
```

传递参数，特别注意：路由携带 params 参数时，若使用 to 的对象写法，则不能使用 path 配置项，必须使用 name 配置！

```vue
<!-- 跳转并携带params参数，to的字符串写法 -->
<router-link :to="/home/message/detail/${message.id}/${message.title}">跳转</router-link>
				
<!-- 跳转并携带params参数，to的对象写法 -->
<router-link 
	:to="{
		name:'xiangqing',
        params: {
          id: message.id,
          title: message.title,
        }
	}"
>跳转</router-link>
```

接收参数：
```js
$route.params.id
$route.params.title
```

例：我们使用 params 参数传递实现上面的案例

`src/pages/Message.vue`
```vue
<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{ message.title
        }}</router-link>
        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <!-- <router-link :to="{
            //path:'/home/message/detail',//这里不能用path，应该用命名路由
            name:'xiangqing',
            params: {
              id: message.id,
              title: message.title,
            }
          }
          ">{{ message.title }}</router-link> -->
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Message',
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    //模拟Ajax请求从后台获取数据
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: "message001",
        },
        {
          id: 2,
          title: "message002",
        },
        {
          id: 3,
          title: "message003",
        },
      ]
      this.messages = messages;
    }, 1000)
  },
}
</script>
```

`src/pages/Detail.vue`
```vue
<template>
  <div>
    <ul>
      <li>消息编号：{{ $route.params.id }}</li>
      <li>消息标题：{{ $route.params.title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Detail'
}
</script>
```

`src/router/index.js`
```js
import VueRouter from 'vue-router' // 引入VueRouter
import About from '../pages/About' // 路由组件
import Home from '../pages/Home' // 路由组件
import News from '../pages/News' // 路由组件
import Message from '../pages/Message' // 路由组件
import Detail from '../pages/Detail' // 路由组件

// 创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
      children: [
        //通过children配置子级路由
        {
          // path: 'news' // 简化写法，此处一定不要带斜杠
          path: '/home/news', //完整写法
          name: 'xinwen', //给路由命名
          component: News,
        },
        {
          path: 'message', // 简化写法
          component: Message,
          children: [
            {
              path: 'detail/:id/:title', //使用占位符声明接收params参数
              name:'xiangqing',//命名路由
              component: Detail,
            },
          ],
        },
      ],
    },
  ],
})

//暴露router
export default router
```

### 6.3 路由的props配置

props 作用：让路由组件更方便的收到参数

```js
{
	name:'xiangqing',
	path:'detail',//注意此处参数，传递query和params参数时不一样
	component:Detail,

	//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
	// props:{a:900}

	//第二种写法：props值为布尔值，为true时，则把路由收到的所有params参数通过props传给Detail组件
	// props:true
	
	//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
	props($route){
		return {
			id: $route.query.id,
			title: $route.query.title
		}
	}
}
```

接收：
```
props['参数1','参数2',……]
```

例：将上述案例使用 props 配置的第三种方法

`src/router/index.js`
```js
import VueRouter from 'vue-router' // 引入VueRouter
import About from '../pages/About' // 路由组件
import Home from '../pages/Home' // 路由组件
import News from '../pages/News' // 路由组件
import Message from '../pages/Message' // 路由组件
import Detail from '../pages/Detail' // 路由组件

// 创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
      children: [
        //通过children配置子级路由
        {
          // path: 'news' // 简化写法，此处一定不要带斜杠
          path: '/home/news', //完整写法
          name: 'xinwen', //给路由命名
          component: News,
        },
        {
          path: 'message', // 简化写法
          component: Message,
          children: [
            {
              path: 'detail', //使用占位符声明接收params参数
              name: 'xiangqing', //命名路由
              component: Detail,
              //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
              // props:{a:900}

              //第二种写法：props值为布尔值，为true时，则把路由收到的所有params参数通过props传给Detail组件
              // props:true

              //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                }
              },
            },
          ],
        },
      ],
    },
  ],
})

//暴露router
export default router
```

`src/pages/Detail.vue`
```vue
<template>
  <div>
    <ul>
      <li>消息编号：{{ id }}</li>
      <li>消息标题：{{ title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Detail',
  props: ['id', 'title']
}
</script>
```

`src/pages/Message.vue`
```vue
<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="{
            name: 'xiangqing',
            query: {
              id: message.id,
              title: message.title
            }
          }">{{ message.title
  }}</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Message',
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    //模拟Ajax请求从后台获取数据
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: "message001",
        },
        {
          id: 2,
          title: "message002",
        },
        {
          id: 3,
          title: "message003",
        },
      ]
      this.messages = messages;
    }, 1000)
  },
}
</script>
```

## 7. 路由跳转的replace方法

作用：控制路由跳转时操作浏览器历史记录的模式

浏览器的历史记录有两种写入方式：push 和 replace
+ push 是追加历史记录
+ replace 是替换当前记录，路由跳转时候默认为 push 方式

开启 replace 模式，`<router-link :replace="true" ...>News</router-link>`  
简写 `<router-link replace ...>News</router-link>`

总结：浏览记录本质是一个栈，默认 push，点开新页面就会在栈顶追加一个地址，后退，栈顶指针向下移动，改为 replace 就是不追加，而将栈顶地址替换

例：
我们将上面的案例改为 replace 方式 

`src/pages/Home.vue`
```vue
<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <router-link replace :to="{ name: 'xinwen' }">News</router-link>
      <br>
      <router-link replace to="/home/message">Message</router-link>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
```

## 8. 编程式路由导航

作用：不借助 `<router-link>` 实现路由跳转，让路由跳转更加灵活 

相关 API：
1.  `this.$router.push({})`：内传的对象与 `<router-link>` 中的 to 相同，相当于点击路由链接（可以返回到当前路由界面）
2. `this.$router.replace({})`：用新路由替换当前路由（不可以返回到当前路由界面）
3. `this.$router.forward()`：前进
4. `this.$router.back()`：后退
5. `this.$router.go(n)` 可前进也可后退，n 为正数前进，n 为负数后退 

例：我们将上面的例子添加编程式路由导航

`src/pages/Message.vue`
```vue
<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="{
            name: 'xiangqing',
            query: {
              id: message.id,
              title: message.title
            }
          }">{{ message.title
  }}</router-link>
        <button @click="showPush(message)">push查看</button>
        <button @click="showReplace(message)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Message',
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    //模拟Ajax请求从后台获取数据
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: "message001",
        },
        {
          id: 2,
          title: "message002",
        },
        {
          id: 3,
          title: "message003",
        },
      ]
      this.messages = messages;
    }, 1000)
  },
  methods: {
    showPush(message) {
      this.$router.push({
        name: 'xiangqing',
        query: {
          id: message.id,
          title: message.title
        }
      })
    },
    showReplace(message) {
      this.$router.replace({
        name: 'xiangqing',
        query: {
          id: message.id,
          title: message.title
        }
      })
    }
  }
}
</script>
```

## 9. 缓存路由组件

作用：让不展示的路由组件保持挂载，不被销毁

`<keep-alive include="News"><router-view></router-view></keep-alive>`

`<keep-alive :include="['News','Message']"><router-view></router-view></keep-alive>`

```vue
// 缓存一个路由组件
<keep-alive include="News"> // include中写想要缓存的组件名，不写表示全部缓存
    <router-view></router-view>
</keep-alive>

// 缓存多个路由组件
<keep-alive :include="['News','Message']"> 
    <router-view></router-view>
</keep-alive>
```

例：我们将上述案例中 news 后面增加一个输入框，当我们跳转到其它界面再回来时里面的输入内容会消失，使用缓存组件可以解决该问题

`src/pages/News.vue`
```vue
<template>
  <ul>
    <li v-for="(news, index) in newsArr" :key="index">{{ news }} <input type="text"> </li>
  </ul>
</template>

<script>
export default {
  name:'News',
  data() {
    return {
      newsArr: ["news001", "news002", "news003", "news004"],
    }
  },
}
</script>
<style></style>
```

`src/pages/Home.vue`
```vue
<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <router-link replace :to="{ name: 'xinwen' }">News</router-link>
      <br>
      <router-link replace to="/home/message">Message</router-link>
      <div>
        <keep-alive include="News">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
```

## 10. activated与deactivated生命周期钩子 

activated 和 deactivated 是路由组件所独有的两个生命周期钩子，用于捕获路由组件的激活状态

具体使用：  
1. activated 路由组件被激活时触发  
2. deactivated 路由组件失活时触发

例：我们在上面案例中 news 上面添加一个动态的“欢迎学习 Vue”

`src/pages/News.vue`
```vue
<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li v-for="(news, index) in newsArr" :key="index">{{ news }} <input type="text"> </li>
  </ul>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      newsArr: ["news001", "news002", "news003", "news004"],
      opacity: 1,
    }
  },
  activated() {
    console.log('News组件被激活了')
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  deactivated() {
    console.log('News组件失活了')
    clearInterval(this.timer)
  }
}
</script>
<style></style>
```

## 11. 路由守卫

作用：对路由进行权限控制

分类：全局守卫、独享守卫、组件内守卫

### 11.1 全局路由守卫

例：我们给上述案例添加全局路由守卫，当 localStorage 中 school 为 `QFNU` 时才可以访问新闻和消息界面，同时我们切换组件时标题发生改变

`src/router/index.js`
```js
import VueRouter from 'vue-router' // 引入VueRouter
import About from '../pages/About' // 路由组件
import Home from '../pages/Home' // 路由组件
import News from '../pages/News' // 路由组件
import Message from '../pages/Message' // 路由组件
import Detail from '../pages/Detail' // 路由组件

// 创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
      meta: { title: '关于' },
    },
    {
      path: '/home',
      component: Home,
      meta: { title: '主页' },
      children: [
        //通过children配置子级路由
        {
          // path: 'news' // 简化写法，此处一定不要带斜杠
          path: '/home/news', //完整写法
          name: 'xinwen', //给路由命名
          component: News,
          meta: { isAuth: true, title: '新闻' },
        },
        {
          path: 'message', // 简化写法
          component: Message,
          meta: { isAuth: true, title: '消息' },
          children: [
            {
              path: 'detail', //使用占位符声明接收params参数
              name: 'xiangqing', //命名路由
              component: Detail,
              meta: { title: '详情' },
              //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
              // props:{a:900}

              //第二种写法：props值为布尔值，为true时，则把路由收到的所有params参数通过props传给Detail组件
              // props:true

              //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                }
              },
            },
          ],
        },
      ],
    },
  ],
})

//全局前置路由守卫：初始化时、每次路由切换前执行
router.beforeEach((to, from, next) => {
  // 判断当前路由是否需要进行权限控制,这里的meta表示路由元信息
  if (to.meta.isAuth) {
    // 权限控制的具体规则
    if (localStorage.getItem('school') === 'QFNU') {
      next() // 放行
    } else {
      alert('暂无权限查看')
    }
  } else {
    next() // 放行
  }
})

// 全局后置守卫：初始化时、每次路由切换后执行
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title //修改网页的title
  } else {
    document.title = 'Vue'
  }
})

//暴露router
export default router
```

### 11.2 独享路由守卫

例：我们给上述案例添加独享路由守卫，当 localStorage 中 school 为 `QFNU` 时才可以访问新闻界面

我们给新闻的路由配置添加独享路由守卫即可（可以配合全局后置路由守卫）

`src/router/index.js`
```js
import VueRouter from 'vue-router' // 引入VueRouter
import About from '../pages/About' // 路由组件
import Home from '../pages/Home' // 路由组件
import News from '../pages/News' // 路由组件
import Message from '../pages/Message' // 路由组件
import Detail from '../pages/Detail' // 路由组件

// 创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
      meta: { title: '关于' },
    },
    {
      path: '/home',
      component: Home,
      meta: { title: '主页' },
      children: [
        //通过children配置子级路由
        {
          // path: 'news' // 简化写法，此处一定不要带斜杠
          path: '/home/news', //完整写法
          name: 'xinwen', //给路由命名
          component: News,
          meta: { isAuth: true, title: '新闻' },
          beforeEnter(to, from, next) {
            console.log('beforeEnter', to, from)
            if (localStorage.getItem('school') === 'QFNU') {
              next()
            } else {
              alert('暂无权限查看')
            }
          },
        },
        {
          path: 'message', // 简化写法
          component: Message,
          meta: { isAuth: true, title: '消息' },
          children: [
            {
              path: 'detail', //使用占位符声明接收params参数
              name: 'xiangqing', //命名路由
              component: Detail,
              meta: { title: '详情' },
              //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
              // props:{a:900}

              //第二种写法：props值为布尔值，为true时，则把路由收到的所有params参数通过props传给Detail组件
              // props:true

              //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                }
              },
            },
          ],
        },
      ],
    },
  ],
})

// 全局后置守卫：初始化时、每次路由切换后执行
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title //修改网页的title
  } else {
    document.title = 'Vue'
  }
})

//暴露router
export default router

```

### 11.3 组件内路由守卫

```js
//进入守卫：通过路由规则，进入该组件时被调用
beforeRouteEnter (to, from, next) {... next()},

//离开守卫：通过路由规则，离开该组件时被调用
beforeRouteLeave (to, from, next) {... next()},
```

例：我们将上述案例中其它的路由守卫配置删除，给 About 组件添加组件内路由守卫

`src/pages/About.vue`
```vue
<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About',
  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log('About--beforeRouteEnter', to, from)
    if (localStorage.getItem('school') === 'QFNU') {
      next()
    } else {
      alert('学校名不对，无权限查看！')
    }
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log('About--beforeRouteLeave', to, from)
    next()
  }
}
</script>
```

## 12. 路由器的两种工作模式

对于一个 url 来说，什么是 hash 值：`#` 及其后面的内容就是 hash 值

hash 值不会包含在 HTTP 请求中，即：hash 值不会带给服务器

hash 模式：
+ 地址中永远带着 `#` 号，不美观
+ 若以后将地址通过第三方手机 app 分享，若 app 校验严格，则地址会被标记为不合法
+ 兼容性较好

history 模式：
+ 地址干净，美观
+ 兼容性和 hash 模式相比略差
+ 应用部署上线时需要后端人员支持，解决刷新页面服务端 404 的问题

```js
const router =  new VueRouter({
	mode:'history',
	routes:[...]
})

export default router
```
