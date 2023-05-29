---
title: JavaScript-定时器
order: 18
---

在 `JS` 里面，有两种定时器，**倒计时定时器** 和 **间隔定时器**

## 1. 倒计时定时器

倒计时多少时间以后执行函数

语法： `setTimeout(要执行的函数，多长时间以后执行)`

会在你设定的时间以后，执行函数

```javascript
var timerId = setTimeout(function () {
  console.log('我执行了')
}, 1000)
console.log(timerId) // 1
```

时间是按照毫秒进行计算的，1000 毫秒就是 1秒钟，所以会在页面打开 1 秒钟以后执行函数，只执行一次，就不再执行了，返回值是当前这个定时器是页面中的第几个定时器，表示定时器的编号

## 2. 间隔定时器

每间隔多少时间就执行一次函数

语法： `setInterval(要执行的函数，间隔多少时间)`

```javascript
var timerId = setInterval(function () {
  console.log('我执行了')
}, 1000)
```

时间和刚才一样，是按照毫秒进行计算的，每间隔 1 秒钟执行一次函数，只要不关闭，会一直执行，返回值是，当前这个定时器是页面中的第几个定时器，表示定时器的编号

## 3. 定时器的返回值

设置定时器的时候，它的返回值是部分 `setTimeout` 和 `setInterval` 的

只要有一个定时器，那么就是一个数字

```javascript
var timerId = setTimeout(function () {
  console.log('倒计时定时器')
}, 1000)

var timerId2 = setInterval(function () {
  console.log('间隔定时器')
}, 1000)

console.log(timerId) // 1
console.log(timerId2) // 2
```

## 4. 关闭定时器

我们刚才提到过一个 `timerId`，是表示这个定时器是页面上的第几个定时器

这个 `timerId` 就是用来关闭定时器的数字

我们有两个方法来关闭定时器 `clearTimeout` 和 `clearInterval`

```javascript
var timerId = setTimeout(function () {
  console.log('倒计时定时器')
}, 1000)
clearTimeout(timerId)
```

关闭以后，定时器就不会再执行了

```javascript
var timerId2 = setInterval(function () {
  console.log('间隔定时器')
}, 1000)
coearInterval(timerId2)
```

关闭以后定时器就不会再执行了

原则上是`clearTimeout` 关闭 `setTimeout`，`clearInterval` 关闭 `setInterval`，但是其实是可以通用的，他们可以混着使用

```javascript
var timerId = setTimeout(function () {
  console.log('倒计时定时器')
}, 1000)
// 关闭倒计时定时器
clearInterval(timerId)

var timerId2 = setInterval(function () {
  console.log('间隔定时器')
}, 1000)
// 关闭间隔定时器
clearTimeout(timerId2)
```
