---
title: ES6~ES13
order: 26
---

## 1. ES6

### 1. 初识ES6

> ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言

-  1997年：ECMAScript 1.0

-  1998年：ECMAScript 2.0

-  1999年：ECMAScript 3.0

-  2006年：ECMAScript 4.0 未通过

-  2009年：ECMAScript 5.0

-  2015年：ECMAScript 6.0

-  至今，版本号改用年号的形式

### 2. let和const关键字

我们以前都是使用 `var` 关键字来声明变量的，在 ES6 的时候，多了两个关键字 `let` 和 `const`，也是用来声明变量的

`let`、`const`与`var`的区别：

1. `let` 和 `const` 不允许重复声明变量

   ```javascript
   // 使用 var 的时候重复声明变量是没问题的，只不过就是后面会把前面覆盖掉
   var num = 100;
   var num = 200;
   ```

   ```javascript
   // 使用 let 重复声明变量的时候就会报错了
   let num = 100;
   let num = 200; // 这里就会报错了
   ```

   ```javascript
   // 使用 const 重复声明变量的时候就会报错
   const num = 100;
   const num = 200; // 这里就会报错了
   ```

2. `let` 和 `const` 声明的变量不会在预解析的时候解析（也就是没有变量提升）

   ```javascript
   // 因为预解析（变量提升）的原因，在前面是有这个变量的，只不过没有赋值
   console.log(num); // undefined
   var num = 100;
   ```

   ```javascript
   // 因为 let 不会进行预解析（变量提升），所以直接报错了
   console.log(num); // 这里就会报错了
   let num = 100;
   ```

   ```javascript
   // 因为 const 不会进行预解析（变量提升），所以直接报错了
   console.log(num); // 这里就会报错了
   const num = 100;
   ```

3. `let` 和 `const` 声明的变量会被所有代码块限制作用范围

   ```javascript
   // var 声明的变量只有函数能限制其作用域，其他的不能限制
   if (true) {
     var num = 100;
   }
   console.log(num); // 100
   ```

   ```javascript
   // let 声明的变量，除了函数可以限制，所有的代码块都可以限制其作用域（if/while/for/...）
   if (true) {
     let num = 100;
     console.log(num); // 100
   }
   console.log(num); // 报错
   ```

   ```javascript
   // const 声明的变量，除了函数可以限制，所有的代码块都可以限制其作用域（if/while/for/...）
   if (true) {
     const num = 100;
     console.log(num); // 100
   }
   console.log(num); // 报错
   ```

`let` 和 `const` 的区别：

1. `let` 声明的变量的值可以改变，`const` 声明的变量的值不可以改变

   ```javascript
   let num = 100;
   num = 200;
   console.log(num); // 200
   ```

   ```javascript
   const num = 100;
   num = 200; // 这里就会报错了，因为 const 声明的变量值不可以改变（我们也叫做常量）
   ```

2. `let` 声明的时候可以不赋值，`const` 声明的时候必须赋值，建议使用 `const` 来声明数组和对象

   ```javascript
   let num;
   num = 100;
   console.log(num); // 100
   ```

   ```javascript
   const num; // 这里就会报错了，因为 const 声明的时候必须赋值
   ```

### 3. 展开运算符

ES6 里面号新添加了一个运算符 `...` ，叫做展开运算符

作用：

1. 把数组展开，不会修改原数组

   ```js
   let arr = [1, 2, 3, 4, 5];
   console.log(...arr); // 1 2 3 4 5
   ```

2. 合并数组的时候可以使用

   ```js
   let arr = [1, 2, 3, 4];
   let arr2 = [...arr, 5];
   console.log(arr2);
   ```

3. 也可以合并对象使用

   ```js
   let obj = {
     name: 'Jack',
     age: 18
   };
   let obj2 = {
     ...obj,
     gender: '男'
   };
   console.log(obj2);
   ```

4. 在函数传递参数的时候也可以使用

   ```js
   let arr = [1, 2, 3];
   function fn(a, b, c) {
     console.log(a);
     console.log(b);
     console.log(c);
   }
   fn(...arr);
   // 等价于 fn(1, 2, 3)
   ```

### 4. 解构赋值

解构赋值，就是快速的从对象或者数组中取出成员的一个语法方式

#### 1. 数组解构

快速的从数组中获取成员

```javascript
// ES5 的方式从数组中获取成员
const arr = [1, 2, 3];
let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

```javascript
// 使用解构赋值的方式从数组中获取成员
const arr = [1, 2, 3];

