---
title: Ajax
order: 30
---

## Ajax简介

Ajax 全称为 `Asynchronous JavaScript And XML`，就是异步 JS 和 XML

通过 AJAX 可以在浏览器中向服务器发送异步请求，AJAX 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式，是前后台交互的能力

传统网站的问题：
- 为了获取数据，需要重新加载，浪费资源，增加等待时间，性能不好
- 验证表单过程中，一项内容不合格，页面需要重新加载，体验不好

解决问题:
- 使用 Ajax 可以==无刷新获取数据== 

## Ajax的特点

Ajax 的优点：
+ 可以无需刷新页面而与服务器端进行通信
+ 允许你根据用户事件来更新部分页面内容  
+ JS 原生支持

Ajax 的缺点：
+ 没有浏览历史，不能回退
+ 存在跨域问题（同源）
+ SEO（Search Engine Optimization，搜索引擎优化）不友好，爬虫无法爬取

## XML简介

XML 可扩展标记语言，被设计用来传输和存储数据

XML 和 HTML 类似，不同的是 HTML 中都是预定义标签，而 XML 中没有预定义标签，全都是自定义标签，用来表示一些数据

比如说我有一个学生数据：`name="孙悟空";age=18;gender="男";`

用 XML 表示：
```xml
<student>
	<name>孙悟空</name>
	<age>18</age>
	<gender>男</gender>
</student>
```

现在已经被 JSON 取代了，用 JSON 表示：
```json
{"name":"孙悟空","age":18,"gender":"男"}
```

## 原生Ajax

### Ajax基础

在 JS 中有内置的构造函数来创建 Ajax 对象，创建 Ajax 对象以后，我们就可以使用 Ajax 对象的方法去发送请求和接受响应

#### 创建一个Ajax对象

```javascript
// IE9及以上
const xhr = new XMLHttpRequest()

// IE9以下
const xhr = new ActiveXObject('Mricosoft.XMLHTTP')
```

上面代码就创建了一个 Ajax 对象，我们就可以使用这个 `xhr` 对象来发送 Ajax 请求了

#### 配置链接信息

```javascript
const xhr = new XMLHttpRequest()

// xhr 对象中的 open 方法是来配置请求信息的
// 第一个参数是本次请求的请求方式 get / post / put / ...
// 第二个参数是本次请求的 url 
// 第三个参数是本次请求是否异步，默认 true 表示异步，false 表示同步
// xhr.open('请求方式', '请求地址', 是否异步)
xhr.open('get', './data.json')
```

上面的代码执行完毕以后，本次请求的基本配置信息就写完了

#### 发送请求

```javascript
const xhr = new XMLHttpRequest()
xhr.open('get', './data.json')

// 使用 xhr 对象中的 send 方法来发送请求
xhr.send()
```

上面代码是把配置好信息的 Ajax 对象发送到服务端

#### 一个基本的Ajax请求

一个最基本的 Ajax 请求就是上面三步，但是光有上面的三个步骤，我们确实能把请求发送的到服务端，如果服务端正常的话，响应也能回到客户端，但是我们拿不到响应，如果想拿到响应，有两个前提条件：
  1. 本次 HTTP 请求是成功的，也就是 HTTP 状态码为 200 ~ 299
  2. Ajax 对象也有自己的状态码，用来表示本次 Ajax 请求中各个阶段

#### Ajax状态码

Ajax 状态码 `xhr.readyState`，是用来表示一个 Ajax 请求的全部过程中的某一个状态：
+ `readyState === 0`：  表示未初始化完成，也就是 `open` 方法还没有执行
+ `readyState === 1`：  表示配置信息已经完成，也就是执行完 `open` 之后
+ `readyState === 2`：  表示 `send` 方法已经执行完成
- `readyState === 3`：  表示正在解析响应内容
- `readyState === 4`：  表示响应内容已经解析完毕，可以在客户端使用了

这个时候我们就会发现，当一个 Ajax 请求的全部过程中，只有当 `readyState === 4` 的时候，我们才可以正常使用服务端给我们的数据

一个 Ajax 对象中有一个成员叫做 `xhr.status` ，这个成员就是记录本次请求的 HTTP 状态码的，两个条件都满足的时候，才是本次请求正常完成

#### readyStateChange

