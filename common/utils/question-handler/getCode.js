import { getQuestionCodeList } from '#common/utils/question-getter/getQuestionCodeList.js'

/**
 * 获取代码
 * @param slug
 * @param lang
 * @returns {Promise<*>}
 */
export async function getCode(slug, lang) {
  const list = await getQuestionCodeList(slug)
  return list.find((o) => o.langSlug === lang)?.code
}
/**
 * 获取支持的代码语言
 * @param slug
 * @returns {Promise<string[]>}
 */
export async function getSupportCode(slug) {
  const list = await getQuestionCodeList(slug)
  return list.map((code) => code?.langSlug)
}
