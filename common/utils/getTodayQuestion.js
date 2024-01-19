const { writeStore } = require("../utils/store");
const {getQuestionToday} = require("../resources/questionTodayJson");
const {getQuestionDetail} = require("./getQuestionDetail");

async function getTodayQuestion() {
    const question = await fetch("https://leetcode.cn/graphql/", getQuestionToday()).then((res => res.json()));
    const today = question.data.todayRecord[0].question;
    const date = question.data.todayRecord[0].date;
    const questionInfo = await getQuestionDetail(today.titleSlug,{date,id:today.frontendQuestionId})
    writeStore("today-question-info", questionInfo)
    return questionInfo;
}

module.exports = { getQuestion: getTodayQuestion };
