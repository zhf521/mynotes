---
title: 面向对象编程
order: 22
---

首先，我们要明确，面向对象不是语法，是一个思想，是一种**编程思想**

## 1. 编程思想

### 1.1 面向过程

面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次调用就可以了

+ 优点：性能比面向对象高，适合跟硬件联系很紧密的东西
+ 缺点：没有面向对象易维护、易复用、易扩展

### 1.2 面向对象

面向对象是把事务分解成为一个个对象，然后由对象之间分工与合作

在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工

面向对象编程具有灵活、代码可复用、容易维护和开发的优点，更适合多人合作的大型软件项目

面向对象的特性：封装性、继承性、多态性

+ 优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统更加灵活、更加易于维护
+ 缺点：性能比面向过程低

## 2. 创建对象的方式

因为面向对象就是一个找到对象的过程，所以我们先要了解如何创建一个对象

### 2.1 使用构造函数创建对象

构造函数是专门用于创建对象的函数，如果一个函数使用 `new` 关键字调用，那么这个函数就是构造函数

JS 给我们内置了一个 Object 构造函数，这个构造函数就是用来创造对象的，当构造函数和new 关键字连用的时候，就可以为我们创造出一个对象，因为 JS 是一个动态的语言，那么我们就可以动态的向对象中添加成员了

```javascript
// 就能得到一个空对象
var o1 = new Object() 

// 正常操作对象
o1.name = 'Jack'
o1.age = 18
o1.gender = '男'
```

### 2.2 使用字面量创建对象

直接使用字面量的形式，也就是直接写 `{}`，可以在写的时候就添加好成员，也可以动态的添加

```javascript
// 字面量方式创建对象
var o1 = {
  name: 'Jack',
  age: 18,
  gender: '男'
}

// 再来一个
var o2 = {}
o2.name = 'Rose'
o2.age = 20
o2.gender = '女'
```

### 2.3 使用工厂函数创建对象

先书写一个工厂函数，这个工厂函数里面可以创造出一个对象，并且给对象添加一些属性，还能把对象返回

使用这个工厂函数创造对象

```javascript
// 1. 先创建一个工厂函数
function createObj() {
  // 手动创建一个对象
  var obj = new Object()

  // 手动的向对象中添加成员
  obj.name = 'Jack'
  obj.age = 18
  obj.gender = '男'

  // 手动返回一个对象
  return obj
}

// 2. 使用这个工厂函数创建对象
var o1 = createObj()
var o2 = createObj()
```

### 2.4 使用自定义构造函数创建对象

工厂函数需要经历三个步骤：

1. 手动创建对象
2. 手动添加成员
3. 手动返回对象

构造函数会比工厂函数简单一些：

1. 自动创建对象
2. 手动添加成员
3. 自动返回对象

先书写一个构造函数，在构造函数内向对象添加一些成员，使用这个构造函数创造一个对象（和 new 连用），构造函数可以创建对象，并且创建一个带有属性和方法的对象

面向对象就是要想办法找到一个有属性和方法的对象，面向对象就是我们自己制造 **构造函数** 的过程

```javascript
// 1. 先创造一个构造函数
function Person(name, gender) {
  this.age = 18
  this.name = name
  this.gender = gender
}

// 2. 使用构造函数创建对象
var p1 = new Person('Jack', 'man')
var p2 = new Person('Rose', 'woman')
```

## 3. 构造函数详解

我们了解了对象的创建方式，我们的面向对象就是要么能直接得到一个对象，要么就弄出一个能创造对象的东西，我们自己创造对象。我们的构造函数就能创造对象，所以接下来我们就详细聊聊**构造函数**

### 3.1 构造函数的基本使用

+ 和普通函数一样，只不过**调用的时候要和 new 连用**，不然就是一个普通函数调用

  ```js
  function Person() {}
  var o1 = new Person()  // 能得到一个空对象
  var o2 = Person()      // 什么也得不到，这个就是普通函数调用
  ```

	注意：**不写 new 的时候就是普通函数调用，没有创造对象的能力**

+ 习惯将首字母大写

  ```js
  function person() {}
  var o1 = new person() // 能得到一个对象
  
  function Person() {}
  var o2 = new Person() // 能得到一个对象
  ```

  注意： **首字母不大写，只要和 new 连用，就有创造对象的能力**

+ 当调用的时候如果不需要传递参数可以不写 `()`，建议都写上

  ```js
  function Person() {}
  var o1 = new Person()  // 能得到一个空对象
  var o2 = new Person    // 能得到一个空对象 
  ```

  注意： **如果不需要传递参数，那么可以不写 ()，如果传递参数就必须写**

+ 构造函数内部的 this，由于和 new 连用的关系，是指向当前实例对象的

  ```js
  function Person() {
    console.log(this)
  }
  var o1 = new Person()  // 本次调用的时候，this => o1
  var o2 = new Person()  // 本次调用的时候，this => o2
  ```

  注意： **每次 new 的时候，函数内部的 this 都是指向当前这次的实例化对象**

