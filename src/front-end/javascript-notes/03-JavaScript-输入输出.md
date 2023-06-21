---
title: 输入输出
order: 3
---

输入和输出也可理解为人和计算机的交互，用户通过键盘、鼠标等向计算机输入信息，计算机处理后再展示结果给用户，这便是一次输入和输出的过程

JavaScript本身没有任何打印或者输出的函数，但是我们可以使用其它方式输出和输入数据

## 1. 输出

JavaScript 可以接收用户的输入，然后再将输入的结果输出：`alert()`、`document.write()`、`console.log()`

`alert()` 或 `document.write()` 会在浏览器中展示（输出）给用户

`console.log()` 可以在控制台打印

> 后面章节会深入探讨以上方法，目前学习的内容是为了方便我们在运行程序时看到结果

## 2. 输入

向 `prompt()` 输入任意内容会以弹窗形式出现在浏览器中，一般提示用户输入一些内容

例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 输入输出</title>
</head>
<body>
  
  <script> 
    // 1. 展示给用户
    document.write('要输出的内容')
    alert('要输出的内容')
    console.log('要输出的内容')

    // 2. 以弹窗形式提示用户输入姓名，注意这里的文字使用英文的引号
    prompt('请输入您的姓名:')
  </script>
</body>
</html>
```

>  后面章节会深入探讨以上方法，目前学习的内容是为了方便我们在运行程序时看到结果
