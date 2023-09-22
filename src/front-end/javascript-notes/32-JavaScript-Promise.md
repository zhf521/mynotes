---
title: Promise
order: 32
---

## 1. Promise是什么

Promise 是异步编程的一种解决方案，比传统的解决方案使用回调函数,  更合理、更强大。可以将异步操作转化为类似同步操作的编码风格，并且在异步操作完成后可以方便地获取到操作结果或者操作失败的原因。ES6 将其写进了语言标准，统一了用法，原生提供了 Promise 对象 

- 指定回调函数方式更灵活易懂
- 解决异步**回调地狱**的问题

## 2. Promise使用

使用步骤：

1. new Promise 对象执行异步任务
2. 用 resolve 关联 then 的回调函数传递成功结果
3. 用 reject 关联 catch 的回调函数传递失败结果

语法：

  ```javascript
  // 1. 创建 Promise 对象
  const p = new Promise((resolve, reject) => {
   // 2. 执行异步任务-并传递结果
   // 成功调用: resolve(值) 触发 then() 执行
   // 失败调用: reject(值) 触发 catch() 执行
  })
  // 3. 接收结果
  p.then(result => {
   // 成功
  }).catch(error => {
   // 失败
  })
  ```

例：

```js
/**
 * 目标：使用Promise管理异步任务
*/
// 1. 创建Promise对象
const p = new Promise((resolve, reject) => {
  // 2. 执行异步代码
  setTimeout(() => {
    // resolve('模拟AJAX请求-成功结果')
    reject(new Error('模拟AJAX请求-失败结果'))
  }, 2000)
})

// 3. 获取结果
p.then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})
```

## 3. Promise对象的状态

Promise 对象通过自身的状态，来控制异步操作

Promise 实例具有三种状态：

+ 异步操作未完成（pending）（待定）
+ 异步操作成功（fulfilled）（已兑现）
+ 异步操作失败（rejected）（已拒绝）

这三种的状态的变化途径只有两种：

+ 从“未完成”到“成功”
+ 从“未完成”到“失败”

一旦状态发生变化，就凝固了，不会再有新的状态变化。这也是 Promise 这个名字的由来，它的英语意思是“承诺”，一旦承诺生效，就不再改变了。这也意味着，Promise 实例的状态变化只可能发生一次

因此，Promise 的最终结果只有两种：

+ 异步操作成功，Promise 实例传回一个值（value），状态变为fulfilled
+ 异步操作失败，Promise 实例抛出一个错误（error），状态变为rejected

![Promise01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Promise01.png)

## 4. 回调地狱

概念：在回调函数中嵌套回调函数，一直嵌套下去就形成了回调函数地狱

缺点：可读性差，异常无法捕获，耦合性严重，牵一发动全身

在ES6之前，我们用回调函数的形式来实现异步操作，容易出现回调地狱问题

比如我们有一个需求，我要先吃火锅，再喝茶，再散步，它们都是耗时的，都是异步操作，需要回调函数实现

```js
//喝茶
function getTea(fn) {
  setTimeout(function () {
    fn('喝茶')
  }, 500)
}
//吃火锅
function getHotPot(fn) {
  setTimeout(() => {
    fn('吃火锅')
  }, 800)
}
//散步
function getWalk(fn) {
  setTimeout(() => {
    fn('散步')
  }, 100)
}
```

我想直接按顺序执行：

```js
getHotPot(function (data) {
  console.log(data)
})
getTea(function (data) {
  console.log(data)
})
getWalk(function (data) {
  console.log(data)
})
```

执行结果会按消耗的时间来执行：

```txt
散步
喝茶
吃火锅
```

通过在回调函数中调用才可以实现：

```js
getHotPot(function (data) {
  console.log(data)
  getTea(function (data) {
    console.log(data)
    getWalk(function (data) {
      console.log(data)
    })
  })
})
```

结果：

```txt
吃火锅
喝茶
散步
```

这样就产生了回调地狱问题

比如我们发送三个 Ajax 请求：第一个正常发送，第二个请求需要第一个请求的结果中的某一个值作为参数，第三个请求需要第二个请求的结果中的某一个值作为参数

