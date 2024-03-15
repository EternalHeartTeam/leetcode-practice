import { readdirSync } from 'node:fs'
import { getQuestionListJson } from '#resources/headers/questionListJson.js'
import { graphql } from '#common/utils/http/graphql.js'
import { DefaultLimit } from '#common/constants/question.const.js'
import { logger } from '#common/utils/logger/logger.js'

/**
 * 获取指定页数的ids
 */
export async function getIds(index, limit = DefaultLimit) {
  const res = await graphql(getQuestionListJson(index, limit))
  return res?.data?.problemsetQuestionList?.questions?.map(
    (q) => q.frontendQuestionId
  )
}
/**
 * 获取总数
 * @returns {Promise<any>}
 */
export function getCount() {
  return graphql(getQuestionListJson(0)).then(
    (res) => res?.data?.problemsetQuestionList?.total
  )
}
/**
 * 获取随机的一个id  只要保证没有存在过就可以
 */
export async function getRandomId() {
  // 去除所有的标题 剩下的就是id
  const parse = (name) => name.replace(/\.[a-zA-Z0-9-]+$/i, '')
  // 获取一个 递归的获取 总会有一个 直到数量到达最大值
  const getOne = async (waitIndexList, localIds) => {
    const randomIndex = waitIndexList[random(waitIndexList.length)]
    const ids = await getIds(randomIndex)
    // 过滤后的结果
    const filtered = ids.filter((o) => !localIds.includes(o))
    if (randomIndex === undefined) return null
    if (filtered.length) {
      return filtered[random(filtered.length)]
    } else {
      waitIndexList.splice(waitIndexList.findIndex((i) => i === randomIndex))
      return await getOne(waitIndexList, localIds)
    }
  }
  // 所有本地题目的id
  const allLocalIds = readdirSync(process.cwd()).map(parse)
  // 最大的数量
  const maxLength = await getCount()
  const waitIndexList = Array.from({
    length: Math.ceil(maxLength / DefaultLimit)
  }).map((_, i) => i)
  const one = await getOne(waitIndexList, allLocalIds)
  if (one === null) logger.info('恭喜！你已经刷完了所有的题目！')
  else return one
}
/**
 * 获取长度内的随机数组下标
 * @param len 默认值10
 * @returns {number}
 */
export function random(len = 10) {
  return Math.trunc((Math.random() * len) % len)
}
