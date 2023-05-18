---
title: HTML5新增多媒体标签
order: 9
---

多媒体标签分为音频 **audio** 和视频 **video** 两个标签，使用它们，我们可以很方便的在页面中嵌入音频和视频，而不再去使用落后的 flash 和其他浏览器插件了

## 视频标签 - video

### 基本使用

当前 `<video>` 元素支持三种视频格式：尽量使用 `mp4` 格式的视频

使用语法：
```html
<video src="文件地址"></video>
```

| 浏览器            | MP 4 | WebM | Ogg |
| ----------------- | --- | ---- | --- |
| Internet Explorer | yes | no   | no  |
| Chrome            | yes | yes  | yes |
| Firefox           | yes | yes  | yes |
| Safari            | yes | no   | no  |
| Opera                  | yes    |  yes   | yes    |

### 兼容写法

由于各个浏览器的支持情况不同，所以我们会有一种兼容性的写法，这种写法了解一下即可

```html
<video  controls="controls"  width="300">
    <source src="move.ogg" type="video/ogg" >
    <source src="move.mp4" type="video/mp4" >
    您的浏览器暂不支持 <video> 标签播放视频
</ video >
```

上面这种写法，浏览器会匹配 video 标签中的 source，如果支持就播放，如果不支持往下匹配，直到没有匹配的格式，就提示文本

### video 常用属性

| 属性     | 值                                           | 描述                                                              |
| -------- | -------------------------------------------- | ----------------------------------------------------------------- |
| autoplay | autoplay                                     | 视频就绪自动播放（谷歌浏览器需要添加 muted 来解决自动播放的问题） |
| controls | controls                                     | 向用户显示播放控件                                                |
| width    | px（像素）                                   | 设置播放器宽度                                                    |
| height   | px（像素）                                   | 设置播放器高度                                                    |
| loop     | loop                                         | 播放完是否继续播放该视频，循环播放                                |
| preload  | auto（预先加载视频）、none（不预先加载视频） | 规定是否预加载视频（如果有了 autoplay 就忽略该属性）              |
| src      | url                                          | 视频 URL 地址                                                     |
| poster   | imgurl                                       | 加载等待的画面图片                                                |
| muted         |   muted                                           | 静音播放                                                                  |

属性很多，需重点掌握：
- `autoplay`  自动播放
  - 注意： 在 google 浏览器上面，默认禁止了自动播放，如果想要自动播放的效果，需要设置 muted 属性
- `width`  宽度
- `height`  高度
- `loop`  循环播放
- `src`  播放源
- `muted` 静音播放

示例代码：
```html
<video src="media/mi. mp 4" autoplay="autoplay" muted="muted"  loop="loop" poster="media/mi 9. jpg"></video>
```

## 音频标签 - audio

### 基本使用

当前 `<audio>` 元素支持三种视频格式：尽量使用 `mp3` 格式

使用语法：
```html
<audio src="文件地址"></audio>
```

| 浏览器            | MP 3 | Wav | Ogg |
| ----------------- | --- | ---- | --- |
| Internet Explorer | yes | no   | no  |
| Chrome            | yes | yes  | yes |
| Firefox           | yes | yes  | yes |
| Safari            | yes | yes   | no  |
| Opera                  | yes    |  yes   | yes    |

### 兼容写法

由于各个浏览器的支持情况不同，所以我们会有一种兼容性的写法，这种写法了解一下即可

```html
< audio controls="controls"  >
    <source src="happy.mp3" type="audio/mpeg" >
    <source src="happy.ogg" type="audio/ogg" >
    您的浏览器暂不支持 <audio> 标签。
</ audio>
```

上面这种写法，浏览器会匹配 audio 标签中的 source，如果支持就播放，如果不支持往下匹配，直到没有匹配的格式，就提示文本

### audio 常用属性

| 属性     | 值       | 描述                                           |
| -------- | -------- | ---------------------------------------------- |
| autoplay | autoplay | 如果出现该属性，则音频在就绪后马上播放         |
| controls | controls | 如果出现该属性，则向用户显示控件，比如播放按钮 |
| loop     | loop     | 如果出现该属性，则每当音频结束时重新开始播放   |
| src         |  url        |      要播放的音频的 url                                          |

示例代码：
```html
<audio src="media/music. mp 3" autoplay="autoplay" controls="controls"></audio>
```

## 小结

- 音频标签和视频标签使用方式基本一致
- 浏览器支持情况不同
- 谷歌浏览器把音频和视频自动播放禁止了
- 我们可以给视频标签添加 muted 属性来静音播放视频，音频不可以（可以通过 JavaScript 解决）
- 视频标签是重点，我们经常设置自动播放，不使用 controls 控件，循环和设置大小属性
