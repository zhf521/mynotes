---
title: HTML5新增表单相关功能
order: 8
---

## 1. 表单控件新增属性

| 属性         | 值        | 说明                                                                                                                                         |
| ------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| required     | required  | 表单拥有该属性表示其内容不能为空，必填                                                                                                       |
| placeholder  | 提示文本  | 表单的提示信息，存在默认值将不显示                                                                                                           |
| autofocus    | autofocus | 自动聚焦属性，页面加载完成自动聚焦到指定表单                                                                                                 |
| autocomplete | off/on    | 当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。默认已经打开，需放在表单内，同时加上 name 属性，同时成功提交 |
| multiple     | multiple  | 可以多选文件提交                                                                                                                             |
| pattern      | regexp          |      填写正则表达式，适用于文本输入类表单控件                                                                                                                                        |

补充：通过如下方法可以设置 placeholder 里面的字体颜色

```css
input::placeholder{
	color:pink;
}
```

::: normal-demo Demo 演示

```html
<form action="">
    账号：<input type="text" name="account" placeholder="请输入账号" required autofocus>
    <br>
    密码：<input type="password" name="pwd" placeholder="请输入密码">
    <br>
    性别：
    	<input type="radio" value="male" name="gender">男
    	<input type="radio" value="female" name="gender">女
    <br>
    爱好：
    	<input type="checkbox" value="singe" name="hobby">唱
    	<input type="checkbox" value="dance" name="hobby">跳
    	<input type="checkbox" value="rap" name="hobby">rap
    <br>
    其他：<textarea name="other"></textarea>
    <br>
    <button>提交</button>
</form>    
```

```css
input::placeholder{
	color:pink;
}
```

:::

## 2. input新增type属性值

在 HTML5 中，帮我们新增加了很多类型的表单

案例代码：

```html
<!-- 我们验证的时候必须添加 form 表单域 -->
<form action="">
    <ul>
        <li>邮箱: <input type="email" /></li>
        <li>网址: <input type="url" /></li>
        <li>日期: <input type="date" /></li>
        <li>时间: <input type="time" /></li>
        <li>数量: <input type="number" /></li>
        <li>手机号码: <input type="tel" /></li>
        <li>搜索: <input type="search" /></li>
        <li>颜色: <input type="color" /></li>
        <li>范围: <input type="range" /></li>
        <!-- 当我们点击提交按钮就可以验证表单了 -->
        <li> <input type="submit" value="提交"></li>
    </ul>
</form>
```

常见输入类型：

```
text password radio checkbox button file hidden submit reset image
```

新的输入类型：

| 属性值        | 说明                                             |
| ------------- | ------------------------------------------------ |
| type="email"  | 限制用户输入必须为 email 类型                    |
| type="url"    | 限制用户输入必须为 url 类型                      |
| type="data"   | 限制用户输入必须为日期类型                       |
| type="time"   | 限制用户输入必须为时间类型                       |
| type="month"  | 限制用户输入必须为月份类型                       |
| type="week"   | 限制用户输入必须为周类型                         |
| type="number" | 限制用户输入必须为数字类型                       |
| type="tel"    | 手机号码                                         |
| type="search" | 搜索框                                           |
| type="color"  | 生成一个颜色选择表单                             |
| type="range"  | 范围选择框，默认值为 50 ，表单提交时不会验证格式 |
| type="datetime-local"              |  日期+时间选择框，默认值为空，表单提交时不会验证格式                                                |

## 3. form 标签新增属性

| 属性名 | 功能 |
| ------ | ---- |
|  novalidate      |如果给 form 标签设置了该属性，表单提交的时候不再进行验证      |
