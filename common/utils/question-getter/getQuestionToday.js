import {getQuestionTodayJson} from "#resources/headers/questionTodayJson.js";
import {getQuestionDetail} from "../question-handler/getQuestionDetail.js";
import {graphql} from "#common/utils/http/graphql.js";

export async function getQuestionToday() {
  const question = await graphql(getQuestionTodayJson());
  const today = question.data.todayRecord[0].question;
  const { date } = question.data.todayRecord[0];
  const questionInfo = await getQuestionDetail(today.titleSlug, { date });
  return questionInfo;
}

