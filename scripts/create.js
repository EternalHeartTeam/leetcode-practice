import {createQuestion} from "#common/utils/question-handler/createQuestion.js";
import {getQuestionToday} from "#common/utils/question-getter/getQuestionToday.js";
import {fulfillQuestion} from "#common/utils/question-handler/fulfillQuestion.js";
import {writeStore} from "#common/utils/store/store.js";
import {getQuestionById} from "#common/utils/question-getter/getQuestionById.js";
import {getRandomId} from "#common/utils/question-handler/getRandomId.js";
import {setQuestion} from "#common/utils/store/store-realm.js";

/**
 * leet-create [-t|-r|-i [id]]
 * 默认参数 -t
 * -t today 今日题目
 * -r Random 随机题目
 * -i id 指定题目id
 * 工作区为 根目录
 */
export const create = () => {
    const args = process.argv.slice(2);
    switch (args[0]) {
        case "-r":
            getRandomId().then(id => {
                getQuestionById(id).then(question => {
                    const random = `${question.id}.${question.slug}`;
                    setQuestion("random", question);
                    createQuestion(random).then((filePath) => {
                        fulfillQuestion(filePath, question);
                    })
                })
            })
            break;
        case "-i":
            const id = args[1];
            if (id === undefined) {
                console.warn("请指定对应的编号!")
            }else{
                console.log(`获取指定编号[${id}]的题目...`)
                getQuestionById(id).then(question => {
                    const specified = `${question.id}.${question.slug}`;
                    setQuestion("identity", question);
                    createQuestion(specified).then((filePath) => {
                        fulfillQuestion(filePath, question);
                    })
                })
            }
            break;
        case "-t":
        default:
            console.log("开始获取今日题目")
            // 获取问题的全部信息
            getQuestionToday().then(question => {
                const today = `${question.id}.${question.slug}`;
                setQuestion("today", question);
                createQuestion(today).then((filePath) => {
                    fulfillQuestion(filePath, question);
                })
            })
            break;
    }
    
    
}
create()
 
