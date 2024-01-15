/**
 * 执行脚本
 */
const { temExe } = require('../utils/temExe');
const {readStore} = require("../utils/store");
const args = process.argv.slice(2);
let name;
switch (args[0]) {
    case "-r":
        console.log("读取上一个随机题目...");
        name = readStore("random-id")
        break;
    case "-i":
        name = args[1];
        if(name===undefined) {
            console.warn("请指定对应的编号进行检查!")
            return;
        }
        break;
    case "-t":
    default:
        const question = readStore("today-question-info")
        name = `${question.id}.${question.enName}`;
        console.log(`[leet-check]检测题目:${name}`)
        break;
}
temExe('node ./src/{0}/index.js',name)
    .then(res => console.log(`执行结果:\n${res}`))
    .catch(e => console.log("执行报错: ", e));
