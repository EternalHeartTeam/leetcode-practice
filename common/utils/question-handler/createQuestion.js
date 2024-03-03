import fs from "fs";
import path from "path";
import {fulfillQuestion} from "#common/utils/question-handler/fulfillQuestion.js";
import {template} from "#resources/template/template.js";
import {getQuestionFileExtension} from "#common/utils/question-handler/questionLanguage.js";

/**
 * 创建问题
 * @param question 问题对象
 * @param questionDir 问题要创建的目录 截止到名字
 * @returns {Promise<unknown>}
 */
export const createQuestion = (question, questionDir) => {
    return new Promise(resolve => {
        let filePath = path.normalize(path.join(questionDir, `question${getQuestionFileExtension(question.lang)}`));
        if (fs.existsSync(filePath)) {
            resolve(false);
        } else {
            createQuestionFile(questionDir, filePath, question).then(path => resolve(path)).catch(e => resolve(false));
        }
    })
}
export const createQuestionFile = (questionDir, questionFilePath, question) => {
    return new Promise((resolve, reject) => {
        try {
            fs.mkdir(questionDir, {recursive: true}, () => {
                fs.writeFile(questionFilePath, template,null,()=>{
                    fulfillQuestion(questionFilePath, question).then(()=>resolve(questionFilePath))
                });
            });
        } catch (e) {
            reject(e);
        }
    })
}
