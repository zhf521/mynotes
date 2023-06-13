---
title: Ajax
order: 31
---

## 1. 认识Ajax

### 1.1 Ajax简介

Ajax 全称为 `Asynchronous JavaScript And XML`，就是异步 JS 和 XML

通过 AJAX 可以在浏览器中向服务器发送异步请求，AJAX 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式，是前后台交互的能力

传统网站的问题：
- 为了获取数据，需要重新加载，浪费资源，增加等待时间，性能不好
- 验证表单过程中，一项内容不合格，页面需要重新加载，体验不好

解决问题:
- 使用 Ajax 可以==无刷新获取数据== 

### 1.2 Ajax的特点

Ajax 的优点：
+ 可以无需刷新页面而与服务器端进行通信
+ 允许你根据用户事件来更新部分页面内容  
+ JS 原生支持

Ajax 的缺点：
+ 没有浏览历史，不能回退
+ 存在跨域问题（同源）
+ SEO（Search Engine Optimization，搜索引擎优化）不友好，爬虫无法爬取

### 1.3 XML简介

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

## 2. axios

### 2.1 基本使用

因为 axios 库语法简单，让我们有更多精力关注在与服务器通信上，后续再学习 XMLHttpRequest 对象了解 Ajax 底层原理

axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 `node.js` 中

> https://www.npmjs.com/package/axios

引入axios：

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

引入后会得到一个axios函数，axios函数的基本使用语法：

```js
axios({
  url: '目标资源地址'
}).then((result) => {
  // 对服务器返回的数据做后续处理
})
```

> 注意：请求的 url 地址, 就是标记资源的网址

### 2.2 认识URL

统一资源定位符，简称网址，用于定位网络中的资源（资源指的是：网页，图片，数据，视频，音频等等）

URL的组成：协议，域名，资源路径（URL 组成有很多部分，我们先掌握这3个重要的部分即可）

+ 什么是http协议：超文本传输协议，规定了浏览器和服务器传递数据的格式
+ 什么是域名：标记服务器在互联网当中的方位，网络中有很多服务器，你想访问哪一台，就需要知道它的域名才可以
+ 什么是资源路径：一个服务器内有多个资源，用于标识你要访问的资源具体的位置

### 2.3 URL查询参数

查询参数可以携带给服务器额外信息，让服务器返回我想要的某一部分数据而不是全部数据

语法：在URL网址后面用`?`拼接格式：`http://xxxx.com/xxx/xxx?参数名1=值1&参数名2=值2`

axios使用params配置项即可携带查询参数：

```js
axios({
  url: '目标资源地址',
  params: {
    参数名: 值
  }
}).then(result => {
  // 对服务器返回的数据做后续处理
})
```

### 2.4 常用请求方法和数据提交

请求方法是一些固定单词的英文，例如：GET，POST，PUT，DELETE，PATCH（这些都是http协议规定的），每个单词对应一种对服务器资源要执行的操作

| 请求方法 | 操作             |
| -------- | ---------------- |
| GET      | 获取数据         |
| POST     | 数据提交         |
| PUT      | 修改数据（全部） |
| DELETE   | 删除数据         |
| PATCH    | 修改数据（部分） |

注意：前面我们获取数据其实用的就是GET请求方法，但是axios内部设置了默认请求方法就是GET，我们就没有写

axios提交数据到服务器：

```js
axios({
  url: '目标资源地址',
  method: '请求方法',
  data: {
    参数名: 值
  }
}).then(result => {
  // 对服务器返回的数据做后续处理
})
```

### 2.5 axios错误处理

使用axios的`.catch`方法，可以捕获请求响应的错误并做后续处理，语法如下：

```js
axios({
  // ...请求选项
}).then(result => {
  // 处理成功数据
}).catch(error => {
  // 处理失败错误
})
```

### 2.6 设置baseURL

作用：提取公共前缀地址，配置后axios请求时都会`baseURL + url`

语法：

```js
axios.defaults.baseURL = '基地址'
```

### 2.7 请求拦截器

在发送请求之前，触发配置函数，对请求参数进行额外配置

```js
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
```

### 2.8 响应拦截器

响应回到 then/catch 之前，触发拦截函数，对响应结果统一处理

```js
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    return response
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error)
  })
```