在 Ajax 对象中有一个事件，叫做 `readyStateChange` 事件，这个事件是专门用来监听 Ajax 对象的 `readyState` 值改变的的行为，也就是说只要 `readyState` 的值发生变化了，那么就会触发该事件，所以我们就在这个事件中来监听 Ajax 的 `readyState` 是不是到 4 了

  ```javascript
  const xhr = new XMLHttpRequest()
  xhr.open('get', './data.json')
  
  xhr.send()
  
  xhr.onreadyStateChange = function () {
    // 每次 readyState 改变的时候都会触发该事件
    // 我们就在这里判断 readyState 的值是不是到 4
    // 并且 http 的状态码是不是 200 ~ 299
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
      // 这里表示验证通过
      // 我们就可以获取服务端给我们响应的内容了
    }
  }
  ```

#### responseText

Ajax 对象中的 `responseText` 成员就是用来记录服务端给我们的响应体内容的，所以我们就用这个成员来获取响应体的内容

  ```javascript
  const xhr = new XMLHttpRequest()
  xhr.open('get', './data.json')
  
  xhr.send()
  
  xhr.onreadyStateChange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
      // 我们在这里直接打印 xhr.responseText 来查看服务端给我们返回的内容
      console.log(xhr.responseText)
    }
  }
  ```

### 使用Ajax发送请求时携带参数

我们使用 Ajax 发送请求也是可以携带参数的，参数就是和后台交互的时候给他的一些信息，携带参数 get 和 post 两个方式还是有区别的

#### 发送一个带有参数的get请求

get 请求的参数就直接在 url 后面进行拼接就可以

  ```javascript
  const xhr = new XMLHttpRequest()
  // 直接在地址后面加一个 ?，然后以 key=value 的形式传递
  // 两个数据之间以 & 分割
  xhr.open('get', './data.json?a=100&b=200')
  
  xhr.send()
  ```

这样服务端就能接受到两个参数
  - 一个是 a，值是 100
  - 一个是 b，值是 200

#### 发送一个带有参数的post请求

post 请求的参数是携带在请求体中的，所以不需要在 url 后面拼接

  ```javascript
  const xhr = new XMLHttpRequest()
  xhr.open('get', './data.json')
  
  // 如果是用 Ajax 对象发送 post 请求，必须要先设置一下请求头中的 content-type
  // 告诉一下服务端我给你的是一个什么样子的数据格式
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
  
  // 请求体直接在 send 的时候写在 () 里面就行
  // 不需要问号，直接就是 'key=value&key=value' 的形式
  xhr.send('a=100&b=200')
  ```

`application/x-www-form-urlencoded` 表示的数据格式就是 `key=value&key=value`，还可以发送 JSON 格式

#### 不同的请求方式

- get  偏向获取 
- post 偏向提交 
- put  偏向更新
- patch  偏向修改部分
- delete 偏向删除信息
- head 偏向获取服务器头的信息
- option 偏向获取服务器设备信息
- connnect 保留请求方式

#### 实例

我们可以使用 `json-server` 来演示，`JSON-Server` 是一个 Node 模块，通过在本地搭建一个 json 服务器，产生测试数据，来模拟服务器端接口数据。用于前端开发人员，在进行前后端分离开发时，后端还没有搭建好时，可以使用 `json-server` 模拟 `REST API`

安装 json-server：
```
npm install -g json-server
```

在当前目录下创建一个 `db.json` 文件

```js
{
  "list": [
    "111",
    "222",
    "333"
  ],
  "users": [
    {
      "id": 1,
      "name": "zhf"
    },
    {
      "id": 2,
      "name": "xt"
    },
  ],
  "shopcar": [],
  "detail": {
    "name": "手机"
  }
}
```

在当前目录下打开终端环境，键入：`json-server db.json --watch` 即可

