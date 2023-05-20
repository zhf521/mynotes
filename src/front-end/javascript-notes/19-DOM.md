---
title: DOM
order: 19
---

`DOM（Document Object Model）`： 文档对象模型

其实就是操作 `html` 中的标签的一些能力

我们可以操作哪些内容？

- 获取一个元素
- 移除一个元素
- 创建一个元素
- 向页面里面添加一个元素
- 给元素绑定一些事件
- 获取元素的属性
- 给元素添加一些 `css` 样式
- ...

`DOM` 的核心对象就是 `docuemnt` 对象

`document` 对象是浏览器内置的一个对象，里面存储着专门用来操作元素的各种方法

`DOM对象`： 页面中的标签，我们通过 `JS` 获取到以后，就把这个对象叫做 **DOM 对象**

## 获取一个元素

通过 `JS` 代码来获取页面中的标签，获取到以后我们就可以操作这些标签了

### getElementById

`getElementById` 是通过标签的 `id` 名称来获取标签的

因为在一个页面中 `id` 是唯一的，所以获取到的就是一个元素

```html
<body>
  <div id="box"></div>
  <script>
    // 获取到的就是页面中的那个 id 为 box 的 div 标签
  	var box = document.getElementById('box')
  	console.log(box) // <div></div>
  </script>
</body>
```

### getElementsByClassName

`getElementsByClassName` 是通过标签的 `class` 名称来获取标签的

因为页面中可能有多个元素的 `class` 名称一样，所以获取到的是一组元素

哪怕你获取的 `class` 只有一个，那也是获取一组元素，**只不过这一组中只有一个 DOM 元素而已**

```html
<body>
  <div calss="box"></div>
  <script>
  	var box = document.getElementsByClassName('box')
  	console.log(box) // [<div></div>]
    console.log(box[0]) // <div></div>
  </script>
</body>
```

获取到的是一组元素，是一个长得和数组一样的数据结构，但是不是数组，是 **伪数组**，这组数据也是按照索引排列的，所以我们想要准确的拿到这个 `div`，需要用索引来获取

### getElementsByTagName

`getElementsByTagName` 是用过标签的标签名称来获取标签的

因为页面中可能有多个元素的标签名称一样，所以获取到的是一组元素

哪怕只有一个这个标签名，那么也是获取一组元素，只不过这一组中只有一个 DOM 元素而已

```html
<body>
  <div></div>
  <script>
  	var box = document.getElementsByTagName('div')
  	console.log(box) // [<div></div>]
    console.log(box[0]) // <div></div>
  </script>
</body>
```

和 `getElementsByClassName` 一样，获取到的是一个长得很像数组的元素，必须要用索引才能得到准确的 `DOM` 元素

### querySelector

`querySelector` 是按照选择器的方式来获取元素，也就是说，按照我们写 `CSS` 的时候的选择器来获取

这个方法只能获取到一个元素，并且是页面中第一个满足条件的元素

```javascript
console.log(document.querySelector('div')) // 获取页面中的第一个 div 元素
console.log(docuemnt.querySelector('.box')) // 获取页面中第一个有 box 类名的元素
console.log(document.querySelector('#box')) // 获取页面中第一个 id 名为 box 的元素
```

### querySelectorAll

`querySelectorAll` 是按照选择器的方式来获取元素

这个方法能获取到所有满足条件的元素，以一个伪数组的形式返回

```javascript
console.log(document.querySelectorAll('div')) // 获取页面中的所有的 div 元素
console.log(docuemnt.querySelectorAll('.box')) // 获取页面中所有有 box 类名的元素
```

获取到的是一组数据，也是需要用索引来获取到准确的每一个 `DOM` 元素，或者是用遍历的方式获得，没有 `pop()` `push()` 等数组方法

## 操作元素的属性

通过我们各种获取元素的方式获取到页面中的标签以后，我们可以通过操作 `DOM` 元素的属性，就能直接把效果展示在页面上

### innerHTML

获取元素内部的 `HTML` 结构

```html
<body>
  <div>
    <p>
      <span>hello</span>
    </p>
  </div>

  <script>
    var div = document.querySelector('div')
    console.log(div.innerHTML)
      /*

          <p>
            <span>hello</span>
          </p>

	  */
  </script>
</body>
```

设置元素的内容

```html
<body>
  <div></div>

  <script>
    var div = document.querySelector('div')
   	div.innerHTML = '<p>hello</p>'
  </script>
</body>
```

设置完以后，页面中的 `div` 元素里面就会嵌套一个 `p` 元素

### innerText

获取元素内部的文本（只能获取到文本内容，获取不到 `html` 标签）

