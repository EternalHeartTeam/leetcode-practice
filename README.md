# Leetcode practice

[中文文档](./README_CN.md)|**English Document**||[日本語の文書](./README_JP.md)

## I. Project Information

### 1. Introduction

One-sentence introduction: "Start practicing your `LeetCode` daily questions in the editor!"

If you want to write your solutions in the editor...

If you want a simple and quick way to get daily questions...

If you want to create your own repository for solutions...

Then, `leetcode-practice` is all you need!

### 2. Preview

![CLI-lc](./resources/images/lc-cli-h.png)

## II. Instructions for Use

### 0. Prerequisites

| Tool     |                     Remarks                     |
| -------- | :---------------------------------------------: |
| nodejs   |                       lts                       |
| git      |                       lts                       |
| computer |     Ability to run Chrome and a code editor     |
| patience | A heart that can persist in practicing problems |

> Note: nodejs: [Node.js Installation Guide](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
>
> git: [Git Download Page](https://git-scm.com/downloads)

### 1. How Can I Use It? (Three Options for You to Choose From)

#### Option A. Command-Line Interface (CLI) (Recommended)

This option is the most recommended way to use the tool. You can freely create and check your solutions in any directory using the CLI commands `lc`, `lk`, and `lf`.

> Usage Preview

#### Option B. Template Project (Supported)

If you want to quickly create your own repository for solutions, you can use our template project to quickly create a GitHub project and get comprehensive initialization content.

> Usage Preview

#### Option C. Plugin (Supported, Under Development)

If you want to create solutions in your editor by clicking buttons, you can use our editor plugin (planned support for `WebStorm` and `VSCode`) to create solutions in your editor.

> Usage Preview

### 2. How Should I Use It? (Detailed Installation and Usage Guides for Three Options)

#### Option A. Command-Line Interface (CLI)

##### 1. Installation

You can install it globally or locally in your project using any npm package manager (e.g., `npm`, `yarn`, `pnpm`).

```shell
# Example: Global Installation
# Using npm for global installation
npm install -g leetcode-practice
# Using pnpm for installation
pnpm install -g leetcode-practice
# Using yarn for installation
yarn global install leetcode-practice

# Example: Installation in the Project
yarn add --dev leetcode-practice
```

> Note: The difference between installing in the project and globally lies in the scope of the CLI commands. If installed in the project, the commands can only be used within that project, and cannot be used in other projects (where the `leetcode-practice` package is not installed). Global installation allows you to use the commands in any directory.

##### 2. Usage

Here's a simple introduction to creating and checking daily questions, as well as using keyword search. For more detailed instructions and parameters, please refer to the [KFC and its Key Parameter Explanation](#3-kfc-and-its-key-parameter-explanation-universal-reference-manual) section.

###### 2.1 Creating a Question

Within the command scope, use the command `lc` to create today's daily question:

```shell
# Move to my workspace directory
cd my-workspace
# Create the daily question
lc
```

When you see the prompt:

```shell
MODE: today
题目[299.猜数字游戏]获取成功!
题目文件地址为:/my-workspace/299.bulls-and-cows/question.js
```

Your question has been created! You can now solve it happily in the editor!

###### 2.2 Checking a Question

Once you've written your solution code, you can use the `lk` command to perform a simple check of the solution!

```shell
# The lk command corresponds to the lc command mode, and when used without parameters, it means checking today's question
lk
```

You will receive information like this:

```shell
MODE: today
题目[299.猜数字游戏]检测结果:
┌────────────┬──────────────────────────────────────────┬──────────────────────────────────────────┬────────────┬────────────┐
│  测试结果  │                 预期结果                    │                 执行结果                  │  执行用时    │  内存占用   │
├────────────┼──────────────────────────────────────────┼──────────────────────────────────────────┼────────────┼────────────┤
│    通过    │                  "1A3B"                   │                  "1A3B"                  │  0.1361ms  │  2.79 KB   │
│    通过    │                  "1A1B"                   │                  "1A1B"                  │  0.0623ms  │  2.93 KB   │
└────────────┴──────────────────────────────────────────┴──────────────────────────────────────────┴────────────┴────────────┘
Click here to submit the question: https://leetcode-cn.com/problems/bulls-and-cows/
```

You can see the `Test Result`, `Expected Result`, `Execution Result`, `Execution Time`, and `Memory Usage` information.

###### 2.3 Searching for a Question

Keyword search is a basic function of the core command `lf`, which allows you to quickly search for the question you want and choose to create it.

```shell
# The lf command is completely interactive. Follow the prompts to enter the desired information
lf
```

The following demonstrates how to use keyword search to create the `Two Sum` question:

```shell
# After entering the keyword `two sum` and pressing Enter, all questions related to `two sum` will appear. Use the up and down arrow keys on the keyboard to select, and press Enter to confirm.
? Choose the search mode? Keyword search
? Enter keywords two sum
? Choose a question
  LCR 025.两数相加 II
  2.两数相加
  29.两数相除
❯ 1.两数之和
  LCR 006.两数之和 II - 输入有序数组
  445.两数相加 II
  LCR 056.两数之和 IV - 输入二叉搜索树
(Use arrow keys to reveal more choices)

# After confirmation, the question will be created, and a success message will be returned
? Choose the search mode? Keyword search
? Enter keywords two sum
? Choose a question 1.两数之和
1
MODE: identity
题目[1.两数之和]获取成功!
题目文件地址为:fill:///my-workspace/1.two-sum/question.js:36
```

> Note: When the creation is complete, a clickable file address will be output. If clicked in the editor console, it will directly open the corresponding file to the start of the function.

#### Option B. Template Project

##### 1. Creating a Template Project

1. Open

our template project [leetcodePracticeTemplate](https://github.com/EternalHeartTeam/LeetcodePracticeTemplate) on GitHub. 2. Click on `Use this template` in the upper right corner and select `Create a new repository`. 3. Fill in the information as you would when creating a normal repository. 4. Wait... and you're done. You now have your own `LeetCode solutions repository` and will receive long-term support from the `leetcode-practice` official team!

> Fill in the creation process chart

##### 2. Using the Template Project

###### 1. Clone the project and initialize the dependencies.

e.g. Using my personal project as an example

```shell
# This is just an example. Please clone your own project (when you attempt this, the project may have been cleared, which is a normal phenomenon, please don't be surprised)
git clone git@github.com:wh131462/my-leetcode-practice.git
# Move into the project directory
cd my-leetcode-practice
# Initialize
npm i
```

###### 2. Usage in the project

There are two ways to use the `leetcode-practice` in the template project: `project internal commands` and `npm scripts`. The process of creation is demonstrated below, and other command usages and parameters are consistent with the scaffold. Please refer to the [KFC and its Key Parameter Explanation](#3-kfc-and-its-key-parameter-explanation-universal-reference-manual) section.

```shell
# Under the root directory of the project, execute npm run lc to create today's question. Because -d src is configured by default, the creation will be done under the src directory
npm run lc
# You can also use yarn: any package management tool you like
yarn lc
```

You can also use the `lc` command to create, of course, you can only use our script in the project (if you haven't installed the `leetcode-practice` package globally).

```shell
# Using lc will create in the current working directory. If you need to keep consistent with the script's behavior (creating under src directory), please use the -d src parameter
lc
```

> Note: Here's an emphasis. The term "project internal command" means that the scope of the command is limited to the current project directory, meaning that if you try to use the lc command in another directory, you'll find that it doesn't work. Similarly, you'll find that when you first install it, the lc command doesn't work in the project until you close and reopen the terminal (terminal) to manually refresh the cache. npm script refers to a script command encapsulated under the scripts field in package.json.

###### 3. Updating Dependencies

When you want to update, you can execute the encapsulated npm command `update`, which can help you install the `latest version (latest)` of `leetcode-practice`.

```shell
# Execute using any package management tool
npm run update
# Of course, you can also execute the command yourself
npm i --save-dev leetcode-practice
```

#### Option C. Plugin (Under Development)

### 3. KFC and its Key Parameter Explanation (Universal Reference Manual)

#### [0]. What is KFC?

`KFC` is a simple mnemonic that can quickly remember our three core commands: `lk`, `lf`, and `lc`.

| Command | Explanation                                                                                                                       |
| ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| lc      | Core creation command, supports three creation modes (daily question, specified question, random question) for creating questions |
| lk      | Core checking command, supports three modes corresponding to the question for checking questions                                  |
| lf      | Core search command, which can quickly search for the question you want based on prompts                                          |

#### [1]. lc

| Short Parameter        | Full Parameter | Explanation                                                             |
| ---------------------- | -------------- | ----------------------------------------------------------------------- |
| No parameter / `-t`    | `--today`      | Create today's daily question                                           |
| Question number / `-i` | `--identity`   | Create the question corresponding to the specified number               |
| `-r`                   | `--random`     | Create a random question that has not appeared in the current directory |
| `-e`                   | `--easy`       | Interactive creation of questions                                       |

#### [2]. lk

| Short Parameter        | Full Parameter | Explanation                                                                                                                                       |
| ---------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| No parameter / `-t`    | `--today`      | Check today's daily question                                                                                                                      |
| Question number / `-i` | `--identity`   | Check the question corresponding to the specified number, and check if the question with the specified ID exists in the current working directory |
| `-r`                   | `--random`     | Check the question created using the random mode last time                                                                                        |
| `-e`                   | `--easy`       | Interactive check of the corresponding question based on prompts                                                                                  |

> Note: When checking, please pay attention to what mode to use for checking, and make sure that you have performed the corresponding mode creation operation.
> The specified ID mode is an exception because it will check whether the specified ID exists in the current working directory.

#### [3]. lf

| Short Parameter | Full Parameter | Explanation                                                               |
| --------------- | -------------- | ------------------------------------------------------------------------- |
| No parameter    | None           | Enter interactive search, and search or filter questions based on prompts |

#### [4]. General Parameters

| Short Parameter  | Full Parameter            | Explanation                                                                                                                                                                                                                                 |
| ---------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-d <directory>` | `--directory <directory>` | Specify the working directory (a relative address of the current execution directory), which will affect the creation and checking                                                                                                          |
| `-V`             | `--version`               | Check the version number                                                                                                                                                                                                                    |
| `-h`             | `--help`                  | Get help information                                                                                                                                                                                                                        |
| `-l [language]`  | `--language [language]`   | Without specifying a parameter, get the current language environment (default is JavaScript). Specifying a parameter can set the language environment to the corresponding language (e.g., `-l java` sets the language environment to Java) |
| `-u`             | `--update`                | Update the current script or dependency                                                                                                                                                                                                     |

> Note: General parameters refer to parameters supported by all three scripts `lk`, `lf`, and `lc`. The semantics of usage are generally the same, but there may be differences in the meanings of behaviors in some commands (for example, specifying the `-d` parameter in the `lc` command means `creating questions in the specified directory`, while in the `lk` command, specifying the `-d` parameter means `creating questions in the specified directory`).

## III. Additional Information

### 1. Contributors

The development and improvement of the project would not be possible without the hard work of these contributors. Sincere thanks to all of them!

<a href="https://github.com/EternalHeartTeam/leetcode-practice/graphs/contributors" target="_blank"><img src="https://raw.githubusercontent.com/EternalHeartTeam/leetcode-practice/svg/images/contributors.png" /></a>

### 2. How to Contribute

If you share a passion for open source and would like to contribute to our open source initiative, please refer to our [contribution guidelines](./CONTRIBUTORS.md).

### 3. Feedback

If you have any questions about usage or would like to offer some suggestions, feel free to join our feedback group!

Engage in face-to-face discussions with developers in the group, hoping to resonate with each other and spark new ideas!

![Feedback Group](./resources/images/service-qrcode.png)

### 4. Star Trend Chart

[![Star History Chart](https://api.star-history.com/svg?repos=EternalHeartTeam/leetcode-practice&type=Date)](https://star-history.com/#EternalHeartTeam/leetcode-practice&Date)
