---
title: 接口
order: 11
---

## 1. 简介

### 1.1 接口是什么

> 接口是前后端通信的桥梁

简单理解：一个接口就是服务中的一个路由规则，根据请求响应结果

接口的英文单词是 API (Application Program Interface)，所以有时也称之为API 接口

这里的接口指的是数据接口，与编程语言（Java，Go 等）中的接口语法不同

### 1.2 接口的作用

> 实现前后端通信

### 1.3 接口的开发与调用

大多数接口都是由后端工程师开发的，开发语言不限

一般情况下接口都是由前端工程师调用的，但有时后端工程师也会调用接口，比如短信接口，支付接口等

### 1.4 接口的组成

一个接口一般由以下几个部分组成：

- 请求方法

- 接口地址（URL）

- 请求参数

- 响应结果

## 2. RESTful API

RESTful API 是一种特殊风格的接口，主要特点有如下几个：

- URL 中的路径表示资源，路径中不能有动词，例如create, delete,update等这些都不能有
- 操作资源要与HTTP请求方法对应
- 操作结果要与HTTP 响应状态码对应

规则示例：

| 操作         | 请求类型 | URL      | 返回                 |
| ------------ | -------- | -------- | -------------------- |
| 新增歌曲     | POST     | /song    | 返回新生成的歌曲信息 |
| 删除歌曲     | DELETE   | /song/10 | 返回一个空文档       |
| 修改歌曲     | PUT      | /song/10 | 返回更新后的歌曲信息 |
| 修改歌曲     | PATCH    | /song/10 | 返回更新后的歌曲信息 |
| 获取所有歌曲 | GET      | /song    | 返回歌曲列表数组     |
| 获取单个歌曲 | GET      | /song/10 | 返回单个歌曲信息     |

## 3. json-server

json-server 本身是一个 JS 编写的工具包，可以快速搭建 RESTful API 服务

官方地址：[json-server](https://github.com/typicode/json-server)

操作步骤：

1. 全局安装 `json-server`

   ```shell
   npm i -g json-server
   ```

2. 创建 JSON 文件（`db.json`），编写基本结构

   ```json
   {
   	"song": [
   		{ "id": 1, "name": "干杯", "singer": "五月天" },
   		{ "id": 2, "name": "当", "singer": "动力火车" },
   		{ "id": 3, "name": "不能说的秘密", "singer": "周杰伦" }
   	]
   }
   ```

3. 以 JSON 文件所在文件夹作为工作目录，执行如下命令

   ```shell
   json-server --watch db.json
   ```
   
   默认监听端口为：3000

## 4. 接口测试工具

几个接口测试工具：

+ apipost：[Apipost](https://www.apipost.cn/)
+ apifox：[Apifox](https://apifox.com/)
+ postman：[Postman](https://www.postman.com/)