```js
axios({ url: 'xxx' }).then(result => {
  const a = result.data.list[0]
  axios({ url: 'xxx', params: { a } }).then(result => {
    const b = result.data.list[0]
    axios({ url: 'xxx', params: { a, b } }).then(result => {
      const c = result.data.list[0]
    })
  })
})
```

## 5. Promise链式调用

概念：依靠`then()`方法会返回一个新生成的 Promise 对象的特性，继续串联下一环任务，直到结束

利用Promise链式调用可以解决回调函数嵌套问题

![Promise02.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Promise02.png)

我们利用Promise链式调用解决上面的问题

```js
function getTea() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('喝茶')
    }, 500)
  })
}
function getHotPot() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('吃火锅')
    }, 800)
  })
}
function getWalk() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('散步')
    }, 100)
  })
}
getHotPot().then((data) => {
    console.log(data)
    return getTea()
}).then((data) => {
    console.log(data)
    return getWalk(data)
}).then((data) => {
    console.log(data)
})
```

解决Ajax回调地狱：

```js
const a = ''
axios({ url: 'xxx' }).then(result => {
  a = result.data.list[0]
  return axios({ url: 'xxx', params: { a } })
}).then(result => {
  const b = result.data.list[0]
  return axios({ url: 'xxx', params: { a, b } })
}).then(result => {
   const c = result.data.list[0]
})
```

## 6. async与await

在 async 函数内，使用 await 关键字取代 then 函数，等待获取 Promise 对象成功状态的结果值

### 6.1 基本使用

`await` 命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值

```js
async function(){
    await promise对象
}
```

我们来将上面的例子优化一下：

```js
function getTea() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('喝茶')
    }, 500)
  })
}
function getHotPot() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('吃火锅')
    }, 800)
  })
}
function getWalk() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('散步')
    }, 100)
  })
}

async function getData() {
  //直接获取resolve传递出来的异步数据
  let hotPot = await getHotPot()
  console.log(hotPot)
  let tea = await getTea()
  console.log(tea)
  let walk = await getWalk()
  console.log(walk)
}
getData()
```

优化Ajax回调地狱：

```js
async function getData() {
  const aObj = await axios({ url: 'xxx' })
  const a = aObj.data.list[0]
  const bObj = await axios({ url: 'xxx', params: { a } })
  const b = bObj.data.list[0]
  const cObj = await axios({ url: 'xxx', params: { a, b } })
  const c = cObj.data.list[0]
}
getData()
```

### 6.2 错误处理

使用`try`和`catch`

```js
try {
  // 要执行的代码
} catch (error) {
  // error 接收的是，错误消息
  // try 里代码，如果有错误，直接进入这里执行
}
```

> try 里有报错的代码，会立刻跳转到 catch 中

例：

```js
async function getData() {
  // 1. try包裹可能产生错误的代码
  try {
    const aObj = await axios({ url: 'xxx' })
    const a = aObj.data.list[0]
    const bObj = await axios({ url: 'xxx', params: { a } })
    const b = bObj.data.list[0]
    const cObj = await axios({ url: 'xxx', params: { a, b } })
    const c = cObj.data.list[0]
  } catch (error) {
    // 2. 接着调用catch块，接收错误信息
    // 如果try里某行代码报错后，try中剩余的代码不会执行了
    console.dir(error)
  }
}
getData()
```

## 7. Promise对象方法

Promise 是一个对象，也是一个构造函数

### 7.1 Promise.resolve

将现有对象转为 Promise 对象

```javascript
Promise.resolve('xxx')
// 等价于
new Promise(resolve => resolve('xxx'))
```

### 7.2 Promise.reject

`Promise.reject(reason)` 方法也会返回一个新的 Promise 实例，该实例的状态为 `rejected`

```javascript
const p = Promise.reject('error')
// 等同于
const p = new Promise((resolve, reject) => reject('error'))
```

### 7.3 Promise.all

`Promise.all()`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例

```javascript
const p = Promise.all([p1, p2, p3])
```

p 的状态由 p1, p2, p3 决定，分成两种情况：
1. 只有 `p1`、`p2`、`p3` 的状态都变成 `fulfilled`，`p` 的状态才会变成 `fulfilled`，此时 `p1`、`p2`、`p3` 的返回值组成一个数组，传递给 `p` 的回调函数
2. 只要 `p1`、`p2`、`p3` 之中有一个被 `rejected`，`p` 的状态就变成 `rejected`，此时第一个被 `reject` 的实例的返回值，会传递给 `p` 的回调函数

