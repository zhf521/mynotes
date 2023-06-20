---
title: http模块
order: 5
---

## 1. 创建HTTP服务

### 1.1 操作步骤

```js
//1. 导入 http 模块
const http = require('http')

//2. 创建服务对象 create 创建 server 服务
// request 意为请求，是对请求报文的封装对象，通过 request 对象可以获得请求报文的数据
// response 意为响应，是对响应报文的封装对象，通过 response 对象可以设置响应报文
const server = http.createServer((request, response) => { 	
    // 设置响应体
    response.end('Hello HTTP server')
})  // 返回结果是一个对象

//3. 监听端口, 启动服务
server.listen(9000, () => {
	console.log('服务已经启动, 端口 9000 监听中...')
})
```

> `http.createServer` 里的回调函数的执行时机： 当接收到 HTTP 请求的时候，就会执行

### 1.2 测试

浏览器请求对应端口

```js
http://127.0.0.1:9000
```

### 1.3 注意事项

1. 命令行 `ctrl + c` 停止服务

2. 当服务启动后，更新代码必须重启服务才能生效

3. 响应内容中文乱码的解决办法

   ```js
   // 设置响应头
   response.setHeader('content-type','text/html;charset=utf-8')
   ```

4. 端口号被占用：`Error: listen EADDRINUSE: address already in use :::9000`

   1. 关闭当前正在运行监听端口的服务（使用较多）
   2. 修改其他端口号
   
5. `HTTP`协议默认端口是 `80`。`HTTPS` 协议的默认端口是`443`, HTTP 服务开发常用端口有 `3000`，`8080`，`8090`，`9000` 等

> 如果端口被其他程序占用，可以使用资源监视器找到占用端口的程序，然后使用任务管理器关闭对应的程序

## 2. 获取HTTP请求报文

| 含义           | 语法                                                         | 重点掌握 |
| :------------- | :----------------------------------------------------------- | :------- |
| 请求方法       | `request.method`                                             | *****    |
| 请求版本       | `request.httpVersion`                                        |          |
| 请求路径       | `request.url`                                                | *****    |
| URL 路径       | `require('url').parse(request.url).pathname`                 | *****    |
| URL 查询字符串 | `require('url').parse(request.url,  true).query`             | *****    |
| 请求头         | `request.headers`                                            | *****    |
| 请求体         | `request.on('data', function(chunk){})`<br>`request.on('end', function(){})` |          |

```js
// 1. 导入 http 模块
const http = require('http')

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // 获取请求的方法
  console.log(request.method)  // GET
  // 获取请求的 url
  console.log(request.url)  // 只包含 url 中的 路径 与查询字符串
  // 获取 http 协议的版本号
  console.log(request.httpVersion)  // 1.1
  // 获取 http 的请求头
  console.log(request.headers) // 结果是一个对象
  response.end('http') // 设置响应体
})

// 3. 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...')
})
```

**注意事项：** 

1. `request.url` 只能获取路径以及查询字符串，无法获取 URL 中的域名以及协议的内容
2. `request.headers` 将请求信息转化成一个对象，并将属性名都转化成了『小写』
3. 关于路径：如果访问网站的时候，只填写了 IP 地址或者是域名信息，此时请求的路径为『 `/` 』
4. 关于 `favicon.ico`：这个请求是属于浏览器自动发送的请求

其他操作：

+ 提取http报文的请求体

  ```js
  // 1. 导入 http 模块
  const http = require('http')
  
  // 2. 创建服务对象
  const server = http.createServer((request, response) => {
    // 1. 声明一个变量
    let body = ''
    // 2. 绑定 data 事件
    request.on('data', chunk => {
      body += chunk
    })
    // 3. 绑定 end 事件
    request.on('end', () => {
      console.log(body)  
      // 响应
      response.end('Hello Http') // 设置响应体 
    })
  })
  
  // 3. 监听端口，启动服务
  server.listen(9000, () => {
    console.log('服务已经启动...')
  })
  ```

