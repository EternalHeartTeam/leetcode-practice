/**
 * 缓存信息 - 读取和写入
 */
import fs from "fs";
import path from "path";

export function readStore(key) {
  const rawData = fs.readFileSync(path.normalize('common/resources/store.json'));
  return JSON.parse(rawData)?.[key];
}

export function writeStore(key, value) {
  const raw = fs.readFileSync(path.normalize('common/resources/store.json'));
  const json = JSON.parse(raw ?? {});
  fs.writeFileSync(path.normalize('common/resources/store.json'), JSON.stringify(Object.assign(json, { [key]: value })));
  console.log(`[store]数据存储成功[${key}]:[${value}]`);
}

