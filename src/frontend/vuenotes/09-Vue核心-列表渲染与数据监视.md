---
title: Vue核心-列表渲染与数据监视
order: 9
---

> 本文示例代码：[NoteDemoCode/Vue/09-Vue核心-列表渲染与数据监视](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/09-Vue核心-列表渲染与数据监视)

## 列表渲染

### 基本列表

v-for 指令  
+ 用于展示列表数据  
+ 语法：`<li v-for="(item, index) of items" :key="index">`，这里 key 可以是 index，更好的是遍历对象的唯一标识，这里的 of 也可以用 in   
+ 可遍历：数组、对象、字符串（用的少）、指定次数（用的少）

例：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>基本列表</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <!-- 遍历数组 -->
      <h3>人员列表（遍历数组）</h3>
      <ul>
        <li v-for="(p,index) of persons" :key="index">{{p.name}}-{{p.age}}</li>
      </ul>
      <!-- 遍历对象 -->
      <h3>汽车信息（遍历对象）</h3>
      <ul>
        <li v-for="(value,k) of car" :key="k">{{k}}-{{value}}</li>
      </ul>
      <!-- 遍历字符串 -->
      <h3>演示遍历字符串（用得少）</h3>
      <ul>
        <li v-for="(char,index) of str" :key="index">{{char}}-{{index}}</li>
      </ul>
      <!-- 遍历指定次数 -->
      <h3>演示遍历指定次数（用得少）</h3>
      <ul>
        <li v-for="(number,index) of 5" :key="index">
          {{ index }}-{{ number }}
        </li>
      </ul>
    </div>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          persons: [
            { id: '001', name: '张三', age: 18 },
            { id: '002', name: '李四', age: 19 },
            { id: '003', name: '王五', age: 20 },
          ],
          car: {
            name: '奥迪',
            price: '70万',
            color: '黑色',
          },
          str: 'hello',
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-列表渲染与数据监视01.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-列表渲染与数据监视01.png)

### key 的作用与原理

原理：

![Vue核心-列表渲染与数据监视02.jpg](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-列表渲染与数据监视02.jpg)

![Vue核心-列表渲染与数据监视03.jpg](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-列表渲染与数据监视03.jpg)

面试题：react、vue 中的 key 有什么作用？（key 的内部原理）  

1. 虚拟 DOM 中 key 的作用：key 是虚拟 DOM 中对象的标识，当数据发生变化时，Vue 会根据新数据生成新的虚拟 DOM，随后 Vue 进行新虚拟 DOM 与旧虚拟 DOM 的差异比较，比较规则如下：  
	1. 旧虚拟 DOM 中找到了与新虚拟 DOM 相同的 key  
		+ 若虚拟 DOM 中内容没变, 直接使用之前的真实 DOM  
		+ 若虚拟 DOM 中内容变了, 则生成新的真实 DOM，随后替换掉页面中之前的真实 DOM  
	2. 旧虚拟 DOM 中未找到与新虚拟 DOM 相同的 key  
		+ 创建新的真实 DOM，随后渲染到到页面  
2. 用 index 作为 key 可能会引发的问题  
	1. 若对数据进行逆序添加、逆序删除等破坏顺序操作，会产生没有必要的真实 DOM 更新 ==> 界面效果没问题，但效率低  
	2. 若结构中还包含输入类的 DOM：会产生错误 DOM 更新 ==> 界面有问题  
3. 开发中如何选择 key？  
	1. 最好使用每条数据的唯一标识作为 key，比如 id、手机号、身份证号、学号等唯一值  
	2. 如果不存在对数据的逆序添加、逆序删除等破坏顺序的操作，仅用于渲染列表，使用 index 作为 key 是没有问题的

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>key的原理</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2>人员列表（遍历数组）</h2>
      <button @click.once="add">添加一个老刘</button>
      <ul>
        <li v-for="(p,index) of persons" :key="index">
          {{p.name}}-{{p.age}}
          <input type="text" />
        </li>
      </ul>
    </div>
    <script type="text/javascript">
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          persons: [
            { id: '001', name: '张三', age: 18 },
            { id: '002', name: '李四', age: 19 },
            { id: '003', name: '王五', age: 20 },
          ],
        },
        methods: {
          add() {
            const p = { id: '004', name: '老刘', age: 40 }
            this.persons.unshift(p)
          },
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-列表渲染与数据监视04.gif](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-列表渲染与数据监视04.gif)

### 列表过滤

