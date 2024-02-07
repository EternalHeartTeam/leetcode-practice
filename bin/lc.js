#! /usr/bin/env node
import {program} from "commander";
import {artFontLogo} from "../resources/text/art-font-logo.js";
import {examples} from "../resources/text/examples.js";
import {love} from "../resources/text/love.js";
import {aim} from "../resources/text/aim.js";
import {referMode} from "#common/utils/create-check/refer-mode.js";
import {getArgs} from "#common/utils/create-check/get-args.js";
import fs from "fs";
import {getQuestionToday} from "#common/utils/question-getter/getQuestionToday.js";
import {createQuestion} from "#common/utils/question-handler/createQuestion.js";
import path from "path";
import {getQuestionFileName} from "#common/utils/question-handler/getQuestionFileName.js";
import {createQuestionCopy} from "#common/utils/question-handler/createQuestionCopy.js";
import {getQuestionRandom} from "#common/utils/question-getter/getQuestionRandom.js";
import {getQuestionById} from "#common/utils/question-getter/getQuestionById.js";
import {setQuestion} from "#common/utils/store/store-realm.js";
import {rootPath} from "#common/utils/file/getRootPath.js";
const {version} =  JSON.parse(fs.readFileSync(path.resolve(rootPath,"package.json"),'utf-8'));

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
// 创建
const create = (mode,question)=>{
    return new Promise(resolve=>{
        setQuestion(mode,question);
        const questionDir = path.join(process.cwd(),getQuestionFileName(question))
        createQuestion(question,questionDir).then(async (path)=>{
            if(!path)path = await createQuestionCopy(question,questionDir);
            console.log(`[lc] 获取随机题目成功\n题目为[${question.title}]\n文件地址为:${path}`)
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