测试代码：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button id="get">get</button>
    <button id="post">post</button>
    <button id="put">put</button>
    <button id="patch">patch</button>
    <button id="delete">delete</button>
    <script>
      const oGet = document.querySelector('#get')
      const oPost = document.querySelector('#post')
      const oPut = document.querySelector('#put')
      const oPatch = document.querySelector('#patch')
      const oDelete = document.querySelector('#delete')

      oGet.addEventListener('click', function () {
        //console.log('get')
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://localhost:3000/users?id=1', true)
        xhr.send()
        xhr.onload = function () {
          //console.log(xhr.readyState)
          if (/^2\d{2}$/.test(xhr.status)) {
            console.log(JSON.parse(xhr.responseText))
          } else {
            console.log('error', xhr.responseText)
          }
        }
      })
      oPost.addEventListener('click', function () {
        //console.log('post')
        let xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://localhost:3000/users', true)
        //form编码 name=zhf&age=18
        //json {name:"zhf",age:18}
        // xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
        // xhr.send(`name=tc&age=18`)//数据放在这里
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.send(
          JSON.stringify({
            name: 'gl',
            age: 90,
          })
        )
        xhr.onload = function () {
          //console.log(xhr.readyState)
          if (/^2\d{2}$/.test(xhr.status)) {
            console.log(JSON.parse(xhr.responseText))
          } else {
            console.log('error', xhr.responseText)
          }
        }
      })
      oPut.addEventListener('click', function () {
        //console.log('put')
        let xhr = new XMLHttpRequest()
        xhr.open('PUT', 'http://localhost:3000/users/4', true)
        //form编码 name=zhf&age=18
        //json {name:"zhf",age:18}
        // xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
        // xhr.send(`name=tc&age=18`)//数据放在这里
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.send(
          JSON.stringify({
            age: 80,
          })
        )
        xhr.onload = function () {
          //console.log(xhr.readyState)
          if (/^2\d{2}$/.test(xhr.status)) {
            console.log(JSON.parse(xhr.responseText))
          } else {
            console.log('error', xhr.responseText)
          }
        }
      })
      oPatch.addEventListener('click', function () {
        //console.log('patch')
        let xhr = new XMLHttpRequest()
        xhr.open('PATCH', 'http://localhost:3000/users/5', true)
        //form编码 name=zhf&age=18
        //json {name:"zhf",age:18}
        // xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
        // xhr.send(`name=tc&age=18`)//数据放在这里
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.send(
          JSON.stringify({
            age: 180,
          })
        )
        xhr.onload = function () {
          //console.log(xhr.readyState)
          if (/^2\d{2}$/.test(xhr.status)) {
            console.log(JSON.parse(xhr.responseText))
          } else {
            console.log('error', xhr.responseText)
          }
        }
      })
      oDelete.addEventListener('click', function () {
        //console.log('delete')
        let xhr = new XMLHttpRequest()
        xhr.open('DELETE', 'http://localhost:3000/users/7', true)
        xhr.send()
        xhr.onload = function () {
          //console.log(xhr.readyState)
          if (/^2\d{2}$/.test(xhr.status)) {
            console.log(JSON.parse(xhr.responseText))
          } else {
            console.log('error', xhr.responseText)
          }
        }
      })
    </script>
  </body>
</html>

```

## Fetch

XMLHttpRequest 是一个设计粗糙的 API，配置和调用方式非常混乱，而且基于事件的异步模型写起来不友好

### 用法

```js
fetch("http://localhost:3000/users")
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })

fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                username:"kerwin",
                password:"123"
            })
        })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })

fetch("http://localhost:3000/users/5",{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                username:"kerwin",
                password:"456"
            })
        })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })

fetch("http://localhost:3000/users/5",{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })
```

### 错误处理

```js
//
fetch("http://localhost:3000/users1")
            .then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    return Promise.reject({
                        status:res.status,
                        statusText:res.statusText
                    })
                }
            })
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
```

### 实例

`db.json` 文件
```json
{
  "list": [
    "111",
    "222",
    "333"
  ],
  "users": [
    {
      "name": "kerwin",
      "age": "100",
      "id": 1
    }
  ],
  "shopcar": [],
  "detail": {
    "name": "手机"
  }
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button id="get">get</button>
    <button id="post">post</button>
    <button id="put">put</button>
    <button id="patch">patch</button>
    <button id="delete">delete</button>
    <script>
      const oGet = document.querySelector('#get')
      const oPost = document.querySelector('#post')
      const oPut = document.querySelector('#put')
      const oPatch = document.querySelector('#patch')
      const oDelete = document.querySelector('#delete')

      oGet.addEventListener('click', function () {
        fetch('http://localhost:3000/users111?id=1')
          .then((res) => {
            if (res.ok) {
              return res.json()
            } else {
              return Promise.reject({
                status: res.status,
                statusText: res.statusText,
              })
            }
          })
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log('err', err)
          })
      })
      oPost.addEventListener('click', function () {
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            //"content-type":"application/x-www-form-urlencoded"
            'content-type': 'application/json',
          },
          //body:"name=kerwin&age=100"
          body: JSON.stringify({
            name: 'zhf',
            age: 18,
          }),
        })
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            console.log(res)
          })
      })
      oPut.addEventListener('click', function () {
        fetch('http://localhost:3000/users/2', {
          method: 'PUT',
          headers: {
            //"content-type":"application/x-www-form-urlencoded"
            'content-type': 'application/json',
          },
          //body:"name=kerwin&age=100"
          body: JSON.stringify({
            age: 20,
          }),
        })
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            console.log(res)
          })
      })
      oPatch.addEventListener('click', function () {
        fetch('http://localhost:3000/users/2', {
          method: 'PATCH', //必须大写
          headers: {
            //"content-type":"application/x-www-form-urlencoded"
            'content-type': 'application/json',
          },
          //body:"name=kerwin&age=100"
          body: JSON.stringify({
            age: 280,
          }),
        })
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            console.log(res)
          })
      })
      oDelete.addEventListener('click', function () {
        fetch('http://localhost:3000/users/2', {
          method: 'DELETE',
        })
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            console.log(res)
          })
      })
    </script>
  </body>
