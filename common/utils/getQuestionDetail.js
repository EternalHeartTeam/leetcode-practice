const {getJSCode} = require("./getJSCode");
const {getQuestionDetailJson} = require("../resources/questionDetailJson");
async function getQuestionDetail(slug,extra){
    // 标题的英文字符串
    const questionDetail = await fetch("https://leetcode.cn/graphql/", getQuestionDetailJson(slug)).then((res => res.json()));
    const todayDetail = questionDetail.data.question;
    const jsCode = await getJSCode(slug)
    return {
        id: todayDetail.frontendQuestionId,
        enName: slug,
        title: todayDetail.translatedTitle,
        detail:todayDetail.translatedContent,
        jsCode,
        ...extra
    }
}

module.exports = {getQuestionDetail}
