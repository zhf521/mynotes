---
title: JavaScript异步进阶
order: 3
---

## 1. event loop

### 1. 事件循环

JavaScript是单线程运行的，异步要通过回调函数来实现，event loop（事件循环）就是异步回调的实现原理，它负责管理和调度异步任务的执行顺序

```js
console.log('Hi');
setTimeout(function cb1() {
    console.log('cb1');
}, 5000);
console.log('Bye');
```

执行结果：

```js
Hi
Bye
cb1
```

JavaScript执行顺序：从前到后一行一行执行，如果某一行执行报错，则停止下面代码的执行，先把同步代码执行完，再执行异步代码

事件循环：

![JavaScript-执行机制01.gif](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/JavaScript-%E6%89%A7%E8%A1%8C%E6%9C%BA%E5%88%B601.gif)

同步代码一行行放到执行栈中，遇到异步，会先记录下来，等待时机（定时器户、网络请求等），时机到了，就移到任务队列（也叫消息队列、回调队列）中，如果执行栈中为空（同步代码执行完），事件循环开始工作，轮询查找任务队列，如有则移到执行栈中执行，然后继续轮询查找

### 2. DOM 事件与 event loop

DOM事件也是用回调，基于event loop

例：

```html
<body>
    <button id="btn">点我</button>
</body>

<script>
    console.log('Hi');
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', function (e) {
        console.log('button clicked');
    });
    console.log('Bye');
</script>
```

执行结果：

```js
Hi
Bye
button clicked // 当点击按钮时触发
```

## 2. Promise

### 1. Promise 的三种状态

三种状态：

- 异步操作未完成（pending）（待定）
- 异步操作成功（fulfilled，也叫resolved）（已兑现）
- 异步操作失败（rejected）（已拒绝）

三种状态的转换：

+ pending -> fulfilled
+ pending -> rejected

```js
// 刚定义时，状态默认为 pending
const p1 = new Promise((resolve, reject) => {});
// 执行 resolve() 后，状态变成 fulfilled
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});
// 执行 reject() 后，状态变成 rejected
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 1000);
});
```

### 2. 三种状态的表现

状态变化会触发 then和catch

- pending状态不会触发任何 then和catch 回调
- 状态变为 fulfilled 会触发后续的 then 回调
- 状态变为 rejected 会触发后续的 catch 回调

### 3. then 和 catch 改变状态

then和catch 会继续返回 Promise ，**此时可能会发生状态变化！！！**

+ then正常返回fulfilled，里面有报错则返回rejected
+ catch正常返回resolved，里面有报错则返回rejected

```js
// then() 一般正常返回 fulfilled 状态的 promise
Promise.resolve().then(() => {
    return 100;
})

// then() 里抛出错误，会返回 rejected 状态的 promise
Promise.resolve().then(() => {
    throw new Error('err');
})

// catch() 不抛出错误，会返回 fulfilled 状态的 promise
Promise.reject().catch(() => {
    console.error('catch some error');
})

// catch() 抛出错误，会返回 rejected 状态的 promise
Promise.reject().catch(() => {
    console.error('catch some error');
    throw new Error('err');
})
```

面试题：

```js
// 第一题
Promise.resolve()
    .then(() => {
        console.log(1);
    })
    .catch(() => {
        console.log(2);
    })
    .then(() => {
        console.log(3);
    });
```

结果：

```js
1
3
```

```js
// 第二题
Promise.resolve()
    .then(() => {
        // 返回 rejected 状态的 promise
        console.log(1);
        throw new Error('error1');
    })
    .catch(() => {
        // 返回 resolved 状态的 promise
        console.log(2);
    })
    .then(() => {
        console.log(3);
    });
```

结果：

```js
1
2
3
```

```js
// 第三题
Promise.resolve()
    .then(() => {
        // 返回 rejected 状态的 promise
        console.log(1);
        throw new Error('error1');
    })
    .catch(() => {
        // 返回 resolved 状态的 promise
        console.log(2);
    })
    .catch(() => {
        console.log(3);
    });
```

结果：

```js
1
2
```

### 4. Promise 常用 API

`Promise.all()`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例

```js
const p = Promise.all([p1, p2, p3]);
```

1. 只有 `p1`、`p2`、`p3` 的状态都变成 `fulfilled`，`p` 的状态才会变成 `fulfilled`，此时 `p1`、`p2`、`p3` 的返回值组成一个数组，传递给 `p` 的回调函数
2. 只要 `p1`、`p2`、`p3` 之中有一个被 `rejected`，`p` 的状态就变成 `rejected`，此时第一个被 `reject` 的实例的返回值，会传递给 `p` 的回调函数

`Promise.race()` 方法同样是将多个 Promise 实例包装成一个新的 Promise 实例

```javascript
const p = Promise.race([p1, p2, p3]);
```

上面代码中，只要 `p1`、`p2`、`p3` 之中有一个实例率先改变状态，`p` 的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给 `p` 的回调函数

## 3. async/await

### 1. 语法介绍

用同步的方式，编写异步

```js
async function(){
    await promise对象;
}
```

### 2. async/await 和 Promise 的关系

+ async 函数返回结果都是 Promise 对象（如果函数内没返回 Promise ，则自动封装一下）

  ```js
  async function fn1() {
      return new Promise((resolve, reject) => {});
  }
  console.log(fn1()); // Promise{}
  
  async function fn2() {
      return 100;
  }
  console.log(fn2()); // Promise { 100 }，相当于 Promise.resolve(100)
  ```

