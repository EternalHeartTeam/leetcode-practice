const {getHeapStatistics} = require("v8");
const {getFileSize} = require("./sizeUtil");

function withTimeLog(callback) {
    const startHeapStats = getHeapStatistics();
    console.time("函数执行用时");
    console.log(callback());
    console.timeEnd("函数执行用时")
    const endHeapStats = getHeapStatistics();
    const memoryUsed = endHeapStats.total_heap_size - startHeapStats.total_heap_size;
    console.log(`内存占用：${getFileSize(memoryUsed)}`)
}

module.exports = {withTimeLog};