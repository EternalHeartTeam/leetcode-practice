import { graphql } from '#common/utils/http/graphql.js'
import { getQuestionLanguageListJson } from '#resources/headers/questionLanguageListJson.js'

export async function getQuestionLanguageList() {
  const res = await graphql(getQuestionLanguageListJson())
  return res?.data.languageList
}
