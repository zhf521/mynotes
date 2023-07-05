---
title: SEO优化
order: 12
---

SEO（Search Engine Optimization），译为搜索引擎优化，是一种利用搜索引擎的规则提高网站在有关搜索引擎内自然排名的方式

SEO 的目的是对网站进行深度的优化，从而帮助网站获取流量，进而在搜索引擎上提升网站的排名，提高网站的知名度

## 1. 主要优化

页面必须有三个标签用来符合 SEO 优化，即 TDK（title、description、keywords）

1. title（网站标题）：

   title 具有不可替代性，是我们网页的一个重要标签，是搜索引擎了解网页的入口和对网页主题归属的最佳判断点

   建议：网站名-网站介绍

2. description（网站说明）：

   简要说明我们的网站主要是做什么的

   提倡 description 作为网站的总体业务和主题概括

3. keywords（关键字）：

   keywords 是页面关键字，是搜索引擎的关注点之一

   keywords 最好限制为 6~8 个关键词，关键词之间用英文逗号隔开，采用 `关键字1,关键字2` 的形式

代码示例：

```html
<title>品优购商城-配送及时，正品低价</title>
    <!-- 网站说明 -->
    <meta name="description" content="品优购-专业的综合网上购物商城……" />
    <!-- 关键字 -->
    <meta name="keywords" content="网上购物,手机" />
```

## 2. logo的优化

1. logo 放到 `h1` 标签里面，目的是为了提权，告诉搜索引擎，这个地方很重要
2. `h1` 里面放一个链接，可以返回首页，把 logo 的背景图片给链接即可
3. 为了搜索引擎收录我们，我们链接里面要放文字，但是文字不要显示出来
	1. `text-indent` 移到盒子外面（`text-indent:-9999px`），然后 `overflow:hidden`
	2. 也可直接给 `font-size:0;` 就看不到文字了
4. 最后给链接一个 `title` 属性，这样鼠标放到 logo 上就可以看到提示文字了