```html
<body>
  <div>
    <p>
      <span>hello</span>
    </p>
  </div>

  <script>
    var div = document.querySelector('div')
    console.log(div.innerText) // hello
  </script>
</body>
```

可以设置元素内部的文本

```html
<body>
  <div></div>

  <script>
    var div = document.querySelector('div')
   	div.innerText = '<p>hello</p>'
  </script>
</body>
```

设置完毕以后，会把 `<p>hello</p>` 当作一个文本出现在 `div` 元素里面，而不会把 `p` 解析成标签

### 操作元素常用属性

语法：

```js
对象.属性 = 值
```

例：

```html
<img src="./images/1.webp" alt="" />
```

```js
//1.获取图片元素
var img = document.querySelector('img')
//2.修改图片对象的属性
img.src = './images/2.webp'
img.title = '小刘'
```

### getAttribute

获取元素的某个属性（包括自定义属性）

```html
<body>
  <div a="100" class="box"></div>

  <script>
    var div = document.querySelector('div')
   	console.log(div.getAttribute('a')) // 100
    console.log(div.getAttribute('class')) // box
  </script>
</body>
```

### setAttribute

给元素设置一个属性（包括自定义属性）

```html
<body>
  <div></div>

  <script>
    var div = document.querySelector('div')
   	div.setAttribute('a', 100)
    div.setAttribute('class', 'box')
    console.log(div) // <div a="100" class="box"></div>
  </script>
</body>
```

### removeAttribute

直接移除元素的某个属性

```html
<body>
  <div a="100" class="box"></div>

  <script>
    var div = document.querySelector('div')
   	div.removeAttribute('class')
    console.log(div) // <div a="100"></div>
  </script>
</body>
```

### style

专门用来给元素添加 `css` 样式的，添加的都是行内样式

任何标签都有 `style` 属性，通过 `style` 属性可以动态更改网页标签的样式，如要遇到 `CSS` 属性中包含字符 `-` 时，要将 `-` 去掉并将其后面的字母改成大写，转换为小驼峰命名法，如 `background-color` 要写成 `box.style.backgroundColor`

```html
<body>
  <div></div>

  <script>
    var div = document.querySelector('div')
   	div.style.width = "100px"
    div.style.height = "100px"
    div.style.backgroundColor = "pink"
    console.log(div)
    // <div style="width: 100px; height: 100px; background-color: pink;"></div>
  </script>
</body>
```

页面中的 `div` 就会变成一个宽高都是 `100`，背景颜色是粉色

### 获取元素的非行间样式

我们在操作 `DOM` 的时候，很重要的一点就是要操作元素的 `css` 样式，那么在操作 `css` 样式的时候，我们避免不了就要获取元素的样式，之前我们说过可以用 `元素.style.xxx` 来获取，但是这个方法只能获取到元素 **行间样式**，也就是写在行内的样式

```html
<style>
  div {
    width: 100px;
  }
</style>
<body>
  <div style="height: 100px;">
    <p>我是一个 p 标签</p>
  </div>

  <script>
    var oDiv = document.querySelector('div')
		console.log(oDiv.style.height) // 100px
    console.log(oDIv.style.width) // ''
  </script>
</body>
```

不管是外链式还是内嵌式，我们都获取不到该元素的样式

这里我们就要使用`getComputedStyle`和 `currentStyle`方法来获取，这两个方法的作用是一样的，只不过一个在 **非 IE** 浏览器，一个在 **IE** 浏览器

#### getComputedStyle（非IE使用）

语法：`window.getComputedStyle(元素, null).要获取的属性`

```html
<style>
  div {
    width: 100px;
  }
</style>
<body>
  <div style="height: 100px;">
    <p>我是一个 p 标签</p>
  </div>

  <script>
    var oDiv = document.querySelector('div')
		console.log(window.getComputedStyle(oDiv).width) // 100px
    console.log(window.getComputedStyle(oDiv).height) // 100px
  </script>
</body>
```

这个方法获取行间样式和非行间样式都可以

#### currentStyle（IE使用）

语法： `元素.currentStyle.要获取的属性`

```html
<style>
  div {
    width: 100px;
  }
</style>
<body>
  <div style="height: 100px;">
    <p>我是一个 p 标签</p>
  </div>

  <script>
    var oDiv = document.querySelector('div')
		console.log(oDiv.currentStyle.width) // 100px
    console.log(oDiv.currentStyle.height) // 100px
  </script>
</body>
```

### className

专门用来操作元素的 **类名的**

```html
<body>
  <div class="box"></div>

  <script>
    var div = document.querySelector('div')
   	console.log(div.className) // box
  </script>
</body>
```

