---
title: VSCode使用Vim
order: 7
---

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