// 前面的 [] 表示要从 arr 这个数组中获取成员
// a b c 分别对应这数组中的索引 0 1 2
// arr 必须是一个数组
let [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

```js
// 数组解构的典型应用——交换两个变量的值
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a,b); //2 1
```

```js
//数组解构的一些特殊情况——变量多，单元值少
const [a,b,c,d] = [1,2,3];
console.log(a,b,c,d); //1  2  3  undefined

//为此防止有undefined传递单元值的情况，可以设置默认值
const [x=0,y=0] = [1];
console.log(x); //1
console.log(y); //0
```

```js
//数组解构的一些特殊情况——变量少，单元值多
const [a,b,...c] = [1,2,3,4,5];
console.log(a); //1
console.log(b); //2
console.log(c); //[3,4,5]
  
//为此可以按需导入赋值
const [x,y,,z] = [1,2,3,4];
console.log(x,y,z); //1  2  4
```

总结：

1. 赋值运算符 `=` 左侧的 `[]` 用于批量声明变量，右侧数组的单元值将被赋值给左侧的变量
2. 变量的顺序对应数组单元值的位置依次进行赋值操作
3. 变量的数量大于单元值数量时，多余的变量将被赋值为  `undefined`
4. 变量的数量小于单元值数量时，可以通过 `...` 获取剩余单元值，但只能置于最末位
5. 允许初始化变量的默认值，且只有单元值为 `undefined` 时默认值才会生效
6. 数组解构也支持多维解构赋值

#### 2. 对象解构

快速的从对象中获取成员

```javascript
// ES5 的方法获取对象中的成员
const obj = {
  name: 'Jack',
  age: 18,
  gender: '男'
};

let name = obj.name;
let age = obj.age;
let gender = obj.gender;
```

```javascript
// 解构赋值的方式从对象中获取成员
const obj = {
  name: 'Jack',
  age: 18,
  gender: '男'
};

// 前面的 {} 表示我要从 obj 这个对象中获取成员了
// name age gender 都得是 obj 中有的成员
// obj 必须是一个对象
let { name, age, gender } = obj;
```

```js
// 对象解构的一些语法注意点    
// 对象解构的语法
const obj = {
    uname: '游戏',
    price: 58
};
const {uname,price} = {uname: '游戏', price: 58};
console.log(uname); //相当于uname = obj.uname
console.log(price); //相当于price = obj.price

// 解构的变量名必须与属性名一致
const {uname1,price1} = {uname: '游戏', price: 58};
console.log(uname1); //undefined
console.log(price1); //undefined

// 对象解构变量名更改  旧变量名:新变量名
const {uname:game,price:money} = {uname: '游戏', price: 58};
console.log(game); //游戏
console.log(money); //58

//数组对象解构
const arr = [{uname1: '游戏', price1: 58}];
const [{p,n}] = [{n: '游戏', p: 58}];
console.log(p); //58
console.log(n); //游戏
```

总结：

1. 赋值运算符 `=` 左侧的 `{}` 用于批量声明变量，右侧对象的属性值将被赋值给左侧的变量
2. 对象属性的值将被赋值给与属性名相同的变量
3. 对象中找不到与变量名一致的属性时变量值为 `undefined`
4. 允许初始化变量的默认值，属性不存在或单元值为 `undefined` 时默认值才会生效
5. 对象解构也支持多维解构赋值

### 5. 模版字符串

ES5 中我们表示字符串的时候使用 `''` 或者 `""`，在 ES6 中，我们还有一个东西可以表示字符串，就是` `` `（反引号）

```javascript
let str = `hello world`;
console.log(typeof str); // string
```

反引号与单引号、双引号的区别：

1. 反引号可以换行书写

   ```javascript
   // 这个单引号或者双引号不能换行，换行就会报错了
   let str = 'hello world';
   
   // 下面这个就报错了
   let str2 = 'hello 
   world';
   ```

   ```javascript
   let str = `
   	hello
   	world
   `;
   
   console.log(str); // 是可以使用的
   ```

2. 反引号可以直接在字符串里面拼接变量

   ```javascript
   // ES5 需要字符串拼接变量的时候
   let num = 100;
   let str = 'hello' + num + 'world' + num;
   console.log(str); // hello100world100
   
   // 直接写在字符串里面不好使
   let str2 = 'hellonumworldnum';
   console.log(str2); // hellonumworldnum
   ```

   ```javascript
   // 模版字符串拼接变量
   let num = 100;
   let str = `hello${num}world${num}`;
   console.log(str); // hello100world100
   ```

   里面的 `${}` 就是用来书写变量的位置

### 6. 字符串扩展

#### 1. includes函数

判断字符串中是否存在指定字符

```js
let myname = "kerwin";
console.log(myname.includes("e")); //true
console.log(myname.includes("ker")); //true
console.log(myname.includes("en")); //false
```

可以传入第二个参数，表示按索引值位置开始查找

```js
let myname = "kerwin";
console.log(myname.includes("e",1)); //true
console.log(myname.includes("e",3)); //false
```

#### 2. startsWith函数

判断字符串是否以某字符开头

```js
let myname = "kerwin";
console.log(myname.startsWith("k")); //true
console.log(myname.startsWith("ker")); //true
console.log(myname.startsWith("er")); //false
```

可以传入第二个参数，表示按索引值位置开始查找

```js
let myname = "kerwin";
console.log(myname.startsWith("k",0)); //true
console.log(myname.startsWith("k",2)); //false
```

#### 3. endsWith函数

判断字符串是否以某字符结束

```js
let myname = "kerwin";
console.log(myname.endsWith("n")); //true
console.log(myname.endsWith("in")); //true
console.log(myname.endsWith("k")); //false
```

可以传入第二个参数，表示按索引值位置开始往前查找

```js
let myname = "kerwin";
console.log(myname.startsWith("n",1)); //false
console.log(myname.startsWith("n",5)); //true
```

#### 4. repeat函数

`repeat()`方法返回一个新字符串,表示将原字符串重复n次

````js
let myname = "kerwin";
console.log(myname.repeat(3)); //kerwinkerwinkerwin
console.log(myname.repeat(0)); //"" 
console.log(myname.repeat(3.5)); //kerwinkerwinkerwin
console.log(myname.repeat("3")); //kerwinkerwinkerwin
````

### 7. 数值扩展

#### 1. 进制表示法 

```js
//十进制
let count1 = 100;
//十六进制
let count2 = 0x100;
//八进制
let count3 = 0o100;
//二进制
let count4 = 0b100;
```

#### 2. isFinite与isNaN方法

减少全局性方法，使得语言逐步模块化

```js
let num1 = Number.isFinite(100);
console.log(num1); //true
let num2 = Number.isFinite(100/0); 
console.log(num2); //false
let num3 = Number.isFinite(Infinity);
console.log(num3); // false
let num4 = Number.isFinite("100");
console.log(num4); //false
```

```js
let num1 = Number.isNaN(100);
console.log(num1); // false
let num2 = Number.isNaN(NaN);
console.log(num2); //true
let num3 = Number.isNaN("kerwin");
console.log(num3); //false
let num4 = Number.isNaN("100");
console.log(num4); // false
```

它们与传统的全局方法`isFinite()`和`isNaN()`的区别在于，传统方法先调用`Number()`将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，`Number.isFinite()`对于非数值一律返回false, `Number.isNaN()`只有对于NaN才返回true，非NaN一律返回false

#### 3. isInteger方法

用来判断一个数值是否为整数

```js
let num1 = Number.isInteger(100);
console.log(num1); //true
let num2 = Number.isInteger(100.0);
console.log(num2); //true
let num3 = Number.isInteger("kerwin");
console.log(num3); //false
let num4 = Number.isInteger("100");
console.log(num4); //false
let num5 = Number.isInteger(100.1);
console.log(num5); //false
```

#### 4. 极小常量Number.EPSILON

它表示 1 与大于 1 的最小浮点数之间的差。2.220446049250313e-16

```js
function isEqual(a,b){
        return Math.abs(a-b)<Number.EPSILON;
}

console.log(isEqual(0.1+0.2,0.3)); //true
console.log(0.1+0.2===0.3); //false
```

#### 5. Math.trunc

将小数部分抹掉,返回一个整数

```js
console.log(Math.trunc(1.2)); //1
console.log(Math.trunc(1.8)); // 1
console.log(Math.trunc(-1.8)); //-1
console.log(Math.trunc(-1.2)); //-1
```

#### 6. Math.sign

`Math.sign`方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值

```javascript
Math.sign(-100); // -1
Math.sign(100); // +1
Math.sign(0); // +0
Math.sign(-0); // -0
Math.sign("kerwin"); // NaN
```

### 8. 数组扩展

#### 1. Array.from

将类数组对象转换为真正数组

```js
function test(){
        console.log(Array.from(arguments));
}

test(1,2,3); // [1,2,3]
```

#### 2. Array.of

将一组值转化为数组，即新建数组

```js
let arr1 = Array(3);
console.log(arr1); // [,,]

let arr2 = Array.of(3);
console.log(arr2); // [3]
```

#### 3. find方法

该方法主要应用于查找第一个符合条件的数组元素 

它的参数是一个回调函数。在回调函数中可以写你要查找元素的条件，当条件成立为true时，返回该元素；如果没有符合条件的元素，返回值为undefined 

```js
let arr = [11,12,13,14,15];
let res1 = arr.find(function(item){
    return item>13;
});
let res2 = arr.findIndex(function(item){
    return item>13;
});
console.log(res1); //14
console.log(res2); //3
//findLast() findLastIndex() ES2022
let arr2 = [11,12,13,14,15];
let res3 = arr.findLast(function(item){
    return item>13;
});
let res4 = arr.findLastIndex(function(item){
    return item>13;
});
console.log(res3); //15
console.log(res4); //4
```

#### 4. fill方法

使用自己想要的参数替换原数组内容，但是会改变原来的数组

```js
let arr1 = new Array(3).fill("kerwin");
let arr2 = ['a', 'b', 'c'].fill("kerwin", 1, 2);
console.log(arr1); //['kerwin', 'kerwin', 'kerwin']
console.log(arr2); // ['a', 'kerwin', 'c']
```

#### 5. flat与flatMap方法

按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

```js
let arr = [1,2,3,[4,5,6]];
let arr1 = arr.flat();
console.log(arr,arr1); //[1,2,3,4,5,6]

var obj = [{
                name: "A",
                list: ["鞍山", "安庆", "安阳"]
            },
            {
                name: "B",
                list: ["北京", "保定", "包头"]
            }
];
console.log(obj.flatMap(function(item){
    return item.list
})); // ['鞍山', '安庆', '安阳', '北京', '保定', '包头']
```

### 9. 对象扩展

#### 1. 对象简写

```js
//原写法
let name ="moduleA";
let obj = {
    name:name,
    test1:function(){
        
    },
    test2:function(){
        
    }
};

//简写
let name ="moduleA";
let obj = {
    name,
    test1(){

    },
    test2(){

    }
};
```

#### 2. 属性名表达式

```js
let name ="moduleA";
let obj = {
    name,
    [name+"test1"](){

    },
    [name+"test2"](){

    }
};
console.log(obj); //{name: 'moduleA', moduleAtest1: ƒ, moduleAtest2: ƒ}
```

#### 3. Object.assign

`Object.assign(target, object1，object2)`的第一个参数是目标对象，后面可以跟一个或多个源对象作为参数

target：参数合并后存放的对象

object1：参数1

object2：参数2

```js
const obj = {};
const obj1 = {
    name: "kerwin"
};

const obj2 = {
    name:"tiechui"
};

const obj3 = {
    age:100
};

console.log(Object.assign(obj, obj1, obj2, obj3)); // {name: 'tiechui', age: 100}
```

#### 4. Object.is

方法判断两个值是否是相同的值

```js
// 之前存在的问题：
console.log(NaN===NaN); //false
console.log(+0===-0); //true

//解决：
console.log(Object.is(NaN,NaN)); //true
console.log(Object.is(+0,-0)); //false
```

### 10. 函数扩展

#### 1. 箭头函数

箭头函数是 ES6 里面一个简写函数的语法方式

重点： **箭头函数只能简写函数表达式，不能简写声明式函数**

```javascript
function fn() {} // 不能简写
const fun = function () {} // 可以简写
const obj = {
  fn: function () {} // 可以简写
}
```

语法： `(函数的形参) => { 函数体内要执行的代码 }`

```javascript
const fn = function (a, b) {
  console.log(a);
  console.log(b);
}
// 可以使用箭头函数写成
const fun = (a, b) => {
  console.log(a);
  console.log(b);
}
```

```javascript
const obj = {
  fn: function (a, b) {
    console.log(a);
    console.log(b);
  }
}
// 可以使用箭头函数写成
const obj2 = {
  fn: (a, b) => {
    console.log(a);
    console.log(b);
  }
}
```

#### 2. 箭头函数的特殊性

1. 箭头函数内部没有 this，箭头函数的 this 是上下文的 this

   ```js
   const obj = {
     fn: function () {
       // 在箭头函数定义的位置往上数，这一行是可以打印出 this 的
       // 因为这里的 this 是 window
       // 所以箭头函数内部的 this 就是 window
       console.log(this);
     },
     // 这个位置是箭头函数的上一行，但是不能打印出 this
     fun: () => {
       // 箭头函数内部的 this 是书写箭头函数的上一行一个可以打印出 this 的位置的 this
       console.log(this);
     }
   }
   
   obj.fn();
   obj.fun();
   ```

   按照我们之前的 this 指向来判断，两个都应该指向 obj，但是 fun 因为是箭头函数，所以 this 不指向 obj，而是指向 fun 的外层，就是 window

2. 箭头函数内部没有 `arguments` 这个参数集合

   ```js
   const obj = {
     fn: function () {
       console.log(arguments);
     },
     fun: () => {
       console.log(arguments);
     }
   }
   obj.fn(1, 2, 3); // 会打印一个伪数组 [1, 2, 3]
   obj.fun(1, 2, 3); // 会直接报错
   ```

3. 函数的形参只有一个的时候可以不写 `()` 其余情况必须写

   ```js
   const obj = {
     fn: () => {
       console.log('没有参数，必须写小括号');
     },
     fn2: a => {
       console.log('一个形参，可以不写小括号');
     },
     fn3: (a, b) => {
       console.log('两个或两个以上参数，必须写小括号');
     }
   }
   ```

4. 函数体只有一行代码的时候，可以不写 `{}` ，并且会自动 return

   ```js
   const obj = {
     fn: a => {
       return a + 10;
     },
     fun: a => a + 10;
   }
   
   console.log(fn(10)); // 20
   console.log(fun(10)); // 20
   ```
   
5. 由于箭头函数没有this，所以无法使用call、apply、bind来改变箭头函数的this指向

#### 3. 函数参数默认值

我们在定义函数的时候，有的时候需要一个默认值出现，就是当我不传递参数的时候，使用默认值，传递参数了就使用传递的参数

```javascript
function fn(a) {
  a = a || 10;
  console.log(a);
}
fn(); // 不传递参数的时候，函数内部的 a 就是 10
fn(20); // 传递了参数 20 的时候，函数内部的 a 就是 20
```

在 ES6 中我们可以直接把默认值写在函数的形参位置

```javascript
function fn(a = 10) {
  console.log(a);
}
fn(); // 不传递参数的时候，函数内部的 a 就是 10
fn(20); // 传递了参数 20 的时候，函数内部的 a 就是 20
```

这个默认值的方式箭头函数也可以使用

```javascript
const fn = (a = 10) => {
  console.log(a);
}
fn(); // 不传递参数的时候，函数内部的 a 就是 10
fn(20); // 传递了参数 20 的时候，函数内部的 a 就是 20
```

注意： **箭头函数如果你需要使用默认值的话，那么一个参数的时候也需要写 （）**

### 11. Symbol

> ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。它属于 JavaScript 语言的原生数据类型之一，其他数据类型是：`undefined`、`null`、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）

注意：symbol类型不能直接进行运算

1. 使用Symbol作为对象属性名

   ```js
   let name = Symbol(); // 生成了一个symbol类型数据
   let age = Symbol();
   var obj  = {
       [name]:"kerwin",
       [age]:100
   };
   console.log(obj); // {Symbol(): 'kerwin', Symbol(): 100}
   console.log(obj.name); // undefined
   console.log(obj[name]); // kerwin
   ```

2. `Symbol()`函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述。这主要是为了在控制台显示，比较容易区分

   ```js
   let name = Symbol("name")
   let age = Symbol("age")
   var obj  ={
       [name]:"kerwin",
       [age]:100
   }
   console.log(obj); // {Symbol(name): 'kerwin', Symbol(age): 100}
   ```

3. 遍历问题

   ```js
   // 使用for in 无法遍历symbol定义的
   // 使用Object.getOwnPropertySymbols 可以遍历symbol定义的
   // 使用Reflect.ownKeys可以
   
   let keys = {
       name:Symbol("name"),
       age:Symbol("age")
   }
   var obj  ={
       [keys.name]:"kerwin",
       [keys.age]:100,
       a:1,
       b:2,
       c:3
   }
   
   Reflect.ownKeys(obj).forEach(item=>{
       console.log(item,obj[item]);
   })
   // a 1
   // b 2
   // c 3
   // Symbol(name) 'kerwin'
   // Symbol(age) 100
   ```

4. `Symbol.for()`可以重新使用同一个 Symbol 值

   ```js
   var obj  ={
       [Symbol.for("name")]:"kerwin",
       [Symbol.for("age")]:100
   }
   
   console.log(obj[Symbol.for("name")]);
   ```

5. `Symbol`可以作为常量

   ```js
   const VIDEO = Symbol();
   const AUDIO = Symbol();
   const IMAGE = Symbol();
   function play(type){
       switch(type){
           case VIDEO:
               console.log('视频播放');
               break;
           case AUDIO:
               console.log('音频播放');
               break;
           case IMAGE:
               console.log('图片播放');
               break;
       }
   }
   play(VIDEO); // 视频播放
   ```

### 12. Iterator迭代器

> Iterator 的作用有三个：
>
> 1. 为各种数据结构，提供一个统一的、简便的访问接口
> 2. 使得数据结构的成员能够按某种次序排列
> 3. ES6 创造了一种新的遍历命令`for...of`循环，Iterator 接口主要供`for...of`循环

```js
let arr = ["kerwin", "tiechui", "gangdaner"];

for(let i of arr){
    console.log(i); // kerwin tiechui gangdaner
}
```

Iterator 的遍历过程是这样的：

1. 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象
2. 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员
3. 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员
4. 不断调用指针对象的next方法，直到它指向数据结构的结束位置

```js
let i = arr[Symbol.iterator]();
console.log(i.next()); // {value: 'kerwin', done: false}
console.log(i.next()); // {value: 'tiechui', done: false}
console.log(i.next()); // {value: 'gangdaner', done: false}
console.log(i.next()); // {value: undefined, done: true}
```

> ES6 规定，默认的 Iterator 接口部署在数据结构的`Symbol.iterator`属性，或者说，一个数据结构只要具有`Symbol.iterator`属性，就可以认为是“可遍历的”（iterable）。`Symbol.iterator`属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器

原生默认具备 Iterator 接口的数据结构如下：

- Array
- Set
- Map
- String
- arguments 对象
- NodeList 对象

**如何对对象进行`for of`遍历？**

```js
let obj = {
    0: "kerwin",
    1: "tiechui",
    2: "gangdaner",
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
}

for (let i of obj) {
    console.log(i);
}
// kerwin
// tiechui
// gangdaner

let obj2 = {
    data: ['kerwin', 'tiechui', "gangdaner"],
    // 迭代器
    [Symbol.iterator]() {
        // let _this = this
        let index = 0
        return {
            next: () => {
                if (index < this.data.length) {

                    return {
                        value: this.data[index++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

for (let i of obj2) {
    console.log(i);
}
// kerwin
// tiechui
// gangdaner
```

`...`展开运算符会调用内置迭代器

```js
let obj2 = {
    data: ['kerwin', 'tiechui', "gangdaner"],
    // 迭代器
    [Symbol.iterator]() {
        // let _this = this
        let index = 0
        return {
            next: () => {
                if (index < this.data.length) {

                    return {
                        value: this.data[index++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}
console.log([...obj2]); // ['kerwin', 'tiechui', 'gangdaner']
```

### 13. Set结构

它类似于数组，但成员的值都是唯一的，没有重复的值

#### 1. 初识Set

```js
// 可以实现数组去重
let s1 = new Set([1, 2, 3, 2, 3]);
console.log(s1); // {1,2,3}
console.log([...s1]); // [1,2,3]

let s2 = new Set();
s2.add(1);
s2.add(2);
s2.add(3);
console.log(s2); // {1, 2, 3}
```

#### 2. 实例的属性和方法

- size：返回Set实例的成员总数
- `Set.prototype.add(value)`：添加某个value
- `Set.prototype.delete(value)`：删除某个value，返回一个布尔值，表示删除是否成功
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员
- `Set.prototype.clear()`：清除所有成员，没有返回值

```js
let s1 = new Set([1, 2, 3, 2, 3]);
console.log(s1.size); // 3
s1.add(4).add(5).add(6);
console.log(s1); // {1, 2, 3, 4, 5, 6}
console.log(s1.has(8)); // false
console.log(s1.has(5)); //true
s1.delete(5);
console.log(s1); // {1, 2, 3, 4, 6}
s1.clear();
console.log(s1); // {size: 0}
```

#### 3. 遍历

- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：遍历每个成员

```js
let s1 = new Set([1, 2, 3, 2, 3]);
for(let i of s1){
    console.log(i);
}
// 1
// 2
// 3
for(let i of s1.keys()){
    console.log(i);
}
// 1
// 2
// 3
for(let i of s1.values()){
    console.log(i);
}
// 1
// 2
// 3
for(let i of s1.entries()){
    console.log(i);
}
// [1,1]
// [2,2]
// [3,3]
for(let [index,item] of s1.entries()){
    console.log(index,item);
}
// 1 1
// 2 2
// 3 3
s1.forEach((item,index)=>{
    console.log(item,index);
})
// 1 1
// 2 2
// 3 3
```

#### 4. 复杂数据结构去重

```js
function uni(arr) {
    let res = new Set();
    return arr.filter(item => {
        let id = JSON.stringify(item);
        if (res.has(id)) {
            return false;
        } else {
            res.add(id);
            return true;
        }
    })
}

var list = [1, 2, 3, "data", {name: "kerwin"}, {name: "kerwin"},[1, 2],[3, 4],[3, 4]];
console.log(uni(list)); //[1,2,3,"data",{name:"kerwin"},[1,2],[3,4]]
```

### 14. Map结构

> 类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键

#### 1. 初识Map

```js
let m1 = new Map();
m1.set("name","kerwin");
m1.set({a:1},"大连");

console.log(m1); //{"name" => "kerwin",{ {a:1}=> "大连"}

let m2= new Map([
    ["name","kerwin"],
    [{a:1},"大连"]
]);
console.log(m2); //{"name" => "kerwin",{ {a:1}=> "大连"}
```

#### 2. 实例的属性和方法

- size：返回 Map 结构的成员总数。
- `Map.prototype.set(key,value)`：添加key对应得value，返回 Map 结构本身。
- `Map.prototype.get(key)`：获取key对应的value
- `Map.prototype.delete(key)`：删除某个键（键名+键值）
- `Map.prototype.has(key)`：某个键是否在当前 Map 对象之中
- `Map.prototype.clear()`：清除所有成员，没有返回值。

```js
let o = {a:1};
let m1= new Map([
    ["name","kerwin"],
    [o,"大连"]
]);
m1.set("age",18);
console.log(m1); // {'name' => 'kerwin', {{a:1}} => '大连', 'age' => 18}
console.log(m1.size); //3
console.log(m1.get("name")); // kerwin
console.log(m1.get(o)); // 大连
console.log(m1.has("age")); // true
m1.delete("age");
console.log(m1.has("age")); //false
m1.clear();
console.log(m1); // {size:0}
```

#### 3. 遍历

- `Map.prototype.keys()`：返回键名的遍历器
- `Map.prototype.values()`：返回键值的遍历器
- `Map.prototype.entries()`：返回所有成员的遍历器
- `Map.prototype.forEach()`：遍历 Map 的所有成员

```js
let o = {a:1};
let m1= new Map([
    ["name","kerwin"],
    [o,"大连"]
]);
m1.set("age",18);
console.log(m1) // {'name' => 'kerwin', {{a:1}} => '大连', 'age' => 18}
for(let i of m1.keys()){
    console.log(i);
}
// name 
// {a:1}
// age
for(let i of m1.values()){
    console.log(i);
}
// kerwin
// 大连
// 18
for(let [index,item] of m1.entries()){
    console.log(index,item);
}
// name kerwin
// {a: 1} '大连'
// age 18
m1.forEach((item,index)=>{
    console.log(item,index);
})
// kerwin name
// 大连 {a: 1}
// 18 'age'
```

### 15. Proxy代理

> Proxy如其名， 它的作用是在对象和和对象的属性值之间设置一个代理，获取该对象的值或者设置该对象的值， 以及实例化等等多种操作， 都会被拦截住， 经过这一层我们可以统一处理，我们可以认为它就是“代理器”

在没有proxy之前，我们使用`Object.defineProperty()`

```html
<div id="box"></div>
```

```js
let obj = {}
Object.defineProperty(obj,"data",{
    get(){
        console.log("get")
        return box.innerHTML
    },
    set(value){
        console.log("set",value)
        box.innerHTML = value
    }
})
```

使用`obj.data`即可设置

![ES6~ES1301.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/ES6~ES1301.gif)

使用proxy实现：

```html
<div id="box"></div>
```

```js
let obj = {}
let proxy = new Proxy(obj,{
    get(target,key){
        console.log("get",target[key])
        return target[key]
    },
    set(target,key,value){
        console.log("set",target,key,value)
        if(key==="data"){
            box.innerHTML=value
        }
        target[key]=value
}
})
```

![ES6~ES1302.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/ES6~ES1302.gif)

#### 1. get方法

```js
let target = {};
let proxy = new Proxy(target,{
    get(target,prop){
        return target[prop];
    }
})
```

#### 2. set方法

```js
let target = {};
let proxy = new Proxy(target,{
    get(target,prop){
        return target[prop];
    },
    set(target,prop,value){
        if(prop==="data"){
            box.innerHTML = value;
        }
        target[prop] = value;
    }
})
```

#### 3. has方法

```js
let target = {
    _prop: "内部数据"
};
let proxy = new Proxy(target, {
    get(target, prop) {
        return target[prop];
    },
    set(target, prop, value) {
        if (prop === "data") {
            box.innerHTML = value;
        }
        target[prop] = value;
    },
    has(target, key) {
        if (key[0] === '_') {
            return false;
        }
        return key in target;
    }
})
```

#### 4. this问题

```js
let target = new Set()
const proxy = new Proxy(target, {
    get(target, key) {
        const value =  target[key];
        // 遇到 Function 都手动绑定一下 this
        if (value instanceof Function) {
            console.log(`访问${value}方法了`);
            return value.bind(target);
            //不能 是 call apply 
        }
        return value;
    }
})
proxy.add(1); //访问function add() { [native code] }方法了
```

> Proxy本质上属于元编程非破坏性数据劫持，在原对象的基础上进行了功能的衍生而又不影响原对象，符合松耦合高内聚的设计理念

### 16. Reflect对象

> Reflect 可以用于获取目标对象的行为，它与 Object 类似，但是更易读，为操作对象提供了一种更优雅的方式。它的方法与 Proxy 是对应的

#### 1. 代替Object的某些方法

```js
const obj = {
};
Reflect.defineProperty(obj, 'name', {
    value: 'kerwin',
    writable: false,
    configurable:false
});
```

#### 2. 修改某些Object方法返回结果

```js
// 老写法
try {
  Object.defineProperty(target, property, attributes);
  // success
} catch (e) {
  // fail
}

// 新写法
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // fail
}

```

#### 3. 命令式变为函数行为

```js
const obj = {
    name:"kerwin"
};
//老写法
console.log("name" in obj); //true
//新写法
console.log(Reflect.has(obj, 'name')); //true

//老写法
delete obj.name;
//新写法
Reflect.deleteProperty(obj, "name");
```

#### 4. 配合Proxy

```js
let target = new Set();
const proxy = new Proxy(target, {
    get(target, key) {
        const value = Reflect.get(target,key);
        // 遇到 Function 都手动绑定一下 this
        if (value instanceof Function) {
            console.log(`访问${value}方法了`);
            return value.bind(target);
            //不能 是 call apply 
        }
        return value;
    },
    set() {
        return Reflect.set(...arguments);
    }
})
proxy.add(1);
```

```js
let arr = [1, 2, 3];
let proxy = new Proxy(arr, {
    get(target, key) {
        console.log('get', key);
        return Reflect.get(...arguments);
    },
    set(target, key, value) {
        console.log('set', key, value);
        return Reflect.set(...arguments);
    }
})
proxy.push(4);
// 能够打印出很多内容
// get push     (寻找 proxy.push 方法)
// get length   (获取当前的 length)
// set 3 4      (设置 proxy[3] = 4)
// set length 4 (设置 proxy.length = 4)
```

### 17. Promise

Promise 是异步编程的一种解决方案，比传统的解决方案回调函数,  更合理和更强大。ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象

> 详见Promise篇

### 18. Generator函数

> Generator 函数是 ES6 提供的一种异步编程解决方案
>
> Generator 函数是一个状态机，封装了多个内部状态
>
> 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态

#### 1. 基本语法

```js
function *gen(){
    console.log(1);
    yield; // 产出
    console.log(2);
    yield; // 产出
    console.log(3);
}

let g = gen();
g.next();
g.next();
g.next();
// 1
// 2
// 3
```

> yield(产出)表达式是暂停执行的标记，而next方法可以恢复执行

```js
function *gen(){
    yield  1
    yield  2
}

let g = gen();
let res1 = g.next();
console.log(res1);
let res2 = g.next();
console.log(res2);
let res3 = g.next();
console.log(res3);
// {value:'a',done:false}
// {value:'b',done:false}
// {value:undefined,done:true}
```

```js
function *gen(){
    let res1 = yield;
    console.log("gen内部",res1);
    let res2 = yield;
    console.log("gen内部",res2);
}

let g = gen();
g.next("data-1");
g.next("data-2");
g.next("data-3");
// gen内部 data-2
// gen内部 data-3
```

#### 2. 异步流程

**手动版本**

```js
function *gen(){
    let res1 = yield ajax("1.json");
    console.log(res1);
    let res2 = yield ajax("2.json",res1);
    console.log(res2);
}

let g = gen();

g.next().value.then(data=>{
    g.next(data).value.then(data=>{
        g.next(data);
    })
}) 
```

**自动版本**

```js
function* gen() {
    let res1 = yield ajax("1.json");
    console.log(res1);
    let res2 = yield ajax("2.json");
    console.log(res2);
}


function AutoRun(gen) {
    let g = gen();

    function next(data) {
        let res = g.next(data);
        if (res.done) return;
        res.value.then(function (data) {
            next(data);
        })
    }

    next();
}

AutoRun(gen);
```

### 19. Class语法

#### 1. 类的写法

```js
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(this.name,this.age);
    }
}
let obj = new Person("kerwin",100);
console.log(obj); //{name:"kerwin",age:100}
```

#### 2. getter与setter

```html
<ul id="list"></ul>
```

```js
class List{
    constructor(ele){
        this.element = ele;
    }

    get html(){
        return this.element.innerHTML;
    }
    set html(arr){
        this.element.innerHTML = arr.map(item=>`<li>${item}</li>`).join("");
    }
}
let obj = new List(document.querySelector("#list"));

obj.html = ["aaa","bbb","cccc"];
```

结果：

```
aaa
bbb
ccc
```

#### 3. 静态属性和静态方法

```js
class Person {
    static name = "Person这个类";
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(this.name,this.age);
    }

    static eat(){
        console.log("eat");
    }
}
let obj = new Person("kerwin",100);

console.log(Person.name);
Person.eat();
// Person这个类
// eat
```

#### 4. 继承

> ES6 规定，子类必须在`constructor()`方法中调用`super()`，否则就会报错。这是因为子类自己的`this`对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。如果不调用`super()`方法，子类就得不到自己的`this`对象

```js
class Person {
    static name = "Person这个类";
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(this.name,this.age);
    }

    static eat(){
        console.log("eat");
    }
}
class Student extends Person{
    constructor(name,age,score){
        super(name,age);
        this.score = score;
    }
    say(){
        super.say();
        console.log(this.score);
    }

    static eat(){
        super.eat();
        console.log("student eat");
    }
}
let obj = new Student("kerwin",100,200);
console.log(obj);
obj.say();
Student.eat();
// Student
// kerwin 100
// 200
// eat
// student eat
```

### 20. 模块化

> JavaScript 现在有两种模块。一种是 ES6 模块，简称 ESM；另一种是 CommonJS 模块，简称 CJS
>
> CommonJS 模块是 `Node.js` 专用的，与 ES6 模块不兼容。语法上面，两者最明显的差异是，CommonJS 模块使用`require()`和`module.exports`，ES6 模块使用`import`和`export`

ES6 模块不是对象，而是通过`export`命令显式指定输出的代码，再通过`import`命令输入

先看一个问题：

`1.js`

```js
const odiv = document.querySelector("div");
console.log(odiv);
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="1.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

输出结果为null

在没有模块化以前，可以使用如下方式解决：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="1.js" defer></script>
    <!-- <script src="1.js" async></script> -->
  </head>
  <body>
    <div></div>
  </body>
</html>
```

模块化方法：

优点：

+ 异步加载
+ 私密不漏
+ 重名不怕
+ 依赖不乱

`1.js`

```js
const odiv = document.querySelector("div");
console.log(odiv);
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="1.js" type="module"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

可以解决异步加载问题

导入和导出模块：

**写法1：**

```js
//导出
export default A1;
//导入
import a1 from "./1.js";
```

例：

`1.js`

```js
function A1() {
  a1();
  console.log('A1');
}
function A2() {
  console.log('A2');
}
function a1() {
  console.log('a1');
}
//导出暴露的方法
export default A1;
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script type="module">
      //导入1.js中的方法，前面的A1名字可以随便起
      import A1 from './1.js'
      console.log(A1)
    </script>
  </body>
</html>
```

**写法2：**

```js
export {A1,A2};

import {A1,A2} from "./1.js";

import {A1 as a1,A2 as a2} from "./1.js"; //可以改名

import * as obj from "./1.js"; //全部导入并且名为obj
```

例：

`1.js`

```js
function A1() {
  a1();
  console.log('A1');
}
function A2() {
  console.log('A2');
}
function a1() {
  console.log('a1');
}
//导出暴露的方法
export { A1, A2 };
// export default { A1, A2 }
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script type="module">
      //导入1.js中的方法
      import { A1, A2 } from './1.js'
      // import obj from './1.js'
      console.log(A1)
      console.log(A2)
      // console.log(obj.A1)
      // console.log(obj.A2)
    </script>
  </body>
</html>
```

```js
//还可以直接暴露函数
export function A1(){
    console.log("A1");
}
export function A2(){
    console.log("A2");
}


import {A1,A2} from "./1.js";

import {A1 as a1,A2 as a2} from "./1.js";

import * as obj from "./1.js";
```

**混合写法：**

```js
export {A1;
export default A2;

import A2,{A1} from "./1.js";
```

## 2. ES7

### 2.1 求幂运算符

```js
Math.pow(3, 2) === 3 ** 2    // 9
```

### 2.2 数组的includes方法

```js
[1, 2, NaN].includes(NaN)     // true
[1, 2, NaN].indexOf(NaN)  // -1
```

> 如果仅仅查找数据是否在数组中，建议使用includes，如果是查找数据的索引位置，建议使用indexOf更好一些

## 3. ES8

### 3.1 async和await

> 详见Promise篇

### 3.2 对象方法扩展

```js
let obj = {
    name:"kerwin",
    age:100
}
console.log(Object.values(obj))
// ['kerwin', 100]
```

```js
let obj = {
    name:"kerwin",
    age:100
}
console.log(Object.entries(obj))
// [['name','kerwin'],['age',100]]
```

```js
let obj = {
    name:"kerwin",
    age:100
}
console.log(Object.getOwnPropertyDescriptors(obj))
// {name:{...},age{...}}
```

**克隆对象**

```js
let obj1 = {
    name:"Kerwin",
    age:100,
    location:{
        provice:"辽宁",
        city:"大连"
    },
    //只设置city，防止破坏province
    get city(){
        return this.location.city
    },
    set city(value){
        this.location.city = value
    },
    set nameset(value){
        this.name = value.substring(0,1).toUpperCase()+value.substring(1)
    },
    get nameset(){
        return this.name
    }
}
console.log(Object.getOwnPropertyDescriptors(obj1))
var obj2=  {}

//Object.assign(obj2,obj1)//无法克隆 get set方法
Object.defineProperties(obj2,Object.getOwnPropertyDescriptors(obj1))

```

### 3.3 字符串填充

> `padStart()`、`padEnd()`方法可以使得字符串达到固定长度，有两个参数，字符串目标长度和填充内容


```js
let str= "kerwin"

console.log(str.padStart(10,"x"));//xxxxkerwin
console.log(str.padEnd(10,"x"));//kerwinxxxx
console.log(str.padStart(5,"x"))//kerwin
console.log(str.padEnd(5,"x"))//kerwin
```

### 3.4 函数参数的末尾加逗号

```js
function test(
 a,
 b,
 c,
){
    console.log(a,b)
}
test(
    1,
    2,
    3,
)
```

> 『末尾逗号』在添加新的参数、属性、元素时是有用的，你可以直接新加一行而不必给上一行再补充一个逗号，这样使版本控制工具的修改记录也更加整洁

## 4. ES9

### 4.1 对象的剩余参数与扩展运算符

#### 4.1.1 对象的剩余参数

```js
let obj = {
    name:"kerwin",
    age:100,
    location:"dalian"
}

let {name,...other} = obj
console.log(name) //kerwin
console.log(other) //{age: 100, location: 'dalian'}
```

#### 4.1.2 对象的扩展运算符

```js
let obj1 = {
    name:"kerwin"
}

let obj2 = {
    age:100
}

console.log({...obj1,...obj2}) // {name: 'kerwin', age: 100}
```

### 4.2 正则表达式命名捕获组

JS正则表达式可以返回一个匹配的对象, 一个包含匹配字符串的类数组, 比如: 以 `YYYY-MM-DD`的格式解析日期，这样的代码可读性很差, 并且在改变正则表达式的结构的时候很有可能就会改变匹配对象的索引

ES9允许使用命名捕获`?<name>`, 在打开捕获括号后立即命名

```js
let str = "今天是2022-10-10"
let reg = /([0-9]{4})-([0-9]{2})-([0-9]{2})/g

let res1 = reg.exec(str)
console.log(res1) 
// ['2022-10-10', '2022', '10', '10', index: 3, input: '今天是2022-10-10', groups: undefined]
```

```js
let str = "今天是2022-10-10"
let reg = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g

let res1 = reg.exec(str)
console.log(res1)
// ['2022-10-10', '2022', '10', '10', index: 3, input: '今天是2022-10-10', groups: {year: '2022', month: '10', day: '10'}]
```

### 4.3 Promise.finally()

> 无论是成功还是失败，都运行同样的代码，比如隐藏对话框，关闭数据连接

```js
function ajax(){
    return new Promise((resolve,reject)=>{
        reject(1111)
    })
}
//showloading
ajax().then(res=>{

}).catch(err=>{

}).finally(()=>{
    //hideloading
    console.log("finally")
})
```

### 4.4 异步遍历器

#### 4.4.1 同步遍历器的问题

```js
function* fn() {
    yield  1111
    yield  2222

}
const syncI = fn();
console.log(syncI.next())
console.log(syncI.next())
console.log(syncI.next())
// {value: 1111, done: false}
// {value: 2222, done: false}
// {value: undefined, done: true}
```

```js
function* fn() {
    yield  new Promise(resolve=>resolve("1111"))
    yield  new Promise(resolve=>resolve("2222"))

}
const syncI = fn();
syncI.next().value.then(res=>{console.log(res)})
syncI.next().value.then(res=>{console.log(res)})
// 1111
// 2222
```

`value`属性的返回值是一个 Promise 对象，用来放置异步操作。但是这样写很麻烦，不太符合直觉，语义也比较绕

#### 4.4.2 异步遍历器生成函数

>Generator 函数返回一个同步遍历器，异步 Generator 函数的作用，是返回一个异步遍历器对象。在语法上，异步 Generator 函数就是 async 函数与 Generator 函数的结合

```js
async function* fn() {
    yield  new Promise(resolve=>resolve("1111"))
    yield  new Promise(resolve=>resolve("2222"))

}
const asyncI = fn();

asyncI.next().then(res=>{
    console.log(res)
    return asyncI.next()
}).then(res=>{
    console.log(res)
    return asyncI.next()
}).then(res=>{
    console.log(res)
})
// {value: '1111', done: false}
// {value: '2222', done: false}
// {value: undefined, done: true}
```

#### 4.4.3 for await of

> `for...of`循环用于遍历同步的 Iterator 接口。新引入的`for await...of`循环，则是用于遍历异步的 Iterator 接口

```js
async function test() {
    for await (let i of asyncI) {
        console.log(i)
    }
}
test()
```

#### 4.4.4 案例改造

```js
function timer(t) {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve(t)
          }, t)
      })
 }


