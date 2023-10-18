---
title: JavaScript基础
order: 2
---

## 1. 变量类型

### 1. 值类型和引用类型

```js
// 值类型
let a = 100;
let b = a;
a = 200;
console.log(b); // 100
```

```js
// 引用类型
let a = { age: 20 };
let b = a;
b.age = 21;
console.log(a.age); // 21
```

常见值类型：

```js
let a; // undefined
const s = 'abc';
const n = 100;
const b = true;
const s = Symbol('s');
```

常见引用类型：

```js
const obj = { x: 100 };
const arr = ['a', 'b', 'c'];
const n = null; // 特殊引用类型，指针指向为空地址
function fn() {} // 特殊引用类型，但不用于存储数据，所以没有“拷贝、复制函数”这一说
```

### 2. 类型判断

typeof 作用

- 能判断所有值类型
- 能判断函数
- 能识别引用类型，仅此而已

```js
// 判断所有值类型
let a;
console.log(a); // 'undefined'
const str = 'abc';
typeof str;  // 'string'
const n = 100;
typeof n; // 'number'
const b = true;
typeof b; // 'boolean'
const s = Symbol('s');
typeof s; // 'symbol'
```

```js
// 能判断函数
typeof console.log; // 'function'
typeof function () {};// 'function'

// 能识别引用类型（不能再继续识别）
typeof null; // 'object'
typeof ['a', 'b']; // 'object'
typeof { x: 100 }; // 'object'
```

## 2. 变量计算

变量计算一般用于值类型，引用类型会通过 API 来修改数据

- 数字加减乘除
- 字符串拼接
- 逻辑运算 `&&` 、`||`、`!`、`==`、`if`、`else`

这其中，会隐含比较大的坑 —— **强制类型转换**

### 1. 字符串拼接（ + 号）

```javascript
const a = 100 + 10;   // 110
const b = 100 + '10'; // '10010'
const c = true + '10'; // 'true10'
```

### 2. == 和 ===

```javascript
// == 会尝试强制类型转换
100 == '100';   // true
0 == '';  // true
0 == false; // true
false == ''; // true
null == undefined;  // true
```

总之，`==` 会尝试进行强制类型转换，至于转换的规则大家没必要记忆，只需要记住一点：所有的地方都用 `===` 除了判断是 null 或者 undefined 时用 `if (obj.a == null)` 

```js
const obj = { x: 100 };
if (obj.a == null) { }
// 相当于：
if (obj.a === null || obj.a === undefined) { }
```

### 3. 逻辑运算

首先认识一个概念

- **falsely 变量**，即 `!!a === false` 的
- **truely 变量**，即 `!!a === true` 的

falsely 变量有如下，（其余的就是 truely 变量）

- `0`
- `NaN`
- `''`
- `null`
- `undefined`
- `false` 本身

所有的逻辑运算中，都会用这个规则去判断 true 或者 false

```javascript
// truely 变量
const a = true;
if (a) {
    // ....
}
const b = 100;
if (b) {
    // ....
}

// falsely 变量
const c = '';
if (c) {
    // ....
}
const d = null;
if (d) {
    // ...
}
let e;
if (e) {
    // ...
}
```

```js
// 逻辑运算的示例
console.log(10 && 0);  // 0 左边为fals就断路
console.log('' || 'abc');  // 'abc' //左边为true就断路
console.log(!window.abc);  // true
```

## 3. 深拷贝

依赖于类型判断

```js
// 深拷贝
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null ) {
        // 不是对象或者数组形式，或是 null ，直接返回
        return obj;
    }

    // 初始化返回结果
    let result;
    if (obj instanceof Array) {
        result = [];
    } else {
        result = {};
    }

    // 变量
    for (let key in obj) {
        // 保证不是原型属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用
            result[key] = deepClone(obj[key]);
        }
    }

    // 返回结果
    return result;
}

const obj1 = { x: 100, y: 200 };
const obj2 = deepClone(obj1);
obj1.x = 101;
console.log(obj2); // x: 100
```

为何计算机不默认把引用类型赋值作为深拷贝？

- 耗费性能
- 占用空间