## 3. HTTP协议

HTTP 协议规定了浏览器和服务器返回内容的格式

### 3.1 请求报文

请求报文：是浏览器按照协议规定发送给服务器的内容

这里的格式包含：

* 请求行：请求方法，URL，协议
* 请求头：以键值对的格式携带的附加信息，比如：Content-Type（指定了本次传递的内容类型）
* 空行：分割请求头，空行之后的是发送给服务器的资源
* 请求体：发送的资源

### 3.2 响应报文

响应报文：是服务器按照协议固定的格式，返回给浏览器的内容

响应报文的组成：

* 响应行（状态行）：协议，HTTP响应状态码，状态信息
* 响应头：以键值对的格式携带的附加信息，比如：Content-Type（告诉浏览器，本次返回的内容类型）
* 空行：分割响应头，控制之后的是服务器返回的资源
* 响应体：返回的资源

HTTP响应状态码，用来表明请求是否成功完成：

| 状态码 | 说明       |
| ------ | ---------- |
| 1xx    | 信息       |
| 2xx    | 成功       |
| 3xx    | 重定向消息 |
| 4xx    | 客户端错误 |
| 5xx    | 服务端错误 |

## 4. form-serialize插件

使用form-serialize插件，可以快速收集目标表单范围内表单元素的值

