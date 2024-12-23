import fs from 'node:fs'
import { DefaultLang } from '#common/constants/question.const.js'
import { getQuestionCodeList } from '#common/utils/question-getter/getQuestionCodeList.js'
import { getLangByExtension, setLineComment } from '#common/utils/question-handler/questionLanguage.js'

/**
 * 获取代码
 * @param slug
 * @param lang
 * @returns {Promise<*>}
 */
export async function getCodeBySlug(slug, lang) {
  const list = await getQuestionCodeList(slug)
  return list?.find(o => o.langSlug === lang)?.code
}
/**
 * 获取支持的代码语言
 * @param slug
 * @returns {Promise<string[]>}
 */
export async function getSupportCode(slug) {
  const list = (await getQuestionCodeList(slug)) ?? []
  return list?.map(code => code?.langSlug)
}

/**
 * 生成有范围块的代码
 * @param lang
 * @param code
 * @returns {*|string}
 */
export function getCodeRange(lang, code) {
  if (!code)
    return setLineComment(lang, `!important: 此题目没有当前语言[${lang}]的代码模板!`)
  return `${setLineComment(lang, '@QUESTION_START') + code}\n${setLineComment(lang, '@QUESTION_END')}`
}
/**
 * 获取文件中的代码部分
 */
export function getCodeInFile(filePath) {
  const lang = getLangByExtension(filePath)?.lang ?? DefaultLang
  const data = fs.readFileSync(filePath, 'utf-8')
  const startTag = setLineComment(lang, '@QUESTION_START')
  const endTag = setLineComment(lang, '@QUESTION_END')
  const rangeReg = new RegExp(`${startTag}.*${endTag}`, 'ms')
  const rangeTagReg = new RegExp(`(${startTag}|${endTag})+`, 'gm')
  const match = data.match(rangeReg)
  if (!match)
    return null
  return match[0]?.replace(rangeTagReg, '')
}
