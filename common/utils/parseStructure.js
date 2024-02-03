const { parse, toArray } = require('../structures/ListNode');
const TreeNode = require('../structures/TreeNode');
const Node = require('../structures/Node');

const paramMap = {
  // 入参map
  cases: {
    ListNode: (_param) => parse(_param),
    'ListNode[]': (param) => param.map((res) => parse(res)),
    TreeNode: (param) => TreeNode.parse(param),
    Node: (param) => Node.parse(param),
    default: (param) => param,

  },
  // 返回值map
  return: {
    ListNode: (param) => toArray(param),
    'ListNode[]': (param) => param.map((res) => toArray(res)),
    TreeNode: (param) => TreeNode.toArray(param),
    Node: (param) => Node.toArray(param),
    default: (param) => param,

  },
};
/**
 *
 * @param {Array} params
 * @param {string[]} structs
 * @param {string} type
 */
const setDataStructure = (params, structs, type = 'cases') => params.map((param, index) => {
  const struct = structs[index];
  const map = paramMap[type];
  return map[struct] ? map[struct](param) : map.default(param);
});

/**
 * 获取test case 入参的数据类型
 * @param {string} jsCode leetcode的实例函数体
 * @param {string} type 类型，param入参，returns返回值
 * @returns {string[]}
 */
const getDataStructure = (jsCode, type = 'param') => {
  const regexMap = {
    param: /@param\s+{\s*([^}\s]+)\s*}/g,
    return: /@return\s+{\s*([^}\s]+)\s*}/g,
  };
  const regex = regexMap[type];
  const paramTypes = [];
  let match;
  while ((match = regex.exec(jsCode)) !== null) {
    paramTypes.push(match[1]);
  }
  return paramTypes;
};
module.exports = {
  setDataStructure, getDataStructure,
};
