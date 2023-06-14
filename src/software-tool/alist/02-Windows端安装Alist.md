---
title: Windows端安装Alist
order: 2
---

## 1. 安装

Github地址：[Alist](https://github.com/alist-org/alist)

去 releases 里下载最新版 Windows 安装包

下载完成后解压即可

然后在文件资源管理器中找到 `alist.exe` 文件，在地址栏输入 `cmd` 后回车

进入命令提示符后输入 `alist server` 即可

进入浏览器进入 `localhost:5244` 即可访问

使用 `alist admin` 命令可以查看管理员密码
## 2. 开机自启

在 `alist.exe` 文件的目录里新建一个文件名为 `alist.vbs`

文件内容为：
```vbscript
Set ws = CreateObject("Wscript.Shell")
ws.run "alist.exe server",vbhide
```

然后右键该文件创建快捷方式，将快捷方式剪切，在地址栏输入
`shell:startup`

将快捷方式粘贴进来即可

## 3. 更新

去官网下载最新安装包，将 `alist.exe` 文件替换为最新的即可
