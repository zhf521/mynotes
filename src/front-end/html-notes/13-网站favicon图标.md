---
title: 网站favicon图标
order: 13
---

## 1. 什么是 favicon 图标

`favicon.ico` 是网站的缩略标志，可以显示在浏览器标签、地址栏左边和收藏夹中，是展示网站个性的缩略 logo 标志，也可以说是网站头像，目前主要的浏览器都支持 `favicon.ico` 图标

如淘宝网：

![网站favicon图标.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/网站favicon图标.png)

## 2. 如何为网站添加 favicon 图标

1. 制作 favicon 图标：使用在线转换网站将图片转换为 `ico` 格式
2. 将 favicon 图标放到网站根目录下
3. 在 HTML 页面引入 favicon 图标，语法： `<link rel="shortcut icon" href="favicon.ico" />`

例：
```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>标题</title>
    <!-- favicon图标 -->
    <link rel="shortcut icon" href="favicon.ico" />
  </head>
  <body>
  </body>
</html>
```
