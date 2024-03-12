import { graphql } from '#common/utils/http/graphql.js'
import { getPlanQuestionListJson } from '#resources/headers/planQuestionListJson.js'

export async function getPlanQuestionList(slug) {
  const res = await graphql(getPlanQuestionListJson(slug))
  const {
    data: { studyPlanV2Detail },
  } = res
  return studyPlanV2Detail
}
