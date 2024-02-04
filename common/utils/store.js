/**
 * 缓存信息 - 读取和写入
 */
const fs = require('fs');
const path = require('path');

function readStore(key) {
  const rawData = fs.readFileSync(path.normalize('common/resources/store.json'));
  return JSON.parse(rawData)?.[key];
}

function writeStore(key, value) {
  const raw = fs.readFileSync(path.normalize('common/resources/store.json'));
  const json = JSON.parse(raw ?? {});
  fs.writeFileSync(path.normalize('common/resources/store.json'), JSON.stringify(Object.assign(json, { [key]: value })));
  console.log(`[store]数据存储成功[${key}]:[${value}]`);
}

module.exports = { readStore, writeStore };
