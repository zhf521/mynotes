---
title: 拷贝
order: 28
---

JS数据类型分为基本类型（string、number、boolean、undefined、null、symbol、bigint）和引用类型（object）

在JavaScript中，基础类型值的复制是直接拷贝一份新的一模一样的数据，这两份数据相互独立，互不影响

例：

```js
let a = 10
let b = a
a = 100
console.log(a) // 100
console.log(b) // 10
```

![JavaScript-拷贝01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/JavaScript-拷贝01.png)

![JavaScript-拷贝02.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/JavaScript-拷贝02.png)

而引用类型值（Object类型）的复制是传递对象的引用（也就是对象所在的内存地址，即指向对象的指针），相当于多个变量指向同一个对象，那么只要其中的一个变量对这个对象进行修改，其他的变量所指向的对象也会跟着修改（因为它们指向的是同一个对象）

例：

```js
let a = [1, 2, 3]
let b = a
a[0] = 100
console.log(a) //[100,2,3]
console.log(b) //[100,2,3]
```

![JavaScript-拷贝03.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/JavaScript-拷贝03.png)

![JavaScript-拷贝04.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/JavaScript-拷贝04.png)

浅拷贝和深拷贝只针对引用类型

## 1. 浅拷贝

浅拷贝：拷贝的是地址

常见方法：

1. 拷贝对象：`Object.assgin()` 或展开运算符 `{... obj}` 拷贝对象
2. 拷贝数组：`Array.prototype.concat()` 或 `[...arr]`

如果是简单数据类型拷贝值，引用数据类型拷贝的是地址 (简单理解： 如果是单层对象，没问题，如果有多层就有问题)

直接赋值和浅拷贝的区别：

+ 直接赋值的方法，只要是对象，都会相互影响，因为是直接拷贝对象栈里面的地址
+ 浅拷贝如果是一层对象，不相互影响，如果出现多层对象拷贝会相互影响

浅拷贝的理解：拷贝对象之后，里面的属性值是简单数据类型直接拷贝值，如果属性值是引用数据类型则拷贝的是地址

例：

```js
let a = [1, 2, 3]
let b = [...a]
a[0] = 100
console.log(a) //[100,2,3]
console.log(b) //[1,2,3]
```

![JavaScript-拷贝05.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/JavaScript-拷贝05.png)

![JavaScript-拷贝06.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/JavaScript-拷贝06.png)

如果是单层对象，没问题，如果有多层就有问题

例：

```js
let a = [1, 2, 3, [3, 4]]
let b = [...a]
a[3][1] = 5
console.log(a) //[1,2,3,[3,5]]
console.log(b) //[1,2,3,[3,5]]
```

![JavaScript-拷贝07.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/JavaScript-拷贝07.png)

![JavaScript-拷贝08.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/JavaScript-拷贝08.png)

## 2. 深拷贝

深拷贝：拷贝的是对象，不是地址

常见方法：

1. 通过递归实现深拷贝
2. lodash/cloneDeep 
3. 通过`JSON.stringify()`实现

### 2.1 递归实现深拷贝

~~~js
function deepClone(oldData) {
    if (typeof oldData !== 'object' || oldData == null) {
        return oldData
    } 
    
    let res = oldData instanceof Array ? [] : {}
    
    for (let k in oldData) {
        if (oldData.hasOwnProperty(k)) {
            res[k] = deepClone(oldData[k])
        }
    }
    return res
}

let obj = {
name: 'jack',
age: 18,
hobby: ['swim', 'sing'],
fn() {
    console.log(this.name)
},
}
let obj2 = deepClone(obj)
obj.hobby[0] = 'play'
console.log(obj2)
console.log(obj)
~~~

### 2.2 lodash库里面cloneDeep内部实现深拷贝

~~~html
<body>
  <!-- 先引用 -->
  <script src="./lodash.min.js"></script>
  <script>
    const obj = {
      uname: 'pink',
      age: 18,
      hobby: ['乒乓球', '足球'],
      family: {
        baby: '小pink'
      }
    }
    const o = _.cloneDeep(obj)
    console.log(o)
    o.family.baby = '老pink'
    console.log(obj)
  </script>
</body>
~~~

### 2.3 通过JSON.stringify()实现

```js
let a = [1, 2, 3, [3, 4, { name: 'jack' }]]
let b = JSON.parse(JSON.stringify(a))
a[3][1] = 5
a[3][2] = 'bob'
console.log(a) // [1,2,3,[3,5,{name:'bob'}]]
console.log(b) // [1,2,3,[3,4,{name:'jack'}]]
```

但是这个方法不能拷贝函数，如果里面有函数，则函数无法被拷贝
