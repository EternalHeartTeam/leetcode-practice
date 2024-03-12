import { graphql } from '#common/utils/http/graphql.js'
import { getStudyPlanListJson } from '#resources/headers/studyPlanListJson.js'

export async function getStudyPlanList() {
  const res = await graphql(getStudyPlanListJson())
  const {
    data: { studyPlansV2AdQuestionPage },
  } = res
  return studyPlansV2AdQuestionPage
}
