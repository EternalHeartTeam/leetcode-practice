import {existsSync, mkdirSync, readdirSync} from "fs";
import {normalize} from "path";
import {getQuestionListJson} from "#resources/headers/questionListJson.js";

/**
 * todo 需要先获取全部题目列表 需要处理随机的问题
 * @returns {*[]}
 */
export async function getAllIds() {
  const total = await getCount();
  const randomSkip = total;
  const res = await fetch('https://leetcode.cn/graphql/', getQuestionListJson(0)).then(((res) => res.json()));
  return res?.data?.problemsetQuestionList?.questions?.map((q) => q.frontendQuestionId);
}
/**
 * 获取总数
 * @returns {Promise<any>}
 */
export async function getCount() {
  return fetch('https://leetcode.cn/graphql/', getQuestionListJson(0)).then(((res) => res.json())).then((res) => res?.data?.problemsetQuestionList?.total);
}
/**
 * 读取本地存在的所有题目 并随机题目
 */
export async function getRandomId() {
  const parse = (name) => name.replace(/\.[a-zA-Z0-9-]+$/i, '');
  // src 目录
  const src = normalize('./src/');
  // 不存在就创建
  existsSync(src) || mkdirSync(src);
  // 所有本地题目
  const allLocalIds = readdirSync(src).map((o) => parse(o));
  const allIds = await getAllIds();
  const filtered = allIds.filter((o) => !allLocalIds.includes(o));
  return filtered[random(filtered.length)];
}
/**
 * 获取长度内的随机数组下标
 * @param len 默认值10
 * @returns {number}
 */
export function random(len = 10) {
  return Math.trunc(Math.random() * len % len);
}
