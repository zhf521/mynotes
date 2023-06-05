---
title: Vue核心-发送Ajax请求
order: 20
---

> 本文示例代码：[NoteDemoCode/Vue/20-Vue核心-发送Ajax请求](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/20-Vue核心-发送Ajax请求)

# Vue 脚手架配置代理

目的：解决开发环境 Ajax 跨域问题

注意：`vue.config.js` 是一个可选的配置文件，如果项目的 (和 `package.json` 同级的) 根目录中存在这个文件，那么它会被 `@vue/cli-service` 自动加载。你也可以使用 `package.json` 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写

## 方法一

在 `vue.config.js` 中添加如下配置：
```js
  devServer:{
    proxy:"http://localhost:5000"
  }
```

说明：
1. 优点：配置简单，请求资源时直接发给前端（8080）即可
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，该请求会转发给服务器 （优先匹配前端资源）

## 方法二

编写 `vue.config.js` 配置具体代理规则：
```js
module.exports = {
	devServer: {
      proxy: {
      '/api1': {													// 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:5000',	// 代理目标的基础路径
        pathRewrite: {'^/api1':''},				// 代理往后端服务器的请求去掉 /api1 前缀
        ws: true,													// WebSocket
        changeOrigin: true,
        
      },
      '/api2': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/api2': ''},
        changeOrigin: true
      }
    }
  }
}
/*
   changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
   changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
   changeOrigin默认值为true
*/
```

说明：
1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
2. 缺点：配置略微繁琐，请求资源时必须加前缀

## 示例

`vue.config.js`
```js
module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
        },
    },
    lintOnSave:false,
    // 开启代理服务器（方式一）
    // devServer: {
    //     proxy:'http://localhost:5000'
    // }

    //开启代理服务器（方式二）
	devServer: {
        proxy: {
            '/api1': {
                target: 'http://localhost:5000',
                pathRewrite:{'^/api1':''},
                // ws: true, //用于支持websocket,默认值为true
                // changeOrigin: true //用于控制请求头中的host值,默认值为true
            },
            '/api2': {
                target: 'http://localhost:5001',
                pathRewrite:{'^/api2':''},
            }
        }
    }
}
```

# GitHub 用户搜索案例

接口地址：`https://api.github.com/search/users?q=xxx`

`src/main.js`
```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el:"#app",
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})
```

`src/App.vue`
```vue
<template>
  <div>
    <MySearch></MySearch>
    <MyList></MyList>
  </div>
</template>

<script>
import MyList from './components/MyList'
import MySearch from './components/MySearch'
export default {
  name: 'App',
  components: { MyList, MySearch }
}
</script>
```

`src/components/MySearch.vue`
```vue
<template>
  <div>
    <h1>Search Github Users</h1>
    <input type="text" placeholder="enter the name you search" v-model="searchName">
    <button @click="search">Search</button>
  </div>
</template>
<script>
export default {
  name: 'MySearch',
  data() {
    return {
      searchName: "",
    }
  },
  methods: {
    search() {
      const searchName = this.searchName.trim()
      if (searchName) {
        this.$bus.$emit('updateList', searchName)
      }
    }
  }
}
</script>
```

`src/components/MyList.vue`
```vue
<template>
  <div>
    <h2 v-if="loading">Loading...</h2>
    <h2 v-if="errorMsg">{{ errorMsg }}</h2>
    <div v-for="(user, index) in users" :key="index">
      <a :href="user.url">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.name }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'MyList',
  data() {
    return {
      firstView: true,
      loading: false,
      users: null,
      errorMsg: ''
    }
  },
  mounted() {
    this.$bus.$on("updateList", (searchName) => {

      this.firstView = false
      this.loading = true
      this.users = null
      this.errorMsg = ""

      axios.get(`https://api.github.com/search/users?q=${searchName}`).then((response) => {
        console.log('请求成功')
        const result = response.data
        const users = result.items.map((item) => ({
          url: item.html_url,
          avatar_url: item.avatar_url,
          name: item.login
        }))
        this.loading = false
        this.users = users
      })
        .catch((error) => {
          this.loading = false
          this.errorMsg = "请求失败"
          console.log('请求失败')
          console.log(error)
        })
    })
  }
}
</script>
```

# Vue 项目常用的两个 Ajax 库

vue 项目常用的两个 Ajax 库:
1. axios：通用的 Ajax 请求库，官方推荐，效率高，安装 `npm install axios` 
2. vue-resource：vue 插件库，vue 1. x 使用广泛，官方已不维护   

下载 vue-resource 库 `npm i vue-resource`

`src/main.js`
```js
import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(vueResource)

new Vue({
    el:"#app",
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})
```

`src/App.vue`
```vue
<template>
	<div class="container">
		<Search/>
		<List/>
	</div>
</template>

<script>
	import Search from './components/Search.vue'
	import List from './components/List.vue'

    export default {
        name:'App',
		components:{ Search, List },
	}
</script>
```

`src/components/Search.vue`
```vue
<template>
    <section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
      <button @click="getUsers">Search</button>
		</div>
    </section>
</template>

<script>
  export default {
    name:'Search',
    data() {
      return {
        keyWord:''
      }
    },
    methods: {
      getUsers(){
        //请求前更新List的数据
        this.$bus.$emit('updateListData',
                        {isLoading:true,errMsg:'',users:[],isFirst:false})
        this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            console.log('请求成功了')
            //请求成功后更新List的数据
            this.$bus.$emit('updateListData',
                            {isLoading:false,errMsg:'',users:response.data.items})
          },
          error => {
            //请求后更新List的数据
            this.$bus.$emit('updateListData',
                            {isLoading:false,errMsg:error.message,users:[]})
          }
        )
      }
    }
  }
</script>
```

`src/components/List.vue`
```vue
<template>
    <div class="row">
        <!-- 展示用户列表 -->
        <div class="card" v-show="info.users.length" v-for="user in info.users" :key="user.id">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <h4 class="card-title">{{user.login}}</h4>
        </div>
        <!-- 展示欢迎词 -->
        <h1 v-show="info.isFirst">欢迎使用！</h1>
        <!-- 展示加载中 -->
        <h1 v-show="info.isLoading">加载中...</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="info.errMsg">{{errMsg}}</h1>
    </div>
</template>

<script>
    export default {
        name:'List',
        data() {
            return {
                info:{
                    isFirst:true,
                    isLoading:false,
                    errMsg:'',
                    users:[]
                }
            }
        },
        mounted(){
            this.$bus.$on('updateListData',(dataObj)=>{
                this.info = {...this.info,...dataObj}
            })
        },
        beforeDestroy(){
            this.$bus.$off('updateListData')
        }
    }
</script>
```