async function* fn() {
    yield timer(1000)//任务1
    yield timer(2000)//任务2
    yield timer(3000)//任务3
}

// 使用一下 for await ...of
async function fn1() {
    for await(const val of fn()) {
        console.log("start",Date.now())
        console.log(val)
        console.log("end",Date.now())
    }
}
fn1()
```

## 5. ES10

### 5.1 Object.fromEntries

> `Object.fromEntries()`方法允许你轻松地将键值对列表转换为对象

```js
const arr = [["name", "kerwin"], ["age", 100]]
console.log(Object.fromEntries(arr))//{name: 'kerwin', age: 100}

const m = new Map()
m.set("name","tiechui")
m.set("age",18)
console.log(Object.fromEntries(m))//{name: 'tiechui', age: 18}
```

**用处**

```js
let str ="name=kerwin&age=100"

let searchParams = new URLSearchParams(str)
console.log(Object.fromEntries(searchParams))//{name: 'kerwin', age: '100'}
```

### 5.2 trimStart()andtrimEnd()

> `trimStart()`和`trimEnd()`方法在实现与`trimLeft()`和`trimRight()`相同

```js
let str = "   kerwin    "
console.log("|"+str.trimStart(str)+"|") // |kerwin    |
console.log("|"+str.trimEnd(str)+"|") // |   kerwin|
console.log("|"+str.trimLeft(str)+"|") // |kerwin    |
console.log("|"+str.trimRight(str)+"|") // |   kerwin|
```

### 5.3 Symbol对象的description属性

> 为Symbol对象添加了只读属性description，该对象返回包含Symbol描述的字符串

```js
let s = Symbol("kerwin")
console.log(s.description) //kerwin
```

### 5.4 可选的catch

```js
let pro1 = new Promise(function (resolve, reject) {
    //执行器函数
    setTimeout(() => {
        resolve("成功的结果")
    }, 30000)
})
let pro2 = new Promise(function (resolve, reject) {
    //执行器函数
    setTimeout(() => {
        reject()
    }, 2000)
})
async function test() {
    try {
        await Promise.race([pro1, pro2])
    } catch {
        console.log("不关心错误结果，网络超时")
    }
}
test()
```

## 6. ES11

### 6.1 Promise.allSettled

> `Promise.allSettled()` 方法返回一个在所有给定的 promise 都已经 fulfilled 或 rejected 后的 promise ，并带有一个对象数组，每个对象表示对应的 promise 结果

```js
const promises = [ ajax('/200接口'), ajax('/401接口') ];

