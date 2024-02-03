import { test, expect, describe } from 'vitest';
const Node = require('../common/structures/Node');

const graphArray1 = [[2, 4], [1, 3], [2, 4], [1, 3]];
const graphArray2 = [[]];
const graphArray3 = [];
const graphArray4 = [[2], [1]];
const graphArray5 = [[2, 5], [1, 3, 5], [2, 4], [3, 5], [1, 2, 4]];
const graphArray6 = [[2, 5], [1, 3], [2, 4], [3, 5], [4, 1]];
const graphArray7 = [[2,4],[1,3],[2,4],[3,1]];
const graphArray8 = [[2,3,4,5],[1,3,4],[1,2],[1,2],[1]];
const max = 9;


test('测试无向连通图', () => {
  
  for(let i = 1;i< max;i++) {
    const currentArray = 'graphArray' + [i];
    const graph = Node.parse(eval(currentArray));
    expect(eval(currentArray)).toEqual(Node.toArray(graph))

  }

})