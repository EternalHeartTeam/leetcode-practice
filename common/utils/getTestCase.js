const { ListNode, parse, toArray } = require("../structures/ListNode");


/**
 * 获取test case 入参的数据类型
 * @param {string} jsCode leetcode的实例函数体
 * @param {string} type 类型，param入参，returns返回值
 * @returns {string[]}
 */
const getDataStructure = (jsCode, type = 'param') => {
    const regexMap = {
        param: /@param\s+{\s*([^}\s]+)\s*}/g,
        return: /@return\s+{\s*([^}\s]+)\s*}/g
    };
    const regex = regexMap[type];
    const paramTypes = [];
    let match;    
    while ((match = regex.exec(jsCode)) !== null) {
      paramTypes.push(match[1]);
    }
    return paramTypes
}



/**
 * test case 需要从两个地方拿到内容
 * 1.详情：拿到默认的几个用例
 * 2.函数名：拿到函数名创建用例函数
 * @param question
 * @returns {string}
 */
function getTestCase(question){
    const detail = question.detail.replaceAll("`","");
    const cases = detail.match(/(<[a-zA-Z]+>)?输入[：|:](<\/[a-zA-Z]+>)?.+\n/g)
        ?.map(str=>`[${str?.replace(/(<[a-zA-Z]+>)?输入[：|:]/gm,"")?.replace(/(<\/[a-zA-Z]+>)?/,"")?.replace("\n","")}]`)
    const expires = detail.match(/(<[a-zA-Z]+>)?输出[：|:](<\/[a-zA-Z]+>)?.+\n/g)
        ?.map(str=>str?.replace(/(<[a-zA-Z]+>)?输出[：|:](<\/[a-zA-Z]+>)?/gm,"")?.replace(/(<\/[a-zA-Z]+>)?/gm,"")?.replace("\n",""))
    const functionName = question.jsCode?.match(/var.+=/g)?.[0]?.replace("var ","")?.replace(" =","");
    return `showLogs(
    ${functionName},
    {
        data: [${cases}],
        structure: ${JSON.stringify(getDataStructure(question.jsCode))},
    },
    {
        data: [${expires}],
        structrue: ${JSON.stringify(getDataStructure(question.jsCode, 'return'))}
    }
)`
}
module.exports = {getTestCase, getDataStructure}
