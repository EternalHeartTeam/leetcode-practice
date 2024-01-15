const v8 = require("v8");
const { getFileSize } = require("./sizeUtil");
const { isSameData } = require("./isSameData");

function withTimeLog(fnName, param, compare) {
    // 记录开始时间
    const startTime = performance.now();
    // 获取函数执行前的内存使用情况
    const startHeapStatsArray = v8.getHeapSpaceStatistics()
    const callVal = fnName(param)
    // 获取函数执行后的内存使用情况
    const endHeapStatsArray = v8.getHeapSpaceStatistics()
    // 记录结束时间
    const endTime = performance.now();
    const startHeapStats = startHeapStatsArray.reduce((prev, curr) => prev += curr.space_used_size, 0)
    const endHeapStats = endHeapStatsArray.reduce((prev, curr) => prev += curr.space_used_size, 0)

    return {
        '测试结果': isSameData(callVal, compare) ? '通过' : '未通过',
        '预期结果': JSON.stringify(compare),
        '执行结果': JSON.stringify(callVal),
        '执行用时': Number(endTime - startTime).toFixed(4) + 'ms',
        '内存占用': getFileSize(endHeapStats - startHeapStats)
    }
}

function showLogs(fnName, paramArr, compareArr) {
    let logsItems = []
    paramArr.forEach((param, index) => {
        const logItem = withTimeLog(fnName, param, compareArr[index])
        logsItems.push(logItem)
    })
    console.table(logsItems)
}

module.exports = { showLogs };
