# Leetcode practice

力扣练习库!
在编辑器中编写你的代码,简单有效的执行和计时!

## How to use for yourself ?
fork分支`template`的内容,其非内容部分会与主分支保持同步,意思是只是去除了题目代码,使用指令创建你自己的题解即可!

## Preparation

只需要一个node环境即可.([如何安装node?点我了解](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs))

`node`:`lts`

## Usage

### 1. 创建题目

```shell
# 可以使用你喜欢的任意包管理工具,例如 `pnpm`/`npm`
yarn leet-create [题目编号或者名称]

e.g.
yarn leet-create 1314
```

然后会在目录中创建一个模板js文件,目录结构为:

```shell
-src
└── src
  └── 1314
    └── index.js # 模板js文件 可以替换题目
```

### 2. 检验结果

```shell
# 可以使用你喜欢的任意包管理工具,例如 `pnpm`/`npm`
yarn leet-check [题目编号或者名称]

e.g.
yarn leet-check 1314
```

会出现其用时以及内存占用:

```shell
yarn run v1.22.19
$ node common/scripts/check.js 2696
执行结果:
5
函数执行用时: 2.509ms
内存占用：262144
2
函数执行用时: 0.063ms
内存占用：0

✨  Done in 0.13s.
```

## Scripts API Document

| script      | 参数         | 说明       |
|-------------|------------|----------|
| leet-create | 题目编号或者题目名称 | 创建一个模板文件 |
| leet-check  | 题目编号或者题目名称 | 执行某个项目   |

> note:
> 名词解释: 题目编号或者题目名称(题目创建的时候的唯一标识,可以是题目的LeetCode编号也可以是自己起得别名)

## Contributor

[EternalHeart](https://github.com/wh131462)
[SmallTeddy](https://github.com/SmallTeddy)
