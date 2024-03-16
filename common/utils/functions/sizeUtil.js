// 千
export const KB = 1024;
// 兆
export const MB = 1024 * KB;
// 吉
export const GB = 1024 * MB;
// 太
export const TB = 1024 * GB;
// 拍
export const PB = 1024 * GB;

/**
 * 获取文件的单位
 * @param size
 * @return {size: number, label: string}
 */
export function getFileSizeUnit(size) {
    if (size < KB) return { size: 1, label: 'B' };
    if (size < MB) return { size: KB, label: 'KB' };
    if (size < GB) return { size: MB, label: 'MB' };
    if (size < TB) return { size: GB, label: 'GB' };
    if (size < PB) return { size: TB, label: 'TB' };

    return { size: PB, label: 'PB' };
}
/**
 * 获取文件的尺寸
 * @param size 文件大小
 * @param precision 小数位
 */
export function getFileSize(size, precision = 2) {
    const fileSizeType = getFileSizeUnit(size);
    return `${(size / fileSizeType.size).toFixed(precision)} ${fileSizeType.label}`;
}
