
const { getCodeDetailJson } = require('../resources/codeDetailJson')
const { readStore } = require("../utils/store");
const { fulfillQuestion } = require("../utils/fulfillQuestion");
const path = require('path')


const todayQuestionInfo = readStore('today-question-info')
const todayQuestionZhName = todayQuestionInfo.title
const todayQuestionEnName = todayQuestionInfo.enName
const todayQuestionId = todayQuestionInfo.id

fetch("https://leetcode.cn/graphql/", getCodeDetailJson(todayQuestionEnName)).then((res => res.json())).then(res => {
  const questionCodeDetail = res.data.question.codeSnippets.filter(item => item.lang === "JavaScript");
  const jsCode = questionCodeDetail[0].code
  fulfillQuestion(path.resolve(__dirname, `../../src/${todayQuestionId}/index.js`), { title: todayQuestionZhName, detail: '', function: JSON.stringify(jsCode)})
})

