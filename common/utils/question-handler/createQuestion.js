import fs from "fs";
import path from "path";
import {fulfillQuestion} from "#common/utils/question-handler/fulfillQuestion.js";

export const sourceFilePath = path.normalize('resources/template/template.js');
export const createQuestion = (question, questionDir) => {
    return new Promise(resolve => {
        let filePath = path.normalize(path.join(questionDir, 'index.js'));
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
                // 复制文件
                fs.copyFile(sourceFilePath, questionFilePath, 0, () => {
                    fulfillQuestion(questionFilePath, question)
                    resolve(questionFilePath)
                });
            });
        } catch (e) {
            reject(e);
        }
    })
}
