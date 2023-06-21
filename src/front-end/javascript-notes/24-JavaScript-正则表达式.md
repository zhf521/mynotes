---
title: 正则表达式
order: 24
---

**正则表达式**（Regular Expression）是一种字符串匹配的模式（规则）

使用场景：

+ 通常用来提取、匹配、替换那些符合正则表达式的文本
  - 例如验证表单：手机号表单要求用户只能输入11位的数字 (匹配)
  - 过滤掉页面内容中的一些敏感词 (替换)
  - 从字符串中获取我们想要的特定部分 (提取)

## 1. 正则基本使用

### 1.1 定义规则

   ~~~JavaScript
var 变量名 =  /表达式/
   ~~~

+ 其中 ` /   / ` 是正则表达式字面量
+ 正则表达式也是`对象 `

比如：

```js
var reg = /前端/
```

### 1.2 判断是否有符合规则的字符串

`test()` 方法用来查看正则表达式与指定的字符串是否匹配

如果正则表达式与指定的字符串匹配，返回 `true`，否则返回 `false`

语法：

```js
正则表达式对象.test(被检测的字符串)
```

~~~html
<body>
  <script>
    // 正则表达式的基本使用
    var str = 'web前端开发'
    // 1. 定义规则
    var reg = /web/
    // 2. 使用正则  test()
    console.log(reg.test(str))  // true  如果符合规则匹配上则返回true
    console.log(reg.test('java开发'))  // false  如果不符合规则匹配上则返回 false
  </script>
</body>
~~~

### 1.3 检索(查找)符合规则的字符串

`exec()` 方法用于在一个指定字符串中执行一个搜索匹配

如果匹配成功，`exec()` 方法返回一个数组，否则返回 `null`

语法：

```js
正则表达式对象.exec(被检测的字符串)
```

### 1.4 替换符合规则的字符串

`replace()` 方法用于替换字符串

语法：

```js
字符串.replace(/正则表达式/,'替换的文本')
```

## 2. 元字符

+ 普通字符:
  - 大多数的字符仅能够描述它们本身，这些字符称作普通字符，例如所有的字母和数字
  - 普通字符只能够匹配字符串中与它们相同的字符
  - 比如，规定用户只能输入英文26个英文字母，普通字符的话  `/[abcdefghijklmnopqrstuvwxyz]/`
