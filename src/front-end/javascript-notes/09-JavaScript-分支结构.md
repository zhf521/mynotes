---
title: JavaScript-分支结构
order: 9
---

分支结构可以根据条件判断真假，来选择性的执行想要的代码

分支结构包含：

1. if分支结构（重点）
2. 三元运算符
3. switch分支结构

## if条件分支结构

### if分支结构

语法：

~~~javascript
if(条件表达式) {
  // 满足条件要执行的语句
}
~~~

小括号内的条件结果是布尔值，为 true 时，进入大括号里执行代码，若为 false ，则不执行大括号里面代码

小括号内的结果若不是布尔类型时，会发生类型转换为布尔值，类似`Boolean()`

如果大括号只有一个语句，大括号可以省略，但是，不提倡这样做

例：

~~~javascript
// 1. 用户输入
var score = +prompt('请输入成绩')
// 2. 进行判断输出
if (score >= 700) {
    alert('恭喜考上清华！')
}
~~~

### if双分支结构

如果有两个条件的时候，可以使用 if else 双分支语句

语法：

~~~javascript
if (条件表达式){
  // 满足条件要执行的语句
} else {
  // 不满足条件要执行的语句
}
~~~

例：

~~~javascript
// 1. 用户输入
var uname = prompt('请输入用户名:')
var pwd = prompt('请输入密码:')
// 2. 判断输出
if (uname === 'zhf' && pwd === '123456') {
    alert('恭喜登录成功')
} else {
    alert('用户名或者密码错误')
}
~~~

### if多分支结构

使用场景： 适合于有多个条件的时候

例：

~~~javascript
// 1. 用户输入
var score = +prompt('请输入成绩：')
// 2. 判断输出
if (score >= 90) {
    alert('成绩优秀，宝贝，你是我的骄傲')
} else if (score >= 70) {
    alert('成绩良好，宝贝，你要加油哦~~')
} else if (score >= 60) {
    alert('成绩及格，宝贝，你很危险~')
} else {
    alert('成绩不及格，宝贝，我不想和你说话，我只想用鞭子和你说话~')
}
~~~

## switch条件分支结构

使用场景： 适用于有多个条件的时候，也属于分支语句，大部分情况下和 if 多分支语句功能相同

语法：

```javascript
switch (要判断的变量) {
  case 情况1:
    情况1要执行的代码
    break
  case 情况2:
    情况2要执行的代码
    break
  case 情况3:
    情况3要执行的代码
    break
  default:
    上述情况都不满足的时候执行的代码
}
```

例：根据变量给出的数字显示是星期几

```javascript
var week = 1
switch (week) {
  case 1:
    alert('星期一')
    break
  case 2:
    alert('星期二')
    break
  case 3:
    alert('星期三')
    break
  case 4:
    alert('星期四')
    break
  case 5:
    alert('星期五')
    break
  case 6:
    alert('星期六')
    break
  case 7:
    alert('星期日')
    break
  default:
    alert('请输入一个 1 ～ 7 之间的数字')
}
```

注意：

1. switch case 语句一般用于等值判断, if 适合于区间判断
2. switch case 一般需要配合 break 关键字使用，没有 break 会造成 case 穿透
3. if 多分支语句开发要比 switch 更重要，使用也更多

## if和switch的区别

1. 共同点
   - 都能实现多分支选择，多选一
   - 大部分情况下可以互换
2. 区别：
   - switch…case 语句通常处理 case 为比较**确定值**的情况，而 if…else…语句更加灵活，通常用于**范围判断**(大于，等于某个范围)
   - switch 语句进行判断后直接执行到程序的语句，效率更高，而 if…else 语句有几种判断条件，就得判断多少次
   - switch 一定要注意必须是 `===`  全等，一定注意数据类型，同时注意 break 否则会有穿透效果
   - 结论：
     - 当分支比较少时，if…else 语句执行效率高
     - 当分支比较多时，switch 语句执行效率高，而且结构更清晰
