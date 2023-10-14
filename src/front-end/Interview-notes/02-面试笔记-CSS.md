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

## 10. 伪元素和伪类的区别和作用？

伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。例如：

```css
p::before {content:"第一章：";}
p::after {content:"Hot!";}
p::first-line {background:red;}
p::first-letter {font-size:30px;}
```

伪类：将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。例如：

```css
a:hover {color: #FF00FF;}
p:first-child {color: red;}
```

总结：伪类是通过在元素选择器上加入伪类改变元素状态，而伪元素通过对元素的操作进行对元素的改变

## 11. 对requestAnimationFrame的理解

实现动画效果的方法比较多，Javascript 中可以通过定时器 setTimeout 来实现，CSS3 中可以使用 transition 和 animation 来实现，HTML5 中的 canvas 也可以实现。除此之外，HTML5 提供一个专门用于请求动画的API，那就是 requestAnimationFrame，顾名思义就是请求动画帧

语法： `window.requestAnimationFrame(callback);`  其中，callback是下一次重绘之前更新动画帧所调用的函数(即上面所说的回调函数)。该回调函数会被传入DOMHighResTimeStamp参数，它表示`requestAnimationFrame()`开始去执行回调函数的时刻。该方法属于宏任务，所以会在执行完微任务之后再去执行

取消动画：使用`cancelAnimationFrame()`来取消执行动画，该方法接收一个参数——requestAnimationFrame默认返回的id，只需要传入这个id就可以取消动画了

优势：

+ CPU节能
+ 函数节流
+ 减少DOM操作

setTimeout执行动画的缺点：它通过设定间隔时间来不断改变图像位置，达到动画效果。但是容易出现卡顿、抖动的现象

## 12. 为什么有时候用translate来改变位置而不是定位？

translate 是 transform 属性的⼀个值。改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。transform使浏览器为元素创建⼀个 GPU 图层，但改变绝对定位会使用到 CPU。 因此translate()更高效，可以缩短平滑动画的绘制时间。 而translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发生这种情况

## 13. li 与 li 之间有看不见的空白间隔是什么原因引起的？如何解决？

浏览器会把inline内联元素间的空白字符（空格、换行、Tab等）渲染成一个空格。为了美观，通常是一个`<li>`放在一行，这导致`<li>`换行后产生换行字符，它变成一个空格，占用了一个字符的宽度

解决办法：

1. 为`<li>`设置`float:left`。不足：有些容器是不能设置浮动，如左右切换的焦点图等。
2. 将所有`<li>`写在同一行。不足：代码不美观。
3. 将`<ul>`内的字符尺寸直接设为0，即`font-size:0`。不足：`<ul>`中的其他字符尺寸也被设为0，需要额外重新设定其他字符尺寸，且在Safari浏览器依然会出现空白间隔
4. 消除`<ul>`的字符间隔`letter-spacing:-8px`，不足：这也设置了`<li>`内的字符间隔，因此需要将`<li>`内的字符间隔设为默认`letter-spacing:normal`

## 14. CSS3中有哪些新特性

+ 新增各种CSS选择器 （`: not(.input)`：所有 class 不是“input”的节点）
+ 圆角 （border-radius:8px）
+ 多列布局 （multi-column layout）
+ 阴影和反射 （Shadoweflect）
+ 文字特效 （text-shadow）
+ 文字渲染 （text-decoration）
+ 线性渐变 （gradient）
+ 旋转 （transform）
+ 增加了旋转,缩放,定位,倾斜,动画,多背景
+ flex

## 15. 可替换元素的概念及计算规则

可替换元素（replaced elements）是一种具有内在尺寸和宽高的元素，其内容由外部资源（如图像、视频等）决定。可替换元素的内容在渲染时会被外部资源替代。

其它特性：

+ 内容的外观不受页面上的CSS的影响
+ 有自己的尺寸，大部分默认为300px*150px
+ 内容的外观不受页面上的CSS的影响：也就是替换元素和替换元素、替换元素和文字都是可以在一行显示的

可替换元素的尺寸从内而外分为三类：

+ 固有尺寸： 指的是替换内容原本的尺寸。例如，图片、视频作为一个独立文件存在的时候，都是有着自己的宽度和高度的
+ HTML尺寸： 只能通过HTML原生属性改变，这些HTML原生属性包括`<img>`的width和height属性、`<input>`的size属性，`<textarea>`的cols和rows属性
+ CSS尺寸： 特指可以通过CSS的width和height或者max-width/min-width和max-height/min-height设置的尺寸，对应盒尺寸中的content-box

这三层结构的计算规则具体如下：

1. 如果没有CSS尺寸和HTML尺寸，则使用固有尺寸作为最终的宽高
2. 如果没有CSS尺寸，则使用HTML尺寸作为最终的宽高
3. 如果有CSS尺寸，则最终尺寸由CSS属性决定
4. 如果“固有尺寸”含有固有的宽高比例，同时仅设置了宽度或仅设置了高度，则元素依然按照固有的宽高比例显示
5. 如果上面的条件都不符合，则最终宽度表现为300像素，高度为150像素
6. 内联替换元素和块级替换元素使用上面同一套尺寸计算规则