也可以设置元素的类名，不过是全覆盖式的操作

```html
<body>
  <div class="box"></div>

  <script>
    var div = document.querySelector('div')
   	div.className = 'test'
    console.log(div) // <div class="test"></div>
  </script>
</body>
```

在设置的时候，不管之前有没有类名，都会全部被设置的值覆盖

## DOM节点

### 节点的分类

`DOM` 的节点我们一般分为常用的三大类 **元素节点** 、**文本节点** 、 **属性节点**

![DOM01.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/DOM01.png)

1. `元素节点`其实就是 HTML 标签，如上图中 `head`、`div`、`body` 等都属于元素节点
2. `属性节点`是指 HTML 标签中的属性，如上图中 `a` 标签的 `href` 属性、`div` 标签的 `class` 属性
3. `文本节点`是指 HTML 标签的文字内容，如 `title` 标签中的文字
4. `根节点` 特指 `html` 标签

### 获取节点

`childNodes`：获取某一个节点下**所有的子一级节点**

```html
<body>
  <div>
    <p>hello</p>
  </div>
  
  <script>
    // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
  	var oDiv = document.querySelector('div')
    
    console.log(oDiv.childNodes) 
    /*
    	NodeList(3) [text, p, text]
      0: text
      1: p
      2: text
      length: 3
      __proto__: NodeList
    */
  </script>
</body>
```

我们会发现，拿到以后是一个伪数组，里面有三个节点：

- 一个 `text`：从 `<div> 一直到 <p>` 中间有一个换行和一堆空格，这个是第一个节点，是一个文本节点
- 一个 `p`：这个 `p` 标签就是第二个节点，这个是一个元素节点
- 一个 `text`：从 `</p> 一直到 </div>` 中间有一个换行和一堆空格，这个是第三个节点，是一个文本节点

`children` ：获取某一节点下所有的子一级**元素节点**

```html
<body>
  <div>
    <p>hello</p>
  </div>
  
  <script>
    // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
  	var oDiv = document.querySelector('div')
    
    console.log(oDiv.children) 
    /*
    	HTMLCollection [p]
      0: p
      length: 1
      __proto__: HTMLCollection
    */
  </script>
</body>
```

我们发现只有一个节点了，因为 `children` 只要元素节点，div 下面又只有一个元素节点，就是 `p`，所以就只有一个，虽然只有一个，但是也是一个 **伪数组**

`firstChild`：获取某一节点下子一级的**第一个节点**

```html
<body>
  <div>
    <p>hello</p>
  </div>
  
  <script>
    // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
  	var oDiv = document.querySelector('div')
    
    console.log(oDiv.firstChild) // #text 
  </script>
</body>
```

这个是只获取一个节点，不再是伪数组了，获取的是第一个，第一个就是 `<div> 一直到 <p>` 的那个换行和空格，是个文本节点

`lastChild`：获取某一节点下子一级的**最后一个节点**

```html
<body>
  <div>
    <p>hello</p>
  </div>
  
  <script>
    // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
  	var oDiv = document.querySelector('div')
    
    console.log(oDiv.lastChild) // #text 
  </script>
</body>
```

只获取一个节点，不再是伪数组，获取的是最后一个，最后一个就是 `</p> 一直到 </div>` 之间的换行和空格，是个文本节点

`firstElementChild`：获取某一节点下子一级**第一个元素节点**

```html
<body>
  <div>
    <p>hello</p>
  </div>
  
  <script>
    // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
  	var oDiv = document.querySelector('div')
    
    console.log(oDiv.firstElementChild) // <p>hello</p>
  </script>
</body>
```

只获取一个节点，不再是伪数组，获取的是第一个 **元素节点**，第一个元素节点就是 `p` 标签，是一个元素节点

`lastElementChild`：获取某一节点下子一级**最后一个元素节点**

```html
<body>
  <div>
    <p>hello</p>
    <p>world</p>
  </div>
  
  <script>
    // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
  	var oDiv = document.querySelector('div')
    
    console.log(oDiv.lastElementChild) // <p>world</p>
  </script>
</body>
```

只获取一个节点，不再是伪数组，获取的是最后一个 **元素节点**，最后一个元素节点是 `<p>world</p>`，是一个元素节点

`nextSibling`：获取某一个节点的 **下一个兄弟节点**

```html
<body>
  <ul>
    <li id="a">hello</li>
    <li id="b">world</li>
    <li id="c">!!!</li>
  </ul>
  
  <script>
    // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
  	var oLi = document.querySelector('#b')
    
    console.log(oLi.nextSibling) // #text
  </script>
</body>
```

