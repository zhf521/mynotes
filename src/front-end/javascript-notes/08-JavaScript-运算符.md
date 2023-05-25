---
title: JavaScript基础-运算符
order: 8
---

## 算术运算符

算术运算符：也叫数学运算符，主要包括加、减、乘、除、取余（求模）等

+ `+`
  + 只有符号两边都是数字的时候才会进行加法运算
  + 只要符号任意一边是字符串类型，就会进行字符串拼接

+ `-`
  + 会执行减法运算
  + 会自动把两边都转换成数字进行运算

+ `*`
  + 会执行乘法运算
  + 会自动把两边都转换成数字进行运算

+ `/`
  + 会执行除法运算
  + 会自动把两边都转换成数字进行运算

+ `%`
  + 会执行取余运算
  + 会自动把两边都转换成数字进行运算

注意：在计算失败时，显示的结果是 NaN（not a number）

## 赋值运算符

赋值运算符：对变量进行赋值的运算符

`=` 将等号右边的值赋予给左边, 要求左边必须是一个容器

| 运算符 | 作用     |
| ------ | -------- |
| +=     | 加法赋值 |
| -+     | 减法赋值 |
| *=     | 乘法赋值 |
| /=     | 除法赋值 |
| %=     | 取余赋值 |

## 比较运算符

使用场景：比较两个数据是否相等，根据比较结果返回一个布尔值（true / false）

| 运算符 | 作用                                   |
| ------ | -------------------------------------- |
| >      | 左边是否大于右边                       |
| <      | 左边是否小于右边                       |
| >=     | 左边是否大于或等于右边                 |
| <=     | 左边是否小于或等于右边                 |
| ===    | 左右两边是否`类型`和`值`都相等（重点） |
| ==     | 左右两边`值`是否相等                   |
| !=     | 左右值不相等                           |
| !==    | 左右两边是否不全等                     |

例：

```js
  console.log(3 > 5)
  console.log(3 >= 3)
  console.log(2 == 2)
  // 比较运算符有隐式转换 把'2' 转换为 2  双等号 只判断值
  console.log(2 == '2')  // true
  // console.log(undefined === null)
  // === 全等 判断 值 和 数据类型都一样才行
  // 以后判断是否相等 请用 ===  
  console.log(2 === '2')
  console.log(NaN === NaN) // NaN 不等于任何人，包括他自己
  console.log(2 !== '2')  // true  
  console.log(2 != '2') // false 
  console.log('-------------------------')
  console.log('a' < 'b') // true
  console.log('aa' < 'ab') // true
  console.log('aa' < 'aac') // true
  console.log('-------------------------')
```

## 逻辑运算符

### 基本使用

使用场景：可以把多个布尔值放到一起运算，最终返回一个布尔值

| 符号 | 名称   | 日常读法 | 特点                       | 口诀           |
| ---- | ------ | -------- | -------------------------- | -------------- |
| &&   | 逻辑与 | 并且     | 符号两边有一个假的结果为假 | 一假则假       |
| \|\| | 逻辑或 | 或者     | 符号两边有一个真的结果为真 | 一真则真       |
| !    | 逻辑非 | 取反     | true变false  false变true   | 真变假，假变真 |

| A     | B     | A && B | A \|\| B | !A    |
| ----- | ----- | ------ | -------- | ----- |
| false | false | false  | false    | true  |
| false | true  | false  | true     | true  |
| true  | false | false  | true     | false |
| true  | true  | true   | true     | false |

```js
    // 逻辑与 一假则假
    console.log(true && true)
    console.log(false && true)
    console.log(3 < 5 && 3 > 2)
    console.log(3 < 5 && 3 < 2)
    console.log('-----------------')
    // 逻辑或 一真则真
    console.log(true || true)
    console.log(false || true)
    console.log(false || false)
    console.log('-----------------')
    // 逻辑非  取反
    console.log(!true)
    console.log(!false)

    console.log('-----------------')

    let num = 6
    console.log(num > 5 && num < 10)
    console.log('-----------------')
```

### 逻辑中断

断路：只存在于 `&&` 和 `||` 中，当满足一定条件会让右边代码不执行

| 符号         | 短路条件            |
| ------------ | ------------------- |
| &&           | 左边为 false 就断路 |
| &#124;&#124; | 左边为 true 就断路  |

原因：通过左边能得到整个式子的结果，因此没必要再判断右边

运算结果：无论 `&&` 还是 `||`，运算结果都是最后被执行的表达式值，一般用在变量赋值

例：

```js
console.log(false && 20) //false
console.log(5 < 3 && 20) //false
console.log(undefined && 20) //undefined
console.log(null && 20) //null
console.log(0 && 20) //0
console.log(10 && 20) //20

console.log(false || 20) //20
console.log(5 < 3 || 20) //20
console.log(undefined || 20) //20
console.log(null || 20) //20
console.log(0 || 20) //20
console.log(10 || 20) //10
```

### 逻辑运算符优先级

！> && >  ||

## 自增自减运算符

+ `++`

  + 进行自增运算

  + 分成两种，**前置++** 和 **后置++**

    + 前置++，会先把值自动 +1，再返回

      ```js
      var a = 10
      console.log(++a)
      // 会返回 11，并且把 a 的值变成 11
      ```

    + 后置++，会先把值返回，再自动+1

      ```js
      var a = 10
      console.log(a++)
      // 会返回 10，然后把 a 的值变成 11
      ```

+ `--`

  - 进行自减运算

  - 分成两种，**前置--** 和 **后置--**

  - 和 `++` 运算符道理一样

## 三元运算符

三元运算，就是用 **两个符号** 组成一个语句

语法： 

```js
条件 ? 条件为 true 的时候执行 : 条件为 false 的时候执行
```

例：

```javascript
var age = 18
age >= 18 ? alert('已经成年') : alert('没有成年')
```