+ 因为构造函数会自动返回一个对象，所以构造函数内部不要写 return

  - 你如果 return 一个基本数据类型，那么写了没有意义
  - 如果你 return 一个引用数据类型，那么构造函数本身的意义就没有了

### 3.2 使用构造函数封装对象

我们在使用构造函数的时候，可以通过一些代码和内容来向当前的对象中添加一些内容

```javascript
function Person() {
  this.name = 'Jack'
  this.age = 18
}

var o1 = new Person()
var o2 = new Person()
```

我们得到的两个对象里面都有自己的成员 **name** 和 **age**，我们在写构造函数的时候，是不是也可以添加一些方法进去呢？

```javascript
function Person() {
  this.name = 'Jack'
  this.age = 18
  this.sayHi = function () {
    console.log('hello constructor')
  }
}

var o1 = new Person()
var o2 = new Person()
```

显然是可以的，我们的到的两个对象中都有 `sayHi` 这个函数，也都可以正常调用，但是这样好不好呢？缺点在哪里？

```javascript
function Person() {
  this.name = 'Jack'
  this.age = 18
  this.sayHi = function () {
    console.log('hello constructor')
  }
}

// 第一次 new 的时候， Person 这个函数要执行一遍
// 执行一遍就会创造一个新的函数，并且把函数地址赋值给 this.sayHi
var o1 = new Person()

// 第二次 new 的时候， Person 这个函数要执行一遍
// 执行一遍就会创造一个新的函数，并且把函数地址赋值给 this.sayHi
var o2 = new Person()
```

这样的话，那么我们两个对象内的 `sayHi` 函数就是一个代码一模一样，功能一模一样，但是是两个空间函数，占用两个内存空间，也就是说 `o1.sayHi` 是一个地址，`o2.sayHi` 是一个地址，所以我们执行 `console.log(o1 === o2.sayHi)` 的到的结果是 `false`

缺点： **一模一样的函数出现了两次，占用了两个空间地址，存在内存浪费问题**

怎么解决这个问题呢？就需要用到一个东西，叫做**原型**

## 4. 原型

原型的出现，就是为了解决**构造函数的缺点**，也就是给我们提供了一个给对象添加函数的方法，不然构造函数只能给对象添加属性，不能合理的添加函数

### 4.1 prototype

**每一个函数天生自带一个成员，叫做 prototype**，这个 `prototype` 属性可以由函数名来访问，它是一个对象，我们称为原型对象

```javascript
function Person() {}

console.log(Person.prototype) // 是一个对象
```

即然是个对象，那么我们就可以向里面放入一些东西

```javascript
function Person() {
    // 此处未定义任何方法
  }

  // 为构造函数的原型对象添加方法
  Person.prototype.sayHi = function () {
    console.log('Hi~');
  }
	
  var p1 = new Person();
  p1.sayHi(); // 输出结果为 Hi~
```

我们发现了一个叫做 `prototype` 的对象是和函数有关联的，并且可以向里面存储一些东西

重点： **在函数的 prototype 里面存储的内容，不是给函数使用的，是给函数的每一个实例化对象使用的**

### 4.2 _\_proto\_\_

**每一个对象都天生自带一个成员，叫做 `__proto__`，是一个对象空间**，我们称为对象原型，`[[prototype]]` 和 `__proto__` 意义相同

即然每一个对象都有，实例化对象也是对象，那么每一个实例化对象也有这个成员，这个 `__proto__` 对象空间是给每一个对象使用的

当你访问一个对象中的成员的时候

- 如果这个对象自己本身有这个成员，那么就会直接给你结果
- 如果没有，就会去 `__proto__` 这个对象空间里面找，里面有的话就给你结果

那么这个 `__proto__` 又指向哪里呢？这个对象是由哪个构造函数 new 出来的，那么这个对象的 `__proto__` 就指向这个构造函数的 `prototype`

```javascript
function Person() {}

var p1 = new Person()

console.log(p1.__proto__ === Person.prototype) // true
```

我们发现实例化对象的 `__proto__` 和所属的构造函数的 `prototype` 是一个对象空间，我们可以通过构造函数名称来向 `prototype` 中添加成员，对象在访问的时候自己没有，可以自动去自己的 `__proto__` 中查找

那么，我们之前构造函数的缺点就可以解决了：我们可以把函数放在构造函数的 `prototype` 中，实例化对象访问的时候，自己没有，就会自动去 `__proto__` 中找，那么也可以使用了

```javascript
function Person() {}

Person.prototype.sayHi = function () {
  console.log('hello Person')
}

var p1 = new Person()
p1.sayHi()
```

`p1` 自己没有 `sayHi` 方法，就会去自己的 `__proto__` 中查找，`p1.__proto__` 就是 `Person.prototype`，我们又向 `Person.prototype` 中添加了 `sayHi` 方法，所以 `p1.sayHi` 就可以执行了

