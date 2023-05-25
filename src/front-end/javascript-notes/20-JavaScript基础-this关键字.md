---
title: JavaScript基础-this关键字
order: 17
---

每一个函数内部都有一个关键字是 `this` ，可以让我们直接使用的

重点： **函数内部的 this 只和函数的调用方式有关系，和函数的定义方式没有关系**

## this指向

函数内部的 this 指向谁，取决于函数的调用方式

- 全局定义的函数直接调用，`this => window`

  ```javascript
  function fn() {
    console.log(this)
  }
  fn()
  // 此时 this 指向 window
  ```

- 对象内部的方法调用，`this => 调用者`

  ```javascript
  var obj = {
    fn: function () {
      console.log(this)
    }
  }
  obj.fn()
  // 此时 this 指向 obj
  ```

- 定时器的处理函数，`this => window`

  ```javascript
  setTimeout(function () {
    console.log(this)
  }, 0)
  // 此时定时器处理函数里面的 this 指向 window
  ```

- 事件处理函数，`this => 事件源`

  ```javascript
  div.onclick = function () {
    console.log(this)
  }
  // 当你点击 div 的时候，this 指向 div
  ```

- 自调用函数（立即执行函数），`this => window`

  ```javascript
  (function () {
    console.log(this)
  })()
  // 此时 this 指向 window
  ```

## call 和 apply 和 bind

刚才我们说过的都是函数的基本调用方式里面的 this 指向，我们还有三个可以忽略函数本身的 this 指向转而指向别的地方，这三个方法就是 **call** 、 **apply** 、 **bind**，它们是强行改变 this 指向的方法

### call

`call` 方法是附加在函数调用后面使用，可以忽略函数本身的 this 指向

语法： `函数名.call(要改变的 this 指向，要给函数传递的参数1，要给函数传递的参数2， ...)`

```javascript
var obj = { name: 'Jack' }
function fn(a, b) {
  console.log(this)
  console.log(a)
  console.log(b)
}
fn(1, 2)
fn.call(obj, 1, 2)
```

`fn()` 的时候，函数内部的 this 指向 window，`fn.call(obj, 1, 2)` 的时候，函数内部的 this 就指向了 obj 这个对象，使用 call 方法的时候会立即执行函数，第一个参数是你要改变的函数内部的 this 指向，第二个参数开始，依次是向函数传递参数

### apply

`apply` 方法是附加在函数调用后面使用，可以忽略函数本身的 this 指向

语法： `函数名.apply(要改变的 this 指向，[要给函数传递的参数1， 要给函数传递的参数2， ...])`

```javascript
var obj = { name: 'Jack' }
function fn(a, b) {
  console.log(this)
  console.log(a)
  console.log(b)
}
fn(1, 2)
fn.call(obj, [1, 2])
```

`fn()` 的时候，函数内部的 this 指向 window，`fn.apply(obj, [1, 2])` 的时候，函数内部的 this 就指向了 obj 这个对象，使用 apply 方法的时候，会立即执行函数，第一个参数是你要改变的函数内部的 this 指向，第二个参数是一个 **数组**，数组里面的每一项依次是向函数传递的参数

### bind

`bind` 方法是附加在函数调用后面使用，可以忽略函数本身的 this 指向，和 call、apply 有一些不一样，就是不会立即执行函数，而是返回一个已经改变了 this 指向的函数

语法： `var newFn = 函数名.bind(要改变的 this 指向); newFn(传递参数)`

```javascript
var obj = { name: 'Jack' }
function fn(a, b) {
  console.log(this)
  console.log(a)
  console.log(b)
}
fn(1, 2)
var newFn = fn.bind(obj)
newFn(1, 2)
```

bind 调用的时候，不会执行 fn 这个函数，而是返回一个新的函数，这个新的函数就是一个改变了 this 指向以后的 fn 函数，`fn(1, 2)` 的时候 this 指向 window，`newFn(1, 2)` 的时候执行的是一个和 fn 一摸一样的函数，只不过里面的 this 指向改成了 obj

