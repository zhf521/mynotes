---
title: express框架
order: 9
---

> express 是一个基于 Node.js 平台的极简、灵活的 WEB 应用开发框架，官方网址：[Express 中文网](https://www.expressjs.com.cn/)

简单来说，express 是一个封装好的工具包，封装了很多功能，便于我们开发 WEB 应用(HTTP服务)

## 1. express使用

### 1.1 express下载

express 本身是一个 npm 包，所以可以通过 npm 安装

```shell
npm init
npm i express
```

### 1.2 express初体验

可以按照这个步骤进行操作：

1. 创建JS文件，键入如下代码：

   ```js
   //1. 导入 express
   const express = require('express')
   //2. 创建应用对象
   const app = express()
   //3. 创建路由规则
   app.get('/home', (req, res) => {
   	res.end('hello express server')
   })
   //4. 监听端口 启动服务
   app.listen(3000, () =>{
   	console.log('服务已经启动, 端口监听为 3000...')
   })
   ```

2. 命令行下执行该脚本

   ```shell
   1. node <文件名>
   # 或者
   nodemon <文件名>
   ```

3. 然后在浏览器就可以访问`http://127.0.0.1:3000/home`

## 2. express路由

### 2.1 什么是路由

> 官方定义：路由确定了应用程序如何响应客户端对特定端点的请求

### 2.2 路由的使用

一个路由由请求方法、路径、回调函数组成

express 中提供了一系列方法，可以很方便的使用路由，使用格式如下：

```js
app.<method>(path，callback)
// app是express对象的一个实例，method是一个HTTP请求方法，path是服务器上的路径，callback是当路由匹配时要执行的函数
```

代码示例：
```js
//导入 express
const express = require('express')

//创建应用对象
const app = express()

//创建 get 路由
app.get('/home', (req, res) => {
	res.send('网站首页')
})

//首页路由
app.get('/', (req,res) => {
	res.send('我才是真正的首页')
})

//创建 post 路由
app.post('/login', (req, res) => {
	res.send('登录成功')
})

//匹配所有的请求方法
app.all('/search', (req, res) => {
	res.send('1 秒钟为您找到相关结果约 100,000,000 个')
})

//自定义 404 路由
app.all("*", (req, res) => {
	res.send('<h1>404 Not Found</h1>')
})

//监听端口 启动服务
app.listen(3000, () =>{
	console.log('服务已经启动, 端口监听为 3000')
})
```

路由路径和请求方法一起定义了请求的端点，它可以是字符串、字符串模式或者正则表达式

```js
// 匹配根路径的请求
app.get('/', function (req, res) {
  res.send('root')
})

// 匹配 /about 路径的请求
app.get('/about', function (req, res) {
  res.send('about')
})

// 匹配 /random.text 路径的请求
app.get('/random.text', function (req, res) {
  res.send('random.text')
})
```

使用字符串模式的路由路径示例：

```js
// 匹配 acd 和 abcd
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd')
})
// ? 表示 b 可选，出现 0 次或 1 次

// 匹配 /ab/******
app.get('/ab/:id', function(req, res) {
  res.send('aaaaaaa')
})
// :id 表示动态路由参数，可以是任意字符串

// 匹配 abcd、abbcd、abbbcd等
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd')
})
// + 表示 b 至少出现 1 次或更多次

// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
app.get('/ab*cd', function(req, res) {
  res.send('ab*cd')
})
// * 表示匹配任意数量（包括 0 个）的字符，即可有可无

// 匹配 /abe 和 /abcde
app.get('/ab(cd)?e', function(req, res) {
 res.send('ab(cd)?e')
})
// ()? 表示括号内的内容可选，即可以出现，也可以不出现
```

使用正则表达式的路由路径示例：

```js
// 匹配任何路径中含有 a 的路径：
app.get(/a/, function(req, res) {
  res.send('/a/')
})

// 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
app.get(/.*fly$/, function(req, res) {
  res.send('/.*fly$/')
})
```

## 3. 获取请求参数

express 框架封装了一些 API 来方便获取请求报文中的数据，并且兼容原生 HTTP 模块的获取方式

```js
//导入 express
const express = require('express')

//创建应用对象
const app = express()

//获取请求的路由规则
app.get('/request', (req, res) => {
	// 1. 获取报文的方式与原生 HTTP 获取方式是兼容的
	console.log(req.method)
	console.log(req.url)
	console.log(req.httpVersion)
	console.log(req.headers)
	
    // 2. express 独有的获取报文的方式
    // 获取路径
	console.log(req.path)
    //获取查询字符串
	console.log(req.query) // 『相对重要』对象形式返回所有的查询字符串
	// 获取指定的请求头
	console.log(req.get('host'))
	res.send('请求报文的获取')
})
//启动服务
app.listen(3000, () => {
	console.log('启动成功....')
})
```

获取路由参数：

路由参数指的是URL 路径中的参数（数据）

```js
app.get('/:id.html', (req, res) => {
	res.send('商品详情, 商品 id 为' + req.params.id)
})
```

## 4. express响应设置

express 框架封装了一些 API 来方便给客户端响应数据，并且兼容原生 HTTP 模块的获取方式

```js
//获取请求的路由规则
app.get("/response", (req, res) => {
  	//1. express 中设置响应的方式兼容 HTTP 模块的方式
  	res.statusCode = 404
  	res.statusMessage = 'xxx'
  	res.setHeader('abc','xyz')
  	res.write('响应体')
  	res.end('xxx')
  
    //2. express 的响应方法
  	res.status(500) //设置响应状态码
  	res.set('xxx','yyy')//设置响应头
  	res.send('中文响应不乱码')//设置响应体
  	//连贯操作
  	res.status(404).set('xxx','yyy').send('你好朋友')
  	
    //3. 其他响应
  	res.redirect('http://atguigu.com')//重定向
  	res.download('./package.json')//下载响应
  	res.json()//响应 JSON
  	res.sendFile(__dirname + '/home.html') //响应文件内容
})
```

## 5. express中间件

中间件（Middleware）本质是一个回调函数

中间件函数可以像路由回调一样访问请求对象（request）、响应对象（response）

中间件的作用就是使用函数封装公共操作，简化代码

中间件的类型：

+ 全局中间件
+ 路由中间件

### 5.1 全局中间件

每一个请求到达服务端之后都会执行全局中间件函数

声明中间件函数：

```js
let recordMiddleware = function(request,response,next){
  //实现功能代码
  //.....
  //执行next函数(当如果希望执行完中间件函数之后，仍然继续执行路由中的回调函数，必须调用next)
  next()
}
```

应用中间件：

```js
app.use(recordMiddleware)
```

声明时可以直接将匿名函数传递给`use`

```js
app.use(function (request, response, next) {
  	console.log('定义第一个中间件')
    next()
})
```

express 允许使用 `app.use()` 定义多个全局中间件

```js
app.use(function (request, response, next) {
  	console.log('定义第一个中间件')
    next()
})
app.use(function (request, response, next) {
  	console.log('定义第二个中间件')
    next()
})
```

### 5.2 路由中间件

如果只需要对某一些路由进行功能封装，则就需要路由中间件

使用格式如下：

```js
app.get('/路径',中间件函数,(request,response)=>{

})

app.get('/路径',中间件函数1,中间件函数2,(request,response)=>{

})
```

### 5.3 静态资源中间件

express内置处理静态资源的中间件

```js
//引入express框架
const express = require('express')
//创建服务对象
const app = express()
//静态资源中间件的设置，将当前文件夹下的public目录作为网站的根目录
app.use(express.static('./public')) //当然这个目录中都是一些静态资源
//如果访问的内容经常变化，还是需要设置路由
//但是，在这里有一个问题，如果public目录下有index.html文件，单独也有index.html的路由
//则谁书写在前，优先执行谁
app.get('/index.html',(request,response)=>{
	respsonse.send('首页')
})
//监听端口
app.listen(3000,()=>{
	console.log('3000 端口启动....')
});
```

> 注意事项:
>
> 1. `index.html` 文件为默认打开的资源
> 2. 如果静态资源与路由规则同时匹配，谁先匹配谁就响应
> 3. 路由响应动态资源，静态资源中间件响应静态资源

### 5.4 第三方中间件

如：express 可以使用 `body-parser` 包处理请求体

1. 安装

   ```shell
   npm i body-parser
   ```

2. 导入 body-parser 包

   ```shell
   const bodyParser = require('body-parser')
   ```

3. 获取中间件函数

   ```js
   //处理 querystring 格式的请求体
   let urlParser = bodyParser.urlencoded({extended:false}))
   //处理 JSON 格式的请求体
   let jsonParser = bodyParser.json()
   ```

4. 设置路由中间件，然后使用 `request.body` 来获取请求体数据

   ```js
   app.post('/login', urlParser, (request,response)=>{
   	//获取请求体数据
   	console.log(request.body)
     	response.send('获取请求体数据')
   });
   ```

注意：现在你已经可以抛弃 body-parser 模块，因为 Express 自从 4.16.0 版本开始，内置了 body 解析

使用方法:

```js
const express = require('express')

const app = express()
// 解析 JSON 格式的请求体的中间件
app.use(express.json())
// 解析 querystring 格式请求体的中间件
app.use(express.urlencoded({ extended: false }))
```

## 6. 防盗链

防盗链（Referer 策略）是一种常见的网站保护方法，它可以确保只有从特定来源访问网站的用户才能访问该网站或资源。这种策略通常用于保护版权内容或限制特定访问者使用某些功能。

比如，如果你在一个网站上嵌入了一个视频资源，你可以通过设置防盗链，只允许从你的网站上引用该视频资源。当其他网站试图直接链接到该视频时，会被拒绝访问。

实现防盗链的方法有很多种，其中一种简单的方法是检查 HTTP 请求头部中的 Referer 字段，此字段标识了当前请求的来源 URL。如果当前请求的来源不是你指定的网站，就可以拒绝该请求，返回一个错误页面或者其它提示信息

可以在中间件中实现：

```js
//导入 express
const express = require('express');

//创建应用对象
const app = express()

//声明中间件
app.use((req, res, next) => {
  //检测请求头中的 referer 是否为 127.0.0.1
  //获取 referer
  let referer = req.get('referer')
  if(referer){
    //实例化
    let url = new URL(referer)
    //获取 hostname
    let hostname = url.hostname
    //判断
    if(hostname !== '127.0.0.1'){
      //响应 404 
      res.status(404).send('<h1>404 Not Found</h1>')
      return
    }
  }
  next()
})

//静态资源中间件设置
app.use(express.static(__dirname + '/public'))

//监听端口, 启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口 3000 正在监听中....')
})
```

## 7. Router

express 中的 Router 是一个完整的中间件和路由系统，可以看做是一个小型的 app 对象

Roter可以对路由进行模块化，更好的管理路由

基本使用：

1. 创建独立的 JS 文件（`homeRouter.js`）

   ```js
   //1. 导入 express
   const express = require('express')
   
   //2. 创建路由器对象
   const router = express.Router()
   
   //3. 在 router 对象身上添加路由
   router.get('/', (req, res) => {
   	res.send('首页')
   })
   
   router.get('/cart', (req, res) => {
   	res.send('购物车')
   })
   
   //4. 暴露
   module.exports = router
   ```

2. 主文件中使用

   ```js
   const express = require('express')
   
   const app = express()
   //5.引入子路由文件
   const homeRouter = require('./routes/homeRouter')
   //6.设置和使用中间件
   app.use(homeRouter)
   
   app.listen(3000,()=>{
   	console.log('3000 端口启动....')
   })
   ```

## 8. EJS模板引擎

### 8.1 模板引擎

模板引擎是分离用户界面和业务数据的一种技术

### 8.1 EJS

EJS是一个高效的 Javascript 的模板引擎

官网：[EJS ](https://ejs.co/)

中文站：[EJS中文文档](https://ejs.bootcss.com/)

### 8.2 EJS初体验

下载安装EJS：

```shell
npm i ejs --save
```

代码示例：

```js
//1.引入ejs
const ejs = require('ejs')
//2.定义数据
let person = ['张三','李四','王二麻子']
//3.ejs解析模板返回结构
//<%= %> 是ejs解析内容的标记，作用是输出当前表达式的执行结构
//"<%= %>"可以直接输出变量或表达式的值，变量或表达式的值将作为一个字符串在浏览器中输出
let html = ejs.render('<%= person.join(",") %>', {person:person})
//4.输出结果
console.log(html)
```

命令行下运行

### 8.3 EJS常用语法

执行JS代码：

```ejs
<% code %>
```

输出转义的数据到模板上：

```js
<%= code %>
```

输出非转义的数据到模板上：

```js
<%- code %>
```

### 8.4 在express中使用ejs

```js
// 导入 express
const express = require('express')
const path = require('path')

// 创建应用对象
const app = express()
// 1. 设置模板引擎
app.set('view engine', 'ejs')
// 2. 设置模板文件的存放位置
// 模板文件: 具有模板语法内容的文件
app.set('views', path.resolve(__dirname, './views'))

// 创建路由
app.get('/home', (req, res) => {
  // 3. render 响应
  // res.render('模板的文件名','数据')
  let title = '欢迎学习express'
  res.render('home', { title })
  // 4. 创建模板文件
  // 如下面文件 views/home.ejs
})

// 监听端口，启动服务
app.listen(3000, () => {
  console.log('服务器已启动~~~~')
})
```

`views/home.ejs`

```ejs
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h2>
    <%=title %>
  </h2>
</body>

</html>
```

## 9. Express应用程序生成器

通过应用生成器工具 `express-generator` 可以快速创建一个应用的骨架

详见：[Express 应用程序生成器 - Express 中文文档](https://www.expressjs.com.cn/starter/generator.html)



