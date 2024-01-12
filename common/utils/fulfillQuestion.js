const fs = require("fs");
const {removeDomTags} = require("./removeDomTags");
/**
 * 填充模板文件
 * @param questionPath
 * @param question
 */
const fulfillQuestion = (questionPath,question)=>{
    // 开始填充内容
    fs.readFile(questionPath, 'utf8', function(err, data) {
        if (err) throw err;
        // 修改文件内容
        // todo 替换函数体 和 测试用例
        data = data.replace('@题目', question.title)
            .replace("@描述",removeDomTags(question.detail)
            .replace(/\n+/g,"\n")
            .replaceAll("\n","\n * "));
        fs.writeFile(questionPath, data, function(err) {
            if (err) throw err;
            console.log(`今日题目[${question.title}]已完成填充`);
        });
    });
}
module.exports = { fulfillQuestion}
