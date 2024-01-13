/**
 * 调用此函数直接获取今日的题目 并生成项目
 * 接受一个参数 如果没传入 那么会用题目的编号作为名字
 */

const { getQuestion } = require("../utils/getQuestion");
const { createQuestion } = require("../utils/createQuestion");
const { fulfillQuestion } = require("../utils/fulfillQuestion");
const { readStore } = require("../utils/store");
const args = process.argv.slice(2);
// 获取问题的全部信息
getQuestion().then(question => {
    console.log("[getQuestion]", question)
    const projectName = args[0] ?? question.id;// 传入 或者没传入 默认值为信息的编号
    // 缓存今日tag
    const todayQuestionInfo = readStore("today-question-info")
    createQuestion(todayQuestionInfo.id).then((filePath) => {
        fulfillQuestion(filePath, question);
    })
})

