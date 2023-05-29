---
title: JavaScript-字符串
order: 14
---

## 1. 创建字符串

我们创建字符串也分为两种方法 **字面量** 和 **构造函数**

### 1.1 字面量 

```javascript
var str = 'hello'
```

### 1.2 构造函数创建

```javascript
var str = new String('hello')
```

## 2. 字符集

### 2.1 ASCII 字符集

我们都知道，计算机只能存储 `0101010` 这样的二进制数字，那么我们的 `a ~ z` 、`A ~ Z` 、`$` 、`@`  之类的内容也有由二进制数字组成的，我们可以简单的理解为， `a ~ z` 、 `A ~ Z`、 `$` 、 `@`之类的内容都有一个自己的编号，然后在计算机存储的时候，是存储的这些编号，我们看的时候，也是通过这些编号再解析成我们要看到的内容

### 2.1 unicode 编码

我们看到了，`ASCII` 只有这 `128` 个字符的编码结构，但是因为 `ASCII` 出现的比较早，而且是美国发明的，早先时候这些内容就够用了，因为存储一些英文的内容，传递一些英文的文章什么的都够用了，那么对于这个世界来说肯定是不够用的，因为我们的汉字没有办法存储，包括一些其他国家的语言也没有办法存储，所以就出现了 `unicode` 编码，也叫（万国码，统一码），`unicode` 对照表就是一个和 `ASCII` 一样的对照表，只不过变得很大很大，因为存储的内容特别的多，而且包含了世界上大部分国家的文字，所以我们的文字和字符现在在存储的时候，都是按照 `unicode` 编码转换成数字进行存储，我们的 `UTF-8` 就是一种 `8 位的 unicode` 字符集

## 3. 字符串的常用方法

字符串和数组有一个相同的特点，即字符串也是按照索引来排列的

### 3.1 charAt

`charAt(索引)`  是找到字符串中指定索引位置的内容并返回

```javascript
var str = 'Jack'

// 使用 charAt 找到字符串中的某一个内容
var index = str.charAt(2)

console.log(index) // c
```

因为字符串也是按照索引进行排列的，也是同样从 0 开始，所以索引 2 的位置就是 `c`

如果没有对应的索引，那么就会返回 空字符串

```javascript
var str = 'Jack'

// 使用 charAt 找到字符串中的某一个内容
var index = str.charAt(10)

console.log(index) // ''
```

这个字符串根本没有索引 10 的位置，所以就会返回一个空字符串 `''`

### 3.2 charCodeAt

`charCodeAt(索引)` 就是返回对应索引位置的 `unicode` 编码

```javascript
var str = 'Jack'

// 使用 charAt 找到字符串中的某一个内容
var index = str.charCodeAt(0)

console.log(index) // 74
```

因为 `J` 在 `unicode` 对照表里面存储的是 74，所以就会返回 74

### 3.3 indexOf

`indexOf` 就是按照字符找到对应的索引

```javascript
var str = 'Jack'

// 使用 indexOf 找到对应的索引
var index = str.indexOf('J')

console.log(index) // 0
```

因为字符 `J` 在字符串 `Jack` 中的索引位置是 0，所以会返回 0

### 3.4 substring

`substring` 是用来截取字符串使用的

语法： `substring(从哪个索引开始，到哪个索引截止)`，包含开始索引，不包含结束索引

```javascript
var str = 'hello'
//         01234

// 使用 substring 截取字符串
var newStr = str.substring(1, 3)

console.log(newStr) // el
```

从索引 1 开始，到索引 3 截止，包含前面的索引不包含后面的索引，所以返回的是 el

### 3.5 substr

`substr` 也是用来截取字符串的

语法：`substr(从哪个索引开始，截取多少个)`

```javascript
var str = 'hello'
//         01234

// 使用 substr 截取字符串
var newStr = str.substr(1, 3)

console.log(newStr) // ell
```

这个方法和 `substring` 不一样的是，第二个参数是截取多少个，从索引 1 开始，截取 3 个，所以得到的是 `ell`

### 3.6 toLowerCase和toUpperCase

这两个方法分别使用用来给字符串转成 **小写字母** 和 **大写字母** 的

```javascript
var str = hello

// 使用 toUpperCase 转换成大写
var upper = str.toUpperCase()

console.log(upper) // HELLO

// 使用 toLowerCase 转换成小写
var lower = upper.toLowerCase()

console.log(lower) // hello
```
