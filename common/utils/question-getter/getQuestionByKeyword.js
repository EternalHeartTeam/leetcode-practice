import { graphql } from '#common/utils/http/graphql.js'
import {getQuestionSearchJson} from "#resources/headers/questionSearchJson.js";

export async function getQuestionByKeyword(keyword) {
  const questionData = await graphql(getQuestionSearchJson(keyword.toString()))
  console.log(questionData)
  return questionData?.data?.problemsetQuestionList?.questions
}
