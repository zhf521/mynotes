---
title: HTML基础
order: 5
---

## 1. 排版标签

| 标签名  | 标签含义 | 单/双标签 |
| ------- | -------- | --------- |
| `h1~h6` | 标题     | 双        |
| `p`     | 段落     | 双        |
| `div`、`span` |  没有任何含义，用于整体布局        | 双          |

### 1.1 标题标签

标题标签 `<h1> - <h6>`

为了使网页更具有语义化，我们经常会在页面中用到标题标签。HTML 提供了 6 个等级的网页标题，即 `<h1> - <h6>` ，有重要的意味

特点：
1. 加了标题的文字会变的加粗，字号也会依次变大
2. 一个标题独占一行

::: normal-demo Demo 演示

```html
<h1>我是一级标题</h1>

<h1>标题一共六级选</h1>
<h2>文字加粗一行显</h2>
<h3>由大到小依次减</h3>
<h4>从重到轻随之变</h4>
<h5>语法规范书写后</h5>
<h6>具体效果刷新见</h6>
```

:::

### 1.2 段落标签

在网页中，要把文字有条理地显示出来，就需要将这些文字分段显示。在 HTML 标签中，`<p>` 标签用于定义段落，它可以将整个网页分为若干个段落

特点：
1. 文本在一个段落中会根据浏览器窗口的大小自动换行
2. 段落和段落之间保有空隙

::: normal-demo Demo 演示

```html
<p> 我是一个段落标签 </p>
```

:::

### 1.3 div 和 span 标签

`<div>` 和 `<span>` 是没有语义的，它们就是一个盒子，用来装内容的

::: normal-demo Demo 演示

```html
<div> 这是头部 </div>    
<span> 今日价格 </span>  
```

:::

特点：

1. `<div>` 标签用来布局，但是一行只能放一个 `<div>`，大盒子
2. `<span>` 标签用来布局，一行上可以多个 `<span>`，小盒子

## 2. 语义化标签

概念：用特定的标签去表达特定的含义

原则：标签的默认效果不重要（后期可以通过 CSS 随便控制效果），语义最重要！

优势： 
1. 代码结构清晰可读性强
2. 有利于 SEO（搜索引擎优化）
3. 方便设备解析（如屏幕阅读器、盲人阅读器等）

## 3. 块级元素与行内元素

块级元素：独占一行（排版标签都是块级元素）

行内元素：不独占一行

使用原则：
1. 块级元素中能写行内元素和块级元素（简单记：块级元素中几乎什么都能写）
2. 行内元素中能写行内元素，但不能写块级元素
3. 一些特殊的规则： `h1~h6` 不能互相嵌套、`p` 中不要写块级元素

## 4. 文本标签

|语义|标签|说明|
|---|---|---|
|加粗| `<strong></strong>或<b></b>` |更推荐使用 `<strong>` 标签加粗，语义更强烈 |
|倾斜| `<em></em>或<i></i>` |更推荐使用 `<em>` 标签倾斜，语义更强烈| 
|删除线| `<del></del>或<s></s>` |更推荐使用 `<del>` 标签添加删除线，语义更强烈| 
|下划线| `<ins></ins>或<u></u>` |更推荐使用 `<ins>` 标签添加下划线，语义更强烈|

::: normal-demo Demo 演示

```html
<strong>我是加粗</strong>
<b>我是加粗</b>
<em>我是倾斜</em>
<i>我是倾斜</i>
<del>我是删除线</del>
<s>我是删除线</s>
<ins>我是下划线</ins>
<u>我是下划线</u>
```

:::

## 5. 图片标签

### 5.1 图片标签

在 HTML 标签中，`<img>` 标签用于定义 HTML 页面中的图像

具体实现：
```html
<img src="图像URL" />
```

解释：src 是 `<img>` 标签的必须属性，它用于指定图像文件的路径和文件名，所谓属性，简单理解就是属于这个图像标签的特性

图像标签的其他属性：