常见的可替换元素：

1. `<img>`：用于显示图像。
2. `<input>`：包括不同类型的输入字段，如文本框、复选框、单选按钮等。
3. `<video>` 和 `<audio>`：用于嵌入视频和音频内容。
4. `<object>`：用于嵌入外部资源，如Flash动画、PDF文件等。
5. `<iframe>`：用于嵌入另一个HTML文档。
6. `<canvas>`：用于绘制图形和动画。
7. `<embed>` 和 `<param>`：用于嵌入多媒体内容。

## 16. 对CSS Sprites的理解

CSS Sprites（精灵图），将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的 background-image，background-repeat，background-position属性的组合进行背景定位

优点：

+ 利用CSS Sprites能很好地减少网页的http请求，从而大大提高了页面的性能，这是CSS Sprites最大的优点
+ CSS Sprites能减少图片的字节，把3张图片合并成1张图片的字节总是小于这3张图片的字节总和

缺点：

+ 在图片合并时，要把多张图片有序的、合理的合并成一张图片，还要留好足够的空间，防止板块内出现不必要的背景。在宽屏及高分辨率下的自适应页面，如果背景不够宽，很容易出现背景断裂
+ CSSSprites在开发的时候相对来说有点麻烦，需要借助photoshop或其他工具来对每个背景单元测量其准确的位置
+ 维护方面：CSS Sprites在维护的时候比较麻烦，页面背景有少许改动时，就要改这张合并的图片，无需改的地方尽量不要动，这样避免改动更多的CSS，如果在原来的地方放不下，又只能（最好）往下加图片，这样图片的字节就增加了，还要改动CSS

## 17. 什么是物理像素，逻辑像素和像素密度，为什么在移动端开发时需要用到@3x, @2x这种图片？

物理像素：是设备屏幕（或图像）实际具有的像素数目，设备一出厂就确定的，固定的，是屏幕的最小物理单位

逻辑像素：逻辑像素就是css中设置的像素。默认情况下1物理像素 = 1逻辑像素, 在高像素密度的设备上1逻辑像素 = 多个物理像素

像素密度：像素密度是指在给定区域内物理像素的数量。通常用PPI（Pixels Per Inch）表示。较高的像素密度意味着相同的区域内有更多的物理像素，因此图像和文本会显示得更加细腻和清晰。常见的像素密度有低像素密度（例如ldpi）、中像素密度（例如mdpi）、高像素密度（例如hdpi）、超高像素密度（例如xhdpi）、超超高像素密度（例如xxhdpi）等

在移动端开发中需要使用@3x、@2x等图片，是为了适应不同像素密度的设备，并提供更好的显示效果。当使用高像素密度的设备时（如@2x或@3x），如果使用与物理像素相等的逻辑像素的图片进行显示，图片会显得模糊或失真。因此，我们需要提供多个像素密度的图片版本，让设备根据自身的像素密度选择合适的图片进行显示。例如，@3x图像适用于高像素密度设备，@2x图像适用于中等像素密度设备，而标准尺寸的图像适用于低像素密度设备。这样可以确保图像在不同设备上显示清晰和细腻

使用媒体查询可以实现：

```css
my-image { background: (low.png); }
@media only screen and (min-device-pixel-ratio: 1.5) {
  #my-image { background: (high.png); }
}
```

## 18. margin 和 padding 的使用场景

+ 需要在border外侧添加空白，且空白处不需要背景（色）时，使用 margin
+ 需要在border内测添加空白，且空白处需要背景（色）时，使用 padding

## 19. 对line-height 的理解及其赋值方式

line-height的概念：

+ line-height 指一行文本的高度，包含了字间距，实际上是下一行基线到上一行基线距离
+ 如果一个标签没有定义 height 属性，那么其最终表现的高度由 line-height 决定
+ 一个容器没有设置高度，那么撑开容器高度的是 line-height，而不是容器内的文本内容
+ 把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中
+ line-height 和 height 都能撑开一个高度

line-height 的赋值方式：

+ 带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高
+ 纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 * 18 = 27px
+ 百分比：将计算后的值传递给后代

## 20. CSS 优化和提高性能的方法有哪些？

加载性能：

1. css压缩：将写好的css进行打包压缩，可以减小文件体积
2. css单一样式：当需要下边距和左边距的时候，很多时候会选择使用 margin:top 0 bottom 0；但margin-bottom:bottom;margin-left:left;执行效率会更高
3. 减少使用@import，建议使用link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载

选择器性能：

1. 关键选择器（key selector）。选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）。CSS选择符是从右到左进行匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定是否是指定的元素等等
2. 如果规则拥有ID选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹配它们了）
3. 避免使用通配规则，如`*{}`计算次数惊人，只对需要用到的元素进行选择
4. 尽量少的去对标签进行选择，而是用class
5. 尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过三层，更多的使用类来关联每一个标签元素
6. 了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。

