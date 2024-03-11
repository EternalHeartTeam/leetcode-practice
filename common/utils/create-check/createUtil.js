import path from 'node:path'
import { createQuestion } from '#common/utils/question-handler/createQuestion.js'
import { getQuestionFileName } from '#common/utils/question-handler/getQuestionFileName.js'
import { createQuestionCopy } from '#common/utils/question-handler/createQuestionCopy.js'
import { setQuestion } from '#common/utils/store/controller/question.js'
import { getQuestionChineseName } from '#common/utils/question-handler/getQuestionChineseName.js'
import { getQuestionById } from '#common/utils/question-getter/getQuestionById.js'
import { getQuestionIdBySlug } from '#common/utils/question-handler/getQuestionIdBySlug.js'
import { getLineNumberByContent } from '#common/utils/file/getLineNumberByContent.js'

export function create(mode, question, baseDir) {
  console.log(`MODE: ${mode}`)
  return new Promise((resolve) => {
    setQuestion(mode, question)
    const questionDir = path.join(baseDir, getQuestionFileName(question))
    createQuestion(question, questionDir).then(async (path) => {
      if (!path) path = await createQuestionCopy(question, questionDir)
      const line = (await getLineNumberByContent(path, '@QUESTION_START')) + 1
      console.log(
        `题目[${getQuestionChineseName(question)}]获取成功!\n题目文件地址为:file://${path}:${line}`
      )
      resolve(true)
    })
  })
}

export async function createQuestionByTitleSlug(
  titleSlug,
  baseDir = process.cwd()
) {
  const { question } = await getQuestionIdBySlug(titleSlug)

  await createQuestionById(question.questionId, baseDir)
}
export async function createQuestionById(id, baseDir = process.cwd()) {
  const question = await getQuestionById(id)
  if (!question?.id) console.log(`指定编号: [ ${id} ] 题目不存在.`)
  await create('identity', question, baseDir)
}
