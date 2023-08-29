---
title: VSCode配置指南
order: 1
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

## 3. 使用Vim

使用 Vim 可以大幅提高编码效率

找到扩展，安装 Vim 扩展即可

添加如下代码到 `setting.json` 文件中即可设置 `jj` 键替代 `esc` 键

```json
{  
"vim.insertModeKeyBindings": [  
{  
"before": ["j", "j"],  
"after": ["<Esc>"]  
}  
],  
```

添加如下代码到 `setting.json` 文件中即可设置相对行号

```json
"editor.lineNumbers": "relative",
```

