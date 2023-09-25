---
title: HTML
order: 1
---

## 1. 如何理解HTML语义化

语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化）。通俗来讲就是用正确的标签做正确的事情

语义化的优点如下：

+ **用户**：提高**体验**，比如：**title，alt**用于**解释**名词和图片信息

+ **非技术**人员：能看懂代码，很好的呈现内容**结构**、代码结构
+ **技术**人员：便于团队**开发与维护**，**语义化**更具有**可读性**
+ **搜索引擎**：利于**SEO**。语义化能和搜索引擎建立更好的联系，优化搜索。还支持读屏软件，根据文章可以自动生成目录，有利于**无障碍**

常见的语义化标签：

`<header></header>`  头部

`<nav></nav>`  导航栏

`<section></section>`  区块（有语义化的div）

`<main></main>`  主要区域

`<article></article>`  主要内容

`<aside></aside>`  侧边栏

`<footer></footer>`  底部

## 2. WEB标准与W3C标准

WEB标准是指由万维网联盟（World Wide Web Consortium，简称W3C）制定的一系列技术规范和指南，旨在确保网页在不同的浏览器和设备上具有一致的表现和行为

W3C标准是由W3C组织制定和推广的一系列技术标准，旨在推动网络技术的发展和互操作性

**具体来说，WEB标准和W3C标准强调以下几个方面：**

- **标签闭合**：HTML标签必须按照规定的格式正确闭合，以确保页面结构的准确性和一致性
- **标签小写**：HTML标签和属性应该使用小写字母，以避免浏览器解析错误
- **不乱嵌套**：HTML标签应该按照正确的嵌套规则进行使用，不应该出现乱七八糟的嵌套结构，以确保页面结构的清晰和可维护性
- **使用外链CSS和JS**：将CSS样式和JavaScript代码尽可能地放在外部文件中，并通过链接的方式引入，以实现结构、行为和表现的分离，提高代码的可重用性和可维护性

## 3. src和href的区别

**src 用于替换当前元素，href 用于在当前文档和引用资源之间确立联系**

### 1. src

src指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求 src 资源时会将其指向的资源下载并应用到文档内

src用于img、input、style、script、iframe

```html
<script src =”js.js”></script>
```

### 2. href

href 是 Hypertext Reference 的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接

href用于link、a标签

```html
<link href=”common.css” rel=”stylesheet”/>
```

## 4. DOCTYPE的作用

`DOCTYPE`即Document Type（文档类型声明）的作用是告知浏览器的解析器使用哪种`HTML`或`XHTML`规范来解析文档

DOCTYPE需要放置在HTML文件的`<html>`标签之前

当前主流：

```html
<!DOCTYPE html>
<html>
    ...
</html>
```

早期：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
    ...
</html>
```

## 5. script标签中defer和async

defer 和 async 的使用, 可以用于提升网页性能

script 标签存在两个属性，defer 和 async，因此 script 标签 的使用分为三种情况：

1. `<script src="example.js"></script>`

   没有 defer 或 async 属性，浏览器会立即加载并执行相应的脚本

   不等待后续加载的文档元素，读到就开始加载和执行，此举会阻塞后续文档的加载

2. `<script async src="example.js"></script>`

   有了 async 属性，表示后续文档的加载和渲染与 js 脚本的加载和执行是并行进行的，即异步执行

3. `<script defer src="example.js"></script>`

   有了 defer 属性，加载后续文档的过程和 js 脚本的加载是并行进行的(异步)，此时的 js 脚本仅加载不执行, js 脚本的执行需要等到文档所有元素解析完成之后，DOMContentLoaded 事件触发执行之前

![面试笔记-HTML01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/面试笔记-HTML01.png)



> 图例：绿线：HTML 的解析时间
>
> 蓝线：JS 脚本的加载时间
>
> 红色：JS 脚本的执行时间

区别：

1. defer 和 async 在网络加载过程是一致的，都是异步执行的；(放在页面顶部, 也不会阻塞页面的加载, 与页面加载同时进行)
2. 两者的区别, 脚本加载完成之后, async 是立刻执行, defer 会等一等 (等前面的 defer 脚本执行, 等 dom 的加载)

