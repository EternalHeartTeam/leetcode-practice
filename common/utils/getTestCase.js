/**
 * test case 需要从两个地方拿到内容
 * 1.详情：拿到默认的几个用例
 * 2.函数名：拿到函数名创建用例函数
 * @param question
 * @returns {string}
 */
function getTestCase(question){
    const cases = question.detail.match(/<strong>输入：<\/strong>.+\n/g).map(str=>str.replaceAll("<strong>输入：","").replaceAll("</strong>","").replace("\n",""))
    const expires = question.detail.match(/<strong>输出：<\/strong>.+\n/g).map(str=>str.replaceAll("<strong>输出：</strong>","").replace("\n",""))
    const functionName = question.jsCode.match(/var.+=/g)[0].replace("var ","").replace(" =","");
    return `showLogs(${functionName}, [${cases}], [${expires}])`
}
module.exports = {getTestCase}
