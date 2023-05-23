---
title: VSCode配置C和C++环境
order: 3
---

## C/C++的编译过程

从 `.c` 或 `.cpp` 文件通过 `编译器` 来生成 `.exe` 文件（可执行程序）

编译器将执行以下步骤
1. 预编译
将 `.c ` 中的头文件展开、宏展开，生成的文件是 `.i` 文件
2. 编译
将预处理之后的 `.i` 文件生成 `.s` 汇编文件
3. 汇编
将 `.s` 汇编文件生成 `.o` 目标文件
4. 链接
将 `.o` 文件链接成目标文件

使用命令行为：
```bash
$ cd C++文件目录
$ g++ -c test.cpp
$ g++ test.o
$ ./a.exe
```
可以使用 `-o` 来自定义目标文件的名字
```bash
$ cd C++文件目录
$ g++ -c test.cpp -o a.o
$ g++ a.o -o test.exe
$ ./test.exe
```

或直接使用
```bash
$ cd C++文件目录
$ g++ test.cpp
$ ./a.exe
```
可以使用 `-o` 来自定义目标文件的名字

## GCC 编译器下载和配置

> GCC 中 C 语言编译器是 gcc，c++编译器是 g++，调试器是 gdb

下载 TDM-GCC
联想应用商店下载链接：[TDM-GCC-联想应用商店](https://lestore.lenovo.com/detail/L101412)
下载安装即可

## VSCode 配置 C/C++

1. 下载 C/C++插件

![VSCode和C01.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode和C01.png)

下载完成后重启 VSCode

2. 配置
    新建文件夹（用来放 VSCode 的项目，==必须是英文==）
3. 在文件夹下创建一个 `test1.c` 文件
    代码如下：
```c
#include <stdio.h>
#include <stdlib.h>
int main()
{
    printf("hello world\n");
    printf("你好\n");
    system("pause");
    return 0;
}
```
创建一个 `test2.cpp` 文件
代码如下：
```cpp
int main()
{
	std::cout << "Hello World 哈哈\n";
	system("pause");
	return 0;
}
```
运行,==选择 g++编译器==，会在文件夹中自动创建 `.vscode` 文件夹
4. 测试是否成功
5. 设置外部窗口执行
点击右上角齿轮按钮

![VSCode和C02.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode和C02.png)

点击生成和调试活动文件

![VSCode和C03.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode和C03.png)

此时 `.vscode` 文件夹中出现 `launch.json` 文件
在 `launch.json` 文件中设置 `"externalConsole": false,` 将 false 改为 true
6. 中文乱码解决
在 `tasks.json` 文件中找到 `"${fileDirname}\\${fileBasenameNoExtension}.exe"`, 在其后面添加 `,` 然后下一行添加 `"-fexec-charset=GBK"` 即可
9. 设置隐藏. exe 文件
点击设置，搜索：Files: Exclude

![VSCode和C04.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode和C04.png)

点击添加模式，添加

例如：`**/*.exe` `**/*.class`

## 使用命令行进行多文件编译

文件目录结构如下
```bash
D:.
│  main.cpp
│
├─include
│      fun.h
│
└─src
        fun.cpp
```

使用命令
```bash
$ g++ .\src\fun.cpp .\main.cpp -o test -I.\include\ 
```
在目录中会生成名称为 test 的可执行文件

## 配置 CMake

### CMake 环境配置
下载 CMake [Download | CMake](https://cmake.org/download/)

安装过程中注意勾选添加系统环境变量

![VSCode和C05.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode和C05.png)

安装插件 CMake 和 CMake Tools

![VSCode和C06.png](https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode和C06.png)

安装完成后重启即可

### CMake 使用
#### 单文件编译
在项目文件中创建一个 `CMakeLists.txt` 文件，注意，==名称不能改变，区分大小写==

首先进入文件，文件第一行（第一行必须填写）填写本项目对 CMake 最低版本的要求

```cmake
# 本项目对 CMake 最低版本的要求
cmake_minimum_required(VERSION 版本号)
```

注：使用 `cmake -version` 命令可以查看当前设备的版本号

第二行我们编写项目名称

```cmake
# 项目名称
project(项目名称)
```

该命令会创建项目本身，并指定项目名称，每个 CMakeLists 文件只能定义一个项目

第三行我们编写生成可执行文件的名称和包含的文件

```cmake
# 将源文件编译成一个可执行文件
add_executable(可执行文件名称 源文件)
```
例：
```cmake
# 将名为 main.cpp 的源文件编译成一个名称为 myProject 的可执行文件
add_executable(myProject main.cpp)
```

==以上三行是必须的==

然后使用快捷键 `ctrl+shift+p`, 运行 `CMake config`, 等待配置完成即可

然后运行 `CMake build`

以上是简单的单文件的编译

#### 多文件编译


文件目录结构如下
```bash
D:.
│  main.cpp
│
├─include
│      fun.h
│
└─src
        fun.cpp
```

在项目文件中创建一个 `CMakeLists.txt` 文件，注意，==名称不能改变，区分大小写==

`CMakeLists.txt` 文件中的内容如下

```cmake
cmake_minimum_required(VERSION 3.25.1)

project(myProject)

aux_source_directory(src SRC_SUB)

aux_source_directory(. SRC_CUR)

add_executable(Project ${SRC_SUB} ${SRC_CUR})

include_directories(include)
```

+ `cmake_minimum_required (VERSION 版本号)` : 本项目对 CMake 最低版本的要求
+ `project()` ：设置项目名称，参数可以随意指定
+ `aux_source_directory (dir VAR)` : 搜索 `dir` 目录下所有的源文件，并将结果列表存储在变量 `VAR` 中
+ `add_executable (target src)` : 指定使用源文件 `src`，生成可执行程序 `target` , `${变量名}` 是取变量的值
+ `include_directories (headDir)` : 设置包含的头文件目录

然后使用快捷键 `ctrl+shift+p`, 运行 `CMake config`, 等待配置完成即可

然后运行 `CMake build` 

或者使用命令行
在终端中进入 `build` 目录
```bash
$ cd build
$ cmake ..
$ mingw32-make.exe
```
最终可执行程序就生成到 `build` 目录中了
