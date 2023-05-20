---
title: Vue核心-MVVM模型与数据代理
order: 4
---

> 本文示例代码：[NoteDemoCode/Vue/04-Vue核心-MVVM模型与数据代理](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/04-Vue核心-MVVM模型与数据代理)

## MVVM 模型

![Vue核心-MVVM模型与数据代理01.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-MVVM模型与数据代理01.png)

MVVM 本质上是 MVC （Model-View- Controller）的改进版。即模型-视图-视图模型

模型 model 指的是后端传递的数据，视图 view 指的是所看到的页面

视图模型 viewModel 是 MVVM 模式的核心，它是连接 view 和 model 的桥梁。它有两个方向：
1. 将模型转化成视图，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定
2. 将视图转化成模型，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听

MVVM：
+ M：模型 Model，data 中的数据  
+ V：视图 View，模板代码（不是静态页面）（两个语法：指令，大括号表达式）  
+ VM：视图模型 ViewModel，Vue 实例  
	+ Dom Listeners（Dom 监听）
	+ Data Bindings（数据绑定）

观察发现：
+ data 中所有的属性，最后都出现在了 vm 身上  
+ vm 身上所有的属性及 Vue 原型身上所有的属性，在 Vue 模板中都可以直接使用 

![Vue核心-MVVM模型与数据代理02.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-MVVM模型与数据代理02.png)

例：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MVVM</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h1>学校名称：{{name}}</h1>
      <h1>学校地址：{{address}}</h1>
      <h1>测试：{{$options}}</h1>
    </div>
    <script>
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          name: '曲阜师范大学',
          address: '曲阜',
        },
      })
      console.log(vm)
    </script>
  </body>
</html>
```

效果：

![Vue核心-MVVM模型与数据代理03.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-MVVM模型与数据代理03.png)

## Vue 中的数据代理

### Object. defineproperty 方法

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Object.defineproperty方法</title>
  </head>
  <body>
    <script>
      let number = 18
      let person = {
        name: '张三',
        sex: '男',
      }

      Object.defineProperty(person, 'age', {
        // value:18,
        // enumerable:true,		// 控制属性是否可以枚举，默认值是false
        // writable:true,			// 控制属性是否可以被修改，默认值是false
        // configurable:true	// 控制属性是否可以被删除，默认值是false

        // 当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
        get() {
          console.log('有人读取age属性了')
          return number
        },

        // 当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
        set(value) {
          console.log('有人修改了age属性，且值是', value)
          number = value
        },
      })
      console.log(person)
    </script>
  </body>
</html>
```

效果：

![Vue核心-MVVM模型与数据代理04.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-MVVM模型与数据代理04.png)

### 数据代理

数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>模拟一个数据代理</title>
  </head>
  <body>
    <script>
      let obj1 = { x: 100 }
      let obj2 = { y: 200 }
      Object.defineProperty(obj2, 'x', {
        get() {
          return obj1.x
        },
        set(value) {
          obj1.x = value
        },
      })
      console.log(obj1.x)
      console.log(obj1.y)
      console.log(obj2.x)
      console.log(obj2.y)
    </script>
  </body>
</html>
```

效果：

![Vue核心-MVVM模型与数据代理05.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-MVVM模型与数据代理05.png)

1. Vue 中的数据代理通过 vm 对象来代理 data 对象中属性的操作（读/写）  
2. Vue 中数据代理的好处：更加方便的操作 data 中的数据  
3. 基本原理  
	1. 通过 `Object.defineProperty()`把 data 对象中所有属性添加到 vm 上  
	2. 为每一个添加到 vm 上的属性，都指定一个 `getter` `setter`
	3. 在 `getter`  `setter` 内部去操作（读/写）data 中对应的属性

![Vue核心-MVVM模型与数据代理06.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-MVVM模型与数据代理06.png)

Vue 将 data 中的数据拷贝了一份到 `_data` 属性中，又将 `_data` 里面的属性提到 Vue 实例中（如 name），通过 defineProperty 实现数据代理，这样通过 geter/setter 操作 name，进而操作 `_data` 中的 name。而 `_data` 又对 data 进行数据劫持，实现响应式

例：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue中的数据代理</title>
    <!-- 引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2>学校名称：{{ name }}</h2>
      <h2>学校地址：{{ address }}</h2>
    </div>
    <script type="text/javascript">
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          name: '曲阜师范大学',
          address: '曲阜',
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-MVVM模型与数据代理07.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-MVVM模型与数据代理07.png)
