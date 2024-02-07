#! /usr/bin/env node
import {program} from "commander";
import {artFontLogo} from "../resources/text/art-font-logo.js";
import {examples} from "../resources/text/examples.js";
import {love} from "../resources/text/love.js";
import {aim} from "../resources/text/aim.js";
import {referMode} from "#common/utils/create-check/refer-mode.js";
import {getArgs} from "#common/utils/create-check/get-args.js";
import fs from "fs";
import path from "path";
import {checkQuestion} from "#common/utils/question-handler/checkQuestion.js";
import {getQuestionByMode} from "#common/utils/store/store-realm.js";
import {getQuestionById} from "#common/utils/question-getter/getQuestionById.js";
import {getQuestionFileName} from "#common/utils/question-handler/getQuestionFileName.js";
import {rootPath} from "#common/utils/file/getRootPath.js";
import {getQuestionChineseName} from "#common/utils/question-handler/getQuestionChineseName.js";
const {version} =  JSON.parse(fs.readFileSync(path.resolve(rootPath,"package.json"),'utf-8'));
program
    .version(version)
    .description(`${artFontLogo}\n${aim}`)
    .addHelpText('after', examples+love)
    .arguments("[identity]")
    .option('-i, --identity <identity>', 'Check the specified question by identity.')
    .option('-r, --random', 'Check the last random question.')
    .option('-t, --today', 'Check the question today.')
    .option('-d, --directory <directory>', 'Set the question directory.')
    .parse(process.argv)

const cmdArgs = program.args;
const cmdOpts = program.opts();

// 根据dir 参数来设置基本目录
const baseDir = cmdOpts.directory?path.join(process.cwd(),cmdOpts.directory):process.cwd();
// 检测函数
const check = async (mode,question)=>{
    const filePath = path.join(baseDir,getQuestionFileName(question),'index.js');
    if(!fs.existsSync(filePath)) {
        console.log(`文件[${filePath}]不存在,请确保已经创建!`)
    }else{
        console.log(`MODE: ${mode}\n题目[${getQuestionChineseName(question)}]检测结果:`)
        await checkQuestion(filePath);
    }
    return true;
}
// 模式对应的action
const callModeAction = {
    'today': async () => {
        const question = await getQuestionByMode("today");
        await check('today',question)
        process.exit(0);
    },
    'random': async () => {
        const question = await getQuestionByMode("random");
        await check('today',question)
        process.exit(0);
    },
    'identity': async (id) => {
        const question = !id?
            await getQuestionByMode(mode):
            await getQuestionById(id);
        await check('today',question)
        process.exit(0);
    },
}
// 获取模式和参数
const mode = referMode(cmdArgs, cmdOpts);
const args = getArgs(mode,cmdArgs,cmdOpts);
// 执行指令分发
callModeAction[mode](args);
