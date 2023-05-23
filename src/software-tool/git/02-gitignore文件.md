---
title: gitignore文件
order: 2
---



在使用 git 过程中，我们可能有些文件不需要上传上去，比如一些缓存文件，生成的图片，运行环境的一些配置等等，这时就需要用到 `.gitignore` 文件来忽略掉这些文件

## 创建. gitignore 文件
在要管理的根目录下（即 `.git` 文件夹同级目录中）创建一个 `.gitignore`

```bash
# 创建.gitignore文件命令
$ touch .gitignore
```
## 写入要忽略的文件或文件夹
使用 Vim 来写入
```bash
# 命令
$ vim .gitignore
```
使用 Vim 插入模式来编写，在文件末尾一行要写入 `.gitignore`
然后退出保存即可

注意：==`.gitignore` 只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改 `.gitignore` 是无效的。那么解决方法就是先把本地缓存删除（改变成未 track 状态），然后再提交==

```bash
# 命令
$ git rm -r --cached
$ git add .
$ git commit -m 'update .gitignore'
```

### . gitignore 的格式规范

+ `#` 为注释
+ 可以使用 shell 所使用的正则表达式来进行模式匹配
+ 匹配模式最后跟 `/` 说明要忽略的是目录
+ 使用 `!` 取反，（例如目录中包含 `test.a`，并且 `.gitignore` 文件中包含 `*.[oa]`，如果在文件中加入 `!test.a` 表明忽略除 `test.a` 文件以外的后缀名为 `.a` 或者 `.o` 的文件）

### 配置语法

+ 以斜杠 `/` 开头表示目录
+ 以星号 `*` 通配多个字符
+ 以问号 `?` 通配多个字符
+ 以方括号 `[]` 包含单个字符的匹配列表
+ 以感叹号 `!` 表示不忽略（跟踪）匹配到的文件或目录

例如：
```bash
*.a       # 忽略所有 .a 结尾的文件  
!lib.a    # 但 lib.a 除外  
/TODO     # 仅仅忽略项目根目录下的 TODO 文件，不包括subdir/TODO  
build/    # 忽略 build/ 目录下的所有文件  
doc/*.txt # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
```

注意：==git 对于 `.gitignore` 配置文件是按行从上到下进行规则匹配的，意味着如果前面的规则匹配的范围更大，则后面的规则将不会生效==