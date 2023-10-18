---
title: HTML和CSS
order: 1
---

## 1. 如何理解HTML语义化

+ 让人更容易读懂（增加代码的可读性）
+ 让搜索引擎更容易读懂（有利于SEO）

## 2. 块级元素、行内元素、行内块元素

设置为块级元素：`display:block;`或`display:table;`

```html
<!-- 主体结构标签 -->
<html>、<body>
<!-- 排版标签 -->
<h1>~<h6>、<hr>、<p>、<pre>、<div>
<!-- 列表标签 -->
<ul>、<ol>、<li>、<dl>、<dt>、<dd>
<!-- 表格相关标签 -->
<table>、<tbody>、<thead>、<tfoot>、<tr>、<caption>
<!-- 表单相关标签 -->
<form>与<option>
```

设置为行内元素：`display:inline;`

```html
<!-- 文本标签 -->
<br>、<em>、<strong>、<sup>、<sub>、<del>、<ins>
<!-- 其它标签 -->
<a>与<label>
```

设置为行内块元素：`display:inline-block;`

```html
<!-- 图片 -->
<img>
<!-- 单元格 -->
<td>、<th>
<!-- 表单控件 -->
<input>、<textarea>、<select>、<button>
<!-- 框架标签 -->
<iframe>
```

## 3. 盒模型宽度计算

公式：offsetWidth = 内容宽度（content） + 内边距（左右padding） + 边框（左右border）

例：

::: normal-demo Demo 演示

```html
<div id="box">这是一个盒子</div>
```

```css
#box {
    width: 100px;
    padding: 10px;
    border: 1px solid tomato;
    margin: 10px;
}
```

:::

上面例子中的盒子宽度为：122px（100 + 10 + 10 + 1 + 1）

如果我们想让它的宽度为100px，我们可以为盒子设置`box-sizing: border-box;`

```css
#box {
    width: 100px;
    padding: 10px;
    border: 1px solid tomato;
    margin: 10px;
    box-sizing: border-box;
}
```

## 4. margin纵向重叠问题

