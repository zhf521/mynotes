---
title: NodeJS下载安装与配置
order: 1
---

# 什么是 Node JS

Node. js is a JavaScript runtime built on Chrome's V8 JavaScript engine。
Node. js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境

# 下载
官网下载：[Node.js](https://nodejs.org/en/)

![NodeJS下载安装与配置01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置01.png)

# 安装

打开安装包，默认 next 下一步即可，等待安装完成。
打开安装目录：

![NodeJS下载安装与配置02.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置02.png)

打开命令提示符，输入如下命令，出现版本号即说明安装成功。
```
node -v
```
和
```
npm -v
```

![NodeJS下载安装与配置03.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置03.gif)

# 配置
配置全局安装的模块路径和缓存路径
## 模块路径
在 nodejs 根目录, 创建 `node_global`，`node_cache` 文件夹，如图：

![NodeJS下载安装与配置04.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置04.png)

然后以==管理员身份==打开 cmd，配置路径：

``` 
npm config set prefix "D:\nodejs\node_global"
```
和
```
npm config set cache "D:\nodejs\node_cache"
```

![NodeJS下载安装与配置05.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置05.png)

使用如下命令查看：
```
npm config get prefix
```
和
```
npm config get cache
```

![NodeJS下载安装与配置06.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置06.png)

## 安装 vue
使用命令：
```
npm install -g vue
```
如图：

![NodeJS下载安装与配置07.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置07.png)

## 缓存路径
找到环境变量：右键此电脑——属性——高级系统设置——高级——环境变量
1. 在用户变量下，将 `AppData\Roaming\npm` 更改为
```
D:\nodejs\node_global
```

![NodeJS下载安装与配置08.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置08.png)

2. 创建 NODE_PATH 变量
变量值为：
```
D:\nodejs\node_global\node_modules
```
3. 添加系统变量，在 path 中添加
```
%NODE_PATH%
```
步骤如下：

![NodeJS下载安装与配置09.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置09.gif)

最终结果如图：
用户变量，path 中

![NodeJS下载安装与配置10.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置10.png)

系统变量：

![NodeJS下载安装与配置11.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置11.png)

系统变量，path 中：

![NodeJS下载安装与配置12.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置12.png)

# 测试
打开命令提示符：
输入如下命令：
```
node
```
然后输入：
```
require('vue')
```
出现如图即测试成功：

![NodeJS下载安装与配置13.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置13.png)

# 配置镜像
使用国内的镜像可以提高下载速度
命令：
```
npm config set registry https://registry.npm.taobao.org
```
查看镜像：
```
npm config get registry
```
如图：

![NodeJS下载安装与配置14.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/NodeJS下载安装与配置14.png)