|属性|属性值|说明|
|---|---|---|
|src|图片路径|必须属性|
|alt|文本|替换文本，图像不能显示时显示的文字|
|title|文本|提示文本，鼠标放到图像上，显示的文字|
|width|像素|设置图像的宽度|
|height|像素|设置图像的高度|
|border|像素|设置图像的边框粗细|

图像标签注意点：
1. 图像标签可以拥有多个属性，必须写在标签名的后面
2. 属性之间不分先后顺序，标签名与属性、属性与属性之间均以空格分开
3. 属性采取键值对的格式，即 `key="value"` 的格式，`属性 ="属性值"`

### 5.2 路径

分为相对路径和绝对路径

#### 5.2.1 相对路径

相对路径：以引用文件所在位置为参考基础而建立出的目录路径

这里简单来说，就是图片相对于 HTML 页面的位置

|相对路径分类|符号|说明| 
|---|---|---|
|同级路径|  |图像文件位于 HTML 文件同一级，如 `<img src="baidu.gif"/>` | 
|下级路径| `/` |图像文件位于 HTML 文件下一级，如 `<img src="images/baidu.gif"/>` |
|上级路径| `../` |图像文件位于 HTML 文件上一级，如 `<img src="../baidu.gif"/>` |

特点：相对路径是从代码所在的这个文件出发，去寻找目标文件的，而我们这里所说的上一级、下一级和同一级就是图片相对于 HTML 页面的位置

#### 5.2.2 绝对路径

绝对路径：是指目录下的绝对位置，直接到达目标位置，通常是从盘符开始的路径，例如，`"D:\web\img\logo. gif"` 或完整的网络地址 `"http://www.itcast.cn/images/logo.gif"`

### 5.3 常见的图片格式

+ jpg 格式： 
	+ 概述：扩展名为 `.jpg` 或 `.jpeg` ，是一种有损的压缩格式（把肉眼不容易观察出来的细节丢弃了）
	+ 主要特点：支持的颜色丰富、占用空间较小、不支持透明背景、不支持动态图
	+ 使用场景：对图片细节没有极高要求的场景，例如：网站的产品宣传图等。—— 该格式网页中很常见
+ png 格式： 
	+ 概述：扩展名为 `.png` ，是一种无损的压缩格式，能够更高质量的保存图片
	+ 主要特点：支持的颜色丰富、占用空间略大、支持透明背景、不支持动态图
	+ 使用场景：想让图片有透明背景；想更高质量的呈现图片；例如 ：公司 logo 图、重要配图等
+ bmp 格式：
	+ 概述：扩展名为 `.bmp` ，不进行压缩的一种格式，在最大程度上保留图片更多的细节
	+ 主要特点：支持的颜色丰富、保留的细节更多、占用空间极大、不支持透明背景、不支持动态图
	+ 使用场景：对图片细节要求极高的场景，例如：一些大型游戏中的图片。（网页中很少使用） 
+ gif 格式：
	+ 概述：扩展名为 `.gif` ，仅支持 256 种颜色，色彩呈现不是很完整
	+ 主要特点：支持的颜色较少、支持简单透明背景、支持动态图
	+ 使用场景：网页中的动态图片
+ webp 格式：
	+ 概述：扩展名为 `.webp` ，谷歌推出的一种格式，专门用来在网页中呈现图片
	+ 主要特点：具备上述几种格式的优点，但兼容性不太好，一旦使用务必要解决兼容性问题
	+ 使用场景：网页中的各种图片
+ base 64 格式 
	+ 本质：一串特殊的文本，要通过浏览器打开，传统看图应用通常无法打开
	+ 原理：把图片进行 base 64 编码，形成一串文本
	+ 如何生成：靠一些工具或网站
	+ 如何使用：直接作为 img 标签的 src 属性的值即可，并且不受文件位置的影响
	+ 使用场景：一些较小的图片，或者需要和网页一起加载的图片

## 6. 链接