渲染性能：

1. 慎重使用高性能属性：浮动、定位
2. 尽量减少页面重排、重绘
3. 去除空规则：`{}`。空规则的产生原因一般来说是为了预留样式。去除这些空规则无疑能减少css文档体积
4. 属性值为0时，不加单位
5. 属性值为浮动小数`0.**`，可以省略小数点之前的0
6. 标准化各种浏览器前缀：带浏览器前缀的在前。标准属性在后
7. 不使用@import前缀，它会影响css的加载速度
8. 选择器优化嵌套，尽量避免层级过深
9. css雪碧图，同一页面相近部分的小图标，方便使用，减少页面的请求次数，但是同时图片本身会变大，使用时，优劣考虑清楚，再使用
10. 正确使用display的属性，由于display的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能
11. 不滥用web字体。对于中文网站来说WebFonts可能很陌生，国外却很流行。web fonts通常体积庞大，而且一些浏览器在下载web fonts时会阻塞页面渲染损伤性能。

可维护性、健壮性：

1. 将具有相同属性的样式抽离出来，整合并通过class在页面中进行使用，提高css的可维护性
2. 样式与内容分离：将css代码定义到外部css中

## 21. CSS预处理器/后处理器是什么？为什么要使用它们？

预处理器，如：less，sass，stylus，用来预编译sass或者less，增加了css代码的复用性。层级，mixin， 变量，循环， 函数等对编写以及开发UI组件都极为方便

后处理器， 如： postCss（`PostCSS` 提供了一个灵活的平台和插件生态系统，可以对 `CSS` 进行各种转换和优化，使开发者能够更好地编写和管理样式代码，并兼容不同的浏览器和未来的 `CSS` 标准），通常是在完成的样式表中根据css规范处理css，让其更加有效。目前最常做的是给css属性添加浏览器私有前缀，实现跨浏览器兼容性的问题

css预处理器为css增加一些编程特性，无需考虑浏览器的兼容问题，可以在CSS中使用变量，简单的逻辑程序，函数等在编程语言中的一些基本的性能，可以让css更加的简洁，增加适应性以及可读性，可维护性等

使用原因：

+ 结构清晰， 便于扩展
+ 可以很方便的屏蔽浏览器私有语法的差异
+ 可以轻松实现多重继承
+ 完美的兼容了CSS代码，可以应用到老项目中

## 22. ::before 和 :after 的双冒号和单冒号有什么区别？

+ 冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素
+ ::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中

## 23. display:inline-block 什么时候会显示间隙？

+ 有空格时会有间隙，可以删除空格解决
+ margin正值时，可以让margin使用负值解决
+ 使用font-size时，可通过设置font-size:0、letter-spacing、word-spacing解决

## 24. 单行、多行文本溢出隐藏

单行文本溢出：

```css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;      // 溢出用省略号显示
white-space: nowrap;         // 规定段落中的文本不进行换行
```

多行文本溢出：

```css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;     // 溢出用省略号显示
display:-webkit-box;         // 作为弹性伸缩盒子模型显示。
-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
-webkit-line-clamp:3;        // 显示的行数
```

## 25. **Sass、Less 是什么？为什么要使用他们？** 

他们都是 CSS 预处理器，是 CSS 上的一种抽象层。他们是一种特殊的语法/语言编译成 CSS。 例如 Less 是一种动态样式语言，将 CSS 赋予了动态语言的特性，如变量，继承，运算， 函数，LESS 既可以在客户端上运行 (支持 IE 6+, Webkit, Firefox)，也可以在服务端运行 (借助 Node.js)。 

为什么要使用它们？ 

+ 结构清晰，便于扩展。 可以方便地屏蔽浏览器私有语法差异。封装对浏览器语法差异的重复处理， 减少无意义的机械劳动
+ 可以轻松实现多重继承。 完全兼容 CSS 代码，可以方便地应用到老项目中。LESS 只是在 CSS 语法上做了扩展，所以老的 CSS 代码也可以与 LESS 代码一同编译

## 26. 对媒体查询的理解？

媒体查询是自 CSS3 开始加入的一个功能。它可以进行响应式适配展示。

媒体查询由两部分组成：

- 一个可选的媒体类型（如 screen、print 等）
- 零个或多个媒体功能限定表达式（如 max-width: 500px、orientation: landscape 等）

这两部分最终都会被解析为 true 或 false 值，然后整个媒体查询值为 true，则和该媒体查询关联的样式就生效，否则就不生效

例：

```css
/* 应用于屏幕宽度小于600px的情况 */
@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

/* 应用于打印时的情况 */
@media print {
  body {
    font-size: 12pt;
  }
}
```

## 27. 如何判断元素是否到达可视区域 

在日常开发中，我们经常需要判断目标元素是否在视窗之内或者和视窗的距离小于一个值（例如 100 px），从而实现一些常用的功能，例如：

- 图片的懒加载
- 列表的无限滚动
- 计算广告元素的曝光情况
- 可点击链接的预加载

