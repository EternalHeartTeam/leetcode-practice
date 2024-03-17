import path from 'node:path';
import { logger } from '#common/utils/logger/logger.js';
import { setQuestion } from '#common/utils/store/controller/question.js';
import { getQuestionFileName } from '#common/utils/question-handler/getQuestionFileName.js';
import { createQuestion } from '#common/utils/question-handler/createQuestion.js';
import { createQuestionCopy } from '#common/utils/question-handler/createQuestionCopy.js';
import { getLineNumberByContent } from '#common/utils/file/getLineNumberByContent.js';
import { getQuestionChineseName } from '#common/utils/question-handler/getQuestionChineseName.js';

/**
 * 创建函数
 * @param mode
 * @param question
 * @param baseDir
 * @returns {Promise<unknown>}
 */
export function create(mode, question, baseDir) {
    logger.info(`MODE: ${mode}`);
    return new Promise((resolve) => {
        setQuestion(mode, question);
        const questionDir = path.join(baseDir, getQuestionFileName(question));
        createQuestion(question, questionDir).then(async (path) => {
            if (!path) path = await createQuestionCopy(question, questionDir);
            const line = (await getLineNumberByContent(path, '@QUESTION_START')) + 1;
            logger.info(`题目[${getQuestionChineseName(question)}]获取成功!\n题目文件地址为:file://${path}:${line}`);
            resolve(true);
        });
    });
}
