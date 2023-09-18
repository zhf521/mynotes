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
