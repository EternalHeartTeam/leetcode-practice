//千
const KB = 1024;
//兆
const MB = 1024 * KB;
//吉
const GB = 1024 * MB;
//太
const TB = 1024 * GB;
//拍
const PB = 1024 * GB;
/**
 * 获取文件的尺寸
 * @param size 文件大小
 * @param precision 小数位
 */
function getFileSize(size, precision = 2) {
    const fileSizeType = getFileSizeUnit(size);
    return `${(size / fileSizeType.size).toFixed(precision)} ${fileSizeType.label}`;
}

/**
 * 获取文件的单位
 * @param size
 * @return {size: number, label: string}
 */
function getFileSizeUnit(size) {
    if (size < KB) {
        return { size: 1, label: 'B' };
    } else if (size < MB) {
        return { size: KB, label: 'KB' };
    } else if (size < GB) {
        return { size: MB, label: 'MB' };
    } else if (size < TB) {
        return { size: GB, label: 'GB' };
    } else if (size < PB) {
        return { size: TB, label: 'TB' };
    } else {
        return { size: PB, label: 'PB' };
    }
}

module.exports = {getFileSize,getFileSizeUnit}