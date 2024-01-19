const { createQuestion } = require("../utils/createQuestion");
const {getQuestion} = require("../utils/getTodayQuestion");
const {fulfillQuestion} = require("../utils/fulfillQuestion");
const {readStore, writeStore} = require("../utils/store");
const {getQuestionById} = require("../utils/getQuestionById");
/**
 * leet-create [-t|-r|-i [id]]
 * 默认参数 -t
 * -t today 今日题目
 * -r Random 随机题目
 * -i id 指定题目id
 * 工作区为 根目录
 */
const args = process.argv.slice(2);
switch (args[0]) {
    case "-r":
        console.log("开始随机题目...");

        // todo 随机题目 写入缓存 题号
        writeStore("random-id",1314)
        break;
    case "-i":
        const id = args[1];
        if(id===undefined) {
            console.warn("请指定对应的编号!")
            return;
        }
        console.log(`获取指定编号[${id}]的题目...`)
        getQuestionById(id).then(question => {
            // 缓存今日tag
            const today = `${question.id}.${question.enName}`;
            createQuestion(today).then((filePath) => {
                fulfillQuestion(filePath, question);
            })
        })
        // const newPath = args[0];
        // createQuestion(newPath)
        break;
    case "-t":
    default:
        console.log("开始获取今日题目")
        // 获取问题的全部信息
        getQuestion().then(question => {
            // 缓存今日tag
            const today = `${question.id}.${question.enName}`;
            createQuestion(today).then((filePath) => {
                fulfillQuestion(filePath, question);
            })
        })
        break;
}

