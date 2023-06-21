---
title: 数组
order: 13
---

数组字面理解就是**数字的组合**，准确的来说数组是一个**数据的集合**

也就是我们把一些数据放在一个盒子里面，按照顺序排好

```javascript
[1, 2, 3, 'hello', true, false]
```

## 1. 创建数组

###  1.1 字面量创建数组

直接使用 `[]` 的方式创建一个数组

```javascript
// 创建一个空数组
var arr1 = []

// 创建一个有内容的数组
var arr2 = [1, 2, 3]
```

### 1.2 内置构造函数创建数组

使用 `JS` 的内置构造函数 `Array` 创建一个数组

```javascript
// 创建一个空数组
var arr1 = new Array()

// 创建一个长度为 10 的数组
var arr2 = new Array(10)

// 创建一个有内容的数组
var arr3 = new Array(1, 2, 3)
```

## 2. 数组的长度

`length` 表示数组的长度，数组里面有多少个成员，`length` 就是多少

```javascript
// 创建一个数组
var arr = [1, 2, 3]

console.log(arr.length) // 3
```

## 3. 数组的索引

索引，也叫做下标，是指一个数据在数组里面排在第几个的位置

注意： **在所有的语言里面，索引都是从 0 开始的**，在 `JS` 里面也一样，数组的索引从 0 开始

```javascript
// 创建一个数组
var arr = ['hello', 'world']
```

上面这个数组中，**第 0 个** 数据就是字符串 `hello`，**第 1 个** 数据就是字符串 `world`，想获取数组中的第几个就使用 `数组[索引]` 来获取

```javascript
var arr = ['hello', 'world']

console.log(arr[0]) // hello
console.log(arr[1]) // world
```

## 4. 数组的常用方法

### 4.1 push

`push` 是用来在数组的末尾追加一个元素

```javascript
var arr = [1, 2, 3]

// 使用 push 方法追加一个元素在末尾
arr.push(4)

console.log(arr) // [1, 2, 3, 4]
```

### 4.2 pop

`pop` 是用来删除数组末尾的一个元素

```javascript
var arr = [1, 2, 3]

// 使用 pop 方法删除末尾的一个元素
arr.pop()

console.log(arr) // [1, 2]
```

### 4.3 unshift

`unshift` 是在数组的最前面添加一个元素

```javascript
var arr = [1, 2, 3]

// 使用 unshift 方法想数组的最前面添加一个元素
arr.unshift(4)

console.log(arr) // [4, 1, 2, 3]
```

### 4.4 shift

`shift` 是删除数组最前面的一个元素

```javascript
var arr = [1, 2, 3]

// 使用 shift 方法删除数组最前面的一个元素
arr.shift()

console.log(arr) // [2, 3]
```

### 4.5 splice

`splice` 是截取数组中的某些内容，按照数组的索引来截取

语法： `splice(从哪一个索引位置开始，截取多少个，替换的新元素)` （第三个参数可以不写）

```javascript
var arr = [1, 2, 3, 4, 5]

// 使用 splice 方法截取数组
arr.splice(1, 2)

console.log(arr) // [1, 4, 5]
```

`arr.splice(1, 2)` 表示从索引 1 开始截取 2 个内容，第三个参数没有写，就是没有新内容替换掉截取位置

```javascript
var arr = [1, 2, 3, 4, 5]

// 使用 splice 方法截取数组
arr.splice(1, 2, '我是新内容')

console.log(arr) // [1, '我是新内容', 4, 5]
```

`arr.splice(1, 2, '我是新内容')` 表示从索引 1 开始截取 2 个内容，然后用第三个参数把截取完空出来的位置填充

### 4.6 reverse

`reverse` 是用来反转数组使用的

```javascript
var arr = [1, 2, 3]

// 使用 reverse 方法来反转数组
arr.reverse()

console.log(arr) // [3, 2, 1]
```

### 4.7 sort

`sort` 是用来给数组排序的

```javascript
var arr = [2, 3, 1]

// 使用 sort 方法给数组排序
arr.sort()

console.log(arr) // [1, 2, 3]
```

### 4.8 concat

`concat` 是把多个数组进行拼接

和之前的方法有一些不一样的地方，就是 `concat` 不会改变原始数组，而是返回一个新的数组

```javascript
var arr = [1, 2, 3]

// 使用 concat 方法拼接数组
var newArr = arr.concat([4, 5, 6])

console.log(arr) // [1, 2, 3]
console.log(newArr) // [1, 2, 3, 4, 5, 6]
```

注意： **`concat` 方法不会改变原始数组**

### 4.9 join

`join` 是把数组里面的每一项内容链接起来，变成一个字符串，可以自己定义每一项之间链接的内容 `join(要以什么内容链接)`，不会改变原始数组，而是把链接好的字符串返回

```javascript
var arr = [1, 2, 3]

// 使用 join 链接数组
var str = arr.join('-')

console.log(arr) // [1, 2, 3]
console.log(str) // 1-2-3
```

注意： **join 方法不会改变原始数组，而是返回链接好的字符串**

### 4.10 indexOf

`indexOf` 用来找到数组中某一项的索引

语法： `indexOf(你要找的数组中的项)`

```javascript
var arr = [1, 2, 3, 4, 5]

// 使用 indexOf 超找数组中的某一项
var index = arr.indexOf(3)

console.log(index) // 2
```

我们要找的是数组中值为 3 的那一项，返回的就是值为 3 的那一项在该数组中的索引，如果你要找的内容在数组中没有，那么就会返回 -1

```javascript
var arr = [1, 2, 3, 4, 5]

// 使用 indexOf 超找数组中的某一项
var index = arr.indexOf(10)

console.log(index) // -1
```

你要找的值在数组中不存在，那么就会返回 -1

### 4.11 forEach

和 `for` 循环一个作用，就是用来遍历数组的

语法：`arr.forEach(function (item, index, arr) {})`

```javascript
var arr = [1, 2, 3]

// 使用 forEach 遍历数组
arr.forEach(function (item, index, arr) {
  // item 就是数组中的每一项
  // index 就是数组的索引
  // arr 就是原始数组
  console.log('数组的第 ' + index + ' 项的值是 ' + item + '，原始数组是', arr)
})
```

`forEach()` 的时候传递的那个函数，会根据数组的长度执行，数组的长度是多少，这个函数就会执行多少回

### 4.12 map

和 `forEach` 类似，只不过可以对数组中的每一项进行操作，返回一个新的数组，用于处理数据

```javascript
var arr = [1, 2, 3]

// 使用 map 遍历数组
var newArr = arr.map(function (item, index, arr) {
  // item 就是数组中的每一项
  // index 就是数组的索引
  // arr 就是原始数组
  return item + 10
})

console.log(newArr) // [11, 12, 13]
```

### 4.13 filter

和 `map` 的使用方式类似，按照我们的条件来筛选数组，把原始数组中满足条件的筛选出来，组成一个新的数组返回，如果没有符合条件的元素则返回空数组，它不会影响原数组

```javascript
var arr = [1, 2, 3]

// 使用 filter 过滤数组
var newArr = arr.filter(function (item, index, arr) {
  // item 就是数组中的每一项
  // index 就是数组的索引
  // arr 就是原始数组
  return item > 1 //筛选条件
})

console.log(newArr) // [2, 3]
```

我们设置的条件就是 `> 1`，返回的新数组就会是原始数组中所有 `> 1` 的项

 