判断一个元素是否在可视区域，我们常用的有三种办法：

- offsetTop、scrollTop
- getBoundingClientRect
- Intersection Observer

### 1. offsetTop、scrollTop

client 相关：

| 名称         | 概念                                                         | 备注                                                         |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| clientWidth  | **可视区域**宽度，包含 padding，但并不包含 border、scrollbar、margin | 单位 px，只读，若元素大小超出可视区域，仅计算可视区域        |
| clientHeight | **可视区域**高度，包含 padding，但并不包含 border、scrollbar、margin | 单位 px，只读，若元素大小超出可视区域，仅计算可视区域        |
| clientTop    | 元素上边框宽度，不包含上部的 padding 与 margin               | 单位 px，只读，与 borderTopWidth 属性相同                    |
| clientLeft   | 元素左边框宽度，不包含左部的 padding 与 margin               | 单位 px，只读，与 borderLeftWidth 属性相同，如果该元素有滚动条且 direction 为 right-to-left，在 windows 平台非 IE 浏览器该属性返回值为左边框宽度+滚动条宽度，IE 返回值为 0，在 macOS 平台均返回左边框宽度 |

offset 相关：

| 名称         | 概念                                                         | 备注                                                         |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| offsetWidth  | **可视区域**宽度，包含 padding、border、scrollbar，但不包含 margin | 单位 px，只读，若元素大小超出可视区域，仅计算可视区域        |
| offsetHeight | **可视区域**高度，包含 padding、border、scrollbar，但不包含 margin | 单位 px，只读，若元素大小超出可视区域，仅计算可视区域        |
| offsetParent | 返回最近的 position 不为 static 的祖先元素                   | 只读，若元素的 display 为’none’，则该属性为 null，该属性是 offsetTop、offsetLeft 的计算依据 |
| offsetTop    | 返回当前元素顶部相对父元素 offsetParent 顶部的距离，包含当前元素的 margin 及相对父元素的 padding、scrollbar、border | 只读，即当前元素 border 以外（不含 border）相对父元素 offsetParent border 以内（含 border）的距离 |
| offsetLeft   | 返回当前元素左侧相对父元素 offsetParent 左侧的距离，包含当前元素的 margin 及相对父元素的 padding、scrollbar、border | 只读，即当前元素 border 以外（不含 border）相对父元素 offsetParent border 以内（含 border）的距离 |

scroll 相关：

| 名称         | 概念                                                         | 备注                                                         |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| scrollWidth  | 返回元素的全部宽度，包含 padding 但不包含 scrollbar、border、margin | 单位 px，只读，该属性包含了元素超出可视区域的部分            |
| scrollHeight | 返回元素的全部高度，包含 padding 但不包含 scrollbar、border、margin | 单位 px，只读，该属性包含了元素超出可视区域的部分            |
| scrollTop    | 设置或返回元素在垂直方向的滚动像素数                         | 如果设置值非法或元素不可滚动，该属性会被设置为 0，如果设置值超过最大值，则设置为最大值 |
| scrollLeft   | 设置或返回元素在水平方向的滚动像素数                         | 如果设置值非法或元素不可滚动，该属性会被设置为 0，如果设置值超过最大值，则设置为最大值 |

公式：

```js
el.offsetTop - document.documentElement.scrollTop <= viewPortHeight
```

代码实现：

```js
function isInViewPortOfOne (el) {
    // viewPortHeight 兼容所有浏览器写法，用于获取视口的高度
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    // 用于获取元素相对于文档顶部的偏移量（即距离文档顶部的距离）
    const offsetTop = el.offsetTop;
    // 用于获取当前文档滚动的距离，即滚动条顶部到页面顶部的距离
    const scrollTop = document.documentElement.scrollTop;
    // 表示元素顶部相对于视口顶部的距离，计算方式是将元素的偏移量减去滚动距离
    const top = offsetTop - scrollTop;
    return top <= viewPortHeight;
}
```

### 2. getBoundingClientRect

getBoundingClientRect 是元素上的一个方法，调用后返回元素的大小、相对视窗口的位置等信息。（每次滚动位置改变时，调用该方法的返回值都会变化）

返回的对象有 8 个属性：

| 名称   | 说明                                                         |
| ------ | ------------------------------------------------------------ |
| x      | 元素原点（左上角顶点）的 x 坐标（相对视窗口左边的距离）      |
| y      | 元素原点（左上角顶点）的 y 坐标（相对视窗口顶部的距离）      |
| width  | 元素的宽度，包含 padding、scrollbar、border                  |
| height | 元素的高度，包含 padding、scrollbar、border                  |
| left   | 元素左边相对视窗口左边的距离，通常与 x 相同，若 width 是负值，则为 x + width 的值 |
| top    | 元素顶部相对视窗口顶部的距离，通常与 y 相同，若 height 为负值，则为 y + height 的值 |
| right  | 元素右边相对视窗口左边的距离，通常与 x + width 相同，若 width 为负值，则为 x 的值 |
| bottom | 元素底部相对视窗口顶部的距离，通常与 y + height 相同，若 height 为负值，则为 y 的值 |

