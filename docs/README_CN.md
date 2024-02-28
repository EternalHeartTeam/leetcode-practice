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

### 方案 B : fork (受支持的)

你也可以使用`github`的`fork`功能来创建我们的项目副本，然后，直接使用项目内置指令进行题解的创建和检查。

### 方案 C : plugin (受支持的)

你同样可以使用我们发布在插件市场的插件`leetcode-practice`来进行交互式的创建和检查题解。（支持两个主流编辑器：`WebStorm` 和 `VS Code`）

## 预备条件

不管哪种方案，只需要一个node环境即可.([不知道如何安装node?点我进行了解](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs))

| 依赖包    | 版本  |
|--------|-----|
| nodejs | lts |
| git    | lts |


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

### 二.使用`fork`创建你自己的`leetcode-practice`仓库副本 (方案 B)

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

### 三.在编辑器的插件市场安装插件[WebStorm/VS code] (方案 C)

待开发...

## 使用方法

### CLI的使用

#### 1. 创建题解 - `lc`

##### [1]. 获取今日题目

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

##### [2]. 获取指定题目

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

##### [3]. 获取随机题目

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

##### [4]. 指定创建题目的目录

在创建题目的三个指令之外还可以使用参数`-d`来指定基于当前工作目录的相对地址作为题目生成的目录。
```shell
# 指定当前目录的子目录src作为生成目录
lc -d src -t
```

使用示例：

```shell
➜  src git:(dev) ✗ lc -d src -t
MODE: today
题目[2867.统计树中的合法路径数目]获取成功!
题目文件地址为:/home/wh131462/workspace/leetcode-practice/src/src/2867.count-valid-paths-in-a-tree/index.js
```

> 注意： 如果指定的目录不存在，会自动生成一个空目录进行创建。

##### [5]. 简单创建模式(交互式创建)

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

#### 2. 检查题解 - `lk`
##### [1]. 检查今日题解 [-t]
##### [2]. 检查指定题解 [-i]
##### [3]. 检查随机获取的题解 [-r]
#### 3. 题目查找 - `lf`

#### 4. 通用参数

##### [1]. 检查版本号`-v`

### fork项目的使用

### 插件的使用

待开发...

## Contributor

[<img src="https://avatars.githubusercontent.com/u/48346853" style="border-radius:50%;" width="30" height="30" alt="EternalHeart"/>](https://github.com/wh131462)
[<img src="https://avatars.githubusercontent.com/u/61453917" style="border-radius:50%;" width="30" height="30" alt="SmartTeddy"/>](https://github.com/SmallTeddy)
[<img src="https://avatars.githubusercontent.com/u/35305691" style="border-radius:50%;" width="30" height="30" alt="Hedwig-Fang"/>](https://github.com/Hedwig-Fang)