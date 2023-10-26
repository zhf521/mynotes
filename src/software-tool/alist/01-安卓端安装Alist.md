---
title: 安卓端安装Alist
order: 1
---

## 1. 安装termux

从 [F-Droid](https://search.f-droid.org/?q=termux) 下载 termux 和 Termux:Widget

更换清华源：[termux | 镜像站使用帮助 | 清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/termux/)

## 2. 安装Alist

在 termux 中输入如下命令：
```
apt update && apt install alist
```

安装成功后输入如下命令设置管理员密码：
```
# 手动设置一个密码 `NEW_PASSWORD`是指你需要设置的密码
admin set NEW_PASSWORD
```

启动 Alist：

```
alist server
```

进入 `localhost:5244` 访问即可

## 3. 添加存储

查看官方文档即可[AList文档](https://alist.nn.ci/zh/)

## 4. 设置一键启动脚本

下载 vim：
```
pkg install vim
```

建立文件夹：
```
mkdir .shortcuts
```

进入文件夹：
```
cd .shortcuts
```

编辑脚本：
```
vim start_alist.sh
```

进入脚本编辑界面，按 `i` 进入编辑模式，输入以下内容：
```
alist server
```

输入完成后，按 `esc` 退出，输入 `:wq` 保存

进入桌面，添加安卓小部件，将脚本添加到桌面即可

## 5. 更新Alist

在 termux 中输入 `pkg upgrade alist` 即可
