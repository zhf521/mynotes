---
title: JavaScript
order: 2
---

## 1. 面向过程与面向对象

### 1.1 面向过程

**通过函数一步一步实现这些步骤，接着依次调用即可**

优点：性能上它是优于面向对象的，因为类在调用的时候需要实例化，开销过大

缺点：不易维护、复用、扩展

用途：单片机、嵌入式开发、Linux/Unix等对性能要求较高的地方

### 1.2 面向对象

**将数据与函数绑定到一起，进行封装减少了重复代码的重写过程**

优点：易维护、易复用、易扩展，由于面向对象有**封装、继承、多态性**的特性，可以设计出**低耦合**的系统，使系统更加灵活、更加易于维护 

缺点：性能比面向过程低

## 2. BOM和DOM

### 2.1 BOM（window）

Browser Object Model（浏览器对象模型），是JavaScript的组成之一，它提供了独立于内容与浏览器窗口进行交互的对象，使用浏览器对象模型可以实现与HTML的交互

window对象：`alert()` , `prompt()` , `confirm()` , `setInterval()` , `clearInterval()` , `setTimeout()` , `clearTimeout()`

history对象：`go()`、`back()` , `foward()`

location对象：`href`属性

### 2.2 DOM（document）

Document Object Model（文档对象模型）

JavaScript中通过DOM来对HTML文档进行操作

文档是整个的HTML网页文档

将网页中的每一个部分都转换为了一个对象

使用模型来表示对象之间的关系，方便获取对象

## 3. 常用触发事件

```js
<input type="text" onkeyup="myFunction()">
```

```js
document.addEventListener(event, function[, useCapture])
//不用 "on" 前缀。例如，使用 "click" 来取代 "onclick"。
//true - 事件在捕获阶段执行
//false- 默认。事件在冒泡阶段执行
```

鼠标事件：

| 属性                                                         | 描述                                 |
| :----------------------------------------------------------- | :----------------------------------- |
| [onclick](https://www.runoob.com/jsref/event-onclick.html)   | 当用户点击某个对象时调用的事件句柄。 |
| [ondblclick](https://www.runoob.com/jsref/event-ondblclick.html) | 当用户双击某个对象时调用的事件句柄。 |
| [onmousedown](https://www.runoob.com/jsref/event-onmousedown.html) | 鼠标按钮被按下。                     |
| [onmousemove](https://www.runoob.com/jsref/event-onmousemove.html) | 鼠标被移动。                         |
| [onmouseover](https://www.runoob.com/jsref/event-onmouseover.html) | 鼠标移到某元素之上。                 |
| [onmouseout](https://www.runoob.com/jsref/event-onmouseout.html) | 鼠标从某元素移开。                   |
| [onmouseup](https://www.runoob.com/jsref/event-onmouseup.html) | 鼠标按键被松开。                     |

键盘事件：

| 属性                                                         | 描述                       |
| :----------------------------------------------------------- | :------------------------- |
| [onkeydown](https://www.runoob.com/jsref/event-onkeydown.html) | 某个键盘按键被按下。       |
| [onkeypress](https://www.runoob.com/jsref/event-onkeypress.html) | 某个键盘按键被按下并松开。 |
| [onkeyup](https://www.runoob.com/jsref/event-onkeyup.html)   | 某个键盘按键被松开。       |

表单事件：

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [onchange](https://www.runoob.com/jsref/event-onchange.html) | 该事件在表单元素的内容改变时触发( `<input>`, `<keygen>`, `<select>`, 和 `<textarea>`) |
| [onfocus](https://www.runoob.com/jsref/event-onfocus.html)   | 元素获取焦点时触发                                           |
| [onfocusin](https://www.runoob.com/jsref/event-onfocusin.html) | 元素即将获取焦点时触发                                       |
| [onfocusout](https://www.runoob.com/jsref/event-onfocusout.html) | 元素即将失去焦点时触发                                       |
| [oninput](https://www.runoob.com/jsref/event-oninput.html)   | 元素获取用户输入时触发                                       |
| [onreset](https://www.runoob.com/jsref/event-onreset.html)   | 表单重置时触发                                               |
| [onsearch](https://www.runoob.com/jsref/event-onsearch.html) | 用户向搜索域输入文本时触发 ( `<input="search">`)             |
| [onselect](https://www.runoob.com/jsref/event-onselect.html) | 用户选取文本时触发 ( `<input>` 和 `<textarea>`)              |
| [onsubmit](https://www.runoob.com/jsref/event-onsubmit.html) | 表单提交时触发                                               |

## 4. ES6新增内容

1. 数据类型：基本数据类型：Symbol，引用数据类型：Set、Map
2. 运算符：变量的解构赋值、对象和数组新增了扩展运算符
3. 字符串方法：模版字符串
4. 块级作用域：let、const
5. 原生提供Proxy构造函数，用来生成Proxy实例
6. 定义类的语法糖：class
7. 模块化：import、export
8. 生成器（Generator）和迭代器（Iterator）

详见：https://zhf521.github.io/mynotes/front-end/javascript-notes/26-JavaScript-ES6~ES13.html#_1-es6



