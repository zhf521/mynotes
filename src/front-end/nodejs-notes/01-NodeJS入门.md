---
title: NodeJS入门
order: 1
---

## 1. NodeJS简介

1. Node.js 是一个独立的 JavaScript 运行环境，能独立执行 JS 代码，因为这个特点，它可以用来编写服务器后端的应用程序
2. Node.js 作用除了编写后端应用程序，也可以对前端代码进行压缩，转译，整合等等，提高前端开发和运行效率
3. Node.js 基于Chrome V8 引擎封装，独立执行 JS 代码，但是语法和浏览器环境的 V8 有所不同，没有 document 和 window，但是都支持 ECMAScript 标准的代码语法
4. Node.js 没有图形化界面，需要使用 cmd 终端命令行（利用一些命令来操控电脑执行某些程序软件）

## 2. NodeJS的安装

官网下载：[Node.js](https://nodejs.org/en/)

打开安装包，默认 next 下一步即可，等待安装完成

打开命令提示符，输入如下命令，出现版本号即说明安装成功

```bash
node -v
```

使用国内的镜像可以提高下载速度，命令如下：

```bash
npm config set registry https://registry.npmmirror.com
```

查看镜像：

```bash
npm config get registry
```

## 3. NodeJS初体验

`app.js`

```js
console.log('hello')
```

在命令提示符中使用

```bash
node app.js
```

运行结果：

```js
hello
```

注意：

1. NodeJS中不能使用BOM和DOM的API，可以使用console和定时器API
2. NodeJS中的顶级对象为global，也可以用globalThis访问顶级对象



