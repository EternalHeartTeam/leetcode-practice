import { graphql } from '#common/utils/http/graphql.js'
import { getQuestionListHot100Json } from '#resources/headers/questionListHot100Json.js'

export const getQuestionListHot100 = async () => {
  const res = await graphql(getQuestionListHot100Json())
  const {
    data: { studyPlanV2Detail }
  } = res
  return studyPlanV2Detail
}