Promise.allSettled(promises).then(results=>{
    // 过滤出成功的请求
    results.filter(item =>item.status === 'fulfilled');
    过滤出失败的请求
    results.filter(item=> item.status === 'rejected');
})
```

### 6.2 module新增

#### 6.2.1 动态导入import()

> 标准用法的 import 导入的模块是静态的，会使所有被导入的模块，在加载时就被编译（无法做到按需编译，降低首页加载速度）。有些场景中，你可能希望根据条件导入模块或者按需导入模块，这时你可以使用动态导入代替静态导入

例：

```js
<body>
    <button>login</button>
    <script type="module">
        let role1 = "管理员"
        let role2 = "普通用户"

        function login(){
            return "普通用户"
        }

        async function render(role){
            if(role===role1){
                let res1 = await import("./1.js")
                console.log(res1.default)
            }else{
                let res2 = await import("./2.js")
                console.log(res2.default)
            }
        }

        let obtn = document.querySelector("button")
        obtn.onclick = function(){
            let role = login()
            render(role)
        }
    </script>
</body>
```

#### 6.2.2 import.meta

`import.meta` 会返回一个对象，有一个 url 属性，返回当前模块的url路径，只能在模块内部使用

```js
<script type="module">
        import obj from './1.js'
</script>


//1.js

