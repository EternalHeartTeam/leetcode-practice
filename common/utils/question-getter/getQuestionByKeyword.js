import { getQuestionKeywordJson } from '#resources/headers/questionKeywordJson.js'
import { graphql } from '#common/utils/http/graphql.js'

export async function getQuestionKeyword(keyword) {
  const questionData = await graphql(getQuestionKeywordJson(keyword.toString()))
  return questionData?.data?.problemsetQuestionList?.questions
}

console.log(getQuestionKeyword('两数'))