只获取一个节点，不再是伪数组，获取的是 `id="b"` 这个 `li` 的下一个兄弟节点，因为 `id="b"` 的下一个节点，是两个 `li` 标签之间的换行和空格，所以是一个文本节点

`previousSibling`：获取某一个节点的 **上一个兄弟节点**

```html
<body>
  <ul>
    <li id="a">hello</li>
    <li id="b">world</li>
    <li id="c">!!!</li>
  </ul>
  
  <script>
    // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
  	var oLi = document.querySelector('#b')
    
    console.log(oLi.previousSibling) // #text
  </script>
</body>
```

只获取一个节点，不在是伪数组，获取的是 `id="b"` 这个 `li` 的上一个兄弟节点，因为 `id="b"` 的上一个节点，是两个 `li` 标签之间的换行和空格，所以是一个文本节点

`nextElementSibling`：获取某一个节点的**下一个元素节点**

```html
<body>
  <ul>
    <li id="a">hello</li>
    <li id="b">world</li>
    <li id="c">!!!</li>
  </ul>
  
  <script>
    // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
  	var oLi = document.querySelector('#b')
    
    console.log(oLi.nextElementSibling) // <li id="c">!!!</li>
  </script>
</body>
```

只获取一个节点，不再是伪数组，获取的是 `id="b"` 这个 `li` 的下一个兄弟元素节点，因为 `id="b"` 的下一个兄弟元素节点就是 `id="c"` 的 `li`，是一个元素节点

`previousElementSibling`：获取某一个节点的**上一个元素节点**

```html
<body>
  <ul>
    <li id="a">hello</li>
    <li id="b">world</li>
    <li id="c">!!!</li>
  </ul>
  
  <script>
    // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
  	var oLi = document.querySelector('#b')
    
    console.log(oLi.previousElementSibling) // <li id="a">hello</li>
  </script>
</body>
```

只获取一个节点，不再是伪数组，获取的是 `id="b"` 这个 `li` 的上一个兄弟元素节点，因为 `id="b"` 的上一个兄弟元素节点就是 `id="a"` 的 `li`，是一个元素节点

`parentNode`：获取某一个节点的**父节点**

```html
<body>
  <ul>
    <li id="a">hello</li>
    <li id="b">world</li>
    <li id="c">!!!</li>
  </ul>
  
  <script>
    // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
  	var oLi = document.querySelector('#b')
    
    console.log(oLi.parentNode) // <ul>...</ul>
  </script>
</body>
```

只获取一个节点，不再是伪数组，获取的是当前这个 `li` 的父元素节点，因为这个 `li` 的父亲就是 `ul`，所以获取到的就是 `ul`，是一个元素节点

`attributes`：获取某一个 **元素节点** 的所有**属性节点**

```html
<body>
  <ul>
    <li id="a" a="100" test="test">hello</li>
  </ul>
  
  <script>
    // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
  	var oLi = document.querySelector('#a')
    
    console.log(oLi.attributes) 
    /*
    	NamedNodeMap {0: id, 1: a, 2: test, id: id, a: a, test: test, length: 3}
      0: id
      1: a
      2: test
      length: 3
      a: a
      id: id
      test: test
      __proto__: NamedNodeMap
    
    */
  </script>
</body>
```

获取的是一组数据，是该元素的所有属性，也是一个伪数组，这个 `li` 有三个属性，`id` 、 `a` 、 `test` 三个，所以就获取到了这三个

### 节点属性

我们已经知道节点会分成很多种，而且我们也能获取到各种不同的节点，接下来我们就来学习各种节点之间属性的区别

我们先准备一段代码

```html
<body>
  <ul test="我是 ul 的一个属性">
    <li>hello</li>
  </ul>

  <script>
    // 先获取 ul
    var oUl = document.querySelector('ul')
    
    // 获取到 ul 下的第一个子元素节点，是一个元素节点
    var eleNode = oUl.firstElementChild
    
    // 获取到 ul 的属性节点组合，因为是个组合，我们要拿到节点的话要用索引
    var attrNode = oUl.attributes[0]

    // 获取到 ul 下的第一个子节点，是一个文本节点
    var textNode = oUl.firstChild
  </script>
</body>
```

#### nodeType

`nodeType`：获取节点的节点类型，用数字表示

```javascript
console.log(eleNode.nodeType) // 1
console.log(attrNode.nodeType) // 2
console.log(textNode.nodeType) // 3
```

- `nodeType === 1` 就表示该节点是一个 **元素节点**
- `nodeType === 2` 就表示该节点是一个 **属性节点**
- `nodeType === 3` 就表示该节点是一个 **文本节点**

