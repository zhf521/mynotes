---
title: NodeJS基础使用
order: 1
---

## 1. NodeJs入门

### 1.1 什么是NodeJS

1. Node.js 是一个独立的 JavaScript 运行环境，能独立执行 JS 代码，因为这个特点，它可以用来编写服务器后端的应用程序
2. Node.js 作用除了编写后端应用程序，也可以对前端代码进行压缩，转译，整合等等，提高前端开发和运行效率
3. Node.js 基于Chrome V8 引擎封装，独立执行 JS 代码，但是语法和浏览器环境的 V8 有所不同，没有 document 和 window 但是都支持 ECMAScript 标准的代码语法
4. Node.js 没有图形化界面，需要使用 cmd 终端命令行（利用一些命令来操控电脑执行某些程序软件）输入`node -v` 检查是否安装成功
5. Node.js 执行目标 JS 文件，需要使用`node xxx.js`命令来执行

### 1.2 fs模块-读写文件

模块：类似插件，封装了方法和属性供我们使用

fs 模块：封装了与本机文件系统进行交互的方法和属性

fs 模块使用语法如下：

* 加载 fs 模块，得到 fs 对象

  ```js
  const fs = require('fs')
  ```

* 写入文件内容语法：

  ```js
  fs.writeFile('文件路径', '写入内容', err => {
    // 写入后的回调函数
  })
  ```

* 读取文件内容的语法：

  ```js
  fs.readFile('文件路径', (err, data) => {
    // 读取后的回调函数
    // data 是文件内容的 Buffer 数据流
  })
  ```

### 1.3 path模块-路径处理

为什么在 Node.js 待执行的 JS 代码中要用绝对路径：Node.js 执行 JS 代码时，代码中的路径都是以终端所在文件夹出发查找相对路径，而不是以我们认为的从代码本身出发，会遇到问题，所以在 Node.js 要执行的代码中，访问其他文件，建议使用绝对路径

使用模块内置变量 `__dirname`配合 `path.join()` 来得到绝对路径

`__dirname` 模块内置变量的值是动态获取当前文件所在文件夹的绝对路径

例：压缩前端html

```js
/**
 * 目标：压缩 html 里代码
 * 需求：把 public/index.html 里的，回车/换行符去掉，写入到 dist/index.html 中
 *  1.1 读取 public/index.html 内容
 *  1.2 使用正则替换内容字符串里的，回车符\r 换行符\n
 *  1.3 确认后，写入到 dist/index.html 内
 */
const fs = require('fs')
const path = require('path')
// 1.1 读取 public/index.html 内容
fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  const htmlStr = data.toString()
  // 1.2 使用正则替换内容字符串里的，回车符\r 换行符\n
  const resultStr = htmlStr.replace(/[\r\n]/g, '')
  // 1.3 确认后，写入到 dist/index.html 内
  fs.writeFile(path.join(__dirname, 'dist', 'index.html'), resultStr, err => {
    if (err) console.log(err)
    else console.log('压缩成功')
  })
})
```

### 1.4 URL中的端口号

1. URL 是统一资源定位符，简称网址，用于访问网络上的资源
2. 端口号的作用：标记服务器里对应的服务程序，值为（0-65535 之间的任意整数）
3. 注意：http 协议，默认访问的是 80 端口
4. Web服务：一个程序，用于提供网上信息浏览功能
5. 注意：0-1023 和一些特定的端口号被占用，我们自己编写服务程序请避开使用

### 1.5 http模块-创建Web服务

1. 引入 http 模块，创建 Web 服务对象
2. 监听 request 请求事件，对本次请求，做一些响应处理
3. 启动 Web 服务监听对应端口号
4. 运行本服务在终端进程中，用浏览器发起请求

例：

```js
/**
 * 目标：基于 http 模块创建 Web 服务程序
 *  1.1 加载 http 模块，创建 Web 服务对象
 *  1.2 监听 request 请求事件，设置响应头和响应体
 *  1.3 配置端口号并启动 Web 服务
 *  1.4 浏览器请求（http://localhost:3000）测试
 */
// 1.1 加载 http 模块，创建 Web 服务对象
const http = require('http')
const server = http.createServer()
// 1.2 监听 request 请求事件，设置响应头和响应体
server.on('request', (req, res) => {
  // 设置响应头-内容类型-普通文本以及中文编码格式
  res.setHeader('Content-Type', 'text/plain;charset=utf-8')
  // 设置响应体内容，结束本次请求与响应
  res.end('欢迎使用 Node.js 和 http 模块创建的 Web 服务')
})
// 1.3 配置端口号并启动 Web 服务
server.listen(3000, () => {
  console.log('Web 服务启动成功了')
})
```

## 2. NodeJS模块化

### 2.1 模块化简介

在 Node.js 中每个文件都被当做是一个独立的模块，模块内定义的变量和函数都是独立作用域的，因为 Node.js 在执行模块代码时，将使用如下所示的函数封装器对其进行封装

```js
(function(exports, require, module, __filename, __dirname)
// 模块代码实际存在于此处
})
```

