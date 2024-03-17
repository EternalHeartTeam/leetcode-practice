import path from 'node:path';
import inquirer from 'inquirer';
import { getQuestionFileName } from '#common/utils/question-handler/getQuestionFileName.js';
import { getQuestionById } from '#common/utils/question-getter/getQuestionById.js';
import { getQuestionToday } from '#common/utils/question-getter/getQuestionToday.js';
import { getQuestionRandom } from '#common/utils/question-getter/getQuestionRandom.js';
import { createQuestion } from '#common/utils/question-handler/createQuestion.js';
import { createQuestionCopy } from '#common/utils/question-handler/createQuestionCopy.js';
import { setQuestion } from '#common/utils/store/controller/question.js';
import { logger } from '#common/utils/logger/logger.js';

export async function easyCreateView(baseDir = process.cwd()) {
    const modeQuestion = [
        {
            type: 'list',
            name: 'mode',
            message: '请选择创建问题的模式:',
            choices: ['today', 'identity', 'random']
        }
    ];
    // 第一个问题 选择的模式
    const { mode } = await inquirer.prompt(modeQuestion, null);
    const identityQuestion = [
        {
            type: 'input',
            name: 'identity',
            message: '请输入题目编号:'
        }
    ];
    let question;
    switch (mode) {
        case 'identity': {
            const { identity } = await inquirer.prompt(identityQuestion, null);
            logger.info(identity);
            question = await getQuestionById(identity);
            break;
        }
        case 'random':
            question = await getQuestionRandom();
            break;
        case 'today':
        default:
            question = await getQuestionToday();
            break;
    }
    const store = await setQuestion(mode, question);
    if (!store) console.warn(`[create][${mode}]问题[${question.title}]未成功缓存`);
    // 创建题目
    const questionFileName = getQuestionFileName(question);
    let questionDir = path.join(baseDir, questionFileName);
    // 创建路径确认
    const pathRightQuestion = [
        {
            type: 'confirm',
            name: 'dirRight',
            message: `是否在目录[ ${baseDir} ]下创建题目[ ${questionFileName} ]?`
        }
    ];
    const { dirRight } = await inquirer.prompt(pathRightQuestion, null);
    if (!dirRight) {
        const newDirQuestion = [
            {
                type: 'input',
                name: 'newDir',
                message: `请选择新目录(基础地址为${baseDir})[按回车[Enter]终止操作]:`
            }
        ];
        const { newDir } = await inquirer.prompt(newDirQuestion, null);
        if (!newDir) {
            logger.info('[LC-logger]用户终止操作~');
            process.exit(0);
        }
        questionDir = path.join(path.join(baseDir, newDir), `${questionFileName}`);
    }
    let filePath = await createQuestion(question, questionDir);
    if (!filePath) filePath = await createQuestionCopy(question, questionDir);

    logger.info(`题目[${questionFileName}]创建完成！\n文件地址为: ${filePath}`);
    process.exit(0);
}