#### nodeName

`nodeName`：获取节点的节点名称

```javascript
console.log(eleNode.nodeName) // LI
console.log(attrNode.nodeName) // test
console.log(textNode.nodeName) // #text
```

- 元素节点的 `nodeName` 就是 **大写标签名**
- 属性节点的 `nodeName` 就是 **属性名**
- 文本节点的 `nodeName` 都是 **#text**

#### nodeValue

`nodeValue`： 获取节点的值

```javascript
console.log(eleNode.nodeValue) // null
console.log(attrNode.nodeValue) // 我是 ul 的一个属性
console.log(textNode.nodeValue) // 换行 + 空格
```

- 元素节点没有 `nodeValue`
- 属性节点的 `nodeValue` 就是 **属性值**
- 文本节点的 `nodeValue` 就是 **文本内容**

#### 总结

|          | nodeType | nodeName   | nodeValue |
| -------- | -------- | ---------- | --------- |
| 元素节点 | 1        | 大写标签名 | null      |
| 属性节点 | 2        | 属性名     | 属性值    |
| 文本节点 | 3        | \#text     | 文本内容  |

### 操作节点

我们所说的操作无非就是 **增删改查（CRUD）**

- 创建一个节点（因为向页面中增加之前，我们需要先创建一个节点出来）
- 向页面中增加一个节点
- 删除页面中的某一个节点
- 修改页面中的某一个节点
- 获取页面中的某一个节点

#### 创建一个节点

`createElement`：用于创建一个元素节点

```javascript
// 创建一个 div 元素节点
var oDiv = document.createElement('div')

console.log(oDiv) // <div></div>
```

`createTextNode`：用于创建一个文本节点

```javascript
// 创建一个文本节点
var oText = document.createTextNode('我是一个文本')

console.log(oText) // "我是一个文本"
```

#### 追加一个节点

`appendChild`：是向一个元素节点的末尾追加一个节点

语法： `父节点.appendChild(要插入的子节点)`

```javascript
// 创建一个 div 元素节点
var oDiv = document.createElement('div')
var oText = document.createTextNode('我是一个文本')

// 向 div 中追加一个文本节点
oDiv.appendChild(oText)

console.log(oDiv) // <div>我是一个文本</div>
```

`insertBefore`：向某一个节点前插入一个节点

语法： `父节点.insertBefore(要插入的节点，插入在哪一个节点的前面)`

```html
<body>
  <div>
    <p>我是一个 p 标签</p>
  </div>
  
  <script>
  	var oDiv = document.querySelector('div')
    var oP = oDiv.querySelector('p')
    
    // 创建一个元素节点
    var oSpan = document.createElement('span')
    
    // 将这个元素节点添加到 div 下的 p 的前面
    oDiv.insertBefore(oSpan, oP)
    
    console.log(oDiv)
    /*
    	<div>
    		<span></span>
    		<p>我是一个 p 标签</p>
    	</div>
    */
  </script>
</body>
```

#### 删除一个节点

`removeChild`：移除某一节点下的某一个节点

语法：`父节点.removeChild(要移除的字节点)`

```html
<body>
  <div>
    <p>我是一个 p 标签</p>
  </div>
  
  <script>
  	var oDiv = document.querySelector('div')
    var oP = oDiv.querySelector('p')
    
    // 移除 div 下面的 p 标签
    oDiv.removeChild(oP)
    
    console.log(oDiv) // <div></div>
  </script>
</body>
```

#### 修改一个节点

`replaceChild`：将页面中的某一个节点替换掉

语法： `父节点.replaceChild(新节点，旧节点)`

```html
<body>
  <div>
    <p>我是一个 p 标签</p>
  </div>
  
  <script>
  	var oDiv = document.querySelector('div')
    var oP = oDiv.querySelector('p')
    
    // 创建一个 span 节点
    var oSpan = document.createElement('span')
    // 向 span 元素中加点文字
    oSpan.innerHTML = '我是新创建的 span 标签'
    
   	// 用创建的 span 标签替换原先 div 下的 p 标签
    oDiv.replaceChild(oSpan, oP)
    
    console.log(oDiv)
    /*
    	<div>
    		<span>我是新创建的 span 标签</span>
    	</div>
    */
  </script>
</body>
```

#### 克隆一个节点

`cloneNode`：克隆一个已有的节点

语法：`元素.cloneNode(布尔值)`

`cloneNode` 会克隆出一个跟原标签一样的元素，括号内传入布尔值

+ 若为 true，则代表克隆时会包含后代节点一起克隆
+ 若为 false，则代表克隆时不包含后代节点
+ 默认为 false

