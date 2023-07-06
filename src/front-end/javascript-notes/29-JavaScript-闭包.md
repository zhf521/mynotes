---
title: 闭包
order: 29
---

概念：一个函数对周围状态的引用捆绑在一起，内层函数中访问到其外层函数的作用域

闭包是一种比较特殊的函数，它的核心作用是：

1. 使用闭包能够访问函数作用域中的变量
2. 使变量可以驻留在内存，不被回收

首先我们先看一下函数的作用：

1. 避免变量全局污染
2. 使数据私有化，外部无法修改内部数据
3. 可以让外部可以使用内部的私有数据

我们来看个例子：

```js
let a = 10
function fn() {
    a++
    console.log(a)
}
fn()
fn()
fn()
```

上述代码中，输出结果为：

```txt
11
12
13
```

此时如果a不小心被修改了，输出结果将改变：

```js
let a = 10
a = 100
function fn() {
    a++
    console.log(a)
}
fn()
```

此时结果会变成：

```txt
101
```

为了避免a被污染，我们可以把a放到函数里面：

```js
a = 100
function fn() {
    let a = 10
    a++
    console.log(a)
}
fn() //结果为11
```

上面是普通函数就拥有的作用

但是如果我们将上面的代码中的fn再执行两遍，结果就不是我们想要的了：

```js
a = 100
function fn() {
    let a = 10
    a++
    console.log(a)
}
fn() //结果为11
fn() //结果为11
fn() //结果为11
```

这是因为每次fn执行完，里面的a都会被释放掉，再执行时a又会被赋值为10

我们可以使用闭包来解决这个问题：

```js
a = 100
function fn() {
    let a = 10
    return function(){
        a++
    	console.log(a)
    }
} // 形成闭包
let f = fn() // 执行这个函数即可创建一个闭包
f() // 11
f() // 12
f() // 13
f = null // 为了防止内存泄漏，我们可以手动清除
```

总结：

+ 怎么理解闭包？

  + 闭包 = 内层函数 + 引用的外层函数的变量

  + 例如：

    ```js
    function fn(){
        const a = 1
        fucntion f(){
            console.log(a)
        }
        f()
    }
    fn()
    ```

    ```js
    function fn(){
        const a = 1
        return fucntion (){
            console.log(a)
        }
    }
    fn()
    ```

    

+ 闭包不一定要有return

  + 当我们想让外部变量使用我们闭包里面的变量时，可以用return

+ 闭包可能引起的问题？

  - 内存泄漏
