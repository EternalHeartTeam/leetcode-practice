
const {parse, toArray} = require('../structures/ListNode')
const {TreeNode} = require('../structures/TreeNode')
const Node = require('../structures/Node')
/**
 * 
 * @param {Array} params 
 * @param {string[]} structs
 * @param {string} type 
 */
const setDataStructure = (params, structs,type='cases') => {
  
  const paramMap = (param) =>{

    return {
      // 入参map
      cases: {
        ListNode:(param) => parse(param),
        'ListNode[]':(param) => param.map(res => parse(res)),
        TreeNode:(param) => {
         const node = new TreeNode(param);
         return node.parse(param)
        },
        Node: (param) => {
          const node = new Node(param);
          return node.parse(param)
        },
        default: param,

      },
      // 返回值map
      return: {
        ListNode: (param) => toArray(param),
        'ListNode[]':(param) => param.map(res => toArray(res)),
        TreeNode:(param) => {
          const node = new TreeNode(param);
         return node.toArray(param)
         },
         Node: (param) => {
          const node = new Node(param);
          return node.toArray(param)
         },
        default: param => param,

      }
    }  
  }
  return params.map((param, index) => {
    const struct = structs[index];
    const map = paramMap(param)[type];
    return  map[struct] ?  map[struct](param) : map['default'](param) 
  })
}

module.exports = {
  setDataStructure
}