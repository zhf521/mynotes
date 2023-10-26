---
title: JavaScript Web API
order: 4
---

## 1. DOM

### 1. DOM 的本质

先从 XML 说起。XML 是一种可扩展的标记语言，所谓可扩展就是它可以描述任何结构化的数据，它是一棵树！

```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
  <other>
    <a></a>
    <b></b>
  </other>
</note>
```

HTML 是一个有既定标签标准的 XML 格式，标签的名字、层级关系和属性，都被标准化（否则浏览器无法解析）。同样，它也是一棵树

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>
        <p>this is p</p>
    </div>
</body>
</html>
```

我们开发完的 HTML 代码会保存到一个文档中（一般以`.html`或者`.htm`结尾），文档放在服务器上，浏览器请求服务器，这个文档被返回。因此，最终浏览器拿到的是一个文档而已，文档的内容就是 HTML 格式的代码

但是浏览器要把这个文档中的 HTML 按照标准渲染成一个页面，此时浏览器就需要将这堆代码处理成自己能理解的东西，也得处理成 JS 能理解的东西，因为还得允许 JS 修改页面内容呢

基于以上需求，浏览器就需要把 HTML 转变成 DOM，HTML 是一棵树，DOM 也是一棵树。对 DOM 的理解，可以暂时先抛开浏览器，先从 JS 着手，即可以认为 DOM 就是 JS 能识别的 HTML 结构，一个普通的 JS 对象或者数组

### 2. DOM 节点操作

#### 1. 获取 DOM 节点

```javascript
const div1 = document.getElementById('div1'); // 元素
const divList = document.getElementsByTagName('div');  // 集合
console.log(divList.length);
console.log(divList[0]);

const containerList = document.getElementsByClassName('.container'); // 集合
const pList = document.querySelectorAll('p'); // 集合
```

#### 2. property

DOM 节点就是一个 JS 对象，它符合之前讲述的对象的特征 ———— 可扩展属性（推荐使用）

```javascript
const pList = document.querySelectorAll('p');
const p = pList[0];
console.log(p.style.width);  // 获取样式
p.style.width = '100px';  // 修改样式
console.log(p.className);  // 获取 class
p.className = 'p1';  // 修改 class

// 获取 nodeName 和 nodeType
console.log(p.nodeName);
console.log(p.nodeType);
```

#### 3. Attribute

property 的获取和修改，是直接改变 JS 对象，而 Attibute 是直接改变 HTML 的属性，会改变 HTML 结构

```javascript
const pList = document.querySelectorAll('p');
const p = pList[0];
p.getAttribute('data-name');
p.setAttribute('data-name', 'imooc');
p.getAttribute('style');
p.setAttribute('style', 'font-size:30px;');
```

### 3. DOM 树操作

新增节点

```javascript
const div1 = document.getElementById('div1');
// 添加新节点
const p1 = document.createElement('p');
p1.innerHTML = 'this is p1';
div1.appendChild(p1); // 添加新创建的元素
// 移动已有节点。注意是移动！！！
const p2 = document.getElementById('p2');
div1.appendChild(p2);
```

获取父元素

```javascript
const div1 = document.getElementById('div1');
const parent = div1.parentNode;
```

获取子元素

```javascript
const div1 = document.getElementById('div1');
const child = div1.childNodes;
```

删除节点

```javascript
const div1 = document.getElementById('div1');
const child = div1.childNodes;
div1.removeChild(child[0]);
```

### 4. DOM 性能

DOM 操作是昂贵的 —— 非常耗费性能。因此针对频繁的 DOM 操作一定要做一些处理。

例如：缓存 DOM 查询结果

```js
// 不缓存 DOM 查询结果
for (let = 0; i < document.getElementsByTagName('p').length; i++) {
    // 每次循环，都会计算 length ，频繁进行 DOM 查询
}

// 缓存 DOM 查询结果
const pList = document.getElementsByTagName('p');
const length = pList.length;
for (let i = 0; i < length; i++) {
    // 缓存 length ，只进行一次 DOM 查询
}
```

例如：插入多个标签时，先插入 Fragment 然后再统一插入DOM

```js
// 原方式会浪费性能
const list = document.getElementById('list');
for(let i = 0;i < 10;i++){
    const li = document.createElement('li');
    li.innerHTML = `List item ${i}`;
    list.appendChild(li);
}
```

优化：

```js
const listNode = document.getElementById('list');

// 创建一个文档片段，此时还没有插入到 DOM 树中
const frag = document.createDocumentFragment();