可以使用 watch 也可以使用计算属性，使用计算属性更加简单方便一点

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>列表过滤</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2>人员列表</h2>
      <input type="text" placeholder="请输入名字" v-model="keyWord" />
      <ul>
        <li v-for="(p,index) of filPersons" :key="p.id">
          {{p.name}}-{{p.age}}-{{p.sex}}
        </li>
      </ul>
    </div>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          keyWord: '',
          persons: [
            { id: '001', name: '马冬梅', age: 19, sex: '女' },
            { id: '002', name: '周冬雨', age: 20, sex: '女' },
            { id: '003', name: '周杰伦', age: 21, sex: '男' },
            { id: '004', name: '温兆伦', age: 22, sex: '男' },
          ],
          //用watch实现
          //filPersons: [],
        },
        //用watch实现
        /*watch: {
          keyWord: {
            immediate: true,
            handler(val) {
              this.filPersons = this.persons.filter((p) => {
                return p.name.indexOf(val) !== -1
              })
            },
          },
        },*/
        //用computed实现
        computed: {
          filPersons() {
            return this.persons.filter((p) => {
              return p.name.indexOf(this.keyWord) !== -1
            })
          },
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-列表渲染与数据监视05.gif](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-列表渲染与数据监视05.gif)

### 列表排序

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>列表排序</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2>人员列表</h2>
      <input type="text" placeholder="请输入名字" v-model="keyWord" />
      <button @click="sortType = 2">年龄升序</button>
      <button @click="sortType = 1">年龄降序</button>
      <button @click="sortType = 0">原顺序</button>
      <ul>
        <li v-for="(p,index) of filPersons" :key="p.id">
          {{p.name}}-{{p.age}}-{{p.sex}}
        </li>
      </ul>
    </div>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          keyWord: '',
          sortType: 0, //0原顺序，1降序，2升序
          persons: [
            { id: '001', name: '马冬梅', age: 30, sex: '女' },
            { id: '002', name: '周冬雨', age: 31, sex: '女' },
            { id: '003', name: '周杰伦', age: 18, sex: '男' },
            { id: '004', name: '温兆伦', age: 19, sex: '男' },
          ],
        },
        computed: {
          filPersons() {
            const arr = this.persons.filter((p) => {
              return p.name.indexOf(this.keyWord) !== -1
            })
            //判断是否需要排序
            if (this.sortType) {
              arr.sort((p1, p2) => {
                return this.sortType === 1 ? p2.age - p1.age : p1.age - p2.age
              })
            }
            return arr
          },
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-列表渲染与数据监视06.gif](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-列表渲染与数据监视06.gif)

## Vue 数据监视

更新时的一个问题：`this.persons[0] = {id:'001',name:'马老师',age:50,sex:'男'}` 更改 data 数据，Vue 不监听，模板不改变

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>更新时的一个问题</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2>人员列表</h2>
      <button @click="updateMei">更新马冬梅的信息</button>
      <ul>
        <li v-for="(p,index) of persons" :key="p.id">
          {{p.name}}-{{p.age}}-{{p.sex}}
        </li>
      </ul>
    </div>
    <script>
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          persons: [
            { id: '001', name: '马冬梅', age: 30, sex: '女' },
            { id: '002', name: '周冬雨', age: 31, sex: '女' },
            { id: '003', name: '周杰伦', age: 18, sex: '男' },
            { id: '004', name: '温兆伦', age: 19, sex: '男' },
          ],
        },
        methods: {
          updateMei() {
            // this.persons[0].name = '马老师'	//奏效
            // this.persons[0].age = 50				//奏效
            // this.persons[0].sex = '男'			//奏效
            // this.persons[0] = {id:'001',name:'马老师',age:50,sex:'男'} //不奏效
            this.persons.splice(0, 1, {
              id: '001',
              name: '马老师',
              age: 50,
              sex: '男',
            })
          },
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-列表渲染与数据监视07.gif](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-列表渲染与数据监视07.gif)


我们先来研究一下 Vue 是如何监测对象里面属性的改变的

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue监测数据改变的原理-对象</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h2>学校名称：{{name }}</h2>
      <h2>学校地址：{{address}}</h2>
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
    </script>
  </body>
