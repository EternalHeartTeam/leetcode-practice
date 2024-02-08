import {getQuestionSearchJson} from "#resources/headers/questionSearchJson.js";
import {getQuestionDetail} from "../question-handler/getQuestionDetail.js";
export async function getQuestionById(id) {
  const base = await fetch('https://leetcode.cn/graphql/', getQuestionSearchJson(id.toString())).then((res) => res.json());
  const questionContent = base.data.problemsetQuestionList.questions.find((o) => o.frontendQuestionId === id.toString());
  if(!questionContent) {
    return {
      id: null,
    }
  }
  const slug = questionContent.titleSlug;
  const question = await getQuestionDetail(slug);
  return question;
}
