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

总之，`==` 会尝试进行强制类型转换，至于转换的规则大家没必要记忆，只需要记住一点：所有的地方都用 `===` 除了判断是 null 或者 undefined 时用 `==`

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

1. 首先，判断传入的参数 `obj` 的类型。如果它不是对象或者为 `null`，则直接返回 `obj`。
2. 然后，根据 `obj` 是否为数组来初始化返回结果 `result` 。如果是数组，则将 `result` 初始化为一个空数组；否则，初始化为一个空对象。
3. 使用 `for...in` 循环遍历 `obj` 的所有属性。需要注意的是，在遍历前需要确保属性 `key` 不是原型链上的属性，通过 `obj.hasOwnProperty(key)` 来判断。
4. 在循环过程中，递归调用 `deepClone(obj[key])`，对属性值进行深拷贝，并将拷贝结果赋值给 `result[key]` 。
   + 使用 `for...in` 循环遍历对象时，会遍历对象的自身属性以及继承属性。为了只处理对象自身的属性，而不包括继承属性，需要通过 `obj.hasOwnProperty(key)` 来判断属性 `key` 是否是对象的自身属性。`obj.hasOwnProperty(key)` 方法返回一个布尔值，如果对象具有指定名称的自身属性，则返回 `true`，否则返回 `false`。在进行深拷贝时，我们希望只复制对象自身的属性，而不复制继承属性。因此，在遍历对象的属性时，通过 `obj.hasOwnProperty(key)` 来过滤掉继承属性，只处理自身属性。
5. 最后，返回深拷贝后的对象 `result` 。

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

## 4. class

```js
// 声明一个类
class Student {
    constructor(name, number) {
        // 属性
        this.name = name;
        this.number = number;
    }
    // 方法
    sayHi() {
        console.log(`我的姓名是${this.name},学号为${this.number}`);
    }
}

// 用类来声明对象，new一个对象/实例
let jack = new Student('杰克', 1);
jack.sayHi();
let mack = new Student('麦克', 2);
mack.sayHi();
```

结果：

```js
我的姓名是杰克,学号为1
我的姓名是麦克,学号为2
```

## 5. 继承

```js
// 父类
class People {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name}在吃东西`);
    }
}

// 子类
class Student extends People {
    constructor(name, number) {
        super(name);
        this.number = number;
    }
    sayHi() {
        console.log(`我的姓名是${this.name},学号为${this.number}`);
    }
}
// 子类
class Teacher extends People {
    constructor(name, major) {
        super(name);
        this.major = major;
    }
    teach() {
        console.log(`${this.name}老师教你${this.major}`);
    }
}

const jack = new Student('杰克', 1);
jack.sayHi();
jack.eat();
const spike = new Teacher('斯派克', '飞镖');
spike.teach();
spike.eat();
```

结果：

```js
我的姓名是杰克,学号为1
杰克在吃东西
斯派克老师教你飞镖
斯派克在吃东西
```

## 6. 类型判断

引用类型使用`instanceof`来判断类型

```js
jack instanceof Student; // true
jack instanceof People; // true
jack instanceof Object; // true

[] instanceof Array; // true
[] instanceof Object; // true

{} instanceof Object; // true
```

## 7. 原型

```js
// class 实际上是函数，可见是语法糖
typeof People; // 'function'
typeof Student; // 'function'
```

```js
// 隐式原型和显示原型
console.log( jack.__proto__ ); // People {}
console.log( Student.prototype ); // People {}
console.log( jack.__proto__ === Student.prototype ); // true
```

显示原型（prototype）和隐式原型（\_\_proto\_\_）的关系：

- 每个 class 都有 prototype 显示原型
- 每个实例都有 \_\_proto\_\_ 隐式原型
- 实例的 \_\_proto\_\_ 指向对应 class 的 prototype

基于原型的执行逻辑

- 执行实例方法时，如 `jack.sayHi();`
- 会先从实例自身属性查找（可通过 `hasOwnProperty()` （该方法返回一个布尔值，表示对象自有属性（而不是继承来的属性）中是否具有指定的属性）判断）
- 如果找不到则自动去 \_\_proto\_\_ 查找

## 8. 原型链

```js
console.log( Student.prototype.__proto__ ); // {}
console.log( People.prototype ); // {}
console.log( People.prototype === Student.prototype.__proto__ ); // true
```

## 9. 作用域

所谓作用域，即一个变量的合法使用范围

作用域分类

- 全局作用域：在全局定义的变量，全局都可用

- 函数作用域：在某个函数中定义的变量，只能用于当前函数

- 块级作用域（ES6）：只能活跃于当前的块，示例如下

  ```js
  // ES6 块级作用域
  if (true) {
      let x = 100;
  }
  console.log(x); // 会报错
  ```

## 10. 自由变量

自由变量是指在一个函数或代码块中引用了但未在该函数或代码块内部进行定义的变量

一个变量在该作用域没有被定义，但被使用，会向上级作用域去寻找该变量，层层往上找

## 11. 闭包

闭包 —— 作用域应用的一个特殊情况。一般有两种书写形式：

+ 函数作为返回值

  ```js
  // 函数作为返回值
  function create() {
      let a = 100;
      return function () {
          console.log(a);
      }
  }
  let fn = create();
  let a = 200;
  fn(); // 100
  ```

- 函数作为参数被传入

  ```js
  // 函数作为参数
  function print(fn) {
      let a = 100;
      fn();
  }
  let a = 200;
  function fn() {
      console.log(a);
  }
  print(fn); // 200
  ```

自由变量要在**函数定义的地方（不是执行的地方）**去寻找上级作用域！！！

## 12. 闭包用途

```js
// 隐藏数据，只提供 API
function createCache() {
    let data = {}; //闭包中的数据，被隐藏，不被外界访问
    return {
        set: function (key, val) {
            data[key] = val;
        },
        get: function (key) {
            return data[key];
        },
    };
}

