---
title: CSS布局
order: 8
---

## 网页布局总结

通过 CSS 浮动、定位可以让每个盒子排列成为网页

一个完整的网页，是标准流、浮动、定位一起完成布局的，每个都有自己的专门用法

### 标准流 

可以让盒子上下排列或者左右排列，**垂直的块级盒子显示就用标准流布局**

### 浮动

可以让多个块级元素一行显示或者左右对齐盒子，**多个块级盒子水平显示就用浮动布局**

### 定位

定位最大的特点是有层叠的概念，就是可以让多个盒子前后叠压来显示，**如果元素自由在某个盒子内移动就用定位布局**

### 版心

+ 在 PC 端网页中，一般都会有一个固定宽度且水平居中的盒子，来显示网页的主要内容，这是网页的版心
+ 版心的宽度一般是 960 ~ 1200 像素之间
+ 版心可以是一个，也可以是多个

## 常见布局技巧

1. margin 负值的运用
2. 文字围绕浮动元素
3. 行内块的巧妙运用
4. CSS 三角形

### margin 负值运用

1. 让每个盒子 margin 往左侧移动 -1 px 正好压住相邻盒子边框
2. 鼠标经过某个盒子的时候，提高当前盒子的层级即可（如果没有有定位，则加相对定位（保留位置），如果有定位，则加（z-index）

```html
<ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
	<li>4</li>
	<li>5</li>
</ul>
```

```css
ul li {
	position: relative;
	float: left;
	list-style: none;
	width: 150px;
	height: 200px;
	border: 1px solid red;
	margin-left: -1px;
}
ul li:hover {
	z-index: 1;
	border: 1px solid blue;
}
```

### 文字围绕浮动元素

运用浮动元素不会压住文字的特性实现

### 行内块巧妙运用

页面底部页码栏

页码在页面中间显示:
1. 把这些链接盒子转换为行内块，之后给父级指定 `text-align: center;`
2. 利用行内块元素中间有缝隙，并且给父级添加 `text-align: center;` 行内块元素会水平会居中

### CSS 三角形

网页中常见一些三角形，使用 CSS 直接画出来就可以，不必做成图片或者字体图标

```css
 .box1 {
	width: 0;
	height: 0;
	border-top: 10px solid pink;
	border-right: 10px solid red;
	border-bottom: 10px solid blue;
	border-left: 10px solid green;
}
.box2 {
	width: 0;
	height: 0;
	border: 50px solid transparent;
	border-top-color: pink;
	margin: 100px auto;
}
```

![CSS布局01.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS布局01.png)

1. 我们用 CSS 边框可以模拟三角效果
2. 宽度高度为 0
3. 我们 4 个边框都要写，只保留需要的边框颜色，其余的不能省略，都改为 transparent 透明就好了
4. 为了照顾兼容性低版本的浏览器，加上 `font-size: 0;`  `line-height: 0;`

## 常用布局名词

| 位置               | 名词                         |
| ------------------ | ---------------------------- |
| 顶部导航条         | `topbar`                     |
| 页头               | `header`、`page-header`      |
| 导航               | `nav`、`navigator`、`navbar` |
| 搜索框             | `search`、`search-box`       |
| 横幅、广告、宣传图 | `banner`                     |
| 主要内容           | `content`、`main`            |
| 侧边栏             | `aside`、`sidebar`           |
| 页脚               | `footer`、`page-footer`                             |

## 重置默认样式

很多元素都有默认样式，比如：
1. p 元素有默认的上下 margin 
2. h1~h6 标题也有上下 margin ，且字体加粗
3. body 元素有默认的 8px 外边距
4. 超链接有默认的文字颜色和下划线
5. ul 元素有默认的左 pading 
6. ……

### 使用全局选择器

```css
* { 
	margin: 0; 
	padding: 0; 
	......
}
```

### reset. css

选择到具有默认样式的元素，清空其默认的样式

### Normalize. css

`Normalize.css` 是一种最新方案，它在清除默认样式的基础上，保留了一些有价值的默认样式

官网地址：[Normalize.css](http://necolas.github.io/normalize.css/)

相对于 `reset.css` ， `Normalize.css` 有如下优点：
1. 保护了有价值的默认样式，而不是完全去掉它们
2. 为大部分 HTML 元素提供一般化的样式
3. 新增对 HTML5 元素的设置
4. 对并集选择器的使用比较谨慎，有效避免调试工具杂乱
