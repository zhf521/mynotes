#VSCode 

# 安装 TDM-GCC
联想应用商店下载链接：[TDM-GCC-联想应用商店](https://lestore.lenovo.com/detail/L101412)
官方网站： [tdm-gcc](https://jmeubank.github.io/tdm-gcc/)
下载安装即可
# 下载 EasyX 图形库
网址: [EasyX](https://codebus.cn/bestans/easyx-for-mingw)，下载库文件
# 下载完之后解压
解压完之后将 include 文件夹下的头文件和 lib32/lib64 文件夹下的库文件，分别拷贝到 MinGW 的头文件和库文件文件夹中

![VSCode和EasyX01.png](https://obsidian-picture.oss-cn-qingdao.aliyuncs.com/my-img/VSCode和EasyX01.png)

(1) 将 include 文件夹下的 `easyx. h` 和 `graphics. h` 拷贝到 `C:\TDM-GCC-64\x86_64-w64-mingw32\include\ ` 文件夹里
(2) 将 `lib64\libeasyx. a` 拷贝到 `C:\TDM-GCC-64\x86_64-w64-mingw32\lib\ ` 文件夹里
(3) 将 `lib32\libeasyx. a` 拷贝到 `C:\TDM-GCC-64\x86_64-w64-mingw32\lib32\` 文件夹里
# 配置 VSCode
在 tasks. json 文件中添加链接
```json
{
    "tasks": [
        {
            "type": "cppbuild",
            "label": "C/C++: g++.exe 生成活动文件",
            "command": "C:\\TDM-GCC-64\\bin\\g++.exe",
            "args": [
                "-fdiagnostics-color=always",
                "-g",
                "${file}",
                "-o",
                "${fileDirname}\\${fileBasenameNoExtension}.exe",
                "-fexec-charset=GBK",
                "-leasyx"//添加此链接
            ],
            "options": {
                "cwd": "${fileDirname}"
            },
            "problemMatcher": [
                "$gcc"
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "detail": "调试器生成的任务。"
        }
    ],
    "version": "2.0.0"
}
```
# 测试
输入如下代码
```c
#include <graphics.h>
#include <conio.h>

int main()
{
    initgraph(640, 480);
    circle(320, 240, 100);
    getch();
    closegraph();
    return 0;
}
```
运行出现圆圈即成功
