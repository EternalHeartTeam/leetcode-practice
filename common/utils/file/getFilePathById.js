import fs from 'node:fs';

/**
 * 根据id获取文件的具体路径
 * @param id
 * @param baseDir
 * @returns {string|undefined|string[]}
 */
export function getFilePathById(id, baseDir = process.cwd()) {
    const dir = fs.readdirSync(baseDir);
    const files = dir.filter((o) => o.startsWith(`${id}.`));
    if (files.length > 1) return files;
    return files?.[0];
}
