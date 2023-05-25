---
title: BOM
order: 18
---

`BOM（Browser Object Model）`： 浏览器对象模型

其实就是操作浏览器的一些能力

我们可以操作哪些内容？

- 获取一些浏览器的相关信息（窗口的大小）
- 操作浏览器进行页面跳转
- 获取当前浏览器地址栏的信息
- 操作浏览器的滚动条
- 浏览器的信息（浏览器的版本）
- 让浏览器出现一个弹出框（`alert` / `confirm` / `prompt`）
- ……

## window对象 

window 对象是一个全局对象，也可以说是 JavaScript 中的顶级对象，==基本 BOM 的属性和方法都是 window 对象==

所有通过 var 定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法

window对象下的属性和方法调用的时候可以省略 window

### 获取浏览器窗口的尺寸

` innerHeight` 和 `innerWidth`

这两个方法分别是用来获取浏览器窗口的宽度和高度（包含滚动条的）

```javascript
var windowHeight = window.innerHeight
console.log(windowHeight)

var windowWidth = window.innerWidth
console.log(windowWidth)
```

### 浏览器的弹出层

+ `alert` 是在浏览器弹出一个提示框

  ```js
  window.alert('我是一个提示框')
  ```

  - 这个弹出层只是一个提示内容，只有一个确定按钮

  - 点击确定按钮以后，这个提示框就消失了

+ `confirm` 是在浏览器弹出一个询问框

  ```js
  var boo = window.confirm('我是一个询问框')
  console.log(boo)
  ```

  - 这个弹出层有一个询问信息和两个按钮
  - 当你点击确定的时候，就会得到 `true`
  - 当你点击取消的时候，就会得到 `false`

+ `prompt` 是在浏览器弹出一个输入框

  ```js
  var str = window.prompt('请输入内容')
  console.log(str)
  ```

  - 这个弹出层有一个输入框和两个按钮
  - 当你点击取消的时候，得到的是 `null`
  - 当你点击确定的时候得到的就是你输入的内容

### 控制台对象



### 浏览器的地址信息

在 `window` 中有一个对象叫做 `location`，就是专门用来存储浏览器的地址栏内的信息的

#### location.href

`location.href` 这个属性存储的是浏览器地址栏内 `url` 地址的信息

```javascript
console.log(window.location.href)
```

会把中文变成 `url` 编码的格式

`location.href` 这个属性也可以给它赋值，赋值时用于地址的跳转

```javascript
window.location.href = './index.html'
// 这个就会跳转页面到后面你给的那个地址
```

#### location.search

`location.search`这个属性用于获取地址中携带的参数，符号 ？后面部分

#### location.hash

`location.hash`这个属性用于获取地址中的哈希值，符号 # 后面部分

#### location.reload

`location.reload()` 这个方法会重新加载一遍页面，就相当于刷新，传入参数 true 时表示强制刷新

```javascript
window.location.reload()
```

注意： **不要写在全局，不然浏览器就会一直处在刷新状态**

### 浏览器的历史记录

`window` 中有一个对象叫做 `history`，是专门用来存储历史记录信息的

#### history.back

`history.back` 是用来回退历史记录的，就是回到前一个页面，就相当于浏览器上的 ⬅️ 按钮

```javascript
window.history.back()
```

前提是你要有上一条记录，不然就是一直在这个页面，也不会回退

#### history.forword

`history.forword` 是去到下一个历史记录里面，也就是去到下一个页面，就相当于浏览器上的 ➡️ 按钮

```javascript
window.history.forward()
```

前提是你要之前有过回退操作，不然的话你现在就是最后一个页面，没有下一个

#### history.go

`history.go(参数)`用来前进和后退，参数如果是 1 前进一个页面，如果是 -1 后退一个页面

### 浏览器的onload事件

这个不再是对象了，而是一个事件，是在页面所有资源加载完毕后执行的

```javascript
window.onload = function () {
  console.log('页面已经加载完毕')
}
```

#### 在html页面中把JS写在head里面

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <script>
    	// 这个代码执行的时候，body 还没有加载
      // 这个时候我们就获取不到 body 中的那个 div

      // 就需要使用 window.onload 事件
      window.onload = function () {
        // 这个函数会在页面加载完毕以后在执行
        // 那么这个时候页面的 DOM 元素都已经加载了，我们就可以获取 div 了
      }
    </script>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

#### 在html页面中把JS写在body最后面

```html
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div></div>

    <script>
    	// 这个代码执行的时候，body 已经加载完毕了
      // 在这里就可以获取到 div，写不写 window.onload 就无所谓了

      window.onload = function () {
        // 这个函数会在页面加载完毕以后在执行
        // 那么这个时候页面的 DOM 元素都已经加载了，我们就可以获取 div 了
      }
    </script>
  </body>
</html>
```

### 浏览器的onscroll事件

这个 `onscroll` 事件是当浏览器的滚动条滚动的时候触发或者鼠标滚轮滚动的时候触发

```javascript
window.onscroll = function () {
  console.log('浏览器滚动了')
}
```

注意：**前提是页面的高度要超过浏览器的可是窗口才可以**

### 浏览器滚动的距离

浏览器内的内容既然可以滚动，那么我们就可以获取到浏览器滚动的距离

>  浏览器真的滚动了吗？
>
> 其实我们的浏览器是没有滚动的，是一直在那里，那么滚动的是什么？是我们的页面，所以说，**其实浏览器没有动，只不过是页面向上走了**，所以，这个已经不能单纯的算是浏览器的内容了，而是我们页面的内容，所以不是再用 `window` 对象了，而是使用 `document` 对象
>