如果一个元素在视窗之内的话，那么它一定满足下面四个条件：

- top 大于等于 0
- left 大于等于 0
- bottom 小于等于视窗高度
- right 小于等于视窗宽度

代码实现：

```js
function isInViewPort(element) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const {
    top,
    right,
    bottom,
    left,
  } = element.getBoundingClientRect();

  return (
    top >= 0 &&
    left >= 0 &&
    right <= viewWidth &&
    bottom <= viewHeight
  );
}
```

### 3. Intersection Observer

`Intersection Observer` 即重叠观察者，从这个命名就可以看出它用于判断两个元素是否重叠，因为不用进行事件的监听，性能方面相比`getBoundingClientRect `会好很多

使用步骤主要分为两步：创建观察者和传入被观察者

1. 创建观察者

   ```js
   const options = {
     // 表示重叠面积占被观察者的比例，从 0 - 1 取值，
     // 1 表示完全被包含
     threshold: 1.0, 
     root:document.querySelector('#scrollArea') // 必须是目标元素的父级元素
   };
   
   const callback = (entries, observer) => { ....}
   
   const observer = new IntersectionObserver(callback, options);
   ```

   通过`new IntersectionObserver`创建了观察者 `observer`，传入的参数 `callback` 在重叠比例超过 `threshold` 时会被执行`

   关于`callback`回调函数常用属性如下：

   ```js
   // 上段代码中被省略的 callback
   const callback = function(entries, observer) { 
       entries.forEach(entry => {
           entry.time;               // 触发的时间
           entry.rootBounds;         // 根元素的位置矩形，这种情况下为视窗位置
           entry.boundingClientRect; // 被观察者的位置举行
           entry.intersectionRect;   // 重叠区域的位置矩形
           entry.intersectionRatio;  // 重叠区域占被观察者面积的比例（被观察者不是矩形时也按照矩形计算）
           entry.target;             // 被观察者
       });
   };
   ```

2. 传入被观察者

   通过 `observer.observe(target)` 这一行代码即可简单的注册被观察者

   ```js
   const target = document.querySelector('.target');
   observer.observe(target);
   ```

## 28. z-index属性在什么情况下会失效

通常 z-index 的使用是在有两个重叠的标签，在一定的情况下控制其中一个在另一个的上方或者下方出现。z-index值越大就越是在上层。z-index元素的position属性需要是relative，absolute或是fixed

z-index属性在下列情况下会失效：

+ 父元素position为relative时，子元素的z-index失效。解决：父元素position改为absolute或static
+ 元素没有设置position属性为非static属性。解决：设置该元素的position属性为relative，absolute或是fixed中的一种
+ 元素在设置z-index的同时还设置了float浮动。解决：float去除，改为display：inline-block；

## 29. 常见的CSS布局单位

常用的布局单位包括像素（px），百分比（%），em，rem，vw/vh

**px**：绝对单位，页面按精确像素展示

**em**：相对单位，em是相对于元素的字体大小来计算的，`1em = <self>.font-size`，也就说em值会根据元素本身的字体大小的改变而改变。`em` 会继承父级元素的字体大小

**rem**：相对单位，可理解为`root em`, 相对根节点`html`的字体大小来计算

**vh、vw**：主要用于页面视口大小布局，在页面布局上更加方便简单

**百分比（%）**：当浏览器的宽度或者高度发生变化时，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。一般认为子元素的百分比相对于直接父元素

## 30. 两栏布局的实现

一般两栏布局指的是**左边一栏宽度固定，右边一栏宽度自适应**

+ 利用浮动：将左边元素宽度设置为200px，并且设置向左浮动。将右边元素的margin-left设置为200px，宽度设置为auto（默认为auto，撑满整个父元素）

  ```css
  .outer {
    height: 100px;
  }
  .left {
    float: left;
    width: 200px;
    background: tomato;
  }
  .right {
    margin-left: 200px;
    width: auto;
    background: gold;
  }
  ```

+ 利用浮动：左侧元素设置固定大小，并左浮动，右侧元素设置overflow: hidden; 这样右边就触发了BFC，BFC的区域不会与浮动元素发生重叠，所以两侧就不会发生重叠

  ```css
  .left{
       width: 100px;
       height: 200px;
       background: red;
       float: left;
   }
   .right{
       height: 300px;
       background: blue;
       overflow: hidden;
   }
  ```

+ 利用flex布局：将左边元素设置为固定宽度200px，将右边的元素设置为flex:1

  ```css
  .outer {
    display: flex;
    height: 100px;
  }
  .left {
    width: 200px;
    background: tomato;
  }
  .right {
    flex: 1;
    background: gold;
  }
  ```

+ 利用绝对定位：将父级元素设置为相对定位。左边元素设置为absolute定位，并且宽度设置为200px。将右边元素的margin-left的值设置为200px

  ```css
  .outer {
    position: relative;
    height: 100px;
  }
  .left {
    position: absolute;
    width: 200px;
    height: 100px;
    background: tomato;
  }
  .right {
    margin-left: 200px;
    background: gold;
  }
  ```

+ 利用绝对定位：将父级元素设置为相对定位。左边元素宽度设置为200px，右边元素设置为绝对定位，左边定位为200px，其余方向定位为0

  ```css
  .outer {
    position: relative;
    height: 100px;
  }
  .left {
    width: 200px;
    background: tomato;
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 200px;
    background: gold;
  }
  ```

## 31. 三栏布局的实现

三栏布局一般指的是页面中一共有三栏，**左右两栏宽度固定，中间自适应的布局**

+ 利用绝对定位：左右两栏设置为绝对定位，中间设置对应方向大小的margin的值

  ```css
  .outer {
    position: relative;
    height: 100px;
  }
  
  .left {
    position: absolute;
    width: 100px;
    height: 100px;
    background: tomato;
  }
  
  .right {
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 100px;
    background: gold;
  }
  
  .center {
    margin-left: 100px;
    margin-right: 200px;
    height: 100px;
    background: lightgreen;
  }
  ```

+ 利用flex布局：左右两栏设置固定大小，中间一栏设置为flex:1

  ```css
  .outer {
    display: flex;
    height: 100px;
  }
  
  .left {
    width: 100px;
    background: tomato;
  }
  
  .right {
    width: 100px;
    background: gold;
  }
  
  .center {
    flex: 1;
    background: lightgreen;
  }
  ```

+ 利用浮动：左右两栏设置固定大小，并设置对应方向的浮动。中间一栏设置左右两个方向的margin值，注意这种方式，中间一栏必须放到最后

  ```css
  .outer {
    height: 100px;
  }
  
  .left {
    float: left;
    width: 100px;
    height: 100px;
    background: tomato;
  }
  
  .right {
    float: right;
    width: 200px;
    height: 100px;
    background: gold;
  }
  
  .center {
    height: 100px;
    margin-left: 100px;
    margin-right: 200px;
    background: lightgreen;
  }
  ```

+ 圣杯布局，利用浮动和负边距来实现。父级元素设置左右的 padding，三列均设置向左浮动，中间一列放在最前面，宽度设置为父级元素的宽度，因此后面两列都被挤到了下一行，通过设置 margin 负值将其移动到上一行，再利用相对定位，定位到两边

  ```css
  .outer {
    height: 100px;
    padding-left: 100px;
    padding-right: 200px;
  }
  
  .left {
    position: relative;
    left: -100px;
  
    float: left;
    margin-left: -100%;
  
    width: 100px;
    height: 100px;
    background: tomato;
  }
  
  .right {
    position: relative;
    left: 200px;
  
    float: right;
    margin-left: -200px;
  
    width: 200px;
    height: 100px;
    background: gold;
  }
  
  .center {
    float: left;
  
    width: 100%;
    height: 100px;
    background: lightgreen;
  }
  ```

+ 双飞翼布局，双飞翼布局相对于圣杯布局来说，左右位置的保留是通过中间列的 margin 值来实现的，而不是通过父元素的 padding 来实现的。本质上来说，也是通过浮动和外边距负值来实现的

  ```css
  .outer {
    height: 100px;
  }
  
  .left {
    float: left;
    margin-left: -100%;
  
    width: 100px;
    height: 100px;
    background: tomato;
  }
  
  .right {
    float: left;
    margin-left: -200px;
  
    width: 200px;
    height: 100px;
    background: gold;
  }
  
  .wrapper {
    float: left;
  
    width: 100%;
    height: 100px;
    background: lightgreen;
  }
  
  .center {
    margin-left: 100px;
    margin-right: 200px;
    height: 100px;
  }
  ```

## 32. 水平垂直居中的实现，如果元素不定宽高呢？

https://lamphc.github.io/fe-up/#/css/center?id=%e9%9d%a2%e8%af%95%e5%ae%98%ef%bc%9a%e5%85%83%e7%b4%a0%e6%b0%b4%e5%b9%b3%e5%9e%82%e7%9b%b4%e5%b1%85%e4%b8%ad%e7%9a%84%e6%96%b9%e6%b3%95%e6%9c%89%e5%93%aa%e4%ba%9b%ef%bc%9f%e5%a6%82%e6%9e%9c%e5%85%83%e7%b4%a0%e4%b8%8d%e5%ae%9a%e5%ae%bd%e9%ab%98%e5%91%a2%ef%bc%9f

## 33. 如何根据设计稿进行移动端适配？

移动端适配主要有两个维度：

+ 适配不同像素密度，针对不同的像素密度，使用 CSS 媒体查询，选择不同精度的图片，以保证图片不会失真
+ 适配不同屏幕大小，由于不同的屏幕有着不同的逻辑像素大小，所以如果直接使用 px 作为开发单位，会使得开发的页面在某一款手机上可以准确显示，但是在另一款手机上就会失真。为了适配不同屏幕的大小，应按照比例来还原设计稿的内容。

为了能让页面的尺寸自适应，可以使用 rem，em，vw，vh 等相对单位

## 34. flex:1 表示什么

它表示当剩余空间不足以完全填充容器时，所有使用 `flex: 1` 的子元素将平分剩余空间

如果有多个元素设置了 `flex: 1`，并且它们的父容器有剩余空间，那么这些元素将会按照一定的比例分配这个剩余空间。如果只有一个元素设置了 `flex: 1`，则这个元素将会填满剩余空间

flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。flex:1 表示 flex: 1 1 0%：

+ 第一个参数表示: flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大；
+ 第二个参数表示: flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小；
+ 第三个参数表示: flex-basis给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小

## 35. 响应式设计的概念及基本原理

响应式网站设计（Responsive Web design）是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本

关于原理： 基本原理是通过媒体查询（@media）查询检测不同的设备屏幕尺寸做处理。
关于兼容： 页面头部必须有meta声明的viewport

## 36. 实现“品”字布局

使用定位实现，对于上面的盒子，使用magin属性让他水平居中；下面的两个盒子使用浮动即可实现

```css
div{ 
  width:100px; 
  height:100px; 
  font-size:40px; 
  line-height:100px; 
  color:#fff; 
  text-align:center;
}

