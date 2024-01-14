const { getHeapStatistics } = require("v8");
const { getFileSize } = require("./sizeUtil");
const {isSameData} = require("./isSameData");

function withTimeLog(callback,compare) {
    const startHeapStats = getHeapStatistics();
    console.time("函数执行用时");
    const callVal = callback()
    console.log(callVal);
    console.timeEnd("函数执行用时")
    const endHeapStats = getHeapStatistics();
    const memoryUsed = endHeapStats.total_heap_size - startHeapStats.total_heap_size;
    console.log(`内存占用：${getFileSize(memoryUsed)}`)
    console.log(`预期值:${JSON.stringify(compare)},${isSameData(callVal,compare)?"测试通过!":"测试未通过!"}`)
}

module.exports = { withTimeLog };
