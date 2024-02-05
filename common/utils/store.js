/**
 * 缓存信息 - 读取和写入
 */
import fs from "fs";
import path from "path";
import { __dirname} from '#common/utils/getDirname.js'
const absolutePath = path.resolve(__dirname, '../../common/resources/store.json');
export function readStore(key) {
  const rawData = fs.readFileSync(path.normalize(absolutePath));
  return JSON.parse(rawData)?.[key];
}

export function writeStore(key, value) {
  const raw = fs.readFileSync(path.normalize(absolutePath));
  const json = JSON.parse(raw ?? {});
  fs.writeFileSync(path.normalize(absolutePath), JSON.stringify(Object.assign(json, { [key]: value })));
  console.log(`[store]数据存储成功[${key}]:[${value}]`);
}

