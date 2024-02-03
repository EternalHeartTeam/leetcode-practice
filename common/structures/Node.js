class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
  parse(edges) {
    const nodeMap = new Map();
  
    // 创建节点
    const getNode = (val) => {
      if (!nodeMap.has(val)) {
        const newNode = new Node(val);
        nodeMap.set(val, newNode);
      }
      return nodeMap.get(val);
    };
  
    // 连接节点
    edges.forEach((neighbors,index) => {
      let val = index + 1;
      const currentNode = getNode(val);
      neighbors.forEach(neighborVal => {
        const neighborNode = getNode(neighborVal);
        currentNode.neighbors.push(neighborNode);
      });
    });
  
    return nodeMap.size > 0 ? nodeMap.values().next().value : null;
  }
  toArray(node) {
    if (!node) {
      return [];
    }
  
    const visited = new Set();
    const result = [];
  
    const dfs = (currentNode) => {
      if (visited.has(currentNode.val)) {
        return;
      }
     const {neighbors, val} = currentNode
      visited.add(val);
      result.push(neighbors.map(res=> res.val));
  
      for (const neighbor of currentNode.neighbors) {
        dfs(neighbor);
      }
    };
  
    dfs(node);
  
    return result;
  }
  

}
module.exports = Node;