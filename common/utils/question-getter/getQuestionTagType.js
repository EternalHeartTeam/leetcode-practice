import { graphql } from '#common/utils/http/graphql.js'
import { getQuestionTagTypeJson } from '#resources/headers/questionTagTypeJson.js'

export async function getQuestionTagType() {
  const { data } = await graphql(getQuestionTagTypeJson())
  const { questionTagTypeWithTags } = data
  return questionTagTypeWithTags
}
