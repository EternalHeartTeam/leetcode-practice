const v8 = require("v8");
const { getFileSize } = require("./sizeUtil");
const { isSameData } = require("./isSameData");

function withTimeLog(callback, compare) {
    console.time("函数执行用时");
    // 获取函数执行前的内存使用情况
    const startHeapStatsArray = v8.getHeapSpaceStatistics()
    const callVal = callback()
    // 获取函数执行后的内存使用情况
    const endHeapStatsArray = v8.getHeapSpaceStatistics()
    console.log(callVal);
    console.timeEnd("函数执行用时")
    const startHeapStats = startHeapStatsArray.reduce((prev, curr) => prev += curr.space_used_size, 0)
    const endHeapStats = endHeapStatsArray.reduce((prev, curr) => prev += curr.space_used_size, 0)
    // 计算内存使用情况（以字节为单位）
    const heapMemoryUsageInBytes = endHeapStats - startHeapStats
    // 计算内存使用情况
    console.log(`内存占用：${getFileSize(heapMemoryUsageInBytes)}`)

    console.log(`预期值:${JSON.stringify(compare)},${isSameData(callVal, compare) ? "测试通过!" : "测试未通过!"}`)
    console.log('--------------------------')
}

module.exports = { withTimeLog };
