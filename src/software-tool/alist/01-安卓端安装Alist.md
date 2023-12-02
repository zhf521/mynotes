---
title: 安卓端安装Alist
order: 1
---

## 1. 安装termux

从 [F-Droid](https://search.f-droid.org/?q=termux) 下载 termux 和 Termux:Widget

更换清华源：[termux | 镜像站使用帮助 | 清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/termux/)

## 2. 安装Alist

在 termux 中输入如下命令：
```shell
apt update && apt install alist
```

启动 Alist：

```shell
alist server
```

在输出的INFO中可以看到密码：

```shell
INFO[2023-12-02 02:21:36] Successfully created the admin user and the initial password is: 此处为密码
```

进入 `localhost:5244` 访问即可

## 3. 添加存储

查看官方文档即可[AList文档](https://alist.nn.ci/zh/)

## 4. 设置一键启动脚本

下载 vim：
```shell
pkg install vim
```

建立文件夹：
```shell
mkdir .shortcuts
```

进入文件夹：
```shell
cd .shortcuts
```

编辑脚本：
```shell
vim start_alist.sh
```

进入脚本编辑界面，按 `i` 进入编辑模式，输入以下内容：
```shell
alist server
```

输入完成后，按 `esc` 退出，输入 `:wq` 保存

进入桌面，添加安卓小部件，将脚本添加到桌面即可

## 5. 更新Alist

在 termux 中输入以下命令即可：

```shell
pkg upgrade alist
```
