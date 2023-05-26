---
title: JavaScript-Date
order: 17
---

Date对象是JS提供的专门用来获取时间的

## new Date()

`new Date()` 在不传递参数的情况下是默认返回当前时间

```javascript
var time = new Date()
console.log(time) // 当前时间 Fri Mar 01 2019 13:11:23 GMT+0800 (中国标准时间)
```

`new Date()` 在传入参数的时候，可以获取到一个你传递进去的时间

```javascript
var time = new Date('2019-03-03 13:11:11')
console.log(time) // Sun Mar 03 2019 13:11:11 GMT+0800 (中国标准时间)
```

`new Date()` 传递的参数有多种情况

1. 传递两个数字，第一个表示年，第二个表示月份

   ```javascript
   var time = new Date(2019, 00) // 月份从 0 开始计数，0 表示 1月，11 表示 12月
   console.log(time) // Tue Jan 01 2019 00:00:00 GMT+0800 (中国标准时间)
   ```

2. 传递三个数字，前两个不变，第三个表示该月份的第几天，从 1 到 31

   ```javascript
   var time = new Date(2019, 00, 05) 
   console.log(time) // Sat Jan 05 2019 00:00:00 GMT+0800 (中国标准时间)
   ```

3. 传递四个数字，前三个不变，第四个表示当天的几点，从 0 到 23

   ```javascript
   var time = new Date(2019, 00, 05, 22) 
   console.log(time) // Sat Jan 05 2019 22:00:00 GMT+0800 (中国标准时间)
   ```

4. 传递五个数字，前四个不变，第五个表示的是该小时的多少分钟，从 0 到 59

   ```javascript
   var time = new Date(2019, 00, 05, 22, 33) 
   console.log(time) // Sat Jan 05 2019 22:33:00 GMT+0800 (中国标准时间)
   ```

5. 传递六个数字，前五个不变，第六个表示该分钟的多少秒，从 0 到 59

   ```javascript
   var time = new Date(2019, 00, 05, 22, 33, 55) 
   console.log(time) // Sat Jan 05 2019 22:33:55 GMT+0800 (中国标准时间)
   ```

6. 传入字符串的形式

   ```javascript
   console.log(new Date('2019')) 
   // Tue Jan 01 2019 08:00:00 GMT+0800 (中国标准时间)
   console.log(new Date('2019-02')) 
   // Fri Feb 01 2019 08:00:00 GMT+0800 (中国标准时间)
   console.log(new Date('2019-02-03')) 
   // Sun Feb 03 2019 08:00:00 GMT+0800 (中国标准时间)
   console.log(new Date('2019-02-03 13:')) 
   // Sun Feb 03 2019 13:00:00 GMT+0800 (中国标准时间)
   console.log(new Date('2019-02-03 13:13:')) 
   // Sun Feb 03 2019 13:13:00 GMT+0800 (中国标准时间)
   console.log(new Date('2019-02-03 13:13:13')) 
   // Sun Feb 03 2019 13:13:13 GMT+0800 (中国标准时间)
   ```

## 将日期字符串格式化成指定内容

我们得到的时间字符串是 `Sun Feb 03 2019 13:13:13 GMT+0800 (中国标准时间)`，我只想得到这个日期中是哪一年，我们就要靠截取字符串的形式得到，但是现在 `js` 为我们提供了一系列的方法来得到里面的指定内容

### getFullYear

`getFullYear()` 方式是得到指定字符串中的哪一年

```javascript
var time = new Date(2019, 03, 03, 08, 00, 22)
console.log(time.getFullYear()) // 2019
```

### getMonth

`getMonth()` 方法是得到指定字符串中的哪一个月份 

```javascript
var time = new Date(2019, 03, 03, 08, 00, 22)
console.log(time.getMonth()) // 3
```

这里要有一个注意的地方，月份是从 0 开始数的，0 表示 1月，1 表示 2月，依此类推

### getDate

`getDate()` 方法是得到指定字符串中的哪一天

```javascript
var time = new Date(2019, 03, 03, 08, 00, 22)
console.log(time.getDate()) // 3
```

### getHours

`getHours()` 方法是得到指定字符串中的哪小时

```javascript
var time = new Date(2019, 03, 03, 08, 00, 22)
console.log(time.getHours()) // 8
```

### getMinutes

`getMinutes()` 方法是得到指定字符串中的哪分钟

```javascript
var time = new Date(2019, 03, 03, 08, 00, 22)
console.log(time.getMinutes()) // 0
```

### getSeconds

`getSeconds()` 方法是得到指定字符串中的哪秒钟

```javascript
var time = new Date(2019, 03, 03, 08, 00, 22)
console.log(time.getSeconds()) // 22
```

### getDay

`getDay()` 方法是得到指定字符串当前日期是一周中的第几天（周日是 0，周六是 6）

```javascript
var time = new Date(2019, 03, 08, 08, 00, 22)
console.log(time.getDay()) // 1
```

### getTime

`getTime()` 方法是得到执行时间到 `格林威治时间` 的毫秒数，即时间戳

```javascript
var time = new Date(2019, 03, 08, 08, 00, 22)
console.log(time.getTime()) // 1554681622000
```

其他获取时间戳方法：

1. `+new Date()` 方法：

   ```js
   console.log(+new Date())
   ```

2. `now()` 方法：
   无需实例化，但是只能得到当前的时间戳

   ```js
   console.log(Date.now())
   ```

## 获取时间差

是指获取两个时间点之间相差的时间，在JS中是不能用时间直接做 减法 的，我们需要一些特殊的操作，在编程的世界里面，有一个特殊的时间，是 `1970年01月01日00时00分00秒`，这个时间我们叫做 `格林威治时间`，所有的编程世界里面，这个时间都是一样的，而且 `格林威治时间` 的数字是 0，从 `格林威治时间` 开始，每经过1毫秒，数字就会 `+ 1`，所以我们可以获取到任意一个时间节点到 `格林威s