详见：[margin塌陷问题](https://zhf521.github.io/mynotes/front-end/css-notes/07-CSS%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B.html#_4-2-margin%E5%A1%8C%E9%99%B7%E9%97%AE%E9%A2%98)

## 5. margin负值问题

+ `margin-top`和`margin-left`为负值时，元素会向上、向左移动
+ `margin-right`为负值时，位于元素右侧的元素会左移，元素自身无影响
+ `margin-bottom`为负值时，位于元素下方的元素会上移，元素自身无影响

## 6. BFC的理解与应用

BFC是Block Format Content，块级格式化上下文，是一块独立渲染的区域，内部元素的渲染不会影响边界以外的元素

形成BFC的常见条件：

+ float不为none
+ position为absolute或fixed
+ overflow不为visible
+ display为flex、inline-block
+ 根元素

BFC的特性：

+ box垂直方向的距离由margin决定，属于同一个BFC的两个相邻box的margin会发生重叠
+ 计算BFC的高度时，浮动元素也参与计算
+ BFC的区域不会与float box发生重叠

常见应用：清除浮动

例：

::: normal-demo Demo 演示

```html
<div class="container bfc">
    <img
         class="left"
         src="https://www.imooc.com/static/img/index/logo.png"
         style="margin-right: 10px"
         />
    <p>这是一段文字</p>
</div>
```

```css
.container {
    background-color: #f1f1f1;
}
.left {
    float: left;
}
```

:::

我们想让图片在左侧浮动，但是由于浮动脱离了标准流，导致图片无法撑开父级元素，我们可以为父级元素开启BFC

::: normal-demo Demo 演示

```html
<div class="container bfc">
    <img
         class="left"
         src="https://www.imooc.com/static/img/index/logo.png"
         style="margin-right: 10px"
         />
    <p>这是一段文字</p>
</div>
```

```css
.container {
    background-color: #f1f1f1;
}
.left {
    float: left;
}
.bfc {
    overflow: hidden; /* 触发元素 BFC */
}
```

:::

## 7. float布局：圣杯布局和双飞翼布局

目的：

+ 三栏布局：中间最先加载和渲染（内容最重要）
+ 两侧内容固定，中间内容随宽度自适应

两者区别：

![知识点总结-HTML和CSS01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/知识点总结-HTML和CSS01.png)

### 1. 圣杯布局

将基本布局之后使用向左浮动，为middle栏留出两边位置，然后使用相对定位将左右两栏通过`margin-left`定位到相应位置

步骤：

1. 写基本结构：

   ```html
   <div id="header">这是头部</div>
   <div id="container">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   因为先渲染中间内容，所以中间内容部分写在前面

2. 完成基本布局

   ```css
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
   }
   #right {
       background-color: tomato;
       width: 150px;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   ```

   效果如下：

   ::: normal-demo Demo 演示

   ```html
   <div id="header">这是头部</div>
   <div id="container">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
   }
   #right {
       background-color: tomato;
       width: 150px;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   ```

   :::

3. 向左浮动

   ```css
   #left {
       float: left;
   }
   #right {
       float: left;
   }
   #middle {
       float: left;
   }
   ```

   效果如下：

   ::: normal-demo Demo 演示

   ```html
   <div id="header">这是头部</div>
   <div id="container">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
       float: left;
   }
   #right {
       background-color: tomato;
       width: 150px;
       float: left;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
       float: left;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   ```

   :::

4. 清除浮动影响

   ```html
   <div id="header">这是头部</div>
   <div id="container">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   .clearfix:after {
       content: '';
       display: table;
       clear: both;
   }
   ```

   效果如下：

   ::: normal-demo Demo 演示

   ```html
   <div id="header">这是头部</div>
   <div id="container" class="clearfix">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
       float: left;
   }
   #right {
       background-color: tomato;
       width: 150px;
       float: left;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
       float: left;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   .clearfix:after {
       content: '';
       display: table;
       clear: both;
   }
   ```

   :::

5. 为middle栏留出两边位置

   ```css
   #container {
       padding-left: 100px;
       padding-right: 150px;
   }
   ```

   效果如下：

   ::: normal-demo Demo 演示

   ```html
   <div id="header">这是头部</div>
   <div id="container" class="clearfix">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
       float: left;
   }
   #right {
       background-color: tomato;
       width: 150px;
       float: left;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
       float: left;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   .clearfix:after {
       content: '';
       display: table;
       clear: both;
   }
   #container {
       padding-left: 100px;
       padding-right: 150px;
   }
   ```

   :::

6. 使用相对定位将左栏调整到相应位置

   ```css
   #left {
       position: relative;
       margin-left: -100%;
       right: 100px;
   }
   ```

   效果如下：

   ::: normal-demo Demo 演示

   ```html
   <div id="header">这是头部</div>
   <div id="container" class="clearfix">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
       float: left;
       position: relative;
       margin-left: -100%;
       right: 100px;
   }
   #right {
       background-color: tomato;
       width: 150px;
       float: left;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
       float: left;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   .clearfix:after {
       content: '';
       display: table;
       clear: both;
   }
   #container {
       padding-left: 100px;
       padding-right: 150px;
   }
   ```

   :::

7. 将右栏调整到相应位置

   ```css
   #right {
       margin-right: -150px;
   }
   ```

   ::: normal-demo Demo 演示

   ```html
   <div id="header">这是头部</div>
   <div id="container" class="clearfix">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
       float: left;
       position: relative;
       margin-left: -100%;
       right: 100px;
   }
   #right {
       background-color: tomato;
       width: 150px;
       float: left;
       margin-right: -150px;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
       float: left;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   .clearfix:after {
       content: '';
       display: table;
       clear: both;
   }
   #container {
       padding-left: 100px;
       padding-right: 150px;
   }
   ```

   :::

8. 优化当窗口过小的时候布局会受到影响

   ```css
   body {
       /* 设置最小宽度，防止挤压使中间内容消失 */
       min-width: 600px;
   }
   ```

   ::: normal-demo Demo 演示

   ```html
   <div id="header">这是头部</div>
   <div id="container" class="clearfix">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   body {
       /* 设置最小宽度，防止挤压使中间内容消失 */
       min-width: 600px;
   }
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
       float: left;
       position: relative;
       margin-left: -100%;
       right: 100px;
   }
   #right {
       background-color: tomato;
       width: 150px;
       float: left;
       margin-right: -150px;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
       float: left;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   .clearfix:after {
       content: '';
       display: table;
       clear: both;
   }
   #container {
       padding-left: 100px;
       padding-right: 150px;
   }
   ```

   :::

### 2. 双飞翼布局

将基本布局之后使用向左浮动，通过`margin-left`将左右两栏移到middle栏上，然后为middle里面的内容包裹一个盒子，为盒子设置外边距防止两侧被覆盖

步骤：

1. 写基本结构：

   ```html
   <div id="header">这是头部</div>
   <div id="container">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   因为先渲染中间内容，所以中间内容部分写在前面

2. 完成基本布局

   ```css
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
   }
   #right {
       background-color: tomato;
       width: 150px;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   ```

   效果如下：

   ::: normal-demo Demo 演示

   ```html
   <div id="header">这是头部</div>
   <div id="container">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
   }
   #right {
       background-color: tomato;
       width: 150px;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   ```

   :::