// 执行插入
for(let x = 0; x < 10; x++) {
    const li = document.createElement("li");
    li.innerHTML = `List item ${x}`;
    frag.appendChild(li);
}

// 都完成之后，再插入到 DOM 树中
listNode.appendChild(frag);
```

## 2. BOM

DOM 是浏览器针对下载的 HTML 代码进行解析得到的 JS 可识别的数据对象

而 BOM（浏览器对象模型）是浏览器本身的一些信息的设置和获取，例如获取浏览器的宽度、高度，设置让浏览器跳转到哪个地址

- navigator
- screen
- location
- history

```javascript
// navigator
let ua = navigator.userAgent;
let isChrome = ua.indexOf('Chrome');
console.log(isChrome);

// screen
console.log(screen.width);
console.log(screen.height);

// location
console.log(location.href);
console.log(location.protocol); // 'http:' 'https:'
console.log(location.pathname); // '/learn/199'
console.log(location.search);
console.log(location.hash);

// history
history.back();
history.forward();
```

## 3. 事件

### 1. 事件绑定

```javascript
const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => {
    console.log('click');
});
```

通用的事件绑定函数：

```js
function bindEvent(element, type, fn) {
    element.addEventListener(type, fn);
}

const a = document.getElementById('link');
bindEvent(a, 'click', (e) => {
    e.preventDefault(); //阻止默认行为
    alert('clicked');
});
```

### 2. 事件冒泡

```html
<body>
    <div id="div1">
        <p id="p1">激活</p>
        <p id="p2">取消</p>
        <p id="p3">取消</p>
        <p id="p4">取消</p>
    </div>
    <div id="div2">
        <p id="p5">取消</p>
        <p id="p6">取消</p>
    </div>
</body>
```

对于以上 HTML 代码结构，点击`p1`时候进入激活状态，点击其他任何`p`都取消激活状态，如何实现？

```javascript
const p1 = document.getElementById('p1');
const body = document.body;
p1.addEventListener('click', (e) => {
    e.stopPropagation();
    alert('激活');
});
body.addEventListener('click', (e) => {
    alert('取消');
});
```

如果我们在`p1` `div1` `body`中都绑定了事件，它是会根据 DOM 的结构，来冒泡从下到上挨个执行的。但是我们使用`e.stopPropagation()`就可以阻止冒泡。如果我们不阻止冒泡，那么在执行“激活”时，会继续触发body中的click事件，会再弹出“取消”。

### 3. 事件委托

我们设定一种场景，如下代码，一个`<div>`中包含了若干个`<a>`，而且还能继续增加。那如何快捷方便的为所有的`<a>`绑定事件呢？

```html
<div id="div1">
    <a href="#">a1</a>
    <a href="#">a2</a>
    <a href="#">a3</a>
    <a href="#">a4</a>
</div>
<button>点击增加一个 a 标签</button>
```

这里就会用到事件委托，我们要监听`<a>`的事件，但要把具体的事件绑定到`<div>`上，然后看事件的触发点，是不是`<a>`

```javascript
const div = document.getElementById('div');
div.addEventListener('click', (e) => {
    const target = e.target;
    if (target.nodeName === 'A') {
        alert(target.innerHTML);
    }
});
```

使用事件委托的优点：

- 使代码简洁
- 减少浏览器的内存占用

## 4. Ajax

### 1. XMLHttpRequest

原生Ajax使用XHR来发送

语法：

```javascript
// IE9及以上
const xhr = new XMLHttpRequest();
// IE9以下
const xhr = new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('请求方法', '请求url网址', 是否异步);
xhr.onreadystatechange = function () {
    // 判断异步对象的状态
    if (xhr.readyState === 4) {
        // 判断交互是否成功
        if (xhr.status === 200) {
            //获取服务器响应数据
            let res = xhr.responseText;
            // 解析数据
            res = JSON.parse(res);
        }
    }
};
xhr.send();
```

使用步骤：

1. 创建 XHR 对象 
2. 调用 open 方法，设置 url 、请求方法、是否异步
3. 监听 readyState 变化事件，接收结果
4. 调用 send 方法，发起请求

### 2. 状态码说明

#### 1. readyState

`xhr.readyState` 的状态码说明：

- 0 - (未初始化）还没有调用send()方法 
- 1 -（载入）已调用send()方法，正在发送请求 
- 2 -（载入完成）send()方法执行完成，已经接收到全部响应内容
- 3 -（交互）正在解析响应内容 
- 4 -（完成）响应内容解析完成，可以在客户端调用了 

#### 2. status

HTTP 状态吗有 `2xx` `3xx` `4xx` `5xx` 这几种，比较常用的有以下几种

- 200 正常
- 301 永久重定向；302 临时重定向；304 资源未被修改
- 404 找不到资源；403 权限不允许
- 5xx 服务器端出错了

### 3. 跨域

#### 1. 什么是跨域

浏览器中有“同源策略”，即一个域下的页面中，无法通过 Ajax 获取到其他域的接口。例如慕课网有一个接口`http://m.imooc.com/course/ajaxcourserecom?cid=459`，你自己的一个页面`http://www.yourname.com/page1.html`中的 Ajax 无法获取这个接口。这正是命中了“同源策略”。如果浏览器哪些地方忽略了同源策略，那就是浏览器的安全漏洞，需要紧急修复

