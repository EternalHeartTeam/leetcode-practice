import path from 'node:path'
import { createQuestionByTitleSlug } from '../create-check/createUtil.js'
import { getPlanQuestionList } from '#common/utils/question-getter/getPlanQuestionList.js'

// 获取题目列表
export async function getTitleSlugList() {
  const res = await getPlanQuestionList()
  const { planSubGroups } = res
  return planSubGroups.reduce((acc, cur) => {
    acc.push(...cur.questions.map((res) => res.titleSlug))
    return acc
  }, [])
}
// 获取创建promise列表
async function getPromiseList() {
  const titleSlugList = await getTitleSlugList()
  const dir = path.join(process.cwd(), 'hot100')
  return titleSlugList.map((titleSlug) =>
    createQuestionByTitleSlug(titleSlug, dir)
  )
}

export async function getHot100QuestionListCode() {
  const promiseList = await getPromiseList()
  return await Promise.all(promiseList)
}
