/**
 * test case 需要从两个地方拿到内容
 * 1.详情：拿到默认的几个用例
 * 2.函数名：拿到函数名创建用例函数
 * @param question
 * @returns {string}
 */
function getTestCase(question){
    console.log(question)
    const detail = question.detail.replaceAll("`","");
    const cases = detail.match(/(<[a-zA-Z]+>)?输入[：|:](<\/[a-zA-Z]+>)?.+\n/g)
        ?.map(str=>`[${str?.replace(/(<[a-zA-Z]+>)?输入[：|:]/gm,"")?.replace(/(<\/[a-zA-Z]+>)?/,"")?.replace("\n","")}]`)
    const expires = detail.match(/(<[a-zA-Z]+>)?输出[：|:](<\/[a-zA-Z]+>)?.+\n/g)
        ?.map(str=>str?.replace(/(<[a-zA-Z]+>)?输出[：|:](<\/[a-zA-Z]+>)?/gm,"")?.replace(/(<\/[a-zA-Z]+>)?/gm,"")?.replace("\n",""))
    const functionName = question.jsCode?.match(/var.+=/g)?.[0]?.replace("var ","")?.replace(" =","");
    return `showLogs(
    ${functionName},
    [${cases}],
    [${expires}]
)`
}
module.exports = {getTestCase}
