import {getDataStructure} from "./parseStructure.js";
import {removeDomTags} from "../functions/removeDomTags.js";
import {DefaultLang} from "#common/constants/question.const.js";

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
    if(question.lang === DefaultLang){
        const functionName = question.code?.match(/(var|let|const).+=/g)?.[0]?.replace(/((var|let|const)|=)\s?/gm, '').trim();
        return `showLogs(\n${functionName},\n{\ndata: [${cases}],\nstructure: ${JSON.stringify(getDataStructure(question.code))},\n},\n{\ndata: [${expires}],\nstructure: ${JSON.stringify(getDataStructure(question.code, 'return'))}\n}\n)`;
    }else{
        // 其他语言无法支持测试 只能提供测试数据
        console.log(cases,expires);
        let showText = `\/* 暂无法支持除JS外的语言测试,提取的一些入参和返回值供自行测试，每一个case中的第一行为入参，第二行为返回值\n`;
        for (let i = 0; i < Math.max(cases.length,expires.length); i++) {
            showText += `case ${i+1}:\n`;
            showText += `${cases?.[i]}\n`??'[参数获取错误]\n';
            showText += `${expires?.[i]}\n`??'[返回值获取错误]\n';
        }
        showText += `\n*\/`
        return showText;
    }
}