console.log(import.meta)
export default {
    
}
```

#### 6.2.3 export * as obj from 'module'

```js
//1.js
export default {
    name:'111111'
}

export function test1(){
    
}
//2.js
export default {
    name:"22222"
}
export function test2(){
    
}
export * as obj1 from './1.js' //把1.js注入到2.js
//html
 <script type="module">
        import * as obj from './2.js'
        console.log(obj) 
 </script>
```

### 6.3 字符串的matchAll方法

> `matchAll()` 方法返回一个包含所有匹配正则表达式的结果的迭代器。可以使用 `for...of` 遍历，或者使用展开运算符`...` 或者 `Array.from` 转换为数组

例：

```js
let str = `
<ul>
    <li>1111</li>
    <li>2222</li>
    <li>3333</li>
    <li>4444</li>
</ul>
`
let reg = /<li>(.*)<\/li>/g

console.log(str.match(reg)) 
//'<li>1111</li>', '<li>2222</li>', '<li>3333</li>', '<li>4444</li>'
```

```js
let str = `
<ul>
    <li>1111</li>
    <li>2222</li>
    <li>3333</li>
    <li>4444</li>
</ul>
`
let reg = /<li>(.*)<\/li>/g
let match = null
while(match = reg.exec(str)){
    console.log(match[0])
    console.log(match[1])
}
// <li>1111</li>
// 1111
// <li>2222</li>
// 2222
// <li>3333</li>
// 3333
// <li>4444</li>
// 4444
```

```js
let str = `
<ul>
<li>1111</li>
<li>2222</li>
<li>3333</li>
<li>4444</li>
</ul>
`
let reg = /<li>(.*)<\/li>/g

