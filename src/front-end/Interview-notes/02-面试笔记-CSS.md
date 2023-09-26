---
title: CSS
order: 2
---

## 1. 盒模型

浏览器的渲染引擎在对网页文档进行布局时，会按照 “CSS 基础盒模型” （CSS Basic Box Model）标准，将文档中的所有元素都表示为一个个矩形的盒子，再用 CSS 去决定这些盒子的大小尺寸、显示位置、以及其他属性（如颜色、背景、边框等）

CSS3中的盒模型有以下两种：标准盒子模型、IE盒子模型

盒模型都是由四个部分组成的，分别是margin（外边距）、border（边框）、padding（内边距）和content（内容）

标准盒模型和IE盒模型的区别在于设置width和height时，所对应的范围不同：

+ 标准盒模型的width和height属性的范围只包含了content
+ IE盒模型的width和height属性的范围包含了border、padding和content

在 CSS3 中，我们可以通过设置 box-sizing 的值来决定具体使用何种盒模型：

+ content-box 标准盒模型（默认值）

- border-box 怪异盒模型（IE盒模型）

## 2. CSS选择器及其优先级

详见：[CSS选择器](https://zhf521.github.io/mynotes/front-end/css-notes/02-CSS%E9%80%89%E6%8B%A9%E5%99%A8.html)

## 3. CSS样式引入方式

详见：[CSS样式引入方式](https://zhf521.github.io/mynotes/front-end/css-notes/01-%E5%88%9D%E8%AF%86CSS.html#_2-css%E7%9A%84%E5%BC%95%E5%85%A5%E6%96%B9%E5%BC%8F)

## 4. CSS中可继承与不可继承属性有哪些

### 1. 可继承属性

+ 字体系列属性
  + font-family：字体系列
  + font-weight：字体的粗细
  + font-size：字体的大小
  + font-style：字体的风格
+ 文本系列属性
  + text-indent：文本缩进
  + text-align：文本水平对齐
  + line-height：行高
  + word-spacing：单词之间的间距
  + letter-spacing：中文或者字母之间的间距
  + text-transform：控制文本大小写（即uppercase、lowercase、capitalize）
  + color：文本颜色
+ 元素可见性
  + visibility：控制元素显示隐藏
+ 列表布局属性
  + list-style：列表风格，包括list-style-type、list-style-image等
+ 光标属性
  + cursor：光标显示为何种形态

### 2. 不可继承属性

+ display
+ 文本属性
  + vertical-align：垂直文本对齐
  + text-decoration：规定添加到文本的装饰
  + text-shadow：文本阴影效果
  + white-space：空白符的处理
  + unicode-bidi：设置文本的方向
+ 盒子模型的属性
+ 背景属性
+ 定位属性
+ 生成内容属性
+ 轮廓样式属性
+ 页面样式属性
+ 声音样式属性

## 5. display的属性值及其作用

| 属性值       | 作用                                                     |
| ------------ | -------------------------------------------------------- |
| none         | 元素不显示，并且会从文档流中移除                         |
| block        | 块类型。默认宽度为父元素宽度，可设置宽高，换行显示       |
| inline       | 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示 |
| inline-block | 默认宽度为内容宽度，可以设置宽高，同行显示               |
| list-item    | 像块类型元素一样显示，并添加样式列表标记                 |
| table        | 此元素会作为块级表格来显示                               |
| inherit      | 规定应该从父元素继承display属性的值                      |

## 6. display的block、inline和inline-block的区别

+ block：会独占一行，多个元素会另起一行，可以设置width、height、margin和padding属性
+ inline：元素不会独占一行，设置width、height属性无效。但可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin
+ inline-block：将对象设置为inline对象，但对象的内容作为block对象呈现，之后的内联对象会被排列在同一行内

## 7. 隐藏元素的方法

+ display: none：渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件
+ visibility: hidden：元素在页面中仍占据空间，但是不会响应绑定的监听事件
+ opacity: 0：将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件
+ position: absolute：通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏
+ z-index: 负值：来使其他元素遮盖住该元素，以此来实现隐藏
+ clip/clip-path ：使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件
+ transform: scale(0,0)：将元素缩放为 0，来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件

## 8. link与@import的区别

两者都是外部引用CSS的方式，区别如下：

+ `link`功能较多，可以定义`RSS`，而`@import`只能用于加载`CSS`
+ 当解析到`link`时，页面会同步加载所引用的 `css`，而`@import`所引用的 `css` 会等到页面加载完才被加载
+ `@import`兼容性差
+ `link`可以使用 `js` 动态引入，`@import`不行

## 9. display:none与visibility:hidden的区别

`display:none`与`visibility:hidden`都可以使元素不可见，区别如下：

- 渲染树中
  - `display: none;`会使元素完全从渲染树中消失，不占据任何空间
  - `visibility: hidden;`不会使元素从渲染树中消失，仍然占据空间，只是内容不可见
- 继承性
  - `display: none;`是非继承属性，子孙节点消失是因为元素本身从渲染树中消失，修改子孙节点的属性无法使其显示
  - `visibility: hidden;`是继承属性，子孙节点消失是因为继承了`hidden`属性，通过设置`visibility: visible;`可以使子孙节点显示
- 导致重排和重绘
  - 修改具有常规流的元素的`display`属性通常会导致文档重排（重新计算元素的位置和大小）
  - 修改`visibility`属性只会导致本元素的重绘（重新绘制元素的可见部分）
- 读屏器（屏幕阅读软件）
  - 不会读取`display: none;`元素的内容
  - 会读取`visibility: hidden;`元素的内容