到这里，当我们实例化多个对象的时候，每个对象里面都没有方法，都是去所属的构造函数的 `prototype` 中查找，那么每一个对象使用的函数，其实都是同一个函数，那么就解决了我们构造函数的缺点

```javascript
function Person() {}

Person.prototype.sayHi = function () {
  console.log('hello')
}

var p1 = new Person()
var p2 = new Person()

console.log(p1.sayHi === p2.sayHi)
```

`p1` 是 `Person` 的一个实例，`p2` 是 `Person` 的一个实例，也就是说 `p1.__proto__` 和 `p2.__proto__` 指向的都是 `Person.prototype`，当 `p1` 去调用 `sayHi` 方法的时候是去 `Person.prototype` 中找，当 `p2` 去调用 `sayHi` 方法的时候是去 `Person.prototype` 中找，那么两个实例化对象就是找到的一个方法，也是执行的一个方法

结论：当我们写构造函数的时候，**属性我们直接写在构造函数体内**，**方法我们写在原型对象上**

### 4.3 constructor

`proto`里面有一个成员叫做 **`constructor`**，这个属性就是指向当前这个对象所属的构造函数

使用场景：如果有多个对象的方法，我们可以给原型对象采取对象形式赋值，但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor 就不再指向当前构造函数了，此时，我们可以在修改后的原型对象中，添加一个 constructor 指向原来的构造函数

```js
function Star(name){
	this.name = name
}
Star.prototype = {
	sing:function(){console.log('唱歌')},
	dance:function(){console.log('跳舞')}
}
console.log(Star.prototype.constructor) // 指向Object
```

```js
function Star(name){
	this.name = name
}
Star.prototype = {
	//手动利用constructor指回Star构造函数
	constructor:Star,
	sing:function(){console.log('唱歌')},
	dance:function(){console.log('跳舞')}
}
console.log(Star.prototype.constructor) // 指向Star
```

我们刚才聊过构造函数了，也聊了原型，那么问题出现了，我们说构造函数的 `prototype` 是一个对象，又说了每一个对象都天生自带一个 `__proto__` 属性，那么 **构造函数的 prototype** 里面的 `__proto__` 属性又指向哪里呢？

`__proto__`里面也有一个成员叫做 **`constructor`**，这个属性就是指向当前这个对象所属的构造函数

```js
function Star() {}
const ldh = new Star()
//对象原型里面有constructor 指向构造函数 Star
console.log(ldh.__proto__.constructor === Star)
```

## 5. 原型链

### 5.1 链状结构

当一个对象我们不知道准确的是谁构造的时候，我们呢就把它看成 `Object` 的实例化对象，也就是说，我们的 **构造函数 的 prototype 的 `__proto__`** 指向的是 `Object.prototype`

那么 `Object.prototype` 也是个对象，那么它的 `__proto__` 又指向谁呢？因为 `Object` 是 JS 中的顶级构造函数，我们有一句话叫 **万物皆对象**，所以 `Object.prototype` 就到顶了，`Object.prototype` 的 `__proto__` 就是 null 

![JavaScript-面向对象编程01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/JavaScript-面向对象编程01.png)

```js
    function Person() {
    }
    const xm = new Person()
    console.log(xm.__proto__ === Person.prototype) //true
    console.log(Person.prototype.__proto__ === Object.prototype) //true
    console.log(xm instanceof Person) //true
    console.log(xm instanceof Object) //true
    console.log(xm instanceof Array) //false
    console.log([1, 2, 3] instanceof Array) //true
    console.log(Array instanceof Object) //true
```

### 5.2 原型链的访问原则

1. 当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性
2. 如果没有就查找它的原型（也就是 `__proto__` 指向的 prototype 原型对象）
3. 如果还没有就查找原型对象的原型（Object 的原型对象）
4. 依此类推一直找到 Object 为止（null）
5. `__proto__` 对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线
6. 可以使用 instanceof 运算符来检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

## 6. 对象的赋值

到这里，我们就会觉得，如果是赋值的话，那么也会按照原型链的规则来，但是： **并不是！并不是！并不是！** 重要的事情说三遍

赋值的时候，就是直接给对象自己本身赋值，如果原先有就是修改，原先没有就是添加，不会和 `__proto__` 有关系

## 7. 继承

### 7.1 构造函数继承

```js
function Student(name,age,classroom){
            Person.call(this,name,age)
            this.classroom = classroom
}
```

### 7.2 原型继承

```js
Student.prototype = new Person()
```

### 7.3 组合继承

构造函数继承+原型继承

```js
function Person(name,age){
    this.name = name
    this.age = age
}

Person.prototype.say = function(){
    console.log("hello")
}

function Student(name,age,classroom){
    Person.call(this,name,age)
    this.classroom = classroom
}

Student.prototype = new Person()

var obj = new Student("kerwin",100,"1班")
```
