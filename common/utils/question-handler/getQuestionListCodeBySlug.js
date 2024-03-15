import { createQuestionByTitleSlug } from '#common/utils/cli-utils/createQuestion.js'
import { getPlanQuestionList } from '#common/utils/question-getter/getPlanQuestionList.js'

// 获取创建promise列表
async function createCreatePromiseList(slugList, baseDir = process.cwd()) {
  return slugList.map((titleSlug) => {
    return createQuestionByTitleSlug(titleSlug, baseDir)
  })
}

/**
 * 創建題目列表通過plan slug
 * @param slug
 * @param baseDir
 */
export async function getQuestionListCodeBySlug(slug, baseDir) {
  const { planSubGroups } = await getPlanQuestionList(slug)
  const questionTitleList = planSubGroups.reduce((acc, cur) => {
    acc.push(...cur.questions.map(res => res.titleSlug))
    return acc
  }, [])
  const promiseList = await createCreatePromiseList(questionTitleList, baseDir)
  return await Promise.allSettled(promiseList)
}