链接的语法格式: `<a href="跳转目标" target="目标窗口的弹出方式"> 文本或图像 </a>`

属性：
1. `href`：用于指定链接目标的 `url` 地址
2. `target`: 用于指定链接页面的打开方式，`_self` 默认值，`_blank` 新窗口打开
3. `#`: 空链接

链接分类：
1. 外部链接: 例如 `<a href="http://www.baidu.com">百度</a>`
2. 内部链接: 网站内部页面之间的相互链接。直接链接内部页面名称即可，例如 `<a href="index.html">首页</a>`
3. 空链接: 如果当时没有确定链接目标时，`<a href="#">首页</a>` 
4. 下载链接: 如果 href 里面地址是一个文件或者压缩包，会下载这个文件
5. 网页元素链接: 在网页中的各种网页元素，如文本、图像、表格、音频、视频等都可以添加超链接
6. 锚点链接:  点我们点击链接, 可以快速定位到页面中的某个位置，在链接文本的 href 属性中，设置属性值为 `#名字` 的形式，如 `<a href="#two">第2集</a>`，找到目标位置标签，里面添加一个 `id属性 = 刚才的名字`，如：`<h3 id="two">第2集介绍</h3>`

## 7. 列表

表格是用来显示数据的，那么列表就是用来布局的

列表最大的特点就是整齐、整洁、有序，它作为布局会更加自由和方便

根据使用情景不同，列表可以分为三大类：无序列表、有序列表和自定义列表

### 7.1 无序列表

`<ul>` 标签表示 HTML 页面中项目的无序列表，一般会以项目符号呈现列表项，而列表项使用 `<li>` 标签定义

无序列表的基本语法格式如下：
```html
<ul> 
  <li>列表项1</li>   <li>列表项2</li>   <li>列表项3</li>   ... 
</ul>
```

1. 无序列表的各个列表项之间没有顺序级别之分，是并列的
2. `<ul></ul>` 中只能嵌套 `<li></li>`，直接在 `<ul></ul>` 标签中输入其他标签或者文字的做法是不被允许的
3. `<li>` 与 `</li>` 之间相当于一个容器，可以容纳所有元素
4. 无序列表会带有自己的样式属性，但在实际使用时，我们会使用 CSS 来设置

::: normal-demo Demo 演示

```html
 <ul> 
  <li>列表项1</li> 
  <li>列表项2</li>  
  <li>列表项3</li> 
</ul>
```

:::

### 7.2 有序列表

有序列表即为有排列顺序的列表，其各个列表项会按照一定的顺序排列定义。在 HTML 标签中，`<ol>` 标签用于定义有序列表，列表排序以数字来显示，并且使用 `<li>` 标签来定义列表项

有序列表的基本语法格式如下：
```html
<ol>   
	<li>列表项1</li>   <li>列表项2</li>   <li>列表项3</li>   ... 
</ol>
```

1. `<ol></ol>` 中只能嵌套 `<li></li>`，直接在 `<ol></ol>` 标签中输入其他标签或者文字的做法是不被允许的
2. `<li>` 与 `</li>` 之间相当于一个容器，可以容纳所有元素
3. 有序列表会带有自己样式属性，但在实际使用时，我们会使用 CSS 来设置

::: normal-demo Demo 演示

```html
 <ol>   
	<li>列表项1</li>  
    <li>列表项2</li>
    <li>列表项3</li>    
</ol>
```

:::

### 7.3 自定义列表

自定义列表的使用场景: 自定义列表常用于对术语或名词进行解释和描述，定义列表的列表项前没有任何项目符号。在 HTML 标签中，`<dl>` 标签用于定义描述列表（或定义列表），该标签会与 `<dt>`（定义项目/名字）和 < `dd>`（描述每一个项目/名字）一起使用

语法如下：
```html
<dl>  
	<dt>名词1</dt>  
		<dd>名词1解释1</dd>  
		<dd>名词1解释2</dd> 
</dl>
```

::: normal-demo Demo 演示