</html>
```

我们打开控制台，由于数据代理，data 中的数据最终会出现在 vm 身上

![Vue核心-列表渲染与数据监视08.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-列表渲染与数据监视08.png)

我们复习一下数据代理：

![Vue核心-MVVM模型与数据代理06.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-MVVM模型与数据代理06.png)

Vue 将 data 中的数据拷贝了一份到 `_data` 属性中，其实在这一步之前还有一步，那就是对 data 中的数据进行加工

若没有加工的过程，那么 `_data` 和 data 中的内容应该就是一模一样的, 而 `_data` 中内容如下图：

![Vue核心-列表渲染与数据监视09.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-列表渲染与数据监视09.png)

所谓加工简单来说就是把 data 中的每一组 key-value 都生成一个 getter 和 setter，那么为什么要加工 data 呢，因为这样可以做响应式：例如当我们修改了 data 中的 name 属性，name 的 setter 就会被调用，在 setter 中调用了一个方法，会重新解析模板，生成新的虚拟 DOM，然后 diff 算法对比，然后更新页面，从而实现对数据的监视


我们来模拟一个数据监视（Vue 中实现的更加完善）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>模拟数据监视</title>
  </head>
  <body>
    <script>
      let data = {
        name: '曲阜师范大学',
        address: '曲阜',
      }
      //创建一个监视的实例对象，用于监视data中属性的变化
      const obs = new Observer(data)
      console.log(obs)
      // 准备一个vm实例对象
      let vm = {}
      vm._data = data = obs
      function Observer(obj) {
        // 汇总对象中所有的属性形成一个数组
        const keys = Object.keys(obj)
        console.log(keys)
        // 遍历
        keys.forEach((k) => {
          Object.defineProperty(this, k, {
            get() {
              return obj[k]
            },
            set(val) {
              console.log(
                `${k}被改了，我要去解析模板，生成虚拟DOM.....我要开始忙了`
              )
              obj[k] = val
            },
          })
        })
      }
    </script>
  </body>
</html>
```

Observer 构造函数会将 data 中的每个属性都添加到 Observer 实例对象中（通过 `defineProperty()`），并生成相应的 getter 和 setter，实现对 data 中属性的代理（data 是创建实例时传入的参数）

效果：

![Vue核心-列表渲染与数据监视10.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-列表渲染与数据监视10.png)

存在两个问题：
1. 在 Vue 中还对 `_data`（data） 中的属性进行了代理，可以直接通过 `vm.xxx` 操作数据，而这里需要通过 `vm._data.xxx` 来操作数据
2. 只能监测一层数据，如果 data 中有对象，对象中还有属性，就监测不到

下面我们认识一个 API：`Vue.set()`

首先我们应该知道：读取一个对象中不存在的属性，是 undefined，不报错，如果一个属性值是 undefined，Vue 不会把他展示到页面上

假设需要给某个对象添加一个新的属性（该属性一开始没有定下来，没有在源代码中写，后来随着用户的交互发现需要添加这么一个性别属性），如果直接在 `vm._data.某对象` 或者 `vm` 中添加该属性，是做不到响应式的，没有 getter 和 setter 方法，而通过 `Vue.set()` 或者 `vm.$set()` 方法，可以做到“后添加的数据也可以实现响应式“

例：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue.set的使用</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <!-- 准备好一个容器 -->
    <div id="root">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <hr />
      <h1>学生信息</h1>
      <button @click="addSex">添加一个性别，默认值男</button>
      <h2>学生姓名：{{student.name}}</h2>
      <h2 v-if="student.sex">学生性别：{{student.sex}}</h2>
      <h2>学生年龄：真实{{student.age.rAge}}，对外{{student.age.sAge}}</h2>
      <h2>朋友们</h2>
      <ul>
        <li v-for="(f,index) in student.friends" :key="index">
          {{f.name}}--{{f.age}}
        </li>
      </ul>
    </div>
    <script>
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          name: '曲阜师范大学',
          address: '曲阜',
          student: {
            name: 'tom',
            age: {
              rAge: 21,
              sAge: 18,
            },
            friends: [
              { name: 'jerry', age: 23 },
              { name: 'tony', age: 24 },
            ],
          },
        },
        methods: {
          addSex() {
            //Vue.set(this.student, 'sex', '男')
            this.$set(this.student, 'sex', '男')
          },
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-列表渲染与数据监视11.gif](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-列表渲染与数据监视11.gif)