- await 后面跟 Promise 对象：会阻断后续代码，等待状态变为 fulfilled ，才获取结果并继续执行，相当于 Promise的then

- await 后面跟非 Promise 对象：会立即执行，直接返回

  ```js
  async function fn1() {
      const p1 = new Promise(() => {});
      await p1;
      console.log('p1'); //不会执行
  }
  fn1();
  
  async function fn2() {
      const p2 = Promise.resolve(100);
      const res = await p2;
      console.log(res); //100
  }
  fn2();
  
  async function fn3() {
      const res = await 100;
      console.log(res); //100
  }
  fn3();
  
  async function fn4() {
      const p4 = Promise.reject('error');
      const res = await p4;
      console.log(res); //不会执行，报错
  }
  fn4();
  ```

- try...catch 捕获 rejected 状态

  ```js
  async function fn4() {
      const p4 = Promise.reject('error');
      try {
          const res = await p4;
          console.log(res); //不会执行
      } catch (e) {
          console.error(e);
      }
  }
  fn4();
  ```

+ async 函数返回的 Promise 对象，必须等到内部所有 await 命令后面的 Promise 对象执行完，才会发生状态改变

总结来看：

- async 封装 Promise
- await 处理 Promise 成功
- try...catch 处理 Promise 失败

### 3. 异步本质

异步还是需要借助 event loop（事件循环）

await 是同步写法，但本质还是异步调用，async/await只是一个语法糖

```js
async function async1() {
    console.log('async start');
    await async2();
    console.log('async1 end'); // 关键在这一步，它相当于放在消息队列中，都是异步的，最后执行
}

async function async2() {
    console.log('async2');
}

console.log('script start');
async1();
console.log('script end');
```

结果：

```js
script start
async start
async2
script end
async1 end
```

即，只要遇到了 `await` ，后面的代码都相当于放在消息队列里，都是异步的

解释：

1. 首先，在主线程中执行`console.log('script start')`，输出`'script start'`
2. 然后调用`async1()`函数。在`async1`函数内部，首先执行`console.log('async start')`，输出`'async start'`
3. 接着，遇到`await async2()`语句，会先执行`async2()`函数的内容，输出`'async2'`，然后执行await，它会暂停`async1`函数的执行，将后面的代码添加到回调队列中等待执行
4. 在主线程中，继续执行`console.log('script end')`，输出`'script end'`
5. 此时，主线程中的同步代码执行完毕，JavaScript引擎开始检查回调队列中是否有待执行的任务
6. 在回调队列中，`async1`函数会继续执行，输出`'async1 end'`

## 4. 宏任务和微任务

### 1. 介绍

JavaScript把异步任务分为宏任务和微任务：

- 宏任务（宿主发起）：setTimeout、setInterval、Ajax、DOM 事件
- 微任务（JS 引擎）：Promise（对于前端来说）
- 微任务比宏任务执行的更早

```js
console.log(100);
setTimeout(() => {
    console.log(200);
});
Promise.resolve().then(() => {
    console.log(300);
});
console.log(400);
```

结果：

```js
100
400
300
200
```

### 2. event loop 和 DOM 渲染

JS是单线程的，和DOM渲染共用一个线程

每一次执行栈中同步代码执行完，都会尝试触发 DOM 渲染（不一定非得渲染，就是给一次 DOM 渲染的机会！！！），DOM 结构如有改变，则重新渲染，然后再进行 event loop

```js
const container = document.querySelector('#container');
const p1 = document.createElement('p');
p1.textContent = '一段文字';
const p2 = document.createElement('p');
p2.textContent = '一段文字';
const p3 = document.createElement('p');
p3.textContent = '一段文字';
container.appendChild(p1);
container.appendChild(p2);
container.appendChild(p3);
console.log('length:', container.children.length);
alert('本次执行栈执行结束，DOM结构已更新，但尚未触发渲染。');
// （alert 会阻断 JS 执行，也会阻断 DOM 渲染，便于查看效果）
// 到此，即本次执行栈执行结束后（同步任务都执行完了），浏览器会自动触发渲染，不用代码干预
// 另外，按照 event loop 触发 DOM 渲染时机，setTimeout 时 alert ，就能看到 DOM 渲染后的结果了
setTimeout(function () {
    alert(
        'setTimeout 是在下一次执行栈执行，就能看到 DOM 渲染出来的结果了'
    );
});
```

### 3. 宏任务和微任务的区别

- 宏任务：DOM 渲染后再触发
- 微任务：DOM 渲染前会触发

```js
// 修改 DOM
const container = document.querySelector('#container');
const p1 = document.createElement('p');
p1.textContent = '一段文字';
const p2 = document.createElement('p');
p2.textContent = '一段文字';
const p3 = document.createElement('p');
p3.textContent = '一段文字';
container.appendChild(p1);
container.appendChild(p2);
container.appendChild(p3);

// // 微任务：渲染之前执行（DOM 结构已更新）
// Promise.resolve().then(() => {
//     const length = container.children.length;
//     alert(`micro task ${length}`);
// })

// 宏任务：渲染之后执行（DOM 结构已更新）
setTimeout(() => {
    const length = container.children.length;
    alert(`macro task ${length}`);
})
```

再深入思考一下：为何两者会有以上区别，一个在渲染前，一个在渲染后？

- 微任务：ES 语法标准之内，JS 引擎来统一处理。即，不用浏览器有任何关于，即可一次性处理完，更快更及时
- 宏任务：ES 语法没有，JS 引擎不处理，浏览器（或 nodejs）干预处理

