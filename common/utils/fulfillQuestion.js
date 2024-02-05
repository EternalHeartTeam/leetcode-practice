import {removeDomTags} from "./removeDomTags.js";
import fs from "fs";
import {getTestCase} from "./getTestCase.js";
import {getQuestionUrl} from "./getQuestionUrl.js";
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
export const generateTemplateContent = (data, question) => data.replace('@题目', `${question.id}.${question.title} ${question.date ? `[${question.date}]` : ''}`)
  .replace('@描述', removeDomTags(question.detail)
    .replace('@url', question.url)
    .replace(/\n+/g, '\n')
    .replaceAll('\n', '\n * '))
  .replace('// @Function', question.jsCode)
  .replace('// @TestCase', getTestCase(question))
  .replace('@url', getQuestionUrl(question.enName));
/**
 * 填充模板文件
 * @param questionPath
 * @param question
 */
export const fulfillQuestion = (questionPath, question) => {
  // 开始填充内容
  fs.readFile(questionPath, 'utf8', (err, data) => {
    if (err) throw err;
    // 修改文件内容
    const newData = generateTemplateContent(data, question);
    fs.writeFile(questionPath, newData, (err) => {
      if (err) throw err;
      console.log(`[fulfillQuestion]题目[${question.id}][${question.title}]已完成填充.`);
    });
  });
};