```html
 <dl>  
	<dt>名词1</dt>  
		<dd>名词1解释1</dd>  
		<dd>名词1解释2</dd> 
</dl>
```

:::

## 8. 表格

### 8.1 基本结构

一个完整的表格由：表格标题、表格头部、表格主体、表格脚注，四部分组成

![HTML基础01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/HTML基础01.png)

表格涉及到的标签：

| 标签      | 含义     |
| --------- | -------- |
| `table`   | 表格     |
| `caption` | 表格标题 |
| `thead`   | 表格头部 |
| `tbody`   | 表格主体 |
| `tfoot`   | 表格注脚 |
| `tr`      | 每一行   |
| `th`、`td`          |  每一个单元格（备注：表格头部中用 `th`，表格主体、表格脚注中用 `td`）        |

![HTML基础02.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/HTML基础02.png)

![HTML基础03.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/HTML基础03.png)

![HTML基础04.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/HTML基础04.png)

::: normal-demo Demo 演示

```html
    <table border="1">
      <!-- 表格标题 -->
      <caption>
        学生信息
      </caption>
      <!-- 表格头部 -->
      <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>民族</th>
          <th>政治面貌</th>
        </tr>
      </thead>
      <!-- 表格主体-->
      <tbody>
        <tr>
          <td>张三</td>
          <td>男</td>
          <td>18</td>
          <td>汉族</td>
          <td>团员</td>
        </tr>
        <tr>
          <td>李四</td>
          <td>女</td>
          <td>20</td>
          <td>满族</td>
          <td>群众</td>
        </tr>
        <tr>
          <td>王五</td>
          <td>男</td>
          <td>20</td>
          <td>回族</td>
          <td>党员</td>
        </tr>
        <tr>
          <td>赵六</td>
          <td>女</td>
          <td>21</td>
          <td>壮族</td>
          <td>团员</td>
        </tr>
      </tbody>

      <!-- 表格脚注 -->
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>共计：4人</td>
        </tr>
      </tfoot>
    </table> 
```

:::

### 8.2 常用属性

`table` 标签（表格）

| 属性     | 含义                                           |
| -------- | ---------------------------------------------- |
| `width`  | 设置表格宽度                                   |
| `height` | 设置表格最小高度，表格最终高度可能比设置的值大 |
| `border` | 设置表格边框宽度                               |
| `cellspacing`         |    设置单元格之间的间距                                            |

`thead` 标签（表格头部）

| 属性     | 含义                                                     |
| -------- | -------------------------------------------------------- |
| `height` | 设置表格头部高度                                         |
| `align`  | 设置单元格的水平对齐方式，可选 `left`、`center`、`right` |
| `valign` | 设置单元格的垂直对齐方式，可选 `top`、`middle`、`bottom` |

`tbody` 标签（表格主体）、`tr` 标签（行）、`tfoot` 标签（表格脚注）常用属性与 `thead` 相同

`td` 标签（普通单元格）

| 属性      | 含义                                       |
| --------- | ------------------------------------------ |
| `width`   | 设置单元格的宽度，同列所有单元格全都受影响 |
| `height`  | 设置单元格的高度，同行所有单元格全都受影响 |
| `align`   | 设置单元格的水平对齐方式                   |
| `valign`  | 设置单元格的垂直对齐方式                   |
| `rowspan` | 指定要跨的行数                             |
| `colspan`          |   指定要跨的列数                                         |

注意：
1. `<table>` 元素的 border 属性可以控制表格边框，但 border 值的大小，并不控制单元格边框的宽度，只能控制表格最外侧边框的宽度
2. 默认情况下，每列的宽度，得看这一列单元格最长的那个文字
3. 给某个 th 或 td 设置了宽度之后，他们所在的那一列的宽度就确定了
4. 给某个 th 或 td 设置了高度之后，他们所在的那一行的高度就确定了

### 8.3 跨行跨列

rowspan ：指定要跨的行数

colspan ：指定要跨的列数

