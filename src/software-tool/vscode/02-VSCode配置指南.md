---
title: VSCode配置指南
order: 2
---

## 1. 配置回车键代码补全

在 （一般都是这个路径）`C:\Users\你的用户名\AppData\Roaming\Code\User` 下的`keybindings.json`文件中添加如下代码：

```json
{ 
     "key": "enter", 
     "command": "acceptSelectedSuggestion",
     "when": "editorTextFocus && suggestWidgetVisible" 
} 
```

填写完成后重启VSCode即可

## 2. 配置代理

在设置的搜索框中输入“proxy”，然后配置相关代理：

![VSCode配置指南01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode配置指南01.png)

配置完成后重启VSCode即可

