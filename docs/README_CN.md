# Leetcode practice

**中文文档**|[英文文档](../README.md)|[日文文档](./README_JP.md)|[韩文文档](./README_KR.md)

## 简介

一句话介绍：“在编辑器中开始练习你的`leetcode`每日一题！”

如果，你想要在编辑器中编写你的题解...

如果，你想要简单快速的获取每日一题...

如果，你想要创建你自己的题解仓库...

那么，`leetcode-practice`将满足你的一切想要！

## 预览

![CLI-lc](../resources/images/lc-cli-h.png)

## 我应该怎么使用？（三种方案供你选择）

### 方案 A : CLI (推荐使用)

最好的也是最自由的使用方法是：在终端中使用我们的脚手架，通过三个核心指令:`lk`,`lf`,`lc`,来创建和检查你的题解。

[安装](#一全局安装脚手架-(方案-A)) · [使用](#CLI的使用)

### 方案 B : fork (受支持的)

你也可以使用`github`的`fork`功能来创建我们的项目副本，然后，直接使用项目内置指令进行题解的创建和检查。

[安装](#二使用fork创建你自己的leetcode-practice仓库副本-(方案-B)) · [使用](#fork项目的使用)

### 方案 C : plugin (受支持的)

你同样可以使用我们发布在插件市场的插件`leetcode-practice`来进行交互式的创建和检查题解。（支持两个主流编辑器：`WebStorm` 和 `VS Code`）

[安装](#三在编辑器的插件市场安装插件-(方案-C)) · [使用](#插件的使用)

## 预备条件

| 依赖包    | 版本  |
|--------|-----|
| nodejs | lts |
| git    | lts |

> note: nodejs:[nodejs安装向导](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
>
> git:[git下载地址](https://git-scm.com/downloads)

## 安装

### 一.全局安装脚手架 (方案 A)

你可以使用任意npm包管理软件（例如`npm`,`yarn`,`pnpm`等）的全局安装方法进行安装。

```shell
# 使用npm进行安装
npm install -g leetcode-practice
# 使用pnpm进行安装
pnpm install -g leetcode-practice
# 使用yarn进行安装
yarn global install leetcode-practice
```

### 二.使用fork创建你自己的leetcode-practice仓库副本 (方案 B)

#### 常规方法

1. 打开我们的项目地址:[leetcode-practice](https://github.com/wh131462/leetcode-practice)

![leetcode-practice-github](../resources/images/leetcode-practice-github.png)

2. 点击`fork`按钮

你会看到这样的一个页面，然后修改仓库名和描述，确认勾选`Copy the master branch only`
![github-fork](../resources/images/github-fork.png)

3. 点击确认创建，等待创建

![github-forking](../resources/images/github-forking.png)

4. 创建完成，然后拉取这个仓库愉快地开始你的解题吧！

![github-forked](../resources/images/github-forked.png)

#### 简便方法

1. 拉取我们的仓库到本地

```shell
git clone https://github.com/wh131462/leetcode-practice.git
```

2. 执行我们的部署脚本

```shell
# 使用你喜欢的包管理器进行执行脚本即可
npm run easy-fork
```

3. 完成部署

### 三.在编辑器的插件市场安装插件 (方案 C)

待开发...

## 使用方法

### CLI的使用

#### 1.创建题解 - `lc`

##### [1]. 获取今日题目 - [`-t`/`--today`]

在终端中键入`lc`指令，即可默认在当前终端的工作区中获取今日的题目。

```shell
lc 
# 完整指令
lc -t
```

示例获取今日题目：

```shell
# 例如当前执行目录为src目录
➜  src git:(dev) ✗ lc
MODE: today
题目[2867.统计树中的合法路径数目]获取成功!
题目文件地址为:/home/wh131462/workspace/leetcode-practice/src/2867.count-valid-paths-in-a-tree/index.js
```

##### [2]. 获取指定题目 - [`-i`/`--identity`]

在终端中键入`lc`指令加上对应的题号，即可在当前工作区中获取指定题目。

```shell
lc 1314
# 完整指令
lc -i 1314
# 使用双引号(")进行包裹 可以确保指定编号准确，对于带空格的题目编号尤其有用
lc -i "LCP 50"
```

示例获取`LCP 50`：

```shell
➜  src git:(dev) ✗ lc "LCP 50"
MODE: identity
题目[LCP 50.宝石补给]获取成功!
题目文件地址为:/home/wh131462/workspace/leetcode-practice/src/LCP 50.WHnhjV/index.js
```

##### [3]. 获取随机题目 - [`-r`/`--random`]

在终端中键入`lc`指令加上参数`-r`，即可在当前工作区中获取随机题目，会优先获取不存在当前目录中的题目。

```shell
# 完整指令
lc -r
```

示例获取随机题目：

```shell
➜  src git:(dev) ✗ lc -r
MODE: random
题目[14.最长公共前缀]获取成功!
题目文件地址为:/home/wh131462/workspace/leetcode-practice/src/14.longest-common-prefix/index.js
```

##### [5]. 简单创建模式(交互式创建) - [`-e`/`--easy`]

除了如上的使用精准的指令快速创建题目外，还可以使用简单创建模式来进行交互式创建。

```shell
lc -e
```

使用简单模式创建今日题目示例：

```shell
➜  src git:(dev) ✗ lc -e
? 请选择创建问题的模式: today
? 是否在目录[ /home/wh131462/workspace/leetcode-practice/src ]下创建题目[ 2867.count-valid-paths-in-a-tree ]? Yes
题目[2867.count-valid-paths-in-a-tree]创建完成！
文件地址为: /home/wh131462/workspace/leetcode-practice/src/2867.count-valid-paths-in-a-tree/index.js

```

#### 2.检查题解 - `lk`

##### [1]. 检查今日题解 [`-t`/`--today`]

在终端中键入`lk`指令，即可在当前工作区中检查今日题解。

```shell
# 默认执行检查今日题解
lk
# 完整指令
lk -t
```

使用示例:

```shell
# 指定了src目录为根目录
workspace/leetcode-practice [dev●] » lk -d src -t 
MODE: today
题目[2581.统计可能的树根数目]检测结果:
```

| index | 测量结果 | 预期结果 | 执行结果 | 执行用时 | 内存占用 |
| --- | --- | --- | --- | --- | --- |
| 0 | 未通过 | '3' | undefined | 0.0921ms | 2.52 KB |
| 1 | 通过 | '5' | undefined | 0.0119ms | 2.66 KB |

> 点击跳转到题目提交:<https://leetcode.cn/problems/count-number-of-possible-root-nodes/>

##### [2]. 检查指定题解 [`-i`/`--identity` + `<identity>`]

在终端中键入`lk`指令,并输入题目编号，即可在当前工作区中检查指定题解。

```shell
# 检查指定题解
lk 2581
# 完整指令
lk -i 2581
# 带空格的编号 使用双引号包裹
lk "LCP 50"
```

使用示例检查指定题解:

```shell
workspace/leetcode-practice [dev●] » lk -d src 2581
MODE: identity
题目[2581.统计可能的树根数目]检测结果:
```

| index | 测量结果 | 预期结果 | 执行结果 | 执行用时 | 内存占用 |
| --- | --- | --- | --- | --- | --- |
| 0 | 通过 | '3' | '3' | 0.1668ms | 2.52 KB |
| 1 | 通过 | '5' | '5' | 0.0234ms | 2.66 KB |

> 点击跳转到题目提交:<https://leetcode.cn/problems/count-number-of-possible-root-nodes/>

##### [3]. 检查随机获取的题解 [`-r`/`--random`]

在终端中键入`lk`指令,使用参数`-r`，即可在当前工作区中检查上一个随机获取的题解。

```shell
# 完整指令
lk -r
```

使用示例:

```shell
workspace/leetcode-practice [dev●] » lk -r 
MODE: random
题目[41.缺失的第一个正数]检测结果:
```

| index | 测量结果 | 预期结果 | 执行结果 | 执行用时 | 内存占用 |
| --- | --- | --- | --- | --- | --- |
| 0 | 未通过 | '3' | undefined | 0.0896ms | 2.42 KB |
| 1 | 未通过 | '2' | undefined | 0.0110ms | 2.56 KB |
| 2 | 未通过 | '1' | undefined | 0.0045ms | 2.56 KB |

> 点击跳转到题目提交:<https://leetcode.cn/problems/first-missing-positive/>
>
> 注意:在执行此指令之前请务必先执行过,`lc -r`创建了随机题目。

##### [4]. 简单模式(交互式检查) [`-e`/`--easy`]

在终端中键入`lk`指令,使用参数`-e`，即可使用交互式的进行题目检查。

```shell
# 完整指令
lk -e
```

使用简单模式检测指定题目:

```shell
workspace/leetcode-practice [dev●] » lk -e
? 请选择检查问题的模式: identity
? 请输入题目编号: 41
? 是否检测当前目录[ /Users/mac-106/wh131462/workspace/leetcode-practice ]下的题目[ 41.first-missing-positive ]? Yes
```

| index | 测量结果 | 预期结果 | 执行结果 | 执行用时 | 内存占用 |
| --- | --- | --- | --- | --- | --- |
| 0 | 未通过 | '3' | undefined | 0.0969ms | 2.42 KB |
| 1 | 未通过 | '2' | undefined | 0.0139ms | 2.56 KB |
| 2 | 未通过 | '1' | undefined | 0.0051ms | 2.56 KB |

> 点击跳转到题目提交:<https://leetcode.cn/problems/first-missing-positive/>
> 题目[41.first-missing-positive]检查完成！
> 文件地址为: /Users/mac-106/wh131462/workspace/leetcode-practice/41.first-missing-positive/index.js

#### 3.题目查找 - `lf`

待开发...

##### [1]. 查看题目列表[待开发]

#### 4.通用参数

##### [1]. 获取或指定当前编程语言 - [`-l`/`-language` [language]]

可以通过`-l`不带参数来获取当前的编程语言设定，也可以通过指定语言参数将当前cli的语言环境设定为指定的语言。

```shell
# 此参数在 lc/lk/lf 中的表现一致
lc -l
lk -l java
```

使用示例：

```shell
# 获取语言环境
➜  leetcode-practice git:(dev) ✗ lc -l
当前CLI语言环境为:javascript
# 更改语言环境
➜  leetcode-practice git:(dev) ✗ lc -l java
? 请确认你要设置CLI的语言环境(如果选项匹配成功，那么按下回车确认即可) java
设置语言环境为: java

```

> 注意: 在这个环境下无法执行检测测试用例。

##### [2]. 指定目录 - [`-d`/`-directory`]

`创建`和`检查`指令还可以使用参数`-d`来指定基于当前工作目录的相对地址作为指定目录。
当指定目录后会在指定目录中进行创建或者检查操作。

```shell
# 指定当前目录的子目录src作为生成目录
lc -d src -t
# 指定当前目录的子目录src作为检查目录
lk -d src -i
```

使用示例：

```shell
➜  src git:(dev) ✗ lc -d src -t
MODE: today
题目[2867.统计树中的合法路径数目]获取成功!
题目文件地址为:/home/wh131462/workspace/leetcode-practice/src/src/2867.count-valid-paths-in-a-tree/index.js
```

> 注意： 如果指定的目录不存在，会自动生成一个空目录进行创建。

##### [3]. 检查版本号 [`-V`/`--version`]

```shell
# 查看lc版本
lc -V
# 查看lk版本
lk -V
# 查看lf版本
lf -V
```

查看lc版本示例:

```shell
workspace/leetcode-practice [dev●] » lc -V
0.0.0
```

##### [4]. 更新检测 [`-u`/`--update`]

使用`-u`或者`--update`参数可以检测当前版本是否为最新版本，如果当前版本不是最新版本，会提示用户是否进行更新.

```shell
lk -u 
lf -u
lc -u
```

```shell
? 自动检测到的环境为[ project ],如果不是,请进行选择,如是,请按下回车确认. project
开始获取npm仓库中的版本号...
npm仓库中的版本号获取成功!
开始获取github仓库的版本号...
github仓库的版本号获取成功!
开始获取本地版本号...
本地版本号获取成功!
当前版本:[ 1.0.0 ] npm包最新版本:[ 1.0.1 ] github版本:[ 1.0.1 ]
? 检测到[ project ]可更新版本[ 1.0.1 ],是否进行更新? (Y/n) Yes
更新完成~祝你使用愉快~
```

### fork项目的使用

#### [0]. 安装依赖

在使用之前,先使用包管理工具进行依赖的安装.

```shell
# 安装依赖 
npm install
# 或者 使用yarn (你可以使用任意一种你喜欢的包管理工具)
yarn
```

fork项目中的指令,使用上和脚手架CLI的使用参数是一致的,只不过需要通过`npm run`类似的包管理工具执行命令来执行脚本.

> 注意:在项目中的脚本,和脚手架的唯一区别就是默认指定了`-d`参数,指向了项目根目录的`src`目录,所以所有的指令都是在src中默认执行的.
>
#### [1]. 创建题解 [`lc`]

参数参考cli的`lc`部分: [lc](#1创建题解---lc)

简单使用示例:

```shell
# 使用yarn执行
yarn lc 1314
```

执行结果:

```shell
# 会在src目录下进行生成
> yarn lc 1314                 
yarn run v1.22.19
$ node bin/lc.js -d src 1314
MODE: identity
题目[1314.矩阵区域和]获取成功!
题目文件地址为:/Users/mac-106/wh131462/workspace/leetcode-practice/src/1314.matrix-block-sum/index.js
✨  Done in 1.06s.
```

#### [2]. 检查题解 [`lk`]

参数参考cli的`lk`部分: [lk](#2检查题解---lk)

简单使用示例:

```shell
# 使用yarn执行
yarn lk 1314
```

执行结果:

```shell
# 会在src目录下进行检查
> yarn lk 1314
yarn run v1.22.19
$ node bin/lk.js -d src 1314
MODE: identity
题目[1314.矩阵区域和]检测结果:
```

| index | 测量结果 | 预期结果 | 执行结果 | 执行用时 | 内存占用 |
| --- | --- | --- | --- | --- | --- |
| 0 | 未通过 | '[[12,21,16],[27,45,33],[24,39,28]]' | undefined | 0.1487ms | 2.47 KB |
| 1 | 未通过 | '[[45,45,45],[45,45,45],[45,45,45]]' | undefined | 0.0278ms | 2.61 KB |

> 点击跳转到题目提交:<https://leetcode.cn/problems/matrix-block-sum/>
> ✨  Done in 1.13s.

#### [3]. 查找题解 [`lf`]

参数参考cli的`lf`部分: [lf](#3题目查找---lf)

待开发...

#### [4]. 更新 [`update`]

特定更新本地项目的脚本,会更新所有的非src目录,用以同步项目最新特性.

> 注意: 如果你有自己的优化更改代码,这一步请谨慎操作! 请参考我们的[特殊情况下的升级方案](./update.md)!

### 插件的使用

待开发...

## 贡献者

[<img src="https://avatars.githubusercontent.com/u/48346853" style="border-radius:50%;" width="30" height="30" alt="EternalHeart"/>](https://github.com/wh131462)
[<img src="https://avatars.githubusercontent.com/u/61453917" style="border-radius:50%;" width="30" height="30" alt="SmartTeddy"/>](https://github.com/SmallTeddy)
[<img src="https://avatars.githubusercontent.com/u/35305691" style="border-radius:50%;" width="30" height="30" alt="Hedwig-Fang"/>](https://github.com/Hedwig-Fang)