官网：[form-serialize - npm (npmjs.com)](https://www.npmjs.com/package/form-serialize)

form-serialize 插件语法：

1. 引入`form-serialize`插件到自己网页中
2. 使用 serialize 函数

   * 参数1：要获取的form表单标签对象（要求表单元素需要有 name 属性-用来作为收集的数据中属性名）
   * 参数2：配置对象
     * hash：
       * true - 收集出来的是一个 JS 对象结构
       * false - 收集出来的是一个查询字符串格式
     * empty：
       * true - 收集空值
       * false - 不收集空值

例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>form-serialize插件使用</title>
</head>

<body>
  <form class="example-form">
    <input type="text" name="username">
    <br>
    <input type="text" name="password">
    <br>
    <input type="button" class="btn" value="提交">
  </form>
  <!-- 
    目标：在点击提交时，使用form-serialize插件，快速收集表单元素值
    1. 把插件引入到自己网页中
  -->
  <script src="./lib/form-serialize.js"></script>
  <script>
    document.querySelector('.btn').addEventListener('click', () => {
      /**
       * 2. 使用serialize函数，快速收集表单元素的值
       * 参数1：要获取哪个表单的数据
       *  表单元素设置name属性，值会作为对象的属性名
       *  建议name属性的值，最好和接口文档参数名一致
       * 参数2：配置对象
       *  hash 设置获取数据结构
       *    - true：JS对象（推荐）一般请求体里提交给服务器
       *    - false: 查询字符串
       *  empty 设置是否获取空值
       *    - true: 获取空值（推荐）数据结构和标签结构一致
       *    - false：不获取空值
      */
      const form = document.querySelector('.example-form')
      const data = serialize(form, { hash: true, empty: true })
      // const data = serialize(form, { hash: false, empty: true })
      // const data = serialize(form, { hash: true, empty: false })
      console.log(data) //{username: 'xxx', password: 'xxx'}
    })
  </script>
</body>

</html>
```

## 5. 图片上传

方法：

1. 先获取图片文件对象

2. 使用 FormData 表单数据对象装入（因为图片是文件而不是以前的数字和字符串了所以传递文件一般需要放入 FormData 以键值对-文件流的数据传递（可以查看请求体-确认请求体结构）

   ```js
   const fd = new FormData()
   fd.append(参数名, 值)
   ```

3. 提交表单数据对象，使用服务器返回图片 url 网址

例：

```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>图片上传</title>
</head>

<body>
  <!-- 文件选择元素 -->
  <input type="file" class="upload">
  <img src="" alt="" class="my-img">

  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script>
    /**
     * 目标：图片上传，显示到网页上
     *  1. 获取图片文件
     *  2. 使用 FormData 携带图片文件
     *  3. 提交到服务器，获取图片url网址使用
    */
    // 文件选择元素->change改变事件
    document.querySelector('.upload').addEventListener('change', e => {
      // 1. 获取图片文件
      console.log(e.target.files[0])
      // 2. 使用 FormData 携带图片文件
      const fd = new FormData()
      fd.append('img', e.target.files[0])
      // 3. 提交到服务器，获取图片url网址使用
      axios({
        url: '接口地址',
        method: 'POST',
        data: fd
      }).then(result => {
        console.log(result)
        // 取出图片url网址，用img标签加载显示
        const imgUrl = result.data.data.url
        document.querySelector('.my-img').src = imgUrl
      })
    })
  </script>
</body>

</html>
```

## 6. 原生Ajax

### 6.1 基本使用

在 JS 中有内置的构造函数来创建 Ajax 对象，创建 Ajax 对象以后，我们就可以使用 Ajax 对象的方法去发送请求和接受响应

语法：

```js
// IE9及以上
const xhr = new XMLHttpRequest()
// IE9以下
const xhr = new ActiveXObject('Mricosoft.XMLHTTP')
xhr.open('请求方法', '请求url网址')
xhr.addEventListener('loadend', () => {
  // 响应结果
  console.log(xhr.response)
})
xhr.send()
```

使用步骤：

1. 创建 XHR 对象 
2. 调用 open 方法，设置 url 和请求方法
3. 监听 loadend 事件，接收结果
4. 调用 send 方法，发起请求

### 6.2 查询参数

查询参数：携带额外信息给服务器，返回匹配想要的数据

查询参数要携带的位置和语法：`http://xxxx.com/xxx/xxx?参数名1=值1&参数名2=值2`

方法：在调用 open 方法的时候，在`url?`后面按照指定格式拼接参数名和值

例：

```js
/**
 * 目标：使用XHR携带查询参数，展示某个省下属的城市列表
*/
const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://hmajax.itheima.net/api/city?pname=辽宁省')
xhr.addEventListener('loadend', () => {
  console.log(xhr.response)
  const data = JSON.parse(xhr.response)
  console.log(data)
  document.querySelector('.city-p').innerHTML = data.list.join('<br>')
})
xhr.send()
```

如果有多个查询参数，如果我们自己拼接的话，很麻烦，这里用URLSearchParams 把参数对象转成`参数名1=值1&参数名2=值2`格式的字符串，语法如下：

```js
// 1. 创建 URLSearchParams 对象
const paramsObj = new URLSearchParams({
  参数名1: 值1,
  参数名2: 值2
})

// 2. 生成指定格式查询参数字符串
const queryString = paramsObj.toString()
// 结果：参数名1=值1&参数名2=值2
```

### 6.3 数据提交

步骤和语法：我们需要自己设置请求头`Content-Type：xxx`，来告诉服务器端，

需要在 send 方法调用时，传入请求体携带

例：

```js
const xhr = new XMLHttpRequest()
xhr.open('请求方法', '请求url网址')
xhr.addEventListener('loadend', () => {
  console.log(xhr.response)
})

// 1. 设置请求头，告诉服务器，我传递的内容类型，是 JSON 字符串
xhr.setRequestHeader('Content-Type', 'application/json')
// 2. 准备数据并转成 JSON 字符串
const user = { username: 'xxxxxxxx', password: 'xxxxxxxx' }
const userStr = JSON.stringify(user)
// 3. 发送请求体数据
xhr.send(userStr)
```

### 6.4 请求响应判断

AJAX 如何判断是否请求响应成功：响应状态码在大于等于 200 并且小于 300 的范围是成功的

响应状态码：`xhr.status`

### 6.5 封装简易axios

步骤：

1. 定义 myAxios 函数，接收配置对象，返回 Promise 对象
2. 发起 XHR 请求，默认请求方法为 GET
3. 调用成功/失败的处理程序
4. 使用 myAxios 函数

代码：

```js
// 1. 定义myAxios函数，接收配置对象，返回Promise对象
function myAxios(config){
    return new Promise((resolve,reject)=>{
        // 2. 发起XHR请求，默认请求方法为GET
        const xhr = new XMLHttpRequest()
        xhr.open(config.method || 'GET', config.url)
        xhr.addEventListener('loadend',()=>{
            // 3. 调用成功/失败的处理程序
            if(xhr.status>=200&&xhr.status<300){
                resolve(JSON.parse(xhr.response))
            }else{
                reject(new Error(xhr.response))
            }
        })
        xhr.send()
    })
}
// 4. 使用myAxios函数
myAxios({
    url:'目标资源地址'
}).then(result=>{
    
}).catch(error=>{
    
})
```

修改代码支持传递查询参数功能，步骤：

1. myAxios 函数调用后，判断 params 选项
2. 基于 URLSearchParams 转换查询参数字符串
3. 使用封装的 myAxios 函数

代码：

```js
function myAxios(config) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    // 1. 判断有params选项，携带查询参数
    if (config.params) {
      // 2. 使用URLSearchParams转换，并携带到url上
      const paramsObj = new URLSearchParams(config.params)
      const queryString = paramsObj.toString()
      // 把查询参数字符串，拼接在url？后面
      config.url += `?${queryString}`
    }

    xhr.open(config.method || 'GET', config.url)
    xhr.addEventListener('loadend', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response))
      } else {
        reject(new Error(xhr.response))
      }
    })
    xhr.send()
  })
}
```

修改代码支持传递请求体数据，步骤：

1. myAxios 函数调用后，判断 data 选项
2. 转换数据类型，在 send 方法中发送
3. 使用封装的 myAxios 函数

代码：

```js
function myAxios(config) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    if (config.params) {
      const paramsObj = new URLSearchParams(config.params)
      const queryString = paramsObj.toString()
      config.url += `?${queryString}`
    }
    xhr.open(config.method || 'GET', config.url)

    xhr.addEventListener('loadend', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.response))
      } else {
        reject(new Error(xhr.response))
      }
    })
    // 1. 判断有data选项，携带请求体
    if (config.data) {
      // 2. 转换数据类型，在send中发送
      const jsonStr = JSON.stringify(config.data)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(jsonStr)
    } else {
      // 如果没有请求体数据，正常的发起请求
      xhr.send()
    }
  })
}
```

### 6.6 readyStateChange

在 Ajax 对象中有一个事件，叫做 `readyStateChange` 事件，这个事件是专门用来监听 Ajax 对象的 `readyState` 值改变的的行为，也就是说只要 `readyState` 的值发生变化了，那么就会触发该事件，所以我们就在这个事件中来监听 Ajax 的 `readyState` 是不是到 4 了

  ```javascript
  const xhr = new XMLHttpRequest()
  xhr.open('get', '接口')
  
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

### 6.7 responseText

Ajax 对象中的 `responseText` 成员就是用来记录服务端给我们的响应体内容的，所以我们就用这个成员来获取响应体的内容

  ```javascript
  const xhr = new XMLHttpRequest()
  xhr.open('get', '接口')
  
  xhr.send()
  
  xhr.onreadyStateChange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
      // 我们在这里直接打印 xhr.responseText 来查看服务端给我们返回的内容
      console.log(xhr.responseText)
    }
  }
  ```

## 7. fetch

XMLHttpRequest 是一个设计粗糙的 API，配置和调用方式非常混乱，而且基于事件的异步模型写起来不友好

fetch 使用 Promise 和链式调用来处理异步操作，提供了更加简洁明了的语法，从而简化了代码的编写和维护

### 7.1 基本使用

```js
fetch("接口地址")
			.then(response=>response.json())
            .then(res=>{
                console.log(res)
            })

fetch("接口地址",{
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

### 7.2 错误处理

```js
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

## 8. 同源策略(Same-origin policy)

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

注意：同源策略是==浏览器==的行为，是为了保护本地数据不被 JavaScript 代码获取回来的数据污染，因此拦截的是客户端发出的请求回来的数据接收，即请求发送了，服务器响应了，但是无法被浏览器接收

## 9. 解决跨域问题

### 9.1 JSONP

Jsonp (JSON with Padding) 是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据

`script` 标签可以做到这一点：

```js
function test(data) {
    console.log('111', data)
}

const script = document.createElement('script')
script.src ='http://www.runoob.com/try/ajax/jsonp.php?jsoncallback=test'
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

### 9.2 CORS

CORS（Cross-Origin Resource Sharing），跨域资源共享

CORS 是官方的跨域解决方 案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持 get 和post 请求

跨域资源共享标准新增了一组HTTP 首部字段，允许服务器声明哪些来源站点通过浏览器有权限访问哪些资源

CORS 是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行

### 9.3 反向代理

使用nginx配置反向代理