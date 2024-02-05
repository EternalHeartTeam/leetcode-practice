import {getDataStructure} from "./parseStructure.js";
import {removeDomTags} from "./removeDomTags.js";

/**
 * test case 需要从两个地方拿到内容
 * 1.详情：拿到默认的几个用例
 * 2.函数名：拿到函数名创建用例函数
 * @param question
 * @returns {string}
 */
export function getTestCase(question) {
    // 完整的一条语句的reg
    const inputReg = /(<[a-zA-Z]+>)?输入[：|:](<\/[a-zA-Z]+>)?.+\n/g;
    const inputStartReg = /(<[a-zA-Z]+>)?输入[：|:]/gm;
    // 输出的reg
    const outputReg = /(<[a-zA-Z]+>)?输出[：|:](<\/[a-zA-Z]+>)?.+\n/g;
    const outputStartReg = /(<[a-zA-Z]+>)?输出[：|:]/gm;
    //结尾
    const endReg = /(<\/[a-zA-Z]+>)?/gm;

    const detail = question.detail.replaceAll('`', '');
    const cases = detail.match(inputReg)
        ?.map((str) => `[${removeDomTags(str?.replace(inputStartReg, '')?.replace(endReg, '')?.replace('\n', '').replace(/[a-zA-Z]+ =/g,""))}]`);
    const expires = detail.match(outputReg)
        ?.map((str) => removeDomTags(str?.replace(outputStartReg, '')?.replace(endReg, '')?.replace('\n', '').replace(/[a-zA-Z]+ =/g,"")));
    const functionName = question.jsCode?.match(/(var|let|const).+=/g)?.[0]?.replace(/((var|let|const)|=)\s?/gm, '').trim();
    return `showLogs(
    ${functionName},
    {
        data: [${cases}],
        structure: ${JSON.stringify(getDataStructure(question.jsCode))},
    },
    {
        data: [${expires}],
        structure: ${JSON.stringify(getDataStructure(question.jsCode, 'return'))}
    }
)`;
}
