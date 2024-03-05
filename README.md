# Leetcode practice

[Chinese Document](docs/README_CN.md)|**English Document**|[Japanese Document](docs/README_JP.md)|[Korean Document](docs/README_KR.md)

## Introduction

A brief introduction: "Start practicing your daily LeetCode questions in the editor!"

If you want to write your solutions in the editor...

If you want to quickly access daily questions...

If you want to create your own solution repository...

Then, leetcode-practice will meet all your needs!

## Preview

![CLI-lc](resources/images/lc-cli-h.png)

## How should I use it? (Three options for you to choose from)

### Option A: CLI (Recommended)

The best and most flexible way to use it is to use our CLI in the terminal. You can create and check your solutions using three core commands: `lk`, `lf`, and `lc`.

[Installation](#I-Global-Installation-of-CLI-(Option-A)) · [Usage](#using-cli)

### Option B: Fork (Supported)

You can also use GitHub's fork feature to create a copy of our project. Then, you can directly use the built-in commands within the project to create and check solutions.

[Installation](#II-Fork-the-Repository-to-Create-Your-Own-leetcode-practice-Repository-(Option-B)) · [Usage](#using-the-forked-project)

### Option C: Plugin (Supported)

You can also use our `leetcode-practice` plugin available in the plugin marketplace for interactive creation and checking of solutions. (Supported on two popular editors: `WebStorm` and `VS Code`)

[Installation](#III-Install-Plugins-from-the-Editor's-Marketplace-(Option-C)) · [Usage](#plugin-usage)

## Prerequisites

| Dependency | Version |
|------------|---------|
| nodejs     | lts     |
| git        | lts     |

> note: nodejs:[Node.js Installation Guide](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
>
> git:[Git Download Link](https://git-scm.com/downloads)

## Installation

### I. Global Installation of CLI (Option A)

You can install the CLI globally using any npm package manager such as `npm`, `yarn`, `pnpm`, etc.

```shell
# Using npm
npm install -g leetcode-practice
# Using pnpm
pnpm install -g leetcode-practice
# Using yarn
yarn global install leetcode-practice
```

### II. Fork the Repository to Create Your Own leetcode-practice Repository (Option B)

#### Regular Method

1. Open our project link: [leetcode-practice](https://github.com/wh131462/leetcode-practice)

![leetcode-practice-github](resources/images/leetcode-practice-github.png)

2. Click the `fork` button

You will see a page like this, then modify the repository name and description, make sure to check `Copy the master branch only`.
![github-fork](resources/images/github-fork.png)

3. Click confirm to create, wait for creation

![github-forking](resources/images/github-forking.png)

4. Once created, pull this repository and start solving problems happily!

![github-forked](resources/images/github-forked.png)

#### Simplified Method

1. Pull our repository to your local machine

```shell
git clone https://github.com/wh131462/leetcode-practice.git
```

2. Execute our deployment script

```shell
# Use your preferred package manager to execute the script
npm run easy-fork
```

3. Deployment completed

### III. Install Plugins from the Editor's Marketplace (Option C)

To be developed...

## Usage

### Using CLI

#### 1. Creating Solutions - `lc`

##### [1]. Get Today's Problem - [`-t`/`--today`]

Type `lc` in the terminal to get today's problem in the current working directory by default.

```shell
lc 
# Full command
lc -t
```

Example of getting today's problem:

```shell
# For example, the current execution directory is src
➜  src git:(dev) ✗ lc
MODE: today
Successfully obtained problem [2867.Count the Number of Valid Paths in a Tree]!
Problem file address is: /home/wh131462/workspace/leetcode-practice/src/2867.count-valid-paths-in-a-tree/index.js
```

##### [2]. Get Specified Problem - [`-i`/`--identity`]

Type `lc` followed by the corresponding problem number in the terminal to get the specified problem in the current working directory.

```shell
lc 1314
# Full command
lc -i 1314
# Use double quotation marks (") to ensure accurate identification, especially for problem numbers with spaces
lc -i "LCP 50"
```

Example of getting problem `LCP 50`:

```shell
➜  src git:(dev) ✗ lc "LCP 50"
MODE: identity
Successfully obtained problem [LCP 50.Supply of Jewel]!
Problem file address is: /home/wh131462/workspace/leetcode-practice/src/LCP 50.WHnhjV/index.js
```

##### [3]. Get Random Problem - [`-r`/`--random`]

Type `lc` followed by the `-r` parameter in the terminal to get a random problem in the current working directory. It will prioritize obtaining problems not currently in the directory.

```shell
# Full command
lc -r
```

Example of getting a random problem:

```shell
➜  src git:(dev) ✗ lc -r
MODE: random
Successfully obtained problem [14.Longest Common Prefix]!
Problem file address is: /home/wh131462/workspace/leetcode-practice/src/14.longest-common-prefix/index.js
```

##### [5]. Easy Creation Mode (Interactive Creation) - [`-e`/`--easy`]

In addition to creating problems quickly with precise commands as mentioned above, you can also use easy creation mode for interactive creation.

```shell
lc -e
```

Example of creating today's problem using easy mode:

```shell
➜  src git:(dev) ✗ lc -e
? Select the problem creation mode: today
? Create the problem [ 2867.count-valid-paths-in-a-tree ] in the directory [ /home/wh131462/workspace/leetcode-practice/src ]? Yes
Problem [2867.count-valid-paths-in-a-tree] created!
File address is: /home/wh131462/workspace/leetcode-practice/src/2867.count-valid-paths-in-a-tree/index.js

```

#### 2. Checking Solutions - `lk`

##### [1]. Check Today's Solution [`-t`/`--today`]

Type `lk` in the terminal to check today's solution in the current working directory.

```shell
# By default, check today's solution
lk
# Full command
lk -t
```

Example of checking today's solution:

```shell
# Specified src directory as the root directory
workspace/leetcode-practice [dev●] » lk -d src -t 
MODE: today
Check result for problem [2581.Count Possible Trees]:
```

| index | Test Result | Expected Result | Execution Result | Execution Time | Memory Usage |
| --- | --- | --- | --- | --- | --- |
| 0 | 'Failed' | '3' | undefined | 0.0921ms | 2.52 KB |
| 1 | 'Passed' | '5' | undefined | 0.0119ms | 2.66 KB |

> Click to jump to problem submission: <https://leetcode.com/problems/count-number-of-possible-root-nodes/>

##### [2]. Check Specified Solution [`-i`/`--identity` + `<identity>`]

Type `lk` followed by the problem number in the terminal to check the specified solution in the current working directory.

```shell
# Check specified solution
lk 2581
# Full command
lk -i 2581
# For problem numbers with spaces, use double quotation marks
lk "LCP 50"
```

Example of checking the specified solution:

```shell
workspace/leetcode-practice [dev●] » lk -d src 2581
MODE: identity
Check result for problem [2581.Count Possible Trees]:
```

| index | Test Result | Expected Result | Execution Result | Execution Time | Memory Usage |
| --- | --- | --- | --- | --- | --- |
| 0 | 'Passed' | '3' | '3' | 0.1668ms | 2.52 KB |
| 1 | 'Passed' | '5' | '5' | 0.0234ms | 2.66 KB |

> Click to jump to problem submission: <https://leetcode.com/problems/count-number-of-possible-root-nodes/>

##### [3]. Check Randomly Obtained Solution [`-r`/`--random`]

Type `lk` followed by the `-r` parameter in the terminal to check the previously randomly obtained solution in the current working directory.

```shell
# Full command
lk -r
```

Example of checking a randomly obtained solution:

```shell
workspace/leetcode-practice [dev●] » lk -r 
MODE: random
Check result for problem [41.First Missing Positive]:
```

| index | Test Result | Expected Result | Execution Result | Execution Time | Memory Usage |
| --- | --- | --- | --- | --- | --- |
| 0 | 'Failed' | '3' | undefined | 0.0896ms | 2.42 KB |
| 1 | 'Failed' | '2' | undefined | 0.0110ms | 2.56 KB |
| 2 | 'Failed' | '1' | undefined | 0.0045ms | 2.56 KB |

> Click to jump to problem submission: <https://leetcode.com/problems/first-missing-positive/>
>
> Note: Ensure that `lc -r` has been executed before this command to create a random problem.

##### [4]. Easy Mode (Interactive Checking) [`-e`/`--easy`]

Type `lk` followed by the `-e` parameter in the terminal to use interactive mode for checking the problem.

```shell
# Full command
lk -e
```

Example of checking the specified problem using easy mode:

```shell
workspace/leetcode-practice [dev●] » lk -e
? Select the mode of problem checking: identity
? Enter the problem number: 41
? Do you want to check the problem [ 41.first-missing-positive ] in the current directory [ /Users/mac-106/wh131462/workspace/leetcode-practice ]? Yes
```

| index | Test Result | Expected Result | Execution Result | Execution Time | Memory Usage |
| --- | --- | --- | --- | --- | --- |
| 0 | 'Failed' | '3' | undefined | 0.0969ms | 2.42 KB |
| 1 | 'Failed' | '2' | undefined | 0.0139ms | 2.56 KB |
| 2 | 'Failed' | '1' | undefined | 0.0051ms | 2.56 KB |

> Click to jump to problem submission: <https://leetcode.com/problems/first-missing-positive/>
> Problem [41.first-missing-positive] checked!
> File address is: /Users/mac-106/wh131462/workspace/leetcode-practice/41.first-missing-positive/index.js

#### 3. Problem Lookup - `lf`

To be developed...

##### [1]. View Problem List [To be developed]

#### 4. Common Parameters

##### [1]. Get or specify the current programming language - [-l/-language [language]]

You can use -l without arguments to get the current programming language setting, or you can specify the language parameter to set the language environment of the current CLI to the specified language.

```shell
# This parameter behaves consistently in lc/lk/lf
lc -l
lk -l java
```

Usage example:

```shell
# Get language environment
➜  leetcode-practice git:(dev) ✗ lc -l
Current CLI language environment is: javascript
# Change language environment
➜  leetcode-practice git:(dev) ✗ lc -l java
? Please confirm the language environment you want to set for the CLI (Press Enter to confirm if the option matches) java
Setting language environment to: java
```

Note: Unable to execute test cases in this environment.

##### [2]. Specify Directory - [`-d`/`-directory`]

The `create` and `check` commands can also use the `-d` parameter to specify a relative address based on the current working directory as the specified directory.
When specifying a directory, the operation will be performed in that directory.

```shell
# Use the src directory as the generation directory
lc -d src -t
# Use the src directory as the check directory
lk -d src -i
```

Example:

```shell
➜  src git:(dev) ✗ lc -d src -t
MODE: today
Successfully obtained problem [2867.Count the Number of Valid Paths in a Tree]!
Problem file address is: /home/wh131462/workspace/leetcode-practice/src/src/2867.count-valid-paths-in-a-tree/index.js
```

> Note: If the specified directory does not exist, an empty directory will be created.

##### [3]. Check Version [`-V`/`--version`]

```shell
# Check lc version
lc -V
# Check lk version
lk -V
# Check lf version
lf

 -V
```

Example of checking the lc version:

```shell
workspace/leetcode-practice [dev●] » lc -V
0.0.0
```

##### [4]. Update Check [`-u`/`--update`]

Using the `-u` or `--update` parameter, you can check whether the current version is the latest version. If the current version is not the latest version, you will be prompted whether to update.

```shell
lk -u 
lf -u
lc -u
```

```shell
? Automatically detected environment is [ project ], if not, please make a selection, if yes, please press Enter to confirm. project
Start getting version number in npm repository...
Successfully obtained version number in npm repository!
Start getting version number in github repository...
Successfully obtained version number in github repository!
Start getting local version number...
Successfully obtained local version number!
Current version:[ 1.0.0 ] npm package latest version:[ 1.0.1 ] github version:[ 1.0.1 ]
? Detected [ project ] can update to version[ 1.0.1 ], whether to update? (Y/n) Yes
Update completed~Enjoy your use~
```

### Using the Forked Project

#### [0]. Dependency Installation

Before using, install dependencies using a package manager.

```shell
# Install dependencies 
npm install
# Or use yarn (you can use any package manager you like)
yarn
```

The commands in the forked project are the same as those in the CLI usage parameters, except that the scripts are executed through the package manager such as `npm run`.

> Note: The only difference between the scripts in the project and the scaffolding is that the `-d` parameter is specified by default, pointing to the `src` directory at the root of the project, so all commands are executed by default in `src`.

#### [1]. Create Solution [`lc`]

Refer to the `lc` part of the CLI for parameters: [lc](#1-creating-solutions---lc)

Simple usage example:

```shell
# Execute using yarn
yarn lc 1314
```

Execution result:

```shell
# Generated in the src directory
> yarn lc 1314                 
yarn run v1.22.19
$ node bin/lc.js -d src 1314
MODE: identity
Successfully obtained problem [1314.Matrix Block Sum]!
Problem file address is:/Users/mac-106/wh131462/workspace/leetcode-practice/src/1314.matrix-block-sum/index.js
✨  Done in 1.06s.
```

#### [2]. Check Solution [`lk`]

Refer to the `lk` part of the CLI for parameters: [lk](#2-checking-solutions---lk)

Simple usage example:

```shell
# Execute using yarn
yarn lk 1314
```

Execution result:

```shell
# Checked in the src directory
> yarn lk 1314
yarn run v1.22.19
$ node bin/lk.js -d src 1314
MODE: identity
Check result for problem [1314.Matrix Block Sum]:
```

| index | Test Result | Expected Result | Execution Result | Execution Time | Memory Usage |
| --- | --- | --- | --- | --- | --- |
| 0 | 'Failed' | '[[12,21,16],[27,45,33],[24,39,28]]' | undefined | 0.1487ms | 2.47 KB |
| 1 | 'Failed' | '[[45,45,45],[45,45,45],[45,45,45]]' | undefined | 0.0278ms | 2.61 KB |

> Click to jump to problem submission: <https://leetcode.com/problems/matrix-block-sum/>
> ✨  Done in 1.13s.

#### [3]. Look Up Solutions [`lf`]

Refer to the `lf` part of the CLI for parameters: [lf](#3-problem-lookup---lf)

To be developed...

#### [4]. Update [`update`]

This is a special script to update the local project, which updates all non-src directories to synchronize with the latest features of the project.

> Note: If you have your own optimized code changes, be cautious about this step! Please refer to our [upgrade plan under special circumstances](./update.md)!

### Plugin Usage

To be developed...

## Contributors

[<img src="https://avatars.githubusercontent.com/u/48346853" style="border-radius:50%;" width="30" height="30" alt="EternalHeart"/>](https://github.com/wh131462)
[<img src="https://avatars.githubusercontent.com/u/61453917" style="border-radius:50%;" width="30" height="30" alt="SmartTeddy"/>](https://github.com/SmallTeddy)
[<img src="https://avatars.githubusercontent.com/u/35305691" style="border-radius:50%;" width="30" height="30" alt="Hedwig-Fang"/>](https://github.com/Hedwig-Fang)