</html>

```

## axios

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 `node.js` 中

> https://www.npmjs.com/package/axios

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### get请求

```js
axios.get("http://localhost:3000/users",{
    params:{
        name:"kerwin"
    }
}).then(res=>{
    console.log(res.data)
})
```

### post请求

```js
axios.post("http://localhost:3000/users",{
    name:"kerwin",
    age:100
}).then(res=>{
	console.log(res.data)
})
```

### put请求

```js
axios.put("http://localhost:3000/users/12",{
    name:"kerwin111",
    age:200
}).then(res=>{
    console.log(res.data)
})
```

### delete请求

```js
axios.delete("http://localhost:3000/users/11").then(res=>{
    console.log(res.data)
})
```

### axios(config)配置

```js

axios({
    method: 'post',
    url: 'http://localhost:3000/users',
    data: {
        name: 'kerwin',
        age: 100
    }
})
    .then(res => {
    console.log(res.data)
}).catch(err=>{
    console.log(err)
})
```



### axios拦截器

```js
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("loading-开始")
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    console.log("loading-结束")
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("loading---结束")
    return Promise.reject(error);
});
```

### axios中断器

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// cancel the request
controller.abort()

```

### 实例

#### axios基础

`db.json`
```json
{
  "list": [
    "111",
    "222",
    "333"
  ],
  "users": [
    {
      "name": "kerwin",
      "age": "100",
      "id": 1
    },
    {
      "name": "zhf",
      "age": 18,
      "id": 2
    }
  ],
  "shopcar": [],
  "detail": {
    "name": "手机"
  }
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/axios/1.3.4/axios.js"></script>
  </head>
  <body>
    <button id="get">get</button>
    <button id="post">post</button>
    <button id="put">put</button>
    <button id="patch">patch</button>
    <button id="delete">delete</button>
    <script>
      const oGet = document.querySelector('#get')
      const oPost = document.querySelector('#post')
      const oPut = document.querySelector('#put')
      const oPatch = document.querySelector('#patch')
      const oDelete = document.querySelector('#delete')

      oGet.addEventListener('click', function () {
        axios
          .get('http://localhost:3000/users', {
            params: { name: 'kerwin' },
          })
          .then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
            console.log('err', err)
          })
      })
      oPost.addEventListener('click', function () {
        axios
          .post('http://localhost:3000/users', {
            name: 'zhf',
            age: 18,
          }) //"name=xt&age=18" 传入form格式
          .then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
            console.log('err', err)
          })
      })
      oPut.addEventListener('click', function () {
        axios
          .put('http://localhost:3000/users/3', {
            age: 180,
          })
          .then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
            console.log('err', err)
          })
      })
      oPatch.addEventListener('click', function () {
        axios
          .patch('http://localhost:3000/users/2', {
            age: 18,
          })
          .then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
            console.log('err', err)
          })
      })
      oDelete.addEventListener('click', function () {
        axios
          .delete('http://localhost:3000/users/3')
          .then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
            console.log('err', err)
          })
      })

      //使用配置写法
      // axios({
      //   method: 'post',
      //   url: 'http://localhost:3000/users',
      //   //get 用params
      //   //put post patch 用data
      //   data: {
      //     name: 'gangdan',
      //     age: 60,
      //   },
      // }).then((res) => {
      //   console.log(res.data).catch((err) => {
      //     console.log('err', err)
      //   })
      // })
    </script>
  </body>
</html>

```

#### axios拦截、中断

