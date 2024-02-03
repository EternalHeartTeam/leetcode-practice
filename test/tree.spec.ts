import {test, expect, describe} from 'vitest';
const TreeNode = require('../common/structures/TreeNode');
const mockTree = [1, 2, 3];
const mockTree2 = [1,null, 2]
test('测试树', ()=>{
 const treeNode = new TreeNode;
  const node = treeNode.parse(mockTree);
  const result = treeNode.toArray(node)
  
  const node2 = treeNode.parse(mockTree2);
  const result2 = treeNode.toArray(node2);
  expect(result2).toEqual(mockTree2);
  expect(result).toEqual(mockTree);

})
