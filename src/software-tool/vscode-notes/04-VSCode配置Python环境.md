---
title: VSCode配置Python环境
order: 4
--- 


# 下载 Python

打开 Python 官网：https://www.python.org/ ，点击 “Download”下载最新 python 版本

![VSCode和Python01.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode和Python01.png)

下载完成后自动弹出安装界面，务必先把下方两个对勾打上，把想要安装的文件夹路径复制下来，再点击 “Install Now”安装。

等待 Python 安装完成。

# 在 VSCode 中安装 Python 插件

点击 VSCode 界面左边的 “扩展”，在扩展搜索框中输入 Python，选中第一个框后点击 “安装”

![VSCode和Python02.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode和Python02.png)

# 添加环境变量

右键点击 “此电脑”，选择 “属性”，点击 “高级系统设置–环境变量”。在系统变量中找到 “Path”，然后点击 “编辑”

![VSCode和Python03.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode和Python03.png)

进入后，点击 “新建”，把复制的 python. exe 路径粘贴上去，点击 “确定”就完成了 Python 环境的配置

![VSCode和Python04.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode和Python04.png)

# 测试 Python

打开 VSCode，点击“新建文件”，并选择保存为 python 类型

![VSCode和Python05.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode和Python05.png)

输入 print (“hello!”) 并运行

![VSCode和Python06.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode和Python06.png)

如果终端出现 “hello!”，表示 Python 程序测试正常。

这样就配置成功了。