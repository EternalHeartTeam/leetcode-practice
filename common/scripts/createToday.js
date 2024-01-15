/**
 * 调用此函数直接获取今日的题目 并生成项目
 * 接受一个参数 如果没传入 那么会用题目的编号作为名字
 */

const { getQuestion } = require("../utils/getQuestion");
const { createQuestion } = require("../utils/createQuestion");
const { fulfillQuestion } = require("../utils/fulfillQuestion");
const { writeStore, readStore} = require("../utils/store");
// 获取问题的全部信息
getQuestion().then(question => {
    // 缓存今日tag
    const today = `${question.id}.${question.title}`;
    createQuestion(today).then((filePath) => {
        fulfillQuestion(filePath, question);
    })
})

