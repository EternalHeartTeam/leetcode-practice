const { getHeapStatistics } = require("v8");
const { getFileSize } = require("./sizeUtil");
const {isSameData} = require("./isSameData");

function withTimeLog(callback,compare) {
    // 获取函数执行前的内存使用情况
    const startMemUsage = process.memoryUsage().heapUsed
    console.time("函数执行用时");
    const callVal = callback()
    console.log(callVal);
    console.timeEnd("函数执行用时")
    // 获取函数执行后的内存使用情况
    const endMemUsage = process.memoryUsage().heapUsed;
    // 计算内存使用率（以字节为单位）
    const memoryUsageInBytes = endMemUsage - startMemUsage;
    console.log(`内存占用：${getFileSize(memoryUsageInBytes)}`)
    console.log(`预期值:${JSON.stringify(compare)},${isSameData(callVal,compare)?"测试通过!":"测试未通过!"}`)
    console.log('--------------------------')
}

module.exports = { withTimeLog };
