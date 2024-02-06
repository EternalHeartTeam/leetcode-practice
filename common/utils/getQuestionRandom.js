import {getQuestionSearchJson} from "../../resources/headers/questionSearchJson.js";
import {getQuestionDetail} from "./getQuestionDetail.js";

export async function getQuestionRandom(id) {
  const base = await fetch('https://leetcode.cn/graphql/', getQuestionSearchJson(id.toString())).then((res) => res.json());
  const slug = base.data.problemsetQuestionList.questions.find((o) => o.frontendQuestionId === id.toString()).titleSlug;
  const question = await getQuestionDetail(slug);
  return question;
}
