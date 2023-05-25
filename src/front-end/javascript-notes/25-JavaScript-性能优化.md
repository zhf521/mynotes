---
title: JavaScript-性能优化
order: 25
---

## 防抖 (debounce)

防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 500px;
        height: 500px;
        background-color: #ccc;
        color: #fff;
        text-align: center;
        font-size: 100px;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
    <script src="./lodash.min.js"></script>
    <script>
      //利用防抖实现性能优化
      //需求：鼠标在盒子上移动，里面的数字就会+1
      const box = document.querySelector('.box')
      let i = 1
      function mouseMove() {
        box.innerHTML = i++
        //如果里面存在大量消耗性能的代码，比如DOM操作，比如数据处理，可能会导致卡顿
      }
      //添加事件
      //box.addEventListener('mousemove', mouseMove)

      //利用lodash库实现防抖
      //语法：_.debounce(fun,时间)
      //box.addEventListener('mousemove', _.debounce(mouseMove, 500))
      
      //手写防抖函数
      //核心是利用setTimeout定时器来实现
      //1.声明定时器变量
      //2.每次鼠标移动（事件触发）的时候都要先判断是否有定时器，如果有，先清除以前的定时器
      //3.如果没有定时器，则开启定时器，存入到定时器变量里面
      //4.定时器里面写函数调用
      function debounce(fn, t) {
        let timer
        //return 返回一个匿名函数
        return function () {
          if (timer) clearTimeout(timer)
          timer = setTimeout(function () {
            fn() //加小括号调用fn函数
          }, t)
        }
      }
      box.addEventListener('mousemove', debounce(mouseMove, 500))
    </script>
  </body>
</html>
```

## 节流 (throttle)

节流，就是指连续触发事件但是在 n 秒中只执行一次函数

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 500px;
        height: 500px;
        background-color: #ccc;
        color: #fff;
        text-align: center;
        font-size: 100px;
      }
    </style>
  </head>

  <body>
    <div class="box"></div>
    <script src="./lodash.min.js"></script>
    <script>
      //利用节流实现性能优化
      //需求：鼠标在盒子上移动，里面的数字就会+1
      const box = document.querySelector('.box')
      let i = 1
      function mouseMove() {
        box.innerHTML = i++
      }
      //添加事件
      //box.addEventListener('mousemove', mouseMove)

      //利用lodash库实现节流---500毫秒之后采取+1
      //语法：_.throttle(fun,时间)
      //box.addEventListener('mousemove', _.throttle(mouseMove, 3000))

      //手写一个节流函数---每隔500ms +1
      //核心是利用setTimeout定时器来实现
      //1.声明定时器变量
      //2.每次鼠标移动（事件触发）的时候都要先判断是否有定时器，如果有则不开启新定时器
      //3.如果没有定时器，则开启定时器，存入到定时器变量里面
      //4.定时器里面写函数调用，定时器里面要把定时器清空
      function throttle(fn, t) {
        let timer = null
        return function () {
          if (!timer) {
            timer = setTimeout(function () {
              fn()
              //清空定时器
              timer = null
            }, t)
          }
        }
      }
      box.addEventListener('mousemove', throttle(mouseMove, 500))
    </script>
  </body>
</html>
```
