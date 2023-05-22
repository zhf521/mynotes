---
title: CSS精灵图
order: 10
---

## 为什么需要精灵图

一个网页中往往会应用很多小的背景图像作为修饰，当网页中的图像过多时，服务器就会频繁地接收和发送请求图片，造成服务器请求压力过大，这将大大降低页面的加载速度

为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度，出现了 CSS 精灵技术（也称 CSS Sprites、CSS 雪碧图）

核心原理：将网页中的一些小背景图像整合到一张大图中，这样服务器只需要一次请求就可以了

## 精灵图（sprites）的使用

使用精灵图核心：
1. 精灵技术主要针对于背景图片使用。就是把多个小背景图片整合到一张大图片中
2. 这个大图片也称为 sprites 精灵图或者雪碧图
3. 移动背景图片位置，此时可以使用 background-position
4. 移动的距离就是这个目标图片的 x 和 y 坐标。注意网页中的坐标有所不同
5. 因为一般情况下都是往上往左移动，所以数值是负值
6. 使用精灵图的时候需要精确测量，每个小背景图片的大小和位置

例：

效果：

![CSS精灵图01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS精灵图01.png)

精灵图：

![CSS精灵图02.jpg](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS精灵图02.jpg)

结构：
```html
<span class="p">p</span>
<span class="i">i</span>
<span class="n">n</span>
<span class="k">k</span>
```
样式：
```css
span {
    display: inline-block;
    background: url(images/abcd.jpg) no-repeat;
}
.p {
    width: 100px;
    height: 112px;
    /* background-color: pink; */
    background-position:  -493px -276px;
}
.i {
    width: 60px;
    height: 108px;
    /* background-color: pink; */
    background-position: -327px -142px;
}
.n {
    width: 108px;
    height: 109px;
    /* background-color: pink; */
    background-position: -215px -141px;
}
.k {
    width: 105px;
    height: 114px;
    /* background-color: pink; */
    background-position: -495px -142px;
}
```

