---
title: JavaScript基础-对象
order: 11
---

对象是一个复杂数据类型

事实上没有很复杂，只不过是存储了一些基本数据类型的一个集合

```javascript
var obj = {
  num: 100,
  str: 'hello world',
  boo: true
}
```

这里的 `{}` 和函数中的 `{}` 不一样，函数里面的是写代码的，而对象里面是写一些数据的，**对象就是一个键值对的集合**，`{}` 里面的每一个键都是一个成员，也就是说，我们可以把一些数据放在一个对象里面，那么他们就互不干扰了，其实就是我们准备一个房子，把我们想要的数据放进去，然后把房子的地址给到变量名，当我们需要某一个数据的时候，就可以根据变量名里面存储的地址找到对应的房子，然后去房子里面找到对应的数据

## 创建对象

- 字面量的方式创建一个对象

  ```javascript
  // 创建一个空对象
  var obj = {}
  
  // 像对象中添加成员
  obj.name = 'Jack'
  obj.age = 18
  ```

- 内置构造函数的方式创建对象

  ```javascript
  // 创建一个空对象
  var obj = new Object()
  
  // 向对象中添加成员
  obj.name = 'Rose'
  obj.age = 20
  ```

  `Object` 是 `js` 内置给我们的构造函数，用于创建一个对象使用的
  
  ## 属性和访问
  
  数据描述性的信息称为属性，如人的姓名、身高、年龄、性别等，一般是名词性的
  
  1. 属性都是成对出现的，包括属性名和值，它们之间使用英文 `:` 分隔
  2. 多个属性之间使用英文 `,` 分隔
  3. 属性就是依附在对象上的变量
  4. 属性名可以使用 `""` 或 `''`，一般情况下省略，除非名称遇到特殊符号如空格、中横线等
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>JavaScript 基础 - 对象语法</title>
  </head>
  <body>
  
    <script>
      // 通过对象描述一个人的数据信息
      // person 是一个对象，它包含了一个属性 name
      // 属性都是成对出现的，属性名 和 值，它们之间使用英文 : 分隔
      let person = {
        name: '小明', // 描述人的姓名
        age: 18, // 描述人的年龄
        stature: 185, // 描述人的身高
        gender: '男', // 描述人的性别
      }
    </script>
  </body>
  </html>
  ```
  
  声明对象，并添加了若干属性后，可以使用 `.` 或 `对象名['属性']` 方式也可以访问 获得对象中属性对应的值，称之为属性访问
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>JavaScript 基础 - 对象语法</title>
  </head>
  <body>
  
    <script>
      // 通过对象描述一个人的数据信息
      // person 是一个对象，它包含了一个属性 name
      // 属性都是成对出现的，属性名 和 值，它们之间使用英文 : 分隔
      let person = {
        name: '小明', // 描述人的姓名
        age: 18, // 描述人的年龄
        stature: 185, // 描述人的身高
        gender: '男', // 描述人的性别
      };
      
      // 访问人的名字
      console.log(person.name) // 结果为 小明
      // 访问人性别
      console.log(person.gender) // 结果为 男
      // 访问人的身高
      console.log(person['stature']) // 结果为 185
     // 或者
      console.log(person.stature) // 结果同为 185
    </script>
  </body>
  </html>
  ```
  
  ```js
  let person = {
  	'user-name': 'pink',
  	age: 18,
  	gender: '女',
  }
  console.log(person['user-name'])//pink
  console.log(person['age'])//18
  ```
  
  扩展：也可以动态为对象添加属性，动态添加与直接定义是一样的，只是语法上更灵活
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>JavaScript 基础 - 对象语法</title>
  </head>
  <body>
  
    <script>
      // 声明一个空的对象（没有任何属性）
  	let user = {}
      // 动态追加属性
      user.name = '小明'
      user['age'] = 18
      
      // 动态添加与直接定义是一样的，只是语法上更灵活
    </script>
  </body>
  </html>
  ```
  
  删除属性：`delete 对象名.属性`
  
  ```js
  let person = {
  	uname: 'pink',
  	age: 18,
  	gender: '女',
  }
  delete person.gender
  ```
  
  ## 方法和调用
  
  数据行为性的信息称为方法，如跑步、唱歌等，一般是动词性的，其本质是函数
  
  1. 方法是由方法名和函数两部分构成，它们之间使用 `:` 分隔
  2. 多个属性之间使用英文 `,` 分隔
  3. 方法是依附在对象中的函数
  4. 方法名可以使用 `""` 或 `''`，一般情况下省略，除非名称遇到特殊符号如空格、中横线等
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>JavaScript 基础 - 对象方法</title>
  </head>
  <body>
  
    <script>
      // 方法是依附在对象上的函数
      let person = {
        name: '小红',
        age: 18,
        // 方法是由方法名和函数两部分构成，它们之间使用 : 分隔
        singing: function () {
          console.log('两只老虎，两只老虎，跑的快，跑的快...')
        },
        run: function () {
          console.log('我跑的非常快...')
        }
      }
    </script>
  </body>
  </html>
  ```
  
  声明对象，并添加了若干方法后，可以使用 `.` 或 `对象名['方法'()]` 方式也可以访问调用对象中函数，称为方法调用
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>JavaScript 基础 - 对象方法</title>
  </head>
  <body>
  
    <script>
      // 方法是依附在对象上的函数
      let person = {
        name: '小红',
        age: 18,
        // 方法是由方法名和函数两部分构成，它们之间使用 : 分隔
        singing: function () {
          console.log('两只老虎，两只老虎，跑的快，跑的快...')
        },
        run: function () {
          console.log('我跑的非常快...')
        }
      }
      
      // 调用对象中 singing 方法
      person.singing()
      // 调用对象中的 run 方法
      person.['run']()
  
    </script>
  </body>
  </html>
  ```
  
  扩展：也可以动态为对象添加方法，动态添加与直接定义是一样的，只是语法上更灵活
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>JavaScript 基础 - 对象方法</title>
  </head>
  <body>
  
    <script>
      // 声明一个空的对象（没有任何属性，也没有任何方法）
  	let user = {}
      // 动态追加属性
      user.name = '小明'
      user.['age'] = 18
      
      // 动态添加方法
      user.move = function () {
        console.log('移动一点距离...')
      }
      
    </script>
  </body>
  </html>
  ```
  
  
  ==注：无论是属性或是方法，同一个对象中出现名称一样的，后面的会覆盖前面的==
  
  ## null
  
  null 也是 JavaScript 中数据类型的一种，通常只用它来表示不存在的对象。使用 typeof 检测类型它的类型时，结果为 `object`
  
  ## 遍历对象
  
  ~~~javascript
  let obj = {
      uname: 'pink',
      age: 18,
      address: '北京',
  }
  for(let k in obj) {
      // k 是属性名，是一个字符串，带引号    obj.uname才可以取到数据，但是这里，k==='uname'，所以obj.k取不到数据，obj[k]才可以取到属性值，即obj['uname']
      console.log(obj[k])
  }
  // 结果是 pink 18 北京
  ~~~
  
  for in 不提倡遍历数组因为 k 是字符串  
  
  ```js
  let obj = {
  	uname: 'andy',
  	age: 18,
  	sex: '男',
  }
  for(let k in obj){
  	console.log(k) //打印属性名
  	console.log(boj[k]) //打印属性值
  }
  ```
  
  ==注意：`k` 是获得对象的 `属性名`，`对象名[k]` 是获得 `属性值`==