## 获取元素的偏移量

就是元素在页面上相对于参考父级的左边和上边的距离

### offsetParent

获取元素的偏移量参考父级

其实就是假设你要给一个元素 **绝对定位** 的时候，它是根据谁来进行定位的，那么这个元素的偏移量参考父级就是谁

### offsetLeft 和 offsetTop

获取的是元素左边的偏移量和上边的偏移量

- `offsetLeft` ： 该元素相对于参考父级的左侧偏移量
- `offsetTop` ： 该元素相对于参考父级的上侧偏移量

## 获取元素尺寸

就是获取元素的 "占地面积"

注意:

- 获取到的尺寸是没有单位的数字
- 当元素在页面中不占位置的时候， 获取到的是 0
  - `display: none;` 元素在页面不占位
  - `visibility: hidden;` 元素在页面占位

### offsetWith 和 offsetHeight

- `offsetWidth` ： 获取的是元素 `内容 + padding + border` 的宽度
- `offsetHeight` ： 获取的是元素 `内容 + padding + border` 的高度

### clientWidth 和 clientHeight

- `clientWidth` ： 获取的是元素 `内容 + padding` 的宽度

- `clientHeight` ： 获取的是元素 `内容 + padding` 的高度

## 获取浏览器窗口尺寸

我们之前学过一个 `innerWidth` 和 `innerHeight`，它们获取到的是窗口包含滚动条的尺寸，下面我们学习两个不包含滚动条的尺寸获取方式

- `document.documentElement.clientWidth` ： 可视窗口的宽度
- `document.documentElement.clientHeight` ： 可视窗口的高度

## 事件

事件是编程语言中的术语，它是用来描述程序的行为或状态的，一旦行为或状态发生改变，便立即调用一个函数

一个事件由什么东西组成

- 触发谁的事件：事件源
- 触发什么事件：事件类型
- 触发以后做什么：事件处理函数

```javascript
var oDiv = document.querySelector('div')

oDiv.onclick = function () {}
// 谁来触发事件 => oDiv => 这个事件的事件源就是 oDiv
// 触发什么事件 => onclick => 这个事件类型就是 click
// 触发之后做什么 => function () {} => 这个事件的处理函数
```

我们想要在点击 div 以后做什么事情，就把我们要做的事情写在事件处理函数里面

```javascript
var oDiv = document.querySelector('div')

oDiv.onclick = function () {
  console.log('你点击了 div')
}
```

当我们点击 `div` 的时候，就会执行事件处理函数内部的代码，每点击一次，就会执行一次事件处理函数

### 事件的绑定方式

我们现在给一个注册事件都是使用 `onxxx` 的方式，但是这个方式不是很好，只能给一个元素注册一个事件，一旦写了第二个事件，那么第一个就被覆盖了

```javascript
oDiv.onclick = function () {
  console.log('我是第一个事件')
}

oDiv.onclick = function () {
  console.log('我是第二个事件')
}
```

当你点击的时候，只会执行第二个，第一个就没有了，我们还有一种事件监听的方式去给元素绑定事件

使用 `addEventListener` 的方式添加，这个方法不兼容，在 IE 里面要使用 `attachEvent`

`addEventListener` :  非 IE7、8 下使用

语法： `元素.addEventListener('事件类型'， 事件处理函数， 冒泡还是捕获)`

> 这里的第三个参数是可选的，后面事件的传播会详述

```javascript
oDiv.addEventListener('click', function () {
  console.log('我是第一个事件')
}, false)

oDiv.addEventListener('click', function () {
  console.log('我是第二个事件')
}, false)
```

当你点击 div 的时候，两个函数都会执行，并且会按照你注册的顺序执行，先打印 `我是第一个事件` 再打印 `我是第二个事件`

注意： **事件类型的时候不要写 on，点击事件就是 click，不是 onclick**

`attachEvent` ：IE 7 8 下使用

语法： `元素.attachEvent('事件类型'， 事件处理函数)`

```javascript
oDiv.attachEvent('onclick', function () {
  console.log('我是第一个事件')
})

oDiv.attachEvent('onclick', function () {
  console.log('我是第二个事件')
})
```

当你点击 div 的时候，两个函数都会执行，并且会按照你注册的顺序倒叙执行，先打印 `我是第二个事件` 再打印 `我是第一个事件`

注意： **事件类型的时候要写 on，点击事件就写 onclick**

两个方式的区别：

- 注册事件的时候事件类型参数的书写
  - `addEventListener` ： 不用写 on
  - `attachEvent` ： 要写 on
- 参数个数
  - `addEventListener` ： 一般是三个常用参数
  - `attachEvent` ： 两个参数
