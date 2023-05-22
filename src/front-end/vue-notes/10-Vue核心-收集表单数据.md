---
title: Vue核心-收集表单数据
order: 10
---

> 本文示例代码：[NoteDemoCode/Vue/10-Vue核心-收集表单数据](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/10-Vue核心-收集表单数据)

## 收集表单数据

收集表单数据
+ 若 `<input type="text"/>`，则 v-model 收集的是 value 值，用户输入的内容就是 value 值
+ 若 `<input type="radio"/>`，则 v-model 收集的是 value 值，且要给标签配置 value 属性   
+ 若 `<input type="checkbox"/>` 
	+ 没有配置 value 属性，那么收集的是 checked 属性（勾选 or 未勾选，是布尔值）
	+ 配置了 value 属性
		+ v-model 的初始值是非数组，那么收集的就是 checked（勾选 or 未勾选，是布尔值） 
		+ v-model 的初始值是数组，那么收集的就是 value 组成的数组

v-model 的三个修饰符：   
+ lazy 失去焦点后再收集数据  
+ number 输入字符串转为有效的数字  
+ trim 输入首尾空格过滤

form 表单中 `@submit.prevent` 作用方法

```javascript
<form @submit.prevent="Demo"></form>
```

`submit`：表示通常与 form 联合使用，在表单中有提交或按钮，立马触发后面紧跟的方法

`.prevent`：表示阻止默认事件的修饰符，提交以后不会刷新页面。阻止默认事件就是指有些标签本身会存在事件，如 a 标签的跳转，form 表单中的 submit 按钮的提交事件等，某些时候想执行自己设置的事件，这个时候就需要阻止标签的默认事件的执行。在 Vue 中，只需要使用 `.prevent` 修饰符就可以

注：`.prevent` 不一定非要跟 submit 绑定在一起

例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>收集表单数据</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  </head>
  <body>
    <div id="root">
      <form @submit.prevent="test">
        账号：<input type="text" v-model.trim="userInfo.account" /><br />
        密码：<input type="password" v-model="userInfo.passWord" /><br />
        年龄：<input type="number" v-model.number="userInfo.age" /><br />
        性别：<br />
        男<input type="radio" v-model="userInfo.sex" value="male" /> 
        女<input type="radio" v-model="userInfo.sex" value="female" /><br />
        爱好：<br />
        学习<input type="checkbox" v-model="userInfo.hobby" value="study" />
        打游戏<input type="checkbox" v-model="userInfo.hobby" value="game" />
        吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat" />
        <br />
        所属校区:
        <br />
        <select v-model="userInfo.area">
          <option value="">请选择校区</option>
          <option value="QuFuL">曲阜老校区</option>
          <option value="QuFuX">曲阜新校区</option>
          <option value="RiZhao">日照校区</option>
        </select>
        <br />
        其他信息：<br />
        <textarea v-model.lazy="userInfo.other"></textarea> 
        <br />
        <input type="checkbox" v-model="userInfo.agree" />阅读并接受
        <a href="https://www.qfnu.edu.cn">《用户协议》</a>
        <br />
        <button>提交</button>
      </form>
    </div>
    <script>
      Vue.config.productionTip = false
      new Vue({
        el: '#root',
        data: {
          userInfo: {
            account: '',
            passWord: '',
            age: 18,
            sex: 'female',
            hobby: [],
            area: '',
            other: '',
            agree: '',
          },
        },
        methods: {
          test() {
            console.log(JSON.stringify(this.userInfo))
          },
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-收集表单数据01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-收集表单数据01.png)