for(let i of str.matchAll(reg)){
    console.log(i)
}
```

### 6.4 BigInt

> JavaScript 能够准确表示的整数范围在-2^53^到2^53^之间（不含两个端点），超过这个范围，无法精确表示这个值，这使得 JavaScript 不适合进行科学和金融方面的精确计算

```js
9007199254740992 //9007199254740992
9007199254740993 //9007199254740992

Math.pow(2,53) === Math.pow(2,53)+1 //true
```

为了与 Number 类型区别，BigInt 类型的数据必须添加后缀`n`

```js
1234 // 普通整数
1234n // BigInt

// BigInt 的运算
1n + 2n // 3n
```

```js
// BigInt函数
console.log(BigInt(2)) //2n
console.log(BigInt(2**53)+BigInt(1)) // 9007199254740993n
```

### 6.5 globalThis

> globalThis 提供了一个标准的方式来获取不同环境下的全局 this 对象（也就是全局对象自身）。不像window或者self这些属性，它确保可以在有无窗口的各种环境下正常工作。所以，你可以安心的使用 globalThis，不必担心它的运行环境。为便于记忆，你只需要记住，全局作用域中的 this 就是globalThis

例：es6-shim库

```js
//es6-shim

var getGlobal = function () {

// the only reliable means to get the global object is

    // Function('return this')()

    // However, this causes CSP violations in Chrome apps.

     if (typeof self !== 'undefined') { return self; }
    
        if (typeof window !== 'undefined') { return window; }
    
        if (typeof global !== 'undefined') { return global; }
    
        throw new Error('unable to locate global object');

};

