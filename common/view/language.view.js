import {LANGUAGES, setQuestionLanguage} from "#common/utils/question-handler/questionLanguage.js";
import inquirer from "inquirer";

export const easyLanguageView = async (defaultLang = "javascript")=>{
    const list = LANGUAGES.map(o=>o.name);
    const setQuestion = [{
        type:"list",
        name:"set",
        message: "请确认你要设置CLI的语言环境(如果选项匹配成功，那么按下回车确认即可)",
        choices:list,
        default:defaultLang
    }];
    const {set} = await inquirer.prompt(setQuestion,null);
    console.log("设置语言环境为:",set)
    await setQuestionLanguage(set);
    process.exit(0);
}