.div1{ 
  background:red; 
  margin:0 auto;
}

.div2{ 
  background: green; 
  float:left; 
  margin-left: 50%;
}

.div3{ 
  background: blue; 
  float:left; 
  margin-left: -200px;
}
```

使用inline-block实现，这里将div设置为了inline-block，实际上和上面的float的作用是一眼的，就是让下面的两个块不换行

```css
div{ 
  width:100px; 
  height:100px; 
  font-size:40px; 
  line-height:100px; 
  color:#fff; 
  text-align:center;
}

.div1{ 
  background:red; 
  margin:0 auto;
}

.div2{ 
  background: green; 
  display: inline-block;
  margin-left: 50%;
}

.div3{ 
  background: blue; 
  display: inline-block;
  margin-left: -200px;
}
```

## 37. 实现九宫格布局

```html
<div class="box">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
  </ul>
</div>
```

```css
ul {
	padding: 0;
}

li { 
	list-style: none;
  text-align: center;
	border-radius: 5px;
	background: skyblue;
}
```

flex布局实现九宫格很简单，需要设置一个flex-wrap: wrap;使得盒子在该换行的时候进行换行。

由于我们给每个元素设置了下边距和右边距，所以最后同一列（3、6、9）的右边距和最后一行（7、8、9）的下边距撑大了ul，所以这里使用类型选择器来消除他们的影响

```css
ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

