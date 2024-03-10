import fs from 'node:fs'
import { removeDomTags } from '../functions/removeDomTags.js'
import { getTestCase } from './getTestCase.js'
import { createMarkdown } from './createMarkdown.js'
import { getQuestionChineseName } from '#common/utils/question-handler/getQuestionChineseName.js'
import { getConsoleText } from '#common/utils/question-handler/getConsoleText.js'
import { template } from '#resources/template/template.js'
import {
  setBlockComment,
  setLineComment
} from '#common/utils/question-handler/questionLanguage.js'
import { getCodeRange } from '#common/utils/question-handler/code.js'

/**
 * @typedef {object} Question
 * @property {string} title
 * @property {string} slug
 * @property {number} date
 * @property {string} detail
 * @property {string} lang
 * @property {string} code
 */

/**
 * @type {Question}
 */

/**
 *
 * @param {Question} question
 *
 */
export function generateTemplateContent(question) {
  const title = `${getQuestionChineseName(question)} ${question.date ? `[${question.date}]` : ''}\n`
  const describe = removeDomTags(question.detail).replace(/\n+/g, '\n')
  const lang = question.lang
  const code = question.code
  return template
    .replace('@Title', setBlockComment(lang, title + describe))
    .replace('@Describe', '')
    .replace('@Function', getCodeRange(lang, code))
    .replace('@TestCase', getTestCase(question))
    .replace('@Console', getConsoleText(question))
}
/**
 * 模板文件内容替换并生成文件
 * @param questionPath
 * @param question
 */
export function fulfillQuestion(questionPath, question) {
  return new Promise((resolve) => {
    // 创建描述文件 md
    createMarkdown(question.detail, questionPath)
    // 开始填充内容
    const newData = generateTemplateContent(question)
    // 创建文件
    fs.writeFile(questionPath, newData, (err) => {
      if (err) throw err
      resolve()
    })
  })
}