::: normal-demo Demo 演示

```html
<table border="1">
    <caption>
        我是原表格
    </caption>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
    </tr>
    <tr>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
    </tr>
    <tr>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
    </tr>
    <tr>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
    </tr>
</table>
<table border="1">
    <caption>
        我是部分行列合并后的表格
    </caption>
    <tr>
        <td colspan="3">1、2、3</td>
        <td>4</td>
    </tr>
    <tr>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
    </tr>
    <tr>
        <td colspan="2" rowspan="2">9、10、13、14</td>
        <td>11</td>
        <td rowspan="2">12、16</td>
    </tr>
    <tr>
        <td>15</td>
    </tr>
</table>
```

:::

## 9. 换行标签

在 HTML 中，一个段落中的文字会从左到右依次排列，直到浏览器窗口的右端，然后才自动换行。如果希望某段文本强制换行显示，就需要使用换行标签 `<br/>`

特点：
1. `<br/>` 是个单标签
2. `<br/>` 标签只是简单地开始新的一行，跟段落不一样，段落之间会插入一些垂直的间距

## 10. 分隔线

`<hr>` 分隔线，单标签

`<hr>` 的语义是分隔，如果不想要语义，只是想画一条水平线，那么应当使用 CSS 完成

## 11. 表单

概念：一个包含交互的区域，用于收集用户提供的数据

### 11.1 基本结构

```html
<form action="https://www.baidu.com/s" target="_blank" method="get">
	<input type="text" name="wd" />
	<button>去百度搜索</button>
</form>
```

`form` 标签（表单），双标签

|属性|含义|
|--|--|
| `action` |用于指定表单的提交地址|
| `target` |用于控制表单提交后，如何打开页面，常用值如下：`_self` 在本窗口打开，`_blank` 在新窗口打开 |
| `method` |用于控制表单的提交方式|

`input` 标签（输入框），单标签

|属性|含义|
|---|---|
| `type` |设置输入框的类型，目前用到的值是 text ，表示普通文本|
| `name` |用于指定提交数据的名字|

### 11.2 常用表单控件

#### 11.2.1 文本输入框

```html
<input type="text">
```

常用属性如下： 
1. name 属性：数据的名称
2. value 属性：输入框的默认输入值
3. maxlength 属性：输入框最大可输入长度

::: normal-demo Demo 演示

```html
<form>
    <input type="text">
</form>
```

:::

#### 11.2.2 密码输入框

```html
<input type="password">
```

常用属性如下：
1. name 属性：数据的名称
2. value 属性：输入框的默认输入值（一般不用，无意义）
3. maxlength 属性：输入框最大可输入长度

::: normal-demo Demo 演示

```html
<form>
    <input type="password">
</form>
```

:::

#### 11.2.3 单选框

```html
<input type="radio" name="sex" value="female">女
<input type="radio" name="sex" value="male">男
```

常用属性如下：
1. name 属性：数据的名称，注意：想要单选效果，多个 radio 的 name 属性值要保持一致
2. value 属性：提交的数据值
3. checked 属性：让该单选按钮默认选中

::: normal-demo Demo 演示

```html
<form>
    <input type="radio" name="sex" value="female">女
    <input type="radio" name="sex" value="male">男
</form>
```

:::

#### 11.2.4 复选框

```html
<input type="checkbox" name="hobby" value="sing">唱
<input type="checkbox" name="hobby" value="dance">跳
<input type="checkbox" name="hobby" value="rap">rap
```

常用属性如下：
1. name 属性：数据的名称
2. value 属性：提交的数据值
3. checked 属性：让该复选框默认选中

::: normal-demo Demo 演示

```html
<form>
    <input type="checkbox" name="hobby" value="sing">唱
    <input type="checkbox" name="hobby" value="dance">跳
    <input type="checkbox" name="hobby" value="rap">rap
</form>
```

:::

#### 11.2.5 隐藏域

```html
<input type="hidden" name="tag" value="100">
```

