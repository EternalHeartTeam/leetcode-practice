#! /usr/bin/env node
import {program} from "commander";
import {artFontLogo} from "#resources/text/art-font-logo.js";
import {lcExamples} from "#resources/text/examples.js";
import {love} from "#resources/text/love.js";
import {aim} from "#resources/text/aim.js";
import {referMode} from "#common/utils/create-check/refer-mode.js";
import {getArgs} from "#common/utils/create-check/get-args.js";
import {getQuestionToday} from "#common/utils/question-getter/getQuestionToday.js";
import {createQuestion} from "#common/utils/question-handler/createQuestion.js";
import path from "path";
import {getQuestionFileName} from "#common/utils/question-handler/getQuestionFileName.js";
import {createQuestionCopy} from "#common/utils/question-handler/createQuestionCopy.js";
import {getQuestionRandom} from "#common/utils/question-getter/getQuestionRandom.js";
import {getQuestionById} from "#common/utils/question-getter/getQuestionById.js";
import {setQuestion} from "#common/utils/store/controller/question.js";
import {getQuestionChineseName} from "#common/utils/question-handler/getQuestionChineseName.js";
import {easyCreateView} from "#common/view/create.view.js";
import {description} from "#resources/text/description.js";
import {easyUpdateView} from "#common/view/update.view.js";
import {getQuestionLanguage} from "#common/utils/question-handler/questionLanguage.js";
import {easyLanguageView} from "#common/view/language.view.js";
import {DefaultVer} from "#common/constants/question.const.js";

const version = process.env.VERSION??DefaultVer;
program
    .version(version)
    .description(`${description}\n${artFontLogo}\n${aim}`)
    .addHelpText('after', lcExamples+love)
    .arguments("[identity]")
    .option('-t, --today', 'Get a question today.')
    .option('-i, --identity <identity>', 'Specify a question by identity.')
    .option('-r, --random', 'Get a question randomly.')
    .option('-e, --easy', 'Use easy mode.')
    .option('-d, --directory <directory>', 'Set the question directory.')
    .option('-l, --language [language]', 'Set/Get the code language of question.')
    .option('-u, --update','Check the version to determine whether to update to the latest one.')
    .parse(process.argv)

const cmdArgs = program.args;
const cmdOpts = program.opts();
/**
 * 执行逻辑:
 * 目录检测 - 设置基础目录
 * 模式检测 - 检测是不是easy mode
 * [参数检测 - 执行对应参数]
 */
/**
 * 语言设置
 * -带参设置语言
 * -无参获取语言
 */
if (cmdOpts.language) {
    if(cmdOpts.language!==true){
        await easyLanguageView(cmdOpts.language);
    }else{
        const lang = await getQuestionLanguage();
        console.log("当前CLI语言环境为:"+lang);
    }
    process.exit(0);
}
// 根据dir 参数来设置基本目录
const baseDir = cmdOpts.directory?path.join(process.cwd(),cmdOpts.directory):process.cwd();
if(cmdOpts.easy){
    await easyCreateView();
    process.exit(0);
}
// 检测更新
if(cmdOpts.update){
    await easyUpdateView();
    process.exit(0);
}
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
            if(!question?.id) {
                console.log(`指定编号: [ ${id} ] 题目不存在.`)
                process.exit(0)
            }
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
