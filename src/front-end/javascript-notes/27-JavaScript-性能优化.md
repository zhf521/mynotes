---
title: 性能优化
order: 27
---

防抖（Debounce）和节流（Throttle）都是在处理 JavaScript 事件时常用的技术，用于限制事件的触发频率。它们可以提高用户体验，减少不必要的资源消耗

## 1. 防抖 (debounce)

防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间，也就是说，对于高频触发的事件，==我们只在最后一次触发的时候来执行需要的操作==

常用场景：

- 用户输入：比如搜索框的自动补全功能，在用户输入期间，可以使用防抖来延迟发送请求，避免频繁请求后端接口
- 浏览器窗口调整：当浏览器窗口调整大小时，触发的 `resize` 事件可能会非常频繁。利用防抖可以限制事件触发的频率，例如只在最后一次调整完成后重新布局页面
- 按钮点击：当用户点击按钮时，可使用防抖来确保按钮被点击的间隔时间超过指定的时间，防止误操作或者连续多次点击

例如：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <input type="text" />
        <script>
            let oInput = document.querySelector('input');
            oInput.oninput = function () {
                console.log(this.value);
            };
        </script>
    </body>
</html>
```

我们在input框输入时，会频繁地打印每个字符，这时我们可以使用防抖来解决

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <input type="text" />
        <script>
            let oInput = document.querySelector('input');
            let timer = null;
            oInput.oninput = function () {
                if (timer != null) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    console.log(this.value);
                }, 1000);
            }
        </script>
    </body>
</html>
```

这样就可以实现防抖了，但是我们可以用闭包优化一下

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <input type="text" />
        <script>
            let oInput = document.querySelector('input');
            oInput.oninput = debounce(function () {
                console.log(this.value);
            }, 1000);

            // 手写防抖函数
            // 核心是利用setTimeout定时器来实现
            // 1.声明定时器变量
            // 2.每次事件触发的时候都要先判断是否有定时器，如果有，先清除以前的定时器
            // 3.如果没有定时器，则开启定时器，存入到定时器变量里面
            // 4.定时器里面写函数调用(注意this指向)
            function debounce(fn, delay) {
                let timer = null; // 声明定时器变量
                // 返回一个函数
                return function () {
                    if (timer) {
                        clearTimeout(timer); //清除定时器
                    }
                    // 重新计时
                    timer = setTimeout(() => { 
                        fn.call(this);
                        timer = null; // 触发过了，重新计时
                    }, delay);
                }
            }
        </script>
    </body>
</html>
```

我们还可以使用lodash库实现防抖

语法：`_.debounce(fun,时间)`

## 2. 节流 (throttle)

节流，就是指连续触发事件但是在 n 秒中只执行一次函数，也就是说，==在规定时间里面就让它执行一次操作==

常用场景：

- 滚动事件：当用户滚动页面时，触发的 `scroll` 事件可能会非常频繁。利用节流可以限制事件触发的频率，例如每隔一段时间执行一次回调函数，以减少事件处理的次数
- 鼠标移动：当用户在页面上进行鼠标移动时，可能会触发大量的 `mousemove` 事件。使用节流可以减少回调函数的调用次数，提高性能
- 自动加载：当页面滚动到底部时，可以利用节流来限制触发加载更多数据的频率，避免过于频繁地发送请求

例如：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            body {
                height: 2000px;
            }
        </style>
    </head>
    <body>
        <script>
            window.onscroll = function () {
                alert('这是广告！');
            }
        </script>
    </body>
</html>

```

当我们滑动滚动条时，就会频繁触发弹框，我们使用节流来优化：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            body {
                height: 2000px;
            }
        </style>
    </head>
    <body>
        <script>
            window.onscroll = throttle(function () {
                alert('这是广告！');
            }, 2000);

            // 手写一个节流函数---每隔delay时间触发一次
            // 核心是利用setTimeout定时器来实现
            function throttle(fn, delay) {
                let timer = null;
                // 返回一个函数
                return function () {
                    // 当我们发现这个定时器存在时，则表示定时器已经在运行中，还没到该触发的时候，则 return
                    if (timer) {
                        return; // 若进行中，则忽略本次触发
                    }
                    // 定时器不存在了，说明已经触发过了，重新计时
                    timer = setTimeout(() => {
                        fn.call(this);
                        timer = null; // 清空定时器
                    }, delay);
                }
            }
        </script>
    </body>
</html>
```

我们还可以使用lodash库实现节流

语法：`_.throttle(fun,时间)`