+ 元字符 (特殊字符）
  - 是一些具有特殊含义的字符，可以极大提高了灵活性和强大的匹配功能
  - 比如，规定用户只能输入英文26个英文字母，换成元字符写法：`/[a-z]/`

### 2.1 边界符

正则表达式中的边界符（位置符）用来提示字符所处的位置，主要有两个字符

| 边界符 | 说明                           |
| ------ | ------------------------------ |
| `^`    | 表示匹配行首的文本（以谁开始） |
| `$`    | 表示匹配行尾的文本（以谁结束） |

如果 `^` 和 `$` 在一起，表示必须是精确匹配

~~~html
<body>
  <script>
    // 元字符之边界符
    // 1. 匹配开头的位置 ^
    var reg = /^web/
    console.log(reg.test('web前端'))  // true
    console.log(reg.test('前端web'))  // false
    console.log(reg.test('前端web学习'))  // false
    console.log(reg.test('we'))  // false

    // 2. 匹配结束的位置 $
    var reg1 = /web$/
    console.log(reg1.test('web前端'))  //  false
    console.log(reg1.test('前端web'))  // true
    console.log(reg1.test('前端web学习'))  // false
    console.log(reg1.test('we'))  // false  

    // 3. 精确匹配 ^ $
    var reg2 = /^web$/
    console.log(reg2.test('web前端'))  //  false
    console.log(reg2.test('前端web'))  // false
    console.log(reg2.test('前端web学习'))  // false
    console.log(reg2.test('we'))  // false 
    console.log(reg2.test('web'))  // true
    console.log(reg2.test('webweb'))  // flase 
  </script>
</body>
~~~

### 2.2 量词

量词用来设定某个模式重复次数

| 量词    | 说明              |
| ------- | ----------------- |
| `*`     | 重复零次或更多次  |
| `+`     | 重复一次或更多次  |
| `?`     | 重复零次或一次    |
| `{n}`   | 重复 n 次         |
| `{n,}`  | 重复 n 次或更多次 |
| `{n,m}` | 重复 n 到 m 次    |

==注意： 逗号左右两侧千万不要出现空格==

~~~html
<body>
  <script>
    // 元字符之量词
    // 1. * 重复次数 >= 0 次
    var reg1 = /^w*$/
    console.log(reg1.test(''))  // true
    console.log(reg1.test('w'))  // true
    console.log(reg1.test('ww'))  // true
    console.log('-----------------------')

    // 2. + 重复次数 >= 1 次
    var reg2 = /^w+$/
    console.log(reg2.test(''))  // false
    console.log(reg2.test('w'))  // true
    console.log(reg2.test('ww'))  // true
    console.log('-----------------------')

    // 3. ? 重复次数  0 || 1 
    var reg3 = /^w?$/
    console.log(reg3.test(''))  // true
    console.log(reg3.test('w'))  // true
    console.log(reg3.test('ww'))  // false
    console.log('-----------------------')


    // 4. {n} 重复 n 次
    var reg4 = /^w{3}$/
    console.log(reg4.test(''))  // false
    console.log(reg4.test('w'))  // flase
    console.log(reg4.test('ww'))  // false
    console.log(reg4.test('www'))  // true
    console.log(reg4.test('wwww'))  // false
    console.log('-----------------------')

    // 5. {n,} 重复次数 >= n 
    var reg5 = /^w{2,}$/
    console.log(reg5.test(''))  // false
    console.log(reg5.test('w'))  // false
    console.log(reg5.test('ww'))  // true
    console.log(reg5.test('www'))  // true
    console.log('-----------------------')

    // 6. {n,m}   n =< 重复次数 <= m
    var reg6 = /^w{2,4}$/
    console.log(reg6.test('w'))  // false
    console.log(reg6.test('ww'))  // true
    console.log(reg6.test('www'))  // true
    console.log(reg6.test('wwww'))  // true
    console.log(reg6.test('wwwww'))  // false

    // 7. 注意事项： 逗号两侧千万不要加空格否则会匹配失败

  </script>
~~~

### 2.3 字符集合

+ `[abc]` 匹配包含的单个字符，也就是只有 a 或 b 或 c 这三个单字符则返回 true，可以理解为多选一
+ `[a-z]` `-` 是连字符，用来指定字符范围，`[a-z]` 表示匹配 a 到 z 这26 个英文字母
+ `[^abc]` `^` 是取反符，`[^abc]` 表示匹配除了小写字母以外的字符
+ `[a-zA-Z]` 表示匹配大小写字母
+ `[0-9]` 表示匹配 0~9 的数字
+ `.` 表示匹配除换行符之外的任何单个字符

~~~html
<body>
  <script>
    // 元字符之范围  []  
    // 1. [abc] 匹配包含的单个字符， 多选1
    var reg1 = /^[abc]$/
    console.log(reg1.test('a'))  // true
    console.log(reg1.test('b'))  // true
    console.log(reg1.test('c'))  // true
    console.log(reg1.test('d'))  // false
    console.log(reg1.test('ab'))  // false

    // 2. [a-z] 连字符 单个
    var reg2 = /^[a-z]$/
    console.log(reg2.test('a'))  // true
    console.log(reg2.test('p'))  // true
    console.log(reg2.test('0'))  // false
    console.log(reg2.test('A'))  // false
    // 想要包含小写字母，大写字母 ，数字
    var reg3 = /^[a-zA-Z0-9]$/
    console.log(reg3.test('B'))  // true
    console.log(reg3.test('b'))  // true
    console.log(reg3.test(9))  // true
    console.log(reg3.test(','))  // flase

    // 用户名可以输入英文字母，数字，可以加下划线，要求 6~16位
    var reg4 = /^[a-zA-Z0-9_]{6,16}$/
    console.log(reg4.test('abcd1'))  // false 
    console.log(reg4.test('abcd12'))  // true
    console.log(reg4.test('ABcd12'))  // true
    console.log(reg4.test('ABcd12_'))  // true

    // 3. [^a-z] 取反符
    var reg5 = /^[^a-z]$/
    console.log(reg5.test('a'))  // false 
    console.log(reg5.test('A'))  // true
    console.log(reg5.test(8))  // true

  </script>
</body>
~~~

### 2.4 常见模式的简写

某些常见模式的简写方式，区分字母和数字

| 预定类 | 说明                                                         |
| ------ | ------------------------------------------------------------ |
| `\d`   | 匹配 0~9 之间的任一数字，相当于 `[0-9]`                      |
| `\D`   | 匹配一个非数字字符，相当于 `[^0-9]`                          |
| `\w`   | 匹配任意的字母、数字和下划线，相当于 `[A-Za-z0-9_]`          |
| `\W`   | 匹配除所有字母、数字和下划线以外的字符，相当于 `[^A-Za-z0-9_]` |
| `\s`   | 匹配空格（包括换行符、制表符、空格符等），相当于 `[\t\r\n\v\f]` |
| `\S`   | 匹配非空格的字符，相当于 `[^\t\r\n\v\f]`                     |

如：日期格式：`^\d{4}-\d{1,2}-\d{1,2}`

## 3. 修饰符

语法：

```js
/表达式/修饰符
```

- i 是单词 ignore 的缩写，正则匹配时字母不区分大小写
- g 是单词 global 的缩写，匹配所有满足正则表达式的结果

~~~html
<body>
  <script>
    // 修饰符
    var str = '欢迎大家学习前端，相信大家一定能学好前端，都成为前端大神'
    // 1. 替换  replace  需求：把前端替换为 web
    // 1.1 replace 返回值是替换完毕的字符串
    // var strEnd = str.replace(/前端/, 'web') 只能替换一个

    // 2. 修饰符 g 全部替换
    var strEnd = str.replace(/前端/g, 'web')
    console.log(strEnd) 
  </script>
</body>
~~~
