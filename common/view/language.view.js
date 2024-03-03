import {LANGUAGES, setQuestionLanguage} from "#common/utils/question-handler/questionLanguage.js";
import inquirer from "inquirer";
import {getCode} from "#common/utils/question-handler/getCode.js";
import {DefaultLang} from "#common/constants/question.const.js";

export const easyLanguageView = async (defaultLang = DefaultLang)=>{
    const list = LANGUAGES.map(o=>o.name);
    const setQuestion = [{
        type:"list",
        name:"newSet",
        message: "请确认你要设置CLI的语言环境(如果选项匹配成功，那么按下回车确认即可)",
        choices:list,
        default:defaultLang
    }];
    const {newSet} = await inquirer.prompt(setQuestion,null);
    console.log("设置语言环境为:",newSet)
    await setQuestionLanguage(newSet);
    process.exit(0);
}