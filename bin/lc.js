#! /usr/bin/env node
import {program} from "commander";
import {artFontLogo} from "../resources/text/art-font-logo.js";
import {examples} from "../resources/text/examples.js";
import {love} from "../resources/text/love.js";
import {aim} from "../resources/text/aim.js";
import {referMode} from "#common/utils/create-check/refer-mode.js";
import {getArgs} from "#common/utils/create-check/get-args.js";
import {getQuestionToday} from "#common/utils/question-getter/getQuestionToday.js";
import {createQuestion} from "#common/utils/question-handler/createQuestion.js";
import path from "path";
import {getQuestionFileName} from "#common/utils/question-handler/getQuestionFileName.js";
import {createQuestionCopy} from "#common/utils/question-handler/createQuestionCopy.js";
import {getQuestionRandom} from "#common/utils/question-getter/getQuestionRandom.js";
import {getQuestionById} from "#common/utils/question-getter/getQuestionById.js";
import {setQuestion} from "#common/utils/store/store-realm.js";
import {getQuestionChineseName} from "#common/utils/question-handler/getQuestionChineseName.js";

const version = process.env.VERSION;
program
    .version(version)
    .description(`${artFontLogo}\n${aim}`)
    .addHelpText('after', examples+love)
    .arguments("[identity]")
    .option('-i, --identity <identity>', 'Specify a question by identity.')
    .option('-r, --random', 'Get a question randomly.')
    .option('-t, --today', 'Get a question today.')
    .option('-d, --directory <directory>', 'Set the question directory.')
    .parse(process.argv)

const cmdArgs = program.args;
const cmdOpts = program.opts();
// 根据dir 参数来设置基本目录
const baseDir = cmdOpts.directory?path.join(process.cwd(),cmdOpts.directory):process.cwd();
// 创建
const create = (mode,question)=>{
    console.log(`MODE: ${mode}`);
    return new Promise(resolve=>{
        setQuestion(mode,question);
        const questionDir = path.join(baseDir,getQuestionFileName(question))
        createQuestion(question,questionDir).then(async (path)=>{
            if(!path)path = await createQuestionCopy(question,questionDir);
            console.log(`题目[${getQuestionChineseName(question)}]获取成功!\n题目文件地址为:${path}`)
            resolve(true)
        })
    })
}
// 模式对应的action
const callModeAction = {
    'today': () => {
        getQuestionToday().then(question=>{
            create("today",question).then(()=>{
                process.exit(0)
            });
        })
    },
    'random': () => {
        getQuestionRandom().then(question=>{
            create("random",question).then(()=>{
                process.exit(0)
            });
        })
    },
    'identity': (id) => {
        getQuestionById(id).then(question=>{
            create("identity",question).then(()=>{
                process.exit(0)
            });
        })
    },
}
// 获取模式和参数
const mode = referMode(cmdArgs, cmdOpts);
const args = getArgs(mode,cmdArgs,cmdOpts);
// 执行指令分发
await callModeAction[mode](args);