url 哪些地方不同算作跨域？

- 协议
- 域名
- 端口

但是HTML中几个标签能逃避过同源策略——`<script src="xxx">`、`<img src="xxxx"/>`、`<link href="xxxx">`，这俩标签的 `src` 或 `href` 可以加载其他域的资源，不受同源策略限制

因此，这三个标签可以做一些特殊的事情。

- `<img>`可以做打点统计，因为统计方并不一定是同域的，除了能跨域之外，`<img>`几乎没有浏览器兼容问题，它是一个非常古老的标签
- `<script>`和`<link>`可以使用CDN，CDN基本都是其他域的链接
- `<script>`还可以实现JSONP，能获取其他域接口的信息

但是请注意，所有的跨域请求方式，最终都需要信息提供方来做出相应的支持和改动，也就是要经过信息提供方的同意才行，否则接收方是无法得到他们的信息的，浏览器是不允许的

#### 2. JSONP

首先，有一个概念要明白，例如访问`http://coding.m.imooc.com/classindex.html`的时候，服务器端就一定有一个`classindex.html`文件吗？—— 不一定，服务器可以拿到这个请求，然后动态生成一个文件，然后返回。
同理，`<script src="http://coding.m.imooc.com/api.js">`也不一定加载一个服务器端的静态文件，服务器也可以动态生成文件并返回

例如我们的网站和慕课网，肯定不是一个域。我们需要慕课网提供一个接口，供我们来获取。首先，我们在自己的页面这样定义

```html
<script>
    // 前端提前声明好这个函数
    window.callback = function (data) {
        // 这是我们跨域得到信息
        console.log(data);
    }
</script>
```

然后慕课网给我提供了一个`http://coding.m.imooc.com/api.js`，内容如下（之前说过，服务器可动态生成内容）

```js
// 后端配合返回的是函数()调用
callback({x:100, y:200});
```

最后我们在页面中加入`<script src="http://coding.m.imooc.com/api.js"></script>`，那么这个 JS 加载之后，就会执行内容，我们就得到内容了

#### 3. CORS

CORS（Cross-Origin Resource Sharing），跨域资源共享

这是需要在服务器端设置的，现在推崇的跨域解决方案是这一种，比 JSONP 简单许多

```js
response.setHeader("Access-Control-Allow-Origin", "http://localhost:8011");  // 第二个参数填写允许跨域的域名称，不建议直接写 "*"
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

// 接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials", "true");
```

## 5.存储

### 1. cookie

cookie 本身不是用来做存储的，它设计是用来在服务器和客户端进行信息传递的，因此我们的每个 HTTP 请求都带着 cookie。但是 cookie 也具备浏览器端存储的能力（例如记住用户名和密码）

使用起来也非常简单`document.cookie = ....`即可

但是 cookie 有它致命的缺点：

- 存储量太小，只有 4KB
- 所有 http 请求都带着，会影响获取资源的效率
- API 简单，需要封装才能用

### 2. locationStorage 和 sessionStorage

HTML5标准就带来了`sessionStorage`和`localStorage`，先拿`localStorage`来说，它是专门为了浏览器端缓存而设计的。其优点有：

- 存储量增大到 5M
- 不会带到 http 请求中
- API 适用于数据存储 `localStorage.setItem(key, value)`、`localStorage.getItem(key)`

`sessionStorage`的区别就在于它是根据 session 过去时间而实现，而`localStorage`会永久有效，应用场景不同。例如，一些重要信息需要及时失效的放在`sessionStorage`中，一些不重要但是不经常设置的信息，放在`localStorage`

另外一个小技巧：iOS系统的safari浏览器的隐藏模式，使用`localStorage.setItem`，因此使用时尽量加入到`try-catch`中

