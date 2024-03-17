import v8 from 'node:v8';
import { Table } from 'console-table-printer';
import { getFileSize } from '../functions/sizeUtil.js';
import { isSameData } from '../functions/isSameData.js';
import { setDataStructure } from './parseStructure.js';

/**
 * 执行并输出时间和内存
 * @param fnName
 * @param param 传入数组 全部通过解构来做
 * @param compare
 * @param compareStruct
 * @returns {{预期结果: string, 执行结果: string, 内存占用: string, 测试结果: (string), 执行用时: string}}
 */
export function parseLog(fnName, param, compare, compareStruct) {
    // 记录开始时间
    const startTime = performance.now();
    // 获取函数执行前的内存使用情况
    const startHeapStatsArray = v8.getHeapSpaceStatistics();
    const callVal = fnName(...param);
    const [parsedCompareArr] = setDataStructure([callVal], compareStruct, 'return');
    // 获取函数执行后的内存使用情况
    const endHeapStatsArray = v8.getHeapSpaceStatistics();
    // 记录结束时间
    const endTime = performance.now();
    const startHeapStats = startHeapStatsArray.reduce((prev, curr) => (prev += curr.space_used_size), 0);
    const endHeapStats = endHeapStatsArray.reduce((prev, curr) => (prev += curr.space_used_size), 0);

    return {
        测试结果: isSameData(parsedCompareArr, compare) ? '通过' : '未通过',
        预期结果: JSON.stringify(compare),
        执行结果: JSON.stringify(parsedCompareArr),
        执行用时: `${Number(endTime - startTime).toFixed(4)}ms`,
        内存占用: getFileSize(endHeapStats - startHeapStats)
    };
}

export function showLogs(fnName, paramMap, compareMap) {
    const logsItems = [];
    const { data: paramArr, structure: paramStruct } = paramMap;
    const { data: compareArr, structure: compareStruct } = compareMap;

    paramArr.forEach((param, index) => {
        const parsedParma = setDataStructure(param, paramStruct);
        const logItem = parseLog(fnName, parsedParma, compareArr[index], compareStruct);
        logsItems.push(logItem);
    });

    const logTable = new Table({
        columns: [
            { name: '测试结果', title: '测试结果', alignment: 'center', maxLen: 10 },
            { name: '预期结果', title: '预期结果', alignment: 'center', maxLen: 40 },
            { name: '执行结果', title: '执行结果', alignment: 'center', maxLen: 40 },
            { name: '执行用时', title: '执行用时', alignment: 'center', maxLen: 10 },
            { name: '内存占用', title: '内存占用', alignment: 'center', maxLen: 10 }
        ]
    });
    logsItems.forEach((item) => {
        for (const key in item) {
            if (key === '预期结果' || key === '执行结果') item[key] = item[key]?.length >= 40 ? `${item[key].slice(0, 37)}...` : item[key];
        }

        logTable.addRow(item, {
            color: item['测试结果'] === '通过' ? 'green' : 'red'
        });
    });
    logTable.printTable();
}
