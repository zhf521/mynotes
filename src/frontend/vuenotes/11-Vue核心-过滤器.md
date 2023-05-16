---
title: Vue核心-过滤器
sticky: -11
---

> 本文示例代码：[NoteDemoCode/Vue/11-Vue核心-过滤器](https://github.com/zhf521/NoteDemoCode/tree/main/Vue/11-Vue核心-过滤器)

# 过滤器 (Vue 3 已经移除)

定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理） 

注册过滤器：  
`Vue.filter(name, callback)` 全局过滤器   
`new Vue {filters: {}}` 局部过滤器   

使用过滤器：`{{ xxx | 过滤器名}}` 或 `v-bind:属性 = "xxx | 过滤器名"`  

备注：  
+ 过滤器可以接收额外参数，多个过滤器也可以串联  
+ 并没有改变原本的数据，而是产生新的对应的数据  
  
处理时间的库：`moment` 体积较大，`dayjs` 轻量级 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>过滤器</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <!-- //引入dayjs库 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.7/dayjs.min.js"></script>
  </head>
  <body>
    <div id="root">
      <h2>时间</h2>
      <h3>当前时间戳：{{time}}</h3>
      <h3>转换后的时间：{{time|timeFilter()}}</h3>
      <h3>转换后的时间：{{time|timeFilter('YYYY-MM-DD HH:mm:ss')}}</h3>
      <h3>截取年月日：{{time|timeFilter() | mySlice}}</h3>
    </div>
    <script>
      Vue.config.productionTip = false
      //全局过滤器
      Vue.filter('mySlice', function (value) {
        return value.slice(0, 11)
      })
      new Vue({
        el: '#root',
        data: {
          time: 1683621034195,
        },
        //局部过滤器
        filters: {
          timeFilter(value, str = 'YYYY年MM月DD日HH:mm:ss') {
            return dayjs(value).format(str)
          },
        },
      })
    </script>
  </body>
</html>
```

效果：

![Vue核心-过滤器01.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Vue核心-过滤器01.png)
