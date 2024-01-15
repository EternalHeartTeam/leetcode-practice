const { readStore, writeStore} = require("../utils/store");
const { temExe } = require("../utils/temExe");
/**
 * 检查今天的题目
 */
const questionInfo = readStore("today-question-info")
// const today = 2645;
console.log(`今日题目: ${questionInfo.id}.${questionInfo.title}`);
temExe('node ./src/{0}/index.js', questionInfo.id)
    .then(res => console.log(`${res}`))
    .catch(e => console.log("执行报错: ", e));
