---
title: OneDrive下载提速
order: 5
---

## 1. 使用Proxifier设置代理

官网：https://www.proxifier.com/download/

下载完成后安装

注册码：F9ZN9-MYUAM-LSS3K-SBN7B-UT9PF

设置开机自启：`Autostart`

通过Profile->Proxy Servers，添加 HTTPS 和 Socks5 代理配置

通过Profile->Proxification Rules，配置软件代理规则

我们在这里添加OneDrive，先找到OneDrive的可执行文件的位置。一般应该是在`%localappdata%\Microsoft\OneDrive\`，如果没有，运行OneDrive，打开任务管理器，在详细信息标签页，找到`onedrive.exe`，右键打开文件所在位置，点击Add，添加配置。点击Browse输入OneDrive目录，选择`onedrive.exe`，action选择通过socks5代理即可，然后保存，并把 default 的 action 设置为 direct

## 2. 设置OneDrive多线程下载

修改这个文件：`"%localappdata%\Microsoft\OneDrive\settings\Personal\global.ini"`

我们在第一行加入：

```
numberOfConcurrentUploads=3
```

> PS：数值项即为线程数，最小值为1，最大值为3，根据实际需要选择即可