而且项目是由多个模块组成的，每个模块之间都是独立的，而且提高模块代码复用性，按需加载，独立作用域

但是因为模块内的属性和函数都是私有的，如果对外使用，需要使用标准语法导出和导入才可以，而这个标准叫 CommonJS 标准

导出语法：

```js
module.exports = {
  对外属性名: 模块内私有变量
}
```

导入语法：

```js
const 变量名 = require('模块名或路径')
// Node.js 环境内置模块直接写模块名（例如：fs，path，http）
// 自定义模块：写模块文件路径（例如：./utils.js)
```

> 变量名的值接收的就是目标模块导出的对象

### 2.2 ECMAScript标准-默认导出和导入

CommonJS 规范是 Node.js 环境中默认的，后来官方推出 ECMAScript 标准语法

导出语法：

```js
export default {
  对外属性名: 模块内私有变量
}
```

导入语法：

```js
import 变量名 from '模块名或路径'
```

> 变量名的值接收的就是目标模块导出的对象

注意：Node.js 默认只支持 CommonJS 标准语法，如果想要在当前项目环境下使用 ECMAScript 标准语法，请新建 `package.json` 文件设置`type: 'module'` 来进行设置

```json
{ “type”: "module" }
```

### 2.3 ECMAScript标准-命名导出和导入

命名导出语法：

```js
export 修饰定义语句
```

命名导入语法：

```js
import { 同名变量 } from '模块名或路径'
```

> 注意：同名变量指的是模块内导出的变量名

与默认导出如何选择：

* 按需加载，使用命名导出和导入
* 全部加载，使用默认导出和导入

### 2.4 包的概念

包：将模块，代码，其他资料整合成一个文件夹，这个文件夹就叫包

包分类：

* 项目包：主要用于编写项目和业务逻辑
* 软件包：封装工具和方法进行使用

包要求：根目录中，必须有 `package.json` 文件（记录包的清单信息）

`package.json`

```json
{
"name": "cz_utils",软件包名称
"version": "1.0.0",软件包当前版本
"description"：“一个数组和字符串常用工具方法的包”，软件包筒短描述
"main": "index.js",软件包入口点
"author": "itheima",软件包作者
"license": "MIT"软件包许可证(商用后可以用作者名字宣传)
}
```

包使用：在引入一个包文件夹到代码中，默认引入的是包文件节下的 index.js 模块文件里导出的对象，如果没有 index.js 文件，则会引入 package.json 里 main 属性指定的文件模块导出的对象

### 2.5 npm软件包管理器

npm 简介：软件包管理器，用于下载和管理 Node.js 环境中的软件包

npm 使用步骤：

1. 初始化清单文件： `npm init -y` （得到 package.json 文件，有则跳过此命令）

   > 注意 `-y` 就是所有选项用默认值，所在文件夹不要有中文/特殊符号，建议英文和数字组成，因为 npm 包名限制建议用英文和数字或者下划线中划线

2. 下载软件包：`npm i 软件包名称`

3. 使用软件包

### 2.6 npm安装所有依赖

如何得到需要的所有依赖软件包呢？

> 直接在项目目录下，运行终端命令：npm i 即可安装 package.json 里记录的所有包和对应版本到本项目中的 node_modules

### 2.7 npm全局软件包-nodemon

软件包区别：

* 本地软件包：当前项目内使用，封装属性和方法，存在于 node_modules
* 全局软件包：本机所有项目使用，封装命令和工具，存在于系统设置的位置

nodemon 作用：替代 node 命令，检测代码更改，自动重启程序

使用：

1. 安装：npm i nodemon -g （-g 代表安装到全局环境中）
2. 运行：nodemon 待执行的目标 js 文件

## 3. 概念和常用命令总结

Node.js 模块化：把每个文件当做一个模块，独立作用域，按需加载，使用特定标准语法导出和导入使用

CommonJS 标准：一般应用在 Node.js 项目环境中

|      | 导出                | 导入                      |
| ---- | ------------------- | ------------------------- |
| 语法 | `module.exports={}` | `require('模块名或路径')` |

ECMAScript 标准：一般应用在前端工程化项目中

|      | 导出                  | 导入                                   |
| ---- | --------------------- | -------------------------------------- |
| 默认 | `export default{}`    | `import 变量名 form '模块名或路径'`    |
| 命名 | `export 修饰定义语句` | `import{同名变量} form '模块名或路径'` |

Node.js 包：把模块文件，代码文件，其他资料聚合成一个文件夹就是包

> 项目包：编写项目需求和业务逻辑的文件夹
>
> 软件包：封装工具和方法进行使用的文件夹（一般使用 npm 管理）
>
> * 本地软件包：作用在当前项目，封装的属性/方法，供项目调用编写业务需求
> * 全局软件包：作用在所有项目，一般封装的命令/工具，支撑项目运行

常用命令：

执行 js 文件：node xxx
初始化package.json：npm init -y
下载本地软件包：npm i 软件包名
下载全局软件包：npm i 软件包名 -g
删除软件包：npm uni 软件包名

