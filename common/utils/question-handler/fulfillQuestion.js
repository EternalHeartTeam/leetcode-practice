import fs from 'fs';
import {removeDomTags} from '../functions/removeDomTags.js';
import {getTestCase} from './getTestCase.js';
import {getQuestionUrl} from './getQuestionUrl.js';
import {createMarkdown} from './createMarkdown.js';
import {getQuestionChineseName} from "#common/utils/question-handler/getQuestionChineseName.js";
/**
 * @typedef {Object} Question
 * @property {string} title
 * @property {number} date
 * @property {string} detail
 */

/**
 * @type {Question}
 */

/**
 *
 * @param {string} data
 * @param {Question} question
 *
 */
export const generateTemplateContent = (data, question) =>
    data
        .replace('@题目', `${getQuestionChineseName(question)} ${question.date ? `[${question.date}]` : ''}`)
        .replace('@描述', removeDomTags(question.detail)
            .replace('@url', question.url)
            .replace(/\n+/g, '\n')
            .replaceAll('\n', '\n * '))
        .replace('// @Function', question.code)
        .replace('// @TestCase', getTestCase(question))
        .replace('@url', getQuestionUrl(question.slug));
/**
 * 填充模板文件
 * @param questionPath
 * @param question
 */
export const fulfillQuestion = (questionPath, question) => {
    return new Promise(resolve => {
        // 开始填充内容
        fs.readFile(questionPath, 'utf8', (err, data) => {
            if (err) throw err;
            // 修改文件内容
            const newData = generateTemplateContent(data, question);
            createMarkdown(question.detail, questionPath);
            fs.writeFile(questionPath, newData, (err) => {
                if (err) throw err;
                resolve()
            });
        });
    })
};
