import { getQuestionById } from '#common/utils/question-getter/getQuestionById.js'
import { getQuestionIdBySlug } from '#common/utils/question-handler/getQuestionIdBySlug.js'
import { logger } from '#common/utils/logger/logger.js'
import { create } from '#common/utils/cli-utils/create.js'

/**
 * 通过指定的titleSlug创建题目
 * @param titleSlug
 * @param baseDir
 * @returns {Promise<void>}
 */
export async function createQuestionByTitleSlug(
  titleSlug,
  baseDir = process.cwd()
) {
  const { question } = await getQuestionIdBySlug(titleSlug)
  await createQuestionById(question.questionId, baseDir)
}

/**
 * 通过id创建题目
 * @param id
 * @param baseDir
 * @returns {Promise<void>}
 */
export async function createQuestionById(id, baseDir = process.cwd()) {
  const question = await getQuestionById(id)
  if (!question?.id) logger.warn(`指定编号: [ ${id} ] 题目不存在.`)
  await create('identity', question, baseDir)
}
