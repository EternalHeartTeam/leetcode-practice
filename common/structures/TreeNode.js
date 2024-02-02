class TreeNode {
  constructor(val, left, right) {
    this.left = null;
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
  parse(arr) {
    if(arr.length === 0) return null
    let root = new TreeNode(arr[0])
    let queue = [root]
    for(let i = 1; i < arr.length; i += 2)
    {
      let node = queue.shift()
      if(arr[i] !== null)
      {
        node.left = new TreeNode(arr[i])
        queue.push(node.left)
      }
      if(arr[i+1] !== null)
      {
        node.right = new TreeNode(arr[i+1])
        queue.push(node.right)
      }
    }
    return root
  }
  toArray(treeNode) {
    const result = [];
    if (!treeNode) {
      return result;
    }

    const queue = [treeNode];

    while (queue.length > 0) {
      const node = queue.shift();
      if (node) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push(null);
      }
    }

    while (result.length > 0 && result[result.length - 1] === null) {
      result.pop();
    }

    return result;
  }
}
module.exports = {TreeNode}
