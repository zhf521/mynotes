---
title: CSS
order: 2
---

## 1. 盒模型

浏览器的渲染引擎在对网页文档进行布局时，会按照 “CSS 基础盒模型” （CSS Basic Box Model）标准，将文档中的所有元素都表示为一个个矩形的盒子，再用 CSS 去决定这些盒子的大小尺寸、显示位置、以及其他属性（如颜色、背景、边框等）

CSS3中的盒模型有以下两种：标准盒子模型、IE盒子模型

盒模型都是由四个部分组成的，分别是margin（外边距）、border（边框）、padding（内边距）和content（内容）

标准盒模型和IE盒模型的区别在于设置width和height时，所对应的范围不同：

+ 标准盒模型的width和height属性的范围只包含了content
+ IE盒模型的width和height属性的范围包含了border、padding和content

在 CSS3 中，我们可以通过设置 box-sizing 的值来决定具体使用何种盒模型：

+ content-box 标准盒模型（默认值）

- border-box 怪异盒模型（IE盒模型）