用户不可见的一个输入区域，作用是： 提交表单的时候，携带一些固定的数据

常用属性如下：
1. name 属性：指定数据的名称
2. value 属性：指定的是真正提交的数据

::: normal-demo Demo 演示

```html
<form>
    <input type="hidden" name="tag" value="100">
</form>    
```

:::

#### 11.2.6 提交按钮

```html
<input type="submit" value="点我提交表单">
<button>点我提交表单</button>
```

注意： 
1. button 标签 type 属性的默认值是 submit 
2. button 不要指定 name 属性 
3. input 标签编写的按钮，使用 value 属性指定按钮文字

::: normal-demo Demo 演示

```html
<form>
    <input type="submit" value="点我提交表单">
    <button>点我提交表单</button>
</form>    
```

:::

#### 11.2.7 重置按钮

```html
<input type="reset" value="点我重置">
<button type="reset">点我重置</button>
```

注意： 
1. button 不要指定 name 属性 
2. input 标签编写的按钮，使用 value 属性指定按钮文字

::: normal-demo Demo 演示

```html
<form>
     <input type="reset" value="点我重置">
     <button type="reset">点我重置</button>
</form>  
```

:::

#### 11.2.8 普通按钮

```html
<input type="button" value="普通按钮">
<button type="button">普通按钮</button>
```

注意：普通按钮的 type 值为 button ，若不写 type 值是 submit 会引起表单的提交

::: normal-demo Demo 演示

```html
<form>
    <input type="button" value="普通按钮">
    <button type="button">普通按钮</button>
</form>    
```

:::

#### 11.2.9 文本域

```html
<textarea name="msg" rows="22" cols="3">我是文本域</textarea>
```

常用属性如下： 
1. rows 属性：指定默认显示的行数，会影响文本域的高度
2. cols 属性：指定默认显示的列数，会影响文本域的宽度
3. 不能编写 type 属性，其他属性，与普通文本输入框一致

::: normal-demo Demo 演示

```html
<form>
    <textarea name="msg" rows="22" cols="3">我是文本域</textarea>
</form>    
```

:::

#### 11.2.10 下拉框

```html
<select name="from">
	<option value="黑">黑龙江</option>
	<option value="吉">吉林</option>
	<option value="辽">辽宁</option>
</select>
```

常用属性及注意事项：
1. name 属性：指定数据的名称
2. option 标签设置 value 属性，如果没有 value 属性，提交的数据是 option 中间的文字；如果设置了 value 属性，提交的数据就是 value 的值（建议设置 value 属性） 
3. option 标签设置了 selected 属性，表示默认选中

::: normal-demo Demo 演示

```html
<form>
    <select name="from">
        <option value="黑">黑龙江</option>
        <option value="吉">吉林</option>
        <option value="辽">辽宁</option>
	</select>
</form>
```

:::

#### 11.2.11 禁用表单控件

给表单控件的标签设置 disabled 既可禁用表单控件

input 、 textarea 、 button 、 select 、 option 都可以设置 disabled 属性

### 11.3 label 标签

label 标签可与表单控件相关联，关联之后点击文字，与之对应的表单控件就会获取焦点

两种与 label 关联方式如下： 
1. 让 label 标签的 for 属性的值等于表单控件的 id 
2. 把表单控件套在 label 标签的里面

### 11.4 fieldset 与 legend 的使用

fieldset 可以为表单控件分组、 legend 标签是分组的标题

::: normal-demo Demo 演示

```html
<fieldset>
	<legend>主要信息</legend>
	<label for="zhanghu">账户:</label>
	<input id="zhanghu" type="text" name="account" maxlength="10"><br>
	<label>
		密码:
		<input id="mima" type="password" name="pwd" maxlength="6">
	</label>
	<br>
	性别:
	<input type="radio" name="gender" value="male" id="nan">
	<label for="nan">男</label>
	<label>
		<input type="radio" name="gender" value="female" id="nv">女
	</label>
</fieldset> 
```

