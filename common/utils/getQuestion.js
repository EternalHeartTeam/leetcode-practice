const questionFetchConfig = require("../resources/question.json");
const qu = require("../resources/questionDetail.json")

async function getQuestion() {
    const question = await fetch("https://leetcode.cn/graphql/", questionFetchConfig).then((res => res.json()));
    // 标题的英文字符串
    const slug = question.data.todayRecord[0].question.titleSlug;
    qu.body = qu.body.replace("${slug}", slug);
    const questionDetail = await fetch("https://leetcode.cn/graphql/", qu).then((res => res.json()));
    return {
        id: question.data.todayRecord[0].question.frontendQuestionId,
        title: questionDetail.data.question.translatedTitle,
        detail: questionDetail.data.question.translatedContent
    }
}

module.exports = { getQuestion };