li {
  width: 30%;
  height: 30%;
  margin-right: 5%;
  margin-bottom: 5%;
}

li:nth-of-type(3n){ 
  margin-right: 0;
}

li:nth-of-type(n+7){ 
  margin-bottom: 0;
}
```

## 38. 为什么要清除浮动？清除浮动的方式

浮动元素脱离标准流，在标准流中不占位置，不能撑开父元素的高度，当父元素的高度为0时，就会影响后面的标准流，影响元素排版

详见：[清除浮动](https://zhf521.github.io/mynotes/front-end/css-notes/09-CSS%E4%BC%A0%E7%BB%9F%E7%BD%91%E9%A1%B5%E5%B8%83%E5%B1%80%E6%96%B9%E5%BC%8F.html#_2-5-%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8)

## 39. 对BFC的理解，如何创建BFC

BFC：块级格式化上下文

形成独立的渲染区域，内部元素的渲染不会影响外界

如何触发：

+ 根元素
+ 绝对定位（absolute）、固定定位（fixed）的元素
+ overflow 的值不为 visible 的块元素
+ flex元素
+ inline-block元素

应用场景：清除浮动等

BFC的特点：

1. BFC **内部的**子元素，在垂直方向上，自上而下排列，**边距margin会发生重叠**
2. BFC在页面中是独立的容器，外面的元素不会影响里面的元素，反之亦然。
3. **BFC区域不与旁边的`float box`区域重叠**。（可以用来清除浮动带来的影响）
4. 计算`BFC`的高度时，浮动的子元素也参与计算

## 40. 什么是margin塌陷问题？如何解决？

详见：[margin塌陷](https://zhf521.github.io/mynotes/front-end/css-notes/07-CSS%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B.html#_4-2-margin%E5%A1%8C%E9%99%B7%E9%97%AE%E9%A2%98)

## 41. 元素层叠顺序

层叠顺序，英文称作 stacking order，表示元素发生层叠时有着特定的垂直显示顺序。下面是盒模型的层叠规则：

从下到上：

1. 背景和边框：建立当前层叠上下文元素的背景和边框
2. 负的z-index：当前层叠上下文中，z-index属性值为负的元素
3. 块级元素：文档流内非行内级非定位后代元素
4. 浮动元素：非定位浮动元素
5. 行内元素：文档流内行内级非定位后代元素
6. z-index:0/auto：层叠级数为0或auto的定位元素
7. 正z-index：z-index属性值为正的定位元素

## 42. position的属性有哪些，区别是什么

详见：[定位](https://zhf521.github.io/mynotes/front-end/css-notes/09-CSS%E4%BC%A0%E7%BB%9F%E7%BD%91%E9%A1%B5%E5%B8%83%E5%B1%80%E6%96%B9%E5%BC%8F.html#_3-%E5%AE%9A%E4%BD%8D)

## 43. absolute与fixed共同点与不同点

共同点：

+ 使元素脱离普通文档流，不再占据文档物理空间
+ 覆盖非定位文档元素

不同点：

+ absolute与fixed的根元素不同，absolute的根元素可以设置，fixed根元素一般是浏览器视口
+ 在有滚动条的页面中，absolute会跟着父元素进行移动，fixed固定在页面的具体位置

## 44. 对 sticky 定位的理解

sticky 英文字面意思是粘贴，所以可以把它称之为粘性定位。语法：position: sticky; 基于用户的滚动位置来定位

粘性定位的特点：

- 以浏览器的可视窗口为参照点移动元素（固定定位特点）
- 粘性定位占有原先的位置（相对定位特点）
- 必须添加 top 、left、right、bottom **其中一个**才有效

元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位

## 45. CSS实现梯形、三角形、扇形、圆形、半圆

### 1. 梯形

::: normal-demo Demo 演示

```html
<div class="box"></div>
```

```css
.box {
    width: 100px;
    height: 100px;
    border: 50px solid transparent;
    border-bottom: 50px solid orange;
}
```

:::

### 2. 三角形

::: normal-demo Demo 演示

```html
<div class="box"></div>
```

```css
.box {
    width: 0;
    height: 0;
    border:50px solid transparent;
    border-bottom: 50px solid orange;
}
```

:::

### 3. 扇形

::: normal-demo Demo 演示

```html
<div class="box"></div>
```

```css
.box {
    width: 0;
    height: 0;
    border-radius: 50%;
    border:50px solid transparent;
    border-bottom: 50px solid orange;
}
```

:::

### 4. 圆形

::: normal-demo Demo 演示

```html
<div class="box"></div>
```

```css
.box {
    width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: green
}
```

:::

### 5. 半圆

::: normal-demo Demo 演示

```html
<div class="box"></div>
```

```css
.box {
    width: 100px;
    height: 50px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: green;
}
```

:::

## 46. 实现一个宽高自适应的正方形

利用vw来实现：

```css
.square {
  width: 10%;
  height: 10vw;
  background: tomato;
}
```

利用元素的margin/padding百分比是相对父元素width的性质来实现：

```css
.square {
  width: 20%;
  height: 0;
  padding-top: 20%;
  background: orange;
}
```

利用子元素的margin-top的值来实现：

```css
.square {
  width: 30%;
  overflow: hidden;
  background: yellow;
}
.square::after {
  content: '';
  display: block;
  margin-top: 100%;
}
```

## 47. 画一条0.5px的线

采用transform: scale()的方式，该方法用来定义元素的2D 缩放转换：

```css
<div class="line"></div>

