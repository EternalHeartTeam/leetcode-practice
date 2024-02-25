import {readdirSync} from "fs";

/**
 * 根据指定的目录和文件名 给出存在的数量
 * @param dir
 * @param name
 * @returns {number}
 */
export function getCountBySameName(dir, name) {
  return readdirSync(dir).filter((filename) => filename.includes(name)).length;
}