#### scrollTop

获取的是页面向上滚动的距离

一共有两个获取方式

- `document.body.scrollTop`

- `document.documentElement.scrollTop`

  ```js
  window.onscroll = function () {
    console.log(document.body.scrollTop)
    console.log(document.documentElement.scrollTop)
  }
  ```

区别：

- IE 浏览器
  - 没有 `DOCTYPE` 声明的时候，用这两个都行
  - 有 `DOCTYPE` 声明的时候，只能用 `document.documentElement.scrollTop`
- Chrome 和 FireFox
  - 没有 `DOCTYPE` 声明的时候，用 `document.body.scrollTop`
  - 有 `DOCTYPE` 声明的时候，用 `document.documentElement.scrollTop`
- Safari
  - 两个都不用，使用一个单独的方法 `window.pageYOffset `

#### scrollLeft

获取页面向左滚动的距离

两个方法

- `document.body.scrollLeft`

- `document.documentElementLeft`

  ```javascript
  window.onscroll = function () {
    console.log(document.body.scrollLeft)
    console.log(document.documentElement.scrollLeft)
  }
  ```

### navigator对象

`window.navigator`对象，该对象下记录了浏览器自身的相关信息

常用属性和方法：

通过 userAgent 检测浏览器的版本及平台

~~~javascript
// 检测 userAgent（浏览器信息）
(function () {
  var userAgent = navigator.userAgent
  // 验证是否为Android或iPhone
  var android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
  var iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
  // 如果是Android或iPhone，则跳转至移动站点
  if (android || iphone) {
    location.href = '地址'
  }})();
~~~

### 本地存储

本地存储：将数据存储在本地浏览器中

优点：

1. 页面刷新或者关闭不丢失数据，实现数据持久化
2. 容量较大，sessionStorage 和 localStorage 约 5M 左右

#### localStorage

作用: 数据可以长期保留在本地浏览器中，刷新页面和关闭页面，数据也不会丢失, 除非手动删除

特性：可以多窗口共享（同一浏览器可以共享），以键值对的形式存储，并且存储的是字符串，省略了 window

语法：
存储数据：

```js
localStorage.setItem(key, value)
```

获取数据：

```js
localStorage.getItem(key)
```

删除数据：

```js
localStorage.removeItem(key)
```

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>本地存储-localstorage</title>
</head>
<body>
  <script>
    // 本地存储 - localstorage 存储的是字符串 
    // 1. 存储
    localStorage.setItem('age', 18)
    // 2. 获取
    console.log(typeof localStorage.getItem('age'))
    // 3. 删除
    localStorage.removeItem('age')
  </script>
</body>
</html>
~~~

可以在浏览器使用 `F12`，通过 Application 查看本地数据

#### sessionStorage

特性：

+ 生命周期为关闭浏览器窗口
+ 在同一个窗口（页面）下数据可以共享
+ 以键值对的形式存储使用

- 用法跟 localStorage 基本相同

语法：

```js
// 存储
sessionStorage.setItem(key,value)
// 获取
sessionStorage.getItem(key)
// 删除
sessionStorage.removeItem(key)
```

#### localStorage 存储复杂数据类型

问题：本地只能存储字符串, 无法存储复杂数据类型

解决方法：需要将复杂数据类型转换成 JSON 字符串, 再存储到本地

语法：`JSON.stringify(复杂数据类型)`

JSON 字符串：

- 首先是1个字符串
- 属性名使用双引号引起来，不能单引号
- 属性值如果是字符串型也必须双引号

~~~html
<body>
  <script>
    // 本地存储复杂数据类型
    var goods = {
      name: '小米',
      price: 1999
    }
    // localStorage.setItem('goods', goods)
    // console.log(localStorage.getItem('goods'))
    // 1. 把对象转换为JSON字符串  JSON.stringify
    localStorage.setItem('goods', JSON.stringify(goods))
    // console.log(typeof localStorage.getItem('goods'))
  </script>
</body>
~~~

问题：因为本地存储里面取出来的是字符串，不是对象，无法直接使用

解决：把取出来的字符串转换为对象

语法：`JSON.parse(JSON字符串)`

~~~html
<body>
  <script>
    // 本地存储复杂数据类型
    var goods = {
      name: '小米',
      price: 1999
    }
    // localStorage.setItem('goods', goods)
    // console.log(localStorage.getItem('goods'))
    // 1. 把对象转换为JSON字符串  JSON.stringify
    localStorage.setItem('goods', JSON.stringify(goods))
    // console.log(typeof localStorage.getItem('goods'))
    // 2. 把JSON字符串转换为对象  JSON.parse
console.log(JSON.parse(localStorage.getItem('goods')))
  </script>
</body>
~~~

### cookie

cookie的特点:

1. 只能存储文本
2. 单条存储有大小限制4KB左右，数量限制（一般浏览器，限制大概在50条左右）
3. 读取有域名限制：不可跨域读取，只能由来自 写入cookie的 同一域名 的网页可进行读取。简单的讲就是，哪个服务器发给你的cookie，只有哪个服务器有权利读取
4. 时效限制：每个cookie都有时效，默认的有效期是，会话级别：就是当浏览器关闭，那么cookie立即销毁，但是我们也可以在存储的时候手动设置cookie的过期时间
5. 路径限制：存cookie时候可以指定路径，只允许子路径读取外层cookie，外层不能读取内层