### 7.4 Promise.race

`Promise.race()` 方法同样是将多个 Promise 实例包装成一个新的 Promise 实例

```javascript
const p = Promise.race([p1, p2, p3])
```

上面代码中，只要 `p1`、`p2`、`p3` 之中有一个实例率先改变状态，`p` 的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给 `p` 的回调函数

### 7.5 Promise.allSettled

`Promise.allSettled()` 方法，用来确定一组异步操作是否都结束了（不管成功或失败）。所以，名为"Settled"，包含了"fulfilled"和"rejected"两种情况

```js
const promises = [ ajax('/200接口'), ajax('/401接口') ]

Promise.allSettled(promises).then(results=>{
    // 过滤出成功的请求
    results.filter(item =>item.status === 'fulfilled')
    过滤出失败的请求
    results.filter(item=> item.status === 'rejected')
})
```

### 7.6 Promise.any

只要参数实例有一个变成 `fulfilled` 状态，包装实例就会变成 `fulfilled` 状态；如果所有参数实例都变成 `rejected` 状态，包装实例就会变成 `rejected` 状态

> `Promise.any()`跟`Promise.race()`方法很像，只有一点不同，就是`Promise.any()`不会因为某个 Promise 变成`rejected`状态而结束，必须等到所有参数 Promise 变成`rejected`状态才会结束

### 7.7 finally方法

不管 promise 最后的状态，在执行完 then 或 catch 指定的回调函数以后，都会执行 finally 方法指定的回调函数

```js
const p = new Promise((resolve, reject) => {
    resolve()
	//reject()
})
p.then((res) => {
	console.log('then')
}).catch((err) => {
    console.log('error')
}).finally(() => {
    console.log('finally')
})
//结果：then finally
```

## 8. 手写Promise

```js
/*
 * @作者: kerwin
 */
function KerwinPromise(executor) {
    this.status = "pending";
    this.result = undefined;
    this.cb = []
    var _this = this;

    function resolve(res) {
        if (_this.status !== "pending") return;
        // console.log(_this)
        _this.status = "fulfilled"
        _this.result = res;

        _this.cb.forEach(item => {
            item.successCB && item.successCB(_this.result)
        });
    }

    function reject(res) {
        if (_this.status !== "pending") return;
        // console.log("reject")
        _this.status = "rejected"
        _this.result = res;
        _this.cb.forEach(item => {
            item.failCB && item.failCB(_this.result)
        });
    }
    executor(resolve, reject)
}

KerwinPromise.prototype.then = function (successCB, failCB) {

    if(!successCB){
        successCB = value=>value
    }
    if(!failCB){
        failCB = error=>error
    }

    // successCB()
    return new KerwinPromise((resolve, reject) => {
        if (this.status === "fulfilled") {
            var result = successCB && successCB(this.result)
            // console.log(result);

            if (result instanceof KerwinPromise) {
                result.then(res => {
                    // console.log(res)
                    resolve(res);
                }, err => {
                    // console.log(err)
                    reject(err)
                })
            } else {
                resolve(result);
            }
        }
        if (this.status === "rejected") {
            var result = failCB && failCB(this.result)

            if (result instanceof KerwinPromise) {
                result.then(res => {
                    // console.log(res)
                    resolve(res);
                }, err => {
                    // console.log(err)
                    reject(err)
                })
            } else {
                reject(result);
            }
        }

        if (this.status === "pending") {
            //收集回调
            this.cb.push({
                successCB: () => {
                    var result = successCB && successCB(this.result)

                    if (result instanceof KerwinPromise) {
                        result.then(res => {
                            // console.log(res)
                            resolve(res);
                        }, err => {
                            // console.log(err)
                            reject(err)
                        })
                    } else {
                        resolve(result);
                    }
                },
                failCB: () => {
                    var result = failCB && failCB(this.result)
                    if (result instanceof KerwinPromise) {
                        result.then(res => {
                            // console.log(res)
                            resolve(res);
                        }, err => {
                            // console.log(err)
                            reject(err)
                        })
                    } else {
                        reject(result);
                    }
                }
            })
        }
    })
}

KerwinPromise.prototype.catch= function(failCB){
    this.then(undefined,failCB)
}
```
