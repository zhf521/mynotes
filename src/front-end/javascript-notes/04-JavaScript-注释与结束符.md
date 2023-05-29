---
title: JavaScript-注释与结束符
order: 4
---

## 1. 注释

通过注释可以阻止代码被执行或者添加备注信息，JavaScript 支持两种形式注释语法

### 1.1 单行注释

使用 `//` 注释单行代码

VSCode中快捷键：`ctrl+/`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 注释</title>
</head>
<body>
  
  <script>
    // 这种是单行注释的语法
    // 一次只能注释一行
    // 可以重复注释
  </script>
</body>
</html>
```

### 1.2 多行注释

使用 `/* */` 注释多行代码

VSCode中快捷键：`shift+alt+A`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 注释</title>
</head>
<body>
  
  <script>
    /* 这种的是多行注释的语法 */
    /*
    	更常见的多行注释是这种写法
    	可以任意换行
    	多少行都可以
      */
  </script>
</body>
</html>
```

## 2. 结束符

在 JavaScript 中 `;` 代表一段代码的结束，多数情况下可以省略 `;` 使用回车（enter）替代

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 结束符</title>
</head>
<body>
  
  <script> 
    alert(1);
    alert(2);
    alert(1)
    alert(2)
  </script>
</body>
</html>
```

实际开发中有许多人主张书写 JavaScript 代码时省略结束符 `;`