var globals = getGlobal();

if (!globals.Reflect) {

defineProperty(globals, ‘Reflect’, {}, true);

}

```



```js
//以前
var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }

    if (typeof window !== 'undefined') { return window; }

    if (typeof global !== 'undefined') { return global; }

    throw new Error('unable to locate global object');
};

let globals = getGlobal()

if (globals.document) {
    console.log("进行dom操作相关")
} else {
    console.log("不能进行dom操作")
}

//现在
if (globalThis.document) {
    console.log("进行dom操作相关")
} else {
    console.log("不能进行dom操作")
}
```

### 6.6 空值合并运算符

> 空值合并运算符`??`是一个逻辑运算符。当左侧操作数为 null 或 undefined 时，其返回右侧的操作数。否则返回左侧的操作数

```js
let obj = {
    name:"kerwin",
    introduction:0
}

console.log(obj.introduction || "这个人很懒，什么也没有留下") // 这个人很懒，什么也没有留下
console.log(obj.introduction ?? "这个人很懒，什么也没有留下") // 0
```

`??`和 `||` 的区别是什么呢?

他们两个最大的区别就是`''`和0，`??`的左侧为`''`或者为0的时候，依然会返回左侧的值

`||` 会对左侧的数据进行boolean类型转换，所以`''`和0会被转换成false，返回右侧的值

### 6.7 可选链操作符

> 可选链前面的值如果是null或undefined，则不再执行后面的，之前返回可选链前面的值

```js
let obj = {
    name:"kerwin",
    introduction:0,
    // location:{
    //     city:"dalian"
    // }
}