:::

## 12. 框架标签

| 标签名 | 功能和语义                   | 属性                                                         | 单/双标签 |
| ------ | ---------------------------- | ------------------------------------------------------------ | --------- |
| iframe | 框架（在网页中嵌入其他文件） | name: 框架名字，可以与 target 属性配合<br>width：框架的宽度<br>height：框架的高度<br>frameborder：是否显示边框，值为 0 或 1 | 双        |

iframe 标签的实际应用：
1. 在网页中嵌入广告
2. 与超链接或表单的 target 配合，展示不同的内容

## 13. HTML 实体

在 HTML 中我们可以用一种 `特殊的形式` 的内容，来表示某个符号，这种特殊形式的内容，就是 HTML 实体。比如小于号 `<` 用于定义 HTML 标签的开始。如果我们希望浏览器正确地显示这些字符，我们必须在 HTML 源码中插入字符实体

字符实体由三部分组成：一个 `&` 和一个实体名称（或者一个 `#` 和一个实体编号），最后加上一个分号 `;` 

常见的字符实体：

|      | 描述              | 实体名称  | 实体编号 |
| ---- | ----------------- | --------- | -------- |
|      | 空格              | `&nbsp;`  | `&#160;` |
| `<`  | 小于号            | `&lt;`    | `&#60;`  |
| `>`  | 大于号            | `&gt;`    | `&#62;`  |
| `&`  | 和号              | `&amp;`   | `&#38;`  |
| `"`  | 引号              | `&quot;`  | `&#34;`  |
| `￥` | 元（yen）         | `&yen;`   | `&#165;` |
| `©`  | 版权（copyright） | `&copy;`  | `&#169;` |
| `×`  | 乘号              | `&times;` | `&#215;` |
| `÷`     |  除号                 |  `&divide;`         |  `&#247;`        |

## 14. HTML 全局属性

常用的全局属性：

| 属性名 | 含义                                                                                                                  |
| ------ | --------------------------------------------------------------------------------------------------------------------- |
| id     | 给标签指定唯一标识，注意：id 是不能重复的。作用：可以让 label 标签与表单控件相关联；也可以与 CSS、JavaScript 配合使用 |
| class  | 给标签指定类名，随后通过 CSS 就可以给标签设置样式                                                                     |
| style  | 给标签设置 CSS 样式                                                                                                   |
| dir    | 内容的方向，值: ltr、rtl                                                                                              |
| title  | 给标签设置一个文字提示，一般超链接和图片用得比较多                                                                    |
| lang   | 给标签指定语|

## 15. meta 元信息

配置字符编码
```html
<meta charset="UTF-8">
```

针对 IE 浏览器的兼容性配置
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

针对移动端的配置
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

配置网页关键字
```html
<meta name="keywords" content="8-12个以英文逗号隔开的单词/词语">
```

配置网页描述信息
```html
<meta name="description" content="80字以内的一段话，与网站内容相关">
```

针对搜索引擎爬虫配置
```html
<meta name="robots" content="此处可选值见下表">
```

| 值        | 描述                             |
| --------- | -------------------------------- |
| index     | 允许搜索爬虫索引此页面           |
| noindex   | 要求搜索爬虫不索引此页面         |
| follow    | 允许搜索爬虫跟随此页面上的链接   |
| nofollow  | 要求搜索爬虫不跟随此页面上的链接 |
| all       | 与 index，follow 等价            |
| none      | 与 noindex，nofollow 等价        |
| noarchive | 要求搜索引擎不缓存页面内容       |
| nocache          |  noarchive 的替代名称                                |

配置网页作者
```html
<meta name="author" content="tony">
```

配置网页生成工具
```html
<meta name="generator" content="Visual Studio Code">
```

配置定义网页版权信息
```html
<meta name="copyright" content="2023-2027©版权所有">
```

配置网页自动刷新
```html
<meta http-equiv="refresh" content="10;url=http://www.baidu.com">
```
