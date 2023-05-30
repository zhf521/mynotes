---
title: JavaScript-闭包
order: 29
---

概念：一个函数对周围状态的引用捆绑在一起，内层函数中访问到其外层函数的作用域

闭包是一种比较特殊的函数，使用闭包能够访问函数作用域中的变量

从代码形式上看闭包是一个做为返回值的函数，如下代码所示：

```html
<body>
  <script>
    // 1. 闭包 : 内层函数 + 外层函数变量
    // function outer() {
    //   const a = 1
    //   function f() {
    //     console.log(a)
    //   }
    //   f()
    // }
    // outer()

    // 2. 闭包的应用： 实现数据的私有。统计函数的调用次数
    // let count = 1
    // function fn() {
    //   count++
    //   console.log(`函数被调用${count}次`)
    // }

    // 3. 闭包的写法  统计函数的调用次数
    function outer() {
      let count = 1
      function fn() {
        count++
        console.log(`函数被调用${count}次`)
      }
      return fn
    }
    const re = outer()
    // const re = function fn() {
    //   count++
    //   console.log(`函数被调用${count}次`)
    // }
    re()
    re()
    // const fn = function() { }  函数表达式
    // 4. 闭包存在的问题： 可能会造成内存泄漏
  </script>
</body>
```

总结：

+ 怎么理解闭包？
  + 闭包 = 内层函数 + 外层函数的变量
+ 闭包的作用？
  - 封闭数据，实现数据私有，外部也可以访问函数内部的变量
  - 闭包允许将函数与其所操作的某些数据（环境）关联起来
+ 闭包可能引起的问题？
  - 内存泄漏

