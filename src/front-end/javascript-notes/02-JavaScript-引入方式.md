---
title: 引入方式
order: 2
---

JavaScript 程序不能独立运行，它需要被嵌入 HTML 中，然后浏览器才能执行 JavaScript 代码。通过 `script` 标签将 JavaScript 代码引入到 HTML 中

## 1. 内部方式

通过 `script` 标签包裹 JavaScript 代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 引入方式</title>
</head>
<body>
  <!-- 内部形式：通过 script 标签包裹 JavaScript 代码 -->
  <script>
    // JavaScript代码 
  </script>
</body>
</html>
```

注意：将 JavaScript 代码放在 HTML 页面的底部附近通常是最好的策略

## 2. 外部方式

一般将 JavaScript 代码写在独立的以 `.js` 结尾的文件中，然后通过 `script` 标签的 `src` 属性引入

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 引入方式</title>
</head>
<body>
  <!-- 外部形式：通过 script 的 src 属性引入独立的 .js 文件 -->
  <script src="xxx.js"></script>
</body>
</html>
```

如果 script 标签使用 src 属性引入了某 `.js` 文件，那么标签的代码会被忽略！！！

如下代码所示：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 引入方式</title>
</head>
<body>
  <!-- 外部形式：通过 script 的 src 属性引入独立的 .js 文件 -->
  <script src="xxx.js">
    // 此处的代码会被忽略掉！！！！
  	// JavaScript代码
  </script>
</body>
</html>
```

## 3. 内联方式

代码写在标签内部

例：

```html
<body>
	<button onclick="alert('逗你玩~~~')“>点我</button>
</body>
```

