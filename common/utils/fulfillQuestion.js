const fs = require("fs");
const { removeDomTags } = require("./removeDomTags");
const {getTestCase} = require("./getTestCase");
const {getQuestionUrl} = require("./getQuestionUrl");
/**
 * 填充模板文件
 * @param questionPath
 * @param question
 */
const fulfillQuestion = (questionPath, question) => {
    // 开始填充内容
    fs.readFile(questionPath, 'utf8', function (err, data) {
        if (err) throw err;
        // 修改文件内容
        data = data.replace('@题目', `${question.id}.${question.title} [${question.date}]`)
            .replace("@描述", removeDomTags(question.detail)
            .replace("@url",question.url)
            .replace(/\n+/g, "\n")
            .replaceAll("\n", "\n * "))
            .replace("//@Function", question.jsCode)
            .replace("//@TestCase",getTestCase(question))
            .replace("@url",getQuestionUrl(question.enName))
        ;
        fs.writeFile(questionPath, data, function (err) {
            if (err) throw err;
            console.log(`[fulfillQuestion]题目[${question.id}][${question.title}]已完成填充.`);
        });
    });
}
module.exports = { fulfillQuestion }
