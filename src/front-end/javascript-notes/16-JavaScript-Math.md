---
title: JavaScript-Math
order: 16
---

Math 是 JS 的一个内置对象，称为数学对象，提供了一堆的属性和方法帮助我们操作 **数字**

## 常用方法

### random

`Math.random()` 这个方法是用来生成一个 `0 ~ 1` 之间的随机数，每次执行生成的数字都不一样，但是一定是 `0 ~ 1` 之间的，**生成的数字包含 0 ，但是不包含 1**

```javascript
var num = Math.random()
console.log(num) // 得到一个随机数
```

```js
//生成0~10的随机数
Math.floor(Math.random() * 11)
//生成N~M之间的随机数
Math.floor(Math.random() * (M - N + 1)) + N
```

### round

`Math.round()` 是将一个小数 **四舍五入** 变成一个整数

```javascript
var num = 10.1
console.log(Math.round(num)) // 10

var num2 = 10.6
console.log(Math.round(num2)) // 11
```

### abs

`Math.abs()` 是返回一个数字的 **绝对值**

```javascript
var num = -10
console.log(math.abs(num)) // 10
```

### ceil

`Math.ceil()` 是将一个小数 **向上取整** 得到的整数

```javascript
var num = 10.1
console.log(Math.ceil(num)) // 11

var num2 = 10.9
console.log(Math.ceil(num2)) // 11
```

### floor

`Math.floor()` 是将一个小数 **向下取整** 的到的整数

```javascript
var num = 10.1
console.log(Math.floor(num)) // 10

var num2 = 10.9
console.log(Math.floor(num2)) // 10
```

### max

`Math.max()` 得到的是你传入的几个数字之中 **最大** 的那个数字

```javascript
console.log(Math.max(1, 2, 3, 4, 5)) // 5
```

### min

`Math.min()` 得到的是你传入的几个数字之中 **最小** 的那个数字

```javascript
console.log(Math.min(1, 2, 3, 4, 5)) // 1
```

### pow

`Math.pow()`求某个数的多少次方

```js
// 求 4 的 2 次方
console.log(Math.pow(4, 2)) // 16
// 求 2 的 3 次方
console.log(Math.pow(2, 3)) // 8
```

### sqrt

`Math.sqrt()`求某数的平方根

```js
console.log(Math.sqrt(16))// 4
```

## 常用属性

### PI

`Math.PI` 得到的是 `π` 的值，也就是 `3.1415936...`

```javascript
console.log(Math.PI) // 3.141592653589793
```

因为计算机的计算精度问题，只能得到小数点后 15 位，**使用 Math.PI 的时候，是不需要加 () 的**