接下来我们研究一下 Vue 是如何监测数组里面属性的改变的

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue监测数据改变的原理-数组</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <hr />
      <h1>学生信息</h1>
      <button @click="addSex">添加一个性别，默认值男</button>
      <h2>学生姓名：{{student.name}}</h2>
      <h2 v-if="student.sex">学生性别：{{student.sex}}</h2>
      <h2>学生年龄：真实{{student.age.rAge}}，对外{{student.age.sAge}}</h2>
      <h2>朋友们</h2>
      <ul>
        <li v-for="(f,index) in student.friends" :key="index">
          {{f.name}}--{{f.age}}
        </li>
      </ul>
      <h2>爱好</h2>
      <ul>
        <li v-for="(h,index) in student.hobby" :key="index">{{h}}</li>
      </ul>
    </div>
    <script>
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          name: '曲阜师范大学',
          address: '曲阜',
          student: {
            name: 'tom',
            age: {
              rAge: 21,
              sAge: 18,
            },
            hobby: ['唱', '跳', 'rap'],
            friends: [
              { name: 'jerry', age: 23 },
              { name: 'tony', age: 24 },
            ],
          },
        },
        methods: {
          addSex() {
            //Vue.set(this.student, 'sex', '男')
            this.$set(this.student, 'sex', '男')
          },
        },
      })
    </script>
  </body>
</html>
```

我们在控制台中会发现：

![Vue 核心-列表渲染与数据监视12.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-列表渲染与数据监视12.png)

数组中的数据并没有 getter 和 setter 方法，这也就解释了上面的更新数组的问题

总结
+ vue 会监视 data 中所有层次的数据  
+ 如何监测对象中的数据？通过 setter 实现监视，且要在 `new Vue()` 时就传入要监测的数据
	+ 对象创建后追加的属性，Vue 默认不做响应式处理  
	+ 如需给后添加的属性做响应式，请使用如下 API  `Vue.set(target,propertyName/index,value)` 或 `vm.$set(target,propertyName/index,value)`  
+ 如何监测数组中的数据？ 通过包裹数组更新元素的方法实现，本质就是做了两件事
	+ 调用原生对应的方法对数组进行更新  
	+ 重新解析模板，进而更新页面  
+ 在 Vue 修改数组中的某个元素一定要用如下方法
	+ `push()` 、`pop()` 、`unshift()`、`shift()`、`splice()`、`sort()`、`reverse()` ，这几个方法被 Vue 重写了
	+ `Vue.set()` 或 `vm.$set()`，特别注意：`Vue.set()` 和 `vm.$set()` 不能给 vm 或 vm 的根数据对象（data 等）添加属性

综合案例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>总结数据监视</title>
    <style>
      button {
        margin-top: 10px;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <h1>学生信息</h1>
      <button @click="student.age++">年龄+1岁</button> <br />
      <button @click="addSex">添加性别属性，默认值：男</button> <br />
      <button @click="student.sex = '未知' ">修改性别</button> <br />
      <button @click="addFriend">在列表首位添加一个朋友</button> <br />
      <button @click="updateFirstFriendName">
        修改第一个朋友的名字为：张三
      </button>
      <br />
      <button @click="addHobby">添加一个爱好</button> <br />
      <button @click="updateHobby">修改第一个爱好为：开车</button> <br />
      <button @click="removeSmoke">过滤掉爱好中的rap</button> <br />
      <h3>姓名：{{ student.name }}</h3>
      <h3>年龄：{{ student.age }}</h3>
      <h3 v-if="student.sex">性别：{{student.sex}}</h3>
      <h3>爱好：</h3>
      <ul>
        <li v-for="(h,index) in student.hobby" :key="index">{{ h }}</li>
      </ul>
      <h3>朋友们：</h3>
      <ul>
        <li v-for="(f,index) in student.friends" :key="index">
          {{ f.name }}--{{ f.age }}
        </li>
      </ul>
    </div>
    <script type="text/javascript">
      Vue.config.productionTip = false
      const vm = new Vue({
        el: '#root',
        data: {
          student: {
            name: 'tom',
            age: 18,
            hobby: ['唱', '跳', 'rap'],
            friends: [
              { name: 'jerry', age: 35 },
              { name: 'tony', age: 36 },
            ],
          },
        },
        methods: {
          addSex() {
            // Vue.set(this.student,'sex','男')
            this.$set(this.student, 'sex', '男')
          },
          addFriend() {
            this.student.friends.unshift({ name: 'jack', age: 70 })
          },
          updateFirstFriendName() {
            this.student.friends[0].name = '张三'
          },
          addHobby() {
            this.student.hobby.push('学习')
          },
          updateHobby() {
            // this.student.hobby.splice(0,1,'开车')
            // Vue.set(this.student.hobby,0,'开车')
            this.$set(this.student.hobby, 0, '开车')
          },
          removeSmoke() {
            this.student.hobby = this.student.hobby.filter((h) => {
              return h !== 'rap'
            })
          },
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue 核心-列表渲染与数据监视13.gif](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-列表渲染与数据监视13.gif)
