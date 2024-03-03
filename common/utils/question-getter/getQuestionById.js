import {getQuestionSearchJson} from "#resources/headers/questionSearchJson.js";
import {getQuestionDetail} from "../question-handler/getQuestionDetail.js";
import {graphql} from "#common/utils/http/graphql.js";
export async function getQuestionById(id) {
  const base = await graphql(getQuestionSearchJson(id.toString()));
  const questionContent = base?.['data']?.['problemsetQuestionList']?.['questions']?.find((o) => o?.['frontendQuestionId'] === id.toString());
  if(!questionContent) {
    return {
      id: null,
    }
  }
  const slug = questionContent.titleSlug;
  const question = await getQuestionDetail(slug,{id});
  return question;
}