3. 向左浮动

   ```css
   #left {
       float: left;
   }
   #right {
       float: left;
   }
   #middle {
       float: left;
   }
   ```

   效果如下：

   ::: normal-demo Demo 演示

   ```html
   <div id="header">这是头部</div>
   <div id="container">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
       float: left;
   }
   #right {
       background-color: tomato;
       width: 150px;
       float: left;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
       float: left;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   ```

   :::

4. 清除浮动影响

   ```html
   <div id="header">这是头部</div>
   <div id="container">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   .clearfix:after {
       content: '';
       display: table;
       clear: both;
   }
   ```

   效果如下：

   ::: normal-demo Demo 演示

   ```html
   <div id="header">这是头部</div>
   <div id="container" class="clearfix">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
       float: left;
   }
   #right {
       background-color: tomato;
       width: 150px;
       float: left;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
       float: left;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   .clearfix:after {
       content: '';
       display: table;
       clear: both;
   }
   ```

   :::

5. 将左右两栏移到middle栏上

   ```css
   #left {
       margin-left: -100%;
   }
   #right {
       margin-left: -150px;
   }
   ```

   效果如下：

   ::: normal-demo Demo 演示

   ```html
   <div id="header">这是头部</div>
   <div id="container" class="clearfix">
       <div id="middle">这是中间内容</div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
       float: left;
       margin-left: -100%;
   }
   #right {
       background-color: tomato;
       width: 150px;
       float: left;
       margin-left: -150px;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
       float: left;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   .clearfix:after {
       content: '';
       display: table;
       clear: both;
   }
   ```

   :::

6. 为middle里面的内容包裹一个盒子，并为盒子设置外边距防止两侧被覆盖

   ```html
   <div id="header">这是头部</div>
   <div id="container" class="clearfix">
       <div id="middle">
           <div id="middle-wrap">这是中间内容</div>
       </div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   #middle-wrap {
       margin: 0 150px 0 100px;
   }
   ```

   效果如下：

   ::: normal-demo Demo 演示

   ```html
   <div id="header">这是头部</div>
   <div id="container" class="clearfix">
       <div id="middle">
           <div id="middle-wrap">这是中间内容</div>
       </div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
       float: left;
       margin-left: -100%;
   }
   #right {
       background-color: tomato;
       width: 150px;
       float: left;
       margin-left: -150px;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
       float: left;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   .clearfix:after {
       content: '';
       display: table;
       clear: both;
   }
   #middle-wrap {
       margin: 0 150px 0 100px;
   }
   ```

   :::

7. 优化当窗口过小的时候布局会受到影响

   ```css
   body {
       /* 设置最小宽度，防止挤压使中间内容消失 */
       min-width: 600px;
   }
   ```

   效果如下：

   ::: normal-demo Demo 演示

   ```html
   <div id="header">这是头部</div>
   <div id="container" class="clearfix">
       <div id="middle">
           <div id="middle-wrap">这是中间内容</div>
       </div>
       <div id="left">这是左侧内容</div>
       <div id="right">这是右侧内容</div>
   </div>
   <div id="footer">这是页脚</div>
   ```

   ```css
   body {
       /* 设置最小宽度，防止挤压使中间内容消失 */
       min-width: 600px;
   }
   #header {
       text-align: center;
       background-color: #f1f1f1;
   }
   #left {
       background-color: pink;
       width: 100px;
       float: left;
       margin-left: -100%;
   }
   #right {
       background-color: tomato;
       width: 150px;
       float: left;
       margin-left: -150px;
   }
   #middle {
       background-color: skyblue;
       width: 100%;
       float: left;
   }
   #footer {
       text-align: center;
       background-color: #f1f1f1;
   }
   .clearfix:after {
       content: '';
       display: table;
       clear: both;
   }
   #middle-wrap {
       margin: 0 150px 0 100px;
   }
   ```

   :::

## 8. 手写clearfix

```css
.clearfix:after {
    content: '';
    display: table;
    clear: both;
}
```

## 9. flex布局：flex实现一个三个点的色子

常用属性：

`flex-direction`（主轴方向）：

+ row ：主轴方向水平从左到右 —— 默认值
+ row-reverse ：主轴方向水平从右到左
+ column ：主轴方向垂直从上到下
+ column-reverse ：主轴方向垂直从下到上

`justify-content`（主轴对齐方式）：

+ flex-start ：主轴起点对齐。—— 默认值
+ flex-end ：主轴终点对齐
+ center ：居中对齐
+ space-between ：均匀分布，两端对齐（最常用）
+ space-around ：均匀分布，两端距离是中间距离的一半
+ space-evenly ：均匀分布，两端距离与中间距离一致

