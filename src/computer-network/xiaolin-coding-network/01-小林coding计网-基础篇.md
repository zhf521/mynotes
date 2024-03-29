---
title: 小林coding计网-基础篇
order: 1
---

## 1. TCP/IP网络模型

以下并非严格意义的TCP/IP模型，网络接口被分成两层：
| 层级                   | 功能             | 主要协议                |
| ---------------------- | ---------- | -- |
| 应用层                 | 专注于为用户提供应用功能，不关心数据如何传输（在用户态工作，往下是内核态） | HTTP、FTP、 DNS、(SMTP -> IMAP)、Telnet、SSH、NFS、DHCP |
| 传输层                 | 负责向两台终端设备进程之间的通信提供通用的数据传输服务     | TCP、UDP                                                     |
| 网络层                 | 实际的传输功能，为分组交换网上的不同主机提供通信服务；选择合适的路由 | IP、ICMP、IGMP、NAT（路由的网络地址转换协议）                |
| 数据链路层（网络接口） | 数据链路层的作用是将网络层交下来的 IP 数据报封装成帧，在两个相邻节点间的链路上传送帧 | ARP、RARP                                                    |
| 物理层（网络接口）     | 实现相邻计算机节点之间比特流的透明传送，尽可能屏蔽掉具体传输介质和物理设备的差异 |                                                              |

应用层协议：

| 基于TCP的应用层协议              | 基于UDP的应用层协议           |
| ------------------------ | --------------------- |
| HTTP、FTP、SMTP、TELNET、SSH | DNS、SFTP（简单）、SNMP（简单） |

> 为什么要分层？
> 
> 1. 各层之间相互独立
> 2. 提高整体灵活性
> 3. 大问题化小

传输单位：网络接口层–>帧（frame），IP 层–>包（packet），TCP 层–>段（segment），HTTP–>报文（message）。但这些没有本质区别，可以统称为数据包

![小林coding计网-基础篇01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/小林coding计网-基础篇01.png)

## 2. 键入网址到网页显示，期间发生了什么？

1. `解析URL`：首先浏览器要解析URL，URL包括`协议 + web服务器 + 目录名和文件名`，继而生成发送给web服务器的、对该资源的请求信息

2. `DNS解析`：查询服务器域名对应的 IP 地址。DNS服务器保存了 Web 服务器域名与 IP 的对应关系。客户端发送DNS请求给本地DNS服务器，查询对应的IP地址后返回客户端。PS：需要查询时，浏览器、操作系统、hosts文件依次看有没有缓存，不一定每次都要解析IP

3. `TCP连接`：HTTP报文是基于TCP传输的，涉及到三次握手。组装好TCP报文后交给网络层处理

4. `发送HTTP请求`：
   
   1. 加入IP头部，生成IP报文
   
   2. 加入MAC头部（发送方MAC地址在网卡里，接收方的MAC地址靠ARP协议在以太网广播寻找，当然也是有缓存的）
   
   3. 再经过网卡、交换机、路由器，抵达服务器

5. `服务器处理请求并返回HTTP报文`：服务器依次检查MAC头部、IP头、TCP头检查序列号和端口号，HTTP进程收到后把这个网页封装在HTTP响应报文里并返回（相同步骤）

6. `浏览器解析渲染页面`：浏览器是一个边解析边渲染的过程

7. `连接结束`
