const { createQuestion } = require("../utils/createQuestion");
const {getQuestion} = require("../utils/getQuestionToday");
const {fulfillQuestion} = require("../utils/fulfillQuestion");
const { writeStore} = require("../utils/store");
const {getQuestionById} = require("../utils/getQuestionById");
const {getRandomId} = require("../utils/getRandomId");
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
        getRandomId().then(id=>{
            getQuestionById(id).then(question => {
                const random = `${question.id}.${question.enName}`;
                writeStore("random-question-info",question);
                createQuestion(random).then((filePath) => {
                    fulfillQuestion(filePath, question);
                })
            })
        })
        break;
    case "-i":
        const id = args[1];
        if(id===undefined) {
            console.warn("请指定对应的编号!")
            return;
        }
        console.log(`获取指定编号[${id}]的题目...`)
        getQuestionById(id).then(question => {
            const specified = `${question.id}.${question.enName}`;
            writeStore("specified-question-info",question);
            createQuestion(specified).then((filePath) => {
                fulfillQuestion(filePath, question);
            })
        })
        break;
    case "-t":
    default:
        console.log("开始获取今日题目")
        // 获取问题的全部信息
        getQuestion().then(question => {
            const today = `${question.id}.${question.enName}`;
            createQuestion(today).then((filePath) => {
                fulfillQuestion(filePath, question);
            })
        })
        break;
}