+ 提取http报文中url的路径与查询字符串

  ```js
  // 导入 http 模块
  const http = require('http')
  // 1. 导入 url 模块
  const url = require('url')
  
  // 创建服务对象
  const server = http.createServer((request, response) => {
    // 2. 解析 request.url
    console.log(request.url)   // /search?keyword=xxx
    // 使用 parse 解析 request.url 的内容
    // true 将 query 属性将会设置为一个 对象
    let res = url.parse(request.url, true)
    console.log(res)  // 为一个对象
    // 路径
    let pathname = res.pathname
    // 查询字符串
    let keyword = res.query.keyword
    console.log(keyword)   // h5
    response.end('url')
  })
  
  // 监听端口，启动服务
  server.listen(9000, () => {
    console.log('服务已经启动...')
  })
  ```

  ```js
  // 导入 http 模块
  const http = require('http')
  
  // 创建服务对象
  const server = http.createServer((request, response) => {
    // 实例化 url 对象
    // let url = new URL('/search?a=100&b=200','http://127.0.0.1:9000')
    let url = new URL(request.url, 'http://127.0.0.1')
    console.log(url)  // 为一个对象
    // 输出路径
    console.log(url.pathname)  // /search
    // 输出 keyword 查询字符串
    console.log(url.searchParams.get('a'))  // 100
    response.end('url new')
  })
  
  // 监听端口，启动服务
  server.listen(9000, () => {
    console.log('服务已经启动...')
  })
  ```

## 3. 设置HTTP响应报文

| 作用             | 语法                                               |
| ---------------- | -------------------------------------------------- |
| 设置响应状态码   | `response.statusCode`                              |
| 设置响应状态描述 | `response.statusMessage` （ 用的非常少 ）          |
| 设置响应头信息   | `response.setHeader('头名', '头值')`  (可以自定义) |
| 设置响应体       | `response.write('xx')`<br/>`response.end('xxx')`   |

```js
// 1. 设置响应状态码
response.statusCode = 203
// 2. 响应状态的描述
response.statusMessage = 'i love you'
// 3. 响应头
response.setHeader('content-type', 'text/html;charset=utf-8')
// 自定义响应头
response.setHeader('myHeader', 'test test')
// 设置多个同名的响应头
response.setHeader('test', ['a', 'b', 'c'])
```

```js
// write 和 end 的两种使用情况：
// 1. write 和 end 的结合使用 响应体相对分散
response.write('xx')
response.write('xx')
response.write('xx')
response.end(); //每一个请求，在处理的时候必须要执行 end 方法的

//2. 单独使用 end 方法 响应体相对集中
response.end('xxx')
```

## 4. 网页资源的基本加载过程

网页资源的加载都是循序渐进的，首先获取 HTML 的内容， 然后解析 HTML 在发送其他资源的请求，如 CSS，Javascript，图片等

## 5. 静态资源服务

`静态资源` 是指内容长时间不发生改变的资源，例如图片，视频，CSS 文件，JS文件，HTML文件，字体文件等

`动态资源` 是指内容经常更新的资源，例如百度首页，网易首页，京东搜索列表页面等

### 5.1 静态资源目录

HTTP 服务在哪个文件夹中寻找静态资源，那个文件夹就是静态资源目录，也称之为网站根目录

### 5.2 URL路径

网页中的URL路径主要分为两大类：`相对路径` 与 `绝对路径`

#### 5.2.1 绝对路径

绝对路径可靠性强，而且相对容易理解，在项目中运用较多

| 形式                     | 特点                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `http://atguigu.com/web` | 直接向目标资源发送请求，容易理解。网站的外链会用到此形式     |
| `//atguigu.com/web`      | 与页面 URL 的协议拼接形成完整 URL 再发送请求。大型网站用的比较多 |
| `/web`                   | 与页面 URL 的协议、主机名、端口拼接形成完整 URL 再发送请求。中小型网站 |

#### 5.2.2 相对路径

相对路径在发送请求时，需要与当前页面 URL 路径进行 `计算` ，得到完整 URL 后，再发送请求，学习阶段用的较多

例如：`http://www.atguigu.com/course/h5.html`