`db.json`
```json
{
    "news": [
      { "id": 1, "title": "男人看了沉默,女人看了流泪", "author": "kerwin" },
      { "id": 2, "title": "震惊！他年薪仅1元", "author": "tiechui" },
      { "id": 3, "title": "速看！万分危急！", "author": "gangdan" }
    ],
    "comments": [
      { "id": 1, "body": "我是男人", "newsId": 1 },
      { "id": 2, "body": "我是女人", "newsId": 1 },
      { "id": 3, "body": "我年薪2元", "newsId": 2 },
      { "id": 4, "body": "我年薪3元", "newsId": 2 },
      { "id": 5, "body": "1块钱就能买1块钱的东西", "newsId": 3 },
      { "id": 6, "body": "2块钱就能买2块钱的东西", "newsId": 3 }
    ]
}
  
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/axios/1.3.4/axios.js"></script>
  </head>
  <body>
    <button id="get">get</button>
    <button id="abort">abort</button>
    <script>
      const oGet = document.querySelector('#get')
      const oAbort = document.querySelector('#abort')
      // Add a request interceptor
      axios.interceptors.request.use(
        function (config) {
          // Do something before request is sent
          console.log('loading显示...')
          return config
        },
        function (error) {
          // Do something with request error
          return Promise.reject(error)
        }
      )

      // Add a response interceptor
      axios.interceptors.response.use(
        function (response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          console.log('成功-隐藏loading')
          return response
        },
        function (error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          console.log('失败-隐藏loading')
          return Promise.reject(error)
        }
      )

      const controller = new AbortController()

      oGet.onclick = function () {
        axios
          .get('http://localhost:3000/news', {
            signal: controller.signal,
          })
          .then((res) => {
            console.log(res.data)
          })
          .catch((err) => {
            console.log('err', err)
          })
      }
      oAbort.onclick = function () {
        controller.abort()
      }
    </script>
  </body>
</html>

```

## 同源策略(Same-origin policy)

一个 URL  有三部分组成：协议、域名 (指向主机)、端口，只有这三个完全相同的 URL 才能称之为同源。如下，能和  `http://www.example.com/dir1/index.html`  同源的是

| URL                                       | 结果   | 原因                               |
| ----------------------------------------- | ------ | ---------------------------------- |
| `http://www.example.com/dir2/api`         | 同源   | 只有路径不同                       |
| `https://www.example.com/api`             | 不同源 | 协议不同                           |
| `http://www.example.com:81/dir1/etc.html` | 不同源 | 端口不同 ( `http://` 默认端口是80) |
| `http://www.kerwin.com/dir1/other.html`   | 不同源 | 域名不同                           |

1. 无法读取非同源网页的 Cookie、LocalStorage
2. 无法接触非同源网页的 DOM
3. 无法向非同源地址发送 AJAX 请求（可以发送，但浏览器会拒绝接受响应）

注意：同源策略是浏览器的行为，是为了保护本地数据不被 JavaScript 代码获取回来的数据污染，因此拦截的是客户端发出的请求回来的数据接收，即请求发送了，服务器响应了，但是无法被浏览器接收

## Jsonp

Jsonp (JSON with Padding) 是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据

为什么我们从不同的域（网站）访问数据需要一个特殊的技术 ( JSONP )呢？这是因为同源策略

`script` 标签可以做到这一点：
```js
      function test(data) {
        console.log('111', data)
      }

      const script = document.createElement('script')
      script.src =
        'http://www.runoob.com/try/ajax/jsonp.php?jsoncallback=test'
      document.body.appendChild(script)
      //1.script 没有跨域限制
      //2.后端配合返回的是 函数()调用
      //3.前端提前声明好这个函数

      //jsonp只能get请求 无法post put delete
```

实例：
````html
<body>
	<input type="text" id="mysearch" />
	<ul id="list"></ul>
	<script>
	mysearch.oninput = function(evt){
	    console.log(evt.target.value)
	    if(!evt.target.value){
	        list.innerHTML = ""
	        return 
	    }
	
	    const oscript = document.createElement("script")
	    oscript.src = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=36542,36464,36673,36454,31660,36692,36166,36695,36697,36570,36074,36655,36345,26350,36469,36314&wd=${evt.target.value}&req=2&csor=1&cb=test&_=1656294200527`
	    document.body.appendChild(oscript)
	
	    oscript.onload = function(){
	        oscript.remove()
	    }
	}
	
	function test(obj){
	    console.log(obj.g)
	
	    list.innerHTML = obj.g.map(item=>
	                               `<li>${item.q}</li>`
	                              ).join("")
	}
	</script>
</body>
````

## 其他方法解决跨域问题

可以通过设置响应头解决，还可以使用反向代理来解决