<style>
  .line {
    height: 1px;
    background-color: black;
    transform-origin: top left;
    transform: scaleY(0.5);
  }
</style>
```

采用meta viewport的方式：

```css
<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>
```

viewport只针对于移动端，只在移动端上才能看到效果

## 48. 设置小于12px的字体

在谷歌下css设置字体大小为12px及以下时，显示都是一样大小，都是默认12px。

解决办法：

+ 实现小于12px的字体效果可以使用CSS的`transform: scale()`属性。但需要注意的是，该属性只能应用于具有宽度和高度的元素，而行内元素默认是没有宽度和高度的。为了在行内元素上应用缩放效果，可以将其转换为具有宽度和高度的块级元素，例如使用`display: inline-block`
+ 使用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观

```css
.small-text {
  display: inline-block;
  transform: scale(0.7);
  transform-origin: left top;
}
```

## 49. 如何解决 1px 问题？

一般来说，在PC端浏览器中，设备像素比（dpr）等于1，1个css像素就代表1个物理像素；但是在`retina`屏幕中，dpr普遍是2或3，1个css像素不再等于1个物理像素，因此比实际设计稿看起来粗不少

解决思路：

| 方案                   | 优点                 | 缺点                     |
| ---------------------- | -------------------- | ------------------------ |
| 直接写 0.5px           | 代码简单             | IOS及Android老设备不支持 |
| 用图片代替边框         | 全机型兼容           | 修改颜色及不支持圆角     |
| background渐变         | 全机型兼容           | 代码多及不支持圆角       |
| box-shadow模拟边框实现 | 全机型兼容           | 有边框和虚影无法实现     |
| 伪元素先放大后缩小     | 简单实用             | 缺点不明显               |
| 设置viewport解决问题   | 一套代码适用所有页面 | 缺点不明显               |
