import { graphql } from '#common/utils/http/graphql.js'
import { getCodeBySlug } from '#common/utils/question-handler/code.js'
import { getQuestionLanguage } from '#common/utils/question-handler/questionLanguage.js'
import { getQuestionDetailJson } from '#resources/headers/questionDetailJson.js'

/**
 * 获取代码详情
 * @param slug
 * @param extra
 * @returns {Promise<*&{id:*,slug:*, title: *,detail: *,  lang:*,code: *,jsonExampleTestcases:*,exampleTestcases:*}>}
 */
export async function getQuestionDetail(slug, extra = {}) {
  // 标题的英文字符串
  const questionDetail = await graphql(getQuestionDetailJson(slug))
  const detail = questionDetail.data.question
  const curLang = await getQuestionLanguage()
  const code = await getCodeBySlug(slug, curLang)
  return {
    id: detail?.questionId,
    slug,
    title: detail?.translatedTitle,
    detail: detail?.translatedContent,
    lang: curLang,
    code,
    jsonExampleTestcases: detail?.jsonExampleTestcases,
    exampleTestcases: detail?.exampleTestcases,
    ...extra,
  }
}