let c = createCache();
c.set('a', 100);
console.log(c.get('a'));
```

## 13. this

- 作为普通函数调用
- 使用 `call` `apply` `bind`
- 作为对象方法调用
- 在 class 的方法中调用
- 箭头函数

```js
// this 场景1
function fn1() {
    console.log(this); // Window
}
fn1();

fn1.call({ x: 100 }); // {x:100}

const fn2 = fn1.bind({ x: 200 }); // {x:200}
fn2();

// this 场景2
const zhangsan = {
    name: '张三',
    sayHi() {
        console.log(this); // zhangsan
    },
    wait() {
        setTimeout(function () {
            console.log(this); // Window
        }, 1000);
    },
    waitAgain() {
        setTimeout(() => {
            console.log(this); // zhangsan
        }, 1000);
    },
};

zhangsan.sayHi();
zhangsan.wait();
zhangsan.waitAgain();

// this 场景3
class People {
    constructor(name) {
        this.name = name;
        this.age = 20;
    }
    sayHi() {
        console.log(this); // People
    }
}

const lisi = new People('张三');
lisi.sayHi();
```

## 14. 手写bind函数

bind函数的使用：

```js
function fn1(a, b) {
    console.log('this为', this);
    console.log(a, b);
}

const fn2 = fn1.bind({ x: 100 }, 10, 20); //bind返回一个函数，并改变this指向
fn2();
```

手写bind：

```js
Function.prototype.myBind = function () {
    // 将参数解析为数组
    const args = Array.prototype.slice.call(arguments);
    // 获取this（取出数组第一项，数组剩余的就是传递的参数）
    const t = args.shift();
    const self = this; //当前函数
    // 返回一个函数
    return function () {
        // 执行原函数，并返回结果
        return self.apply(t, args);
    };
};
```

## 15. 单线程和异步

单线程

- JS 是单线程语言，没法创建线程（简单来说，只能同时做一件事，没法先等待一件事儿，然后同时做另外一件事）
- JS 可启动进程，来同时做多件事，如 Web Worker
- JS 执行和 DOM 渲染也是同一个线程

异步

- 如果有等待的情况（网络请求、定时任务），不能卡住，需要异步
- 使用回调函数实现

```js
// 异步
console.log(100);
setTimeout(function () {
    console.log(200);
}, 1000)
console.log(300);
```

结果：

```js
100
300
200
```

```js
// 同步
console.log(100);
alert(200);
console.log(300);
```

结果：

```js
100
200
300
```

同步和异步

- 基于单线程
- 异步不会阻塞代码运行
- 同步会阻塞代码运行

## 16. 异步应用场景

哪些地方可能会阻塞呢？

- 网络请求，如 Ajax 图片加载
- 定时任务，如 setTimeout

```js
// Ajax
console.log('start');
$.get('./data1.json', function (data1) {
    console.log(data1);
})
console.log('end');
```

```js
// 图片加载
console.log('start');
let img = document.createElement('img');
img.onload = function () {
    console.log('loaded');
}
img.src = '/xxx.png';
console.log('end');
```

```js
// setTimeout
console.log(100);
setTimeout(function () {
    console.log(200);
}, 1000)
console.log(300);
```

```js
// setInterval
console.log(100);
setInterval(function () {
    console.log(200);
}, 1000)
console.log(300);
```

## 17. callback hell

容易出现回调地狱，当前请求依赖上一个请求的结果

```js
const url1 = '/data1.json';
const url2 = '/data2.json';
const url3 = '/data3.json';

// 获取第一份数据
$.get(url1, (data1) => {
    console.log(data1);

    // 获取第二份数据
    $.get(url2, (data2) => {
        console.log(data2);

        // 获取第三份数据
        $.get(url3, (data3) => {
            console.log(data3);

            // 还可能获取更多的数据
        });
    });
});
```

## 18. Promise

```js
function getData(url) {
    return new Promise((resolve, reject) => {
        $.get(url, (data) => {
            resolve(data);
        })
    })
}
const url1 = '/data1.json';
const url2 = '/data2.json';
const url3 = '/data3.json';
getData(url1).then(data1 => {
    console.log(data1);
    return getData(url2);
}).then(data2 => {
    console.log(data2);
    return getData(url3);
}).then(data3 => {
    console.log(data3);
})
```

