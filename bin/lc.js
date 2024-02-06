#! /usr/bin/env node
import {program} from "commander";
import {artFontLogo} from "../resources/text/art-font-logo.js";
import {examples} from "../resources/text/examples.js";
import {love} from "../resources/text/love.js";
import {aim} from "../resources/text/aim.js";
import {referMode} from "#common/utils/create-check/refer-mode.js";
import {getArgs} from "#common/utils/create-check/get-args.js";
import fs from "fs";
const {version} =  JSON.parse(fs.readFileSync("package.json",'utf-8'));

program
    .version(version)
    .description(`${artFontLogo}\n${aim}`)
    .addHelpText('after', examples+love)
    .arguments("[identity]")
    .option('-i, --identity <identity>', 'Specify a question by identity.')
    .option('-r, --random', 'Get a question randomly.')
    .option('-t, --today', 'Get a question today.')
    .parse(process.argv)

const cmdArgs = program.args;
const cmdOpts = program.opts();
// 模式对应的action
const callModeAction = {
    'today': () => {
        // todo 获取今日题目的进程
        console.log("[leetcode-practice] 获取今日题目")
    },
    'random': () => {
        // todo 获取随机题目的进程
        console.log("[leetcode-practice] 获取随机题目")
    },
    'identity': (id) => {
        // todo 获取指定题目的进程
        console.log(`[leetcode-practice] 获取指定题目[${id}]`)
    },
}
// 获取模式和参数
const mode = referMode(cmdArgs, cmdOpts);
const args = getArgs(mode,cmdArgs,cmdOpts);
// 执行指令分发
callModeAction[mode](args);