- 执行顺序
  - `addEventListener` ： 顺序注册，顺序执行
  - `attachEvent` ： 顺序注册，倒叙执行
- 适用浏览器
  - `addEventListener` ： 非 IE7、8 的浏览器
  - `attachEvent` ： IE7、8 浏览器

### 常见的事件类型

我们在写页面的时候经常用到的一些事件，大致分为几类，**浏览器事件** 、 **鼠标事件** 、 **键盘事件** 、 **表单事件** 、 **触摸事件**、**焦点事件**等

#### 浏览器事件

- `load` ： 页面全部资源加载完毕
- `scroll` ： 浏览器滚动的时候触发
- ...

#### 鼠标事件

- `click` ：点击事件
- `dblclick` ：双击事件
- `contextmenu` ： 右键单击事件
- `mousedown` ：鼠标左键按下事件
- `mouseup` ：鼠标左键抬起事件
- `mousemove` ：鼠标移动
- `mouseover` ：鼠标移入事件
- `mouseout` ：鼠标移出事件
- `mouseenter` ：鼠标移入事件
- `mouseleave` ：鼠标移出事件
- ...

#### 键盘事件

- `keyup` ： 键盘抬起事件
- `keydown` ： 键盘按下事件
- `keypress` ： 键盘按下再抬起事件
- ...

#### 表单事件

- `change` : 表单内容改变事件
- `input` : 表单内容输入事件
- `submit` : 表单提交事件
- ...

#### 触摸事件

- `touchstart` ： 触摸开始事件
- `touchend` ： 触摸结束事件
- `touchmove` ： 触摸移动事件
- ...

#### 焦点事件

+ `focus`：获得焦点事件
+ `blur`：失去焦点事件

### 事件对象

什么是事件对象？就是当你触发了一个事件以后，对该事件的一些描述信息

例如：

- 你触发一个点击事件的时候，你点在哪个位置了，坐标是多少
- 你触发一个键盘事件的时候，你按的是哪个按钮
- ...

每一个事件都会有一个对应的对象来描述这些信息，我们就把这个对象叫做 **事件对象**

浏览器给了我们一个 **黑盒子**，叫做 `window.event`，就是对事件信息的所有描述，比如点击事件，你点在了 `0，0` 位置，那么你得到的这个事件对象里面对应的就会有这个点位的属性，你点在了 `10, 10` 位置，那么你得到的这个事件对象里面对应的就会有这个点位的属性

```javascript
oDiv.onclick = function () {
  console.log(window.event.X轴坐标点信息)
  console.log(window.event.Y轴坐标点信息)
}
```

这个玩意很好用，但是一般来说，好用的东西就会有 **兼容性问题**，在 `IE低版本` 里面这个东西好用，但是在 `高版本IE` 和 `Chrome` 里面不好使了，我们就得用另一种方式来获取 **事件对象**，在每一个事件处理函数的行参位置，默认第一个就是 **事件对象**

```javascript
oDiv.onclick = function (e) {
  // e 就是和 IE 的 window.event 一样的东西
  console.log(e.X轴坐标点信息)
  console.log(e.Y轴坐标点信息)
}
```

综上所述，我们以后在每一个事件里面，想获取事件对象的时候，都用兼容写法

```javascript
oDiv.onclick = function (e) {
  e = e || window.event
  console.log(e.X轴坐标点信息)
  console.log(e.Y轴坐标点信息)
}
```

常用属性：

1. `type` 当前事件的类型
2. `clientX/clientY` 光标相对浏览器可见窗口左上角的位置
3. `offsetX/offsetY` 光标相于当前 DOM 元素左上角的位置
4. `key` 用户按下的键盘键的值，不提倡使用 `keycode`

### 事件的传播

![DOM02.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/DOM02.png)

**当元素触发一个事件的时候，其父元素也会触发相同的事件，父元素的父元素也会触发相同的事件**，就像上面的图片一样，点击在红色盒子上的时候，会触发红色盒子的点击事件，也是点击在了粉色的盒子上，也会触发粉色盒子的点击事件，也是点击在了 body 上，也会触发 body 的点击事件，也是点击在了 html 上，也会触发 html 的点击事件，也是点击在了 document 上，也会触发 document 的点击事件，也是点击在了 window 上，也会触发 window 的点击事件，也就是说，页面上任何一个元素触发事件，都会一层一层最终导致 window 的相同事件触发，前提是各层级元素得有注册相同的事件，不然不会触发

在事件传播的过程中，有一些注意的点：

