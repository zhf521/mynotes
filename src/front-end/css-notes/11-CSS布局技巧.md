---
title: CSS布局技巧
order: 11
---

## 1. margin负值运用

1. 让每个盒子 margin 往左侧移动`-1px` 正好压住相邻盒子边框
2. 鼠标经过某个盒子的时候，提高当前盒子的层级即可（如果没有有定位，则加相对定位（保留位置），如果有定位，则加（z-index）

::: normal-demo Demo 演示

```html
 <ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
	<li>4</li>
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

:::

## 2. 文字围绕浮动元素

利用浮动元素不会压住文字的特性实现

## 3. 行内块巧妙运用

页面底部页码栏

页码在页面中间显示:
1. 把这些链接盒子转换为行内块，之后给父级指定 `text-align: center;`
2. 利用行内块元素中间有缝隙，并且给父级添加 `text-align: center;` 行内块元素会水平会居中

## 4. CSS三角形

网页中常见一些三角形，使用 CSS 直接画出来就可以，不必做成图片或者字体图标

1. 我们用 CSS 边框可以模拟三角效果
2. 宽度高度为 0
3. 我们 4 个边框都要写，只保留需要的边框颜色，其余的不能省略，都改为 transparent 透明就好了
4. 为了照顾兼容性低版本的浏览器，加上 `font-size: 0;`  `line-height: 0;`

::: normal-demo Demo 演示

```html
<div class="box1"></div>
<div class="box2"></div>
```

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

:::

## 5. 关于默认宽度
所谓的默认宽度，就是不设置 width 属性时，元素所呈现出来的宽度

`总宽度 = 父的content - 自身的左右margin` 

`内容区的宽度 = 父的content - 自身的左右margin - 自身的左右border - 自身的左右padding`

## 6. 行内元素、行内块元素

行内元素、行内块元素，可以被父元素当做文本处理

## 7. 如何让子元素在父亲中水平居中
若子元素为块元素，给父元素加上： `margin:0 auto;`
若子元素为行内元素、行内块元素，给父元素加上： `text-align:center;`
## 8. 如何让子元素在父亲中垂直居中

（若想绝对垂直居中，父元素 font-size 设置为 0）

若子元素为块元素，给子元素加上： `margin-top` ，值为：`(父元素content －子元素盒子总高) / 2`

若子元素为行内元素、行内块元素：让父元素的 `height = line-height` ，每个子元素都加上： `vertical-align: middle;`

## 9. 元素之间的空白问题
产生原因：行内元素、行内块元素，彼此之间的换行会被浏览器解析为一个空白字符

解决方案：

方案一： 去掉换行和空格（不推荐）

方案二： 给父元素设置 `font-size: 0` ，再给需要显示文字的元素，单独设置字体大小（推荐）

## 10. 行内块的幽灵空白问题
产生原因：行内块元素与文本的基线对齐，而文本的基线与文本最底端之间是有一定距离的

解决方案：

方案一： 给行内块设置 `vertical-align` ，值不为 baseline 即可，设置为 middel 、 bottom 、 top 均可

方案二： 若父元素中只有一张图片，设置图片为 `display: block;` 

方案三： 给父元素设置 `font-size: 0;`。如果该行内块内部还有文本，则需单独设置 `font-size`

## 11. 常用布局名词

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

## 12. 重置默认样式（CSS初始化）

很多元素都有默认样式，比如：
1. p 元素有默认的上下 margin 
2. h1~h6 标题也有上下 margin ，且字体加粗
3. body 元素有默认的 8px 外边距
4. 超链接有默认的文字颜色和下划线
5. ul 元素有默认的左 padding 
6. ……

### 12.1 使用全局选择器

```css
* { 
	margin: 0; 
	padding: 0; 
	......
}
```

### 12.2 reset.css

选择到具有默认样式的元素，清空其默认的样式

### 12.3 Normalize.css

`Normalize.css` 是一种最新方案，它在清除默认样式的基础上，保留了一些有价值的默认样式

官网地址：[Normalize.css](http://necolas.github.io/normalize.css/)

相对于 `reset.css` ， `Normalize.css` 有如下优点：
1. 保护了有价值的默认样式，而不是完全去掉它们
2. 为大部分 HTML 元素提供一般化的样式
3. 新增对 HTML5 元素的设置
4. 对并集选择器的使用比较谨慎，有效避免调试工具杂乱