`align-items`（侧轴对齐方式）：

+ flex-start ：侧轴的起点对齐
+ flex-end ：侧轴的终点对齐
+ center ：侧轴的中点对齐
+ baseline : 伸缩项目的第一行文字的基线对齐
+ stretch ：如果伸缩项目未设置高度，将占满整个容器的高度。—— （默认值）

`flex-wrap`（主轴换行方式）：

+ nowrap ：默认值，不换行
+ wrap ：自动换行，伸缩容器不够时自动换行
+ wrap-reverse ：反向换行

`align-self`（单独对齐）：默认值为 auto ，表示继承父元素的 align-items 属性

实现一个三个点的色子：

::: normal-demo Demo 演示

```html
<div class="box">
    <box class="item"></box>
    <box class="item"></box>
    <box class="item"></box>
</div>
```

```css
.box {
    width: 200px;
    height: 200px;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
}
.item {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #666;
}
.item:nth-child(2) {
    align-self: center;
}
.item:nth-child(3) {
    align-self: flex-end;
}
```

:::

## 10. absolute和relative定位

relative（相对定位）：依据自身定位

absolute（绝对定位）：依据最近一级的定位元素定位

## 11. 居中对齐的实现方式

水平居中：

+ inline元素：`text-align:center;`
+ block元素：`margin:auto;`
+ absolute元素：`left:50%;`+`margin-left:元素宽度的一半的负值;`

例：

::: normal-demo Demo 演示

```html
<div class="box">
    <span>你好</span>
</div>
```

```css
.box {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    text-align: center;
}
```

:::

::: normal-demo Demo 演示

```html
<div class="box"></div>
```

```css
.box {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    margin: auto;
}
```

:::

::: normal-demo Demo 演示

```html
<div class="box">
    <div class="box1"></div>
</div>
```

```css
.box {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    position: relative;
    top: 100px;
    left: 50px;
}
.box1 {
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: skyblue;
    top: 20px;
    left: 50%;
    margin-left: -10px;
}
```

:::

垂直居中：

+ inline元素：`line-height`值 = `height`值
+ absolute元素（知宽高）：`top:50%`+`margin-top:元素高度的一半的负值;`
+ absolute元素：`left:50%;`+`top:50%;`+`transform:translate(-50%,-50%);`
+ absolute元素：`top、left、bottom、right:0;`+`margin:auto;`

::: normal-demo Demo 演示

```html
<div class="box">
    <span>你好</span>
</div>
```

```css
.box {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    line-height: 100px;
}
```

:::

::: normal-demo Demo 演示

```html
<div class="box">
    <div class="box1"></div>
</div>
```

```css
.box {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    position: relative;
    top: 100px;
    left: 50px;
}
.box1 {
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: skyblue;
    top: 50%;
    margin-top: -10px;
}
```

:::

::: normal-demo Demo 演示

```html
<div class="box">
    <div class="box1"></div>
</div>
```

```css
.box {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    position: relative;
    top: 100px;
    left: 50px;
}
.box1 {
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: skyblue;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
```

:::

::: normal-demo Demo 演示

```html
<div class="box">
    <div class="box1"></div>
</div>
```

```css
.box {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    position: relative;
    top: 100px;
    left: 50px;
}
.box1 {
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: skyblue;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}
```

:::

## 12. line-height如何继承

+ 当`line-height`值为具体数值时，直接继承该值
+ 当`line-height`值为比例时，直接继承该值（子元素字体大小*比例值）
+ 当`line-height`值为百分比时，继承计算得来的值（父元素字体大小*行高百分比）

::: normal-demo Demo 演示

```html
<p>这是一行文字</p>
```

```css
body {
    font-size: 20px;
    line-height: 200%;
}
p {
    background-color: #ccc;
    font-size: 16px;
}
```

:::

行高为：20*200% = 40

## 13. rem是什么

rem是一个相对长度单位，相对于根元素，常用于响应式布局

px，绝对长度单位，最常用

em，相对长度单位，相对于父元素，不常用

## 14. 响应式布局的常用方案

+ media-query，根据不同屏幕宽度设置font-size
+ rem，基于根元素的相对单位

## 15. rem的弊端

阶梯性，需要使用@media判断的东西太多，产生大量代码

## 16. 网页视口尺寸

+ `window.screen.height`：屏幕高度
+ `window.innerHeight`：网页视口高度
+ `document.body.clientHeight`：body高度

## 17. vw与vh

+ vw表示相对于视口的宽度
  + 1vw表示网页视口宽度的1/100
+ vh表示相对于视口的高度
  + 1vh表示网页视口高度的1/100
+ vmax表示取两者中的最大值
+ vmin表示取两者中的最小值

