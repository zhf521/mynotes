---
title: CSS盒子模型
order: 7
---

CSS 会把所有的 HTML 元素都看成一个盒子，所有的样式也都是基于这个盒子

1. margin（外边距）： 盒子与外界的距离
2. border（边框）： 盒子的边框
3. padding（内边距）： 紧贴内容的补白区域
4. content（内容）：元素中的文本或后代元素都是它的内容

![CSS盒子模型01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS盒子模型01.png)

`盒子的大小=content+左右 padding+左右border`

注意：外边距 margin 不会影响盒子的大小，但会影响盒子的位置

## 盒子内容区（content）

| CSS 属性名   | 功能                   | 属性值 |
| ------------ | ---------------------- | ------ |
| `width`      | 设置内容区域宽度       | 长度   |
| `max-width`  | 设置内容区域的最大宽度 | 长度   |
| `min-width`  | 设置内容区域的最小宽度 |  长度      |
| `height`     | 设置内容区域高度       |  长度      |
| `max-height` | 设置内容区域的最大高度 |  长度      |
| `min-height` | 设置内容区域的最小高度 |  长度      |

注意： 
1. max-width 、 min-width 一般不与 width 一起使用
2. max-height 、 min-height 一般不与 height 一起使用

## 盒子内边距（padding）

| CSS 属性名    | 功能     | 属性值 |
| ------------- | -------- | ------ |
| `padding-top` | 上内边距 | 长度   |
| `padding-right` | 右内边距         |  长度      |
| `padding-bottom` |  下内边距        |  长度      |
| `padding-left` |   左内边距       |  长度      |
| `padding`              |   复合属性       | 长度，可以设置 1~4 个值       |

padding 复合属性的使用规则： 
1. `padding: 10px;` 四个方向内边距都是 10px 
2. `padding: 10px 20px;` 上下 10px ，左右 20px 。（上下、左右） 
3. `padding: 10px 20px 30px;` 上 10px ，左右 20px ，下 30px 。（上、左右、下） 
4. `padding: 10px 20px 30px 40px;` 上 10px ，右 20px ，下 30px ，左 40px 。（上、右、下、左）

注意点：
1. padding 的值不能为负数
2. 行内元素的左右内边距是没问题的，上下内边距不能完美的设置
3. 块级元素、行内块元素，四个方向内边距都可以完美设置

## 盒子边框（border）

border 可以设置元素的边框

边框由三部分组成：边框宽度 (粗细)、边框样式、边框颜色

语法：
```css
border : border-width || border-style || border-color;   
```

| 属性         | 作用                    |
| ------------ | ----------------------- |
| border-width | 定义边框粗细，单位是 px |
| border-style | 边框的样式              |
| border-color             |  边框颜色                       |

边框样式 border-style 可以设置如下值：
- none：没有边框即忽略所有边框的宽度（默认值）
- solid：边框为单实线 (最为常用的)
- dashed：边框为虚线  
- dotted：边框为点线

边框简写：
```css
border: 1px solid red;  /* 没有顺序 */
```

边框分开写法：
```css
border-top: 1px solid red;  /* 只设定上边框， 其余同理 */   
```

## 盒子外边距（margin）

margin 属性用于设置外边距，即控制盒子和盒子之间的距离

| 属性        | 作用     |
| ----------- | -------- |
| margin-left | 左外边距 |
| margin-right | 右外边距         |
| margin-top |  上外边距        |
| margin-bottom            |  下外边距        |

### margin 注意事项

1. 子元素的 margin ，是参考父元素的 content 计算的。（因为是父亲的 content 中承装着子元素）
2. 上 margin 、左 margin ：影响自己的位置；下 margin 、右 margin ：影响后面兄弟元素的位置
3. 块级元素、行内块元素，均可以完美地设置四个方向的 margin ；但行内元素，左右 margin 可以完美设置，上下 margin 设置无效
4. margin 的值也可以是 auto ，如果给一个块级元素设置左右 margin 都为 auto ，该块级元素会在父元素中水平居中
5. margin 的值可以是负值

### margin 合并问题

上面兄弟元素的下外边距和下面兄弟元素的上外边距会合并，取一个最大的值，而不是相加

相邻块元素垂直外边距的合并
+ 当上下相邻的两个块元素（兄弟关系）相遇时，如果上面的元素有下外边距 margin-bottom，下面的元素有上外边距 margin-top ，则他们之间的垂直间距不是 margin-bottom 与 margin-top 之和。取两个值中的较大者这种现象被称为相邻块元素垂直外边距的合并
+ 解决方案：尽量只给一个盒子添加 margin 值

![CSS盒子模型02.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS盒子模型02.png)

### margin 塌陷问题

第一个子元素的上 margin 会作用在父元素上，最后一个子元素的下 margin 会作用在父元素上

嵌套块元素垂直外边距的塌陷
+ 对于两个嵌套关系（父子关系）的块元素，父元素有上外边距同时子元素也有上外边距，此时父元素会塌陷较大的外边距值
+ 解决方案：
	+ 可以为父元素定义上边框（border）
	+ 可以为父元素定义上内边距（padding）
	+ 可以为父元素添加 `overflow:hidden`

![CSS盒子模型03.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS盒子模型03.png)

