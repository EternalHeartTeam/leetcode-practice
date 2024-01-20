const {getJSCode} = require("./getJSCode");
const {getQuestionDetailJson} = require("../resources/questionDetailJson");
async function getQuestionDetail(slug,extra){
    // 标题的英文字符串
    const questionDetail = await fetch("https://leetcode.cn/graphql/", getQuestionDetailJson(slug)).then((res => res.json()));
    const detail = questionDetail.data.question;
    const jsCode = await getJSCode(slug)
    return {
        enName: slug,
        title: detail.translatedTitle,
        detail:detail.translatedContent,
        ...jsCode,
        ...extra
    }
}

module.exports = {getQuestionDetail}
