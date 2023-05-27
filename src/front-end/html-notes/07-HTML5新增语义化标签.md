---
title: HTML5新增语义化标签
order: 7
---

## 1. 新增布局标签

- `<header>` 头部标签
- `<nav>` 导航标签
- `<article>` 内容标签
- `<section>` 定义文档某个区域
- `<aside>` 侧边栏标签
- `<footer>` 尾部标签

![HTML5新增语义化标签01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/HTML5新增语义化标签01.png)

关于 article 和 section：
1. artical 里面可以有多个 section 
2. section 强调的是分段或分块，如果你想将一块内容分成几段的时候，可使用 section 元素
3. article 比 section 更强调独立性，一块内容如果比较独立、比较完整，应该使用 article 元素

## 2. 新增状态标签

### 2.1 meter 标签

语义：定义已知范围内的标量测量。也被称为 gauge （尺度），双标签，例如：电量、磁盘用量等

常用属性如下：

| 属性  | 值   | 描述     |
| ----- | ---- | -------- |
| heigh | 数值 | 规定高值 |
|  low     | 数值 |  规定低值        |
|   max    | 数值 |     规定最大值     |
|    min   | 数值 |     规定最小值     |
|     optimum  | 数值 |  规定最优值        |
|   value    |  数值    |    规定当前值      |

### 2.2 progress 标签

语义：显示某个任务完成的进度的指示器，一般用于表示进度条，双标签，例如：工作完成进度等

常用属性如下：

| 属性  | 值   | 描述       |
| ----- | ---- | ---------- |
| max   | 数值 | 规定目标值 |
| value | 数值 | 规定当前值           |

## 3. 新增列表标签

| 标签名   | 语义                                        | 单/双标签 |
| -------- | ------------------------------------------- | --------- |
| datalist | 用于搜索框的关键字提示                      | 双        |
| details  | 用于展示问题和答案，或对专有名词进行解释    | 双        |
| summary  | 写在 details 的里面，用于指定问题或专有名词 | 双          |

::: normal-demo Demo 演示

```html
<input type="text" list="mydata" />
<datalist id="mydata">
	<option value="周冬雨">周冬雨</option>
	<option value="周杰伦">周杰伦</option>
	<option value="温兆伦">温兆伦</option>
	<option value="马冬梅">马冬梅</option>
</datalist>

<details>
	<summary>如何走上人生巅峰？</summary>
	<p>一步一步走呗</p>
</details> 
```

:::

## 4. 新增文本标签

### 4.1 文本注音

| 标签名 | 语义                            | 单/双标签 |
| ------ | ------------------------------- | --------- |
| ruby   | 包裹需要注音的文字              | 双        |
| rt     | 写注音，rt 标签写在 ruby 的里面 | 双          |

::: normal-demo Demo 演示

```html
<ruby>
	<span>魑魅魍魉</span>
	<rt>chī mèi wǎng liǎng </rt>
</ruby>
```

:::

### 4.2 文本标记

| 标签名 | 语义 | 单/双标签 |
| ------ | ---- | --------- |
| mark   | 标记 | 双          |

注意： W3C 建议 mark 用于标记搜索结果中的关键字

