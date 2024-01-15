const v8 = require("v8");
const { getFileSize } = require("./sizeUtil");
const { isSameData } = require("./isSameData");

function withTimeLog(callback, compare) {
    // 记录开始时间
    const startTime = performance.now();
    // 获取函数执行前的内存使用情况
    const startHeapStatsArray = v8.getHeapSpaceStatistics()
    const callVal = callback()
    // 获取函数执行后的内存使用情况
    const endHeapStatsArray = v8.getHeapSpaceStatistics()
    // 记录结束时间
    const endTime = performance.now();
    const startHeapStats = startHeapStatsArray.reduce((prev, curr) => prev += curr.space_used_size, 0)
    const endHeapStats = endHeapStatsArray.reduce((prev, curr) => prev += curr.space_used_size, 0)

    console.table({
        '函数执行结果': JSON.stringify(callVal),
        '函数执行用时': Number(endTime - startTime).toFixed(4) + 'ms',
        '内存占用': getFileSize(endHeapStats - startHeapStats),
        [`预期值${JSON.stringify(compare)}`]: isSameData(callVal, compare) ? "测试通过!" : "测试未通过!"
    })
    console.log('--------------------------')
}

module.exports = { withTimeLog };