//如果没有location，之前的写法
console.log(obj && obj.location && obj.location.city)
//现在的写法
console.log(obj?.location?.city)
```

## 7. ES12

### 7.1 逻辑赋值操作符

逻辑赋值操作符`??=`、`&&=`、 `||=`

```js
let a = true
let b = false
//a &&= b //false
a ||= b ; //true
console.log(a)

let obj = {
    name:"kerwin", 
    introduction:0
}

obj.introduction = obj.introduction??"很懒"
obj.introduction??="很懒"
```

### 7.2 数字分隔符

这个新特性是为了方便程序员看代码而出现的，如果数字比较大，那么看起来就不是那么一目了然 

```js
const num= 123456789
```

分隔符不仅可以分割十进制，也可以分割二进制或者十六进制的数据，非常好用

```js
const number = 1_000_000_000_000
const binary = 0b1010_0101_1111_1101
const hex = 0xA1_B2_C3
```

### 7.3 replaceAll

所有匹配都会被替代项替换。模式可以是字符串或正则表达式，而替换项可以是字符串或针对每次匹配执行的函数。并返回一个全新的字符串  

```js
const str =
      "I wish to wish the wish you wish to wish, but if you wish the wish the witch wishes, I won't wish the wish you wish to wish. "
const newStr = str.replaceAll("wish", "kerwin")
console.log(newStr)
// I kerwin to kerwin the kerwin you kerwin to kerwin, but if you kerwin the kerwin the witch kerwines, I won't kerwin the kerwin you kerwin to kerwin.
```

### 7.4 Promise.any

只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态

> `Promise.any()`跟`Promise.race()`方法很像，只有一点不同，就是`Promise.any()`不会因为某个 Promise 变成`rejected`状态而结束，必须等到所有参数 Promise 变成`rejected`状态才会结束

### 7.5 WeakRef

在一般情况下，对象的引用是强引用的，这意味着只要持有对象的引用，它就不会被垃圾回收。只有当该对象没有任何的强引用时，垃圾回收才会销毁该对象并且回收该对象所占的内存空间

而 `WeakRef` 允许您保留对另一个对象的弱引用，而不会阻止被弱引用对象被垃圾回收

```js
let target = {}
let wr = new WeakRef(target)
```

WeakRef 实例对象有一个`deref()`方法，如果原始对象存在，该方法返回原始对象；如果原始对象已经被垃圾回收机制清除，该方法返回`undefined`

```js
let target = {}
let wr = new WeakRef(target)

let obj = wr.deref()
if (obj) { // target 未被垃圾回收机制清除
  // ...
}
```

```js
let like = new WeakRef(document.getElementById("like"))
let mymap = new WeakMap()
mymap.set(like.deref(), {
    click: 0
})
like.deref().onclick = function () {
    let times = mymap.get(like.deref())
    times.click++
}

setTimeout(() => {
    document.body.removeChild(like.deref())
}, 2000)
```

### 7.6 FinalizationRegistry

清理器注册表功能 FinalizationRegistry，用来指定目标对象被垃圾回收机制清除以后，所要执行的回调函数

首先，新建一个注册表实例

```javascript
const registry = new FinalizationRegistry(data => {
  // ....
})
```

```javascript
registry.register(obj, "some value")
registry.unregister(obj)
```

```js
let like = new WeakRef(document.getElementById("like"))
let mymap = new WeakMap()
mymap.set(like.deref(), {
    click: 0
})
like.deref().onclick = function () {
    let times = mymap.get(like.deref())
    times.click++
}

setTimeout(() => {
    // registry.register(document.getElementById("like"), mymap.get(like.deref()));
    registry.register(like.deref(), mymap.get(like.deref()));

    document.body.removeChild(like.deref())
}, 2000)

const registry = new FinalizationRegistry(data => {
    // ....
    console.log("被销毁了", data)
})
```

## 8. ES13

### 8.1 私有属性和方法

```js
class Cache{
    #obj  ={}

    get(key){
        return this.#obj[key]
    }
set(key,value){
    this.#obj[key] =value
}
}

let cache = new Cache()
cache.set("name","kerwin")
```

### 8.2 静态成员的私有属性和方法

我们还可以给类定义静态成员和静态私有函数。类的静态方法可以使用`this`关键字访问其他的私有或者公有静态成员

```js
 class Cache{
     static #count = 0;

     static getCount(){
         return this.#count
     }

    #obj  ={}

    get(key){
        return this.#obj[key]
    }
    set(key,value){
        this.#obj[key] =value
    }
}

let cache = new Cache()
cache.set("name","kerwin")

console.log(Cache.getCount())
```

### 8.3 静态代码块

ES13允许在类中通过`static`关键字定义一系列静态代码块，这些代码块只会在类被创造的时候**执行一次**。这其实有点像一些其他的如C#和Java等面向对象的编程语言的静态构造函数的用法

一个类可以定义任意多的静态代码块，这些代码块会和穿插在它们之间的静态成员变量一起按照定义的顺序在类初始化的时候执行一次。我们还可以使用`super`关键字来访问父类的属性

```js
 class Cache{
    static obj = new Map()
    static {
        this.obj.set("name","kerwin")
        this.obj.set("age",100)
    }

    static{
        console.log(this.obj)
    }
}

console.log(Cache.obj)
```

### 8.4 使用in来判断某个对象是否拥有某个私有属性

```js
class Cache {
    #obj = {}

    get(key) {
        return this.#obj[key]
    }
    set(key, value) {
        this.#obj[key] = value
    }

    hasObj(){
        return #obj in this
    }
}

let cache = new Cache()
console.log(cache.hasObj())
```

### 8.5 支持在最外层写await

顶层`await`只能用在 ES6 模块，不能用在 CommonJS 模块。这是因为 CommonJS 模块的`require()`是同步加载，如果有顶层`await`，就没法处理加载了

```js
<script type="module">
    function ajax() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data-1111");
        }, 1000);
    })
}

let res = await ajax();
console.log(res)

</script>
```

### 8.6 at函数来索引元素

```js
let arr = ["kerwin","tiechui","gangdan","xiaoming"]

console.log(arr[1])
console.log(arr[arr.length-1]) 
console.log(arr[arr.length-2]) 

console.log(arr.at(1))
console.log(arr.at(-1))
console.log(arr.at(-2))
```

### 8.7 正则匹配的开始和结束索引

```js
// d 
let str = "今天是2022-11-10"
let reg = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/d

//exec
let res = reg.exec(str)
console.log(res)
```

### 8.8 findLast()和findLastIndex()函数

```js
let arr = [11,12,13,14,15]

// let res = arr.find(function(value){
//   return value % 2 === 0
// })
// let res = arr.findIndex(function(value){
//   return value % 2 === 0
// })
// let res = arr.findLast(function(value){
//   return value % 2 === 0
// })
let res = arr.findLastIndex(function(value){
    return value % 2 === 0
})
console.log(res)
```

### 8.9 Error对象的Cause属性

Error对象多了一个`cause`属性来指明错误出现的原因。这个属性可以帮助我们为错误添加更多的上下文信息，从而帮助使用者们更好地定位错误

```js
function getData(){
    try{
        console.log(kerwin)
    }
    catch(e){
        throw new Error('New error 1111111',{cause:"这是因为,,,,,,,,,"})
    }
}

try{
    getData()
}catch(e){
    console.log(e.cause)
}
```
