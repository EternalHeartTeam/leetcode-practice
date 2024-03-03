import inquirer from "inquirer";
import path from "path";
import {getQuestionFileName} from "#common/utils/question-handler/getQuestionFileName.js";
import {getQuestionById} from "#common/utils/question-getter/getQuestionById.js";
import {getQuestionByMode} from "#common/utils/store/controller/question.js";
import {checkQuestion} from "#common/utils/question-handler/checkQuestion.js";
import {getCountBySameName} from "#common/utils/file/getCountBySameName.js";
import {getFileListBySameName} from "#common/utils/file/getFileListBySameName.js";

export const easyCheckView = async () => {
    const modeQuestion = [{
        type: 'list',
        name: 'mode',
        message: '请选择检查问题的模式:',
        choices: ['today', 'identity', 'random'],
    }];
// 第一个问题 选择的模式
    const {mode} = await inquirer.prompt(modeQuestion, null);
    const identityQuestion = [{
        type: 'input',
        name: 'identity',
        message: '请输入题目编号:',
    }];
    let question;
    switch (mode) {
        case "identity":
            const {identity} = await inquirer.prompt(identityQuestion, null);
            question = !identity ?
                await getQuestionByMode(mode) :
                await getQuestionById(identity);
            break;
        case "random":
            question = await getQuestionByMode(mode);
            break;
        case "today":
        default:
            question = await getQuestionByMode(mode);
            break;
    }
// 检查题目
    const questionFileName = getQuestionFileName(question);
    const currentDir = process.cwd();
    let questionDir = path.join(currentDir, questionFileName);
// 创建路径确认
    const pathRightQuestion = [{
        type: 'confirm',
        name: 'dirRight',
        message: `是否检测当前目录[ ${currentDir} ]下的题目[ ${questionFileName} ]?`,
    }];
    const {dirRight} = await inquirer.prompt(pathRightQuestion, null);
    if (!dirRight) {
        const newDirQuestion = [{
            type: 'input',
            name: 'newDir',
            message: `请选择新目录(基础地址为${currentDir})[按回车[Enter]终止操作]:`,
        }];
        const {newDir} = await inquirer.prompt(newDirQuestion, null);
        if (!newDir) {
            console.log("[LK-LOG]用户终止操作~")
            process.exit(0);
        }
        questionDir = path.join(path.join(process.cwd(), newDir), `${questionFileName}`)
    }
    const questionParentDir = path.dirname(questionDir);
// 先检测有几个副本
    if (getCountBySameName(questionParentDir, questionFileName) > 1) {
        const selectQuestionQuestion = [{
            type: 'list',
            name: 'selectQuestion',
            message: `题目[ ${questionFileName} ]有多个副本,请选择要检测的副本:`,
            choices: getFileListBySameName(questionParentDir, questionFileName)
        }]
        // 选择其中一个副本进行检查
        const {selectQuestion} = await inquirer.prompt(selectQuestionQuestion, null);
        questionDir = path.join(questionParentDir, selectQuestion);
        console.log(`用户选择题目[ ${questionFileName}]的副本[ ${selectQuestion}]进行检测`)
    }
    const filePath = path.join(questionDir, `question${question.lang}`);
    await checkQuestion(filePath);
    console.log(`题目[${questionFileName}]检查完成！\n文件地址为: ${filePath}`)
    process.exit(0)
}
