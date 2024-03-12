// todo 创建问题副本
import path from 'node:path'
import { getCountBySameName } from '#common/utils/file/getCountBySameName.js'
import { createQuestionFile } from '#common/utils/question-handler/createQuestion.js'
import { getQuestionFileExtension } from '#common/utils/question-handler/questionLanguage.js'

/**
 * 创建副本
 * @param question
 * @param questionDir
 * @returns {Promise<unknown>}
 */
export function createQuestionCopy(question, questionDir) {
  if (!question || !question.id)
    return Promise.reject(new Error('question is empty'))
  const dir = path.dirname(questionDir)
  const name = `${question.id}.${question.slug}`
  const affix = ` [${getCountBySameName(dir, name)}]`
  const copyFileDir = path.join(dir, `${name}${affix}`)
  const copyFilePath = path.join(
    copyFileDir,
    `question${getQuestionFileExtension(question.lang)}`,
  )
  return createQuestionFile(copyFileDir, copyFilePath, question)
}
