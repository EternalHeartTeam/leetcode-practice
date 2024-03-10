import fs from 'node:fs'
import path from 'node:path'
import { fulfillQuestion } from '#common/utils/question-handler/fulfillQuestion.js'
import { getQuestionFileExtension } from '#common/utils/question-handler/questionLanguage.js'
import { getSupportCode } from '#common/utils/question-handler/code.js'

/**
 * 创建问题
 * @param question 问题对象
 * @param questionDir 问题要创建的目录 截止到名字
 * @returns {Promise<unknown>}
 */
export function createQuestion(question, questionDir) {
  return new Promise((resolve) => {
    const filePath = path.normalize(
      path.join(
        questionDir,
        `question${getQuestionFileExtension(question.lang)}`
      )
    )
    if (fs.existsSync(filePath)) {
      resolve(false)
    } else {
      createQuestionFile(questionDir, filePath, question)
        .then((path) => resolve(path))
        .catch(() => resolve(false))
    }
  })
}
export function createQuestionFile(questionDir, questionFilePath, question) {
  return new Promise((resolve, reject) => {
    try {
      // 创建题目的目录
      fs.mkdir(questionDir, { recursive: true }, async () => {
        // 写入文件和模板
        await fulfillQuestion(questionFilePath, question)
        if (!question.code) {
          const supports = await getSupportCode(question.slug)
          console.warn(
            `此题目不支持当前语言[${question.lang}]!受支持的语言有[${supports.join(',')}]!`
          )
        }
        resolve(questionFilePath)
      })
    } catch (e) {
      reject(e)
    }
  })
}
