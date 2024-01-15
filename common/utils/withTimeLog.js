const v8 = require("v8");
const { getFileSize } = require("./sizeUtil");
const { isSameData } = require("./isSameData");

function withTimeLog(callback, compare) {
    // 获取函数执行前的内存使用情况
    const startHeapStats = v8.getHeapStatistics();
    console.time("函数执行用时");
    const callVal = callback()
    // 获取函数执行后的内存使用情况
    const endHeapStats = v8.getHeapStatistics();
    console.log(callVal);
    console.timeEnd("函数执行用时")

    // console.log('\n', {
    //     '当前堆内存的使用量': startHeapStats.used_heap_size,
    //     '在程序执行过程中达到的内存峰值': startHeapStats.peak_malloced_memory,
    //     '衡量全局对象句柄的内存使用量': startHeapStats.used_global_handles_size
    // }, '\n', {
    //     '当前堆内存的使用量': endHeapStats.used_heap_size,
    //     '在程序执行过程中达到的内存峰值': endHeapStats.peak_malloced_memory,
    //     '衡量全局对象句柄的内存使用量': endHeapStats.used_global_handles_size
    // })

    // 计算内存使用情况（以字节为单位）
    const heapMemoryUsageInBytes = endHeapStats.used_heap_size - startHeapStats.used_heap_size;
    // 计算内存使用情况
    console.log(`内存占用：${getFileSize(heapMemoryUsageInBytes)}`)
    // const memoryUsagePercentage = (heapMemoryUsageInBytes / endHeapStats.total_available_size) * 100;
    // console.log(`内存占用率：${memoryUsagePercentage}`)
    
    console.log(`预期值:${JSON.stringify(compare)},${isSameData(callVal,compare)?"测试通过!":"测试未通过!"}`)
    console.log('--------------------------')
}

module.exports = { withTimeLog };
