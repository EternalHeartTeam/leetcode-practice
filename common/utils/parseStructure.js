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

module.exports = {
  setDataStructure,
};
