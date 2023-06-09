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

`盒子的大小=content+左右padding+左右border`

注意：外边距 margin 不会影响盒子的大小，但会影响盒子的位置

## 1. 盒子内容区（content）

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

## 2. 盒子内边距（padding）

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

## 3. 盒子边框（border）

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

## 4. 盒子外边距（margin）

margin 属性用于设置外边距，即控制盒子和盒子之间的距离

| 属性        | 作用     |
| ----------- | -------- |
| margin-left | 左外边距 |
| margin-right | 右外边距         |
| margin-top |  上外边距        |
| margin-bottom            |  下外边距        |

### 4.1 margin注意事项

1. 子元素的 margin ，是参考父元素的 content 计算的。（因为是父亲的 content 中承装着子元素）
2. 上 margin 、左 margin ：影响自己的位置；下 margin 、右 margin ：影响后面兄弟元素的位置
3. 块级元素、行内块元素，均可以完美地设置四个方向的 margin ；但行内元素，左右 margin 可以完美设置，上下 margin 设置无效
4. margin 的值也可以是 auto ，如果给一个块级元素设置左右 margin 都为 auto ，该块级元素会在父元素中水平居中
5. margin 的值可以是负值

### 4.2 margin塌陷问题

#### 4.2.1 什么时候出现

1. 垂直方向
2. 块级元素，不是行内元素，也不是行内块级元素

#### 4.2.2 外边距计算规则

+ 两数均为正数时：取最大的数
+ 两数均为负数时：取绝对值最大的数
+ 一正一负时：取两数相加的和

#### 4.2.3 上下外边距相遇

当上下相邻的两个块元素（兄弟关系）相遇时，如果上面的元素有下外边距 margin-bottom，下面的元素有上外边距 margin-top ，则他们之间会出现margin塌陷问题

::: normal-demo 两数均为正数时

```html
<style>
    .divA {
        width: 100px;
        height: 100px;
        background-color: pink;
        margin-bottom: 20px;
      }
      .divB {
        width: 100px;
        height: 100px;
        background-color: skyblue;
        margin-top: 10px;
      }
</style>
<body>
    <div class="divA">A</div>
    <div class="divB">B</div>
</body>
```

:::

上述案例中A与B盒子之间间距实际为20px

::: normal-demo 两数均为负数时

```html
<style>
    .divA {
        width: 100px;
        height: 100px;
        background-color: pink;
        margin-bottom: -20px;
      }
      .divB {
        width: 100px;
        height: 100px;
        background-color: skyblue;
        margin-top: -10px;
      }
</style>
<body>
    <div class="divA">A</div>
    <div class="divB">B</div>
</body>
```

:::

上述案例中A与B盒子之间间距实际为-20px

::: normal-demo 一正一负时

```html
<style>
    .divA {
        width: 100px;
        height: 100px;
        background-color: pink;
        margin-bottom: 20px;
      }
      .divB {
        width: 100px;
        height: 100px;
        background-color: skyblue;
        margin-top: -10px;
      }
</style>
<body>
    <div class="divA">A</div>
    <div class="divB">B</div>
</body>
```

:::

上述案例中A与B盒子之间间距实际为10px

解决方案：尽量只给一个盒子添加 margin 值

#### 4.2.4 父子元素之间的外边距相遇

第一个子元素的margin-top会作用在父元素上，最后一个子元素的margin-bottom会作用在父元素上

::: normal-demo  父元素与第一个子元素之间的外边距相遇演示

```html
<style>
    .divC {
        width: 300px;
        height: 100px;
        background-color: pink;
      }
      .divA {
        width: 300px;
        height: 100px;
        background-color: skyblue;
        margin-top: 10px;
      }
      .divB {
        width: 300px;
        height: 30px;
        background-color: slategrey;
        margin-top: 20px;
      }
</style>
<body>
    <div class="divC">C(蓝色盒子的兄弟元素)</div>
    <div class="divA">
      <div class="divB">B(蓝色盒子的子元素)</div>
    </div>
</body>
```

:::

上述案例中C与B盒子之间间距实际为20px

解决方案：

+ 可以为子元素设置绝对定位，父元素设置相对定位

+ 可以为父元素定义上（下）边框（border）
+ 可以为父元素定义上（下）内边距（padding）
+ 可以为父元素添加 `overflow:hidden`（即触发BFC）
