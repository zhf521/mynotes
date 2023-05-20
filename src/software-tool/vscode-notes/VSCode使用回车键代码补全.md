#VSCode 

在 （一般都是这个路径）`C:\Users\你的用户名\AppData\Roaming\Code\User` 下的 keybindings. json 文件中添加一段代码。

```json
{ 
     "key": "enter", 
     "command": "acceptSelectedSuggestion",
     "when": "editorTextFocus && suggestWidgetVisible" 
}    
```

然后重启即可