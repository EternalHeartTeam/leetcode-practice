import {writeStore} from "../store.js";
import {getQuestionTodayJson} from "../../../resources/headers/questionTodayJson.js";
import {getQuestionDetail} from "../question-handler/getQuestionDetail.js";

export async function getQuestionToday() {
  const question = await fetch('https://leetcode.cn/graphql/', getQuestionTodayJson()).then(((res) => res.json()));
  const today = question.data.todayRecord[0].question;
  const { date } = question.data.todayRecord[0];
  const questionInfo = await getQuestionDetail(today.titleSlug, { date });
  writeStore('today-question-info', questionInfo);
  return questionInfo;
}