1. 只会传播同类事件
2. 只会从点击元素开始按照 html 的结构逐层向上元素的事件会被触发
3. 内部元素不管有没有该事件，只要上层元素有该事件，那么上层元素的事件就会被触发

#### 冒泡、捕获、目标

我们刚才聊过了，每一个事件，都是有可能从自己到 window ，有可能要执行多个同类型事件，那么这个执行的顺序就有一些说法了

目标：你是点击在哪个元素身上了，那么这个事件的 **目标** 就是什么

冒泡：就是从事件 **目标** 的事件处理函数开始，依次向外，直到 window 的事件处理函数触发，也就是从下向上的执行事件处理函数

捕获：就是从 window 的事件处理函数开始，依次向内，只要事件 **目标** 的事件处理函数执行，也就是从上向下的执行事件处理函数

冒泡和捕获的区别：就是在事件的传播中，多个同类型事件处理函数的执行顺序不同

> `addEventListener` 第3个参数为  `true` 表示捕获阶段触发，`false` 表示冒泡阶段触发，默认值为 `false`

### 事件委托

事件委托利用了事件传播的特征来解决一些现实开发中的需求 

+ 优点：减少注册次数，可以提高程序性能
+ 原理：事件委托其实是利用事件冒泡的特点
  + 给父元素注册事件，当我们触发子元素的时候，会冒泡到父元素身上，从而触发父元素的事件
  + 实现：`事件对象.target.tagName` 可以获得真正触发事件的元素

#### 事件触发

点击子元素的时候，不管子元素有没有点击事件，只要父元素有点击事件，那么就可以触发父元素的点击事件

```html
<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <script>
  	var oUl = docuemnt.querySelector('ul')
    
    oUl.addEventListener('click', function (e) {
      console.log('我是 ul 的点击事件，我被触发了')
    })
  </script>
</body>
```

像上面一段代码，当你点击 ul 的时候肯定会触发，但是当你点击 li 的时候，其实也会触发

#### target

target 这个属性是事件对象里面的属性，表示你点击的目标，当你触发点击事件的时候，你点击在哪个元素上，target 就是哪个元素，这个 target 也不兼容，在 IE 下要使用 srcElement

```html
<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <script>
  	var oUl = docuemnt.querySelector('ul')
    
    oUl.addEventListener('click', function (e) {
      e = e || window.event
      var target = e.target || e.srcElement
      console.log(target)
    })
  </script>
</body>
```

上面的代码，当你点击 ul 的时候，target 就是 ul，当你点击在 li 上面的时候，target 就是 li

#### 委托

这个时候，当我们点击 li 的时候，也可以触发 ul 的点事件，并且在事件内不，我们也可以拿到你点击的到底是 ul 还是 li，这个时候，我们就可以把 li 的事件委托给 ul 来做

```html
<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <script>
  	var oUl = docuemnt.querySelector('ul')
    
    oUl.addEventListener('click', function (e) {
      e = e || window.event
      var target = e.target || e.srcElement
     
      // 判断你点击的是 li
      if (target.nodeName.toUpperCase === 'LI') {
      	// 确定点击的是 li
        // 因为当你点击在 ul 上面的时候，nodeName 应该是 'UL'
        // 去做点击 li 的时候该做的事情了
        console.log('我是 li，我被点击了')
      }
    })
  </script>
</body>
```

上面的代码，我们就可以把 li 要做的事情委托给 ul 来做

### 默认行为

#### 什么是默认行为

默认行为，就是不用我们注册，它自己就存在的事情，比如我们点击鼠标右键的时候，会自动弹出一个菜单，比如我们点击 a 标签的时候，我们不需要注册点击事件，他自己就会跳转页面...

这些不需要我们注册就能实现的事情，我们叫做 **默认行为**

#### 阻止默认行为

有的时候，我们不希望浏览器执行默认事件，比如我给 a 标签绑定了一个点击事件，我点击你的时候希望你能告诉我你的地址是什么，而不是直接跳转链接，那么我们就要把 a 标签原先的默认事件阻止，不让他执行默认事件

我们有两个方法来阻止默认事件

- `e.preventDefault()` : 非 IE 使用
- `e.returnValue = false` ：IE 使用

我们阻止默认事件的时候也要写一个兼容的写法

```html
<a href="https://www.baidu.com">点击我试试</a>
<script>
	var oA = document.querySelector('a')
  
  a.addEventListener('click', function (e) {
    e = e || window.event
    
    console.log(this.href)
    
    e.preventDefault ? e.preventDefault() : e.returnValue = false
  })
</script>
```

这样写完以后，你点击 a 标签的时候，就不会跳转链接了，而是会在控制台打印出 a 标签的 href 属性的值
