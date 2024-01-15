const { readStore, writeStore} = require("../utils/store");
const { temExe } = require("../utils/temExe");
/**
 * 检查今天的题目
 */
const today = readStore("today-tag");
// const today = 2645;
console.log("今日的题目编号/名称为:" + today);
temExe('node ./src/{0}/index.js', today)
    .then(res => console.log(`执行结果:\n${res}`))
    .catch(e => console.log("执行报错: ", e));
