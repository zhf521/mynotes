---
title: Halo博客搭建
order: 1
---

# 购买服务器
需要购买服务器，内存至少 1G，这里以腾讯云为例，进入官网[腾讯云](https://cloud.tencent.com/)选购自己的服务器即可，推荐轻量应用服务器。购买以后装入 centos 系统。
![Halo博客搭建01.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Halo博客搭建01.png)
防火墙开放 8090 端口
![Halo博客搭建02.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Halo博客搭建02.png)
# 安装 Docker
以下为 centos 系统安装教程，其他系统请参照官网教程[官网](https://docs.docker.com/engine/install/centos/)
## 登录自己的服务器
![Halo博客搭建03.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Halo博客搭建03.png)
## 卸载旧版本
```bash
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine

```
## 更新、安装必备软件
```bash
apt-get update && apt-get install -y wget vim
```


## 获取安装包
```bash
sudo yum install -y yum-utils
```
## 设置镜像仓库
官方镜像：（比较慢，不推荐）

```bash
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

阿里镜像仓库 ：（推荐）

```bash
sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```
## 安装 docker

安装前先更新 yum 软件包索引

```bash
yum makecache fast
```

安装 docker-ce（社区版-免费的）

```bash
sudo yum install docker-ce docker-ce-cli containerd.io
```
## 启动 docker

```bash
sudo systemctl start docker
```

## 判断是否成功安装 docker 查看版本

```bash
docker version
```

## 设置 docker 开机自启动

```bash
systemctl enable docker
```

# 使用 Docker 部署 Halo

建议查看官方教程
[使用 Docker 部署 Halo](https://docs.halo.run/getting-started/install/docker)
# 进入后台安装
通过访问 IP：端口号即可访问安装引导界面
安装完即可
# 购买域名 (可选)
进入腾讯云官网[腾讯云](https://cloud.tencent.com/)选购。
==注意：服务器与域名最好选用同一厂商，不然可能会莫名报错，配置失败。==
添加域名解析，如图
![Halo博客搭建04.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Halo博客搭建04.png)
# 反向代理 (可选)
## 安装 Docker Compose
### 下载安装
```bash
sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```
推荐使用下面这个，国内访问较快
```bash
sudo curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```
### 给执行权限
```bash
sudo chmod +x /usr/local/bin/docker-compose
```
### 查看 docker-compose 版本
```bash
docker-compose --version
```
## 部署 Nginx Proxy Manager  服务

### 创建一个与此类似的 docker-compose. yml 文件

```bash
mkdir ~/npm #创建一个目录用来安装此服务

cd ~/npm #进入目录
```


```bash
vim docker-compose.yml  #将以下代码粘贴到里面然后保存退出
````

```bash
version: "3"
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      # These ports are in format <host-port>:<container-port>
      - '80:80' # Public HTTP Port
      - '443:443' # Public HTTPS Port
      - '81:81' # Admin Web Port
      # Add any other Stream port you want to expose
      # - '21:21' # FTP
    environment:
      DB_MYSQL_HOST: "db"
      DB_MYSQL_PORT: 3306
      DB_MYSQL_USER: "npm"
      DB_MYSQL_PASSWORD: "npm"
      DB_MYSQL_NAME: "npm"
      # Uncomment this if IPv6 is not enabled on your host
      # DISABLE_IPV6: 'true'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    depends_on:
      - db

  db:
    image: 'jc21/mariadb-aria:latest'
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: 'npm'
      MYSQL_DATABASE: 'npm'
      MYSQL_USER: 'npm'
      MYSQL_PASSWORD: 'npm'
    volumes:
      - ./data/mysql:/var/lib/mysql

```

### 在当前目录运行以下命令安装此服务

```bash
sudo docker-compose up -d   #部署服务
```

### 安装完以后进入 81 端口登录

默认登陆名和密码：
Email:    admin@example. com
Password: changeme
按如下图设置即可

![Halo博客搭建05.gif](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/Halo博客搭建05.gif)

最后就可以通过域名进行访问了

# 开始写博客

配置好图床使用 GitHub 图床或阿里云对象存储搭建图床，使用 MarkDown 语法就可以愉快的发布文章啦!