| 形式                 | 最终的 **URL**                              |
| -------------------- | ------------------------------------------- |
| `./css/app.css`      | `http://www.atguigu.com/course/css/app.css` |
| `js/app.js`          | `http://www.atguigu.com/course/js/app.js`   |
| `../img/logo.png`    | `http://www.atguigu.com/img/logo.png`       |
| `../../mp4/show.mp4` | `http://www.atguigu.com/mp4/show.mp4`       |

#### 5.2.3 网页中使用URL的场景

包括但不限于如下场景：

- a 标签 href
- link 标签 href
- script 标签 src 
- img 标签 src
- video audio 标签 src
- form 中的 action
- AJAX 请求中的 URL

### 5.3 设置资源类型（mime类型）

`媒体类型`（通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型 ）是一种标准，用来表示文档、文件或字节流的性质和格式

```
mime 类型结构： [type]/[subType]

例如： text/html text/css image/jpeg image/png application/json
```

HTTP 服务可以设置响应头 `Content-Type` 来表明响应体的 MIME 类型，浏览器会根据该类型决定如何处理资源

下面是常见文件对应的 mime 类型：

```js
html: 'text/html',
css: 'text/css',
js: 'text/javascript',
png: 'image/png',
jpg: 'image/jpeg', 
gif: 'image/gif',
mp4: 'video/mp4',
mp3: 'audio/mpeg',
json: 'application/json'
```

> 对于未知的资源类型，可以选择 `application/octet-stream` 类型，浏览器在遇到该类型的响应时，会对响应体内容进行独立存储，也就是我们常见的 `下载` 效果

```js
require('http').createServer((request,response)=>{
	//获取请求的方法已经路径
	let {url,method} = request
	//判断请求方式以及请求路径
	if(method == "GET" && url == "/index.html"){
		//需要响应文件中的内容
		let data = require('fs').readFileSync( dirname + '/index.html')
         response.end(data)
	}else if(method == "GET" && url == "/css/app.css"){
		//需要响应文件中的内容
		let data = require('fs').readFileSync( dirname + '/public/css/app.css')
		response.end(data)
	}else if(method == "GET" && url == "/js/app.js"){
		//需要响应文件中的内容
		let data = require('fs').readFileSync( dirname + '/public/js/app.js')
         response.end(data)
	}else{
		//404响应
         response.statusCode = 404
		response.end("<h1>404 Not Found</h1>")
	}
}).listen(80,()=>{

console.log('80端口正在启动中....')

})
```

很明显上面的代码，当只要有一个请求路径就需要进行判断，显然这种方式不够完美，那么我们需要封装：

```js
require('http').createServer((request,response)=>{
	//获取请求的方法已经路径
	let {url,method} = request
	//文件夹路径  根路径
	let rootDir = dirname + '/public'
	//拼接文件路径
	let filePath = rootDir + url
	//读取文件内容
    fs.readFile(filePath,(err,data)=>{
		//判断
        if(err){
			//如果出现错误，响应404状态码
            response.statusCode = 404
            response.end('<h1>404 Not Found</h1>')
		}else{
			//响应文件内容
            response.end(data)
		}
	})
}).listen(80,()=>{
	console.log('80端口正在启动中....')
})
```

## 6. GET和POST请求

`GET` 和 `POST` 是 HTTP 协议请求的两种方式

- `GET` 主要用来获取数据，`POST` 主要用来提交数据
- `GET` 带参数请求是将参数缀到 URL 之后，在地址栏中输入 url 访问网站就是 GET 请求，`POST` 带参数请求是将参数放到请求体中
- `POST` 请求相对 `GET` 安全一些，因为在浏览器中参数会暴露在地址栏
- `GET` 请求大小有限制，一般为 2K，而 POST 请求则没有

GET 请求的情况：

- 在地址栏直接输入 url 访问
- 点击 a 链接
- link 标签引入 css
- script 标签引入 js
- img 标签引入图片
- form 标签中的 method 为 get （不区分大小写）
- ajax 中的 get 请求

POST 请求的情况：

- form 标签中的 method 为 post（不区分大小写）
- AJAX 的 post 请求