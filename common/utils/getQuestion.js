const questionFetchConfig = require("../resources/question.json");
const questionDetailConfig = require("../resources/questionDetail.json")
const { writeStore } = require("../utils/store");
const {getJSCode} = require("./getJSCode");

async function getQuestion() {
    const question = await fetch("https://leetcode.cn/graphql/", questionFetchConfig).then((res => res.json()));
    const today = question.data.todayRecord[0].question;
    const date = question.data.todayRecord[0].date;
    // 标题的英文字符串
    const slug = today.titleSlug;
    questionDetailConfig.body = questionDetailConfig.body.replace("${slug}", slug);
    const questionDetail = await fetch("https://leetcode.cn/graphql/", questionDetailConfig).then((res => res.json()));
    const todayDetail = questionDetail.data.question;
    const jsCode = await getJSCode(slug)
    const questionInfo =  {
        id: today.frontendQuestionId,
        enName: slug,
        title: todayDetail.translatedTitle,
        detail:todayDetail.translatedContent,
        date,
        jsCode
    }
    writeStore("today-question-info", questionInfo)
    return questionInfo
}

module.exports = { getQuestion };
