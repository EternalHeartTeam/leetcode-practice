const { writeStore } = require('./store');
const { getQuestionTodayJson } = require('../resources/questionTodayJson');
const { getQuestionDetail } = require('./getQuestionDetail');

async function getQuestionToday() {
  const question = await fetch('https://leetcode.cn/graphql/', getQuestionTodayJson()).then(((res) => res.json()));
  const today = question.data.todayRecord[0].question;
  const { date } = question.data.todayRecord[0];
  const questionInfo = await getQuestionDetail(today.titleSlug, { date });
  writeStore('today-question-info', questionInfo);
  return questionInfo;
}

module.exports = { getQuestionToday };
